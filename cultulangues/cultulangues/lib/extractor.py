"""
Production Service Extractor
==============================
Detects services automatically, extracts all fields with confidence scores.
Uses template recognition and structural analysis.
"""

import re
from .confidence import score_field, merge_confidence_scores, confidence_label


# ─── TEMPLATE DEFINITIONS ────────────────────────────────────────────────────

TEMPLATES = {
    'parcours_linguistique': {
        'markers': ['Ce que vous obtenez', 'Pourquoi', 'Tarif'],
        'sections': ['included', 'benefits', 'price', 'sessions'],
    },
    'cap_sur_l_oral': {
        'markers': ['Structure du programme', 'Objectifs pédagogiques', 'Tarif'],
        'sections': ['structure', 'objectives', 'price', 'sessions'],
    },
    'tcf': {
        'markers': ['Structure du programme', 'Ce que vous allez développer', 'Ce que vous allez vivre'],
        'sections': ['structure', 'included', 'description'],
    },
    'atelier': {
        'markers': ['Pour qui', 'Fonctionnement', "L'expérience Cultulangues"],
        'sections': ['audience', 'price', 'experience'],
    },
    'solo': {
        'markers': ['forfait', '5 h', '10 h', '15 h', '20 h'],
        'sections': ['packages'],
    },
}

# ─── SECTION HEADER DETECTION ────────────────────────────────────────────────

SECTION_PATTERNS = {
    'included': [
        r'^Ce que vous obtenez',
        r'^Ce que vous allez d[eé]velopper',
        r'^Ce que vous allez vivre',
        r"^What's included",
        r'^What\.s included',
    ],
    'benefits': [
        r'^Pourquoi (?:c[a\'] fonctionne|c\'est id[eé]al|ce format fonctionne)',
        r'^Pourquoi (?:les )?(?:apprenants?|c)',
        r'^Why (?:learners|it works|choose)',
    ],
    'audience': [
        r'^Pour qui\s*\?',
        r'^Who is this for',
    ],
    'objectives': [
        r'^Objectifs p[eé]dagogiques',
        r'^Pedagogical objectives',
    ],
    'structure': [
        r'^Structure du programme',
        r'^Programme structure',
    ],
    'price': [
        r'^Tarif',
        r'^Fees?\b',
        r'^Prix',
        r'^Fonctionnement',
    ],
    'calendar': [
        r'^CALENDRIER',
        r'^Calendrier',
        r'^\d{4}[–\-]\d{4} Session Calendar',
        r'^Session Calendar',
    ],
    'session': [
        r'^SESSION\s+\d+',
        r'^Session\s+\d+',
        r'^(?:Automne|Hiver|Printemps|Fall|Winter|Spring)\s+\d{4}',
    ],
    'note': [
        r'^Mettre\s*$',
        r'^Note\s*:',
        r'^Attention\s*:',
        r'^Important\s*:',
    ],
    'links': [
        r'^Lien\s',
        r'^Links?\s',
        r'^Paiement',
    ],
    'experience': [
        r"^L'exp[eé]rience",
        r'^The .* experience',
    ],
    'description': [
        r'^(?:Un programme|Une immersion|Un espace|Un atelier|Un format|Boostez)',
        r'^(?:A |An |The )',
    ],
}

# ─── SERVICE BOUNDARY DETECTION ──────────────────────────────────────────────

SERVICE_TITLE_PATTERNS = [
    # Pattern: "Title – Subtitle" (most services use this)
    r'^.+\s*[–\-]\s*.+$',
]

# Known service section starters (used as additional boundary signals)
SECTION_STARTERS = [
    r'^Cap sur l[\'\u2019]oral\b',
    r'^Le TCF\b',
    r'^Boostez votre\b',
    r'^Atelier de\b',
    r'^Atelier Culture\b',
    r'^Atelier maintien\b',
    r'^Pr[eé]paration Oral\b',
    r'^Pr[eé]paration TCO\b',
    r'^Parcours TCF\b',
    r'^TCF (?:Qu[eé]bec|Canada)\b',
    r'^Fran[cç]ais Express\b',
    r'^Parcours Soir[eé]e\b',
    r'^Parcours Samedis\b',
    r'^English Express\b',
    r'^Evening Lingo\b',
    r'^Saturdays in English\b',
]


