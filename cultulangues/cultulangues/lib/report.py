"""
Content Validation Report Generator
=====================================
Generates an HTML report for manual verification.
"""

import datetime
from pathlib import Path
from .confidence import confidence_label, needs_review


def generate_report(services, validation_result, output_path):
    """Generate a comprehensive HTML validation report."""
    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cultulangues Content Extraction Report</title>
<style>
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f172a; color: #e2e8f0; padding: 2rem; line-height: 1.6; }}
.header {{ text-align: center; margin-bottom: 3rem; }}
.header h1 {{ font-size: 2rem; color: #f8fafc; margin-bottom: 0.5rem; }}
.header .subtitle {{ color: #94a3b8; font-size: 0.9rem; }}
.stats-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }}
.stat-card {{ background: #1e293b; border-radius: 12px; padding: 1.5rem; text-align: center; border: 1px solid #334155; }}
.stat-card .number {{ font-size: 2rem; font-weight: 700; }}
.stat-card .label {{ color: #94a3b8; font-size: 0.85rem; margin-top: 0.25rem; }}
.stat-card.success .number {{ color: #22c55e; }}
.stat-card.warning .number {{ color: #f59e0b; }}
.stat-card.error .number {{ color: #ef4444; }}
.stat-card.info .number {{ color: #3b82f6; }}
.section {{ margin-bottom: 2rem; }}
.section h2 {{ font-size: 1.3rem; color: #f1f5f9; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid #334155; }}
.service-card {{ background: #1e293b; border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; border: 1px solid #334155; }}
.service-card.has-errors {{ border-left: 4px solid #ef4444; }}
.service-card.has-warnings {{ border-left: 4px solid #f59e0b; }}
.service-card.clean {{ border-left: 4px solid #22c55e; }}
.service-header {{ display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }}
.service-title {{ font-size: 1.1rem; font-weight: 600; color: #f8fafc; }}
.service-id {{ font-size: 0.8rem; color: #64748b; font-family: monospace; }}
.badge {{ display: inline-block; padding: 0.15rem 0.5rem; border-radius: 999px; font-size: 0.75rem; font-weight: 500; }}
.badge-success {{ background: #052e16; color: #22c55e; }}
.badge-warning {{ background: #422006; color: #f59e0b; }}
.badge-error {{ background: #450a0a; color: #ef4444; }}
.badge-info {{ background: #172554; color: #3b82f6; }}
.fields-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 0.75rem; margin-top: 0.75rem; }}
.field-item {{ padding: 0.5rem 0.75rem; background: #0f172a; border-radius: 8px; font-size: 0.85rem; }}
.field-label {{ color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; }}
.field-value {{ color: #e2e8f0; margin-top: 0.25rem; word-break: break-word; }}
.field-value.empty {{ color: #64748b; font-style: italic; }}
.confidence-bar {{ height: 4px; background: #334155; border-radius: 2px; margin-top: 0.25rem; overflow: hidden; }}
.confidence-fill {{ height: 100%; border-radius: 2px; transition: width 0.3s; }}
.confidence-high {{ background: #22c55e; }}
.confidence-medium {{ background: #f59e0b; }}
.confidence-low {{ background: #ef4444; }}
.error-list {{ list-style: none; padding: 0; }}
.error-list li {{ padding: 0.25rem 0; font-size: 0.85rem; }}
.error-list li::before {{ content: "⚠ "; color: #f59e0b; }}
.error-list li.error::before {{ content: "✖ "; color: #ef4444; }}
.error-list li.success::before {{ content: "✔ "; color: #22c55e; }}
.summary-list {{ list-style: none; padding: 0; }}
.summary-list li {{ padding: 0.5rem 0; border-bottom: 1px solid #1e293b; font-size: 0.9rem; }}
.filter-bar {{ display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }}
.filter-btn {{ padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid #334155; background: #1e293b; color: #e2e8f0; cursor: pointer; font-size: 0.85rem; transition: all 0.2s; }}
.filter-btn:hover {{ background: #334155; }}
.filter-btn.active {{ background: #3b82f6; border-color: #3b82f6; color: white; }}
</style>
</head>
<body>

<div class="header">
    <h1>Cultulangues Content Extraction Report</h1>
    <div class="subtitle">Generated: {now} | Pipeline v2.0</div>
</div>

<div class="stats-grid">
    <div class="stat-card info">
        <div class="number">{len(services)}</div>
        <div class="label">Total Services</div>
    </div>
    <div class="stat-card {'success' if validation_result.ok else 'error'}">
        <div class="number">{validation_result.error_count}</div>
        <div class="label">Errors (Build Blockers)</div>
    </div>
    <div class="stat-card {'warning' if validation_result.warning_count > 0 else 'success'}">
        <div class="number">{validation_result.warning_count}</div>
        <div class="label">Warnings</div>
    </div>
    <div class="stat-card success">
        <div class="number">{sum(1 for s in services if s.get('images'))}</div>
        <div class="label">Services with Images</div>
    </div>
</div>

<div class="section">
    <h2>Validation Summary</h2>
    <div class="service-card">
        <ul class="summary-list">
"""
    
    for info in validation_result.info:
        html += f'            <li>{info}</li>\n'
    
    html += """        </ul>
    </div>
</div>

<div class="section">
    <h2>Service Details</h2>
    <div class="filter-bar">
        <button class="filter-btn active" onclick="filterServices('all')">All</button>
        <button class="filter-btn" onclick="filterServices('errors')">Has Errors</button>
        <button class="filter-btn" onclick="filterServices('warnings')">Has Warnings</button>
        <button class="filter-btn" onclick="filterServices('clean')">Clean</button>
    </div>
"""
    
    for svc in services:
        sid = svc.get('id', 'unknown')
        title = svc.get('title', 'Untitled')
        svc_result = validation_result.service_results.get(sid, {})
        errors = svc_result.get('errors', [])
        warnings = svc_result.get('warnings', [])
        
        card_class = 'clean'
        if errors:
            card_class = 'has-errors'
        elif warnings:
            card_class = 'has-warnings'
        
        html += f"""
    <div class="service-card {card_class}" data-errors="{len(errors)}" data-warnings="{len(warnings)}">
        <div class="service-header">
            <div>
                <span class="service-title">{title}</span>
                <span class="service-id">{sid}</span>
            </div>
            <div>
"""
        if errors:
            html += f'                <span class="badge badge-error">{len(errors)} errors</span>\n'
        if warnings:
            html += f'                <span class="badge badge-warning">{len(warnings)} warnings</span>\n'
        if not errors and not warnings:
            html += '                <span class="badge badge-success">Clean</span>\n'
        
        html += """            </div>
        </div>
        <div class="fields-grid">
"""
        
        # Show key fields
        fields_to_show = [
            ('subtitle', svc.get('subtitle', {})),
            ('description', svc.get('description', {})),
            ('price', svc.get('price', {})),
            ('duration', svc.get('duration', {})),
            ('schedule', svc.get('schedule', {})),
            ('group_size', svc.get('group_size', {})),
            ('level', svc.get('level', {})),
            ('objectives', svc.get('objectives', {})),
            ('included', svc.get('included', {})),
            ('benefits', svc.get('benefits', {})),
            ('structure', svc.get('structure', {})),
            ('sessions', svc.get('sessions', {})),
        ]
        
        for field_name, field_data in fields_to_show:
            if isinstance(field_data, dict):
                value = field_data.get('value', '')
                confidence = field_data.get('confidence', 0)
            else:
                value = field_data
                confidence = 0
            
            if isinstance(value, list):
                display_value = f"{len(value)} items"
            elif isinstance(value, dict):
                display_value = str(value.get('amount', '')) + ' ' + str(value.get('currency', ''))
            elif value:
                display_value = str(value)[:100]
            else:
                display_value = ''
            
            conf_class = 'high' if confidence >= 0.8 else ('medium' if confidence >= 0.6 else 'low')
            conf_pct = int(confidence * 100)
            
            html += f"""            <div class="field-item">
                <div class="field-label">{field_name.replace('_', ' ').title()}</div>
                <div class="field-value {'empty' if not display_value else ''}">{display_value or '—'}</div>
"""
            if confidence > 0:
                html += f"""                <div class="confidence-bar"><div class="confidence-fill confidence-{conf_class}" style="width: {conf_pct}%"></div></div>
"""
            html += """            </div>
"""
        
        html += """        </div>
    </div>
"""
    
    html += """</div>

<div class="section">
    <h2>Extraction Errors</h2>
    <div class="service-card">
"""
    if validation_result.errors:
        html += '        <ul class="error-list">\n'
        for err in validation_result.errors:
            html += f'            <li class="error">[{err["service"]}] {err["field"]}: {err["message"]}</li>\n'
        html += '        </ul>\n'
    else:
        html += '        <p style="color: #22c55e;">No errors found. Build can proceed.</p>\n'
    
    html += """    </div>
</div>

<div class="section">
    <h2>Extraction Warnings</h2>
    <div class="service-card">
"""
    if validation_result.warnings:
        html += '        <ul class="error-list">\n'
        for warn in validation_result.warnings:
            html += f'            <li>[{warn["service"]}] {warn["field"]}: {warn["message"]}</li>\n'
        html += '        </ul>\n'
    else:
        html += '        <p style="color: #22c55e;">No warnings found.</p>\n'
    
    html += """    </div>
</div>

<script>
function filterServices(type) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.service-card[data-errors]').forEach(card => {
        const errors = parseInt(card.dataset.errors);
        const warnings = parseInt(card.dataset.warnings);
        if (type === 'all') card.style.display = '';
        else if (type === 'errors') card.style.display = errors > 0 ? '' : 'none';
        else if (type === 'warnings') card.style.display = warnings > 0 ? '' : 'none';
        else if (type === 'clean') card.style.display = errors === 0 && warnings === 0 ? '' : 'none';
    });
}
</script>

</body>
</html>"""
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    return str(output_path)
