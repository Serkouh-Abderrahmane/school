import fitz
import os

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'
output_dir = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\test_extract\pages'
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

for page_num in range(len(doc)):
    page = doc[page_num]
    mat = fitz.Matrix(1.5, 1.5)
    pix = page.get_pixmap(matrix=mat)
    filename = 'page_{:02d}.png'.format(page_num + 1)
    filepath = os.path.join(output_dir, filename)
    pix.save(filepath)
    print('Rendered: {} ({}x{})'.format(filename, pix.width, pix.height))

doc.close()
print('Done. Total pages rendered.')
