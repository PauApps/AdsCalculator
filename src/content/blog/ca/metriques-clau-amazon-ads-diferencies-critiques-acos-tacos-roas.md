---
title: "Mètriques clau a Amazon Ads: diferències crítiques entre ACoS, TACoS i ROAS"
description: "Guia completa de mètriques a Amazon Ads. Aprèn a calcular i interpretar l'ACoS, el TACoS i el ROAS per maximitzar la rendibilitat del teu compte de venedor."
pubDate: 2026-09-02
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

L'ecosistema publicitari d'Amazon Ads funciona sota dinàmiques radicalment distintes a les de canals tradicionals com Meta Ads o Google Ads. A Amazon, la publicitat i el posicionament orgànic estan íntimament entrellaçats: les vendes generades a través d'anuncis pagats (Sponsored Products, Sponsored Brands) milloren l'historial de vendes del producte (*sales velocity* o velocitat de vendes) i la seva taxa de conversió, impulsant directament la seva visibilitat orgànica en els resultats de cerca.

A causa d'aquesta simbiosi entre trànsit de pagament i orgànic, els venedors d'Amazon (ja sigui a través de Seller Central o Vendor Central) no poden mesurar la salut del seu negoci basant-se únicament en el retorn publicitari directe. És imprescindible comprendre i analitzar en conjunt tres mètriques fonamentals: **ACoS**, **TACoS** i **ROAS**. En aquesta guia tècnica explicarem les seves fórmules de càlcul, diferències crítiques i com interpretar-les per optimitzar la rendibilitat global del teu compte.

---

## 1. ACoS (Advertising Cost of Sales)

L'**ACoS** (Cost Publicitari de les Vendes) és la mètrica d'eficiència publicitària per excel·lència a la plataforma d'Amazon. Expressa el percentatge d'ingressos per publicitat que es destina a cobrir la despesa en anuncis.

La fórmula de càlcul de l'ACoS és:

$$ACoS = \frac{\text{Despesa Publicitària (Ad Spend)}}{\text{Vendes Publicitàries (Ad Sales)}} \times 100$$

### Interpretació financera de l'ACoS:
L'ACoS et diu com d'eficient és una campanya en termes purament publicitaris. Per avaluar si el teu ACoS és saludable, has de comparar-lo amb el **Marge de Benefici abans de Publicitat** (conegut com a *Breakeven ACoS*).

* Si el teu marge de benefici brut sobre el producte (després de restar costos de fabricació, logística FBA i tarifes de referència d'Amazon) és del 35%:
  * Un **ACoS del 35%** significa que estàs en el punt d'equilibri (no guanyes ni perds diners amb la publicitat).
  * Un **ACoS del 25%** significa que retens un 10% de benefici net sobre les vendes publicitàries.
  * Un **ACoS del 45%** significa que estàs perdent un 10% per cada venda patrocinada.

---

## 2. ROAS (Return on Ad Spend)

El **ROAS** és el retorn de la inversió publicitària. Tot i que és la mètrica estàndard a la resta de canals de màrqueting digital, a Amazon ha estat tradicionalment secundària enfront de l'ACoS, encara que avui dia totes dues es mostren a la consola de publicitat.

La fórmula del ROAS és:

$$ROAS = \frac{\text{Vendes Publicitàries (Ad Sales)}}{\text{Despesa Publicitària (Ad Spend)}}$$

Com hauràs observat, el ROAS és simplement l'invers matemàtic de l'ACoS (expressat en format decimal):

$$ROAS = \frac{1}{\text{ACoS (en decimals)}}$$

$$ACoS = \frac{1}{\text{ROAS}} \times 100$$

* Si tens un ACoS del 20% (0,20 en decimals): $ROAS = \frac{1}{0,20} = 5,0$.
* Si tens un ROAS de 4,0: $ACoS = \frac{1}{4,0} \times 100 = 25\%$.

---

## 3. TACoS (Total Advertising Cost of Sales)

El **TACoS** (Cost Publicitari Total de les Vendes) és la mètrica més important per avaluar la salut global d'un negoci a Amazon. A diferència de l'ACoS, el TACoS mesura l'impacte de la despesa publicitària en relació amb les **vendes totals** del negoci (vendes orgàniques + vendes publicitàries).

La fórmula de càlcul del TACoS és:

$$TACoS = \frac{\text{Despesa Publicitària (Ad Spend)}}{\text{Vendes Totals (Orgàniques + Publicitàries)}} \times 100$$

El TACoS és crucial perquè reflecteix el "flywheel effect" o efecte volant d'Amazon. Si els teus anuncis de pagament estan posicionant bé el teu producte a nivell orgànic, les teves vendes orgàniques haurien de créixer, la qual cosa diluirà el pes de la despesa publicitària sobre la facturació total.

---

## Comparativa d'Escenaris i Relació entre ACoS i TACoS

Per prendre decisions estratègiques d'inventari, preus i licitacions, has d'analitzar de forma combinada la tendència de l'ACoS i del TACoS. Vegem els quatre escenaris analítics més comuns:

### Escenari A: ACoS estable o a la baixa i TACoS a la baixa
* **Significat:** Les campanyes publicitàries estan funcionant amb alta eficiència i, al mateix temps, el posicionament orgànic del producte està millorant. El volum de vendes orgàniques està creixent a un ritme més ràpid que la despesa en anuncis.
* **Acció:** És l'escenari ideal. Pots permetre't escalar el pressupost publicitari o apujar les licitacions per capturar més quota de mercat.

### Escenari B: ACoS a l'alça però TACoS estable o a la baixa
* **Significat:** Els teus anuncis s'estan tornant menys eficients (per exemple, a causa d'una major competència i CPCs més cars), però les vendes totals del negoci segueixen creixent de manera saludable gràcies a l'increment de les vendes orgàniques. La publicitat segueix alimentant positivament l'algorisme orgànic.
* **Acció:** Mantén la calma, però audita les campanyes. Optimitza paraules clau negatives i licita de forma més conservadora en termes de concordança àmplia, però no retallis dràsticament el pressupost ja que podries perjudicar les vendes orgàniques col·laterals.

