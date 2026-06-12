---
title: "L'impacte ocult de les devolucions en el e-commerce i com recalculen el teu ROI"
description: "Aprèn com les devolucions afecten la rendibilitat real de la teva botiga en línia i descobreix les fórmules per ajustar el teu ROI i ROAS net avui mateix."
pubDate: 2026-06-25
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

En el sector de les vendes en línia, hi ha una mètrica que sovint es tracta com un problema purament operatiu, però que en realitat és una de les forces destructores de la rendibilitat del màrqueting més grans: **la taxa de devolució**.

Els directors d'e-commerce i els traffickers solen celebrar els pics de facturació després d'una campanya exitosa de Black Friday o rebaixes d'estiu. Els taulers de Meta Ads, Google Ads i Shopify mostren gràfics ascendents amb un Retorn de la Inversió Publicitària (ROAS) aparentment espectacular. Tanmateix, aquesta foto del rendiment és només una il·lusió temporal.

Quan els transportistes comencen a lliurar els paquets retornats al magatzem setmanes després, la realitat financera canvia completament. En aquesta guia tècnica, analitzarem l'impacte financer real de les devolucions en el e-commerce i proporcionarem les fórmules necessàries per calcular el ROI i ROAS net ajustat.

---

## Per què el teu tauler de màrqueting t'està enganyant

La gran majoria d'eines d'atribució publicitària i plataformes de comerç electrònic registren les conversions en el moment exacte en què el client realitza el checkout i efectua el pagament. Això genera dos problemes estructurals greus per a la presa de decisions financeres:

### La il·lusió del ROAS brut
Si una campanya de Meta Ads inverteix 5.000 € i genera 20.000 € en vendes directes dins la web, la plataforma reportarà un ROAS brut de 4,0 (400%).

Tanmateix, si aquella categoria de producte (per exemple, calçat de moda) pateix una taxa de devolució històrica del 25%, el valor real de les compres que finalment es queden els clients no és de 20.000 €, sinó de 15.000 €. Els 5.000 € restants tornaran als comptes dels usuaris a través de reemborsaments. Els taulers de Meta Ads mai no restaran aquestes devolucions de les seves mètriques de rendiment, la qual cosa et portarà a escalar campanyes basant-te en dades falses.

### El desfasament temporal de la devolució
Hi ha una finestra de temps (generalment entre 14 i 30 dies) des que el client rep el producte fins que decideix retornar-lo. Aquesta asincronisme temporal significa que el cost del màrqueting s'imputa avui, els ingressos es registren avui, però la pèrdua real de la venda i els costos de transport associats es manifesten setmanes després. Financerament, això distorsiona el flux de caixa i les anàlisis de cohorts mensuals.

---

## La fórmula del ROI Net i ROAS Ajustat per Devolució

Per calcular la rendibilitat real del negoci, hem d'aplicar filtres correctius a les nostres mètriques publicitàries tradicionals. Comencem per definir les mètriques clau i les seves relacions matemàtiques.

### 1. Taxa de Devolució ($TD$)
Representa la proporció dels ingressos bruts facturats que són reemborsats als clients a causa de devolucions voluntàries:

$$TD = \frac{\text{Ingressos Reemborsats}}{\text{Ingressos Bruts Totals}} \times 100$$

### 2. ROAS Net Ajustat ($ROAS_{Net}$)
En lloc de dividir els ingressos bruts facturats per la despesa en anuncis, hem de restar el valor dels reemborsaments i sumar els costos variables directes generats per processar la devolució (com la logística inversa):

$$ROAS_{Net} = \frac{\text{Ingressos Bruts} \times (1 - \frac{TD}{100}) - \text{Cost de Logística Inversa}}{Ad\ Spend}$$

*On el **Cost de Logística Inversa** inclou l'etiqueta d'enviament de retorn pagada al transportista i la manipulació al magatzem.*

### 3. ROI del Negoci Ajustat ($ROI_{Net}$)
Per conèixer l'impacte final sobre el compte de pèrdues i guanys ($P\&G$), la fórmula ha d'incloure el cost dels béns venuts (COGS) de les unitats que sí es van quedar els clients, el cost de publicitat, els enviaments d'anada i tornada, i les despeses de reacondicionament:

$$ROI_{Net} = \frac{\text{Ingressos Nets} - (COGS_{Nets} + Ad\ Spend + \text{Cost Enviament Anada} + \text{Costos Logística Inversa} + \text{Comissions Passarel·la})}{COGS_{Nets} + Ad\ Spend + \text{Cost Enviament Anada} + \text{Costos Logística Inversa} + \text{Comissions Passarel·la}} \times 100$$

---

## Cas pràctic: Desmuntant el ROI d'un e-commerce de moda

Imaginem una marca de roba esportiva que ven una dessuadora a **100 €** amb les dades de costos unitaris mitjans següents:
* **COGS (Cost de fabricació i duanes):** 25 €
* **Cost d'enviament de lliurament (Anada):** 5 €
* **Cost d'enviament de devolució (Logística inversa):** 6 €
* **Comissió de la passarel·la de pagament (Stripe/PayPal):** 3% (3 € per transacció)
* **Cost per Adquisició publicitari mitjà (CPA):** 30 €
* **Taxa de devolució històrica del producte:** 20%

Analitzem dos escenaris per a una campanya que genera **100 vendes brutes** (10.000 € de facturació) amb una inversió publicitària de **3.000 €**.

