import fitz
import os

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'

doc = fitz.open(pdf_path)

# Extract text blocks with positions for each page
for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text()
    images = page.get_images(full=True)
    
    if not images:
        continue
    
    # Get text blocks with positions
    blocks = page.get_text("dict")["blocks"]
    text_blocks = []
    for b in blocks:
        if b["type"] == 0:  # text block
            for line in b["lines"]:
                for span in line["spans"]:
                    if span["text"].strip():
                        text_blocks.append({
                            'text': span["text"].strip(),
                            'y': span["origin"][1],
                            'font_size': span["size"]
                        })
    
    # Get image positions
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
    
    # Sort by y position
    text_blocks.sort(key=lambda x: x['y'])
    image_positions.sort(key=lambda x: x['y_top'])
    
    # For each image, find the text ABOVE it (within 200px) to identify the service
    print('\n' + '=' * 80)
    print('PAGE {}'.format(page_num + 1))
    print('=' * 80)
    
    for i, img_info in enumerate(image_positions):
        # Find text above this image (within 200px)
        text_above = []
        for tb in text_blocks:
            if img_info['y_top'] - 200 <= tb['y'] <= img_info['y_top']:
                text_above.append(tb['text'])
        
        # Find text below this image (within 100px)
        text_below = []
        for tb in text_blocks:
            if img_info['y_bottom'] <= tb['y'] <= img_info['y_bottom'] + 100:
                text_below.append(tb['text'])
        
        print('\n  Image {}: {}x{}, {}KB, y={:.0f}-{:.0f}'.format(
            i+1, img_info['width'], img_info['height'], img_info['size_kb'],
            img_info['y_top'], img_info['y_bottom']))
        
        if text_above:
            print('    Text ABOVE: {}'.format(' | '.join(text_above[-3:])))
        if text_below:
            print('    Text BELOW: {}'.format(' | '.join(text_below[:3])))

doc.close()
