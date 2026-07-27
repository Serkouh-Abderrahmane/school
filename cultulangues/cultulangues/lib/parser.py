"""
Semantic PDF Parser for Cultulangues
=====================================
Parses the official PDF and extracts structured service data
with rich content blocks, metadata, and relationships.
"""

import re
from datetime import datetime


# ─── SECTION HEADERS (detected semantically) ─────────────────────────────────

SECTION_HEADERS_FR = {
    'description': [
        r'^(?:Un programme|Une immersion|Un espace|Un atelier|Un format|Boostez)',
    ],
    'included': [
        r'^Ce que vous obtenez',
        r'^Ce que vous allez d[eé]velopper',
        r'^Ce que vous allez vivre',
        r"^What's included",
        r'^What.s included',
    ],
    'benefits': [
        r'^Pourquoi (?:c[a\'] fonctionne|c\'est id[eé]al)',
        r'^Pourquoi (?:les )?(?:apprenants?|c)'],
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
    ],
    'calendar': [
        r'^CALENDRIER',
        r'^\d{4}[–\-]\d{4} Session Calendar',
        r'^Session Calendar',
        r'^Calendrier',
    ],
    'session': [
        r'^SESSION\s+\d+',
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
    ],
    'experience': [
        r"^L'exp[eé]rience",
        r'^The .* experience',
    ],
}

SKIP_PATTERNS = [
    r'^\d+$',
    r'^(?:sept|oct|nov|d[ée]c|janv|f[eé]vr|mars|avr|mai|juin)\b',
    r'^(?:Sept|Oct|Nov|Dec|Jan|Feb|Mar|Apr|May|Jun)\b',
    r'^\d{1,2}[hH]\s*[-\u2013]\s*\d{1,2}[hH]',
    r'^\d{1,2}\s+(?:sept|oct|nov|d[ée]c|janv|f[eé]vr|mars|avr|mai|juin)',
]

# Service title patterns - detect new service blocks
SERVICE_TITLE_PATTERNS = [
    r'^Fran[cç]ais Express\b',
    r'^Parcours Soir[eé]e Linguo\b',
    r'^Parcours Samedis en fran[cç]ais\b',
    r'^English Express Pathway\b',
    r'^Evening Lingo Pathway\b',
    r'^Saturdays in English Pathway\b',
    r"^Cap sur l'oral\b",
    r'^Pr[eé]paration Oral [BC]\b',
    r'^Pr[eé]paration TCO\b',
    r'^Parcours TCF\b',
    r'^TCF (?:Qu[eé]bec|Canada) Intensif\b',
    r'^Boostez votre fran[cç]ais\b',
    r'^Atelier de conversation\b',
    r'^Atelier Culture du Canada\b',
    r'^Atelier maintien\b',
]


def slugify(text):
    """Convert text to URL-friendly slug."""
    t = text.lower().strip()
    t = re.sub(r'[^\w\s-]', '', t)
    t = re.sub(r'[\s_]+', '-', t)
    t = re.sub(r'-+', '-', t)
    return t.strip('-')


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
    """Check if a line starts a new service block."""
    for pattern in SERVICE_TITLE_PATTERNS:
        if re.match(pattern, line, re.IGNORECASE):
            return True
    return False


def detect_section_type(line):
    """Detect which section type a line belongs to."""
    for section_type, patterns in SECTION_HEADERS_FR.items():
        for pattern in patterns:
            if re.match(pattern, line, re.IGNORECASE):
                return section_type
    return None


def is_skip_line(line):
    """Check if a line should be skipped."""
    for pattern in SKIP_PATTERNS:
        if re.match(pattern, line, re.IGNORECASE):
            return True
    return False


# ─── RICH CONTENT BUILDER ────────────────────────────────────────────────────

