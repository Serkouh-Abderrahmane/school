"""
Production Content Validator
=============================
Strict validation that fails the build on missing required fields.
Generates detailed validation results for reporting.
"""

import re
from .confidence import confidence_label, needs_review


class ValidationResult:
    """Container for validation results."""
    
    def __init__(self):
        self.errors = []
        self.warnings = []
        self.info = []
        self.service_results = {}
    
    def error(self, service_id, field, message, context=None):
        self.errors.append({
            'service': service_id,
            'field': field,
            'message': message,
            'context': context or {},
        })
    
    def warn(self, service_id, field, message, context=None):
        self.warnings.append({
            'service': service_id,
            'field': field,
            'message': message,
            'context': context or {},
        })
    
    def add_info(self, message):
        self.info.append(message)
    
    def add_service_result(self, service_id, result):
        self.service_results[service_id] = result
    
    @property
    def ok(self):
        return len(self.errors) == 0
    
    @property
    def error_count(self):
        return len(self.errors)
    
    @property
    def warning_count(self):
        return len(self.warnings)
    
    def summary(self):
        lines = []
        if self.errors:
            lines.append(f"ERRORS ({len(self.errors)}):")
            for e in self.errors:
                lines.append(f"  [ERROR] [{e['service']}] {e['field']}: {e['message']}")
        if self.warnings:
            lines.append(f"WARNINGS ({len(self.warnings)}):")
            for w in self.warnings:
                lines.append(f"  [WARN]  [{w['service']}] {w['field']}: {w['message']}")
        if self.info:
            lines.append(f"INFO ({len(self.info)}):")
            for i in self.info:
                lines.append(f"  [INFO]  {i}")
        return '\n'.join(lines)


