import fitz
import os

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'
output_dir = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\test_extract'
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
img_count = 0

for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image['image']
        image_ext = base_image['ext']
        w = base_image['width']
        h = base_image['height']
        img_count += 1
        filename = 'page{}_img{}.{}'.format(page_num+1, img_index+1, image_ext)
        filepath = os.path.join(output_dir, filename)
        with open(filepath, 'wb') as f:
            f.write(image_bytes)
        print('Extracted: {} ({} bytes, {}x{})'.format(filename, len(image_bytes), w, h))

print('\nTotal images extracted: {}'.format(img_count))
doc.close()