def build_rich_sections(text_lines, section_type_hints=None):
    """
    Convert raw text lines into structured content blocks.
    Returns a list of section objects with type, content, and metadata.
    """
    sections = []
    current_section = None
    in_list = False

    for line in text_lines:
        cleaned = clean(line)
        if not cleaned:
            if current_section and current_section['type'] == 'paragraph':
                # End current paragraph
                sections.append(current_section)
                current_section = None
                in_list = False
            continue

        # Detect section header
        detected = detect_section_type(cleaned)
        if detected and detected not in ('description',):
            if current_section:
                sections.append(current_section)
            current_section = None
            in_list = False

        # Check for bullet list items
        bullet_match = re.match(r'^[\u2022\u2023♦\-\*]\s*(.+)', cleaned)
        numbered_match = re.match(r'^\d+[.)]\s+(.+)', cleaned)

        if bullet_match or numbered_match:
            content = bullet_match.group(1) if bullet_match else numbered_match.group(1)
            if current_section and current_section['type'] == 'bullet-list':
                current_section['items'].append(content)
            else:
                if current_section:
                    sections.append(current_section)
                current_section = {
                    'type': 'bullet-list',
                    'items': [content],
                }
                in_list = True
            continue

        # Check for warning/note patterns
        if re.match(r'^(?:Attention|Important|Note|Warning)\s*:', cleaned, re.IGNORECASE):
            if current_section:
                sections.append(current_section)
            current_section = {
                'type': 'warning',
                'content': re.sub(r'^(?:Attention|Important|Note|Warning)\s*:\s*', '', cleaned, flags=re.IGNORECASE),
            }
            continue

        # Check for quote patterns (Cultulangues experience lines)
        if re.match(r"^(?:C'est l.exp|L'exp|rime doux|soutien constant|espace humain)", cleaned, re.IGNORECASE):
            if current_section:
                sections.append(current_section)
            current_section = {
                'type': 'quote',
                'content': cleaned,
            }
            sections.append(current_section)
            current_section = None
            continue

        # Regular paragraph text
        if in_list:
            if current_section:
                sections.append(current_section)
            current_section = None
            in_list = False

        if current_section and current_section['type'] == 'paragraph':
            current_section['content'] += ' ' + cleaned
        else:
            if current_section:
                sections.append(current_section)
            current_section = {
                'type': 'paragraph',
                'content': cleaned,
            }

    if current_section:
        sections.append(current_section)

    return sections


def build_included_items(text_block):
    """Extract included items as structured list."""
    items = []
    lines = text_block.split('\n')
    for line in lines:
        cleaned = clean(line)
        if not cleaned:
            continue
        if any(re.match(p, cleaned, re.IGNORECASE) for p in [
            r'^Pourquoi', r'^Pour qui', r'^Fonctionnement',
            r"^L'exp", r'^Tarif', r'^Structure', r'^Objectifs',
            r'^CALENDRIER', r'^Session', r'^Mettre',
        ]):
            break
        bullet = re.match(r'^[\u2022\u2023♦\-\*]\s*(.+)', cleaned)
        if bullet:
            items.append(bullet.group(1))
        elif len(cleaned) > 5:
            items.append(cleaned)
    return items


def build_benefits(text_block):
    """Extract benefits as structured list."""
    items = []
    lines = text_block.split('\n')
    for line in lines:
        cleaned = clean(line)
        if not cleaned:
            continue
        if any(re.match(p, cleaned, re.IGNORECASE) for p in [
            r'^Tarif', r'^Fonctionnement', r'^Fees',
            r'^Structure', r'^CALENDRIER', r'^Session',
            r"^L'exp", r'^Mettre',
        ]):
            break
        bullet = re.match(r'^[\u2022\u2023♦\-\*]\s*(.+)', cleaned)
        if bullet:
            items.append(bullet.group(1))
        elif len(cleaned) > 10:
            items.append(cleaned)
    return items


def build_audience(text_block):
    """Extract target audience items."""
    items = []
    lines = text_block.split('\n')
    for line in lines:
        cleaned = clean(line)
        if not cleaned:
            continue
        if any(re.match(p, cleaned, re.IGNORECASE) for p in [
            r'^Fonctionnement', r'^Ce que', r"^L'exp",
            r'^Tarif', r'^Structure', r'^Objectifs',
        ]):
            break
        bullet = re.match(r'^[\u2022\u2023♦\-\*]\s*(.+)', cleaned)
        if bullet:
            items.append(bullet.group(1))
        elif len(cleaned) > 5 and not cleaned.startswith('Pour les'):
            items.append(cleaned)
    return items


def build_objectives(text_block):
    """Extract learning objectives."""
    items = []
    lines = text_block.split('\n')
    for line in lines:
        cleaned = clean(line)
        if not cleaned:
            continue
        if any(re.match(p, cleaned, re.IGNORECASE) for p in [
            r'^Tarif', r'^Structure', r'^CALENDRIER',
            r'^Session', r'^Mettre',
        ]):
            break
        bullet = re.match(r'^[\u2022\u2023♦\-\*]\s*(.+)', cleaned)
        if bullet:
            items.append(bullet.group(1))
        elif len(cleaned) > 10:
            items.append(cleaned)
    return items