### Escenari A: Anàlisi tradicional (Sense contemplar devolucions)
* **Facturació registrada:** 10.000 €
* **Ad Spend:** 3.000 €
* **ROAS Reportat:** 3,33 (333%)
* **Despeses aparents:** $COGS\ (2.500\ \text{€}) + Ads\ (3.000\ \text{€}) + Enviaments\ Anada\ (500\ \text{€}) + Passarel·les\ (300\ \text{€}) = 6.300\ \text{€}$
* **Benefici Net Aparentment Esperat:** $10.000\ \text{€} - 6.300\ \text{€} = 3.700\ \text{€}$
* **ROI Esperat:** 58,7%

### Escenari B: Anàlisi real (Amb 20% de devolucions reals)
De les 100 vendes inicials, **20 clients retornen la seva comanda**.
* **Ingressos reals (Nets):** $10.000\ \text{€} \times 0{,}80 = 8.000\ \text{€}$ (es reemborsen 2.000 €)
* **Unitats venudes reals:** 80 unitats.
* **COGS Real:** $80 \times 25\ \text{€} = 2.000\ \text{€}$ (els 20 productes retornats tornen a l'estoc, però assumim que són aptes per tornar a vendre).
* **Cost total d'enviament d'anada:** $100 \times 5\ \text{€} = 500\ \text{€}$ (vas haver d'enviar els 100 paquets inicials).
* **Cost de logística inversa:** $20 \times 6\ \text{€} = 120\ \text{€}$ (pagues l'enviament de retorn dels 20 clients).
* **Comissions de passarel·la perdudes:** $300\ \text{€}$ (els processadors de pagament moderns com Stripe o PayPal **no retornen** la comissió de la transacció original després de fer un reemborsament).
* **Inversió publicitària:** 3.000 € (la publicitat dels 20 que van retornar ja s'ha consumit).

Calculem les despeses reals de l'escenari B:
$$\text{Despeses Reals} = 2.000\ \text{€}\ (COGS) + 3.000\ \text{€}\ (Ads) + 500\ \text{€}\ (Enviaments\ Anada) + 120\ \text{€}\ (Retorns) + 300\ \text{€}\ (Passarel·les) = 5.920\ \text{€}$$

$$\text{Benefici Net Real} = 8.000\ \text{€}\ (\text{Ingressos Nets}) - 5.920\ \text{€}\ (\text{Despeses}) = 2.080\ \text{€}$$

Calculem ara les mètriques publicitàries netes ajustades:
* **ROAS Net Real:** $\frac{8.000\ \text{€} - 120\ \text{€}\ (\text{logística inversa})}{3.000\ \text{€}} = 2{,}62$ (En comptes del 3,33 reportat)
* **ROI Net Real:** $\frac{2.080\ \text{€}}{5.920\ \text{€}} \times 100 = 35{,}13\%$ (En comptes de la previsió del 58,7%)

Com pots observar, una taxa de devolució del 20% va erosionar gairebé un **44% del benefici net esperat** del negoci, reduint el ROI del 58,7% al 35,13%.

---

## Costos addicionals intangibles associats a la devolució

L'impacte financer no es limita al cost directe de les tarifes dels transportistes. Hi ha partides de despesa indirecta que solen ignorar-se en els balanços generals de màrqueting:

* **Mà d'obra i control de qualitat:** Cada paquet retornat s'ha d'obrir, inspeccionar, netejar, reetiqueta i reubicació en les prestatgeries del magatzem. El temps de l'operari és un cost directe per devolució.
* **Minva per trencament d'estoc o mal estat:** Un percentatge variable dels productes retornats arriba danyat, usat o sense l'embalatge original, la qual cosa impedeix la seva revenda a preu complet. Això s'ha d'imputar com a cost d'inventari perdut o rebaixat (minva).
* **Costos d'emmagatzematge mort:** Els productes retornats sovint tarden a estar llestos per a la venda de nou, immobilitzant capital de treball i ocupant un espai físic al magatzem que genera costos d'inventari mensuals.

## Estratègies per mitigar l'impacte financer en el ROI d'Ads

Per blindar el teu ROI net publicitari contra l'erosió de les devolucions, et recomanem implementar les mesures operatives i tècniques següents:

1. **Importar el marge net als algorismes:** Utilitza eines de tracking avançat per enviar conversions a Meta i Google a través de la seva API amb el valor net estimat un cop descomptada la taxa de devolució mitjana de la categoria de producte.
2. **Optimitzar les taules de talles i descripcions:** La principal causa de devolucions en moda és l'ajust incorrecte. Utilitza assistents virtuals de talla interactiu i vídeos del producte real en moviment per alinear les expectatives del client.
3. **Cobrar una tarifa de logística inversa simbòlica:** Oferir devolucions 100% gratuïtes fomenta la compra impulsiva de diverses talles per provar-les a casa (tècnica coneguda com a *bracketing*). Cobrar un import fix petit per gestionar la devolució (per exemple, 2,99 €) actua com a barrera psicològica eficaç per disminuir les devolucions artificials sense penalitzar severament la conversió inicial.

## Conclusió

L'èxit d'una marca de comerç electrònic no es decideix en el volum brut de transaccions que mostra la interfície de Shopify o del teu canal d'anuncis, sinó en la qualitat de les vendes que aconsegueixen superar el període de desistiment. Integrar de manera regular la taxa de devolució en els teus taulers de ROI publicitari és l'única manera de garantir que el teu pressupost d'Ads expandeix de manera real els marges del negoci en lloc d'inflar una bombolla d'ingressos ficticis que acabarà per punxar-se a final de mes.
