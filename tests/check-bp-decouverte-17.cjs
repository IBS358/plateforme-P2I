/**
 * P2I — Contrôles statiques de non-régression de la refonte BP Découverte.
 * Exécution : node tests/check-bp-decouverte-17.cjs
 * Ces contrôles ne remplacent PAS un essai navigateur avec Supabase.
 */
const fs=require("node:fs");
const vm=require("node:vm");
const assert=require("node:assert/strict");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const html=read("business-plan-decouverte.html");
const layout=read("js/p2i-bp-decouverte-17-layout.js");
const bridge=read("js/p2i-bp-decouverte-17-engine-bridge.js");
const css=read("css/p2i-bp-decouverte-17.css");
const financial=read("js/p2i-financial-display.js");
const fiche=read("fiche-production.html");
const pro=read("business-plan-pro.html");
for(const [file,source] of [["layout",layout],["bridge",bridge],["financial",financial]])
  assert.doesNotThrow(()=>new vm.Script(source,{filename:file}),file+" doit être syntaxiquement valide");
const sectionList=layout.match(/const TITRES=(\[[^\n]+\]);/);
assert.ok(sectionList,"Le tableau des rubriques doit exister");
const titles=JSON.parse(sectionList[1]);
assert.equal(titles.length,17,"Exactement 17 rubriques");
assert.equal(new Set(titles).size,17,"Aucune rubrique dupliquée");
assert.deepEqual(titles.slice(7,13),["Production et ventes","Compte de résultat","BFR mensuel","Bilan simplifié","Indicateurs","Trésorerie"]);
assert.ok(html.includes('src="js/p2i-bp-decouverte-17-layout.js"'));
assert.ok(html.includes('src="js/p2i-bp-decouverte-17-engine-bridge.js"'));
assert.ok(html.includes('href="css/p2i-bp-decouverte-17.css"'));
assert.ok(html.includes("p2iBiscuiterieSelect"),"Le sélecteur historique doit être conservé");
assert.ok(html.includes("p2iCompteResultat"),"La sortie historique du moteur doit être conservée");
assert.ok(layout.includes("450000"),"La référence équipement Crackers doit rester 450 000 USD");
assert.ok(layout.includes("capex=null"),"Ne pas convertir le coût de la ligne en investissement total");
assert.ok(layout.includes("40 %")&&layout.includes("60 %"));
assert.ok(layout.includes("12 mois exclusivement"),"Trésorerie : 12 mois seulement");
assert.ok(layout.includes("Bilan simplifié prévisionnel sur trois exercices"),"Bilan sur 3 exercices");
assert.ok(layout.includes("function annualMatrix(title,rows)"),"Matrice annuelle commune");
assert.ok(layout.includes("<th>Année 1</th><th>Année 2</th><th>Année 3</th>"),"Les trois exercices sont explicites");
assert.ok(layout.includes('annualMatrix("Compte de résultat prévisionnel — trois exercices"'),"Compte de résultat sur 3 ans");
assert.ok(layout.includes('annualMatrix("Bilan simplifié — trois exercices"'),"Bilan sur 3 ans");
assert.ok(layout.includes('annualMatrix("Indicateurs économiques — trois exercices"'),"Indicateurs sur 3 ans");
assert.ok(layout.includes("Écart de contrôle actif − passif"),"Contrôle d’équilibre du bilan");

assert.ok(layout.includes("compte de résultat sur trois années"),"Compte de résultat sur 3 exercices");
assert.ok(layout.includes("Array.from({length:months}"),"Les tableaux mensuels doivent respecter leur horizon spécifique");
assert.ok(layout.includes("30 jours")&&layout.includes("15 jours")&&layout.includes("40 % comptant")&&layout.includes("60 % à 30 jours"),"Les hypothèses BFR Crackers doivent rester explicites");
assert.ok(layout.includes('monthlyMatrix("BFR prévisionnel — 36 périodes mensuelles (3 ans)"')&&layout.includes('"BFR net"],36)'),"BFR mensuel sur 36 mois");
assert.ok(layout.includes('monthlyMatrix("Plan de trésorerie — année 1 uniquement"')&&layout.includes('"Solde final"],12)'),"Trésorerie seule limitée à 12 mois");

assert.ok(layout.includes('id==="nettoyage"'),"Les variantes nettoyage doivent rester accessibles");
assert.ok(layout.includes("decontamination_chimique")&&layout.includes("decontamination_biologique"));
assert.ok(bridge.includes("P2I_COMPTE_FINANCIER"),"Raccordement au moteur financier historique");
assert.ok(bridge.includes("P2I_CRACKERS_RESULTAT"),"Raccordement au moteur économique Crackers");
assert.ok(bridge.includes('selected!=="crackers"'),"Les autres variantes ne doivent pas recevoir les chiffres Crackers");
assert.ok(bridge.includes('$("p2i-r9-engine")?.remove()'),"Le compte de résultat périmé doit être retiré");
assert.ok(bridge.includes('Math.abs(f.chiffre_affaires_total_usd-e.chiffre_affaires_usd)'),"Contrôler le rapprochement du chiffre d’affaires");
assert.ok(bridge.includes('Math.abs(f.cout_ventes_total_usd-e.cout_produits_vendus_usd)'),"Contrôler le rapprochement du coût des ventes");
assert.ok(bridge.includes('document.addEventListener("input",update)'),"Réagir aux modifications des sélecteurs");
assert.ok(bridge.includes('legacyChoice.value!=="crackers"'),"Refuser les résultats Crackers si le moteur historique utilise une autre variante");
assert.ok(bridge.includes("function invalidate()"),"Réinitialisation explicite des résultats invalidés");
assert.ok(bridge.includes("setPlaceholder(r8,true)")&&bridge.includes("setPlaceholder(r9,true)"),"Restaurer les tableaux d’attente lors de l’invalidation");
assert.ok(bridge.includes("setPlaceholder(r8,false)")&&bridge.includes("setPlaceholder(r9,false)"),"Masquer les tableaux d’attente lorsque les résultats sont valides");