### Escenari C: ACoS a l'alça i TACoS a l'alça
* **Significat:** Les campanyes publicitàries estan perdent eficiència i les vendes orgàniques s'estan estancant o disminuint. El negoci s'està tornant excessivament dependent de la publicitat per generar cada venda, devorant el marge net global.
* **Acció:** Intervenció urgent. Necessites revisar la taxa de conversió de la fitxa de producte (imatges, llistat de beneficis, ressenyes, A+ Content) i pausar paraules clau irrellevants d'alt cost.

### Escenari D: ACoS a la baixa però TACoS a l'alça
* **Significat:** Les campanyes publicitàries semblen molt eficients en els informes d'Amazon (baix ACoS / alt ROAS), però el volum de vendes orgàniques està patint una forta caiguda. Això acostuma a passar quan els teus anuncis estan canibalitzant les teves pròpies paraules clau orgàniques (els usuaris fan clic en l'anunci en lloc de fer clic en el teu llistat orgànic que ja estava en la primera posició).
* **Acció:** Realitza un test reduint la licitació en els termes de marca o paraules clau on ja ocupes de forma natural la primera posició orgànica per veure si les vendes es traslladen al canal gratuït.

---

## Cas pràctic de càlcul complet

Analitzem les mètriques mensuals d'un venedor d'Amazon que comercialitza accessoris de cuina:

### Dades de partida:
* **Despesa en publicitat (Ad Spend):** 4.500 €
* **Vendes atribuïdes a la publicitat (Ad Sales):** 15.000 €
* **Vendes totals del compte (Total Sales):** 45.000 €
* **Marge de benefici net del producte (abans de publicitat):** 30%

### Càlculs mètrics:
1. **Càlcul de l'ACoS:**
   $$ACoS = \frac{4.500}{15.000} \times 100 = 30\%$$

2. **Càlcul del ROAS:**
   $$ROAS = \frac{15.000}{4.500} = 3,33$$

3. **Càlcul del TACoS:**
   $$TACoS = \frac{4.500}{45.000} \times 100 = 10\%$$

### Diagnòstic de salut financera del negoci:
* L'**ACoS del 30%** coincideix exactament amb el marge net del producte del 30% (Breakeven ACoS). Això significa que les vendes que provenen directament d'anuncis no estan deixant cap benefici directe al venedor; operen a cost zero.
* Tanmateix, el **TACoS és de només el 10%**. Això indica que el negoci gasta únicament un 10% de la seva facturació total en captació publicitària.
* Atès que les vendes totals són de 45.000 € i el cost de publicitat és de 4.500 €, el marge net global consolidat del compte és:
  $$\text{Benefici Brut Total} = 45.000 \times 0,30 = 13.500\ \text{€}$$
  $$\text{Benefici Net Real} = 13.500 - 4.500\ \text{(Ad Spend)} = 9.000\ \text{€}$$
  $$\text{Percentatge de Marge Net Final} = \frac{9.000}{45.000} \times 100 = 20\%$$

Malgrat que les campanyes publicitàries operen en punt d'equilibri individual (ACoS del 30%), el compte en el seu conjunt conserva un **20% de benefici net real** gràcies al fet que el 66,6% de les vendes ocorren de forma orgànica. La despesa publicitària està justificada perquè sosté el posicionament i volum total.

---

## Conclusió

Gestionar una marca a Amazon analitzant únicament l'ACoS és com conduir mirant només el mirall retrovisor. Per assegurar un creixement rentable a llarg termini, el TACoS ha de ser la teva estrella guia. En mantenir el TACoS sota control (generalment entre el 6% i el 15% segons la maduresa del nínxol) i optimitzar l'ACoS perquè romangui per sota dels teus límits de marge net, aconseguiràs activar el volant orgànic d'Amazon de forma rentable i sostenible en el temps.