def build_structure(text_block):
    """Extract program structure as key-value pairs."""
    items = []
    lines = text_block.split('\n')
    for line in lines:
        cleaned = clean(line)
        if not cleaned:
            continue
        if any(re.match(p, cleaned, re.IGNORECASE) for p in [
            r'^Objectifs', r'^Tarif', r'^CALENDRIER',
            r'^Session', r'^Mettre',
        ]):
            break
        kv = re.match(r'^([^:]+)\s*:\s*(.+)', cleaned)
        if kv:
            items.append({
                'label': clean(kv.group(1)),
                'value': clean(kv.group(2)),
            })
        elif len(cleaned) > 5:
            items.append({'label': '', 'value': cleaned})
    return items


def build_price_info(text_block):
    """Extract price with included details."""
    lines = text_block.split('\n')
    price_line = ''
    included = []

    for line in lines:
        cleaned = clean(line)
        if not cleaned:
            continue
        if any(re.match(p, cleaned, re.IGNORECASE) for p in [
            r'^CALENDRIER', r'^Session', r'^Mettre',
            r'^Structure', r'^Objectifs',
        ]):
            break

        price_match = re.match(r'^(\d+)\s*\$\s*(.*)', cleaned)
        if price_match:
            price_line = cleaned
            continue

        if price_line and not included:
            # First line after price is often "Votre preparation... incluant :"
            pass

        if cleaned.startswith(('40 h', '30 h', '60 h', 'Une ', 'Un ')):
            included.append(cleaned)

    return {
        'raw': price_line,
        'amount': re.search(r'(\d+)\s*\$', price_line).group(1) if re.search(r'(\d+)\s*\$', price_line) else '',
        'currency': '$',
        'includes': included,
    }


# ─── SERVICE BOUNDARY DETECTION ─────────────────────────────────────────────

def split_into_services(full_text):
    """Split the full document text into service blocks."""
    lines = full_text.split('\n')
    services = []
    current_lines = []
    current_title = None

    for line in lines:
        stripped = clean(line)
        if not stripped:
            current_lines.append('')
            continue

        if is_service_boundary(stripped):
            if current_title and current_lines:
                services.append({
                    'title': current_title,
                    'lines': current_lines,
                })
            current_title = stripped
            current_lines = [stripped]
        elif current_title:
            current_lines.append(stripped)

    if current_title and current_lines:
        services.append({
            'title': current_title,
            'lines': current_lines,
        })

    return services


# ─── SECTION EXTRACTION ──────────────────────────────────────────────────────

def extract_sections_from_lines(lines):
    """Parse lines into named sections based on detected headers."""
    sections = {}
    current_type = 'header'  # Start with header for title + subtitle + description
    current_lines = []

    for i, line in enumerate(lines):
        stripped = clean(line)
        if not stripped:
            current_lines.append('')
            continue

        # Skip internal metadata
        if stripped in ('Mettre', 'Lien de la fiche d\'inscription', 'Paiement',
                       'Lien Test de niveau', 'Lien calendly pour evaluation',
                       'Lien calendly pour evaluation orale'):
            if current_type and current_lines:
                sections.setdefault(current_type, []).extend(current_lines)
            current_type = 'links'
            current_lines = []
            continue

        detected = detect_section_type(stripped)
        if detected and detected not in ('description',):
            if current_type and current_lines:
                sections.setdefault(current_type, []).extend(current_lines)
            current_type = detected
            current_lines = []
            continue

        current_lines.append(stripped)

    if current_type and current_lines:
        sections.setdefault(current_type, []).extend(current_lines)

    return sections


# ─── MAIN PARSER ─────────────────────────────────────────────────────────────

def parse_document(full_text):
    """
    Main entry point: parse the full document text and return
    a list of structured service objects.
    """
    raw_services = split_into_services(full_text)
    parsed = []

    for svc in raw_services:
        sections = extract_sections_from_lines(svc['lines'])
        parsed.append(extract_service(svc['title'], sections, svc['lines']))

    return parsed


