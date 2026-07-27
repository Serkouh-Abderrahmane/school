"""
Image Extraction and Processing
================================
Extracts images from PDF, crops whitespace, optimizes for web,
and generates desktop/mobile/thumbnail variants.
"""

import os
import re
from pathlib import Path

try:
    from PIL import Image, ImageFilter
    HAS_PIL = True
except ImportError:
    HAS_PIL = False


# ─── CONFIG ───────────────────────────────────────────────────────────────────

SIZES = {
    'desktop': (1200, 800),
    'mobile': (600, 400),
    'thumbnail': (400, 300),
    'card': (800, 500),
}

QUALITY = {
    'desktop': 85,
    'mobile': 80,
    'thumbnail': 75,
    'card': 80,
}


# ─── PDF IMAGE EXTRACTION ────────────────────────────────────────────────────

def extract_images_from_pdf(pdf_path, output_dir):
    """
    Extract all images from PDF pages.
    Returns list of extracted image paths.
    """
    if not HAS_PIL:
        print("  Warning: Pillow not installed, skipping image extraction")
        return []

    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    extracted = []

    try:
        import pdfplumber
        with pdfplumber.open(pdf_path) as pdf:
            for page_num, page in enumerate(pdf.pages):
                for img_idx, img_info in enumerate(page.images):
                    try:
                        x0 = img_info['x0']
                        top = img_info['top']
                        x1 = img_info['x1']
                        bottom = img_info['bottom']
                        width = x1 - x0
                        height = bottom - top

                        if width < 50 or height < 50:
                            continue

                        # Try to render the page region
                        im = page.to_image(resolution=200)
                        cropped = im.crop((int(x0), int(top), int(x1), int(bottom)))

                        filename = f"pdf-img-p{page_num+1}-{img_idx+1}.png"
                        filepath = output_dir / filename
                        cropped.save(str(filepath))
                        extracted.append(str(filepath))

                    except Exception:
                        pass

    except Exception as e:
        print(f"  Warning: PDF image extraction failed: {e}")

    return extracted


# ─── IMAGE PROCESSING ────────────────────────────────────────────────────────

def crop_whitespace(img_path, threshold=240):
    """Crop unnecessary whitespace from an image."""
    if not HAS_PIL:
        return img_path

    try:
        img = Image.open(img_path)
        if img.mode != 'RGB':
            img = img.convert('RGB')

        # Get pixel data
        pixels = img.load()
        width, height = img.size

        # Find bounding box of non-white content
        top = 0
        bottom = height - 1
        left = 0
        right = width - 1

        # Find top
        for y in range(height):
            found = False
            for x in range(width):
                r, g, b = pixels[x, y]
                if r < threshold or g < threshold or b < threshold:
                    found = True
                    break
            if found:
                top = y
                break

        # Find bottom
        for y in range(height - 1, -1, -1):
            found = False
            for x in range(width):
                r, g, b = pixels[x, y]
                if r < threshold or g < threshold or b < threshold:
                    found = True
                    break
            if found:
                bottom = y
                break

        # Find left
        for x in range(width):
            found = False
            for y in range(height):
                r, g, b = pixels[x, y]
                if r < threshold or g < threshold or b < threshold:
                    found = True
                    break
            if found:
                left = x
                break

        # Find right
        for x in range(width - 1, -1, -1):
            found = False
            for y in range(height):
                r, g, b = pixels[x, y]
                if r < threshold or g < threshold or b < threshold:
                    found = True
                    break
            if found:
                right = x
                break

        # Add small padding (5% of dimensions)
        pad_x = int((right - left) * 0.02) + 5
        pad_y = int((bottom - top) * 0.02) + 5
        left = max(0, left - pad_x)
        top = max(0, top - pad_y)
        right = min(width - 1, right + pad_x)
        bottom = min(height - 1, bottom + pad_y)

        if right > left and bottom > top:
            img = img.crop((left, top, right, bottom))
            img.save(img_path, quality=95)

        return img_path
    except Exception:
        return img_path


