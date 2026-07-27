"""
Confidence Scoring
==================
Provides confidence-scored field extraction utilities.
Every extracted value gets a confidence score between 0.0 and 1.0.
"""


def score_field(value, method, context=None):
    """
    Create a confidence-scored field.
    
    Args:
        value: The extracted value (string, list, dict, etc.)
        method: How it was extracted (e.g., 'regex', 'pattern', 'fallback', 'manual')
        context: Optional dict with additional scoring signals
    
    Returns:
        dict with 'value', 'confidence', 'method'
    """
    if context is None:
        context = {}
    
    confidence = _calculate_confidence(value, method, context)
    
    return {
        'value': value,
        'confidence': round(confidence, 3),
        'method': method,
    }


def _calculate_confidence(value, method, context):
    """Calculate confidence score based on value, method, and context."""
    base = 0.0
    
    # Method-based scoring
    method_scores = {
        'structured_table': 0.95,
        'labeled_field': 0.90,
        'regex_strict': 0.85,
        'pattern_match': 0.80,
        'context_inference': 0.70,
        'neighboring_field': 0.65,
        'fallback_default': 0.50,
        'manual_override': 0.99,
        'pdf_position': 0.75,
        'keyword_detection': 0.72,
    }
    base = method_scores.get(method, 0.60)
    
    # Value quality adjustments
    if value is None or (isinstance(value, str) and not value.strip()):
        return 0.0
    
    if isinstance(value, str):
        # Penalize very short values (might be noise)
        if len(value.strip()) < 2:
            base -= 0.15
        # Penalize values with many special characters (might be extraction artifacts)
        special_ratio = sum(1 for c in value if not c.isalnum() and not c.isspace() and c not in '-.,$%()éèêàùôîâûçëïüœæ') / max(len(value), 1)
        if special_ratio > 0.3:
            base -= 0.10
        # Boost if it looks like a real price
        if '$' in value and any(c.isdigit() for c in value):
            base += 0.05
        # Boost if it looks like a real duration
        if any(w in value.lower() for w in ['semaine', 'week', 'heure', 'hour']):
            base += 0.05
    
    if isinstance(value, list):
        if len(value) == 0:
            return 0.0
        # Boost for lists with multiple items (more likely real content)
        if len(value) >= 3:
            base += 0.05
        # Check if items look like real content
        real_items = sum(1 for item in value if isinstance(item, str) and len(item.strip()) > 5)
        if real_items / max(len(value), 1) > 0.8:
            base += 0.05
    
    # Context-based adjustments
    if context.get('multiple_sources'):
        base += 0.05
    if context.get('matches_expected'):
        base += 0.05
    if context.get('consistent_with_neighbors'):
        base += 0.03
    
    return max(0.0, min(1.0, base))


def score_section(section_type, found, items_count=0, has_header=False):
    """Score a section extraction."""
    if not found:
        return score_field(None, 'not_found')
    
    method = 'structured_table' if section_type == 'sessions' else 'pattern_match'
    context = {
        'multiple_sources': items_count > 2,
        'has_header': has_header,
    }
    
    return score_field(
        value={'type': section_type, 'items_count': items_count},
        method=method,
        context=context,
    )


def merge_confidence_scores(scores):
    """
    Merge multiple confidence scores into a single overall score.
    Uses weighted average with more weight on higher-confidence scores.
    """
    if not scores:
        return 0.0
    
    valid_scores = [s for s in scores if s > 0]
    if not valid_scores:
        return 0.0
    
    # Weighted average: higher scores get more weight
    sorted_scores = sorted(valid_scores, reverse=True)
    weights = [1.0 / (i + 1) for i in range(len(sorted_scores))]
    total_weight = sum(weights)
    
    return round(sum(s * w for s, w in zip(sorted_scores, weights)) / total_weight, 3)


def confidence_label(score):
    """Get human-readable label for confidence score."""
    if score >= 0.90:
        return 'high'
    elif score >= 0.70:
        return 'medium'
    elif score >= 0.50:
        return 'low'
    else:
        return 'very_low'


def needs_review(score):
    """Check if a field needs manual review."""
    return score < 0.70
