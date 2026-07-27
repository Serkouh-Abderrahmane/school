"""
PDF Structural Analyzer
========================
Analyzes the PDF structure: pages, text blocks with positioning,
fonts, images, tables, and layout patterns.
Reconstructs document structure before content extraction.
"""

import re
from pathlib import Path

try:
    import pdfplumber
    HAS_PDFPLUMBER = True
except ImportError:
    HAS_PDFPLUMBER = False


def analyze_pdf(pdf_path):
    """
    Main entry point: analyze the full PDF structure.
    Returns a DocumentStructure object.
    """
    if not HAS_PDFPLUMBER:
        raise ImportError("pdfplumber is required for PDF analysis")
    
    pdf_path = Path(pdf_path)
    doc = DocumentStructure(pdf_path)
    
    with pdfplumber.open(pdf_path) as pdf:
        for page_num, page in enumerate(pdf.pages):
            page_data = analyze_page(page, page_num + 1)
            doc.add_page(page_data)
    
    doc.finalize()
    return doc


def analyze_page(page, page_num):
    """Analyze a single PDF page and extract structural elements."""
    page_data = PageData(page_num, page.width, page.height)
    
    # Extract text blocks with positioning
    words = page.extract_words(keep_blank_chars=True, x_tolerance=2, y_tolerance=2)
    text_blocks = group_words_into_blocks(words)
    
    for block in text_blocks:
        text_block = TextBlock(
            text=block['text'],
            x=block['x0'],
            y=block['top'],
            width=block['x1'] - block['x0'],
            height=block['bottom'] - block['top'],
            page=page_num,
            font_size=block.get('font_size', 0),
            font_name=block.get('font_name', ''),
            is_bold=block.get('is_bold', False),
        )
        page_data.add_text_block(text_block)
    
    # Extract images
    for img_info in page.images:
        try:
            img = ImageBlock(
                x=img_info['x0'],
                y=img_info['top'],
                width=img_info['x1'] - img_info['x0'],
                height=img_info['bottom'] - img_info['top'],
                page=page_num,
            )
            if img.width > 30 and img.height > 30:
                page_data.add_image(img)
        except Exception:
            pass
    
    # Extract tables
    for table in page.extract_tables():
        if table and len(table) > 1:
            page_data.tables.append(table)
    
    # Extract lines (for detecting separators)
    for line in page.lines:
        try:
            line_block = LineBlock(
                x1=line.get('x0', 0),
                y1=line.get('top', 0),
                x2=line.get('x1', 0),
                y2=line.get('bottom', 0),
                page=page_num,
            )
            if line_block.is_horizontal and line_block.length > 50:
                page_data.add_separator(line_block)
        except Exception:
            pass
    
    return page_data


def group_words_into_blocks(words):
    """Group individual words into logical text blocks based on positioning."""
    if not words:
        return []
    
    blocks = []
    current_block = None
    
    for word in words:
        text = word.get('text', '').strip()
        if not text:
            continue
        
        top = word.get('top', 0)
        x0 = word.get('x0', 0)
        bottom = word.get('bottom', 0)
        x1 = word.get('x1', 0)
        
        # Check if this word belongs to the current block
        if current_block and abs(top - current_block['top']) < 8:
            # Same line - add to current block
            if x0 - current_block['x1'] < 30:  # Close enough horizontally
                current_block['words'].append(word)
                current_block['text'] += ' ' + text
                current_block['x1'] = max(current_block['x1'], x1)
                current_block['bottom'] = max(current_block['bottom'], bottom)
                continue
        
        # Start a new block
        if current_block:
            blocks.append(finalize_block(current_block))
        
        current_block = {
            'text': text,
            'x0': x0,
            'top': top,
            'x1': x1,
            'bottom': bottom,
            'words': [word],
        }
    
    if current_block:
        blocks.append(finalize_block(current_block))
    
    return blocks


def finalize_block(block):
    """Finalize a text block with font information."""
    words = block.get('words', [])
    
    # Extract font information from first word
    font_size = 0
    font_name = ''
    is_bold = False
    
    if words:
        first_word = words[0]
        font_size = first_word.get('size', 0) or 0
        font_name = first_word.get('fontname', '') or ''
        is_bold = 'Bold' in font_name or 'bold' in font_name or 'Black' in font_name
    
    return {
        'text': block['text'].strip(),
        'x0': block['x0'],
        'top': block['top'],
        'x1': block['x1'],
        'bottom': block['bottom'],
        'font_size': font_size,
        'font_name': font_name,
        'is_bold': is_bold,
    }


