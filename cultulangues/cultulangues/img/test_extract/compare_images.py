import fitz
import os
import hashlib

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'
img_dir = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img'

doc = fitz.open(pdf_path)

# Build a map of all extracted PDF images
pdf_images = {}
for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image['image']
        w = base_image['width']
        h = base_image['height']
        size_kb = len(image_bytes) // 1024
        
        # Get position
        img_rects = page.get_image_rects(xref)
        rect = img_rects[0] if img_rects else None
        
        key = 'page{}_img{}'.format(page_num+1, img_idx+1)
        pdf_images[key] = {
            'page': page_num+1,
            'width': w,
            'height': h,
            'size_kb': size_kb,
            'rect': rect,
            'hash': hashlib.md5(image_bytes).hexdigest()
        }

doc.close()

# Build a map of all website images
print("=" * 80)
print("WEBSITE IMAGES IN img/ DIRECTORY")
print("=" * 80)
website_images = {}
for root, dirs, files in os.walk(img_dir):
    # Skip test_extract directory
    if 'test_extract' in root:
        continue
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            filepath = os.path.join(root, f)
            rel_path = os.path.relpath(filepath, img_dir)
            size_kb = os.path.getsize(filepath) // 1024
            website_images[rel_path] = {
                'full_path': filepath,
                'size_kb': size_kb
            }
            print('{} ({}KB)'.format(rel_path, size_kb))

print()
print("=" * 80)
print("PDF IMAGES BY PAGE")
print("=" * 80)

# Group by page and show structure
pages_with_images = {}
for key, info in sorted(pdf_images.items()):
    page = info['page']
    if page not in pages_with_images:
        pages_with_images[page] = []
    pages_with_images[page].append(info)

for page in sorted(pages_with_images.keys()):
    imgs = pages_with_images[page]
    print('\nPage {}:'.format(page))
    for i, img in enumerate(imgs):
        rect_str = ''
        if img['rect']:
            rect_str = 'pos=({:.0f},{:.0f},{:.0f},{:.0f})'.format(
                img['rect'].x0, img['rect'].y0, img['rect'].x1, img['rect'].y1)
        print('  Image {}: {}x{}, {}KB, {}'.format(
            i+1, img['width'], img['height'], img['size_kb'], rect_str))

# Check if any PDF image hashes match website image hashes
print()
print("=" * 80)
print("HASH COMPARISON: PDF images vs Website images")
print("=" * 80)

for site_name, site_info in website_images.items():
    with open(site_info['full_path'], 'rb') as f:
        site_hash = hashlib.md5(f.read()).hexdigest()
    
    for pdf_key, pdf_info in pdf_images.items():
        if pdf_info['hash'] == site_hash:
            print('MATCH: {} == {} (page {})'.format(site_name, pdf_key, pdf_info['page']))
