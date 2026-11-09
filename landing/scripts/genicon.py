#!/usr/bin/env python3
"""Draws the FrugalStreak site icons from the app icon's own geometry.

The shapes and colours are copied from the app's Icon Composer document
(FrugalStreak.icon/Assets/*c.svg, on a 100-unit canvas): three stacked pills
widening towards the base, and a dot at the top right, on the app's cream
ground. The layered glass treatment is left out; flat is what survives at
favicon size. `Logo` in src/components.tsx draws the same marks inline, so
keep the two in step if either changes. Deterministic: re-running reproduces
the same files.

Writes:
  public/assets/logo.svg            rounded tile, the SVG favicon
  public/assets/favicon.png         64px rounded tile, for browsers without SVG favicons
  public/assets/apple-touch-icon.png  180px full square; iOS applies its own mask
  public/assets/icon.png            1024px full square, used in the share images
"""
from PIL import Image, ImageDraw

BG = "#EEE8DA"        # icon fill, display-p3 (0.932, 0.911, 0.854)
PILLS = [             # x, y, width, height on the 100-unit canvas
    (30, 26, 40, 15, "#E8A33D"),
    (24, 45, 52, 15, "#DE4E33"),
    (18, 64, 64, 15, "#8E2413"),
]
DOT = (78, 22, 6, "#14161A")   # cx, cy, r
TILE_RADIUS = 22.4             # Apple's icon corner, as a share of the side
SS = 4                         # supersample factor, for clean edges


def svg():
    pills = "".join(
        f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{h / 2}" fill="{c}"/>'
        for x, y, w, h, c in PILLS
    )
    cx, cy, r, c = DOT
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">'
        f'<rect width="100" height="100" rx="{TILE_RADIUS}" fill="{BG}"/>'
        f'{pills}<circle cx="{cx}" cy="{cy}" r="{r}" fill="{c}"/></svg>\n'
    )


def render(px, path, rounded):
    big = px * SS
    k = big / 100
    canvas = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    d = ImageDraw.Draw(canvas)
    if rounded:
        d.rounded_rectangle([0, 0, big - 1, big - 1], radius=TILE_RADIUS * k, fill=BG)
    else:
        d.rectangle([0, 0, big, big], fill=BG)
    for x, y, w, h, c in PILLS:
        d.rounded_rectangle([x * k, y * k, (x + w) * k, (y + h) * k], radius=h / 2 * k, fill=c)
    cx, cy, r, c = DOT
    d.ellipse([(cx - r) * k, (cy - r) * k, (cx + r) * k, (cy + r) * k], fill=c)
    out = canvas.resize((px, px), Image.LANCZOS)
    (out if rounded else out.convert("RGB")).save(path)
    print("wrote", path, px)


with open("public/assets/logo.svg", "w") as f:
    f.write(svg())
print("wrote public/assets/logo.svg")
render(1024, "public/assets/icon.png", rounded=False)
render(180, "public/assets/apple-touch-icon.png", rounded=False)
render(64, "public/assets/favicon.png", rounded=True)
