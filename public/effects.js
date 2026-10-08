// Text effects adapted from github.com/earllee/blocks: text scrambles in on load,
// reforms into the next page on navigation, scrambles on link hover, and glyphs
// trail the cursor and fly out of it while scrolling.
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // --- Scramble ---------------------------------------------------------------

  const LOWER = 'abcdefghijklmnopqrstuvwxyz'
  const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const DIGIT = '0123456789'
  const TICK_MS = 30
  const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'])

  const originals = new WeakMap() // text node -> original characters
  const owners = new WeakMap() // text node -> animation allowed to write it

  const pick = (s) => s[(Math.random() * s.length) | 0]

  // Swap letters for letters of the same case so line widths stay roughly stable.
  function randomLike(c) {
    if (c >= 'a' && c <= 'z') return pick(LOWER)
    if (c >= 'A' && c <= 'Z') return pick(UPPER)
    if (c >= '0' && c <= '9') return pick(DIGIT)
    return c
  }

  function textNodes(root, visibleOnly) {
    const nodes = []
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement
        if (!parent || SKIP.has(parent.tagName) || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT
        if (visibleOnly) {
          const r = parent.getBoundingClientRect()
          if (r.bottom < 0 || r.top > innerHeight) return NodeFilter.FILTER_REJECT
        }
        return NodeFilter.FILTER_ACCEPT
      },
    })
    while (walker.nextNode()) nodes.push(walker.currentNode)
    return nodes
  }

  // Characters settle left to right over `duration` ms (plus random `jitter`).
  // In: scrambled -> original. Out: original -> scrambled, and with `hold` the
  // scrambled text keeps churning until the nodes are replaced or reclaimed.
  function scramble(nodes, { duration, jitter, out = false, hold = false }, done) {
    const token = {}
    const items = nodes.map((node) => {
      if (!originals.has(node)) originals.set(node, Array.from(node.nodeValue))
      owners.set(node, token)
      return { node, chars: originals.get(node) }
    })
    const total = items.reduce((n, it) => n + it.chars.length, 0) || 1
    let offset = 0
    for (const it of items) {
      it.settleAt = it.chars.map((_, i) => ((offset + i) / total) * duration + Math.random() * jitter)
      offset += it.chars.length
    }

    const end = duration + jitter
    const start = performance.now()
    let last = -Infinity

    function frame(now) {
      const t = now - start
      const running = t < end || hold
      if (running && now - last < TICK_MS) return requestAnimationFrame(frame)
      last = now
      let live = false
      for (const it of items) {
        if (owners.get(it.node) !== token || !it.node.isConnected) continue
        live = true
        let s = ''
        for (let i = 0; i < it.chars.length; i++) {
          s += t >= it.settleAt[i] !== out ? it.chars[i] : randomLike(it.chars[i])
        }
        it.node.nodeValue = s
      }
      if (t >= end && done) {
        done()
        done = null
      }
      if (running && live) requestAnimationFrame(frame)
    }
    frame(start) // paint the first scrambled state before the browser does
  }

  const intro = () => scramble(textNodes(document.body, true), { duration: 450, jitter: 200 })
  intro()

  // Scrambling a link changes its width, which can slide it out from under a
  // still cursor and back, so re-entering the same link is ignored for a moment.
  const HOVER_COOLDOWN_MS = 800
  let navigating = false
  let hovered = null
  let hoveredAt = 0
  document.addEventListener('mouseover', (e) => {
    const a = e.target.closest && e.target.closest('a[href]')
    if (!a || navigating || a.contains(e.relatedTarget)) return
    const now = performance.now()
    if (a === hovered && now - hoveredAt < HOVER_COOLDOWN_MS) return
    hovered = a
    hoveredAt = now
    scramble(textNodes(a), { duration: 220, jitter: 120 })
  })

  // --- Page transitions -------------------------------------------------------

  // Same-origin pages are fetched and swapped in place, so the current text
  // scrambles straight into the next page's text with no blank load in between.
  // Anything else (other sites, pages with their own scripts) scrambles out and
  // falls back to a normal navigation.
  let navId = 0
  let current = new URL(location.href)

  const samePage = (url) => url.origin === location.origin && url.pathname === location.pathname && url.search === location.search

  async function navigate(url, push) {
    const id = ++navId
    navigating = true
    const scrambled = new Promise((resolve) =>
      scramble(textNodes(document.body, true), { duration: 180, jitter: 80, out: true, hold: true }, resolve))

    let doc, finalUrl
    try {
      if (url.origin !== location.origin) throw new Error('external')
      const res = await fetch(url.href)
      finalUrl = new URL(res.url)
      if (!res.ok || finalUrl.origin !== location.origin || !(res.headers.get('content-type') || '').includes('text/html')) {
        throw new Error('not a page')
      }
      doc = new DOMParser().parseFromString(await res.text(), 'text/html')
      if ([...doc.scripts].some((s) => s.getAttribute('src') !== '/effects.js')) throw new Error('has scripts')
      finalUrl.hash = url.hash
    } catch {
      await scrambled
      if (id === navId) location.assign(url.href)
      return
    }
    await scrambled
    if (id !== navId) return

    history.scrollRestoration = 'manual' // swapped pages restore their own scroll
    if (push) {
      history.replaceState({ scrollY }, '')
      history.pushState(null, '', finalUrl.href)
    }
    current = new URL(location.href)
    document.title = doc.title
    document.head.replaceChildren(...doc.head.childNodes)
    document.body.replaceChildren(...doc.body.childNodes)

    const target = finalUrl.hash && document.getElementById(decodeURIComponent(finalUrl.hash.slice(1)))
    if (target) target.scrollIntoView()
    else scrollTo(0, (!push && history.state && history.state.scrollY) || 0)

    navigating = false
    hovered = null
    intro()
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]')
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return
    const url = new URL(a.href, location.href)
    if (!/^https?:$/.test(url.protocol)) return
    if (url.hash && samePage(url)) return

    e.preventDefault()
    navigate(url, true)
  })

  addEventListener('popstate', () => {
    const url = new URL(location.href)
    const hashOnly = url.pathname === current.pathname && url.search === current.search
    current = url
    if (!hashOnly) navigate(url, false)
  })

  // Back/forward cache restores a page that was scrambled out; scramble it back in.
  addEventListener('pageshow', (e) => {
    if (!e.persisted) return
    navigating = false
    intro()
  })

  // --- Scroll sparks ------------------------------------------------------------

  const CHARS = '.:+-=*#@$&~'
  const BURST_COUNT = 3
  const GRAVITY = 20
  const FRICTION = 0.98
  const THROTTLE_MS = 30
  const FONT = '14px "SF Mono", ui-monospace, Menlo, monospace'

  const sparks = []
  let canvas = null
  let ctx = null
  let sized = false
  let animId = null
  let lastTime = 0
  let lastBurst = 0

  function ensureCanvas() {
    if (!canvas) {
      canvas = document.createElement('canvas')
      canvas.setAttribute('aria-hidden', 'true')
      canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999'
    }
    if (!canvas.isConnected) document.body.appendChild(canvas) // page swaps replace the body
    if (!sized) {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      canvas.width = innerWidth * dpr
      canvas.height = innerHeight * dpr
      canvas.style.width = innerWidth + 'px'
      canvas.style.height = innerHeight + 'px'
      ctx = canvas.getContext('2d')
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      sized = true
    }
    canvas.style.display = ''
  }

  function tick(now) {
    if (sparks.length === 0) {
      animId = null
      canvas.style.display = 'none' // avoid compositing an idle canvas
      return
    }
    const dt = lastTime ? (now - lastTime) / 1000 : 0.016
    lastTime = now

    ctx.clearRect(0, 0, innerWidth, innerHeight)
    ctx.font = FONT
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#999'

    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i]
      s.life -= dt
      if (s.life <= 0) {
        sparks.splice(i, 1)
        continue
      }
      s.vy += GRAVITY * dt
      s.vx *= FRICTION
      s.vy *= FRICTION
      s.x += s.vx * dt
      s.y += s.vy * dt
      ctx.globalAlpha = Math.pow(s.life / s.maxLife, 2) * 0.6
      ctx.fillText(s.char, s.x, s.y)
    }
    ctx.globalAlpha = 1
    animId = requestAnimationFrame(tick)
  }

  function emit(x, y, vx, vy) {
    ensureCanvas()
    const life = 0.6 + Math.random() * 0.2
    sparks.push({ x, y, vx, vy, char: pick(CHARS), life, maxLife: life })
    if (animId === null) {
      lastTime = 0
      animId = requestAnimationFrame(tick)
    }
  }

  addEventListener('wheel', (e) => {
    const now = performance.now()
    if (now - lastBurst < THROTTLE_MS) return
    lastBurst = now
    const dir = e.deltaY > 0 ? -1 : 1
    const speed = Math.min(Math.abs(e.deltaY), 200)
    for (let i = 0; i < BURST_COUNT; i++) {
      emit(e.clientX, e.clientY, (Math.random() - 0.5) * 60, dir * (60 + speed * 0.8 + Math.random() * 40))
    }
  }, { passive: true })

  // Moving the cursor leaves a trail of glyphs that drift back and fall away.
  const TRAIL_SPACING = 14
  let trailX = null
  let trailY = 0
  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return
    if (trailX === null) {
      trailX = e.clientX
      trailY = e.clientY
      return
    }
    const dx = e.clientX - trailX
    const dy = e.clientY - trailY
    const dist = Math.hypot(dx, dy)
    if (dist < TRAIL_SPACING) return
    const steps = Math.min(Math.floor(dist / TRAIL_SPACING), 6)
    for (let i = 1; i <= steps; i++) {
      const t = i / steps
      emit(
        trailX + dx * t,
        trailY + dy * t,
        (-dx / dist) * 20 + (Math.random() - 0.5) * 30,
        (-dy / dist) * 20 + (Math.random() - 0.5) * 30,
      )
    }
    trailX = e.clientX
    trailY = e.clientY
  }, { passive: true })
  document.addEventListener('mouseout', (e) => { if (!e.relatedTarget) trailX = null })

  addEventListener('resize', () => { sized = false })
})()
