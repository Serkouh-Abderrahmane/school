#!/usr/bin/env python3
"""
Content Extraction Pipeline for Cultulangues
=============================================
Orchestrator that runs all modules to extract content from the PDF
and generate JSON, images, SEO, validation, search, navigation, and detail pages.

Usage:
    python extract-services.py [path_to_pdf]
    npm run sync-content
"""

import json
import os
import sys
import datetime
from pathlib import Path

import pdfplumber

# Ensure UTF-8 output on Windows
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

SCRIPT_DIR = Path(__file__).resolve().parent
DEFAULT_PDF = SCRIPT_DIR / "img" / "contenu plateforme-juin 2026.pdf"
CONTENT_DIR = SCRIPT_DIR / "content"
IMG_DIR = SCRIPT_DIR / "img"
PAGES_DIR = SCRIPT_DIR / "pages"

# ─── SERVICE DEFINITIONS ─────────────────────────────────────────────────────
# The 21 definitive services from the platform document.

SERVICE_DEFINITIONS = [
    {
        'id': 'francais-express',
        'title': 'Francais Express',
        'subtitle': 'Progressez vite, gagnez en confiance',
        'category': 'parcours-linguistique',
        'language': 'fr',
        'format': 'intensif',
        'pageUrl': 'pages/francais-express.html',
        'bookingUrl': 'booking.html?course=francais-express',
        'image': 'img/banner-english-express.png',
        'metaDescription': 'Cours de francais intensif en petit groupe a Gatineau. 4 semaines pour progresser et gagner en confiance.',
        'keywords': ['cours francais', 'formation intensive', 'Gatineau', 'petit groupe'],
    },
    {
        'id': 'soiree-linguo',
        'title': 'Parcours Soiree Linguo',
        'subtitle': 'Apprenez le francais sans bouleverser votre horaire',
        'category': 'parcours-linguistique',
        'language': 'fr',
        'format': 'partiel',
        'pageUrl': 'pages/soiree-linguo.html',
        'bookingUrl': 'booking.html?course=soiree-linguo',
        'image': 'img/banner-soiree-linguo.png',
        'metaDescription': 'Cours de francais le soir a Gatineau. Apprenez en 8 semaines sans perturber votre emploi du temps.',
        'keywords': ['cours soir', 'francais soiree', 'Gatineau', 'flexible'],
    },
    {
        'id': 'samedis-en-francais',
        'title': 'Parcours Samedis en francais',
        'subtitle': 'Une immersion efficace chaque semaine',
        'category': 'parcours-linguistique',
        'language': 'fr',
        'format': 'intensif',
        'pageUrl': 'pages/samedis-en-francais.html',
        'bookingUrl': 'booking.html?course=samedis-francais',
        'image': 'img/banner-samedi-francais.png',
        'metaDescription': 'Cours de francais le samedi a Gatineau. Immersion hebdomadaire pour progresser rapidement.',
        'keywords': ['cours samedi', 'immersion samedi', 'Gatineau', 'francais'],
    },
    {
        'id': 'english-express',
        'title': 'English Express Pathway',
        'subtitle': 'Improve your English in just 4 weeks',
        'category': 'parcours-linguistique',
        'language': 'en',
        'format': 'intensif',
        'pageUrl': 'pages/english-express-pathway.html',
        'bookingUrl': 'booking.html?course=english-express',
        'image': 'img/banner-english-express-2.png',
        'metaDescription': 'Intensive English course in Gatineau. 4-week program to improve your English fast in small groups.',
        'keywords': ['English course', 'intensive English', 'Gatineau', 'small group'],
    },
    {
        'id': 'evening-lingo',
        'title': 'Evening Lingo Pathway',
        'subtitle': 'Learn English at a pace that fits your life',
        'category': 'parcours-linguistique',
        'language': 'en',
        'format': 'partiel',
        'pageUrl': 'pages/evening-lingo-pathway.html',
        'bookingUrl': 'booking.html?course=evening-lingo',
        'image': 'img/banner-evening-lingo.png',
        'metaDescription': 'Evening English course in Gatineau. 8-week flexible program to learn English after work.',
        'keywords': ['evening English', 'flexible', 'Gatineau', 'part-time'],
    },
    {
        'id': 'saturdays-english',
        'title': 'Saturdays in English Pathway',
        'subtitle': 'A weekly immersion for fast, effective progress',
        'category': 'parcours-linguistique',
        'language': 'en',
        'format': 'intensif',
        'pageUrl': 'pages/saturdays-in-english-pathway.html',
        'bookingUrl': 'booking.html?course=saturdays-english',
        'image': 'img/banner-samedi-anglais.png',
        'metaDescription': 'Saturday English immersion in Gatineau. Weekly sessions to improve English rapidly.',
        'keywords': ['Saturday English', 'immersion', 'Gatineau', 'weekly'],
    },
    {
        'id': 'oral-b-partiel',
        'title': 'Oral B - Temps partiel',
        'subtitle': 'Progressez a un rythme regulier et efficace',
        'category': 'cap-sur-l-oral',
        'language': 'fr',
        'format': 'partiel',
        'level': 'B',
        'pageUrl': 'pages/oral-b-partiel.html',
        'bookingUrl': 'booking.html?course=oral-b-partiel',
        'image': 'img/banner-oral-b-partiel.png',
        'metaDescription': 'Preparation orale niveau B a Gatineau. Cours partiel pour progresser regulierement.',
        'keywords': ['oral francais', 'niveau B', 'Gatineau', 'partiel'],
    },
    {
        'id': 'oral-b-intensif',
        'title': 'Oral B - Intensif',
        'subtitle': 'Avancez vite et obtenez des resultats concrets',
        'category': 'cap-sur-l-oral',
        'language': 'fr',
        'format': 'intensif',
        'level': 'B',
        'pageUrl': 'pages/oral-b-intensif.html',
        'bookingUrl': 'booking.html?course=oral-b-intensif',
        'image': 'img/banner-oral-b-intensif.png',
        'metaDescription': 'Preparation orale intensive niveau B a Gatineau. Progressez vite avec des resultats concrets.',
        'keywords': ['oral intensif', 'niveau B', 'Gatineau', 'resultats'],
    },
    {
        'id': 'oral-c-partiel',
        'title': 'Oral C - Temps partiel',
        'subtitle': 'Avancez a un rythme qui vous convient',
        'category': 'cap-sur-l-oral',
        'language': 'fr',
        'format': 'partiel',
        'level': 'C',
        'pageUrl': 'pages/oral-c-partiel.html',
        'bookingUrl': 'booking.html?course=oral-c-partiel',
        'image': 'img/hero-oral-c.png',
        'metaDescription': 'Preparation orale niveau C a Gatineau. Programme partiel pour un niveau avance.',
        'keywords': ['oral niveau C', 'avance', 'Gatineau', 'partiel'],
    },
    {
        'id': 'oral-c-intensif',
        'title': 'Oral C - Intensif',
        'subtitle': 'Atteignez rapidement un niveau avance et performant',
        'category': 'cap-sur-l-oral',
        'language': 'fr',
        'format': 'intensif',
        'level': 'C',
        'pageUrl': 'pages/oral-c-intensif.html',
        'bookingUrl': 'booking.html?course=oral-c-intensif',
        'image': 'img/hero-oral-c.png',
        'metaDescription': 'Preparation orale intensive niveau C a Gatineau. Atteignez un niveau avance rapidement.',
        'keywords': ['oral intensif', 'niveau C', 'Gatineau', 'performant'],
    },
    {
        'id': 'tcf-quebec-partiel',
        'title': 'Parcours TCF Quebec',
        'subtitle': 'Progressez vers le niveau B2 en douceur et avec constance',
        'category': 'tcf-preparation',
        'language': 'fr',
        'format': 'partiel',
        'tcfType': 'quebec',
        'pageUrl': 'pages/tcf-quebec-partiel.html',
        'bookingUrl': 'booking.html?course=tcf-quebec-partiel',
        'image': 'img/banner-tcf-quebec-partiel.png',
        'metaDescription': 'Preparation TCF Quebec a Gatineau. Programme partiel pour atteindre le niveau B2.',
        'keywords': ['TCF Quebec', 'B2', 'Gatineau', 'partiel'],
    },
    {
        'id': 'tcf-quebec-intensif',
        'title': 'TCF Quebec Intensif',
        'subtitle': 'Atteignez rapidement un niveau B2 ou C1',
        'category': 'tcf-preparation',
        'language': 'fr',
        'format': 'intensif',
        'tcfType': 'quebec',
        'pageUrl': 'pages/tcf-quebec-intensif.html',
        'bookingUrl': 'booking.html?course=tcf-quebec-intensif',
        'image': 'img/banner-tcf-quebec-intensif.png',
        'metaDescription': 'Preparation TCF Quebec intensive a Gatineau. Atteignez B2 ou C1 rapidement.',
        'keywords': ['TCF Quebec', 'intensif', 'B2', 'C1', 'Gatineau'],
    },
    {
        'id': 'tcf-canada-partiel',
        'title': 'Parcours TCF Canada',
        'subtitle': 'Progressez vers un niveau B2 ou plus',
        'category': 'tcf-preparation',
        'language': 'fr',
        'format': 'partiel',
        'tcfType': 'canada',
        'pageUrl': 'pages/tcf-canada-partiel.html',
        'bookingUrl': 'booking.html?course=tcf-canada-partiel',
        'image': 'img/banner-tcf-canada-partiel.png',
        'metaDescription': 'Preparation TCF Canada a Gatineau. Programme partiel pour niveau B2 et plus.',
        'keywords': ['TCF Canada', 'B2', 'Gatineau', 'partiel'],
    },
    {
        'id': 'tcf-canada-intensif',
        'title': 'TCF Canada Intensif',
        'subtitle': 'Atteignez rapidement un niveau B2 ou C1',
        'category': 'tcf-preparation',
        'language': 'fr',
        'format': 'intensif',
        'tcfType': 'canada',
        'pageUrl': 'pages/tcf-canada-intensif.html',
        'bookingUrl': 'booking.html?course=tcf-canada-intensif',
        'image': 'img/banner-tcf-canada-intensif.png',
        'metaDescription': 'Preparation TCF Canada intensive a Gatineau. Atteignez B2 ou C1 rapidement.',
        'keywords': ['TCF Canada', 'intensif', 'B2', 'C1', 'Gatineau'],
    },
    {
        'id': 'solo-5h',
        'title': 'Forfait Decouverte',
        'subtitle': 'Ideal pour decouvrir la methode ou pour un besoin ponctuel',
        'category': 'formation-en-solo',
        'language': 'fr',
        'format': 'solo',
        'pageUrl': 'pages/formation-en-solo.html',
        'bookingUrl': 'booking.html?course=solo&program=5h',
        'image': 'img/package-solo-5h.png',
        'metaDescription': 'Formation solo 5h a Gatineau. Decouvrez la methode Cultulangues en accompagnement individuel.',
        'keywords': ['formation solo', '5h', 'individuel', 'Gatineau'],
    },
    {
        'id': 'solo-10h',
        'title': 'Forfait Essentiel',
        'subtitle': 'Un accompagnement regulier pour progresser en profondeur',
        'category': 'formation-en-solo',
        'language': 'fr',
        'format': 'solo',
        'pageUrl': 'pages/formation-en-solo.html',
        'bookingUrl': 'booking.html?course=solo&program=10h',
        'image': 'img/package-solo-10h.png',
        'metaDescription': 'Formation solo 10h a Gatineau. Accompagnement regulier pour progresser en profondeur.',
        'keywords': ['formation solo', '10h', 'regulier', 'Gatineau'],
    },
    {
        'id': 'solo-15h',
        'title': 'Forfait Acceleration',
        'subtitle': 'Un programme complet pour atteindre vos objectifs rapidement',
        'category': 'formation-en-solo',
        'language': 'fr',
        'format': 'solo',
        'pageUrl': 'pages/formation-en-solo.html',
        'bookingUrl': 'booking.html?course=solo&program=15h',
        'image': 'img/package-solo-15h.png',
        'metaDescription': 'Formation solo 15h a Gatineau. Programme complet pour atteindre vos objectifs.',
        'keywords': ['formation solo', '15h', 'acceleration', 'Gatineau'],
    },
    {
        'id': 'solo-20h',
        'title': 'Forfait Excellence',
        'subtitle': "L'accompagnement le plus complet pour des resultats durables",
        'category': 'formation-en-solo',
        'language': 'fr',
        'format': 'solo',
        'pageUrl': 'pages/formation-en-solo.html',
        'bookingUrl': 'booking.html?course=solo&program=20h',
        'image': 'img/package-solo-20h.png',
        'metaDescription': 'Formation solo 20h a Gatineau. L\'accompagnement le plus complet pour des resultats durables.',
        'keywords': ['formation solo', '20h', 'excellence', 'Gatineau'],
    },
    {
        'id': 'atelier-conversation',
        'title': 'Atelier de conversation',
        'subtitle': 'Pratiquez votre francais chaque semaine',
        'category': 'ateliers',
        'language': 'fr',
        'format': 'atelier',
        'pageUrl': 'pages/workshops.html',
        'bookingUrl': 'booking.html?course=workshop-conversation',
        'image': 'img/atelier-conversation.png',
        'metaDescription': 'Atelier de conversation francais a Gatineau. Pratiquez chaque semaine en groupe.',
        'keywords': ['atelier conversation', 'francais', 'Gatineau', 'pratique'],
    },
    {
        'id': 'atelier-culture',
        'title': 'Atelier Culture du Canada',
        'subtitle': "Comprendre, decouvrir et s'integrer en douceur",
        'category': 'ateliers',
        'language': 'fr',
        'format': 'atelier',
        'pageUrl': 'pages/workshops.html',
        'bookingUrl': 'booking.html?course=workshop-culture',
        'image': 'img/atelier-culture-canada.png',
        'metaDescription': 'Atelier culture canadienne a Gatineau. Comprendre et decouvrir pour mieux s\'integrer.',
        'keywords': ['atelier culture', 'Canada', 'Gatineau', 'integration'],
    },
    {
        'id': 'atelier-maintien',
        'title': 'Atelier maintien & renforcement',
        'subtitle': 'Gardez votre francais vivant, semaine apres semaine',
        'category': 'ateliers',
        'language': 'fr',
        'format': 'atelier',
        'pageUrl': 'pages/workshops.html',
        'bookingUrl': 'booking.html?course=workshop-maintenance',
        'image': 'img/atelier-maintien.png',
        'metaDescription': 'Atelier maintien francais a Gatineau. Gardez votre francais vivant chaque semaine.',
        'keywords': ['atelier maintien', 'francais', 'Gatineau', 'renforcement'],
    },
]

