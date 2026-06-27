# OCR Image Renamer

Automatically renames every image inside an `img/` folder based on the
visible text detected in each image.

## Usage

```
python rename_images.py
```

No arguments. No GUI. Just run it.

## How it works

1. Scans `img/` (and subfolders) for supported images.
2. Preprocesses each image (grayscale, contrast, sharpen, threshold).
3. Runs EasyOCR to extract visible text.
4. Cleans the text into a valid filename.
5. Renames the file.
6. Writes `rename_backup.json` and `rename_log.txt`.

## Supported formats

`.jpg` `.jpeg` `.png` `.webp` `.bmp` `.tif` `.tiff`

## Project structure

```
ocr-rename/
├── rename_images.py     Main script — run this
├── undo_rename.py        Restore original filenames from backup
├── requirements.txt      Python dependencies
├── README.md             This file
├── img/                  Place your images here
├── rename_backup.json    Created after first run
└── rename_log.txt        Created after first run
```

## Undo

```
python undo_rename.py
```

Restores every original filename from `rename_backup.json`.

## Requirements

- Python 3.8+
- EasyOCR
- OpenCV
- Pillow
- NumPy

```
pip install -r requirements.txt
```

No paid APIs. No cloud services. No internet required after initial
installation (model files are downloaded once).
