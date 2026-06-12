---
title: "Estratègies de puja a Google Ads: Quan usar Maximitzar Conversions vs. Target ROAS"
description: "Guia tècnica sobre Smart Bidding a Google Ads. Analitzem quan implementar Maximitzar Conversions enfront de tROAS amb fórmules i casos pràctics."
pubDate: 2026-06-19
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

A l'ecosistema publicitari modern de Google Ads, l'automatització ha deixat de ser una opció secundària per convertir-se en el nucli de l'optimització de campanyes. A través del **Smart Bidding**, el sistema d'aprenentatge automàtic (machine learning) de Google analitza milions de senyals en temps real (dispositiu, ubicació, hora del dia, historial de cerques, sistema operatiu, etc.) per ajustar la puja de cada subhasta individual.

Tanmateix, delegar el control als algoritmes de Google sense comprendre'n els fonaments matemàtics i els objectius operatius és una recepta segura per malgastar el pressupost. Dues de les estratègies de puja per subhasta més potents i utilitzades són **Maximitzar Conversions** i **Target ROAS (Retorn de la Inversió Publicitària Objectiu)**. Tot i que totes dues busquen optimitzar el rendiment, persegueixen objectius matemàtics radicalment oposats.

En aquesta guia tècnica exhaustiva, analitzarem com funcionen tots dos algoritmes, en quins escenaris específics de l'embut de vendes s'han d'implementar i com fer una transició eficient entre ells per maximitzar el ROI net del vostre negoci.

---

## Com funciona la puja de Maximitzar Conversions?

L'estratègia de **Maximitzar Conversions** té com a objectiu principal obtenir el màxim volum possible de conversions dins del pressupost diari establert per a la campanya. En aquest escenari, l'algoritme no discrimina el valor financer ni la qualitat de cada conversió; tracta totes les conversions per igual.

### L'algoritme darrere del volum
El sistema de Google Ads avalua el context de la cerca d'un usuari i la probabilitat històrica que aquest usuari realitzi l'acció de conversió (un registre, una descàrrega, un contacte o una compra). Si la probabilitat és alta, l'algoritme augmentarà de manera agressiva la puja a la subhasta per assegurar el clic. Si la probabilitat és baixa, reduirà la puja o no participarà a la subhasta.

L'algoritme es regeix per la premissa matemàtica següent: **esgotar el pressupost diari maximitzant la quantitat d'esdeveniments registrats**. Això vol dir que si fixeu un pressupost diari de 100 €, la campanya buscarà gastar el més a prop possible d'aquells 100 € per lliurar-vos el nombre màxim de conversions, sense importar si el Cost Per Adquisició (CPA) resultant és alt o baix en una subhasta individual.

### Quan és ideal usar Maximitzar Conversions?
1. **Llançament de noves campanyes o comptes:** En iniciar, Google no disposa de dades històriques de conversió (píxel fred). Maximitzar Conversions és ideal per forçar l'algoritme a aconseguir dades ràpidament.
2. **Campanyes orientades a generació de Leads (B2B o Serveis locals):** On l'objectiu primari és capturar dades de contacte i el valor de cada registre no es pot mesurar immediatament al web.
3. **Pressupostos limitats:** Si teniu un pressupost diari ajustat i la vostra prioritat absoluta és la tracció inicial del negoci en lloc de l'optimització del marge de benefici.

---

## Com funciona la puja de Target ROAS (tROAS)?

A diferència de Maximitzar Conversions, el **Target ROAS** és una estratègia basada en el **valor de conversió**. No busca aconseguir el nombre màxim de conversions de manera lineal, sinó optimitzar el retorn de la inversió publicitària en funció del valor monetari (ingressos) que cada conversió reporta al sistema.

### L'algoritme del valor de conversió
Per utilitzar tROAS, és obligatori enviar el valor dinàmic de la transacció a través de les etiquetes de conversió de Google Ads. L'algoritme analitza quins perfils d'usuari i termes de cerca tendeixen a generar compres de valor de cistell més alt.

Matemàticament, l'algoritme de Target ROAS treballa sota la relació següent:

