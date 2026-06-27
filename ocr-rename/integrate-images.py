"""Integrate 38 renamed banner images into all cultulangues HTML pages + CSS."""
import re
from pathlib import Path

ROOT = Path(r"C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues")
CSS = ROOT / "css" / "styles.css"
IMG = ROOT / "img"

def img_exists(name):
    return (IMG / name).exists()

def add_css_utilities():
    path = CSS
    content = path.read_text(encoding="utf-8")

    # Add image utilities before the last closing block
    additions = """
/* ══════════════════════════════════════════════════════════════
   IMAGE UTILITIES (integrated)
   ══════════════════════════════════════════════════════════════ */
.img-bg{background-size:cover;background-position:center;background-repeat:no-repeat}
.img-bg-top{background-size:cover;background-position:top center;background-repeat:no-repeat}
.img-overlay-bg{background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.6));position:absolute;inset:0;z-index:1}

.hero-visual-bg{position:absolute;inset:0;z-index:0}
.hero-visual-bg img{width:100%;height:100%;object-fit:cover}

.page-header-bg{position:absolute;inset:0;z-index:0;opacity:0.12;filter:grayscale(0.3)}
.page-header-bg img{width:100%;height:100%;object-fit:cover}
.page-header .container{position:relative;z-index:1}

.about-mission-bg{position:absolute;inset:0;z-index:0;opacity:0.08}
.about-mission-bg img{width:100%;height:100%;object-fit:cover}
.about-mission .container{position:relative;z-index:1}

.cta-banner-bg{position:absolute;inset:0;z-index:0;opacity:0.08}
.cta-banner-bg img{width:100%;height:100%;object-fit:cover}
.cta-banner .container{position:relative;z-index:1}

.program-card-image{position:relative;overflow:hidden}
.program-card-image .card-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
.program-card-image .icon-emoji{position:relative;z-index:1}

.workshop-hero-img{width:100%;max-height:280px;object-fit:cover;border-radius:var(--radius-lg);margin-bottom:var(--space-lg);box-shadow:var(--shadow-md)}

.package-card-img{width:100%;height:100px;object-fit:cover;border-radius:var(--radius-md) var(--radius-md) 0 0;margin:-var(--space-lg) -var(--space-lg) var(--space-md);display:block}
"""

    # Insert before the final blank-ish line or at end
    if "IMAGE UTILITIES" not in content:
        content = content.rstrip() + "\n\n" + additions.strip() + "\n"
        path.write_text(content, encoding="utf-8")
        print("CSS: Added image utilities")
    else:
        print("CSS: Already has image utilities")


def edit_index():
    path = ROOT / "index.html"
    html = path.read_text(encoding="utf-8")

    # 1. Hero visual: replace emoji center with image
    # Current: <div class="hero-visual-center">🌿</div>
    hero_img = "hero-maitrisez-langues.png"
    if img_exists(hero_img):
        old = '<div class="hero-visual-center">🌿</div>'
        new = f'<div class="hero-visual-center"><img src="img/{hero_img}" alt="Cultulangues" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></div>'
        if old in html:
            html = html.replace(old, new)
            print("index.html: Hero visual image added")
        else:
            print("index.html: hero-visual-center pattern not found")

    # 2. Hero section: add background image behind everything
    # Insert after hero opening section tag
    old = '<section class="hero" id="hero">'
    new = f'<section class="hero" id="hero">\n    <div class="hero-visual-bg"><img src="img/{hero_img}" alt="" loading="lazy"></div>'
    if old in html:
        html = html.replace(old, new)
        print("index.html: Hero background added")
    else:
        print("index.html: Hero section not found")

    # 3. Program cards - replace gradient background with actual image
    # Card 1 (TCF Québec)
    old = '<div class="program-card-image">\n            <span class="icon-emoji">📘</span>\n            <div class="image-overlay"></div>\n          </div>'
    new = '<div class="program-card-image">\n            <img class="card-img" src="img/banner-tcf-quebec-intensif.png" alt="" loading="lazy">\n            <span class="icon-emoji">📘</span>\n            <div class="image-overlay"></div>\n          </div>'
    if old in html:
        html = html.replace(old, new)
        print("index.html: Program card 1 image added")
    else:
        # Try alternate formatting
        print("index.html: Card 1 pattern not matched exactly")

    # Card 2 (TCF Canada) - match the exact indentation
    old2 = '<div class="program-card-image">\n            <span class="icon-emoji">📗</span>\n            <div class="image-overlay"></div>\n          </div>'
    new2 = '<div class="program-card-image">\n            <img class="card-img" src="img/banner-tcf-canada-intensif.png" alt="" loading="lazy">\n            <span class="icon-emoji">📗</span>\n            <div class="image-overlay"></div>\n          </div>'
    if old2 in html:
        html = html.replace(old2, new2)
        print("index.html: Program card 2 image added")

    # Card 3 (Oral B/C)
    old3 = '<div class="program-card-image">\n            <span class="icon-emoji">📕</span>\n            <div class="image-overlay"></div>\n          </div>'
    new3 = '<div class="program-card-image">\n            <img class="card-img" src="img/banner-oral-b-intensif.png" alt="" loading="lazy">\n            <span class="icon-emoji">📕</span>\n            <div class="image-overlay"></div>\n          </div>'
    if old3 in html:
        html = html.replace(old3, new3)
        print("index.html: Program card 3 image added")

    # 4. CTA banner - add subtle background
    old = '<div class="cta-banner">\n        <h2>Prêt à commencer votre parcours ?</h2>'
    new = '<div class="cta-banner">\n        <div class="cta-banner-bg"><img src="img/cta-inscrivez-vous.png" alt="" loading="lazy"></div>\n        <h2>Prêt à commencer votre parcours ?</h2>'
    if old in html:
        html = html.replace(old, new)
        print("index.html: CTA banner background added")

    path.write_text(html, encoding="utf-8")


