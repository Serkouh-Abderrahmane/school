"""
Navigation Generator
=====================
Generates navigation data: dropdowns, cards, breadcrumbs, related services.
"""


def generate_navigation(services, categories):
    """
    Generate complete navigation structure from services data.
    """
    return {
        'mainNav': build_main_nav(categories),
        'dropdowns': build_dropdowns(services, categories),
        'cards': build_homepage_cards(services, categories),
        'breadcrumbs': build_all_breadcrumbs(services, categories),
        'relatedServices': build_related_map(services, categories),
    }


def build_main_nav(categories):
    """Build main navigation items."""
    return [
        {'label': 'Accueil', 'url': '/index.html', 'active': True},
        {
            'label': 'Programmes',
            'url': '#',
            'children': [
                {
                    'label': cat['title'],
                    'url': f'/pages/{cat["id"]}.html',
                    'description': cat.get('description', ''),
                }
                for cat in categories
            ],
        },
        {'label': 'A propos', 'url': '/pages/about.html'},
        {'label': 'Contact', 'url': '/pages/contact.html'},
    ]


def build_dropdowns(services, categories):
    """Build dropdown menu data for each category."""
    dropdowns = {}
    for cat in categories:
        cat_services = [s for s in services if s['category'] == cat['id']]
        dropdowns[cat['id']] = {
            'title': cat['title'],
            'description': cat.get('description', ''),
            'items': [
                {
                    'label': s['title'],
                    'url': f'/pages/{s["slug"]}.html',
                    'subtitle': s.get('subtitle', ''),
                }
                for s in cat_services
            ],
        }
    return dropdowns


def build_homepage_cards(services, categories):
    """Build homepage service card data."""
    cards = []
    for cat in categories:
        cat_services = [s for s in services if s['category'] == cat['id']]
        if not cat_services:
            continue

        # Use first service as representative, or the main one
        primary = cat_services[0]

        cards.append({
            'id': cat['id'],
            'title': cat['title'],
            'description': cat.get('description', ''),
            'image': cat.get('heroImage', ''),
            'count': f"{len(cat_services)} parcours disponibles",
            'accent': get_category_accent(cat['id']),
            'services': [
                {
                    'title': s['title'],
                    'url': f'/pages/{s["slug"]}.html',
                }
                for s in cat_services
            ],
        })

    return cards


def build_all_breadcrumbs(services, categories):
    """Build breadcrumb data for all pages."""
    cat_map = {c['id']: c for c in categories}
    breadcrumbs = {}

    for svc in services:
        cat = cat_map.get(svc['category'], {})
        breadcrumbs[svc['slug']] = [
            {'label': 'Accueil', 'url': '/index.html'},
            {'label': cat.get('title', svc['category']), 'url': f'/pages/{svc["category"]}.html'},
            {'label': svc['title'], 'url': f'/pages/{svc["slug"]}.html'},
        ]

    return breadcrumbs


def build_related_map(services, categories):
    """
    Build a map of related services for each service.
    Related = same category, or semantically similar.
    """
    related_map = {}

    for svc in services:
        sid = svc['id']
        related = []

        # Same category services (excluding self)
        same_cat = [s for s in services if s['category'] == svc['category'] and s['id'] != sid]
        related.extend([s['id'] for s in same_cat[:3]])

        # Cross-category relations based on format/level
        if svc.get('format') == 'intensif':
            # Intensif services relate to their partiel counterpart
            for s in services:
                if s['id'] != sid and s.get('category') == svc.get('category'):
                    if s.get('format') == 'partiel' and s['id'] not in related:
                        related.append(s['id'])
                        break

        if svc.get('level') in ('B', 'C'):
            # Oral B relates to Oral C
            for s in services:
                if s['id'] != sid and s.get('category') == svc.get('category'):
                    if s.get('level') and s.get('level') != svc.get('level'):
                        if s['id'] not in related:
                            related.append(s['id'])

        # TCF Quebec relates to TCF Canada
        if 'tcf-quebec' in sid:
            for s in services:
                if 'tcf-canada' in s['id'] and s.get('format') == svc.get('format'):
                    if s['id'] not in related:
                        related.append(s['id'])
                        break

        if 'tcf-canada' in sid:
            for s in services:
                if 'tcf-quebec' in s['id'] and s.get('format') == svc.get('format'):
                    if s['id'] not in related:
                        related.append(s['id'])
                        break

        # Solo services relate to all categories (they're à la carte)
        if svc.get('format') == 'solo':
            for s in services:
                if s['id'] != sid and s.get('format') != 'solo':
                    if s['id'] not in related:
                        related.append(s['id'])
                    if len(related) >= 3:
                        break

        # Workshop services relate to each other
        if svc.get('category') == 'ateliers':
            for s in services:
                if s['id'] != sid and s.get('category') == 'ateliers':
                    if s['id'] not in related:
                        related.append(s['id'])

        related_map[sid] = related[:4]  # Max 4 related

    return related_map


def get_category_accent(category_id):
    """Get accent color for category."""
    accents = {
        'parcours-linguistique': 'purple',
        'cap-sur-l-oral': 'blue',
        'tcf-preparation': 'red',
        'formation-en-solo': 'purple',
        'ateliers': 'emerald',
    }
    return accents.get(category_id, 'purple')