def clean(text):
    """Clean extracted text."""
    if not text:
        return ''
    text = text.replace('\u00a0', ' ')
    text = text.replace('\u2019', "'")
    text = text.replace('\u2013', '-')
    text = text.replace('\u2014', '-')
    text = re.sub(r'[ \t]+', ' ', text)
    return text.strip()


def is_service_boundary(line):
    """Check if a line looks like a service title/boundary."""
    cleaned = clean(line)
    if not cleaned or len(cleaned) < 5:
        return False
    
    # Check for title-with-dash pattern
    if re.match(r'^.+\s*[–\-]\s*.+$', cleaned):
        # But exclude session headers and date lines
        if not re.match(r'^SESSION\s+\d+', cleaned, re.IGNORECASE):
            if not re.match(r'^\d+\s+(?:sept|oct|nov|déc|janv|févr|mars|avr|mai|juin)', cleaned, re.IGNORECASE):
                return True
    
    # Check for known section starters
    for pattern in SECTION_STARTERS:
        if re.match(pattern, cleaned, re.IGNORECASE):
            return True
    
    return False


def detect_section_type(line):
    """Detect which section type a line belongs to."""
    cleaned = clean(line)
    for section_type, patterns in SECTION_PATTERNS.items():
        for pattern in patterns:
            if re.match(pattern, cleaned, re.IGNORECASE):
                return section_type
    return None


# ─── SERVICE DETECTION ───────────────────────────────────────────────────────

def detect_services_from_text(full_text):
    """
    Automatically detect all service sections in the document text.
    Returns list of (title, start_line, end_line) tuples.
    """
    lines = full_text.split('\n')
    services = []
    current_title = None
    current_start = 0
    
    for i, line in enumerate(lines):
        stripped = clean(line)
        if not stripped:
            continue
        
        if is_service_boundary(stripped):
            # Save previous service if it has content
            if current_title and i - current_start > 3:
                services.append({
                    'title': current_title,
                    'start': current_start,
                    'end': i,
                    'lines': lines[current_start:i],
                })
            current_title = stripped
            current_start = i
    
    # Save last service
    if current_title and len(lines) - current_start > 3:
        services.append({
            'title': current_title,
            'start': current_start,
            'end': len(lines),
            'lines': lines[current_start:],
        })
    
    return services


def detect_services_structured(doc_structure):
    """
    Detect services using structural analysis (font sizes, positioning).
    Falls back to text-based detection if structural info is insufficient.
    """
    services = []
    
    # Use title blocks (large, bold fonts) as primary boundary signals
    if doc_structure.title_blocks:
        for i, title_block in enumerate(doc_structure.title_blocks):
            # Find all blocks between this title and the next
            start_y = title_block.y
            next_y = doc_structure.title_blocks[i + 1].y if i + 1 < len(doc_structure.title_blocks) else float('inf')
            
            # Get text blocks in this range on the same page and subsequent pages
            blocks_in_range = []
            for b in doc_structure.all_text_blocks:
                if b.page == title_block.page and start_y <= b.y < next_y:
                    blocks_in_range.append(b)
                elif b.page > title_block.page and b.page <= title_block.page + 2:
                    blocks_in_range.append(b)
            
            if blocks_in_range:
                text = '\n'.join(b.text for b in blocks_in_range)
                services.append({
                    'title': title_block.text,
                    'text': text,
                    'blocks': blocks_in_range,
                    'page': title_block.page,
                    'confidence': score_field(title_block.text, 'pdf_position', {'multiple_sources': True}),
                })
    
    # If structural detection found fewer than expected, fall back to text-based
    if len(services) < 10:
        # Re-analyze using full text
        text_services = detect_services_from_text(doc_structure.full_text)
        if len(text_services) > len(services):
            services = [
                {
                    'title': s['title'],
                    'text': '\n'.join(s['lines']),
                    'lines': s['lines'],
                    'page': 0,
                    'confidence': score_field(s['title'], 'pattern_match'),
                }
                for s in text_services
            ]
    
    return services


