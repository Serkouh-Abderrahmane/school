#!/usr/bin/env python3
"""
undo_rename.py — Restore original filenames from rename_backup.json

Usage:
    python undo_rename.py

Reads rename_backup.json (created by rename_images.py) and renames every
file back to its original name.  Files that no longer exist are skipped
with a warning.
"""

import json
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
BACKUP_FILE = SCRIPT_DIR / "rename_backup.json"


def main():
    if not BACKUP_FILE.is_file():
        print(f"Backup file not found: {BACKUP_FILE}")
        print("Nothing to undo.")
        sys.exit(1)

    with open(BACKUP_FILE, "r", encoding="utf-8") as f:
        rename_map = json.load(f)

    if not rename_map:
        print("Backup is empty — nothing to undo.")
        sys.exit(0)

    total = len(rename_map)
    restored = 0
    skipped = 0

    print(f"Found {total} entries in backup.\n")

    # Reverse the map: original → new, but we need to iterate in reverse
    # order so that we restore new → original.  We iterate original → new
    # and try to rename new → original.
    for idx, (orig_str, new_str) in enumerate(rename_map.items(), 1):
        orig_path = Path(orig_str)
        new_path = Path(new_str)

        print(f"[{idx}/{total}]")
        print(f"  Current:  {new_path.name}")

        if not new_path.exists():
            print(f"  Skipped — file not found: {new_path.name}")
            print("-" * 28)
            skipped += 1
            continue

        # Check if original path is already occupied by a *different* file
        if orig_path.exists():
            # Check if it's the same file (inode match or content match)
            try:
                same = orig_path.samefile(new_path)
            except FileNotFoundError:
                same = False

            if not same:
                print(f"  Skipped — original path already occupied: {orig_path.name}")
                print("-" * 28)
                skipped += 1
                continue

        try:
            new_path.rename(orig_path)
            print(f"  Restored: {orig_path.name}")
            print("\u2714 Done")
            restored += 1
        except Exception as e:
            print(f"  Error: {e}")
            skipped += 1

        print("-" * 28)

    print(f"\nFinished.")
    print(f"{restored} files restored.")
    if skipped:
        print(f"{skipped} skipped.")

    # Remove backup file only if everything was restored successfully
    if skipped == 0 and restored == total:
        try:
            BACKUP_FILE.unlink()
            print(f"Backup file removed ({BACKUP_FILE.name}).")
        except Exception:
            pass


if __name__ == "__main__":
    main()
