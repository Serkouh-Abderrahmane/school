"""
Search Index Generator
=======================
Generates a search index JSON for client-side search.
"""

import re


def _get_price_amount(svc):
    price = svc.get('price', {})
    if isinstance(price, dict):
        return price.get('amount', '')
    if isinstance(price, str):
        m = re.search(r'(\d+)', price)
        return m.group(1) if m else ''
    return ''


def _get_price_currency(svc):
    price = svc.get('price', {})
    if isinstance(price, dict):
        return price.get('currency', '$')
    if isinstance(price, str):
        return '$' if '$' in price else ''
    return '$'


def generate_search_index(services, categories):
    """
    Generate a search index from services data.
    Optimized for client-side search (small, fast, no dependencies).
    """
    index = {
        'generatedAt': __import__('datetime').datetime.now().isoformat(),
        'totalResults': len(services),
        'categories': [],
        'services': [],
    }

    # Category index
    for cat in categories:
        index['categories'].append({
            'id': cat['id'],
            'title': cat['title'],
            'description': cat.get('description', ''),
            'count': cat.get('cardCount', 0),
        })

    # Service index (denormalized for fast search)
    for svc in services:
        search_text = ' '.join(filter(None, [
            svc.get('title', ''),
            svc.get('subtitle', ''),
            svc.get('description', ''),
            ' '.join(svc.get('objectives', [])),
            ' '.join(svc.get('benefits', [])),
            ' '.join(svc.get('audience', [])),
            svc.get('category', ''),
            svc.get('level', ''),
            svc.get('format', ''),
            svc.get('duration', ''),
        ])).lower()

        index['services'].append({
            'id': svc['id'],
            'title': svc.get('title', ''),
            'subtitle': svc.get('subtitle', ''),
            'category': svc.get('category', ''),
            'categoryTitle': get_category_title(svc.get('category', ''), categories),
            'slug': svc.get('slug', ''),
            'price': _get_price_amount(svc),
            'currency': _get_price_currency(svc),
            'duration': svc.get('duration', ''),
            'level': svc.get('level', ''),
            'format': svc.get('format', ''),
            'language': svc.get('language', 'fr'),
            'image': svc.get('image', ''),
            'pageUrl': svc.get('pageUrl', ''),
            'searchText': search_text,
        })

    return index


def get_category_title(category_id, categories):
    """Get category display title."""
    for cat in categories:
        if cat['id'] == category_id:
            return cat['title']
    return category_id
