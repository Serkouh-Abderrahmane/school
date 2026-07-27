#!/usr/bin/env python3
"""
Deep PDF Scanner — Maps every image with surrounding text context.
Identifies: service images, speech bubbles, booking images.
"""
import sys, os, io, json
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import pdfplumber

PDF = os.path.join(os.path.dirname(__file__), "img", "contenu plateforme-juin 2026.pdf")

with pdfplumber.open(PDF) as pdf:
    print(f"Total pages: {len(pdf.pages)}\n")
    
    for i, page in enumerate(pdf.pages):
        pn = i + 1
        images = page.objects.get('image', [])
        text = page.extract_text() or ""
        text_lines = text.strip().split('\n') if text.strip() else []
        
        # Show first 8 and last 4 lines of text for context
        preview_lines = text_lines[:8]
        if len(text_lines) > 12:
            preview_lines.append(f"  ... ({len(text_lines) - 12} more lines) ...")
            preview_lines.extend(text_lines[-4:])
        elif len(text_lines) > 8:
            preview_lines.extend(text_lines[8:])
        
        print(f"{'='*70}")
        print(f"PAGE {pn} — {len(images)} images, {len(text_lines)} text lines")
        print(f"{'='*70}")
        
        if preview_lines:
            print("TEXT PREVIEW:")
            for line in preview_lines:
                print(f"  | {line[:100]}")
        
        if images:
            print(f"\nIMAGES ({len(images)}):")
            for j, img in enumerate(images):
                w = img.get('width', 0)
                h = img.get('height', 0)
                x0 = img.get('x0', 0)
                y0 = img.get('y0', 0)
                stream = img.get('stream')
                data = stream.get_data() if stream else b''
                
                # Determine format
                fmt = "unknown"
                if data[:2] == b'\xff\xd8':
                    fmt = "JPEG"
                elif data[:8] == b'\x89PNG\r\n\x1a\n':
                    fmt = "PNG"
                
                # Check if it's likely a speech bubble (small, roughly square-ish or narrow)
                aspect = w / h if h > 0 else 0
                is_small = w < 300 and h < 200
                size_kb = len(data) / 1024
                
                marker = ""
                if is_small and aspect > 0.8:
                    marker = " <-- LIKELY SPEECH BUBBLE (small)"
                elif size_kb > 50:
                    marker = " <-- LIKELY SERVICE/BOOKING IMAGE (large)"
                
                print(f"  [{j}] {w:.0f}x{h:.0f} aspect={aspect:.2f} at ({x0:.0f},{y0:.0f}) {fmt} {size_kb:.0f}KB{marker}")
        else:
            print("\nNO IMAGES on this page.")
        
        print()