# ─── FIELD EXTRACTION ────────────────────────────────────────────────────────

def extract_price(text):
    """Extract price information with confidence score."""
    # Pattern: "600 $" or "$600" or "320 $"
    price_match = re.search(r'(\d[\d\s]*)\s*\$', text)
    if price_match:
        amount = price_match.group(1).replace(' ', '')
        # Extract what's included after price
        includes_match = re.search(r'(?:inclut?|incluant|including)[:\s]*(.+?)(?:\n\n|\Z)', text, re.IGNORECASE | re.DOTALL)
        includes = includes_match.group(1).strip() if includes_match else ''
        return score_field(
            {'amount': amount, 'currency': '$', 'includes': includes},
            'regex_strict',
            {'multiple_sources': bool(includes)},
        )
    
    # Pattern: "$600"
    price_match = re.search(r'\$\s*(\d[\d\s]*)', text)
    if price_match:
        amount = price_match.group(1).replace(' ', '')
        return score_field(
            {'amount': amount, 'currency': '$', 'includes': ''},
            'regex_strict',
        )
    
    return score_field(None, 'not_found')


def extract_duration(text):
    """Extract duration with confidence score."""
    # Pattern: "Durée : 4 semaines" or "Duration: 4 weeks"
    dur_match = re.search(r'(?:Dur[ée]e|Duration)\s*:\s*(\d+)\s*(semaines?|weeks?)', text, re.IGNORECASE)
    if dur_match:
        value = f"{dur_match.group(1)} semaines"
        return score_field(value, 'labeled_field', {'matches_expected': True})
    
    # Pattern: "4-week program" or "4 semaines"
    dur_match = re.search(r'(\d+)[\s-]*(?:semaines?|weeks?)', text, re.IGNORECASE)
    if dur_match:
        value = f"{dur_match.group(1)} semaines"
        return score_field(value, 'regex_strict')
    
    # Pattern: "10-week program"
    dur_match = re.search(r'(\d+)[\s-]*week', text, re.IGNORECASE)
    if dur_match:
        value = f"{dur_match.group(1)} semaines"
        return score_field(value, 'regex_strict')
    
    return score_field(None, 'not_found')


def extract_volume(text):
    """Extract volume/hours with confidence score."""
    # Pattern: "Volume total : 40 heures"
    vol_match = re.search(r'(?:Volume total|Total commitment)\s*:\s*(\d+)\s*(?:h(?:eures?)?|hours?)', text, re.IGNORECASE)
    if vol_match:
        value = f"{vol_match.group(1)} heures"
        return score_field(value, 'labeled_field', {'matches_expected': True})
    
    # Pattern: "60 heures" or "60 h"
    vol_match = re.search(r'(\d+)\s*(?:h(?:eures?)?|hours?)\s+(?:de\s*)?(?:formation|cours|apprentissage|class)', text, re.IGNORECASE)
    if vol_match:
        value = f"{vol_match.group(1)} heures"
        return score_field(value, 'regex_strict')
    
    # Pattern: "60 hours"
    vol_match = re.search(r'(\d+)\s*hours?', text, re.IGNORECASE)
    if vol_match:
        value = f"{vol_match.group(1)} heures"
        return score_field(value, 'regex_strict')
    
    return score_field(None, 'not_found')