def edit_programs():
    path = ROOT / "pages" / "programs.html"
    html = path.read_text(encoding="utf-8")

    # Helper to add image to a program-card
    card_map = {
        "📗": "banner-tcf-canada-intensif.png",
        "📘": "banner-tcf-canada-partiel.png",
        "📕": "banner-tcf-quebec-intensif.png",
        "📙": "banner-tcf-quebec-partiel.png",
        "🎤": "banner-oral-b-intensif.png",
        "👤": "package-solo-a1.png",
        "👥": "banner-evening-lingo.png",
        "🎯": "banner-samedi-francais.png",
        "🔥": "banner-oral-intensif.png",
        "🛂": "banner-tcf-canada-comprehension.png",
        "📋": "banner-linguotest.png",
        "🎙️": "banner-linguotest-online.png",
    }

    for emoji, img_name in card_map.items():
        if not img_exists(img_name):
            print(f"  SKIP: {img_name} not found")
            continue
        old = f'<div class="program-card-image"><span class="icon-emoji">{emoji}</span><span class="image-overlay"></span></div>'
        new = f'<div class="program-card-image"><img class="card-img" src="../img/{img_name}" alt="" loading="lazy"><span class="icon-emoji">{emoji}</span><span class="image-overlay"></span></div>'
        if old in html:
            html = html.replace(old, new)
            print(f"programs.html: Card {img_name}")
        else:
            print(f"  MISS: Card emoji {ord(list(emoji)[0]):04x} pattern not found")

    # 2. Page header background
    old = '<section class="page-header">\n    <div class="container">\n      <h1>Nos Programmes</h1>'
    new = '<section class="page-header">\n    <div class="page-header-bg"><img src="../img/hero-parcours-linguistiques.png" alt="" loading="lazy"></div>\n    <div class="container">\n      <h1>Nos Programmes</h1>'
    if old in html:
        html = html.replace(old, new)
        print("programs.html: Page header background added")

    path.write_text(html, encoding="utf-8")


def edit_workshops():
    path = ROOT / "pages" / "workshops.html"
    html = path.read_text(encoding="utf-8")

    # 1. Page header
    old = '<section class="page-header">\n    <div class="container">\n      <h1>Ateliers</h1>'
    new = '<section class="page-header">\n    <div class="page-header-bg"><img src="../img/ateliers-banner.png" alt="" loading="lazy"></div>\n    <div class="container">\n      <h1>Ateliers</h1>'
    if old in html:
        html = html.replace(old, new)
        print("workshops.html: Page header background added")

    # 2. Insert atelier images in each workshop section
    # Atelier de Conversation  
    sections = [
        ("Atelier de Conversation", "💬", "atelier-conversation.png"),
        ("Culture Canadienne", "🍁", "atelier-culture-canada.png"),
        ("Maintien & Renforcement", "🔄", "atelier-maintien.png"),
        ("Préparation Orale", "🎤", "banner-oral-b-intensif.png"),
    ]

    for title, emoji, img_name in sections:
        if not img_exists(img_name):
            print(f"  SKIP workshops section {title}: {img_name} not found")
            continue
        # Find the section header and add an image before the p tags
        # Insert after the <h2> line
        old = f'<h2>{title}</h2>'
        new = f'<h2>{title}</h2>\n      <img class="workshop-hero-img" src="../img/{img_name}" alt="{title}" loading="lazy">'
        if old in html:
            html = html.replace(old, new, 1)  # only first occurrence
            print(f"workshops.html: Added image for {title}")
        else:
            print(f"  MISS: Could not find {title} h2")

    path.write_text(html, encoding="utf-8")


