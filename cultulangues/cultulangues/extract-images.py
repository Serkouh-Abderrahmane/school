#!/usr/bin/env python3
"""
Correct PDF Image Extraction for Cultulangues
===============================================
Based on actual PDF structure analysis:

SERVICE IMAGES: Large promotional image BEFORE the speech bubble on each sub-service page.
  → Used on homepage cards, detail page heroes, program cards.

SPEECH BUBBLES: Small decorative labels near "Mettre / Lien" booking links.
  → DO NOT EXTRACT. DO NOT DISPLAY.

BOOKING IMAGES: Large image before "Mettre / Lien de la fiche d'inscription" sections.
  → Used ONLY on booking/registration pages.
"""
import sys, os, io, json, shutil
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

import pdfplumber
from PIL import Image

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PDF = os.path.join(SCRIPT_DIR, "img", "contenu plateforme-juin 2026.pdf")
SERVICES_DIR = os.path.join(SCRIPT_DIR, "assets", "services")
BOOKING_DIR = os.path.join(SCRIPT_DIR, "assets", "booking")

# ─── CORRECT PAGE MAP ─────────────────────────────────────────────
# Based on thorough scan of all 48 PDF pages.
# Each entry: (page_number, image_index, output_filename, category)
# category = 'service' | 'booking' | 'homepage' | 'speech_bubble' (skip)
#
# PATTERN per sub-service page:
#   - Large promotional image = SERVICE IMAGE (extract)
#   - Small speech bubble = DECORATIVE (skip)
#   - Image before "Mettre / Lien" links = BOOKING IMAGE (extract separately)