# ─── CATEGORIES ─────────────────────────────────────────────────────────────

CATEGORIES = [
    {
        'id': 'parcours-linguistique',
        'title': 'Parcours linguistique',
        'description': 'Cours de groupe en petit groupe pour progresser avec confiance',
        'languages': ['fr', 'en'],
        'heroImage': 'img/hero-parcours-linguistiques.png',
    },
    {
        'id': 'cap-sur-l-oral',
        'title': "Cap sur l'oral",
        'description': "Maitrisez l'expression orale avec des parcours collaboratifs",
        'languages': ['fr'],
        'heroImage': 'img/home/banner-linguotest.png',
    },
    {
        'id': 'tcf-preparation',
        'title': 'Preparation TCF',
        'description': 'Preparez-vous sereinement au test officiel TCF Quebec & Canada',
        'languages': ['fr'],
        'heroImage': 'img/banner-tcf-preparation.png',
    },
    {
        'id': 'formation-en-solo',
        'title': 'Formation en solo',
        'description': 'Accompagnement 1-to-1 flexible et 100% personnalise',
        'languages': ['fr'],
        'heroImage': 'img/hero-maitrisez-langues.png',
    },
    {
        'id': 'ateliers',
        'title': 'Ateliers',
        'description': 'Ateliers thematiques pour pratiquer et echanger en groupe',
        'languages': ['fr'],
        'heroImage': 'img/atelier-culture-canada.png',
    },
]

