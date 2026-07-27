import fitz
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues\cultulangues\img\contenu plateforme-juin 2026.pdf'

doc = fitz.open(pdf_path)

# Check for ALL image types including form xobjects
print("=== COMPREHENSIVE PDF IMAGE ANALYSIS ===\n")

for page_num in range(len(doc)):
    page = doc[page_num]
    
    # Method 1: get_images (standard)
    standard_images = page.get_images(full=True)
    
    # Method 2: Check for Form XObjects / patterns
    xref_used = set()
    
    # Method 3: Look at all xrefs on the page
    page_xrefs = []
    try:
        # Get the page's content stream
        contents = page.read_contents()
        # Count image-related operations
        img_ops = contents.count(b'/Image')
        pattern_ops = contents.count(b'/Pattern')
        form_ops = contents.count(b'/Form')
    except:
        img_ops = pattern_ops = form_ops = 0
    
    if standard_images or img_ops > 0 or form_ops > 0:
        print("PAGE {} - standard imgs: {}, /Image ops: {}, /Form ops: {}".format(
            page_num + 1, len(standard_images), img_ops, form_ops))
        
        for i, img in enumerate(standard_images):
            xref = img[0]
            if xref in xref_used:
                continue
            xref_used.add(xref)
            base = doc.extract_image(xref)
            w = base['width']
            h = base['height']
            size_kb = len(base['image']) // 1024
            ext = base['ext']
            bpc = base.get('bitspercomponent', '?')
            colorspace = base.get('colorspace', '?')
            
            rects = page.get_image_rects(xref)
            rect = rects[0] if rects else None
            rect_str = ''
            if rect:
                rect_str = 'pos=({:.0f},{:.0f},{:.0f},{:.0f}) area={:.0f}'.format(
                    rect.x0, rect.y0, rect.x1, rect.y1, 
                    (rect.x1-rect.x0)*(rect.y1-rect.y0))
            
            print("  Img {}: xref={}, {}x{}, {}KB, ext={}, bpc={}, cs={}, {}".format(
                i+1, xref, w, h, size_kb, ext, bpc, colorspace, rect_str))

# Also check total xref count for embedded images
print("\n=== TOTAL XREFS ===")
print("Total xrefs in PDF: {}".format(doc.xref_length()))

# Check if there are images we're missing
print("\n=== CHECKING FOR HIDDEN/EMBEDDED IMAGES ===")
img_xrefs_found = set()
for page_num in range(len(doc)):
    page = doc[page_num]
    for img in page.get_images(full=True):
        img_xrefs_found.add(img[0])

print("Total unique image xrefs found: {}".format(len(img_xrefs_found)))

# Check if any images are inline in content streams
print("\n=== INLINE IMAGE CHECK ===")
for page_num in range(min(10, len(doc))):  # Check first 10 pages
    page = doc[page_num]
    contents = page.read_contents()
    inline_count = contents.count(b'BI')  # Inline image begin
    if inline_count > 0:
        print("Page {}: {} inline images detected".format(page_num + 1, inline_count))

doc.close()
