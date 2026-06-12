---
title: "Finestres d'atribució (1-day click vs 7-day click): com canvien les dades que veus al teu panell"
description: "Anàlisi comparativa de finestres d'atribució a Meta i Google Ads i el seu impacte en l'optimització de licitacions, informes de ROAS i presa de decisions."
pubDate: 2026-12-20
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

Quan analitzes el rendiment de les teves campanyes publicitàries a Facebook Ads o Google Ads, és fàcil assumir que les dades de conversió i ingressos mostrades a la pantalla corresponen exactament a les transaccions que han ocorregut aquell mateix dia. Tanmateix, la realitat de l'analítica digital és molt més complexa. La manera com les plataformes registren i mostren les vendes depèn d'una configuració tècnica crítica: la **finestra d'atribució**.

Triar entre una finestra de **1-day click** (conversió en un dia després de fer clic) i una de **7-day click** (conversió en set dies després de fer clic) altera per complet les mètriques clau dels teus informes, des del Cost per Adquisició (CPA) fins al Retorn de la Inversió Publicitària (ROAS). En aquest article analitzarem com funcionen tècnicament aquestes finestres, com impacten en les dades dels teus panells i de quina manera condicionen el comportament dels algorismes de licitació optimitzada (Smart Bidding).

---

## Què és una finestra d'atribució i per què és el motor dels algorismes?

Una **finestra d'atribució** és el període de temps durant el qual una plataforma de publicitat pot reclamar el crèdit per una conversió (venda, registre, etc.) després que un usuari hagi interactuat amb un anunci. Les dues principals interaccions que es registren són:

*   **Clic (Click-through):** L'usuari prem activament l'anunci i accedeix al web.
*   **Visualització (View-through):** L'usuari veu l'anunci a la seva pantalla però no fa clic, i posteriorment realitza la conversió al lloc web per una altra via.

Si un usuari fa clic en un anunci dilluns i compra divendres d'aquella mateixa setmana, aquella conversió es registrarà o no al teu panell publicitari depenent de la mida de la finestra d'atribució configurada.

---

## Comparativa tècnica: Finestra de 1-day click vs. 7-day click

Vegem com es comporta cada finestra d'atribució i com afecta l'atribució de dades a la consola publicitària de plataformes com Meta Ads:

### 1. Finestra de 1-day click
Sota aquesta configuració, la plataforma d'anuncis només s'atribueix una conversió si aquesta ocorre dins de les 24 hores següents a que l'usuari faci clic a l'anunci.
*   **Avantatge:** Les dades reflecteixen amb gran precisió la resposta directa i immediata a l'anunci.
*   **Inconvenient:** Oculta les vendes que tenen un cicle de decisió més llarg. Si un client potencial veu un producte, fa clic, s'ho pensa durant dos dies i finalment realitza la compra, el panell d'anuncis reportarà zero conversions per a aquella campanya.

### 2. Finestra de 7-day click
En aquest cas, la plataforma reclama la conversió si ocorre en qualsevol moment dins dels set dies posteriors al clic.
*   **Avantatge:** Recull una quantitat de dades de conversió més gran, oferint una visió més completa del recorregut del client.
*   **Inconvenient:** Pot inflar el rendiment percebut si les conversions haguessin ocorregut orgànicament de totes maneres sense la influència decisiva de l'anunci.

Adicionalment, moltes plataformes incorporen l'opció d'incloure la finestra de **1-day view**. Si un usuari veu un anunci i compra en les següents 24 hores sense haver-hi fet clic, la plataforma s'atribueix el 100% de la venda.

---

## L'impacte matemàtic en les mètriques del teu panell

El canvi de finestra altera dràsticament els càlculs de les teves mètriques financeres al panell d'anuncis. La fórmula bàsica del ROAS reportat és:

$$\text{ROAS}_{\text{reportat}} = \frac{\text{Ingressos Atribuïts}}{\text{Inversió Publicitària}}$$

En ampliar la finestra d'atribució (de 1-day click a 7-day click + 1-day view), el numerador de la fórmula (els ingressos atribuïts) s'incrementa de forma natural atès que es capturen més vendes tardanes i visualitzacions incidentals.

### Exemple pràctic:
Suposem una marca de moda que inverteix 5.000 € en una campanya de Meta Ads durant una setmana. El comportament de compra dels usuaris es distribueix en el temps, resultant en les següents dades segons la finestra seleccionada:

*   **Sota 1-day click:** Es registren 100 compres directes que sumen 8.000 € d'ingressos.
    $$\text{ROAS}_{\text{1-day}} = \frac{8.000}{5.000} = 1,6$$
    $$\text{CPA}_{\text{1-day}} = \frac{5.000}{100} = 50\ \text{€}$$