def edit_about():
    path = ROOT / "pages" / "about.html"
    html = path.read_text(encoding="utf-8")

    # Mission section background
    old = '<section class="about-mission">\n    <div class="container container-sm">\n      <h2>Notre mission</h2>'
    new = '<section class="about-mission">\n    <div class="about-mission-bg"><img src="../img/hero-maitrisez-langues.png" alt="" loading="lazy"></div>\n    <div class="container container-sm">\n      <h2>Notre mission</h2>'
    if old in html:
        html = html.replace(old, new)
        print("about.html: Mission background added")

    path.write_text(html, encoding="utf-8")


def edit_booking():
    path = ROOT / "booking.html"
    html = path.read_text(encoding="utf-8")

    # Package cards
    pkg_map = [
        ("5", "225", "package-solo-5h.png"),
        ("10", "420", "package-solo-10h.png"),
        ("15", "600", "package-solo-15h.png"),
        ("20", "760", "package-solo-20h.png"),
    ]

    for hours, price, img_name in pkg_map:
        if not img_exists(img_name):
            print(f"  SKIP booking {img_name}: not found")
            continue
        # Insert the image after each package-card opening div
        old = f'<div class="package-card" data-package-select="{hours}" data-hours="{hours}" data-price="{price}"'
        # The package-card div spans multiple lines; find the closing > then insert
        new = old + f'>\n                <img class="package-card-img" src="img/{img_name}" alt="Forfait {hours}h" loading="lazy">'
        if old in html:
            html = html.replace(old, new)
            print(f"booking.html: Package card {hours}h image added")
        else:
            print(f"  MISS: booking card {hours}h not found")

    path.write_text(html, encoding="utf-8")


def edit_program_detail():
    path = ROOT / "pages" / "program-detail.html"
    html = path.read_text(encoding="utf-8")

    old = '<section class="program-detail-header">\n    <div class="container">\n      <a href="programs.html"'
    new = '<section class="program-detail-header">\n    <div class="page-header-bg"><img src="../img/banner-tcf-quebec-intensif.png" alt="" loading="lazy"></div>\n    <div class="container">\n      <a href="programs.html"'
    if old in html:
        html = html.replace(old, new)
        print("program-detail.html: Header background added")

    path.write_text(html, encoding="utf-8")


def edit_contact():
    path = ROOT / "pages" / "contact.html"
    html = path.read_text(encoding="utf-8")

    old = '<section class="page-header">\n    <div class="container">\n      <h1>Contactez-nous</h1>'
    new = '<section class="page-header">\n    <div class="page-header-bg"><img src="../img/cta-sign-up.png" alt="" loading="lazy"></div>\n    <div class="container">\n      <h1>Contactez-nous</h1>'
    if old in html:
        html = html.replace(old, new)
        print("contact.html: Page header background added")

    path.write_text(html, encoding="utf-8")


def edit_auth():
    for page in ["login.html", "register.html"]:
        path = ROOT / "pages" / page
        html = path.read_text(encoding="utf-8")

        # Add a subtle background image to the auth-page
        old_before = '<div class="auth-card">'
        if old_before in html:
            # Just a decorative approach - place behind auth card
            # The auth-page already has CSS gradients; we add a subtle img
            old = '<div class="auth-page">'
            new = '<div class="auth-page">\n  <div style="position:absolute;inset:0;z-index:0;opacity:0.04;pointer-events:none"><img src="../img/hero-maitrisez-langues.png" alt="" style="width:100%;height:100%;object-fit:cover"></div>'
            html = html.replace(old, new)
            print(f"{page}: Background decoration added")

        path.write_text(html, encoding="utf-8")


def verify_images():
    """Verify all referenced images exist in img/"""
    refs = set()
    for file in ROOT.rglob("*.html"):
        content = file.read_text(encoding="utf-8")
        # Find all src="img/..." or src="../img/..."
        for m in re.finditer(r'src="(?:\.\./)?img/([^"]+)"', content):
            refs.add(m.group(1))
    
    missing = [r for r in sorted(refs) if not img_exists(r)]
    if missing:
        print(f"\n⚠️  MISSING IMAGES ({len(missing)}):")
        for m in missing:
            print(f"  - {m}")
    else:
        print(f"\n✅ All {len(refs)} referenced images exist in img/")


if __name__ == "__main__":
    add_css_utilities()
    edit_index()
    edit_programs()
    edit_workshops()
    edit_about()
    edit_booking()
    edit_program_detail()
    edit_contact()
    edit_auth()
    verify_images()
    print("\n✅ All integrations complete")