# ─── DATA CLASSES ─────────────────────────────────────────────────────────────

class DocumentStructure:
    """Represents the full analyzed structure of a PDF document."""
    
    def __init__(self, pdf_path):
        self.pdf_path = pdf_path
        self.pages = []
        self.total_pages = 0
        self.all_text_blocks = []
        self.all_images = []
        self.all_tables = []
        self.all_separators = []
        self.full_text = ''
    
    def add_page(self, page_data):
        self.pages.append(page_data)
        self.total_pages += 1
        self.all_text_blocks.extend(page_data.text_blocks)
        self.all_images.extend(page_data.images)
        self.all_tables.extend(page_data.tables)
        self.all_separators.extend(page_data.separators)
    
    def finalize(self):
        """Build derived data after all pages are added."""
        self.full_text = '\n\n'.join(
            '\n'.join(b.text for b in page.text_blocks)
            for page in self.pages
        )
        
        # Sort all blocks by position (page, y, x)
        self.all_text_blocks.sort(key=lambda b: (b.page, b.y, b.x))
        
        # Identify large font blocks (potential titles/headers)
        self.title_blocks = [b for b in self.all_text_blocks if b.font_size >= 14 and b.is_bold]
        self.header_blocks = [b for b in self.all_text_blocks if b.font_size >= 12 and b.is_bold]
        
        # Identify separator lines
        self.page_breaks = self._detect_page_breaks()
    
    def _detect_page_breaks(self):
        """Detect logical page breaks based on spacing."""
        breaks = []
        for i in range(1, len(self.all_text_blocks)):
            prev = self.all_text_blocks[i - 1]
            curr = self.all_text_blocks[i]
            
            # If there's a large vertical gap, it's a section break
            gap = curr.y - prev.y
            if gap > 100 and curr.page == prev.page:
                breaks.append({
                    'after_block': i - 1,
                    'gap': gap,
                    'page': curr.page,
                })
            elif curr.page > prev.page:
                breaks.append({
                    'after_block': i - 1,
                    'gap': float('inf'),
                    'page': curr.page,
                })
        
        return breaks
    
    def get_blocks_on_page(self, page_num):
        """Get all text blocks on a specific page."""
        return [b for b in self.all_text_blocks if b.page == page_num]
    
    def get_text_between(self, start_idx, end_idx):
        """Get concatenated text between two block indices."""
        blocks = self.all_text_blocks[start_idx:end_idx]
        return '\n'.join(b.text for b in blocks)


class PageData:
    """Represents the structural data of a single PDF page."""
    
    def __init__(self, page_num, width, height):
        self.page_num = page_num
        self.width = width
        self.height = height
        self.text_blocks = []
        self.images = []
        self.tables = []
        self.separators = []
    
    def add_text_block(self, block):
        self.text_blocks.append(block)
    
    def add_image(self, img):
        self.images.append(img)
    
    def add_separator(self, line):
        self.separators.append(line)
    
    @property
    def text(self):
        return '\n'.join(b.text for b in self.text_blocks)


class TextBlock:
    """Represents a positioned text block with font information."""
    
    def __init__(self, text, x, y, width, height, page, font_size=0, font_name='', is_bold=False):
        self.text = text.strip()
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.page = page
        self.font_size = font_size
        self.font_name = font_name
        self.is_bold = is_bold
    
    def __repr__(self):
        return f"TextBlock(page={self.page}, y={self.y:.0f}, bold={self.is_bold}, text='{self.text[:50]}...')"


class ImageBlock:
    """Represents an image on a page."""
    
    def __init__(self, x, y, width, height, page):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.page = page
        self.type = self._classify()
    
    def _classify(self):
        """Classify image type based on size and position."""
        area = self.width * self.height
        aspect = self.width / max(self.height, 1)
        
        if area > 100000 and aspect > 1.5:
            return 'banner'
        elif area > 50000:
            return 'hero'
        elif aspect < 0.8:
            return 'sidebar'
        else:
            return 'content'
    
    def __repr__(self):
        return f"ImageBlock(page={self.page}, type={self.type}, {self.width:.0f}x{self.height:.0f})"


class LineBlock:
    """Represents a line on a page (potential separator)."""
    
    def __init__(self, x1, y1, x2, y2, page):
        self.x1 = x1
        self.y1 = y1
        self.x2 = x2
        self.y2 = y2
        self.page = page
    
    @property
    def is_horizontal(self):
        return abs(self.y2 - self.y1) < 3
    
    @property
    def length(self):
        return ((self.x2 - self.x1) ** 2 + (self.y2 - self.y1) ** 2) ** 0.5
