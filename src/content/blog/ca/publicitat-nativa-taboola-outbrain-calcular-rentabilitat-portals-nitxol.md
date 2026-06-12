---
title: "Publicitat Nativa (Taboola/Outbrain): Com calcular la seva rentabilitat en portals de nínxol"
description: "Guia d'anuncis natius i fórmules financeres per mesurar amb precisió el retorn de la inversió del trànsit patrocinat en portals de nínxol."
pubDate: 2026-08-27
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

La publicitat nativa, representada per gegants com Taboola, Outbrain o MGID, s'ha consolidad com una de les fonts d'adquisició de trànsit més potents del web obert. A diferència dels anuncis a les xarxes socials o motors de cerca, els anuncis natius es mimetitzen amb el contingut editorial dels grans diaris i portals de notícies (sota capçaleres com "Contingut Patrocinat" o "Et pot interessar").

Per als portals de nínxol —llocs web hiper-especialitzats en temàtiques concretes com finances personals, salut, tecnologia o motor—, la publicitat nativa ofereix un doble tall d'oportunitat: es pot utilitzar per comprar trànsit massiu de baix cost i rendibilitzar-lo mitjançant arbitratge de publicitat, o per captar leads i clients d'alta intenció de lectura. En aquesta guia detallada analitzarem la física de costos de la publicitat nativa i les fórmules necessàries per calcular la seva rentabilitat com a precisió quirúrgica.

---

## Models de negoci natius en portals de nínxol

Abans d'iniciar els càlculs, és vital determinar sota quin model de monetització opera el teu portal de nínxol en adquirir trànsit mitjançant Native Ads. Existeixen principalment dos enfocaments:

1. **Arbitratge de Trànsit (Traffic Arbitrage):** Consisteix a comprar clics barats en xarxes de recomanació de contingut (ex. Taboola) per dirigir els usuaris a articles del teu portal de nínxol optimitzats amb publicitat programàtica d'alt rendiment (AdSense, Ezoic, Mediavine o AdThrive). L'objectiu és que els ingressos generats per les impressions publicitàries dins de la sessió de l'usuari superin el cost d'adquisició del clic inicial.
2. **Generació de Conversions (Leads o Vendes d'Afiliats):** Consisteix a utilitzar la publicitat nativa per atreure trànsit qualificat cap a embuts de conversió, pàgines de captura de correus electrònics o ressenyes de productes recomanats amb enllaços d'afiliat (ex. Amazon Afiliats, xarxes de CPA).

---

## Les mètriques fonamentals de la publicitat nativa

Per avaluar i optimitzar campanyes de Native Ads, hem de dominar el següent conjunt de mètriques interrelacionades:

* **CTR (Click-Through Rate):** Percentatge d'impressions del widget de publicitat que es tradueixen en clics cap al teu lloc web.
  $$CTR = \frac{\text{Clics}}{\text{Impressions}} \times 100$$
* **CPC (Cost per Click):** El preu mitjà pagat per cada visitant que fa clic a la recomanació nativa.
* **RPM de la Pàgina (Revenue Per Mille):** Els ingressos estimats que genera el teu lloc web per cada 1.000 pàgines vistes.
  $$RPM = \frac{\text{Ingressos Totals}}{\text{Pàgines Vistes}} \times 1.000$$
* **Pàgines Vistes per Sessió (PV/S):** El nombre mitjà de pàgines que recorre un usuari adquirit en una mateixa visita abans d'abandonar el lloc.
* **EPC (Earnings Per Click / Ingressos per Clic):** La mètrica definitiva de rendiment del trànsit. Defineix quants diners genera cada clic individual que entra al teu web.

---

## 1. Càlcul de Rentabilitat en el Model d'Arbitratge

Perquè una campanya d'arbitratge sigui viable, el cost de comprar un visitant ($CPC_{\text{adquisició}}$) ha de ser estrictament inferior al guany mitjà que genera aquest visitant durant la seva sessió ($EPC$).

La fórmula per calcular l'$EPC$ basant-se en el comportament de navegació i el RPM del web és:

$$EPC = \frac{\text{Pàgines Vistes per Sessió (PV/S)} \times RPM_{\text{monetització}}}{1.000}$$

Per tant, la condició matemàtica de rentabilitat (ROI positiu) s'estableix mitjançant la inequació:

$$CPC_{\text{adquisició}} < \frac{\text{PV/S} \times RPM_{\text{monetització}}}{1.000}$$

El **ROI de l'arbitratge** es calcula com:

$$ROI_{\text{arbitratge}} = \frac{\text{EPC} - CPC_{\text{adquisició}}}{CPC_{\text{adquisició}}} \times 100$$

### Exemple pràctic d'Arbitratge:
Un portal de nínxol sobre "Tecnologia Domòtica" compra trànsit a Outbrain amb un CPC de 0,07 €. Els usuaris que arriben d'aquesta xarxa llegeixen de mitjana 3,2 pàgines per sessió gràcies a una excel·lent estratègia d'enllaçat intern. El RPM mitjà de monetització que el portal ha contractat amb la seva xarxa publicitària és de 26,00 €.

Calculem l'EPC de l'usuari:

$$EPC = \frac{3,2 \times 26,00}{1.000} = \frac{83,20}{1.000} = 0,0832\ \text{€}$$

En comparar costos i guanys:
* $CPC = 0,07\ \text{€}$
* $EPC = 0,0832\ \text{€}$

Com que $CPC < EPC$, la campanya genera beneficis. Calculem el retorn de la inversió:

$$ROI = \frac{0,0832 - 0,07}{0,07} \times 100 = \frac{0,0132}{0,07} \times 100 = 18,86\%$$

Per cada 1.000 € invertits a Outbrain, el web genera 1.188,60 € de facturació publicitària, obtenint un benefici net de 188,60 €.

---

## 2. Càlcul de Rentabilitat en el Model d'Afiliació / Leads

En campanyes enfocades a capturar conversions directes d'afiliats o registres de correu, el volum de pàgines vistes no és el factor determinant. Aquí depenem de la Taxa de Conversió ($CR$) a la landing page i el valor de la comissió o lead ($V_{\text{conversió}}$).

Sota aquest enfocament, el càlcul de l'EPC es realitza dividint el benefici total de conversions entre el nombre de clics adquirits:

$$EPC = \text{Taxa de Conversió (CR)} \times V_{\text{conversió}}$$

El ROAS de la campanya nativa es mesura mitjançant:

$$ROAS = \frac{\text{Ingressos de Conversió}}{\text{Inversió en Publicitat Nativa}} = \frac{EPC}{CPC_{\text{adquisició}}}$$

---

## Cas pràctic pas a pas: Auditoria d'un Portal de Nínxol Financer

Suposem que gestiones un portal de nínxol sobre "Hipoteques i Préstecs". Llançes una campanya a Taboola per capturar leads de persones interessades a refinançar el seu deute.

### Pas 1: Dades d'inversió i trànsit (Taboola)
* **Inversió total:** 5.000 €
* **Impressions de l'anunci:** 2.500.000
* **Clics rebuts:** 20.000
* **CTR calculat:** $\frac{20.000}{2.500.000} \times 100 = 0,80\%$
* **CPC mitjà:** $\frac{5.000}{20.000} = 0,25\ \text{€}$

### Pas 2: Dades de monetització mixta
El portal utilitza una estratègia de monetització híbrida a la landing page:
1. **Publicitat Display:** Mostra banners optimitzats amb un RPM mitjà de 18,00 €. Els usuaris visiten una mitjana d'1,5 pàgines.
2. **Generació de leads financers:** La pàgina ofereix un comparador d'hipoteques on l'usuari pot deixar les seves dades. La comissió neta per lead qualificat que paga el banc és de 12,00 €. La taxa de conversió a lead ($CR$) sobre els clics rebuts és del 2,2%.

### Pas 3: Càlcul dels fluxos d'ingressos
* **Ingressos per Publicitat Display:**
  $$\text{Pàgines vistes totals} = 20.000\ \text{visites} \times 1,5 = 30.000\ \text{pàgines vistes}$$
  $$\text{Ingressos Display} = \frac{30.000}{1.000} \times 18,00 = 540\ \text{€}$$

* **Ingressos por Conversió de Leads (Afiliats/CPA):**
  $$\text{Leads totals obtinguts} = 20.000 \times 0,022 = 440\ \text{leads}$$
  $$\text{Ingressos per Leads} = 440 \times 12,00\ \text{€} = 5.280\ \text{€}$$

* **Ingressos Totals Combinats:**
  $$\text{Ingressos Totals} = 540\ \text{€} + 5.280\ \text{€} = 5.820\ \text{€}$$

### Pas 4: Avaluació de Rentabilitat i Retorn
Calculem l'EPC combinat:

$$EPC = \frac{5.820\ \text{€}}{20.000\ \text{clics}} = 0,291\ \text{€}$$

Atès que el $CPC$ d'adquisició va ser de 0,25 €, la campanya és rentable perquè $EPC\ (0,291\ \text{€}) > CPC\ (0,25\ \text{€})$.

Calculem el ROI net de l'operació:

$$ROI = \frac{5.820 - 5.000}{5.000} \times 100 = \frac{820}{5.000} \times 100 = 16,40\%$$

I el ROAS de la inversió publicitària:

$$ROAS = \frac{5.820}{5.000} = 1,164$$

---

## Estratègies per optimitzar la rentabilitat en Native Ads

Si després de realitzar aquests càlculs la teva rentabilitat està en zona vermella (ROI negatiu), hi ha palanques tècniques específiques per corregir el rumb:

1. **Depuració de la llista de Publishers (Blacklisting):**
   Les plataformes de publicitat nativa compren inventari en milers de portals web. Al teu panell de Taboola o Outbrain veuràs desglossat quins llocs específics estan enviant trànsit. Hauràs de bloquejar immediatament aquells publishers amb alta taxa de rebot o nul·la taxa de conversió, derivant aquest pressupost als portals (whitelists) que generin un EPC superior al CPC.
2. **Optimització del CTR de l'anunci (Títols i Imatges):**
   Un CTR més alt millora el teu algorisme de puntuació dins la plataforma nativa. Això permet a les xarxes mostrar més el teu anunci cobrant-te un CPC més baix, incrementant el teu marge de benefici directament.
3. **Incrementar la recirculació de trànsit intern:**
   Per al model d'arbitratge, cada pàgina vista addicional afegeix ingressos directs. Dissenya articles dinàmics dividits en pàgines amb botons clars de "Següent" o insereix galeries d'imatges interactives per forçar l'augment de Pàgines Vistes per Sessió de forma natural.

## Conclusió

Calcular la rentabilitat en publicitat nativa per a portals de nínxol és un exercici de disciplina matemàtica. No n'hi ha prou amb confiar en les mètriques bàsiques de cost que donen les plataformes de compra. En creuar les dades del teu CPC d'adquisició amb els flujos interns d'ingressos per visualització i conversió, obtindràs l'EPC real que guia les teves decisions d'escalabilitat. Dominar aquestes variables financeres et permetrà comprar trànsit amb la tranquil·litat de saber exactament quants cèntims de benefici net retorna cada clic a les teves campanyes.