def extract_schedule(text):
    """Extract schedule information with confidence score."""
    # Pattern: "Rythme : 2 cours par semaine"
    sched_match = re.search(r'(?:Rythme|Schedule|Format)\s*:\s*(.+?)(?:\n|$)', text, re.IGNORECASE)
    if sched_match:
        return score_field(clean(sched_match.group(1)), 'labeled_field')
    
    # Pattern: "mardis et jeudis, de 18 h à 20 h"
    sched_match = re.search(r'((?:lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)s?\s*(?:et\s+\w+s?)?\s*,?\s*(?:de\s+)?\d+\s*h\s*[-à]\s*\d+\s*h)', text, re.IGNORECASE)
    if sched_match:
        return score_field(clean(sched_match.group(1)), 'pattern_match')
    
    # Pattern: "1 cours de 3 h par semaine"
    sched_match = re.search(r'(\d+\s*cours?\s*(?:de\s+)?\d+\s*h\s*(?:par|/\s*)semaine)', text, re.IGNORECASE)
    if sched_match:
        return score_field(clean(sched_match.group(1)), 'pattern_match')
    
    # Pattern: "1 class per week (3 hours)"
    sched_match = re.search(r'(\d+\s*class(?:es)?\s*per\s*week)', text, re.IGNORECASE)
    if sched_match:
        return score_field(clean(sched_match.group(1)), 'pattern_match')
    
    # Pattern: "du lundi au vendredi"
    sched_match = re.search(r'(?:du\s+)?(lundi\s*[-à]\s*vendredi)', text, re.IGNORECASE)
    if sched_match:
        return score_field(clean(sched_match.group(1)), 'keyword_detection')
    
    return score_field(None, 'not_found')


def extract_group_size(text):
    """Extract maximum group size with confidence score."""
    # Pattern: "max. 5" or "max. 5 participants"
    grp_match = re.search(r'max(?:imum)?\.?\s*(\d+)\s*(?:participants?)?', text, re.IGNORECASE)
    if grp_match:
        return score_field(grp_match.group(1), 'regex_strict', {'matches_expected': True})
    
    # Pattern: "5 participants maximum"
    grp_match = re.search(r'(\d+)\s+participants?\s+maximum', text, re.IGNORECASE)
    if grp_match:
        return score_field(grp_match.group(1), 'regex_strict')
    
    # Pattern: "small groups (max. 5)"
    grp_match = re.search(r'max\.?\s*(\d+)', text, re.IGNORECASE)
    if grp_match:
        return score_field(grp_match.group(1), 'regex_strict')
    
    return score_field(None, 'not_found')


def extract_level(text):
    """Extract level information with confidence score."""
    # Pattern: "niveau B" or "niveau C" or "niveau B2"
    lvl_match = re.search(r'niveau\s+([A-C]\d?)', text, re.IGNORECASE)
    if lvl_match:
        return score_field(lvl_match.group(1).upper(), 'regex_strict', {'matches_expected': True})
    
    # Pattern: "level B" or "Oral B"
    lvl_match = re.search(r'(?:level|oral)\s+([A-C]\d?)', text, re.IGNORECASE)
    if lvl_match:
        return score_field(lvl_match.group(1).upper(), 'regex_strict')
    
    # Pattern in title: "Oral B" or "Oral C"
    lvl_match = re.search(r'Oral\s+([B-C])', text, re.IGNORECASE)
    if lvl_match:
        return score_field(lvl_match.group(1).upper(), 'keyword_detection')
    
    return score_field(None, 'not_found')


def extract_frequency(text):
    """Extract frequency with confidence score."""
    # Pattern: "2 séances par semaine" or "2 cours par semaine"
    freq_match = re.search(r'(\d+)\s*(?:séances?|cours?)\s*(?:par|/\s*)semaine', text, re.IGNORECASE)
    if freq_match:
        return score_field(f"{freq_match.group(1)}x/semaine", 'regex_strict')
    
    # Pattern: "4 sessions per week"
    freq_match = re.search(r'(\d+)\s*sessions?\s*per\s*week', text, re.IGNORECASE)
    if freq_match:
        return score_field(f"{freq_match.group(1)}x/semaine", 'regex_strict')
    
    return score_field(None, 'not_found')


def extract_objectives(text):
    """Extract learning objectives with confidence score."""
    items = []
    lines = text.split('\n')
    in_section = False
    
    for line in lines:
        stripped = clean(line)
        if not stripped:
            continue
        
        if re.match(r'^Objectifs p[eé]dagogiques', stripped, re.IGNORECASE):
            in_section = True
            continue
        if re.match(r'^Pedagogical objectives', stripped, re.IGNORECASE):
            in_section = True
            continue
        
        if in_section:
            # Stop at next section
            if any(re.match(p, stripped, re.IGNORECASE) for p in [
                r'^Tarif', r'^Fees?\b', r'^Structure', r'^CALENDRIER',
                r'^Session', r'^Mettre', r'^Lien',
            ]):
                break
            
            # Extract bullet items
            bullet = re.match(r'^[\u2022\u2023♦\-\*]\s*(.+)', stripped)
            if bullet:
                items.append(bullet.group(1))
            elif len(stripped) > 10 and not stripped[0].isdigit():
                items.append(stripped)
    
    if items:
        return score_field(items, 'pattern_match', {'multiple_sources': len(items) > 2})
    return score_field(None, 'not_found')