def extract_service(title, sections, raw_lines):
    """Extract all fields from a single service block."""
    # Parse header (first 1-3 lines)
    header_lines = sections.get('header', [])
    subtitle = ''
    description_lines = []

    for i, line in enumerate(header_lines):
        if i == 0:
            continue  # Skip title itself
        if len(line) > 60 and not subtitle:
            subtitle = line
            continue
        if len(line) > 20:
            description_lines.append(line)

    # Build rich content from description
    description_text = ' '.join(description_lines[:3])

    # Build structured sections
    rich_sections = build_rich_sections(raw_lines)

    # Extract specific fields
    structure_items = build_structure('\n'.join(sections.get('structure', [])))
    price_info = build_price_info('\n'.join(sections.get('price', [])))
    objectives = build_objectives('\n'.join(sections.get('objectives', [])))
    audience = build_audience('\n'.join(sections.get('audience', [])))
    included = build_included_items('\n'.join(sections.get('included', [])))
    benefits = build_benefits('\n'.join(sections.get('benefits', [])))

    # Extract metadata from structure
    duration = ''
    schedule = ''
    frequency = ''
    hours_per_week = ''
    volume = ''
    max_students = ''
    prerequisites = ''

    for item in structure_items:
        label_lower = item['label'].lower()
        value = item['value']
        if 'duree' in label_lower or 'duration' in label_lower:
            duration = value
        elif 'rythme' in label_lower or 'frequence' in label_lower:
            frequency = value
        elif 'horaire' in label_lower or 'schedule' in label_lower:
            schedule = value
        elif 'volume' in label_lower:
            volume = value
        elif 'personnel' in label_lower or 'homework' in label_lower:
            hours_per_week = value
        elif 'niveau' in label_lower and 'minimum' in label_lower:
            prerequisites = value

    # Detect group size from text
    full_text = '\n'.join(raw_lines)
    grp_match = re.search(r'max(?:imum)?\.?\s*(\d+)\s+participants?', full_text, re.IGNORECASE)
    if not grp_match:
        grp_match = re.search(r'(\d+)\s+participants?\s+maximum', full_text, re.IGNORECASE)
    if not grp_match:
        grp_match = re.search(r"max\.\s*(\d+)", full_text, re.IGNORECASE)
    max_students = grp_match.group(1) if grp_match else ''

    # Detect level
    lvl_match = re.search(r'niveau\s+([A-C]\d?)', full_text, re.IGNORECASE)
    level = lvl_match.group(1).upper() if lvl_match else ''

    # Detect location/delivery
    location = 'En ligne / Gatineau, QC'
    delivery = 'Presentiel et en ligne'

    # Detect sessions
    sessions = extract_sessions(full_text)

    return {
        'title': title,
        'subtitle': subtitle,
        'description': description_text,
        'richSections': rich_sections,
        'structure': structure_items,
        'objectives': objectives,
        'audience': audience,
        'included': included,
        'benefits': benefits,
        'price': price_info,
        'duration': duration,
        'schedule': schedule,
        'frequency': frequency,
        'volume': volume,
        'hoursPerWeek': hours_per_week,
        'maxStudents': max_students,
        'level': level,
        'prerequisites': prerequisites,
        'location': location,
        'delivery': delivery,
        'sessions': sessions,
    }


def extract_sessions(full_text):
    """Extract session schedule data."""
    sessions = []
    # Monthly sessions for intensive programs
    monthly_pattern = re.finditer(
        r'((?:Septembre|Octobre|Novembre|D[eé]cembre|Janvier|F[eé]vrier|Mars|Avril|Mai|Juin)'
        r'\s*\d{4})\s*\n?\s*([^\n]*(?:\n[^\n]*){0,5}?)(?=(?:Septembre|Octobre|Novembre|D[eé]cembre|Janvier|F[eé]vrier|Mars|Avril|Mai|Juin)\s*\d{4}|$)',
        full_text, re.IGNORECASE
    )

    for match in monthly_pattern:
        label = clean(match.group(0).split('\n')[0])
        dates_text = match.group(2)
        dates = re.findall(r'(\d{1,2}\s+\w+(?:\s+\d{4})?)', dates_text)
        sessions.append({
            'label': label,
            'dates': dates[:15],
        })

    # Weekly sessions for part-time programs
    if not sessions:
        weekly = re.finditer(
            r'(SESSION\s+\d+\s*[-\u2013]\s*(?:Automne|Hiver|Printemps|Fall|Winter|Spring)\s*\d{4})',
            full_text, re.IGNORECASE
        )
        for match in weekly:
            start = match.end()
            block = full_text[start:start + 2000]
            date_rows = re.findall(r'(\d{1,2}\s+\w+\s+\d{4})\s+\d+\s*h', block)
            sessions.append({
                'label': clean(match.group(1)),
                'dates': date_rows[:12],
            })

    return sessions
