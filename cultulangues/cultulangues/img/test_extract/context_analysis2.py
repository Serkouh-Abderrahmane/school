import fitz
import os
import sys

# Fix encoding for Windows console
sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'

doc = fitz.open(pdf_path)

for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text()
    images = page.get_images(full=True)
    
    if not images:
        continue
    
    blocks = page.get_text("dict")["blocks"]
    text_blocks = []
    for b in blocks:
        if b["type"] == 0:
            for line in b["lines"]:
                for span in line["spans"]:
                    if span["text"].strip():
                        text_blocks.append({
                            'text': span["text"].strip(),
                            'y': span["origin"][1],
                            'font_size': span["size"]
                        })
    
    image_positions = []
    for img in images:
        xref = img[0]
        img_rects = page.get_image_rects(xref)
        if img_rects:
            rect = img_rects[0]
            base_image = doc.extract_image(xref)
            image_positions.append({
                'xref': xref,
                'y_top': rect.y0,
                'y_bottom': rect.y1,
                'width': base_image['width'],
                'height': base_image['height'],
                'size_kb': len(base_image['image']) // 1024
            })
    
    text_blocks.sort(key=lambda x: x['y'])
    image_positions.sort(key=lambda x: x['y_top'])
    
    # Only print pages from 34 onward (we already have the rest)
    if page_num + 1 < 34:
        continue
    
    print('\n' + '=' * 80)
    print('PAGE {}'.format(page_num + 1))
    print('=' * 80)
    
    for i, img_info in enumerate(image_positions):
        text_above = []
        for tb in text_blocks:
            if img_info['y_top'] - 300 <= tb['y'] <= img_info['y_top']:
                text_above.append(tb['text'])
        
        text_below = []
        for tb in text_blocks:
            if img_info['y_bottom'] <= tb['y'] <= img_info['y_bottom'] + 150:
                text_below.append(tb['text'])
        
        print('\n  Image {}: {}x{}, {}KB, y={:.0f}-{:.0f}'.format(
            i+1, img_info['width'], img_info['height'], img_info['size_kb'],
            img_info['y_top'], img_info['y_bottom']))
        
        if text_above:
            for t in text_above[-3:]:
                print('    ABOVE: {}'.format(t[:120]))
        if text_below:
            for t in text_below[:3]:
                print('    BELOW: {}'.format(t[:120]))

doc.close()