def extract_included(text):
    """Extract included items with confidence score."""
    items = []
    lines = text.split('\n')
    in_section = False
    
    for line in lines:
        stripped = clean(line)
        if not stripped:
            continue
        
        if any(re.match(p, stripped, re.IGNORECASE) for p in SECTION_PATTERNS['included']):
            in_section = True
            continue
        
        if in_section:
            if any(re.match(p, stripped, re.IGNORECASE) for p in [
                r'^Pourquoi', r'^Pour qui', r'^Fonctionnement',
                r"^L'exp", r'^Tarif', r'^Fees?\b', r'^Structure',
                r'^Objectifs', r'^CALENDRIER', r'^Session', r'^Mettre',
            ]):
                break
            
            bullet = re.match(r'^[\u2022\u2023♦\-\*]\s*(.+)', stripped)
            if bullet:
                items.append(bullet.group(1))
            elif len(stripped) > 5:
                items.append(stripped)
    
    if items:
        return score_field(items, 'pattern_match', {'multiple_sources': len(items) > 2})
    return score_field(None, 'not_found')


def extract_benefits(text):
    """Extract benefits with confidence score."""
    items = []
    lines = text.split('\n')
    in_section = False
    
    for line in lines:
        stripped = clean(line)
        if not stripped:
            continue
        
        if any(re.match(p, stripped, re.IGNORECASE) for p in SECTION_PATTERNS['benefits']):
            in_section = True
            continue
        
        if in_section:
            if any(re.match(p, stripped, re.IGNORECASE) for p in [
                r'^Tarif', r'^Fees?\b', r'^Fonctionnement', r'^Structure',
                r'^CALENDRIER', r'^Session', r"^L'exp", r'^Mettre',
            ]):
                break
            
            bullet = re.match(r'^[\u2022\u2023♦\-\*]\s*(.+)', stripped)
            if bullet:
                items.append(bullet.group(1))
            elif len(stripped) > 10:
                items.append(stripped)
    
    if items:
        return score_field(items, 'pattern_match', {'multiple_sources': len(items) > 2})
    return score_field(None, 'not_found')


def extract_audience(text):
    """Extract target audience with confidence score."""
    items = []
    lines = text.split('\n')
    in_section = False
    
    for line in lines:
        stripped = clean(line)
        if not stripped:
            continue
        
        if any(re.match(p, stripped, re.IGNORECASE) for p in SECTION_PATTERNS['audience']):
            in_section = True
            continue
        
        if in_section:
            if any(re.match(p, stripped, re.IGNORECASE) for p in [
                r'^Fonctionnement', r'^Ce que', r"^L'exp",
                r'^Tarif', r'^Fees?\b', r'^Structure', r'^Objectifs',
            ]):
                break
            
            bullet = re.match(r'^[\u2022\u2023♦\-\*]\s*(.+)', stripped)
            if bullet:
                items.append(bullet.group(1))
            elif len(stripped) > 5:
                items.append(stripped)
    
    if items:
        return score_field(items, 'pattern_match')
    return score_field(None, 'not_found')


