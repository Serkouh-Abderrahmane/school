import fitz
import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'
doc = fitz.open(pdf_path)

# ─── STEP 1: Map every page's text blocks and images with Y positions ───

service_titles = [
    "Français Express",
    "Parcours Soirée Linguo",
    "Soirée Linguo",
    "Parcours Samedis en français",
    "Samedis en français",
    "English Express",
    "English Express Pathway",
    "Evening Lingo",
    "Evening Lingo Pathway",
    "Saturdays in English",
    "Saturdays in English Pathway",
    "Oral B",
    "Préparation Oral B",
    "Préparation TCO",
    "TCO",
    "Oral C",
    "Préparation Oral C",
    "TCF Québec",
    "TCF Canada",
    "Progressez vers",
    "Atteignez rapidement",
    "Atelier de conversation",
    "Atelier Culture",
    "Atelier culture",
    "Atelier maintien",
    "Atelier Maintien",
    "Formation en solo",
    "cours solo",
    "Cours solo",
    "5 h",
    "10 h",
    "15 h",
    "20 h",
    "forfait",
]

booking_keywords = ["Mettre", "Lien de la fiche", "Lien Test", "Paiement", "Lien calendly"]

category_hero_labels = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 3A", "Image 3B"]

print("=" * 100)
print("COMPLETE PDF STRUCTURE MAP — EVERY PAGE")
print("=" * 100)

for page_num in range(len(doc)):
    page = doc[page_num]
    
    # Get all text blocks with positions
    blocks = page.get_text("dict")["blocks"]
    text_items = []
    for b in blocks:
        if b["type"] == 0:
            for line in b["lines"]:
                for span in line["spans"]:
                    txt = span["text"].strip()
                    if txt:
                        text_items.append({
                            'text': txt,
                            'y': span["origin"][1],
                            'x': span["origin"][0],
                            'size': span["size"],
                            'flags': span["flags"],
                            'font': span["font"],
                        })
    
    # Get all images with positions
    images = page.get_images(full=True)
    img_items = []
    for img in images:
        xref = img[0]
        rects = page.get_image_rects(xref)
        if rects:
            rect = rects[0]
            base = doc.extract_image(xref)
            img_items.append({
                'xref': xref,
                'x0': rect.x0,
                'y0': rect.y0,
                'x1': rect.x1,
                'y1': rect.y1,
                'w': base['width'],
                'h': base['height'],
                'size_kb': len(base['image']) // 1024,
                'ext': base['ext'],
            })
    
    if not img_items and not text_items:
        continue
    
    # Skip pages with only tiny images (logos/icons)
    large_imgs = [i for i in img_items if i['w'] > 200 and i['h'] > 200]
    
    print(f"\n{'─' * 80}")
    print(f"PAGE {page_num + 1}")
    print(f"{'─' * 80}")
    
    if img_items:
        print(f"  IMAGES ({len(img_items)} total, {len(large_imgs)} large):")
        for i, img in enumerate(img_items):
            flag = " [LARGE]" if img['w'] > 200 and img['h'] > 200 else " [tiny]"
            print(f"    img#{i}: {img['w']}x{img['h']} {img['size_kb']}KB "
                  f"pos=({img['x0']:.0f},{img['y0']:.0f})-({img['x1']:.0f},{img['y1']:.0f}){flag}")
    
    if text_items:
        # Sort by Y position
        text_items.sort(key=lambda t: t['y'])
        print(f"  TEXT BLOCKS ({len(text_items)}):")
        for t in text_items[:25]:  # limit output
            font_info = f"size={t['size']:.1f} font={t['font']}"
            print(f"    y={t['y']:.0f} x={t['x']:.0f} | {font_info} | \"{t['text'][:80]}\"")
        if len(text_items) > 25:
            print(f"    ... ({len(text_items) - 25} more text blocks)")

doc.close()
print("\n\nDone.")