# ─── PDF TEXT EXTRACTION ─────────────────────────────────────────────────────

def extract_text_from_pdf(pdf_path):
    all_text = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                all_text.append(text)
    return '\n\n'.join(all_text)


# ─── PDF TEXT ENRICHMENT ─────────────────────────────────────────────────────

def parse_pdf_text(full_text):
    """Parse the full PDF text and extract detailed data per service."""
    import re

    enriched = {}
    sections = re.split(r'\n(?=(?:Fran[cç]ais Express|Parcours Soir[eé]e|Parcours Samedis|English Express|Evening Lingo|Saturdays in English|Cap sur l\'oral|Pr[eé]paration Oral|Pr[eé]paration TCO|Parcours TCF|Atelier de conversation|Atelier Culture|Atelier maintien|Boostez votre fran[cç]ais|Le TCF))', full_text)

    for section in sections:
        section = section.strip()
        if not section:
            continue

        first_line = section.split('\n')[0].strip()

        for svc_def in SERVICE_DEFINITIONS:
            title_key = svc_def['title'].lower().replace('-', ' ').replace('é', 'e').replace('è', 'e')
            section_key = first_line.lower().replace('-', ' ').replace('é', 'e').replace('è', 'e')

            if title_key in section_key or section_key.startswith(title_key[:15]):
                enriched[svc_def['id']] = parse_service_section(section)
                break

    return enriched


