# Correction : la poche devient la référence affichée de la conserverie

> Étape intermédiaire : les données et visuels ont depuis été rétablis. Voir `conserverie-donnees-visuels-2026-10-28.md` pour les résultats actuels et leurs limites.

La précédente livraison conservait par erreur « Sauce tomate — variante en verre » comme simulation principale, avec ses résultats déficitaires. Ajouter une comparaison de conditionnements n’avait pas corrigé ce défaut.

La consultation courante affiche désormais « Sauce tomate en poche stérilisable ». L’ancien profil, ses prévisions et ses visuels ne sont plus chargés par défaut. L’archive `data/archives/p2i-conserverie-verre-2026-10-28.json` conserve le profil et ses entrées sans modifier les pertes constatées. Les dossiers personnels/importés antérieurs restent calculables et transmissibles au Pro avec leurs paramètres ; ils sont signalés comme dossiers antérieurs.

Le nouveau dossier en poche conserve le budget provisoire d’approvisionnement (0,16496 USD par unité cible de 400 g), les sources et les besoins techniques. Il ne reprend ni CAPEX, ni volumes, ni chiffre d’affaires, ni marge historique du verre. Aucun résultat net ou ROI de poche n’est inventé ou obtenu en relevant un prix.

**Limite explicite : le BP financier de la poche n’est pas finalisé.** Il reste à consolider format et coût livré, remplissage/thermoscellage et périmètre de ligne, traitement thermique/refroidissement et coûts d’exploitation. Cela ne requiert pas de devis signé pour le Découverte : des références catalogue cohérentes et hypothèses P2I explicites restent recevables. Ce dossier est signalé incomplet, pas présenté comme rentable ou validé.

Périmètre actif : 96 UP, 100 configurations ; 20 simulations financières sur 18 UP. L’ancienne simulation verre est conservée séparément, hors décompte actif.

Fichiers : profil agro, archive verre, application des règles communes, rendu V108, référentiels JSON/JS et audit régénérés, deux pages HTML autonomes ; tests mis à jour et nouvelle suite de régression de la référence poche.

Contrôles : 29 suites Node ; navigateur avec consultation des 96 UP, ouverture directe et changement de sélection, transmission du dossier poche incomplet au Pro sans chiffres d’un autre conditionnement ; réimport de l’ancien verre et conservation de ses résultats ; parcours Découverte/Pro des autres UP. Design et 17 rubriques conservés. Main non modifiée.