$$\text{ROAS Objectiu} = \frac{Total\ d'Ingressos\ de\ Conversió}{Total\ de\ Despesa\ Publicitària} \times 100$$

Si establiu un Target ROAS del 400%, esteu indicant a Google Ads que per cada 1 € invertit en anuncis, el sistema ha d'intentar generar 4 € en ingressos per vendes. Per tant, l'algoritme pujarà molt alt per a usuaris amb alta probabilitat de fer compres de gran volum (AOV alt) i evitarà pujar o pujarà molt baix per a usuaris que solen comprar articles barats o la probabilitat de compra dels quals sigui baixa.

### Requisits i quan és ideal usar Target ROAS
* **Volum mínim de dades:** Google requereix un historial consistent per modelar el valor de conversió. Es recomana tenir almenys **30 conversions en els darrers 30 dies** (idealment més de 50) a la campanya abans d'activar tROAS.
* **E-commerce amb catàleg variat:** Botigues en línia on els productes tenen preus molt dispars (des de 10 € fins a 500 €).
* **Enfocament en Rendibilitat Financera:** Negocis consolidats que necessiten mantenir sota control el seu cost d'adquisició per preservar el marge net de contribució.

---

## Taula Comparativa: Maximitzar Conversions vs. Target ROAS

| Paràmetre | Maximitzar Conversions | Target ROAS (tROAS) |
| :--- | :--- | :--- |
| **Mètrica Principal** | Volum de conversions (quantitat) | Valor de conversió / Ingressos (qualitat/retorn) |
| **Requisits de Dades** | Baixos (es pot iniciar sense dades prèvies) | Mitjans-Alts (mínim 30-50 conversions recents) |
| **Control del Pressupost** | Tendeix a consumir el 100% del pressupost diari | Pot contraure la despesa si no detecta subhastes rendibles |
| **Configuració del Píxel** | Només requereix registrar l'event de conversió | Requereix transmetre el valor monetari dinàmic de la compra |
| **Sensibilitat a l'AOV** | Insensible. Tracta igual una cistella de 5 € que una de 500 € | Molt sensible. Optimitza per a cistelles de valor més alt |

---

## El Dilema de la Transició: Quan i com passar d'una a l'altra

Un dels errors més comuns és activar Target ROAS des del primer dia en una campanya de comerç electrònic. Sense dades al píxel, l'algoritme de Google Ads no sabrà quines variables segmentar per assolir el vostre objectiu i la campanya es quedarà sense impressions (el temut "ofegament de campanya").

### Fase 1: Recollida de dades (Maximitzar Conversions)
Inicieu la vostra campanya utilitzant **Maximitzar Conversions** (o Maximitzar Conversions amb un límit de CPA raonable). Mantingueu aquesta configuració durant un mínim de 4 a 6 setmanes fins que acumuleu prou volum de transaccions estables.

### Fase 2: Càlcul del tROAS real abans de l'activació
No configureu un Target ROAS aleatori o excessivament optimista. Si el vostre ROAS històric real dels darrers 30 dies és del 250%, no configureu un tROAS inicial del 450%. Si ho feu, l'algoritme limitarà dràsticament la puja i les impressions de la campanya cauran a zero.

La fórmula de transició correcta és:

$$\text{tROAS Inicial} = \text{ROAS Històric Real dels darrers 30 dies} \times (0{,}9\ \text{a}\ 1{,}0)$$

És a dir, comenceu amb un Target ROAS lleugerament inferior o igual al vostre rendiment real per donar estabilitat tècnica a la campanya, i aneu pujant-lo en increments graduals del 10% al 15% cada setmana un cop comproveu que el pressupost continua executant-se amb èxit.

### Bones pràctiques per evitar la fase d'aprenentatge infinita
Cada cop que modifiqueu el Target ROAS o canvieu l'estratègia de puja, la campanya entra en un període d'aprenentatge que pot durar de 7 a 14 dies. Durant aquest temps, eviteu fer altres canvis estructurals (modificacions de creatius, canvi de pressupostos en més d'un 20% o ajustos agressius de segmentació).

## Conclusió

No existeix una estratègia de puja intrínsecament superior a l'altra; totes dues responen a fases diferents del cicle de vida d'una campanya. **Maximitzar Conversions** és el motor ideal per generar volum, trencar barreres d'entrada i nodrir el píxel de dades inicials. Per contra, el **Target ROAS** és el bisturí de precisió financera indispensable per a marques de comerç electrònic que necessiten equilibrar l'escala de la seva inversió publicitària amb marges de benefici saludables i sostenibles. Comprendre el funcionament matemàtic d'aquestes subhastes us permetrà prendre el control real de la vostra inversió a Google Ads.
