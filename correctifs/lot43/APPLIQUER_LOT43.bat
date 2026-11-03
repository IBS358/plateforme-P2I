@echo off
setlocal
cd /d "%~dp0"
if not exist "business-plan-decouverte.html" (
  echo ERREUR : placez ce fichier dans le dossier P2I du Lot 40.
  pause
  exit /b 1
)
if not exist "appliquer-correctif-lot43.ps1" (
  echo ERREUR : le fichier appliquer-correctif-lot43.ps1 est manquant.
  pause
  exit /b 1
)
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0appliquer-correctif-lot43.ps1"
if errorlevel 1 (
  echo Le correctif n'a pas ete applique. Le fichier original est conserve.
) else (
  echo Correctif applique au fichier local. Ne pas publier sans validation.
)
pause
