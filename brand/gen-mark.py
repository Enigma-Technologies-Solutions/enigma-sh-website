#!/usr/bin/env python3
"""The ETS badge as SVG outlines, per the ETS brand styleguide (Logo, v1.1).

A sharp black tile, landscape 3:2, with "ETS" in Inter 800 (tracking .01em) in
white, cap height ~40% of the tile. Writes:

  brand/badge.svg     the badge alone, 3:2 (source for gen-brand.mjs)
  public/favicon.svg  the badge centred on a transparent square

Then run `node brand/gen-brand.mjs` for the PNGs, favicon.ico and og.png.

Requires: pip install fonttools brotli
"""
from pathlib import Path

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parent.parent
INK, PAPER = "#000000", "#FFFFFF"
W, H = 60, 40       # the tile, 3:2
CAP = 0.40          # cap height / tile height
TRACK = 0.01        # em


def outlines():
    font = TTFont(ROOT / "brand/fonts/Inter-var.woff2")
    font = instantiateVariableFont(font, {"wght": 800, "opsz": 32} if "opsz" in [a.axisTag for a in font["fvar"].axes] else {"wght": 800})
    upm = font["head"].unitsPerEm
    cap = font["OS/2"].sCapHeight
    gs, cmap = font.getGlyphSet(), font.getBestCmap()
    x, parts, box = 0, [], [1e9, 1e9, -1e9, -1e9]
    for ch in "ETS":
        g = gs[cmap[ord(ch)]]
        pen, bp = SVGPathPen(gs), BoundsPen(gs)
        g.draw(pen)
        g.draw(bp)
        b = bp.bounds
        parts.append((x, pen.getCommands()))
        box = [min(box[0], x + b[0]), min(box[1], b[1]), max(box[2], x + b[2]), max(box[3], b[3])]
        x += g.width + TRACK * upm
    return parts, box, cap


def group(ox, oy):
    parts, (xmin, _, xmax, _), cap = outlines()
    s = CAP * H / cap
    tx = ox + (W - (xmax - xmin) * s) / 2 - xmin * s
    baseline = oy + (H + cap * s) / 2
    out = [f'  <rect x="{ox}" y="{oy}" width="{W}" height="{H}" fill="{INK}"/>',
           f'  <g fill="{PAPER}" transform="translate({tx:.3f} {baseline:.3f}) scale({s:.6f} {-s:.6f})">']
    out += [f'    <path transform="translate({x:.0f} 0)" d="{d}"/>' for x, d in parts]
    out.append("  </g>")
    return out


def svg(vw, vh, ox, oy):
    return "\n".join([f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vw} {vh}" width="{vw}" height="{vh}">',
                      "  <title>Enigma Technologies Solutions</title>", *group(ox, oy), "</svg>"]) + "\n"


if __name__ == "__main__":
    (ROOT / "brand/badge.svg").write_text(svg(W, H, 0, 0))
    (ROOT / "public/favicon.svg").write_text(svg(64, 64, 2, 12))
    print("wrote brand/badge.svg, public/favicon.svg")