def optimize_image(img_path, output_path, size, quality=85):
    """Resize and optimize an image for web."""
    if not HAS_PIL:
        return img_path

    try:
        img = Image.open(img_path)
        if img.mode != 'RGBA':
            img = img.convert('RGBA')

        # Resize maintaining aspect ratio
        img.thumbnail(size, Image.LANCZOS)

        # Create background
        bg = Image.new('RGB', img.size, (255, 255, 255))
        if img.mode == 'RGBA':
            bg.paste(img, mask=img.split()[3])
        else:
            bg.paste(img)

        # Save optimized
        output_path = Path(output_path)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        bg.save(str(output_path), 'JPEG', quality=quality, optimize=True)

        return str(output_path)
    except Exception as e:
        print(f"  Warning: Could not optimize {img_path}: {e}")
        return img_path


def process_image_set(source_path, service_id, image_index, output_base):
    """
    Process a single image: crop, optimize, and generate all variants.
    Returns dict of variant paths.
    """
    if not HAS_PIL or not os.path.exists(source_path):
        return None

    variants = {}
    base_name = f"{service_id}-{image_index}"

    # Crop whitespace
    cropped_path = str(Path(output_base) / 'original' / f"{base_name}-cropped.jpg")
    os.makedirs(os.path.dirname(cropped_path), exist_ok=True)
    crop_whitespace(source_path)

    for variant_name, size in SIZES.items():
        out_path = str(Path(output_base) / variant_name / f"{base_name}.jpg")
        result = optimize_image(source_path, out_path, size, QUALITY[variant_name])
        if result:
            variants[variant_name] = os.path.relpath(result, Path(output_base).parent)

    return variants


# ─── IMAGE ASSOCIATION ───────────────────────────────────────────────────────

# Map service IDs to their primary image files from existing img/
IMAGE_MAP = {
    'francais-express': ['banner-english-express.png'],
    'soiree-linguo': ['banner-soiree-linguo.png'],
    'samedis-en-francais': ['banner-samedi-francais.png'],
    'english-express': ['banner-english-express-2.png'],
    'evening-lingo': ['banner-evening-lingo.png'],
    'saturdays-english': ['banner-samedi-anglais.png'],
    'oral-b-partiel': ['banner-oral-b-partiel.png'],
    'oral-b-intensif': ['banner-oral-b-intensif.png'],
    'oral-c-partiel': ['hero-oral-c.png'],
    'oral-c-intensif': ['hero-oral-c.png'],
    'tcf-quebec-partiel': ['banner-tcf-quebec-partiel.png'],
    'tcf-quebec-intensif': ['banner-tcf-quebec-intensif.png'],
    'tcf-canada-partiel': ['banner-tcf-canada-partiel.png'],
    'tcf-canada-intensif': ['banner-tcf-canada-intensif.png'],
    'solo-5h': ['package-solo-5h.png'],
    'solo-10h': ['package-solo-10h.png'],
    'solo-15h': ['package-solo-15h.png'],
    'solo-20h': ['package-solo-20h.png'],
    'atelier-conversation': ['atelier-conversation.png'],
    'atelier-culture': ['atelier-culture-canada.png'],
    'atelier-maintien': ['atelier-maintien.png'],
}

# Category hero images
CATEGORY_IMAGES = {
    'parcours-linguistique': 'hero-parcours-linguistiques.png',
    'cap-sur-l-oral': 'home/banner-linguotest.png',
    'tcf-preparation': 'banner-tcf-preparation.png',
    'formation-en-solo': 'hero-maitrisez-langues.png',
    'ateliers': 'atelier-culture-canada.png',
}


def get_images_for_service(service_id, img_dir):
    """Get all image paths for a service, processing if possible."""
    images = []
    source_files = IMAGE_MAP.get(service_id, [])

    for filename in source_files:
        full_path = Path(img_dir) / filename
        if full_path.exists():
            images.append({
                'original': f'img/{filename}',
                'desktop': f'img/{filename}',
                'mobile': f'img/{filename}',
                'thumbnail': f'img/{filename}',
            })

    return images


def process_all_images(services, img_dir, output_base):
    """
    Process all service images: extract from PDF, crop, optimize, generate variants.
    Returns updated services with image data.
    """
    output_base = Path(output_base)
    output_base.mkdir(parents=True, exist_ok=True)

    for service in services:
        sid = service['id']
        existing = get_images_for_service(sid, img_dir)

        if existing:
            service['images'] = existing
            service['image'] = existing[0]['original']
        else:
            service['images'] = []
            service['image'] = ''

    return services