*   **Sota 7-day click + 1-day view:** Es registren 180 compres (100 directes + 50 que van comprar entre el dia 2 i 7 + 30 que només van visualitzar l'anunci). El total d'ingressos puja a 14.400 €.
    $$\text{ROAS}_{\text{7-day}} = \frac{14.400}{5.000} = 2,88$$
    $$\text{CPA}_{\text{7-day}} = \frac{5.000}{180} = 27,77\ \text{€}$$

Si mirem el panell configurat en 7-day click, la campanya sembla ser un èxit rotund (ROAS de 2,88). Sota 1-day click, la campanya sembla no assolir el punt d'equilibri (ROAS d'1,6). La inversió i les vendes reals al compte bancari de l'empresa són exactament les mateixes; l'únic que ha canviat és la metodologia d'atribució del panell.

---

## Modelització del retard en la conversió (Conversion Lag)

Per prendre decisions informades, has de comprendre el **Conversion Lag** (o retard en la conversió) de la teva botiga. Aquest factor representa el temps mitjà que transcorre des del primer clic fins a la confirmació de la venda.

Si el teu producte és de compra per impuls (baix preu de venda, ex. 20 €), la gran majoria de les conversions ocorren en el dia 0. Si vens productes premium o B2B de preu elevat (ex. 300 €), el procés de decisió de compra prendrà diversos dies.

Pots modelar la distribució acumulada de conversions mitjançant la relació següent:

$$F(t) = \frac{\text{Conversions Acumulades al dia } t}{\text{Conversions Totals de la Cohort}}$$

Si $F(1) = 0,85$, significa que el 85% de les conversions que genera un clic es realitzen en les primeres 24 hores. En aquest escenari, la finestra de 1-day click és molt fiable i propera a la realitat. Si per contra $F(1) = 0,40$, més de la meitat de les teves vendes es produeixen amb retard, i limitar-se a mesurar amb 1-day click paralitzarà les teves campanyes de forma innecessària per manca de dades aparents.

---

## Com afecta la finestra d'atribució al Smart Bidding i algorismes d'optimització

La finestra d'atribució no és només un filtre per als teus informes; és el conjunt de dades que utilitza l'algorisme d'aprenentatge automàtic de Facebook o Google per entrenar els seus models de licitació i segmentació.

*   **Sota una finestra àmplia (7-day click):** L'algorisme disposa d'un volum de dades històriques de conversió més gran (més "senyals"). Amb més volum, la intel·ligència artificial optimitza més ràpid i troba patrons d'usuaris similars amb major facilitat.
*   **Sota una finestra estreta (1-day click):** El volum de dades es redueix dràsticament. L'algorisme es torna més selectiu i cerca perfils d'usuaris hiperactius amb alta propensió a la compra immediata, la qual cosa pot limitar considerablement l'escala dels teus pressupostos.

---

## Bones pràctiques per auditar les teves dades d'atribució amb un ERP o CRM

Per evitar caure en l'autoengany de les mètriques inflades per les plataformes, és recomanable aplicar una metodologia d'auditoria independent:

1.  **Utilitzar mètriques agregades de negoci (MER):** Calcula setmanalment el teu Marketing Efficiency Ratio per creuar la facturació real amb la inversió total agregada, independentment del que reclami cada panell.
2.  **Analitzar l'atribució de \"Primer Clic\" i \"Últim Clic\" a Google Analytics:** Compara la visió de Meta Ads amb la d'eines analítiques de tercers per identificar solapaments de conversions (per exemple, vendes que tant Google com Meta s'atribueixen al 100% simultàniament).
3.  **Configurar enquestes post-compra (Post-Purchase Surveys):** Pregunta als clients a la pàgina de confirmació de comanda com van conèixer la teva marca (\"On ens vas trobar per primera vegada?\"). Això ajuda a mesurar la influència real de les visualitzacions (view-through) que els panells registren de forma automàtica.

## Conclusió

No existeix una finestra d'atribució ideal aplicable a tots els negocis. Les marques de compra ràpida i baix cost es beneficien de la precisió de 1-day click per evitar la sobre-atribució, mentre que els ecommerces amb cicles de decisió llargs requereixen finestres de 7-day click per proporcionar suficients dades d'optimització als algorismes. Conèixer el comportament de compra dels teus clients i ajustar les finestres dels teus panells de forma coherent t'evitarà cometre errors d'escala i protegirà la rendibilitat real de la teva inversió publicitària.
