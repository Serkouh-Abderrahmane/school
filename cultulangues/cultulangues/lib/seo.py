"""
SEO Metadata Generator
=======================
Automatically generates SEO metadata from extracted service content.
"""

import re


def generate_seo(service, site_name='Cultulangues'):
    """
    Generate SEO metadata for a service.
    Returns dict with title, description, keywords, OpenGraph data.
    """
    title = service.get('title', '')
    subtitle = service.get('subtitle', '')
    description = service.get('description', '')
    category = service.get('category', '')
    price = service.get('price', {})
    duration = service.get('duration', '')
    level = service.get('level', '')
    language = service.get('language', 'fr')

    # Page title: "Service Title | Site Name"
    page_title = f"{title} | {site_name}"

    # Meta description: first 155 chars of description, or subtitle
    meta_desc = description or subtitle
    if len(meta_desc) > 155:
        meta_desc = meta_desc[:152] + '...'

    # Keywords
    keywords = generate_keywords(service)

    # OpenGraph
    og_title = subtitle if subtitle else title
    og_description = meta_desc
    og_image = service.get('images', [{}])[0].get('desktop', '') if service.get('images') else ''

    # Canonical URL
    slug = service.get('slug', '')
    canonical_url = f"/pages/{slug}.html" if slug else ''

    return {
        'pageTitle': page_title,
        'metaDescription': meta_desc,
        'keywords': keywords,
        'openGraph': {
            'title': og_title,
            'description': og_description,
            'image': og_image,
            'type': 'website',
            'siteName': site_name,
        },
        'canonical': canonical_url,
        'language': language,
    }


def generate_keywords(service):
    """Generate keyword list from service data."""
    keywords = []

    # Category keywords
    category_keywords = {
        'parcours-linguistique': ['cours de francais', 'cours de langue', 'apprendre francais', 'formation linguistique'],
        'cap-sur-l-oral': ['oral exam', 'expression orale', 'TCO', 'test competences orales'],
        'tcf-preparation': ['TCF', 'TCF Quebec', 'TCF Canada', 'preparation test', 'immigration'],
        'formation-en-solo': ['cours particulier', 'cours prive', '1-to-1', 'formation personnalisee'],
        'ateliers': ['atelier francais', 'conversation', 'culture canadienne', 'pratique francais'],
    }
    keywords.extend(category_keywords.get(service.get('category', ''), []))

    # Title words
    title_words = re.findall(r'\b[a-zA-Z]{4,}\b', service.get('title', ''))
    keywords.extend([w.lower() for w in title_words])

    # Level
    level = service.get('level', '')
    if level:
        keywords.append(f'niveau {level}')
        keywords.append(f'level {level}')

    # Language
    if service.get('language') == 'en':
        keywords.extend(['english', 'learn english', 'english course'])
    else:
        keywords.extend(['francais', 'french', 'apprendre francais'])

    # Duration
    duration = service.get('duration', '')
    if duration:
        keywords.append(duration)

    # Format
    fmt = service.get('format', '')
    if fmt == 'intensif':
        keywords.extend(['intensif', 'intensive', 'accelere'])
    elif fmt == 'partiel':
        keywords.extend(['temps partiel', 'part-time', 'flexible'])

    # Deduplicate and limit
    seen = set()
    unique = []
    for kw in keywords:
        kw_lower = kw.lower().strip()
        if kw_lower not in seen and len(kw_lower) > 2:
            seen.add(kw_lower)
            unique.append(kw_lower)

    return unique[:15]


def generate_breadcrumb(seo_data, service):
    """Generate breadcrumb trail data."""
    category_names = {
        'parcours-linguistique': 'Parcours linguistique',
        'cap-sur-l-oral': "Cap sur l'oral",
        'tcf-preparation': 'Preparation TCF',
        'formation-en-solo': 'Formation en solo',
        'ateliers': 'Ateliers',
    }

    category = service.get('category', '')
    return [
        {'label': 'Accueil', 'url': '/index.html'},
        {'label': category_names.get(category, category), 'url': f'/pages/{category}.html'},
        {'label': service.get('title', ''), 'url': seo_data.get('canonical', '')},
    ]
