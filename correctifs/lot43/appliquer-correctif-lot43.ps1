# P2I Lot 43 — correctif du moteur commun (à appliquer au Lot 40)
# Ce correctif modifie uniquement le fichier HTML local, après sauvegarde.
$ErrorActionPreference = 'Stop'
$target = Join-Path $PSScriptRoot 'business-plan-decouverte.html'
if (-not (Test-Path -LiteralPath $target)) {
  throw "Placez ce script dans le dossier P2I du Lot 40, à côté de business-plan-decouverte.html."
}
$utf8 = New-Object System.Text.UTF8Encoding($false)
$source = [System.IO.File]::ReadAllText($target, $utf8)
if (-not $source.Contains("window.P2I_RENDER_MOBILIER=render;")) {
  throw "Le fichier n'est pas le Lot 40 attendu ou le moteur parallèle est déjà absent. Aucune modification."
}
$backup = "$target.sauvegarde-lot40"
if (-not (Test-Path -LiteralPath $backup)) {
  [System.IO.File]::Copy($target, $backup)
}
$text = $source
$text = $text.Replace("appro.importations.length", "(Array.isArray(appro.importations)?appro.importations:[]).length")
$text = $text.Replace("appro.importations.map(", "(Array.isArray(appro.importations)?appro.importations:[]).map(")
$text = $text.Replace("revueConfig.motifs.join(' ; ')", "(Array.isArray(revueConfig.motifs)?revueConfig.motifs:[]).join(' ; ')")
$text = $text.Replace("referenceDossier.prix_equipement.fonctions.length", "(referenceDossier.prix_equipement?.fonctions?.length||dossier?.machines?.length||0)")
$text = $text.Replace("if(id==='recyclage_metaux' && window.P2I_RENDER_MOBILIER){window.P2I_RENDER_MOBILIER();}else{render();}", "render();")
$pattern = "(?s)\(function\(\)\{'use strict';\r?\nconst ID='recyclage_metaux';.*?window\.P2I_RENDER_MOBILIER=render;\r?\n\}\)\(\);"
$text = [System.Text.RegularExpressions.Regex]::Replace($text, $pattern, "")
if ($text.Contains("window.P2I_RENDER_MOBILIER=render;") -or $text.Contains("revueConfig.motifs.join(' ; ')") -or $text.Contains("referenceDossier.prix_equipement.fonctions.length")) {
  throw "La validation du correctif a échoué. Le fichier original n'a pas été modifié."
}
[System.IO.File]::WriteAllText($target, $text, $utf8)
Write-Host "Correctif Lot 43 appliqué au fichier local. Sauvegarde : $backup"
Write-Host "ATTENTION : le fonctionnement complet dans Edge et Netlify reste à valider."