assert.ok(bridge.includes("number(f.resultat_net_usd)")==false,"Ne pas exiger un résultat net artificiellement complet");
assert.ok(layout.includes("if(!id||(!up.nom&&!up.id&&!up.description))return;"),"Ne pas afficher de faux BP avant hydratation de l’UP");
assert.ok(layout.includes("Array.isArray(machineSource.machines)"),"Privilégier le catalogue machines de l’UP");
assert.ok(layout.includes('card("Chiffre d’affaires prévisionnel","À calculer par le moteur économique")'),"Ne pas présenter les estimations UP comme prévisions validées");
assert.ok(layout.includes('card("ROI financier","Non calculable sans flux de trésorerie validés")'),"Ne pas inventer le ROI");
assert.ok(layout.includes('id="p2i-bp17-print"'),"Un seul bouton PDF dans l’en-tête");
assert.ok(!layout.includes('id="p2i-bp17-download"'),"Pas de bouton PDF en doublon dans la rubrique 17");
assert.ok(layout.includes('href="dashboard.html"'),"Retour au dashboard visible");
assert.ok(layout.includes('bp-variant-choice'),"Cartes de variantes Biscuiterie");
assert.ok(layout.includes('bp-summary-links'),"Sommaire des 17 rubriques avant les sections");
assert.ok(layout.includes('main.insertBefore(summary,main.querySelector("#p2i-r1"))'),"Sommaire inséré avant la première rubrique");
assert.ok(layout.includes('main.insertBefore(selector,main.querySelector(".bp-hero"))'),"Variantes Biscuiterie avant la bannière");
assert.ok(layout.includes('main.insertBefore(panel,main.querySelector(".bp-hero"))'),"Variantes Nettoyage avant la bannière");
assert.ok(layout.includes('main.insertBefore(statusNote,main.querySelector("#p2i-r1"))'),"Avertissement après le sommaire");
assert.ok(layout.includes('aria-label="Illustration de l’activité"'),"Médaillon du produit ou service");
assert.ok(layout.includes('renderAttempts<20'),"Attente bornée des données UP");
assert.ok(layout.includes('setTimeout(tryRender,250)'),"Relance après chargement asynchrone");
assert.ok(layout.includes('window.addEventListener("pageshow",tryRender)'),"Reprise après navigation navigateur");
assert.ok(layout.includes('new CustomEvent("p2i:bp17-rendered"'),"Notifier l’affichage des 17 rubriques");
assert.ok(bridge.includes('window.addEventListener("p2i:bp17-rendered",update)'),"Le pont financier attend les rubriques réellement affichées");


assert.ok(layout.includes('📈'),"Pictogramme du logo P2I de référence");
assert.ok(layout.includes('v[0]==="crackers"'),"450 000 USD ne doit concerner que la ligne Crackers");
assert.ok(layout.includes('Capacité et investissement à documenter pour cette variante'),"Ne pas attribuer une capacité fictive aux autres variantes");
assert.ok(layout.includes('pictureUrl(image.hero)'),"Vérifier les URL de photographies avant affichage");
assert.ok(css.includes('.bp-variant-photo'),"Photographies des cartes de variantes mises en forme");


assert.ok(layout.includes('id="p2i-bp17-go-pro"'),"Bouton Aller au Pro dans la rubrique 17");
assert.ok(layout.includes('destinationParams.set("unit_id",id)'),"Conserver l’identifiant de l’UP");
assert.ok(layout.includes('proParams.set("redirect","bp-pro")'),"Déclencher le véritable parcours BP Pro");
assert.ok(layout.includes('fiche-production.html?'),"Utiliser la route BP Pro du parcours existant");
assert.ok(fiche.includes("window.goToBpPro()"),"La fiche déclenche le BP Pro");
assert.ok(fiche.includes("buildUrl('business-plan-pro.html', data)"),"La fiche rejoint le BP Pro");
assert.ok(fiche.includes("'configuration_id', 'simulation_id'"),"Le contexte de simulation est transmis au BP Pro");
assert.ok(pro.includes('id = "p2i-bp-pro-context"'),"Le BP Pro indique le contexte repris");
assert.ok(pro.includes('params.get("configuration_id")'),"Le BP Pro lit la variante transmise");
assert.ok(pro.includes('params.get("simulation_id")'),"Le BP Pro lit la simulation d’origine");
assert.ok(pro.includes('ne sont pas automatiquement validés ni transférés'),"Le BP Pro ne prétend pas reprendre les calculs");
assert.ok(pro.includes('Retour au BP Découverte'),"Le parcours retour est disponible");

assert.ok(layout.includes('window.print()'),"Téléchargement via impression PDF du navigateur");
assert.ok(css.includes(".bp-actions"),"Actions de fin de parcours stylées");
assert.ok(css.includes("bp-sidebar"),"La navigation doit être stylée");
console.log("P2I BP Découverte : contrôles statiques réussis (17 rubriques, liens, garde-fous).");
