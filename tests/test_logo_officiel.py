"""Tests de non-régression du script d'intégration du logo P2I.

Exécution : python3 -m unittest discover -s tests -p 'test_logo_officiel.py'
Le script source doit être présent dans tools/ et le logo dans assets/.
"""
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest

BASE = Path(__file__).resolve().parents[1]
SCRIPT = BASE / "tools" / "integrer_logo.py"
LOGO = BASE / "assets" / "p2i-logo-officiel.png"

@unittest.skipUnless(LOGO.exists(), "PNG officiel non encore présent sur la branche")
class IntegrationLogoTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        (self.root / "index.html").write_text(
            '<html><div class="logo">P2I</div></html>', encoding="utf-8"
        )
        (self.root / "archives").mkdir()
        (self.root / "archives" / "historique.html").write_text(
            '<div class="logo">Ancien</div>', encoding="utf-8"
        )
    def tearDown(self):
        self.tmp.cleanup()
    def run_script(self, *args):
        return subprocess.run(
            [sys.executable, str(SCRIPT), str(self.root), *args],
            capture_output=True, text=True, check=True
        )
    def test_audit_sans_modification(self):
        before = (self.root / "index.html").read_bytes()
        self.run_script()
        self.assertEqual(before, (self.root / "index.html").read_bytes())
        report = json.loads((self.root / "P2I_AUDIT_LOGO_OFFICIEL.json").read_text())
        self.assertEqual(report["pages_cibles"], ["index.html"])
    def test_application_et_idempotence(self):
        self.run_script("--apply")
        first = (self.root / "index.html").read_text()
        self.assertIn('data-p2i-official-logo="1"', first)
        self.assertEqual((self.root / "assets" / "p2i-logo-officiel.png").read_bytes(), LOGO.read_bytes())
        self.run_script("--apply")
        self.assertEqual(first, (self.root / "index.html").read_text())
    def test_archives_preservees(self):
        before = (self.root / "archives" / "historique.html").read_bytes()
        self.run_script("--apply")
        self.assertEqual(before, (self.root / "archives" / "historique.html").read_bytes())

if __name__ == "__main__":
    unittest.main()
