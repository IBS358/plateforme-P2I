# P2I — État de la refonte BP Découverte (branche isolée)

## Ce qui est en place
- Une feuille CSS inspirée de la présentation Biscuiterie (menu latéral, 17 bandeaux, cartes, tableaux, bandeau photo et médaillon).
- Un rendu universel de 17 rubriques branché sur `business-plan-decouverte.html`.
- L'ancienne page est conservée dans le DOM pour éviter de supprimer immédiatement ses points d'ancrage historiques.
- Absence de chiffres inventés pour les résultats financiers non calculables.
- Référence spécifique du pilote **Biscuiterie / Crackers** : ligne intégrée de 500 kg/h, équipement **450 000 USD**. Ce montant n'est **pas** l'investissement total du projet.
- Le financement 40/60 n'est pas calculé tant que le coût global n'est pas documenté.

## Contrôles réalisés
- Syntaxe JavaScript du fichier de rendu vérifiée.
- Présence des trois fichiers dans la branche de refonte.
- Aucun commit sur `main`.

## Points bloquants avant mise en production
1. **Fidélité au modèle Biscuiterie** : les captures et le texte du prototype ne sont pas encore transformés en composants exacts pour chaque rubrique. Le modèle actuel est une ossature, non le BP de référence complet.
2. **Moteur financier** : les rubriques 8 à 13 affichent encore des états d'attente et non les tableaux calculés par V32. Ne pas confondre structure de 17 rubriques et intégration des calculs.
3. **Variantes** : le sélecteur historique de Biscuiterie est dans l'ancien DOM masqué. Il faut rendre les variantes actives dans la nouvelle interface, puis relier les configurations propres à chaque UP.
4. **Supabase** : les chargements asynchrones peuvent arriver après la création du nouveau rendu. Vérifier le chemin `simulation_id` et la restauration de l'UP.
5. **Illustrations** : définir des chemins d'images existants, leurs licences, et des images de repli pertinentes. Aucun visuel générique ne doit être présenté comme une photographie contractuelle d'une machine.
6. **Référentiels** : les `capex_min` historiques ne représentent pas les lignes intégrées P2I. Créer une source unique de configurations validées.
7. **QA navigateur** : vérifier au moins Biscuiterie / Crackers, Biscuiterie / Biscuits mous, Nettoyage industriel et une UP de service ou de production différente; PDF et mobile compris.
8. **Ancien code** : supprimer l'ancien rendu uniquement après raccordement complet des moteurs et tests.

## Règles de sortie
- Trésorerie : **12 mois**.
- Autres projections financières : **3 années**.
- Financement de référence : **40 % apport / 60 % dette** sur investissement total validé, réserve initiale distincte.
- Ne jamais substituer un montant manquant par zéro.
- Ne pas fusionner cette branche avant une revue et des essais fonctionnels.


## Lot consolidé — préparation du PDF et vérifications du 26 octobre 2026

- Le bouton indique désormais **« Imprimer / Enregistrer en PDF »** : il ouvre le dialogue d'impression du navigateur et ne prétend plus télécharger directement un PDF.
- Le titre de l'onglet est personnalisé avec le nom de l'unité industrielle.
- Avant l'impression, le script attend les polices disponibles et les images encore en chargement ; une erreur de chargement d'image ne bloque pas l'impression.
- Les contrôles statiques couvrent désormais ces garanties et les chemins photographiques autorisés/interdits.
- Relecture directe des expressions de **89 assertions autonomes** de la suite statique : aucune assertion évaluée n'a échoué. Deux assertions nécessitant des variables locales du script de test n'ont pas été exécutées par cette relecture partielle.
- **Limites :** cela ne constitue ni une exécution complète de Node/GitHub Actions ni une recette visuelle du PDF sur navigateur. Les valeurs financières manquantes et les images non référencées ne doivent pas être présentées comme finalisées.

### Recette globale à effectuer avant mise en production

1. Ouvrir Biscuiterie / Crackers et contrôler les 17 rubriques, le prix des seuls équipements (450 000 USD), le financement 40/60 appliqué uniquement au CAPEX complet validé.
2. Tester Biscuits mous, Biscuits durs et les trois activités Nettoyage sans réutilisation de résultats ou photographies d'une autre configuration.
3. Confirmer que le BFR couvre 36 mois, la trésorerie 12 mois et les autres états financiers trois exercices ; vérifier les contrôles du moteur sur les montants réellement renseignés.
4. Ouvrir « Imprimer / Enregistrer en PDF », choisir l'enregistrement PDF, vérifier images, titres, pagination, contrastes et sommaire.
5. Vérifier la transition vers le BP Pro avec une simulation authentifiée et la conservation des identifiants de contexte.
6. Exécuter les deux scripts Node de régression sur un checkout de la branche et consulter les résultats GitHub Actions.

**Règle de livraison :** aucune fusion vers `main` sans recette réussie et accord de l'utilisateur.
