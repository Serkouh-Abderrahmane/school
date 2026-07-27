#!/usr/bin/env python3
"""Analyze Atelier section images with detailed context."""
import sys, os, io
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
import pdfplumber
from PIL import Image

PDF = os.path.join(os.path.dirname(os.path.abspath(__file__)), "img", "contenu plateforme-juin 2026.pdf")

with pdfplumber.open(PDF) as pdf:
    for pnum in range(43, min(48, len(pdf.pages))):
        page = pdf.pages[pnum]
        images = page.objects.get('image', [])
        text = page.extract_text() or ''
        print(f"\n{'='*70}")
        print(f"PAGE {pnum+1}")
        print(f"Page size: {page.width:.0f}x{page.height:.0f}")
        print(f"Text:\n{text}")
        print(f"{'='*70}")

        for i, img in enumerate(images):
            stream = img['stream']
            data = stream.get_data()
            w = img.get('width', 0)
            h = img.get('height', 0)
            x0 = img.get('x0', 0)
            y0 = img.get('y0', 0)
            x1 = img.get('x1', 0)
            y1 = img.get('y1', 0)
            pil_img = Image.open(io.BytesIO(data))

            # Image position analysis
            print(f"\n  IMAGE [{i}]:")
            print(f"    Raw bytes: {len(data)/1024:.0f}KB")
            print(f"    PDF coords: x0={x0:.1f} y0={y0:.1f} x1={x1:.1f} y1={y1:.1f}")
            print(f"    PDF size: {w:.0f}x{h:.0f}")
            print(f"    Actual pixels: {pil_img.size[0]}x{pil_img.size[1]}")

            # Check if it's near bottom of page (likely a link/speech bubble)
            page_mid = page.height / 2
            if y0 > page_mid:
                print(f"    Position: LOWER HALF (y0={y0:.0f} > midpoint={page_mid:.0f}) — likely speech bubble/link image")
            else:
                print(f"    Position: UPPER HALF (y0={y0:.0f})")

            # Check aspect ratio
            aspect = pil_img.size[0] / pil_img.size[1] if pil_img.size[1] > 0 else 0
            print(f"    Aspect ratio: {aspect:.2f}:1")

            # Check dominant colors (sample center)
            try:
                center = pil_img.resize((10, 10)).convert('RGB')
                pixels = list(center.getdata())
                avg_r = sum(p[0] for p in pixels) // len(pixels)
                avg_g = sum(p[1] for p in pixels) // len(pixels)
                avg_b = sum(p[2] for p in pixels) // len(pixels)
                print(f"    Avg color: rgb({avg_r},{avg_g},{avg_b})")
            except:
                pass

            # Check if likely a speech bubble (small, mostly white/transparent edges)
            if len(data) / 1024 < 30:
                print(f"    Small file size ({len(data)/1024:.0f}KB) — likely speech bubble or icon")
            elif len(data) / 1024 > 100:
                print(f"    Large file size ({len(data)/1024:.0f}KB) — likely hero/banner or service promo image")
