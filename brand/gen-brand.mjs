#!/usr/bin/env node
// Raster brand assets for enigma.sh, drawn by headless Chrome from brand/badge.svg and HTML
// so the type is the real type (the same method as sigil.enigma.sh and sanctum.enigma.sh).
// Nothing they write is hand-edited: change this file or gen-mark.py, then run it.
//
//   node brand/gen-brand.mjs [icons] [og]        (default: both)
//
// icons  public/favicon-32.png, favicon-48.png, apple-touch-icon.png, icon-192.png,
//        icon-512.png, and public/favicon.ico (ImageMagick)
// og     public/og.png, the 1200x630 social card
//
// Needs Google Chrome (CHROME=/path to override) and ImageMagick (`magick`) for the .ico.

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");
const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const FONTS = pathToFileURL(join(root, "brand/fonts")).href;

/** Render `html` to a PNG of exactly w x h; `bg` is the RGBA hex Chrome paints first. */
function shot(html, out, w, h, bg = "FFFFFFFF") {
  const dir = mkdtempSync(join(tmpdir(), "ets-brand-"));
  try {
    const page = join(dir, "page.html");
    writeFileSync(page, html);
    execFileSync(
      CHROME,
      ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-sandbox", `--window-size=${w},${h}`,
        `--default-background-color=${bg}`, `--screenshot=${out}`, pathToFileURL(page).href],
      { stdio: "ignore" },
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
  if (!existsSync(out)) throw new Error(`Chrome produced nothing for ${out}`);
}

/** The 3:2 badge at width `w`. */
const badge = (w) =>
  readFileSync(join(root, "brand/badge.svg"), "utf8").replace(/\swidth="60"\s+height="40"/, ` width="${w}" height="${(w * 2) / 3}"`);

function icons() {
  // Tabs: the badge edge to edge on a transparent square, as favicon.svg.
  const tab = (px) =>
    `<!doctype html><style>*{margin:0}html,body{width:${px}px;height:${px}px;background:transparent;display:grid;place-items:center}svg{display:block}</style>${badge(Math.round((px * 60) / 64))}`;
  for (const [name, px] of [["favicon-32.png", 32], ["favicon-48.png", 48]]) shot(tab(px), join(pub, name), px, px, "00000000");
  // Home screens and the manifest: a square is required, so the badge sits on white with
  // its clear space, never squared up itself (styleguide: keep the tile 3:2).
  const app = (px) =>
    `<!doctype html><style>*{margin:0}html,body{width:${px}px;height:${px}px;background:#fff;display:grid;place-items:center}svg{display:block}</style>${badge(Math.round(px * 0.62))}`;
  for (const [name, px] of [["apple-touch-icon.png", 180], ["icon-192.png", 192], ["icon-512.png", 512]]) shot(app(px), join(pub, name), px, px);
  execFileSync("magick", [join(pub, "favicon-32.png"), join(pub, "favicon-48.png"), join(pub, "favicon.ico")]);
}

/** The social card, in the site's light theme: badge, eyebrow, the hero line, the family. */
function og() {
  const html = `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:Inter;font-weight:100 900;src:url(${FONTS}/Inter-var.woff2) format('woff2')}
@font-face{font-family:Poppins;font-weight:800;src:url(${FONTS}/Poppins-800.woff2) format('woff2')}
@font-face{font-family:'Space Mono';font-weight:400;src:url(${FONTS}/SpaceMono-400.woff2) format('woff2')}
*{margin:0;box-sizing:border-box}
html,body{width:1200px;height:630px;overflow:hidden;background:#fff;color:#0A0A09}
.c{position:relative;width:1200px;height:630px;padding:64px 80px;font-family:Inter,sans-serif;
  background:radial-gradient(55% 60% at 88% 30%,rgba(251,255,0,.30),transparent 70%),#fff}
.top{display:flex;align-items:center;gap:18px}
.top span{font:400 17px 'Space Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:#45453F}
svg{display:block}
h1{margin-top:58px;font:800 76px/1.02 Poppins,sans-serif;letter-spacing:-.04em;max-width:960px}
em{font-style:normal;background:linear-gradient(transparent 60%,#FBFF00 60%,#FBFF00 90%,transparent 90%)}
.f{position:absolute;left:80px;right:80px;bottom:60px;display:flex;justify-content:space-between;align-items:center;
  padding-top:24px;border-top:1px solid #E6E6E1;font:400 18px 'Space Mono',monospace;letter-spacing:.08em;color:#6B6B64}
.f b{font-weight:400;color:#0A0A09}
.f i{display:inline-block;width:9px;height:9px;background:#FBFF00;margin:0 14px 2px;outline:1px solid #D9DC00}
</style><div class="c">
<div class="top">${badge(66)}<span>Enigma Technologies Solutions</span></div>
<h1>Security that keeps <em>keys, code and identity</em> with their owner.</h1>
<div class="f"><span><b>Sigil</b><i></i><b>Sanctum</b><i></i><b>Vestige</b><i></i>Key generation ceremonies</span><span>enigma.sh</span></div>
</div>`;
  shot(html, join(pub, "og.png"), 1200, 630);
}

const all = { icons, og };
const want = process.argv.slice(2);
for (const name of want.length ? want : Object.keys(all)) {
  if (!all[name]) throw new Error(`unknown target: ${name}`);
  console.log(`${name} ...`);
  all[name]();
}
console.log("done");
