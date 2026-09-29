# earlvlee.com

Plain static site, deployed on Netlify (`netlify.toml`).

- `public/` — hand-written pages (`index.html`, `lists.html`) and images, copied as-is
- `posts/*.md` — blog posts (frontmatter: `title`, `date`, optional `draft: true`)
- `build.js` — renders posts to `dist/blog/<slug>/` and a `/blog/` index; run `npm run build`
