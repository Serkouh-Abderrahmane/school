"""
Content Validation
===================
Validates extracted content and reports warnings/errors.
"""

import re


class ValidationResult:
    def __init__(self):
        self.errors = []
        self.warnings = []
        self.info = []

    def error(self, service_id, message):
        self.errors.append({'service': service_id, 'message': message})

    def warn(self, service_id, message):
        self.warnings.append({'service': service_id, 'message': message})

    def add_info(self, message):
        self.info.append(message)

    @property
    def ok(self):
        return len(self.errors) == 0

    def summary(self):
        lines = []
        if self.errors:
            lines.append(f"ERRORS ({len(self.errors)}):")
            for e in self.errors:
                lines.append(f"  [ERROR] [{e['service']}] {e['message']}")
        if self.warnings:
            lines.append(f"WARNINGS ({len(self.warnings)}):")
            for w in self.warnings:
                lines.append(f"  [WARN]  [{w['service']}] {w['message']}")
        if self.info:
            lines.append(f"INFO ({len(self.info)}):")
            for i in self.info:
                lines.append(f"  [INFO]  {i}")
        return '\n'.join(lines)


def validate_services(services, all_categories=None):
    """
    Validate all services and return a ValidationResult.
    Checks for: duplicates, missing fields, broken references, etc.
    """
    result = ValidationResult()
    seen_titles = {}
    seen_ids = {}

    for svc in services:
        sid = svc.get('id', 'unknown')
        title = svc.get('title', '')

        # Duplicate title check
        title_lower = title.lower().strip()
        if title_lower in seen_titles:
            result.error(sid, f"Duplicate title '{title}' (also in {seen_titles[title_lower]})")
        seen_titles[title_lower] = sid

        # Duplicate ID check
        if sid in seen_ids:
            result.error(sid, f"Duplicate ID '{sid}' (also in {seen_ids[sid]})")
        seen_ids[sid] = sid

        # Missing critical fields
        if not title:
            result.error(sid, 'Missing title')
        if not svc.get('description'):
            result.warn(sid, 'Missing description')
        if not svc.get('subtitle'):
            result.warn(sid, 'Missing subtitle')

        # Price validation
        price = svc.get('price', {})
        if isinstance(price, dict):
            has_price = bool(price.get('amount'))
        elif isinstance(price, str):
            has_price = bool(price.strip())
        else:
            has_price = False
        if not has_price:
            result.warn(sid, 'Missing price')

        # Duration validation
        if not svc.get('duration'):
            result.warn(sid, 'Missing duration')

        # Image validation
        images = svc.get('images', [])
        if not images:
            result.warn(sid, 'No images found')
        elif len(images) == 0:
            result.warn(sid, 'No images found')

        # Objectives validation
        if not svc.get('objectives'):
            result.warn(sid, 'No objectives extracted')

        # Structure validation
        if not svc.get('structure'):
            result.warn(sid, 'No program structure extracted')

        # Slug validation
        slug = svc.get('slug', '')
        if not slug:
            result.error(sid, 'Missing slug')
        elif not re.match(r'^[a-z0-9]+(-[a-z0-9]+)*$', slug):
            result.warn(sid, f"Slug '{slug}' may not be URL-safe")

        # Page URL validation
        page_url = svc.get('pageUrl', '')
        if not page_url:
            result.warn(sid, 'No page URL generated')

        # SEO validation
        seo = svc.get('seo', {})
        if not seo.get('pageTitle'):
            result.warn(sid, 'Missing SEO page title')
        if not seo.get('metaDescription'):
            result.warn(sid, 'Missing SEO meta description')

    # Cross-reference validation
    category_ids = {c['id'] for c in (all_categories or [])}
    for svc in services:
        cat = svc.get('category', '')
        if cat and cat not in category_ids:
            result.warn(svc.get('id', '?'), f"Category '{cat}' not in categories list")

    # Summary stats
    result.add_info(f"Total services: {len(services)}")
    result.add_info(f"Services with images: {sum(1 for s in services if s.get('images'))}")
    result.add_info(f"Services with price: {sum(1 for s in services if (s.get('price', {}) if isinstance(s.get('price'), dict) else s.get('price', '')))}")
    result.add_info(f"Services with objectives: {sum(1 for s in services if s.get('objectives'))}")

    return result
