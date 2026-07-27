"""
HTML Page Generator
====================
Generates detail pages from JSON data using templates.
"""

import os
from pathlib import Path


def generate_detail_page(service, seo, navigation, site_root=''):
    """
    Generate a complete HTML detail page for a service.
    Returns HTML string.
    """
    title = seo.get('pageTitle', service.get('title', ''))
    meta_desc = seo.get('metaDescription', '')
    og_title = seo.get('openGraph', {}).get('title', '')
    og_desc = seo.get('openGraph', {}).get('description', '')
    og_image = seo.get('openGraph', {}).get('image', '')
    canonical = seo.get('canonical', '')
    lang = service.get('language', 'fr')

    slug = service.get('slug', '')
    svc_title = service.get('title', '')
    subtitle = service.get('subtitle', '')
    description = service.get('description', '')
    price_raw = service.get('price', '')
    if isinstance(price_raw, dict):
        price_amount = price_raw.get('amount', '')
        price_currency = price_raw.get('currency', '$')
    elif isinstance(price_raw, str):
        import re
        m = re.search(r'(\d+)', price_raw)
        price_amount = m.group(1) if m else ''
        price_currency = '$' if '$' in price_raw else '$'
    else:
        price_amount = ''
        price_currency = '$'
    duration = service.get('duration', '')
    schedule = service.get('schedule', '')
    frequency = service.get('frequency', '')
    volume = service.get('volume', '')
    max_students = service.get('maxStudents', '')
    level = service.get('level', '')
    booking_url = service.get('bookingUrl', '#')
    page_url = service.get('pageUrl', '')

    images = service.get('images', [])
    hero_image = images[0].get('desktop', '') if images else ''

    # Breadcrumbs
    breadcrumbs = navigation.get('breadcrumbs', {}).get(slug, [])
    breadcrumb_html = ' / '.join(
        f'<a href="{b["url"]}">{b["label"]}</a>' if b != breadcrumbs[-1] else f'<span>{b["label"]}</span>'
        for b in breadcrumbs
    )

    # Rich content sections
    content_html = render_rich_sections(service.get('richSections', []))

    # Objectives
    objectives_html = ''
    if service.get('objectives'):
        items = '\n'.join(f'<li>{obj}</li>' for obj in service['objectives'])
        objectives_html = f'''
        <div class="section-block">
            <h2>Objectifs <span class="text-gradient">pedagogiques</span></h2>
            <ul class="objectives-list">{items}</ul>
        </div>'''

    # Included
    included_html = ''
    if service.get('included'):
        items = '\n'.join(f'<li>{inc}</li>' for inc in service['included'])
        included_html = f'''
        <div class="section-block">
            <h2>Ce que <span class="text-gradient">vous obtenez</span></h2>
            <ul class="included-list">{items}</ul>
        </div>'''

    # Benefits
    benefits_html = ''
    if service.get('benefits'):
        cards = '\n'.join(
            f'<div class="benefit-card"><p>{b}</p></div>'
            for b in service['benefits']
        )
        benefits_html = f'''
        <div class="section-block">
            <h2>Pourquoi ca <span class="text-gradient">fonctionne</span></h2>
            <div class="benefits-grid">{cards}</div>
        </div>'''

    # Structure key-value pairs
    structure_html = ''
    if service.get('structure'):
        rows = []
        for item in service['structure']:
            if isinstance(item, dict):
                label = item.get('label', '')
                value = item.get('value', '')
            else:
                label = ''
                value = str(item)
            rows.append(f'<div class="structure-item"><span class="si-label">{label}</span><span class="si-value">{value}</span></div>')
        rows_html = '\n'.join(rows)
        structure_html = f'''
        <div class="section-block">
            <h2>Structure du <span class="text-gradient">programme</span></h2>
            <div class="structure-grid">{rows_html}</div>
        </div>'''

    # Key facts for header
    key_facts = []
    if price_amount:
        key_facts.append(f'<div class="key-fact-card"><div class="kf-value">{price_amount} {price_currency}</div><p class="kf-label">Tarif</p></div>')
    if volume:
        key_facts.append(f'<div class="key-fact-card"><div class="kf-value">{volume}</div><p class="kf-label">Volume</p></div>')
    if duration:
        key_facts.append(f'<div class="key-fact-card"><div class="kf-value">{duration}</div><p class="kf-label">Duree</p></div>')
    if max_students:
        key_facts.append(f'<div class="key-fact-card"><div class="kf-value">{max_students} max.</div><p class="kf-label">Participants</p></div>')
    if schedule:
        key_facts.append(f'<div class="key-fact-card"><div class="kf-value">{schedule}</div><p class="kf-label">Horaire</p></div>')

    key_facts_html = '\n'.join(key_facts)

    return f'''<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="{meta_desc}">
  <meta property="og:title" content="{og_title}">
  <meta property="og:description" content="{og_desc}">
  <meta property="og:image" content="{og_image}">
  <meta property="og:type" content="website">
  {"<link rel='canonical' href='" + canonical + "'>" if canonical else ""}
  <link rel="stylesheet" href="../css/styles.css">
  <link rel="stylesheet" href="../css/premium.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F33F;</text></svg>">
</head>
<body>
  <header class="public-header" id="header">
    <div class="container">
      <a href="../index.html" class="logo">
        <img src="../img/image-Photoroom.png" alt="Cultulangues" class="logo-img">
      </a>
      <nav class="nav" data-nav-type="main"></nav>
      <div class="hamburger"><span></span><span></span><span></span></div>
    </div>
  </header>

  <section class="page-header">
    <div class="page-header-bg"><img src="../{hero_image}" alt="" loading="lazy"></div>
    <div class="container">
      <div class="breadcrumb">{breadcrumb_html}</div>
      <h1>{svc_title.split(' - ')[0]} <span class="text-gradient">{svc_title.split(' - ')[-1] if ' - ' in svc_title else ''}</span></h1>
      <p>{subtitle}</p>
      <div class="key-facts-grid">{key_facts_html}</div>
      <div class="hero-ctas">
        <a href="../{booking_url}" class="btn btn-primary btn-lg">Reserver maintenant &rarr;</a>
        <a href="contact.html" class="btn btn-outline btn-lg">Nous contacter</a>
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="container">
      <div class="detail-layout">
        <div class="detail-main">
          {objectives_html}
          {included_html}
          {benefits_html}
          {structure_html}
          {content_html}
        </div>
        <div class="detail-sidebar">
          <div class="booking-card">
            <div class="booking-card-header">
              <h3>{svc_title}</h3>
              <div class="bch-price">{price_amount} {price_currency} <small>Tout compris</small></div>
            </div>
            <div class="booking-card-body">
              <div class="booking-cta">
                <a href="../{booking_url}" class="btn btn-primary">Reserver maintenant &rarr;</a>
                <a href="contact.html" class="btn btn-outline">Nous contacter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="public-footer">
    <div class="footer-inner">
      <div class="footer-bottom">
        <span>&copy; 2026 Cultulangues. Tous droits reserves.</span>
      </div>
    </div>
  </footer>

  <script src="../js/content-loader.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>'''


