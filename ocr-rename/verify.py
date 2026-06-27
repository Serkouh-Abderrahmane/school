"""Verify all image integrations across HTML files."""
import re
from pathlib import Path

ROOT = Path(r"C:\Users\laptop 368\Desktop\my computer\code\websites\education\cultulangues")

total = 0
refs = set()
missing = []

for f in sorted(ROOT.rglob("*.html")):
    c = f.read_text(encoding="utf-8")
    r = re.findall(r'src="(?:\.\./)?img/([^"]+\.png)"', c)
    for x in r:
        refs.add(x)
    if r:
        print(f"  {f.relative_to(ROOT)}: {len(r)} image(s)")
    total += len(r)

# Check booking.html for broken markup
booking = (ROOT / "booking.html").read_text(encoding="utf-8")
bad = re.findall(r'loading=lazy"> data-label=', booking)
print(f"BOOKING: {'CLEAN' if not bad else 'BUGS: ' + str(len(bad))}")

# Check index.html for duplicate hero backgrounds
idx = (ROOT / "index.html").read_text(encoding="utf-8")
n = idx.count("hero-visual-bg")
print(f"INDEX: {'CLEAN' if n == 1 else 'DUPES: ' + str(n)}")

# Verify all referenced images exist
for r in sorted(refs):
    p = ROOT / "img" / r
    if not p.exists():
        missing.append(r)

print(f"\nTotal image references: {total}")
print(f"Unique images used: {len(refs)}")
if missing:
    print(f"MISSING files: {missing}")
else:
    print("All referenced images exist in img/")
