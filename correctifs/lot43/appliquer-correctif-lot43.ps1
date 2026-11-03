# P2I Lot 43 : correctif du chargement de l'UP mobilier sur la base Lot 40.
# Copier ce fichier dans P2I (Lot 40), puis executer avec PowerShell.
$ErrorActionPreference = 'Stop'
$target = Join-Path $PSScriptRoot 'business-plan-decouverte.html'
if (-not (Test-Path -LiteralPath $target)) { throw "Fichier business-plan-decouverte.html absent." }
$utf8 = New-Object System.Text.UTF8Encoding($false)
$expectedSourceHash = 'aa2e6fd86512d3c26ce806f89821c4a63aaba1467cab5c46424ee727a790cfbb'
$expectedResultHash = '03a214f04609dac8ebe2c95a0fc196b0288869a4999efcc02b6b9c26766e1a9f'
$sourceHash = (Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash.ToLowerInvariant()
if ($sourceHash -ne $expectedSourceHash) { throw "Le fichier n'est pas exactement le Lot 40 de reference. Aucune modification." }
$s = [System.IO.File]::ReadAllText($target, $utf8)
$signature = "window.P2I_RENDER_MOBILIER=render;"
if (-not $s.Contains($signature)) { throw "Version source non reconnue : Lot 40 attendu. Aucun changement." }
$start = $s.IndexOf("(function(){'use strict';" + "`n" + "const ID='recyclage_metaux';")
$endMarker = "window.P2I_RENDER_MOBILIER=render;" + "`n" + "})();"
$end = $s.IndexOf($endMarker, $start)
if ($start -lt 0 -or $end -lt 0) { throw "Moteur parallele non localise : aucun changement." }
$end += $endMarker.Length
$s = $s.Remove($start, $end-$start)
$oldBoot = "if(id==='recyclage_metaux' && window.P2I_RENDER_MOBILIER){window.P2I_RENDER_MOBILIER();}else{render();}"
if (-not $s.Contains($oldBoot)) { throw "Point de chargement introuvable : aucun changement." }
$s = $s.Replace($oldBoot, "render();")
$s = $s.Replace("revueConfig.motifs.join(' ; ')", "(Array.isArray(revueConfig.motifs)?revueConfig.motifs:[]).join(' ; ')")
$s = $s.Replace("referenceDossier.prix_equipement.fonctions.length", "(referenceDossier.prix_equipement?.fonctions?.length||dossier?.machines?.length||0)")
$s = $s.Replace("appro.importations.length", "(Array.isArray(appro.importations)?appro.importations:[]).length")
$s = $s.Replace("appro.importations.map(", "(Array.isArray(appro.importations)?appro.importations:[]).map(")
if ($s.Contains($signature) -or $s.Contains("revueConfig.motifs.join(' ; ')") -or $s.Contains("referenceDossier.prix_equipement.fonctions.length")) { throw "Verification echouee : aucun changement." }
$backup = "$target.sauvegarde-lot40"
if (-not (Test-Path -LiteralPath $backup)) { [System.IO.File]::Copy($target, $backup) }
[System.IO.File]::WriteAllText($target, $s, $utf8)
$resultHash = (Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash.ToLowerInvariant()
if ($resultHash -ne $expectedResultHash) {
  [System.IO.File]::Copy($backup, $target, $true)
  throw 'Le controle SHA256 du resultat a echoue. Fichier original restaure.'
}
Write-Host "Correctif applique. Sauvegarde : $backup"
Write-Host "Lot 43 TEST : validation complete dans Edge encore necessaire."