EXTRACT = [
    # ═══ HOMEPAGE ═══
    # Page 1: Homepage hero (236KB, 451x301)
    (1,  0, "homepage-hero",           "homepage"),
    # Page 2: Homepage banner (190KB, 459x307)
    (2,  0, "homepage-banner",         "homepage"),

    # ═══ PARCOURS LINGUISTIQUE — Sub-services ═══
    # Page 3: Français Express service image (24KB, 332x222) — before "Français Express – Progressez vite"
    (3,  0, "francais-express",        "service"),
    # Page 5: Soirée Linguo service image (31KB, 387x258) — before "Parcours Soirée Linguo"
    (5,  0, "soiree-linguo",           "service"),
    # Page 7: Samedis en français service image (32KB, 359x230) — before "Parcours Samedis en français"
    (7,  0, "samedis-francais",        "service"),
    # Page 10: Speech bubble (26KB) — SKIP (near "Mettre / Lien" booking links)

    # ═══ PARCOURS LINGUISTIQUE — Booking ═══
    # Page 10: Booking speech bubble for Parcours linguistique (26KB)
    (10, 0, "parcours-linguistique-booking", "booking"),

    # ═══ ENGLISH — Sub-services ═══
    # Page 11: English section hero (194KB, 448x299) — "Image 2" label, English pathways banner
    (11, 0, "english-hero",            "homepage"),
    # Page 12: English Express service image (32KB, 350x234) — before "English Express Pathway"
    (12, 0, "english-express",         "service"),
    # Page 14: Evening Lingo service image (34KB, 375x250) — before "Evening Lingo Pathway"
    (14, 0, "evening-lingo",           "service"),
    # Page 16: Saturdays in English service image (41KB, 399x266) — before "Saturdays in English Pathway"
    (16, 0, "saturdays-english",       "service"),
    # Page 19: Speech bubble (25KB) — SKIP (near "Mettre / Lien" booking links)

    # ═══ ENGLISH — Booking ═══
    # Page 19: Booking speech bubble for English (25KB)
    (19, 0, "english-booking",         "booking"),

    # ═══ CAP SUR L'ORAL — Hero + Intro ═══
    # Page 20: Cap sur l'oral hero (219KB, 451x301) — "Image 3A" label
    (20, 0, "cap-sur-loral-hero",      "service"),
    # Page 20: Cap sur l'oral intro (66KB, 305x204) — second image on same page
    (20, 1, "cap-sur-loral-intro",     "service"),

    # ═══ CAP SUR L'ORAL — Sub-services ═══
    # Page 21: Oral B Partiel content (69KB, 432x288) — before program description
    (21, 0, "oral-b-partiel",          "service"),
    # Page 23: Oral B Intensif service image (36KB, 389x260) — before "Préparation TCO – Avancez vite"
    (23, 0, "oral-b-intensif",         "service"),
    # Page 25: Speech bubble (32KB) — SKIP (near "Mettre / Lien" booking links)
    # Page 26: Oral C Partiel service image (30KB, 370x247) — before "Préparation Oral C – Avancez à un rythme"
    (26, 0, "oral-c-partiel",          "service"),
    # Page 28: Oral C Intensif service image (34KB, 385x257) — before "Préparation Oral C – Atteignez rapidement"
    (28, 0, "oral-c-intensif",         "service"),
    # Page 29: Speech bubble (21KB) — SKIP (near "Mettre / Lien" booking links)

    # ═══ CAP SUR L'ORAL — Booking ═══
    # Page 30: Cap sur l'oral booking image (166KB, 451x301) — "Image 3B" label
    (30, 0, "cap-sur-loral-booking",   "booking"),

    # ═══ TCF PREPARATION — Intro ═══
    # Page 31: TCF Quebec intro (62KB, 312x208) — before "Le TCF Québec est un test officiel"
    (31, 0, "tcf-quebec-intro",        "service"),

    # ═══ TCF PREPARATION — Sub-services ═══
    # Page 32: TCF Quebec Partiel service image (73KB, 451x301) — before "Parcours TCF Québec"
    (32, 0, "tcf-quebec-partiel",      "service"),
    # Page 34: TCF Quebec Intensif service image (34KB, 378x252) — before "Atteignez rapidement un niveau B2 ou C1"
    (34, 0, "tcf-quebec-intensif",     "service"),
    # Page 35: Speech bubble (24KB) — SKIP (near "Lien Test / Lien calendly / Paiement")
    # Page 36: TCF Canada intro (63KB, 310x207) — before "Le TCF Canada est un test officiel"
    (36, 0, "tcf-canada-intro",        "service"),
    # Page 37: TCF Canada Partiel service image (38KB, 314x210) — before "Progressez vers un niveau B2 ou plus"
    (37, 0, "tcf-canada-partiel",      "service"),
    # Page 38: TCF Canada Intensif service image (33KB, 305x203) — before "Atteignez rapidement un niveau B2 ou C1"
    (38, 0, "tcf-canada-intensif",     "service"),
    # Page 39: Speech bubble (28KB) — SKIP (near "Lien Test / Lien calendly / Paiement")

    # ═══ TCF — Booking ═══
    # Page 35: Booking speech bubble for TCF (24KB)
    (35, 0, "preparation-tcf-booking", "booking"),

    # ═══ FORMATION EN SOLO — Hero ═══
    # Page 40: Formation Solo hero (197KB, 451x301) — "Image 4" label
    (40, 0, "formation-solo-hero",     "service"),
    # Pages 41-43: Speech bubbles (23-25KB) — SKIP (near "Mettre / Lien" booking links)
    # Solo forfaits reuse the hero image (no individual images in PDF)

    # ═══ FORMATION EN SOLO — Booking ═══
    # Page 41: Booking speech bubble for Solo (23KB)
    (41, 0, "formation-solo-booking",  "booking"),

    # ═══ ATELIERS — Hero + Service ═══
    # Page 44: Ateliers hero (188KB, 451x301) — "Image 5" label
    (44, 0, "ateliers-hero",           "service"),
    # Page 44: Speech bubble (24KB) — image [1] at top — SKIP
    # Page 45: Atelier Culture service image (39KB, 320x213) — before "Atelier Culture du Canada"
    (45, 0, "atelier-culture-canada",  "service"),
    # Page 47: Speech bubble (26KB) — SKIP (Atelier Maintien has no separate service image)

    # ═══ ATELIERS — Booking ═══
    # No explicit booking page for Ateliers; use hero as booking image
    # (Will copy ateliers-hero to ateliers-booking in post-processing)
]

