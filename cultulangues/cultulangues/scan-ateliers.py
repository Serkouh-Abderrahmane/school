#!/usr/bin/env python3
"""Deep scan of Atelier pages (44-48) to find all images."""
import sys, os, io
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
import pdfplumber
from PIL import Image

PDF = os.path.join(os.path.dirname(os.path.abspath(__file__)), "img", "contenu plateforme-juin 2026.pdf")

with pdfplumber.open(PDF) as pdf:
    # Scan pages 44-48 (Atelier section)
    for pnum in range(43, min(48, len(pdf.pages))):
        page = pdf.pages[pnum]
        images = page.objects.get('image', [])
        text = page.extract_text() or ''
        print(f"\n{'='*70}")
        print(f"PAGE {pnum+1} — {len(images)} images")
        print(f"Text preview: {text[:200]}")
        print(f"{'='*70}")

        for i, img in enumerate(images):
            try:
                stream = img['stream']
                data = stream.get_data()
                w = img.get('width', 0)
                h = img.get('height', 0)
                x0 = img.get('x0', 0)
                y0 = img.get('y0', 0)
                print(f"\n  Image [{i}]: {len(data)/1024:.0f}KB, {w:.0f}x{h:.0f} at ({x0:.0f},{y0:.0f})")

                # Try to decode and show
                if data and len(data) > 100:
                    try:
                        pil_img = Image.open(io.BytesIO(data))
                        print(f"    Decoded: {pil_img.size[0]}x{pil_img.size[1]}, mode={pil_img.mode}")
                        # Save preview
                        preview_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                                     f"scan-p{pnum+1}-img{i}.png")
                        pil_img.save(preview_path)
                        print(f"    Saved: {preview_path}")
                    except Exception as e:
                        print(f"    Decode error: {e}")
            except Exception as e:
                print(f"  Image [{i}]: Error - {e}")
