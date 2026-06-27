#!/usr/bin/env python3
"""
rename_images.py — Automatic OCR Image Renamer

Scans every image inside the ./img folder, extracts visible text with
EasyOCR, then renames each image to match the detected text.

Usage:
    python rename_images.py

No arguments, no GUI, no interaction — just run it.
"""

import os
import re
import json
import sys
import unicodedata
import traceback
from pathlib import Path

# ---------------------------------------------------------------------------
# CONFIG
# ---------------------------------------------------------------------------
SCRIPT_DIR = Path(__file__).resolve().parent
IMG_DIR = SCRIPT_DIR.parent / "cultulangues" / "img"
BACKUP_FILE = SCRIPT_DIR / "rename_backup.json"
LOG_FILE = SCRIPT_DIR / "rename_log.txt"

SUPPORTED_EXTENSIONS = {
    ".jpg", ".jpeg", ".png", ".webp",
    ".bmp", ".tif", ".tiff",
}

MAX_FILENAME_CHARS = 120

# ---------------------------------------------------------------------------
# IMAGE PREPROCESSING  (improves EasyOCR accuracy significantly)
# ---------------------------------------------------------------------------
def preprocess(image_path):
    import cv2
    import numpy as np

    img = cv2.imread(str(image_path))
    if img is None:
        return None

    # 1. Grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    h, w = gray.shape

    # 2. Upscale very small images
    if h < 400 or w < 400:
        scale = max(400 / h, 400 / w)
        gray = cv2.resize(gray, None, fx=scale, fy=scale,
                          interpolation=cv2.INTER_CUBIC)

    # 3. CLAHE contrast enhancement
    clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)

    # 4. Sharpen
    kernel = np.array([
        [-1, -1, -1],
        [-1,  9, -1],
        [-1, -1, -1],
    ])
    sharpened = cv2.filter2D(enhanced, -1, kernel)

    # 5. Otsu thresholding → pure binary
    _, binary = cv2.threshold(sharpened, 0, 255,
                              cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    return binary


# ---------------------------------------------------------------------------
# OCR  (EasyOCR)
# ---------------------------------------------------------------------------
_READER = None

def get_reader():
    global _READER
    if _READER is None:
        import easyocr
        print("Loading EasyOCR (first run may download models)...")
        _READER = easyocr.Reader(["en", "fr"], gpu=False, verbose=False)
        print("Ready.\n")
    return _READER


def extract_text(image_path):
    processed = preprocess(image_path)
    if processed is None:
        return ""

    reader = get_reader()
    results = reader.readtext(processed)

    if not results:
        return ""

    # Sort top-to-bottom, then left-to-right
    results.sort(key=lambda r: (round(r[0][0][1], -1), r[0][0][0]))

    lines = [r[1].strip() for r in results if r[1].strip()]
    return " ".join(lines)


# ---------------------------------------------------------------------------
# FILENAME CLEANING
# ---------------------------------------------------------------------------
def strip_emojis(text):
    emoji_pattern = re.compile(
        "["
        "\U0001F600-\U0001F64F"   # emoticons
        "\U0001F300-\U0001F5FF"   # symbols & pictographs
        "\U0001F680-\U0001F6FF"   # transport
        "\U0001F1E0-\U0001F1FF"   # flags
        "\U00002500-\U00002BEF"   # CJK
        "\U00002702-\U000027B0"
        "\U000024C2-\U0001F251"
        "\U0001F926-\U0001F937"
        "\U00010000-\U0010FFFF"
        "\u200d"
        "\u2640-\u2642"
        "\u2600-\u2B55"
        "\u23cf"
        "\u23e9"
        "\u231a"
        "\ufe0f"
        "\u3030"
        "]+", flags=re.UNICODE
    )
    return emoji_pattern.sub("", text)


def clean_filename(text):
    text = strip_emojis(text)

    # Normalise Unicode (fullwidth → ASCII, etc.)
    text = unicodedata.normalize("NFKC", text)

    # Replace newlines / tabs with spaces
    text = text.replace("\n", " ").replace("\r", " ").replace("\t", " ")

    # Remove absolutely-illegal filesystem characters
    text = re.sub(r'[<>:"/\\|?*]', " ", text)

    # Replace most non-alphanumeric non-space characters with spaces
    # but keep hyphens, apostrophes, periods (for readability).
    text = re.sub(r"[^\w\s\-'.,;:!?&()@#%$€£+=~]", " ", text)

    # Remove repeated punctuation  (e.g. "!!!" → "!")
    text = re.sub(r"([.,;:!?])\1+", r"\1", text)

    # Collapse multiple spaces
    text = re.sub(r"\s+", " ", text).strip()

    # Strip leading / trailing dots, hyphens, spaces
    text = text.strip(" .-")

    return text


def safe_filename(stem, extension):
    """Return a filesystem-safe full filename (stem + extension)."""
    stem = clean_filename(stem)

    if not stem:
        return ""

    max_stem_len = MAX_FILENAME_CHARS - len(extension)
    if max_stem_len < 5:
        max_stem_len = 5

    if len(stem) > max_stem_len:
        stem = stem[:max_stem_len].rstrip()

    return stem + extension


# ---------------------------------------------------------------------------
# DUPLICATE HANDLING
# ---------------------------------------------------------------------------
def resolve_path(directory, stem, extension):
    """Return a Path that does not exist yet, appending (N) if needed."""
    candidate = directory / f"{stem}{extension}"
    if not candidate.exists():
        return candidate

    n = 1
    while True:
        candidate = directory / f"{stem} ({n}){extension}"
        if not candidate.exists():
            return candidate
        n += 1


# ---------------------------------------------------------------------------
# PROGRESS PRINTER
# ---------------------------------------------------------------------------
def print_progress(current, total, old_name, new_name, skipped=False, reason=""):
    if skipped:
        print(f"[{current}/{total}]")
        print("Skipped:")
        print(old_name)
        print()
        print(f"Reason: {reason}")
        print("-" * 28)
        return

    print(f"[{current}/{total}]")
    print(old_name)
    print()
    print("\u2193")
    print()
    print(new_name)
    print()
    print("\u2714 Done")
    print("-" * 28)


# ---------------------------------------------------------------------------
# MAIN
# ---------------------------------------------------------------------------
def main():
    print("Scanning img folder...\n")

    if not IMG_DIR.is_dir():
        print(f"Error: folder not found — {IMG_DIR}")
        print("Place this script next to an 'img' directory.")
        sys.exit(1)

    # Gather images recursively, case-insensitive extension match
    images = []
    for ext in SUPPORTED_EXTENSIONS:
        images.extend(IMG_DIR.rglob(f"*{ext}"))
        images.extend(IMG_DIR.rglob(f"*{ext.upper()}"))

    # Deduplicate and sort
    images = sorted(set(p.resolve() for p in images))

    if not images:
        print("No supported images found.")
        sys.exit(0)

    print(f"Found {len(images)} images.\n")

    # Pre-heat OCR reader
    get_reader()

    # ------------------------------------------------------------------
    # Pass 1 — build rename map + detect skips
    # ------------------------------------------------------------------
    rename_map = {}       # str(original_abs) → str(new_abs)
    skip_list = []        # (Path, reason)

    total = len(images)

    for idx, img_path in enumerate(images, 1):
        orig_ext = img_path.suffix.lower()

        try:
            text = extract_text(img_path)
        except Exception as exc:
            print(f"[{idx}/{total}]")
            print(img_path.name)
            print(f"Error: {exc}")
            traceback.print_exc()
            print("-" * 28)
            skip_list.append((img_path, str(exc)))
            continue

        if not text.strip():
            print_progress(idx, total, img_path.name, None,
                           skipped=True, reason="No readable text detected.")
            skip_list.append((img_path, "No readable text detected."))
            continue

        new_name = safe_filename(text.strip(), orig_ext)
        if not new_name:
            print_progress(idx, total, img_path.name, None,
                           skipped=True, reason="No readable text detected.")
            skip_list.append((img_path, "No readable text detected."))
            continue

        # Keep image in same relative subfolder under img/
        rel_dir = img_path.parent.relative_to(IMG_DIR) \
                  if img_path.parent != IMG_DIR else Path(".")
        target_dir = IMG_DIR / rel_dir

        stem = Path(new_name).stem
        new_path = resolve_path(target_dir, stem, orig_ext)

        print_progress(idx, total, img_path.name, new_path.name)
        rename_map[str(img_path.resolve())] = str(new_path.resolve())

    # ------------------------------------------------------------------
    # Save backup BEFORE touching any files
    # ------------------------------------------------------------------
    try:
        with open(BACKUP_FILE, "w", encoding="utf-8") as f:
            json.dump(rename_map, f, indent=2, ensure_ascii=False)
        print(f"Backup saved \u2192 {BACKUP_FILE.name}")
    except Exception as e:
        print(f"Warning: could not write backup — {e}")

    # ------------------------------------------------------------------
    # Pass 2 — execute renames
    # ------------------------------------------------------------------
    renamed = 0
    for orig_str, new_str in rename_map.items():
        orig_path = Path(orig_str)
        new_path = Path(new_str)
        try:
            new_path.parent.mkdir(parents=True, exist_ok=True)
            orig_path.rename(new_path)
            renamed += 1
        except Exception as e:
            print(f"Error renaming {orig_path.name}: {e}")
            skip_list.append((orig_path, str(e)))

    # ------------------------------------------------------------------
    # Write log
    # ------------------------------------------------------------------
    try:
        with open(LOG_FILE, "w", encoding="utf-8") as f:
            for orig_str, new_str in rename_map.items():
                f.write(f"{Path(orig_str).name}\n\u2192\n{Path(new_str).name}\n\n")
            if skip_list:
                f.write("Skipped:\n")
                for img, reason in skip_list:
                    f.write(f"{img.name}\n-\nReason: {reason}\n\n")
        print(f"Log saved \u2192 {LOG_FILE.name}")
    except Exception as e:
        print(f"Warning: could not write log — {e}")

    # ------------------------------------------------------------------
    # Summary
    # ------------------------------------------------------------------
    print(f"\nFinished.")
    print(f"{renamed} images renamed.")
    if skip_list:
        print(f"{len(skip_list)} skipped.")

    if rename_map:
        print(f"\nTo undo, run:  python undo_rename.py")


if __name__ == "__main__":
    main()