def validate_all_services(services, expected_count=21, expected_categories=None):
    """
    Validate all services strictly.
    Returns ValidationResult. If errors exist, build should fail.
    """
    if expected_categories is None:
        expected_categories = [
            'parcours-linguistique', 'cap-sur-l-oral', 'tcf-preparation',
            'formation-en-solo', 'ateliers',
        ]
    
    result = ValidationResult()
    
    # ── 1. Count validation ──
    if len(services) < expected_count:
        result.error('global', 'service_count',
                     f"Expected {expected_count} services, found {len(services)}")
    elif len(services) > expected_count:
        result.warn('global', 'service_count',
                    f"Expected {expected_count} services, found {len(services)} (extra services detected)")
    
    # ── 2. Per-service validation ──
    seen_ids = {}
    seen_titles = {}
    
    for svc in services:
        sid = svc.get('id', 'unknown')
        title = svc.get('title', '')
        
        # Service result tracking
        svc_result = {
            'id': sid,
            'title': title,
            'errors': [],
            'warnings': [],
            'field_scores': {},
        }
        
        # Duplicate checks
        if sid in seen_ids:
            result.error(sid, 'id', f"Duplicate service ID '{sid}'")
        seen_ids[sid] = True
        
        title_lower = title.lower().strip()
        if title_lower in seen_titles:
            result.error(sid, 'title', f"Duplicate title '{title}' (also in {seen_titles[title_lower]})")
        seen_titles[title_lower] = sid
        
        # Required fields
        if not title:
            result.error(sid, 'title', 'Missing service title')
            svc_result.errors.append('title')
        
        if not svc.get('subtitle', {}).get('value') and not svc.get('subtitle'):
            result.error(sid, 'subtitle', 'Missing subtitle')
            svc_result.errors.append('subtitle')
        
        if not svc.get('description', {}).get('value') and not svc.get('description'):
            result.error(sid, 'description', 'Missing description')
            svc_result.errors.append('description')
        
        # Category validation
        category = svc.get('category', '')
        if not category:
            result.error(sid, 'category', 'Missing category')
            svc_result.errors.append('category')
        elif category not in expected_categories:
            result.warn(sid, 'category', f"Unknown category '{category}'")
        
        # Image validation
        images = svc.get('images', [])
        if not images:
            result.warn(sid, 'images', 'No images associated')
            svc_result.warnings.append('images')
        
        # Price validation (required)
        price = svc.get('price', {})
        if isinstance(price, dict):
            has_price = bool(price.get('value', {}).get('amount') if isinstance(price.get('value'), dict) else price.get('amount'))
        elif isinstance(price, str):
            has_price = bool(price.strip())
        else:
            has_price = False
        
        if not has_price:
            price_conf = svc.get('price_confidence', 0)
            if price_conf < 0.5:
                result.error(sid, 'price', 'Missing price (required)')
                svc_result.errors.append('price')
            else:
                result.warn(sid, 'price', 'Price extraction has low confidence')
                svc_result.warnings.append('price')
        
        # Duration validation (required)
        duration = svc.get('duration', {})
        if isinstance(duration, dict):
            has_duration = bool(duration.get('value'))
        elif isinstance(duration, str):
            has_duration = bool(duration.strip())
        else:
            has_duration = False
        
        if not has_duration:
            result.warn(sid, 'duration', 'Missing duration')
            svc_result.warnings.append('duration')
        
        # Low confidence warnings
        for field in ['price', 'duration', 'schedule', 'objectives', 'structure']:
            conf_field = f'{field}_confidence'
            if conf_field in svc:
                conf = svc[conf_field]
                if isinstance(conf, dict):
                    conf = conf.get('confidence', 0)
                if conf > 0 and conf < 0.70:
                    result.warn(sid, field, f"Low confidence ({confidence_label(conf)}): {conf:.2f}")
                    svc_result.warnings.append(f'{field}_low_confidence')
        
        # Slug validation
        slug = svc.get('slug', '')
        if not slug:
            result.error(sid, 'slug', 'Missing URL slug')
            svc_result.errors.append('slug')
        elif not re.match(r'^[a-z0-9]+(-[a-z0-9]+)*$', slug):
            result.warn(sid, 'slug', f"Slug '{slug}' may not be URL-safe")
        
        # Page URL validation
        page_url = svc.get('pageUrl', '')
        if not page_url:
            result.warn(sid, 'pageUrl', 'No page URL set')
        
        result.add_service_result(sid, svc_result)
    
    # ── 3. Category coverage validation ──
    found_categories = set(s.get('category', '') for s in services)
    for cat in expected_categories:
        if cat not in found_categories:
            result.error('global', 'category_coverage', f"No services found for category '{cat}'")
    
    # ── 4. Cross-reference validation ──
    category_service_counts = {}
    for svc in services:
        cat = svc.get('category', '')
        category_service_counts[cat] = category_service_counts.get(cat, 0) + 1
    
    for cat, count in category_service_counts.items():
        result.add_info(f"Category '{cat}': {count} services")
    
    # ── 5. Summary stats ──
    total_images = sum(1 for s in services if s.get('images'))
    total_prices = sum(1 for s in services if s.get('price'))
    total_objectives = sum(1 for s in services if s.get('objectives'))
    total_structure = sum(1 for s in services if s.get('structure'))
    total_sessions = sum(1 for s in services if s.get('sessions'))
    
    result.add_info(f"Total services: {len(services)}")
    result.add_info(f"Services with images: {total_images}/{len(services)}")
    result.add_info(f"Services with price: {total_prices}/{len(services)}")
    result.add_info(f"Services with objectives: {total_objectives}/{len(services)}")
    result.add_info(f"Services with structure: {total_structure}/{len(services)}")
    result.add_info(f"Services with sessions: {total_sessions}/{len(services)}")
    
    return result


def validate_service_completeness(services):
    """Check that each service has all required fields for production use."""
    result = ValidationResult()
    
    required_fields = ['title', 'subtitle', 'description', 'category', 'price', 'duration']
    recommended_fields = ['objectives', 'included', 'benefits', 'structure', 'sessions', 'images']
    
    for svc in services:
        sid = svc.get('id', 'unknown')
        
        for field in required_fields:
            value = svc.get(field)
            if isinstance(value, dict):
                value = value.get('value')
            if not value:
                result.error(sid, field, f"Required field '{field}' is missing")
        
        for field in recommended_fields:
            value = svc.get(field)
            if isinstance(value, dict):
                value = value.get('value')
            if not value:
                result.warn(sid, field, f"Recommended field '{field}' is missing")
    
    return result
