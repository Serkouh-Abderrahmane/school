#!/usr/bin/env python3
"""Scan the PDF to find all embedded images on every page."""
import sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
import pdfplumber
from pathlib import Path

pdf_path = Path(__file__).resolve().parent / "img" / "contenu plateforme-juin 2026.pdf"

with pdfplumber.open(pdf_path) as pdf:
    print(f"Total pages: {len(pdf.pages)}")
    print("=" * 80)
    for i, page in enumerate(pdf.pages, 1):
        images = page.objects.get('image', [])
        if images:
            for j, img in enumerate(images):
                stream = img.get('stream')
                try:
                    data = stream.get_data()
                    size_kb = len(data) / 1024
                    # Detect format
                    if data[:2] == b'\xff\xd8':
                        fmt = 'JPEG'
                    elif data[:8] == b'\x89PNG\r\n\x1a\n':
                        fmt = 'PNG'
                    else:
                        fmt = f'Unknown({data[:4].hex()})'
                    w = img.get('width', '?')
                    h = img.get('height', '?')
                    print(f"  Page {i:2d}: Image {j+1} — {fmt}, {size_kb:.0f} KB, {w}x{h}")
                except Exception as e:
                    print(f"  Page {i:2d}: Image {j+1} — Error reading: {e}")
        else:
            print(f"  Page {i:2d}: (no images)")
