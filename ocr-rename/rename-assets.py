"""Rename all images in cultulangues/img to clean descriptive filenames."""
import re
from pathlib import Path

IMG = Path(r"C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\img")

def clean_stem(name):
    stem = Path(name).stem.lower()
    stem = stem.replace("cultulangues", "").replace("gultulangues", "").replace("culalangues", "").replace("cultulangnes", "").replace("cuhulangues", "").replace("gihulangues", "").replace("giulangues", "").replace("cultulangues_", "").strip()
    stem = re.sub(r'[^a-z0-9&\s]', ' ', stem)
    stem = re.sub(r'\s+', ' ', stem).strip()
    return stem

mapping = {}

for f in sorted(IMG.iterdir()):
    if not f.is_file() or f.suffix.lower() not in ('.png', '.jpg', '.jpeg', '.webp'):
        continue
    name = f.name
    low = name.lower()

    # Build a clean name based on keywords in the filename
    if 'maitrisez' in low or 'transformez' in low:
        new = 'hero-maitrisez-langues.png'
    elif 'parcours linguistiques' in low and '1 ' in low:
        new = 'hero-parcours-linguistiques.png'
    elif 'parcours linguistiques' in low:
        new = 'banner-parcours-linguistiques.png'
    elif 'inscrivez-vous' in low and 'parcours' in low:
        new = 'cta-inscrivez-vous.png'
    elif 'sign up' in low:
        new = 'cta-sign-up.png'
    elif 'aventure tcf canada' in low or 'demarre' in low:
        new = 'hero-tcf-canada.png'
    elif 'reussite au tcf qu' in low or 'debute votre reussite' in low:
        new = 'hero-tcf-quebec.png'
    elif 'samedis' in low and 'franc' in low:
        new = 'banner-samedi-francais.png'
    elif 'saturdays' in low or 'saturday' in low:
        new = 'banner-samedi-anglais.png'
    elif 'preparation tcf canada' in low and 'comprehension' in low:
        new = 'banner-tcf-canada-comprehension.png'
    elif 'preparation tcf' in low and '39 questions' in low:
        new = 'banner-tcf-preparation.png'
    elif 'tcf canada' in low and 'temps partiel' in low:
        new = 'banner-tcf-canada-partiel.png'
    elif 'tcf canada' in low and 'intensif' in low:
        new = 'banner-tcf-canada-intensif.png'
    elif 'franc' in low and 'express' in low and 'pafcouis' in low:
        new = 'banner-english-express.png'
    elif 'preparation tcf qu' in low:
        new = 'banner-tcf-quebec-details.png'
    elif 'tcf qu' in low and 'intensif' in low:
        new = 'banner-tcf-quebec-intensif.png'
    elif 'tcf qu' in low and 'temps partiel' in low:
        new = 'banner-tcf-quebec-partiel.png'
    elif 'oral c' in low and 'mettez' in low:
        new = 'hero-oral-c.png'
    elif 'oral b' in low and 'temps partiel' in low:
        new = 'banner-oral-b-partiel.png'
    elif 'oral b' in low and 'intensif' in low:
        new = 'banner-oral-b-intensif.png'
    elif 'oral b' in low and 'confiance' in low:
        new = 'cta-oral-b.png'
    elif 'sur loral' in low and 'temps' in low:
        new = 'banner-oral-partiel.png'
    elif 'sur loral' in low and 'intensif' in low:
        new = 'banner-oral-intensif.png'
    elif 'linguotest' in low and 'cap sur' in low:
        new = 'banner-linguotest.png'
    elif 'linguotest' in low and 'question 5' in low:
        new = 'banner-linguotest-online.png'
    elif 'english express' in low:
        new = 'banner-english-express-2.png'
    elif 'english linguistic' in low:
        new = 'banner-english-linguistic.png'
    elif 'evening lingo' in low:
        new = 'banner-evening-lingo.png'
    elif 'soiree linguo' in low or 'soir' in low:
        new = 'banner-soiree-linguo.png'
    elif 'formation en solo' in low and '5 h' in low:
        new = 'package-solo-5h.png'
    elif 'formation en solo' in low and '10 h' in low:
        new = 'package-solo-10h.png'
    elif 'formation en solo' in low and '15 h' in low:
        new = 'package-solo-15h.png'
    elif 'formation en solo' in low and '20 h' in low:
        new = 'package-solo-20h.png'
    elif 'formationen solo' in low or '@1' in low:
        new = 'package-solo-a1.png'
    elif 'atelier de conversation' in low:
        new = 'atelier-conversation.png'
    elif 'atelier culture' in low:
        new = 'atelier-culture-canada.png'
    elif 'maintien' in low or 'renforcement' in low:
        new = 'atelier-maintien.png'
    elif 'pratiquons' in low or 'ateliers d' in low:
        new = 'ateliers-banner.png'
    else:
        print(f"UNMATCHED: {name}")
        continue

    src = IMG / name
    dst = IMG / new
    if dst.exists():
        print(f"SKIP (exists): {name} -> {new}")
        continue
    src.rename(dst)
    print(f"{name}\n  -> {new}")

print("\nDone.")