def render_rich_sections(sections):
    """Render rich content sections to HTML."""
    html_parts = []
    for section in sections:
        stype = section.get('type', 'paragraph')

        if stype == 'paragraph':
            html_parts.append(f'<p>{section["content"]}</p>')

        elif stype == 'bullet-list':
            items = '\n'.join(f'<li>{item}</li>' for item in section.get('items', []))
            html_parts.append(f'<ul class="content-list">{items}</ul>')

        elif stype == 'warning':
            html_parts.append(
                f'<div class="content-warning"><strong>Attention:</strong> {section["content"]}</div>'
            )

        elif stype == 'quote':
            html_parts.append(
                f'<blockquote class="content-quote">{section["content"]}</blockquote>'
            )

        elif stype == 'image':
            src = section.get('src', '')
            alt = section.get('alt', '')
            html_parts.append(
                f'<figure class="content-image"><img src="{src}" alt="{alt}" loading="lazy"></figure>'
            )

    return '\n'.join(html_parts)


def write_detail_pages(services, seo_map, navigation, output_dir):
    """Generate and write all detail pages."""
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    written = []
    for svc in services:
        slug = svc.get('slug', '')
        if not slug:
            continue

        seo = seo_map.get(slug, {})
        html = generate_detail_page(svc, seo, navigation)
        filepath = output_dir / f"{slug}.html"

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)

        written.append(str(filepath))

    return written