def parse_service_section(text):
    """Parse a single service section and extract structured data."""
    import re
    lines = text.split('\n')
    result = {}
    desc_lines = []
    in_section = False
    skip_headers = [
        'ce que vous obtenez', "ce que vous allez developper", 'pourquoi',
        'pour qui', 'fonctionnement', "l'experience", 'structure du programme',
        'objectifs pedagogiques', 'tarif', 'calendrier', 'session', 'mettre',
        "lien de la fiche", 'liens', "ce que vous allez vivre",
    ]

    for i, line in enumerate(lines):
        stripped = line.strip()
        if not stripped:
            continue
        stripped = stripped.replace('\u00a0', ' ')
        stripped = re.sub(r'[ \t]+', ' ', stripped).strip()
        if not stripped:
            continue
        lower = stripped.lower()

        if i < 3 and len(stripped) < 60:
            continue

        if any(lower.startswith(h) for h in skip_headers):
            in_section = False
            if lower.startswith('ce que vous obtenez') or lower.startswith('ce que vous allez developper') or lower.startswith('ce que vous allez vivre'):
                result['included'] = extract_list_block(lines, i + 1)
            elif lower.startswith('pourquoi'):
                result['benefits'] = extract_list_block(lines, i + 1)
            elif lower.startswith('pour qui'):
                result['audience'] = extract_list_block(lines, i + 1)
            elif lower.startswith('objectifs'):
                result['objectives'] = extract_list_block(lines, i + 1)
            elif lower.startswith('tarif') or lower.startswith('fees'):
                result['price_text'] = stripped
            elif lower.startswith('structure'):
                result['structure'] = extract_list_block(lines, i + 1)
            continue

        if not in_section and len(stripped) > 30 and len(desc_lines) < 4:
            desc_lines.append(stripped)

    result['description'] = ' '.join(desc_lines)
    full = text

    price_match = re.search(r'(\d+)\s*\$', full)
    if price_match:
        result['price'] = f"{price_match.group(1)} $"

    dur_match = re.search(r'Dur[ée]e\s*:\s*(\d+)\s*semaines?', full, re.IGNORECASE)
    if dur_match:
        result['duration'] = f"{dur_match.group(1)} semaines"
    else:
        dur_match = re.search(r'(\d+)\s*semaines?', full, re.IGNORECASE)
        if dur_match:
            result['duration'] = f"{dur_match.group(1)} semaines"

    vol_match = re.search(r'Volume total\s*:\s*(\d+)\s*h(?:eures?)?', full, re.IGNORECASE)
    if vol_match:
        result['volume'] = f"{vol_match.group(1)} h"
    else:
        vol_match = re.search(r'(\d+)\s*h(?:eures?)?\s*(?:de\s*)?(?:formation|cours|apprentissage)', full, re.IGNORECASE)
        if vol_match:
            result['volume'] = f"{vol_match.group(1)} h"

    sched_match = re.search(r'(?:Rythme|Schedule)\s*:\s*([^\n]+)', full, re.IGNORECASE)
    if sched_match:
        result['schedule'] = sched_match.group(1).strip()
    else:
        sched_match = re.search(r'(?:du\s+)?(?:lundi|monday)\s*[-\u2013]\s*(?:vendredi|friday)', full, re.IGNORECASE)
        if sched_match:
            result['schedule'] = sched_match.group(0).strip()
        else:
            sched_match = re.search(r'(\d+)\s*(?:x|fois)\s*/?\s*semaine', full, re.IGNORECASE)
            if sched_match:
                result['schedule'] = f"{sched_match.group(1)}x/semaine"

    hours_match = re.search(r'(\d+\s*h\s*[-\u2013]\s*\d+\s*h)', full)
    if hours_match:
        result['hours'] = hours_match.group(1)

    grp_match = re.search(r'max(?:imum)?\.?\s*(\d+)\s+participants?', full, re.IGNORECASE)
    if not grp_match:
        grp_match = re.search(r'(\d+)\s+participants?\s+maximum', full, re.IGNORECASE)
    if not grp_match:
        grp_match = re.search(r"max\.\s*(\d+)", full, re.IGNORECASE)
    if grp_match:
        result['groupSize'] = grp_match.group(1)

    lvl_match = re.search(r'niveau\s+([A-C]\d?)', full, re.IGNORECASE)
    if not lvl_match:
        lvl_match = re.search(r'level\s+([A-C]\d?)', full, re.IGNORECASE)
    if lvl_match:
        result['level'] = lvl_match.group(1).upper()

    result['sessions'] = extract_session_tables(full)
    return result


