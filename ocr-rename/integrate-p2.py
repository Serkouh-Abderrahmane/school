"""Phase 2: integrate images into remaining HTML pages (programs, workshops, about, booking, detail, contact, auth)."""
import re, sys
from pathlib import Path

ROOT = Path(r"C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues")
IMG = ROOT / "img"

def ok(name):
    return (IMG / name).exists()

def run():
    # === PROGRAMS ===
    p = ROOT / "pages" / "programs.html"
    html = p.read_text(encoding="utf-8")
    changed = 0

    card_map = {
        "\U0001f4d7": "banner-tcf-canada-intensif.png",   # 📗
        "\U0001f4d8": "banner-tcf-canada-partiel.png",     # 📘
        "\U0001f4d5": "banner-tcf-quebec-intensif.png",    # 📕
        "\U0001f4d9": "banner-tcf-quebec-partiel.png",     # 📙
        "\U0001f3a4": "banner-oral-b-intensif.png",        # 🎤
        "\U0001f464": "package-solo-a1.png",               # 👤
        "\U0001f465": "banner-evening-lingo.png",          # 👥
        "\U0001f3af": "banner-samedi-francais.png",        # 🎯
        "\U0001f525": "banner-oral-intensif.png",           # 🔥
        "\U0001f6c2": "banner-tcf-canada-comprehension.png",# 🛂
        "\U0001f4cb": "banner-linguotest.png",             # 📋
        "\U0001f399\ufe0f": "banner-linguotest-online.png", # 🎙️
    }

    for emoji, img_name in card_map.items():
        if not ok(img_name):
            continue
        old = f'<div class="program-card-image"><span class="icon-emoji">{emoji}</span><span class="image-overlay"></span></div>'
        src = f'../img/{img_name}'
        new = f'<div class="program-card-image"><img class="card-img" src="{src}" alt="" loading="lazy"><span class="icon-emoji">{emoji}</span><span class="image-overlay"></span></div>'
        if old in html:
            html = html.replace(old, new)
            changed += 1
            print(f"  programs: {img_name}")
        else:
            # maybe already has card-img
            if f'card-img" src="{src}"' in html:
                print(f"  programs: {img_name} already present")

    # Page header
    old_h = '<section class="page-header">\n    <div class="container">\n      <h1>Nos Programmes</h1>'
    new_h = '<section class="page-header">\n    <div class="page-header-bg"><img src="../img/hero-parcours-linguistiques.png" alt="" loading="lazy"></div>\n    <div class="container">\n      <h1>Nos Programmes</h1>'
    if old_h in html and "page-header-bg" not in html:
        html = html.replace(old_h, new_h)
        changed += 1
        print("  programs: page header bg added")
    p.write_text(html, encoding="utf-8")
    print(f"Programs: {changed} changes")

    # === WORKSHOPS ===
    p = ROOT / "pages" / "workshops.html"
    html = p.read_text(encoding="utf-8")
    changed = 0

    old_h = '<section class="page-header">\n    <div class="container">\n      <h1>Ateliers</h1>'
    new_h = '<section class="page-header">\n    <div class="page-header-bg"><img src="../img/ateliers-banner.png" alt="" loading="lazy"></div>\n    <div class="container">\n      <h1>Ateliers</h1>'
    if old_h in html and "page-header-bg" not in html:
        html = html.replace(old_h, new_h)
        changed += 1
        print("  workshops: page header bg added")

    sections = [
        ("Atelier de Conversation", "atelier-conversation.png"),
        ("Culture Canadienne & Qu\u00e9b\u00e9coise", "atelier-culture-canada.png"),
        ("Maintien & Renforcement", "atelier-maintien.png"),
        ("Pr\u00e9paration Orale TCF", "banner-oral-b-intensif.png"),
    ]
    for title, img_name in sections:
        if not ok(img_name):
            continue
        old_s = f'<h2>{title}</h2>'
        new_s = f'<h2>{title}</h2>\n      <img class="workshop-hero-img" src="../img/{img_name}" alt="{title}" loading="lazy">'
        if old_s in html:
            html = html.replace(old_s, new_s, 1)
            changed += 1
            print(f"  workshops: {img_name}")
    p.write_text(html, encoding="utf-8")
    print(f"Workshops: {changed} changes")

    # === ABOUT ===
    p = ROOT / "pages" / "about.html"
    html = p.read_text(encoding="utf-8")
    changed = 0
    old_m = '<section class="about-mission">\n    <div class="container container-sm">\n      <h2>Notre mission</h2>'
    new_m = '<section class="about-mission">\n    <div class="about-mission-bg"><img src="../img/hero-maitrisez-langues.png" alt="" loading="lazy"></div>\n    <div class="container container-sm">\n      <h2>Notre mission</h2>'
    if old_m in html:
        html = html.replace(old_m, new_m)
        changed += 1
        print("  about: mission bg added")
    p.write_text(html, encoding="utf-8")
    print(f"About: {changed} changes")

    # === BOOKING ===
    p = ROOT / "booking.html"
    html = p.read_text(encoding="utf-8")
    changed = 0
    pkg_map = [
        ("5", "225", "package-solo-5h.png"),
        ("10", "420", "package-solo-10h.png"),
        ("15", "600", "package-solo-15h.png"),
        ("20", "760", "package-solo-20h.png"),
    ]
    for hours, price, img_name in pkg_map:
        if not ok(img_name):
            continue
        old = f'<div class="package-card" data-package-select="{hours}" data-hours="{hours}" data-price="{price}"'
        new = old + f'>\n                <img class="package-card-img" src="img/{img_name}" alt="Forfait {hours}h" loading="lazy">'
        if old in html:
            html = html.replace(old, new)
            changed += 1
            print(f"  booking: {img_name}")
    p.write_text(html, encoding="utf-8")
    print(f"Booking: {changed} changes")

    # === PROGRAM DETAIL ===
    p = ROOT / "pages" / "program-detail.html"
    html = p.read_text(encoding="utf-8")
    changed = 0
    old_d = '<section class="program-detail-header">\n    <div class="container">\n      <a href="programs.html"'
    new_d = '<section class="program-detail-header">\n    <div class="page-header-bg"><img src="../img/banner-tcf-quebec-intensif.png" alt="" loading="lazy"></div>\n    <div class="container">\n      <a href="programs.html"'
    if old_d in html and 'page-header-bg' not in html:
        html = html.replace(old_d, new_d)
        changed += 1
        print("  detail: header bg added")
    p.write_text(html, encoding="utf-8")
    print(f"Detail: {changed} changes")

    # === CONTACT ===
    p = ROOT / "pages" / "contact.html"
    html = p.read_text(encoding="utf-8")
    changed = 0
    old_c = '<section class="page-header">\n    <div class="container">\n      <h1>Contactez-nous</h1>'
    new_c = '<section class="page-header">\n    <div class="page-header-bg"><img src="../img/cta-sign-up.png" alt="" loading="lazy"></div>\n    <div class="container">\n      <h1>Contactez-nous</h1>'
    if old_c in html and 'page-header-bg' not in html:
        html = html.replace(old_c, new_c)
        changed += 1
        print("  contact: page header bg added")
    p.write_text(html, encoding="utf-8")
    print(f"Contact: {changed} changes")

    # === AUTH PAGES ===
    for page in ["login.html", "register.html"]:
        p = ROOT / "pages" / page
        html = p.read_text(encoding="utf-8")
        changed = 0
        old_a = '<div class="auth-page">'
        new_a = '<div class="auth-page">\n  <div style="position:absolute;inset:0;z-index:0;opacity:0.04;pointer-events:none"><img src="../img/hero-maitrisez-langues.png" alt="" style="width:100%;height:100%;object-fit:cover"></div>'
        if old_a in html and 'opacity:0.04' not in html:
            html = html.replace(old_a, new_a)
            changed += 1
            print(f"  {page}: bg decoration added")
        p.write_text(html, encoding="utf-8")
        print(f"{page}: {changed} changes")

    # === VERIFY ===
    refs = set()
    for f in ROOT.rglob("*.html"):
        c = f.read_text(encoding="utf-8")
        for m in re.finditer(r'src="(?:\.\./)?img/([^"]+)"', c):
            refs.add(m.group(1))
    missing = [r for r in sorted(refs) if not ok(r)]
    if missing:
        print(f"\nMissing images ({len(missing)}):")
        for m in missing:
            print(f"  - {m}")
    else:
        print(f"\nAll {len(refs)} referenced images verified")

if __name__ == "__main__":
    run()
