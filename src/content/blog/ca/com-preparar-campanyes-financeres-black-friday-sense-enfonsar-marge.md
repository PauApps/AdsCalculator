---
title: "Com preparar les teves campanyes financeres per al pic del Black Friday sense enfonsar el teu marge"
description: "Planificació financera i escalat d'ofertes per a e-commerce en períodes festius d'alta demanda. Aprèn a protegir la teva rendibilitat."
pubDate: 2026-10-23
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

El període comprès entre el Black Friday i el Cyber Monday (l'anomenada *Cyber Week*) representa per a molts negocis de comerç electrònic entre el $20\%$ i el $40\%$ de la seva facturació anual. No obstant, el volum de vendes no és sinònim de benefici net. Durant aquesta temporada d'alta agressivitat comercial, els costos per mil impressions (CPM) a Facebook Ads i Instagram Ads s'encareixen entre un $50\%$ i un $120\%$, mentre que a Google Ads els costos per clic (CPC) pateixen increments similars a causa de la saturació de puges a les subhastes.

Si a la pujada dels costos publicitaris hi afegim les rebaixes agressives de preus que redueixen els marges unitaris dels productes, la probabilitat d'incórrer en pèrdues és alarmantment alta. Per evitar-ho, els directors financers (CFO) i els directors de màrqueting (CMO) han de dissenyar una estratègia analítica robusta, calculant per endavant la viabilitat financera de les ofertes.

En aquest article abordem la preparació matemàtica i pressupostària que necessita un e-commerce per maximitzar el seu volum de negoci durant el Black Friday sense destruir el seu marge comercial.

---

## 1. L'impacte de les promocions en el marge unitari

Abans d'assignar un sol euro al pressupost publicitari del Black Friday, és imprescindible calcular el **Marge Net Modificat pel Descompte** ($M_{\text{desc}}$) per a cadascuna de les referències o categories de producte clau:

$$M_{\text{desc}} = P \times (1 - d) - COGS - F_v$$

On:
*   $P$ és el preu original de venda al públic (PVP) abans d'impostos.
*   $d$ és el percentatge de descompte aplicat expressat en format decimal (per exemple, $0.20$ per a un $20\%$).
*   $COGS$ (*Cost of Goods Sold*) representa el cost de producció, adquisició o compra unitària del producte.
*   $F_v$ representa els costos variables associats directament a la transacció: comissions de la passarel·la de pagament (Stripe, PayPal), costos d'empaquetat (*picking & packing*) i tarifes d'enviament si s'ofereix enviament gratuït promocional.

En aplicar un descompte, el marge de contribució percentual del producte es comprimeix considerablement. Si un producte de 100 € amb un COGS de 30 € es ven amb un descompte del $30\%$, el seu marge net de contribució nominal passa de 70 € a tan sols 40 € (assumint costos variables transaccionals estables). Això significa que caldrà gairebé el doble de vendes per generar el mateix benefici brut absolut.

---

## 2. El recàlcul del ROAS de Punt d'Equilibri (*Break-Even ROAS*)

El ROAS de Punt d'Equilibri (*Break-Even ROAS*) és la mètrica de control financer que defineix el retorn de la inversió publicitària mínim necessari perquè una campanya no generi pèrdues. Es calcula com l'invers del marge de contribució percentual:

$$ROAS_{\text{BE}} = \frac{P \times (1 - d)}{M_{\text{desc}}}$$

Analitzem com canvia el llindar de rendibilitat durant el Black Friday a través d'un exemple comparatiu:

| Variable | Campanya Normal | Campanya Black Friday (Desc. $30\%$) |
| :--- | :--- | :--- |
| **Preu de venda ($P$)** | 100 € | 70 € |
| **COGS** | 35 € | 35 € |
| **Costos Variables ($F_v$)** | 5 € | 5 € |
| **Marge de contribució** | 60 € ($60\%$) | 30 € ($42,8\%$) |
| **ROAS d'Equilibri** | **$1,67$** | **$2,33$** |

En època normal, la campanya és rendible a partir d'un ROAS d'$1,67$. No obstant, a causa del descompte aplicat durant el Black Friday, el ROAS mínim exigit puja a $2,33$.

Si el teu equip de màrqueting utilitza els mateixos objectius de Smart Bidding o ROAS objectiu a Google Ads que durant la resta de l'any, l'algoritme pujarà de forma agressiva presumint una rendibilitat irreal, cosa que portarà a pèrdues netes significatives. És obligatori ajustar manualment els límits de rendibilitat a les eines de puja abans de l'inici del festival promocional.

---

## 3. Mitigar la pujada del CAC mitjançant l'increment de l'AOV

L'única manera sostenible de contrarestar l'increment en el cost d'adquisició de clients ($CAC$) provocat per la inflació de les subhastes publicitàries sense perjudicar excessivament el marge de benefici és augmentant el **Valor Mitjà de la Comanda** (AOV).

En lloc d'oferir descomptes plans en productes individuals, les marques d'èxit dissenyen estratègies d'empaquetament (*Bundling*) o llindars de compra estructurats:
*   **Venda en packs (*Bundling*):** Unir productes complementaris sota una oferta unificada (ex. "Pack Rutina Facial d'Hivern" amb un descompte del $25\%$). Això eleva el tiquet mitjà i optimitza els costos d'enviament logístic unitari.
*   **Descomptes progressius basats en valor de compra:**
    *   $10\%$ de descompte en compres superiors a 60 €.
    *   $20\%$ de descompte en compres superiors a 120 €.
    *   $30\%$ de descompte en compres superiors a 200 €.

Financerament, l'AOV mitjà incrementat ($AOV_{\text{nou}}$) redueix la incidència relativa del cost d'enviament fix i la comissió de pagament, incrementant el marge mitjà per comanda:

$$\text{Marge Comanda Ponderat} = \frac{AOV_{\text{nou}} - \sum COGS - \text{Cost Enviament}}{AOV_{\text{nou}}}$$

---

## 4. Estratègia d'Inversió i "*Pacing*" del Pressupost publicitari

El repartiment temporal del pressupost publicitari és un altre pilar crític de la planificació financera. No tot el pressupost s'ha de gastar durant el cap de setmana del Black Friday. La campanya s'ha de dividir en tres fases tècniques diferenciades:

### Fase 1: Preescalfament (de l'1 al 15 de novembre)
*   **Objectiu:** Captar leads qualificats i poblar les llistes de retargeting d'alta intenció. Els CPMs i CPCs encara són estables.
*   **Tàctica:** Campanyes orientades a subscripcions a butlletins informatius (*Newsletter*) oferint "accés prioritari" o un descompte addicional exclusiu per a subscriptors.
*   **Pacing:** $20\%$ del pressupost total de la campanya.

### Fase 2: Conversió i Impacte (Black Friday Week - Cyber Monday)
*   **Objectiu:** Conversió màxima de la demanda acumulada.
*   **Tàctica:** Retargeting massiu a les audiències captades a la Fase 1, llistes de correu existents, carrets abandonats i audiències similars estretes (*Lookalikes* de clients amb alt LTV). Ús de controls de puja com *Bid Caps* o *Cost Caps* per evitar pujar a qualsevol preu en pics horaris de competència irracional.
*   **Pacing:** $70\%$ del pressupost total.

### Fase 3: Liquidació i Retenció (Post-Cyber Monday)
*   **Objectiu:** Venda de romanent d'inventari i conversió de retardataris.
*   **Tàctica:** Ofertes de liquidació d'estoc residual i campanyes de fidelització immediata per transformar el comprador del Black Friday en client recurrent.
*   **Pacing:** $10\%$ del pressupost total.

En estructurar les campanyes sota aquest prisma analític i financer, l'e-commerce es blindà contra l'augment desmedido dels costos publicitaris, garantint que cada venda executada durant el cap de setmana més competitiu de l'any contribueixi positivament al balanç final de l'empresa.
