# Diagnostic complémentaire — identifiants et recette

Le JSON disponible est horodaté `2026-11-21T22:21:06.353Z` et indique 77 conformes / 19 non conformes. Il est antérieur au bilan navigateur plus récent rapporté (83 / 13) et contient donc cinq anciens identifiants encore testés.

La table `legacy_redirects` de `P2I_Edge/runtime/catalogue-up-actif.js` les dirige vers les UP actives suivantes. Ces alias ne doivent pas être réactivés :

| Identifiant historique testé | UP active cible |
|---|---|
| `ordinateurs` | `tablettes` |
| `electromenager` | `cuisines_pro_chambres_froides` |
| `climatiseurs` | `remorques_agricoles` |
| `motos` | `tricycles_utilitaires` |
| `meubles` | `stockage_manutention` |

Les 13 associations d'UP traitées dans l'archive (plastiques et électrique) sont alignées sur les intitulés de `MATRICE_96_UP.csv`. Le relevé de recette disponible ne contient pas l'URL correspondant au 404 de la conserverie et ne permet pas de réconcilier les 13 constats de bloc 1 avec les sélecteurs présents dans la source exacte. La conformité navigateur post-correction reste donc non démontrée.
