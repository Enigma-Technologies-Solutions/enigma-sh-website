// GitHub Pages has no SPA fallback: an unknown path gets 404.html with a 404 status.
// Every URL in public/sitemap.xml gets its own copy of index.html (as `<path>.html`,
// which Pages serves at `<path>` with no trailing-slash redirect), and 404.html is a
// copy too, so React Router renders NotFound for anything else.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const dist = "dist";
const index = join(dist, "index.html");
const sitemap = readFileSync("public/sitemap.xml", "utf8");

for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const path = new URL(loc).pathname.replace(/\/$/, "");
  if (!path) continue;
  const out = join(dist, `${path}.html`);
  mkdirSync(dirname(out), { recursive: true });
  copyFileSync(index, out);
  console.log(`route  ${path} -> ${out}`);
}
copyFileSync(index, join(dist, "404.html"));