def extract_list_block(lines, start_idx):
    """Extract list items starting from a given index."""
    import re
    items = []
    for i in range(start_idx, min(start_idx + 20, len(lines))):
        line = lines[i].strip()
        if not line:
            continue
        line = line.replace('\u00a0', ' ')
        line = re.sub(r'[ \t]+', ' ', line).strip()
        if any(line.lower().startswith(h) for h in [
            'tarif', 'fees', 'calendrier', 'session', 'mettre', 'lien',
            "l'experience", "ce que", "pourquoi", "pour qui", "structure",
        ]):
            break
        line = re.sub(r'^[\-\u2022\u2023*]\s*', '', line)
        line = re.sub(r'^\d+[.)]\s*', '', line)
        if len(line) > 3:
            items.append(line)
    return items


def extract_session_tables(full_text):
    """Extract session schedule data from text."""
    import re
    sessions = []
    session_pattern = re.finditer(
        r'(?:SESSION\s+(\d+)\s*[-\u2013]\s*)?((?:Automne|Hiver|Printemps|Fall|Winter|Spring|Session)\s+\d{4})',
        full_text, re.IGNORECASE
    )
    for match in session_pattern:
        session_label = match.group(0).strip()
        start_pos = match.end()
        block = full_text[start_pos:start_pos + 2000]
        dates = re.findall(r'(\d{1,2}\s+\w+\s+\d{4})', block)
        if dates:
            sessions.append({
                'label': session_label,
                'dates': dates[:12],
            })
    if not sessions:
        monthly = re.findall(
            r'((?:Septembre|Octobre|Novembre|D[eé]cembre|Janvier|F[eé]vrier|Mars|Avril|Mai|Juin)\s*\d{4})\s*\n?\s*(?:.*?->?\s*\n?\s*)?(\d+\s*(?:sept|oct|nov|d[ée]c|janv|f[eé]vr|mars|avr|mai|juin))',
            full_text, re.IGNORECASE
        )
        for label, dates in monthly[:10]:
            sessions.append({
                'label': label.strip(),
                'dates': [dates],
            })
    return sessions


