---
title: "Com optimitzar el valor mitjà de la comanda (AOV) per rescatar un ROAS pla"
description: "Descobreix mètodes avançats per augmentar l'AOV (cross-selling, upselling i llindars d'enviament) i rescatar la rendibilitat de les teves campanyes amb ROAS estancat."
pubDate: 2026-08-15
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

En el panorama actual de la publicitat digital, molts directors de màrqueting i fundadors d'e-commerce s'enfronten a un mur invisible: l'estancament del Retorn de la Inversió Publicitària (ROAS). Malgrat fer tests A/B setmanals de creatius, segmentar audiències personalitzades i refinar les puges a Meta Ads o Google Ads, el ROAS es manté pla. La causa principal d'aquest fenomen no sol ser un problema de configuració de les campanyes, sinó una realitat macroeconòmica: l'augment sostingut del Cost per Clic (CPC) a causa de la saturació de subhastes.

Quan optimitzar el cost de captació ja no ofereix més marge de millora, l'única palanca financera amb la capacitat real de rescatar la rendibilitat és el **Valor Mitjà de la Comanda** (AOV, per les seves sigles en anglès, *Average Order Value*). En aquest article analitzarem la física matemàtica darrere d'aquesta mètrica i com implementar tàctiques avançades d'optimització de l'AOV per transformar campanyes deficitàries en canals altament rendibles.

---

## La física matemàtica del ROAS

Per entendre per què l'AOV és la variable més potent per rescatar un ROAS pla, hem de descompondre la fórmula tradicional del ROAS en els seus factors constitutius.

Tradicionalment, el ROAS es defineix com:

$$ROAS = \frac{\text{Ingressos Totals}}{\text{Inversió Publicitària}}$$

Si expressem els ingressos i la inversió publicitària en funció del trànsit i el comportament de l'usuari al web, obtenim la relació fonamental següent:

$$\text{Ingressos Totals} = \text{Trànsit} \times \text{Taxa de Conversió (CR)} \times \text{AOV}$$

$$\text{Inversió Publicitària} = \text{Trànsit} \times \text{Cost per Clic (CPC)}$$

En substituir aquestes equacions a la fórmula original del ROAS, els termes de trànsit es cancel·len mútuament, revelant l'estructura matemàtica interna de la rendibilitat publicitària:

$$ROAS = \frac{\text{AOV} \times \text{Taxa de Conversió (CR)}}{\text{CPC}}$$

Aquesta fórmula desmitifica l'optimització d'anuncis. Si el mercat empeny el $CPC$ a l'alça i la taxa de conversió ($CR$) de la teva botiga es manté estable a causa de les limitacions d'experiència d'usuari i fricció de compra, l'única manera d'incrementar el $ROAS$ és a través d'un increment directe de l'$AOV$.

Per exemple, si tens un $CPC$ de 0,60 €, una $CR$ del 2% (0,02 en decimals) i un $AOV$ de 40 €:

$$ROAS = \frac{40 \times 0,02}{0,60} = 1,33$$

Si aconsegueixes elevar l'$AOV$ a 65 € mitjançant tècniques d'estructuració de l'oferta, el nou ROAS serà:

$$ROAS = \frac{65 \times 0,02}{0,60} = 2,16$$

Amb un sol canvi estratègic en el valor del carret, has passat d'una campanya amb pèrdues a un retorn viable que supera àmpliament el punt d'equilibri en la majoria de sectors.

---

## Tàctiques avançades per incrementar l'AOV

Incrementar el valor mitjà de la comanda no consisteix simplement a demanar a l'usuari que compri més. Requereix un disseny intel·ligent de l'oferta i una reducció sistemàtica de la fricció en l'embut de vendes.

### 1. Upselling i Cross-selling contextualitzats

Hi ha una diferència crítica entre aquestes dues tècniques que sovint es confonen:
* **Upselling (Venda Addicional):** Consisteix a convèncer el client de comprar una versió de més qualitat, mida o prestacions del mateix producte que està considerant.
* **Cross-selling (Venda Creuada):** Implica suggerir productes complementaris o relacionats que afegeixen valor al producte principal (per exemple, piles per a una joguina electrònica).

La clau de la conversió en aquestes tècniques és el *timing* i la rellevància. Presentar un pop-up intrusiu de venda creuada en el moment en què l'usuari fa clic a "Afegir al carret" pot danyar la conversió ($CR$). La recomanació tècnica és segmentar el procés en tres fases:

* **Prèvia a la compra (Fitxa de producte):** Oferir una millora de mida o un pack (ex. "Porta't la mida familiar i estalvia un 15% per unça").
* **Al carret (*Mini-cart* / calaix lateral):** Suggerir d'1 a 3 accessoris econòmics directament compatibles amb el producte principal mitjançant sistemes automàtics de recomanació.
* **Post-compra (*One-Click Upsell*):** Aquesta és la fase amb la taxa de conversió més alta. Un cop l'usuari ha introduït les seves dades de pagament i ha completat la comanda, se li presenta una oferta exclusiva d'un sol clic a la pàgina d'agraïment. Com que el *token* de la targeta ja està emmagatzemat a la passarel·la de pagaments, el client no ha de tornar a omplir cap formulari, reduint la fricció a zero.

### 2. Llindars d'incentius dinàmics (*Thresholds*)

El mètode més contrastat per elevar l'AOV de manera previsible és establir un llindar per aconseguir un benefici directe, habitualment l'enviament gratuït o un regal promocional. No obstant, fixar aquest llindar a l'atzar pot destruir el marge net de l'empresa.

