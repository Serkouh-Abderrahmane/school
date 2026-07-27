import fitz
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'

doc = fitz.open(pdf_path)

# Extract first 3 lines and last 3 lines of each page that has images
pages_with_images = [1,2,3,5,7,10,11,12,14,16,19,20,21,23,25,26,28,29,30,31,32,34,35,36,37,38,39,40,41,42,43,44,45,47]

for page_num in [p-1 for p in pages_with_images]:
    page = doc[page_num]
    text = page.get_text()
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    images = page.get_images(full=True)
    
    print('\n' + '=' * 80)
    print('PAGE {} ({} images)'.format(page_num + 1, len(images)))
    print('=' * 80)
    
    if len(lines) > 6:
        print('FIRST 6 LINES:')
        for l in lines[:6]:
            print('  ' + l[:120])
        print('...')
        print('LAST 6 LINES:')
        for l in lines[-6:]:
            print('  ' + l[:120])
    else:
        for l in lines:
            print('  ' + l[:120])

doc.close()
