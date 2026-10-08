// Text effects adapted from github.com/earllee/blocks: text scrambles in on load,
// scrambles out before navigating, scrambles on link hover, and glyphs fly out
// of the cursor while scrolling.
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
  // In: scrambled -> original. Out: original -> scrambled.
  function scramble(nodes, { duration, jitter, out = false }, done) {
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
      if (t < end && now - last < TICK_MS) return requestAnimationFrame(frame)
      last = now
      for (const it of items) {
        if (owners.get(it.node) !== token) continue
        let s = ''
        for (let i = 0; i < it.chars.length; i++) {
          s += t >= it.settleAt[i] !== out ? it.chars[i] : randomLike(it.chars[i])
        }
        it.node.nodeValue = s
      }
      if (t < end) requestAnimationFrame(frame)
      else if (done) done()
    }
    frame(start) // paint the first scrambled state before the browser does
  }

  const intro = () => scramble(textNodes(document.body, true), { duration: 450, jitter: 200 })
  intro()

  document.addEventListener('mouseover', (e) => {
    const a = e.target.closest && e.target.closest('a[href]')
    if (!a || a.contains(e.relatedTarget)) return
    scramble(textNodes(a), { duration: 220, jitter: 120 })
  })

  let leaving = false
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]')
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return
    const url = new URL(a.href, location.href)
    if (!/^https?:$/.test(url.protocol)) return
    if (url.hash && url.origin + url.pathname + url.search === location.origin + location.pathname + location.search) return

    e.preventDefault()
    if (leaving) return
    leaving = true
    scramble(textNodes(document.body, true), { duration: 180, jitter: 80, out: true }, () => location.assign(url.href))
  })

  // Back/forward cache restores the scrambled-out page; scramble it back in.
  addEventListener('pageshow', (e) => {
    if (!e.persisted) return
    leaving = false
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
      document.body.appendChild(canvas)
    }
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

  addEventListener('wheel', (e) => {
    const now = performance.now()
    if (now - lastBurst < THROTTLE_MS) return
    lastBurst = now
    ensureCanvas()

    const dir = e.deltaY > 0 ? -1 : 1
    const speed = Math.min(Math.abs(e.deltaY), 200)
    for (let i = 0; i < BURST_COUNT; i++) {
      const life = 0.6 + Math.random() * 0.2
      sparks.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 60,
        vy: dir * (60 + speed * 0.8 + Math.random() * 40),
        char: pick(CHARS),
        life,
        maxLife: life,
      })
    }
    if (animId === null) {
      lastTime = 0
      animId = requestAnimationFrame(tick)
    }
  }, { passive: true })

  addEventListener('resize', () => { sized = false })
})()
