#!/usr/bin/env python3
"""P2I : audit et insertion du logo officiel dans les en-têtes HTML.
Exécuter à la racine du dépôt : python3 tools/integrer_logo.py . [--apply]
Ne modifie pas les moteurs industriels ou financiers.
"""
from pathlib import Path
import argparse
import hashlib
import json
import re
import shutil

parser = argparse.ArgumentParser()
parser.add_argument("repo", type=Path)
parser.add_argument("--apply", action="store_true")
args = parser.parse_args()
root = args.repo.resolve()
source = Path(__file__).resolve().parent.parent / "assets" / "p2i-logo-officiel.png"
if not source.is_file():
    raise SystemExit("Logo officiel absent : assets/p2i-logo-officiel.png")
if not (root / "index.html").is_file():
    raise SystemExit("Dépôt P2I non reconnu (index.html absent)")

excluded = {".git", "node_modules", "archives", "archive", "backup", "backups", "historique"}
pattern = re.compile(r'(<(?:div|a)\b[^>]*class=["\'][^"\']*\blogo\b[^>]*>)', re.I)
targets, changed = [], []
for path in sorted(root.rglob("*.html")):
    relative = path.relative_to(root)
    if any(part.lower() in excluded for part in relative.parts):
        continue
    original = path.read_text(encoding="utf-8", errors="replace")
    if 'data-p2i-official-logo="1"' in original or not pattern.search(original):
        continue
    targets.append(str(relative))
    if not args.apply:
        continue
    depth = len(relative.parts) - 1
    img_path = "../" * depth + "assets/p2i-logo-officiel.png"
    img = (f'<img data-p2i-official-logo="1" src="{img_path}" '
           'alt="Logo officiel P2I" '
           'style="width:46px;height:41px;object-fit:contain;'
           'vertical-align:middle;margin-right:8px">')
    updated = pattern.sub(lambda match: match.group(1) + img, original, count=1)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        changed.append(str(relative))

if args.apply:
    destination = root / "assets" / "p2i-logo-officiel.png"
    destination.parent.mkdir(parents=True, exist_ok=True)
    if source.resolve() != destination.resolve():
        shutil.copy2(source, destination)

report = {
    "mode": "application" if args.apply else "audit",
    "logo_sha256": hashlib.sha256(source.read_bytes()).hexdigest(),
    "pages_cibles": targets,
    "pages_modifiees": changed,
    "limites": "Ajout dans les conteneurs .logo HTML seulement. Contrôler les anciens symboles, les pages JS, BP et exports PDF séparément."
}
(root / "P2I_AUDIT_LOGO_OFFICIEL.json").write_text(
    json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8"
)
print(json.dumps({"cibles": len(targets), "modifiees": len(changed)}, ensure_ascii=False))
