import fitz
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'
img_dir = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img'

doc = fitz.open(pdf_path)
page = doc[43]  # Page 44 (0-indexed)

images = page.get_images(full=True)
print("Page 44 has {} images:".format(len(images)))

for i, img in enumerate(images):
    xref = img[0]
    rects = page.get_image_rects(xref)
    base = doc.extract_image(xref)
    if rects:
        rect = rects[0]
        print("  img#{}: {}x{} {}KB pos=({:.0f},{:.0f})-({:.0f},{:.0f})".format(
            i, base['width'], base['height'], len(base['image'])//1024,
            rect.x0, rect.y0, rect.x1, rect.y1
        ))

# The speech bubble is img#1 (693x462, 23KB) at y=458
# The category hero is img#0 (1536x1024, 187KB) at y=122
# We want img#1 for Atelier Conversation

# Find the speech bubble (the one that's NOT 1536x1024)
for img in images:
    xref = img[0]
    base = doc.extract_image(xref)
    if base['width'] != 1536 and base['height'] != 1024:
        output_path = os.path.join(img_dir, 'atelier-conversation.png')
        with open(output_path, 'wb') as f:
            f.write(base['image'])
        print("\nFixed: extracted {}x{} {}KB → atelier-conversation.png".format(
            base['width'], base['height'], len(base['image'])//1024
        ))
        break

doc.close()
