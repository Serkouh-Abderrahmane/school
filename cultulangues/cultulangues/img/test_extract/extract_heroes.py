import fitz
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'
img_dir = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img'

doc = fitz.open(pdf_path)

# Category hero images to extract
# These are the large 1536x1024 images labeled Image 1-5
category_heroes = {
    2:  ('Image 1', 'hero-parcours-linguistiques.png'),   # Parcours linguistiques
    11: ('Image 2', 'hero-english.png'),                    # English
    30: ('Image 3B', 'hero-tcf.png'),                       # TCF (Image 3B is the TCF category)
    40: ('Image 4', 'hero-cours-solo.png'),                 # Cours solo
    44: ('Image 5', 'hero-ateliers.png'),                   # Ateliers
}

# Also extract the homepage hero from page 1
hero_page = 1

print("=" * 70)
print("EXTRACTING CATEGORY HERO IMAGES + HOMEPAGE HERO")
print("=" * 70)

# Extract homepage hero (page 1)
page = doc[0]
images = page.get_images(full=True)
for img in images:
    xref = img[0]
    base = doc.extract_image(xref)
    if base['width'] > 1000 and base['height'] > 600:
        output_path = os.path.join(img_dir, 'hero-maitrisez-langues.png')
        with open(output_path, 'wb') as f:
            f.write(base['image'])
        print("  ✅ Homepage Hero | Page 1 | {}x{} {}KB → hero-maitrisez-langues.png".format(
            base['width'], base['height'], len(base['image'])//1024
        ))
        break

# Extract category heroes
for page_num, (label, filename) in sorted(category_heroes.items()):
    page = doc[page_num - 1]
    images = page.get_images(full=True)
    
    for img in images:
        xref = img[0]
        base = doc.extract_image(xref)
        if base['width'] == 1536 and base['height'] == 1024:
            output_path = os.path.join(img_dir, filename)
            with open(output_path, 'wb') as f:
                f.write(base['image'])
            print("  ✅ {} | Page {} | {}x{} {}KB → {}".format(
                label, page_num, base['width'], base['height'],
                len(base['image'])//1024, filename
            ))
            break

# Also extract the "Image 3" from page 19 (bottom) - used as TCF transition image
# And Image 3A from page 20 - Cap sur l'oral category
page20 = doc[19]
images20 = page20.get_images(full=True)
for img in images20:
    xref = img[0]
    base = doc.extract_image(xref)
    if base['width'] == 1536 and base['height'] == 1024:
        output_path = os.path.join(img_dir, 'hero-cap-sur-loral.png')
        with open(output_path, 'wb') as f:
            f.write(base['image'])
        print("  ✅ Image 3A | Page 20 | {}x{} {}KB → hero-cap-sur-loral.png".format(
            base['width'], base['height'], len(base['image'])//1024
        ))
        break

doc.close()

# Verify all files
print("\n" + "=" * 70)
print("VERIFICATION")
print("=" * 70)
for page_num, (label, filename) in sorted(category_heroes.items()):
    path = os.path.join(img_dir, filename)
    if os.path.exists(path):
        size = os.path.getsize(path) // 1024
        print("  ✅ {} ({}KB)".format(filename, size))
    else:
        print("  ❌ {} MISSING".format(filename))

hero_path = os.path.join(img_dir, 'hero-maitrisez-langues.png')
if os.path.exists(hero_path):
    size = os.path.getsize(hero_path) // 1024
    print("  ✅ hero-maitrisez-langues.png ({}KB)".format(size))