Per determinar el llindar òptim d'enviament gratuït ($U_{\text{enviament}}$), has de fer servir la fórmula següent basada en el teu AOV actual:

$$U_{\text{enviament}} = AOV_{\text{actual}} \times 1,20\ \text{a}\ 1,30$$

Establir el llindar entre un 20% i un 30% per sobre de la teva mitjana històrica empeny l'usuari a buscar activament un segon o tercer article per evitar el cost de l'enviament.

**Exemple de càlcul:**
Si el teu AOV actual és de 50 € i el cost mitjà d'enviament és de 5 €, un llindar de 65 € és òptim. Per a un usuari que té 52 € al seu carret, la decisió psicològica és simple: pagar 5 € addicionals per un servei de transport que no li aporta valor físic, o afegir un producte de 15 € i obtenir enviament gratuït i un article extra.

Per maximitzar aquest efecte, la botiga en línia ha de comptar amb barres indicadores de progrés visuals i interactives al carret que mostrin en temps real la distància fins al benefici: *"Estàs a tan sols 13 € d'aconseguir enviament gratuït!"*

### 3. Agrupacions de producte (*Product Bundling*) i ofertes per volum

El *bundling* consisteix a empaquetar diversos productes individuals que es consumeixen junts i oferir-los a un preu lleugerament inferior al de la seva compra per separat. Això és idoni per a productes d'ús recurrent o consumibles (suplements, cosmètica, alimentació).

Podem classificar els *bundles* en tres categories principals:
1. **Packs d'inici ràpids (*Starter Packs*):** Ideal per captar nous clients amb un assortiment que solucioni un problema integral (ex. "Xampú + Condicionador + Sèrum").
2. **Descomptes per volum escalonats:** Fórmules del tipus "Compra 1 i paga el preu normal, compra 2 i obtingues un 10% de descompte en el total, compra 3 i obté un 20%".
3. ***Bundles* personalitzats ("Construeix el teu propi pack"):** Permet a l'usuari triar diferents variants dins d'un catàleg predefinit, donant-li sensació de control i personalització mentre s'eleva el tiquet mitjà.

---

## Cas pràctic d'optimització: De ROAS deficitari a rendible

Analitzem un escenari d'un e-commerce de moda sostenible que actualment pateix un ROAS pla i insuficient per escalar.

### Fase 1: Diagnòstic inicial (Línia Base)
* **Pressupost mensual:** 15.000 €
* **CPC mitjà:** 0,80 €
* **Visites al lloc web:** $\frac{15.000}{0,80} = 18.750\ \text{visites}$
* **Taxa de Conversió (CR):** 1,8%
* **Nombre de Comandes:** $18.750 \times 0,018 = 337,5\ \text{comandes}$
* **AOV:** 48,00 €
* **Ingressos bruts generats:** $337,5 \times 48,00 = 16.200\ \text{€}$
* **ROAS actual:** $\frac{16.200}{15.000} = 1,08$

Amb un ROAS d'1,08, i assumint un cost dels béns venuts (COGS) del 40%, l'empresa perd diners nets en cada adquisició publicitària.

### Fase 2: Implementació d'estratègies d'AOV
L'equip decideix aplicar dos canvis sense alterar el disseny dels anuncis ni el pressupost:
1. Instal·lar un sistema de *One-Click Upsell* post-compra oferint mitjons de cotó orgànic a meitat de preu (9 € en lloc de 18 €).
2. Establir un llindar d'enviament gratuït en 65 € (abans era en 45 €) i implementar un sistema de barra de progrés visual al carret.

### Fase 3: Resultats post-optimització
Després d'un mes de proves, es registren les mètriques següents:
* **Pressupost i CPC:** Romanen idèntics (15.000 € invertits, 18.750 visites, CPC de 0,80 €).
* **Taxa de Conversió (CR):** Pateix una baixada molt lleu per l'augment del llindar d'enviament, situant-se en l'1,75%.
* **Nombre de Comandes:** $18.750 \times 0,0175 = 328\ \text{comandes}$ (9 comandes menys que el mes anterior).
* **Nou AOV:** Gràcies que el 35% dels compradors van afegir un accessori per arribar a l'enviament gratuït i el 15% va acceptar l'oferta post-compra, l'AOV puja de 48,00 € a 74,50 €.
* **Ingressos bruts generats:** $328 \times 74,50 = 24.436\ \text{€}$
* **Nou ROAS:** $\frac{24.436}{15.000} = 1,63$

### Conclusió del cas
Tot i que les campanyes publicitàries van dirigir exactament el mateix volum de trànsit al mateix cost i la taxa de conversió global va baixar lleugerament, la facturació total va créixer un **50,8%** i el ROAS va augmentar de **1,08 a 1,63**. El marge absolut generat cobreix ara àmpliament els costos operatius, permetent a la marca escalar la inversió publicitària amb total seguretat.

---

## Conclusió

Quan les plataformes publicitàries es tornen més competitives i cares, optimitzar el rendiment dels teus anuncis ja no és suficient. El veritable creixement rendible es desbloqueja al lloc web i en l'estructura de preus. En enfocar els teus esforços a augmentar el valor mitjà de la comanda mitjançant *bundles* estratègics, llindars d'enviament calculats amb precisió matemàtica i ofertes intel·ligents en el moment adequat del flux de pagament, podràs rescatar qualsevol campanya estancada i construir un motor d'adquisició sòlid i resistent a l'augment dels costos publicitaris.
