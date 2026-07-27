import fitz
import os

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'

doc = fitz.open(pdf_path)

for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text()
    images = page.get_images(full=True)
    
    # Get image details with positions
    image_info = []
    for img in images:
        xref = img[0]
        base_image = doc.extract_image(xref)
        w = base_image['width']
        h = base_image['height']
        size = len(base_image['image'])
        
        # Get image position on page
        img_rects = page.get_image_rects(xref)
        rect = img_rects[0] if img_rects else None
        rect_str = "({:.0f},{:.0f},{:.0f},{:.0f})".format(rect.x0, rect.y0, rect.x1, rect.y1) if rect else "unknown"
        area = (rect.x1 - rect.x0) * (rect.y1 - rect.y0) if rect else 0
        
        image_info.append({
            'xref': xref,
            'width': w,
            'height': h,
            'size': size,
            'rect': rect_str,
            'area': area
        })
    
    # Only print pages with images
    if images:
        first_line = text.strip().split('\n')[0] if text.strip() else "(empty)"
        print("=" * 80)
        print("PAGE {} - First text: {}".format(page_num + 1, first_line[:100]))
        print("Images found: {}".format(len(images)))
        for i, info in enumerate(image_info):
            print("  Image {}: {}x{}, {}KB, pos={}, area={:.0f}".format(
                i+1, info['width'], info['height'], info['size']//1024, 
                info['rect'], info['area']))
        print()

doc.close()