# Service→display name mapping
SERVICE_NAMES = {
    'homepage-hero': 'Homepage Hero',
    'homepage-banner': 'Homepage Banner',
    'francais-express': 'Français Express',
    'soiree-linguo': 'Parcours Soirée Linguo',
    'samedis-francais': 'Parcours Samedis en français',
    'english-hero': 'English Pathways Hero',
    'english-express': 'English Express Pathway',
    'evening-lingo': 'Evening Lingo Pathway',
    'saturdays-english': 'Saturdays in English Pathway',
    'cap-sur-loral-hero': "Cap sur l'oral Hero",
    'cap-sur-loral-intro': "Cap sur l'oral Intro",
    'oral-b-partiel': 'Oral B – Temps partiel',
    'oral-b-intensif': 'Oral B – Intensif',
    'oral-c-partiel': 'Oral C – Temps partiel',
    'oral-c-intensif': 'Oral C – Intensif',
    'tcf-quebec-intro': 'TCF Québec Intro',
    'tcf-quebec-partiel': 'TCF Québec Partiel',
    'tcf-quebec-intensif': 'TCF Québec Intensif',
    'tcf-canada-intro': 'TCF Canada Intro',
    'tcf-canada-partiel': 'TCF Canada Partiel',
    'tcf-canada-intensif': 'TCF Canada Intensif',
    'formation-solo-hero': 'Formation en Solo Hero',
    'ateliers-hero': 'Ateliers Hero',
    'atelier-culture-canada': 'Atelier Culture du Canada',
    'parcours-linguistique-booking': 'Parcours Linguistique Booking',
    'english-booking': 'English Booking',
    'cap-sur-loral-booking': "Cap sur l'oral Booking",
    'preparation-tcf-booking': 'Préparation TCF Booking',
    'formation-solo-booking': 'Formation Solo Booking',
}

# Service-to-ID mapping for manifest
SERVICE_ID_MAP = {
    'francais-express': 'francais-express',
    'soiree-linguo': 'soiree-linguo',
    'samedis-francais': 'samedis-en-francais',
    'english-express': 'english-express',
    'evening-lingo': 'evening-lingo',
    'saturdays-english': 'saturdays-english',
    'cap-sur-loral-hero': 'cap-sur-l-oral',
    'cap-sur-loral-intro': 'cap-sur-l-oral',
    'oral-b-partiel': 'oral-b-partiel',
    'oral-b-intensif': 'oral-b-intensif',
    'oral-c-partiel': 'oral-c-partiel',
    'oral-c-intensif': 'oral-c-intensif',
    'tcf-quebec-intro': 'tcf-quebec',
    'tcf-quebec-partiel': 'tcf-quebec',
    'tcf-quebec-intensif': 'tcf-quebec-intensif',
    'tcf-canada-intro': 'tcf-canada',
    'tcf-canada-partiel': 'tcf-canada',
    'tcf-canada-intensif': 'tcf-canada-intensif',
    'formation-solo-hero': 'formation-solo',
    'ateliers-hero': 'ateliers',
    'atelier-culture-canada': 'ateliers',
}


def extract_raw_image(page, image_index=0):
    """Extract raw JPEG/PNG bytes from a page."""
    images = page.objects.get('image', [])
    if image_index >= len(images):
        return None, None
    obj = images[image_index]
    try:
        stream = obj['stream']
        data = stream.get_data()
        if data and len(data) > 500:
            if data[:2] == b'\xff\xd8':
                return data, '.jpg'
            elif data[:8] == b'\x89PNG\r\n\x1a\n':
                return data, '.png'
            else:
                return data, '.jpg'
    except Exception:
        pass
    return None, None


def process_image(img_bytes, max_width=1200, quality=90):
    """Convert to WebP, resize if needed, return bytes."""
    try:
        img = Image.open(io.BytesIO(img_bytes))
        if img.mode == 'RGBA':
            bg = Image.new('RGB', img.size, (255, 255, 255))
            bg.paste(img, mask=img.split()[3])
            img = bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')

        if img.width > max_width:
            ratio = max_width / img.width
            img = img.resize((max_width, int(img.height * ratio)), Image.LANCZOS)

        buf = io.BytesIO()
        img.save(buf, 'WEBP', quality=quality, method=6)
        return buf.getvalue(), img.size
    except Exception as e:
        print(f"    ERROR processing: {e}")
        return None, None


