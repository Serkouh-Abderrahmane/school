import fitz
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'
output_dir = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\test_extract\service_images'
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# For each page with images, print full text + image position to identify what image belongs to what service
# We need to find the image that comes BEFORE each service's details

service_pages = {
    'Francais Express': 3,
    'Soiree Linguo': 5,
    'Samedis Francais': 7,
    'English Express': 12,
    'Evening Lingo': 14,
    'Saturdays English': 16,
    'Oral B Partiel': 26,      # The image BEFORE Oral C Partiel details on page 26
    'Oral B Intensif': 23,
    'Oral C Partiel': 26,
    'Oral C Intensif': 28,
    'TCF Quebec Partiel': 32,   # Image at bottom of page 32
    'TCF Quebec Intensif': 34,
    'TCF Canada Partiel': 37,
    'TCF Canada Intensif': 38,
    'Atelier Conversation': 44,
    'Atelier Culture': 45,
    'Atelier Maintien': 47,
}

# Extract specific high-quality images from pages
for service_name, page_num in service_pages.items():
    page = doc[page_num - 1]
    images = page.get_images(full=True)
    
    if not images:
        print('NO IMAGE on page {} for {}'.format(page_num, service_name))
        continue
    
    # Get the image closest to the top of the page (first image = promotional)
    best_img = None
    best_y = float('inf')
    
    for img in images:
        xref = img[0]
        rects = page.get_image_rects(xref)
        if rects:
            rect = rects[0]
            if rect.y0 < best_y:
                best_y = rect.y0
                best_img = img
    
    if best_img:
        xref = best_img[0]
        base = doc.extract_image(xref)
        ext = base['ext']
        w = base['width']
        h = base['height']
        size_kb = len(base['image']) // 1024
        
        filename = '{}.{}'.format(service_name.lower().replace(' ', '_'), ext)
        filepath = os.path.join(output_dir, filename)
        with open(filepath, 'wb') as f:
            f.write(base['image'])
        
        rects = page.get_image_rects(xref)
        rect = rects[0] if rects else None
        rect_str = ''
        if rect:
            rect_str = 'pos=({:.0f},{:.0f},{:.0f},{:.0f})'.format(rect.x0, rect.y0, rect.x1, rect.y1)
        
        print('EXTRACTED: {} from page {} -> {} ({}x{}, {}KB) {}'.format(
            service_name, page_num, filename, w, h, size_kb, rect_str))

# Also extract ALL images with their page context for complete mapping
print('\n' + '=' * 80)
print('COMPLETE PAGE-BY-PAGE IMAGE MAP')
print('=' * 80)

for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    if not images:
        continue
    
    text = page.get_text()
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    
    # Find first meaningful text line (not page number)
    first_text = ''
    for l in lines:
        if l.isdigit() and int(l) == page_num + 1:
            continue
        if l.startswith('Image'):
            continue
        first_text = l[:100]
        break
    
    # Find the text AFTER each image
    text_after_first_img = ''
    blocks = page.get_text("dict")["blocks"]
    all_spans = []
    for b in blocks:
        if b["type"] == 0:
            for line in b["lines"]:
                for span in line["spans"]:
                    if span["text"].strip():
                        all_spans.append({
                            'text': span["text"].strip(),
                            'y': span["origin"][1]
                        })
    
    for img in images:
        xref = img[0]
        rects = page.get_image_rects(xref)
        base = doc.extract_image(xref)
        
        if rects:
            rect = rects[0]
            # Find text below this image
            texts_below = [s['text'] for s in all_spans if s['y'] > rect.y1 and s['y'] < rect.y1 + 100]
            below_text = texts_below[0][:80] if texts_below else '(no text below)'
            
            w = base['width']
            h = base['height']
            size_kb = len(base['image']) // 1024
            
            print('\nPage {} | {}x{} {}KB | y={:.0f}-{:.0f}'.format(
                page_num+1, w, h, size_kb, rect.y0, rect.y1))
            print('  First text: {}'.format(first_text))
            print('  Text below image: {}'.format(below_text))

doc.close()
