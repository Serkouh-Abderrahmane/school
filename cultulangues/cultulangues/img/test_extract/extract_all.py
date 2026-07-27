import fitz
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'
img_dir = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img'
booking_dir = os.path.join(img_dir, 'booking')
os.makedirs(booking_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# ─── Define extraction map based on structural analysis ───
# Rule: For each service, the promotional image is the FIRST large image on the page
# that appears BEFORE the service title text.

service_images = {
    # page_num: (service_name, output_filename)
    3:  ('Français Express',       'banner-francais-express.png'),
    5:  ('Soirée Linguo',          'banner-soiree-linguo.png'),
    7:  ('Samedis en français',    'banner-samedi-francais.png'),
    12: ('English Express',        'banner-english-express.png'),
    14: ('Evening Lingo',          'banner-evening-lingo.png'),
    16: ('Saturdays in English',   'banner-samedi-anglais.png'),
    21: ('Oral B Partiel',         'banner-oral-b-partiel.png'),
    23: ('Oral B Intensif',        'banner-oral-b-intensif.png'),
    26: ('Oral C Partiel',         'banner-oral-c-partiel.png'),
    28: ('Oral C Intensif',        'banner-oral-c-intensif.png'),
    32: ('TCF Québec Partiel',     'banner-tcf-quebec-partiel.png'),
    34: ('TCF Québec Intensif',    'banner-tcf-quebec-intensif.png'),
    37: ('TCF Canada Partiel',     'banner-tcf-canada-partiel.png'),
    38: ('TCF Canada Intensif',    'banner-tcf-canada-intensif.png'),
    44: ('Atelier Conversation',   'atelier-conversation.png'),
    45: ('Atelier Culture',        'atelier-culture-canada.png'),
    47: ('Atelier Maintien',       'atelier-maintien.png'),
}

# Booking images: page → (service_name, output_filename)
# These are images on pages that contain "Mettre" text
booking_images = {
    10: ('Parcours linguistique',  'booking-parcours-linguistique.png'),
    19: ('English',                'booking-english.png'),
    25: ('Oral B',                 'booking-oral-b.png'),
    29: ('Oral C',                 'booking-oral-c.png'),
    35: ('TCF Québec',             'booking-tcf-quebec.png'),
    39: ('TCF Canada',             'booking-tcf-canada.png'),
    41: ('Cours solo 5h',          'booking-cours-solo-5h.png'),
    42: ('Cours solo 10h',         'booking-cours-solo-10h.png'),  # top image
    42: ('Cours solo 15h',         'booking-cours-solo-15h.png'),  # bottom image - will handle separately
    43: ('Cours solo 20h',         'booking-cours-solo-20h.png'),
}

# Special: page 42 has TWO booking images (top and bottom)
booking_images_special = [
    (42, 'top',    'Cours solo 10h', 'booking-cours-solo-10h.png'),
    (42, 'bottom', 'Cours solo 15h', 'booking-cours-solo-15h.png'),
]


def get_largest_images(page, min_width=400, min_height=300):
    """Get all images on a page that meet minimum size criteria, sorted by y position."""
    images = page.get_images(full=True)
    result = []
    for img in images:
        xref = img[0]
        rects = page.get_image_rects(xref)
        if rects:
            rect = rects[0]
            base = doc.extract_image(xref)
            w = base['width']
            h = base['height']
            if w >= min_width and h >= min_height:
                result.append({
                    'xref': xref,
                    'rect': rect,
                    'width': w,
                    'height': h,
                    'image_data': base['image'],
                    'ext': base['ext'],
                    'size_kb': len(base['image']) // 1024,
                })
    result.sort(key=lambda x: x['rect'].y0)
    return result


def extract_image(page_num, img_info, output_path):
    """Extract an image from the PDF and save it."""
    with open(output_path, 'wb') as f:
        f.write(img_info['image_data'])
    return True


# ─── Extract service promotional images ───
print("=" * 90)
print("EXTRACTION REPORT")
print("=" * 90)

results = []

for page_num, (service_name, filename) in sorted(service_images.items()):
    page = doc[page_num - 1]
    large_imgs = get_largest_images(page)

    if not large_imgs:
        results.append((service_name, '❌ NO IMAGE', page_num, '', '', filename))
        print("  ❌ {} — NO IMAGE FOUND on page {}".format(service_name, page_num))
        continue

    # Take the FIRST large image (topmost = appears before title)
    img = large_imgs[0]
    output_path = os.path.join(img_dir, filename)
    extract_image(page_num, img, output_path)

    status = '✅'
    results.append((
        service_name, status, page_num,
        '{}x{}'.format(img['width'], img['height']),
        '{}KB'.format(img['size_kb']),
        filename
    ))

    print("  {} {} | Page {} | {}x{} {}KB → {}".format(
        status, service_name, page_num,
        img['width'], img['height'], img['size_kb'], filename
    ))

# ─── Extract booking images ───
print("\n" + "─" * 90)
print("BOOKING IMAGES")
print("─" * 90)

for page_num, (service_name, filename) in sorted(booking_images.items()):
    # Skip the duplicate page 42 entry — handled specially below
    if page_num == 42 and '10h' in filename:
        continue

    page = doc[page_num - 1]
    large_imgs = get_largest_images(page)

    if not large_imgs:
        print("  ❌ {} — NO IMAGE on page {}".format(service_name, page_num))
        continue

    img = large_imgs[0]
    output_path = os.path.join(booking_dir, filename)
    extract_image(page_num, img, output_path)

    print("  📦 {} | Page {} | {}x{} {}KB → booking/{}".format(
        service_name, page_num,
        img['width'], img['height'], img['size_kb'], filename
    ))

# Handle page 42 specially (two images: top and bottom)
page42 = doc[41]
large_imgs_42 = get_largest_images(page42)
if len(large_imgs_42) >= 2:
    # Top image = first by y position
    top_img = large_imgs_42[0]
    output_path = os.path.join(booking_dir, 'booking-cours-solo-10h.png')
    extract_image(42, top_img, output_path)
    print("  📦 Cours solo 10h | Page 42 (top) | {}x{} {}KB → booking/booking-cours-solo-10h.png".format(
        top_img['width'], top_img['height'], top_img['size_kb']
    ))

    # Bottom image = second by y position
    bot_img = large_imgs_42[1]
    output_path = os.path.join(booking_dir, 'booking-cours-solo-15h.png')
    extract_image(42, bot_img, output_path)
    print("  📦 Cours solo 15h | Page 42 (bottom) | {}x{} {}KB → booking/booking-cours-solo-15h.png".format(
        bot_img['width'], bot_img['height'], bot_img['size_kb']
    ))
elif len(large_imgs_42) == 1:
    print("  ⚠️ Page 42 only has 1 large image (expected 2)")

# ─── Print verification table ───
print("\n" + "=" * 90)
print("VERIFICATION TABLE — SERVICE PROMOTIONAL IMAGES")
print("=" * 90)
print("{:<25} {:<8} {:<6} {:<12} {:<8} {}".format(
    'Service', 'Status', 'Page', 'Dimensions', 'Size', 'Filename'
))
print("─" * 90)
for r in results:
    print("{:<25} {:<8} {:<6} {:<12} {:<8} {}".format(r[0], r[1], r[2], r[3], r[4], r[5]))

# Count
total = len(results)
ok = sum(1 for r in results if r[1] == '✅')
fail = total - ok
print("─" * 90)
print("TOTAL: {} services | {} OK | {} FAILED".format(total, ok, fail))

# ─── Verify all expected files exist on disk ───
print("\n" + "=" * 90)
print("FILE EXISTENCE CHECK")
print("=" * 90)

all_ok = True
for page_num, (service_name, filename) in sorted(service_images.items()):
    path = os.path.join(img_dir, filename)
    exists = os.path.exists(path)
    size = os.path.getsize(path) // 1024 if exists else 0
    status = '✅' if exists else '❌'
    if not exists:
        all_ok = False
    print("  {} img/{} ({}KB)".format(status, filename, size))

for page_num, (service_name, filename) in sorted(booking_images.items()):
    if page_num == 42 and '10h' in filename:
        continue
    path = os.path.join(booking_dir, filename)
    exists = os.path.exists(path)
    size = os.path.getsize(path) // 1024 if exists else 0
    status = '✅' if exists else '❌'
    print("  {} img/booking/{} ({}KB)".format(status, filename, size))

# Check page 42 special files
for suffix in ['10h', '15h']:
    fname = 'booking-cours-solo-{}.png'.format(suffix)
    path = os.path.join(booking_dir, fname)
    exists = os.path.exists(path)
    size = os.path.getsize(path) // 1024 if exists else 0
    status = '✅' if exists else '❌'
    print("  {} img/booking/{} ({}KB)".format(status, fname, size))

print("\n" + "=" * 90)
if all_ok:
    print("ALL SERVICE IMAGES EXTRACTED SUCCESSFULLY")
else:
    print("⚠️ SOME IMAGES FAILED — CHECK ABOVE")
print("=" * 90)

doc.close()