def main():
    if os.path.exists(SERVICES_DIR):
        shutil.rmtree(SERVICES_DIR)
    if os.path.exists(BOOKING_DIR):
        shutil.rmtree(BOOKING_DIR)

    os.makedirs(SERVICES_DIR, exist_ok=True)
    os.makedirs(BOOKING_DIR, exist_ok=True)

    print("=" * 70)
    print("CULTULANGUES — Correct Image Extraction")
    print("=" * 70)
    print(f"PDF: {PDF}")
    print(f"Services: {SERVICES_DIR}")
    print(f"Booking:  {BOOKING_DIR}")
    print()

    manifest = {}
    extracted = 0
    skipped = 0

    with pdfplumber.open(PDF) as pdf:
        for page_num, img_idx, name, category in EXTRACT:
            if page_num > len(pdf.pages):
                print(f"  P{page_num:2d} [{img_idx}]: Page out of range (skipped)")
                skipped += 1
                continue

            page = pdf.pages[page_num - 1]
            all_images = page.objects.get('image', [])
            if img_idx >= len(all_images):
                print(f"  P{page_num:2d} [{img_idx}]: Image index {img_idx} not found (only {len(all_images)} images) (skipped)")
                skipped += 1
                continue

            data, ext = extract_raw_image(page, image_index=img_idx)
            if not data:
                print(f"  P{page_num:2d} [{img_idx}]: No image data (skipped)")
                skipped += 1
                continue

            raw_kb = len(data) / 1024
            processed, size = process_image(data)
            if not processed:
                print(f"  P{page_num:2d} [{img_idx}]: Processing failed (skipped)")
                skipped += 1
                continue

            webp_kb = len(processed) / 1024

            if category == "booking":
                outdir = BOOKING_DIR
            else:
                outdir = SERVICES_DIR

            filename = f"{name}.webp"
            filepath = os.path.join(outdir, filename)
            with open(filepath, 'wb') as f:
                f.write(processed)

            display = SERVICE_NAMES.get(name, name)
            print(f"  P{page_num:2d} [{img_idx}]: {filename:40s} {raw_kb:6.0f}KB → {webp_kb:6.0f}KB  {size[0]}x{size[1]}  ({display})")

            if category == "service":
                sid = SERVICE_ID_MAP.get(name, name)
                if sid not in manifest:
                    manifest[sid] = []
                manifest[sid].append(filename)

            extracted += 1

    # Copy hero images as solo forfait stand-ins (no individual images in PDF)
    solo_hero = os.path.join(SERVICES_DIR, "formation-solo-hero.webp")
    for pkg in ["solo-5h", "solo-10h", "solo-15h", "solo-20h"]:
        dest = os.path.join(SERVICES_DIR, f"{pkg}.webp")
        shutil.copy2(solo_hero, dest)
        print(f"  COPY:  {pkg}.webp (uses formation-solo-hero.webp)")
        sid = 'formation-solo'
        if sid not in manifest:
            manifest[sid] = []
        manifest[sid].append(f"{pkg}.webp")
        extracted += 1

    # Copy ateliers hero as atelier-maintien stand-in (no individual image in PDF)
    ateliers_hero = os.path.join(SERVICES_DIR, "ateliers-hero.webp")
    maintien_dest = os.path.join(SERVICES_DIR, "atelier-maintien.webp")
    shutil.copy2(ateliers_hero, maintien_dest)
    print(f"  COPY:  atelier-maintien.webp (uses ateliers-hero.webp)")
    sid = 'ateliers'
    if sid not in manifest:
        manifest[sid] = []
    manifest[sid].append("atelier-maintien.webp")
    extracted += 1

    # Copy ateliers hero as atelier-booking
    ateliers_booking = os.path.join(BOOKING_DIR, "ateliers-booking.webp")
    shutil.copy2(ateliers_hero, ateliers_booking)
    print(f"  COPY:  ateliers-booking.webp (uses ateliers-hero.webp)")
    extracted += 1

    # Write manifest
    manifest_path = os.path.join(SERVICES_DIR, "manifest.json")
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    # Write service names
    names_path = os.path.join(SERVICES_DIR, "service-names.json")
    with open(names_path, 'w', encoding='utf-8') as f:
        json.dump(SERVICE_NAMES, f, ensure_ascii=False, indent=2)

    print()
    print("=" * 70)
    print(f"Extraction complete!")
    print(f"  Extracted: {extracted} images")
    print(f"  Skipped:   {skipped} (speech bubbles or missing)")
    print(f"  Services:  {manifest_path}")
    print(f"  Booking:   {BOOKING_DIR}")
    print("=" * 70)

    # Print summary of what was extracted
    print()
    print("EXTRACTED SERVICE IMAGES:")
    for sid, files in manifest.items():
        print(f"  {sid}: {', '.join(files)}")

    print()
    print("BOOKING IMAGES:")
    for f in os.listdir(BOOKING_DIR):
        if f.endswith('.webp'):
            kb = os.path.getsize(os.path.join(BOOKING_DIR, f)) / 1024
            print(f"  {f} ({kb:.0f}KB)")


if __name__ == '__main__':
    main()
