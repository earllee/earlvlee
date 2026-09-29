// Builds dist/: copies public/ as-is, then renders posts/*.md to /blog/<slug>/ and a /blog/ index.
const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const POSTS = path.join(__dirname, "posts");
const OUT = path.join(__dirname, "dist");

const DESCRIPTION = "Earl Lee is a tech entrepreneur and investor. He founded HeadsUp ($8.3M raised) and was the 3rd hire at FiscalNote (NYSE: NOTE).";

const HEAD = (title, url) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${DESCRIPTION}">
    <link rel="canonical" href="https://earlvlee.com${url}">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <style>
        body {
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            max-width: 42rem;
            margin: 0 auto;
            padding: 1.5rem 1rem;
        }
        img { max-width: 100%; height: auto; }
        table { display: block; overflow-x: auto; }
    </style>
</head>
<body>
`;

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function parse(file) {
  const raw = fs.readFileSync(path.join(POSTS, file), "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = {};
  m[1].split("\n").forEach((line) => {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].replace(/^"(.*)"$/, "$1");
  });
  // Old posts wrote headings like "#Title" without a space
  const body = m[2].replace(/^(#{1,6})(?=[^#\s])/gm, "$1 ");
  return { slug: file.replace(/\.md$/, ""), meta, body };
}

function formatDate(iso) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(path.join(__dirname, "public"), OUT, { recursive: true });

const posts = fs.readdirSync(POSTS).filter((f) => f.endsWith(".md")).map(parse)
  .filter((p) => p.meta.draft !== "true")
  .sort((a, b) => b.meta.date.localeCompare(a.meta.date));

for (const p of posts) {
  const dir = path.join(OUT, "blog", p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), HEAD(escape(p.meta.title), `/blog/${p.slug}/`) +
    `    <h1>${escape(p.meta.title)}</h1>
    <p><em>${formatDate(p.meta.date)}</em></p>

${marked.parse(p.body).replace(/<(\/?)h([1-5])>/g, (_, c, n) => `<${c}h${+n + 1}>`)}
    <p><a href="/blog/">← Back to blog</a></p>
</body>
</html>
`);
}

fs.writeFileSync(path.join(OUT, "blog", "index.html"), HEAD("Earl's Blog", "/blog/") +
  `    <h1>Earl's Blog</h1>
    <ul>
${posts.map((p) => `        <li><a href="/blog/${p.slug}/">${escape(p.meta.title)}</a> - ${formatDate(p.meta.date)}</li>`).join("\n")}
    </ul>

    <p><a href="/">← Back to home</a></p>
</body>
</html>
`);

console.log(`Built ${posts.length} posts`);
