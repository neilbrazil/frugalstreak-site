#!/usr/bin/env python3
"""Draws the FrugalStreak site icon: a gold leaf on the app's cream ground.

This is the site's own mark, not a copy of the store icon — the store icon is
an Icon Composer document whose layered, lit treatment does not survive being
flattened to a 64px favicon. Colours are the app's light-appearance accent and
background, so the two read as the same product. A favicon cannot respond to
the viewer's appearance, so it commits to the light palette, which is the one
the app opens in by default. Deterministic: re-running reproduces the same file.

The leaf is a vesica — the overlap of two equal circles. The lens is elongated
PERPENDICULAR to the line joining the centres, so to point the leaf along the
top-left/bottom-right diagonal the centres sit on the other diagonal.
"""
import math
from PIL import Image, ImageChops, ImageDraw

BG = (238, 232, 218)     # `background` colorset, light
ACCENT = (200, 139, 58)   # `AccentColor` colorset, light
SS = 4                   # supersample factor, for clean edges

HALF_LEN = 0.40          # leaf half-length, as a fraction of the canvas
HALF_WID = 0.13          # leaf half-width


def _circles(size):
    """Radius and centre offset giving a lens of HALF_LEN x HALF_WID."""
    h = (HALF_LEN**2 - HALF_WID**2) / (2 * HALF_WID)   # half the centre gap
    r = h + HALF_WID
    return r * size, h * size


def leaf_mask(size):
    r, h = _circles(size)
    c = size / 2
    # Centres on the anti-diagonal, so the lens points along the main diagonal.
    ux, uy = 1 / math.sqrt(2), -1 / math.sqrt(2)
    parts = []
    for s in (1, -1):
        cx, cy = c + s * h * ux, c + s * h * uy
        layer = Image.new("L", (size, size), 0)
        ImageDraw.Draw(layer).ellipse([cx - r, cy - r, cx + r, cy + r], fill=255)
        parts.append(layer)
    body = ImageChops.multiply(parts[0], parts[1])

    # Midrib: a tapered wedge from the tip to the base, punched out.
    d = ImageDraw.Draw(body)
    # The leaf axis runs top-left to bottom-right, so the midrib does too and
    # its width is measured along the perpendicular.
    k = HALF_LEN / math.sqrt(2)
    tip = (c - k * size, c - k * size)
    # Stops short of the far tip so the midrib sits inside the blade
    # instead of splitting it in two.
    base = (c + k * 0.55 * size, c + k * 0.55 * size)
    w = size * 0.020
    nx, ny = 1 / math.sqrt(2), -1 / math.sqrt(2)   # normal to the leaf axis
    d.polygon(
        [tip,
         (base[0] + nx * w, base[1] + ny * w),
         (base[0] - nx * w, base[1] - ny * w)],
        fill=0,
    )
    return body


def render(px, path):
    big = px * SS
    canvas = Image.new("RGB", (big, big), BG)
    canvas.paste(Image.new("RGB", (big, big), ACCENT), (0, 0), leaf_mask(big))
    canvas.resize((px, px), Image.LANCZOS).save(path)
    print("wrote", path, px)


render(1024, "public/assets/icon.png")
render(180, "public/assets/apple-touch-icon.png")
render(64, "public/assets/favicon.png")