def extract_structure(text):
    """Extract program structure with confidence score."""
    items = []
    lines = text.split('\n')
    in_section = False
    
    for line in lines:
        stripped = clean(line)
        if not stripped:
            continue
        
        if any(re.match(p, stripped, re.IGNORECASE) for p in SECTION_PATTERNS['structure']):
            in_section = True
            continue
        
        if in_section:
            if any(re.match(p, stripped, re.IGNORECASE) for p in [
                r'^Objectifs', r'^Tarif', r'^Fees?\b', r'^CALENDRIER',
                r'^Session', r'^Mettre',
            ]):
                break
            
            kv = re.match(r'^([^:]+)\s*:\s*(.+)', stripped)
            if kv:
                items.append({'label': clean(kv.group(1)), 'value': clean(kv.group(2))})
            elif len(stripped) > 5:
                items.append({'label': '', 'value': stripped})
    
    if items:
        return score_field(items, 'structured_table', {'multiple_sources': len(items) > 2})
    return score_field(None, 'not_found')


def extract_sessions(text):
    """Extract session schedules with confidence score."""
    sessions = []
    
    # Pattern: "SESSION 1 — Automne 2026"
    session_pattern = re.finditer(
        r'(?:SESSION|Session)\s+(\d+)\s*[-–—]\s*((?:Automne|Hiver|Printemps|Fall|Winter|Spring)\s+\d{4})',
        text, re.IGNORECASE
    )
    
    for match in session_pattern:
        label = f"Session {match.group(1)} - {match.group(2)}"
        # Find dates after this marker
        start_pos = match.end()
        block = text[start_pos:start_pos + 3000]
        
        # Extract date rows
        dates = re.findall(r'(\d{1,2}\s+\w+(?:\s+\d{4})?)', block)
        if dates:
            sessions.append({
                'label': label,
                'dates': dates[:15],
            })
    
    # Pattern: "SESSION 1" (without season)
    if not sessions:
        session_pattern = re.finditer(
            r'(?:SESSION|Session)\s+(\d+)',
            text, re.IGNORECASE
        )
        for match in session_pattern:
            label = f"Session {match.group(1)}"
            start_pos = match.end()
            block = text[start_pos:start_pos + 2000]
            dates = re.findall(r'(\d{1,2}\s+\w+(?:\s+\d{4})?)', block)
            if dates:
                sessions.append({
                    'label': label,
                    'dates': dates[:12],
                })
    
    # Pattern: Monthly sessions for intensive programs
    if not sessions:
        monthly = re.finditer(
            r'((?:Septembre|Octobre|Novembre|D[eé]cembre|Janvier|F[eé]vrier|Mars|Avril|Mai|Juin)\s*\d{4})',
            text, re.IGNORECASE
        )
        for match in monthly:
            label = clean(match.group(1))
            start_pos = match.end()
            block = text[start_pos:start_pos + 1000]
            dates = re.findall(r'(\d{1,2}\s+\w+(?:\s+\d{4})?)', block)
            if dates:
                sessions.append({
                    'label': label,
                    'dates': dates[:12],
                })
    
    if sessions:
        return score_field(sessions, 'structured_table', {'multiple_sources': len(sessions) > 2})
    return score_field(None, 'not_found')


def extract_description(text, title_line=''):
    """Extract description text with confidence score."""
    lines = text.split('\n')
    desc_lines = []
    
    # Skip the title line and look for description
    started = False
    for line in lines:
        stripped = clean(line)
        if not stripped:
            if desc_lines:
                break
            continue
        
        # Skip title line
        if stripped == clean(title_line):
            started = True
            continue
        
        if not started and not desc_lines:
            # First non-empty line after title is likely the description
            if len(stripped) > 20:
                desc_lines.append(stripped)
                started = True
            continue
        
        if started and len(desc_lines) < 3:
            # Stop at section headers
            if detect_section_type(stripped):
                break
            if len(stripped) > 20:
                desc_lines.append(stripped)
        elif started and len(desc_lines) >= 3:
            break
    
    description = ' '.join(desc_lines)
    if description:
        return score_field(description, 'context_inference', {'matches_expected': True})
    return score_field(None, 'not_found')


def extract_subtitle(text, title_line=''):
    """Extract subtitle from the title line (text after the dash)."""
    cleaned = clean(title_line)
    # Pattern: "Title – Subtitle" or "Title - Subtitle"
    match = re.match(r'^(.+?)\s*[–\-]\s*(.+)$', cleaned)
    if match:
        return score_field(match.group(2).strip(), 'pattern_match', {'matches_expected': True})
    return score_field(None, 'not_found')