# ─── MAIN ─────────────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) > 1:
        pdf_path = Path(sys.argv[1])
    else:
        pdf_path = DEFAULT_PDF

    if not pdf_path.exists():
        print(f"Error: PDF not found at {pdf_path}")
        sys.exit(1)

    print("=" * 60)
    print("Cultulangues Content Extraction Pipeline")
    print("=" * 60)
    print(f"PDF: {pdf_path.name}")
    print()

    # Step 1: Extract text
    print("[1/7] Extracting text from PDF...")
    full_text = extract_text_from_pdf(pdf_path)
    print(f"  Extracted {len(full_text)} characters from PDF")

    # Step 2: Parse PDF text
    print("[2/7] Parsing document structure...")
    pdf_data = parse_pdf_text(full_text)
    print(f"  Enriched {len(pdf_data)} services from PDF text")

    # Step 3: Build service data
    print("[3/7] Building service data...")
    services = []
    for svc_def in SERVICE_DEFINITIONS:
        service = dict(svc_def)
        pdf_enrichment = pdf_data.get(svc_def['id'], {})
        for key, value in pdf_enrichment.items():
            if value:
                service[key] = value

        service.setdefault('description', '')
        service.setdefault('price', '')
        service.setdefault('duration', '')
        service.setdefault('schedule', '')
        service.setdefault('level', '')
        service.setdefault('groupSize', '')
        service.setdefault('objectives', [])
        service.setdefault('included', [])
        service.setdefault('benefits', [])
        service.setdefault('audience', [])
        service.setdefault('sessions', [])

        services.append(service)
        print(f"  [OK] {service['title']}")

    # Step 4: Process images
    print("[4/7] Processing images...")
    from lib.images import process_all_images
    services = process_all_images(services, IMG_DIR, SCRIPT_DIR / 'assets' / 'services')
    img_count = sum(len(s.get('images', [])) for s in services)
    print(f"  Processed {img_count} images")

    # Step 5: Generate SEO
    print("[5/7] Generating SEO data...")
    from lib.seo import generate_seo
    seo_map = {}
    for svc in services:
        seo_map[svc['id']] = generate_seo(svc)

    # Add SEO data to services
    for svc in services:
        slug = svc.get('id', '')
        svc['slug'] = slug
        seo = seo_map.get(slug, {})
        svc['seo'] = seo

    print(f"  Generated SEO for {len(seo_map)} services")

    # Step 6: Generate content JSON
    print("[6/7] Generating content JSON...")
    from lib.navigation import generate_navigation
    from lib.search import generate_search_index
    from lib.validate import validate_services

    navigation = generate_navigation(services, CATEGORIES)
    search_index = generate_search_index(services, CATEGORIES)

    # Count card counts for categories
    cat_counts = {}
    for svc in services:
        cat = svc['category']
        cat_counts[cat] = cat_counts.get(cat, 0) + 1

    cat_list = []
    for cat in CATEGORIES:
        cat_data = dict(cat)
        cat_data['cardCount'] = cat_counts.get(cat['id'], 0)
        cat_list.append(cat_data)

    services_data = {
        'meta': {
            'source': pdf_path.name,
            'extractedAt': datetime.datetime.now().isoformat(),
            'version': '2.0',
            'totalServices': len(services),
            'totalCategories': len(cat_list),
        },
        'contact': {
            'name': 'Academie Internationale Cultulangues',
            'email': 'Admin@cultulangues.ca',
            'phone': 'a venir',
            'address': '468 rue Plouffe suite 3, Gatineau J8P 4B7 (QC)',
        },
        'categories': cat_list,
        'services': services,
        'seo': seo_map,
        'navigation': navigation,
        'searchIndex': search_index,
    }

    CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    services_path = CONTENT_DIR / 'services.json'
    with open(services_path, 'w', encoding='utf-8') as f:
        json.dump(services_data, f, ensure_ascii=False, indent=2)
    print(f"  Written: {services_path}")

    # Validation
    result = validate_services(services, CATEGORIES)
    if result.warnings:
        print(f"\n  Validation warnings ({len(result.warnings)}):")
        for w in result.warnings:
            print(f"    - [{w['service']}] {w['message']}")
    if result.errors:
        print(f"\n  Validation errors ({len(result.errors)}):")
        for e in result.errors:
            print(f"    - [{e['service']}] {e['message']}")

    # Step 7: Generate detail pages
    print("[7/7] Generating detail pages...")
    from lib.pages import write_detail_pages
    written = write_detail_pages(services, seo_map, navigation, PAGES_DIR)
    print(f"  Generated {len(written)} detail pages")

    print()
    print("=" * 60)
    print("Extraction complete!")
    print(f"  Services: {len(services)}")
    print(f"  Categories: {len(cat_list)}")
    print(f"  Images: {img_count}")
    print(f"  SEO entries: {len(seo_map)}")
    print(f"  Detail pages: {len(written)}")
    print(f"  Output: content/ + pages/")
    print("=" * 60)


if __name__ == '__main__':
    main()
