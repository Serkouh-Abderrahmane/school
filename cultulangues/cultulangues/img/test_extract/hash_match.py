import fitz
import os
import sys
from PIL import Image
import imagehash

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'
website_img_dir = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img'
extract_dir = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\test_extract'

# Map PDF pages to services based on text context analysis
pdf_service_map = {
    'page3_img1': 'Français Express',
    'page5_img1': 'Soirée Linguo',
    'page7_img1': 'Samedis en français',
    'page12_img1': 'English Express',
    'page14_img1': 'Evening Lingo',
    'page16_img1': 'Saturdays in English',
    'page20_img2': 'Cap sur l\'oral (category speech bubble)',
    'page21_img1': 'Oral B Partiel',
    'page23_img1': 'Oral B Intensif (TCO)',
    'page25_img1': 'Oral B Partiel (booking/speech bubble)',
    'page26_img1': 'Oral C Partiel',
    'page28_img1': 'Oral C Intensif',
    'page31_img1': 'TCF Québec',
    'page32_img1': 'TCF Québec Partiel',
    'page34_img1': 'TCF Canada',
    'page36_img1': 'TCF Canada Partiel',
    'page37_img1': 'TCF Canada Intensif',
    'page38_img1': 'TCF Canada Intensif 2',
    'page44_img2': 'Atelier Conversation',
    'page45_img1': 'Atelier Culture',
    'page47_img1': 'Atelier Maintien',
}

# Website images to check
website_files = []
for f in sorted(os.listdir(website_img_dir)):
    if f.lower().endswith(('.png', '.jpg', '.jpeg')) and 'test_extract' not in f:
        website_files.append(f)
for f in sorted(os.listdir(os.path.join(website_img_dir, 'home'))):
    if f.lower().endswith(('.png', '.jpg', '.jpeg')):
        website_files.append('home/' + f)

print("Computing perceptual hashes for website images...")
website_hashes = {}
for wf in website_files:
    full_path = os.path.join(website_img_dir, wf)
    try:
        img = Image.open(full_path)
        h = imagehash.phash(img)
        website_hashes[wf] = {'hash': h, 'size': os.path.getsize(full_path) // 1024}
        print("  {} - {}KB".format(wf, os.path.getsize(full_path) // 1022))
    except Exception as e:
        print("  ERROR {}: {}".format(wf, e))

print("\nComputing perceptual hashes for PDF extracted images...")
pdf_hashes = {}
for key in sorted(pdf_service_map.keys()):
    parts = key.split('_')
    page_num = int(parts[0].replace('page', ''))
    img_num = int(parts[1].replace('img', ''))
    filename = 'page_{:02d}.jpeg'.format(page_num) if os.path.exists(os.path.join(extract_dir, 'page_{:02d}.jpeg'.format(page_num))) else None
    
    # Try different filenames
    for ext in ['jpeg', 'png', 'jpg']:
        candidate = os.path.join(extract_dir, 'page{}_img1.{}'.format(page_num, ext))
        if os.path.exists(candidate):
            filename = candidate
            break
    
    if filename and os.path.exists(filename):
        try:
            img = Image.open(filename)
            h = imagehash.phash(img)
            pdf_hashes[key] = {'hash': h, 'service': pdf_service_map[key]}
            print("  {} ({}) - {}".format(key, pdf_service_map[key], filename))
        except Exception as e:
            print("  ERROR {}: {}".format(key, e))

print("\n" + "=" * 80)
print("MATCHING: PDF speech bubbles → Website images")
print("=" * 80)

for pdf_key, pdf_info in pdf_hashes.items():
    best_match = None
    best_score = float('inf')
    
    for site_file, site_info in website_hashes.items():
        score = pdf_info['hash'] - site_info['hash']
        if score < best_score:
            best_score = score
            best_match = site_file
    
    print("\n{} ({})".format(pdf_key, pdf_info['service']))
    print("  Best match: {} (score: {})".format(best_match, best_score))
