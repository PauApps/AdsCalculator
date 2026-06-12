---
title: "Anàlisi de cohorts: El secret analític per descobrir quan es torna rendible un client"
description: "Com segmentar clients per mes d'adquisició per fer el seguiment de l'LTV real, el període de recuperació del CAC i la rendibilitat a llarg termini."
pubDate: 2026-12-14
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

Un dels errors més generalitzats en el màrqueting digital de resultats és avaluar la rendibilitat de les campanyes basant-se exclusivament en el retorn de la inversió publicitària del primer dia o de la primera setmana. En indústries d'alta recurrència, com el programari com a servei (SaaS) o el comerç electrònic de recompra (nutrició, cosmètica, moda), la primera transacció sovint genera pèrdues o amb prou feines cobreix el cost d'adquisició del client (CAC). Si optimitzes les teves campanyes basant-te únicament en el ROAS d'adquisició inicial, estaràs infravalorant els teus millors canals de trànsit i frenant el creixement del teu negoci.

L'**anàlisi de cohorts** és l'eina analítica definitiva per solucionar aquesta ceguesa. Ens permet agrupar els clients segons la seva data d'adquisició i fer un seguiment precís del seu comportament i valor al llarg del temps. A continuació, explorarem en detall la metodologia matemàtica i pràctica de l'anàlisi de cohorts per identificar quan un client comença a generar beneficis reals nets.

---

## Què és una cohort i per què el CAC mitjà t'enganya?

En analítica web i màrqueting digital, una **cohort** és un grup d'usuaris que comparteixen una característica comuna durant un període de temps específic. En el context de la rendibilitat, la segmentació més rellevant és la **cohort d'adquisició temporal**, típicament agrupada pel mes en què van fer la seva primera compra.

L'anàlisi tradicional sol comparar el CAC global amb el valor mitjà de comanda (AOV) de forma agregada:

$$\text{CAC Mitjà} = \frac{\text{Despesa Total en Màrqueting}}{\text{Total de Nous Clients Adquirits}}$$

Si el teu CAC mitjà és de 40 € i el teu AOV és de 35 €, un anàlisi superficial suggeriria que estàs perdent 5 € per client i que les teves campanyes publicitàries no són rendibles. No obstant això, aquest enfocament ignora les compres repetides que el client fa en els mesos següents. En fer una anàlisi de cohorts, descobrim quin capital incremental injecta aquest grup de clients al negoci al llarg del seu cicle de vida, revelant el seu valor real.

---

## La base matemàtica de l'LTV per cohort

El **Customer Lifetime Value (LTV)** o Valor de Vida del Client s'ha de calcular per cohort i ajustar-lo pel marge de contribució per obtenir una mètrica financera real i útil.

La fórmula matemàtica per calcular l'LTV acumulat d'una cohort $c$ al mes $t$ és:

$$LTV_c(t) = \sum_{i=1}^{t} V_{c,i} \times M_c$$

On:
*   $LTV_c(t)$ és el Lifetime Value acumulat de la cohort $c$ fins al mes $t$.
*   $V_{c,i}$ representa la facturació o ingressos mitjans per client de la cohort $c$ durant el mes o període específic $i$.
*   $M_c$ es el **Marge de Contribució percentual** (expressat en decimals) de la cohort, descontant els costos de producte (COGS), comissions de pagament i logística de lliurament.

Aquest marge de contribució és clau. Si utilitzes els ingressos bruts en lloc del marge brut per al càlcul de l'LTV, estaràs sobreestimant massivament la rendibilitat i cometent un greu error de planificació financera.

---

## Determinació del Període de Recuperació (Payback Period)

L'objectiu central d'aquesta anàlisi és determinar el **Payback Period** (o període de recuperació de la inversió en adquisició). Aquest és el moment exacte en el temps on l'LTV acumulat i ajustat al marge iguala el cost pagat per adquirir aquesta cohort de clients.

Matemàticament, el Payback Period es defineix com el valor menor de $t$ (expressat en mesos) que satisfà la condició següent:

$$LTV_c(t) \ge CAC_c$$

On $CAC_c$ és el cost d'adquisició específic d'aquesta cohort $c$.

### Exemple visual a través d'una matriu de cohorts:

Imaginem un comerç electrònic de venda de cafè per subscripció mensual. Registrem les dades següents per a la cohort de clients adquirits al **Gener (M1)**:

*   **Clients nous adquirits:** 1.000
*   **Inversió en anuncis (Meta Ads):** 30.000 €
*   **CAC de la cohort:** $CAC = \frac{30.000}{1.000} = 30\ \text{€}$
*   **Marge de contribució net:** 60% ($M_c = 0,60$)

Analitzem l'evolució dels ingressos i l'LTV de la cohort durant els primers 4 mesos:

| Període (Mes) | Ingressos Totals de la Cohort | Ingressos per Client ($V_{c,i}$) | LTV Unitari Mensual ($V_{c,i} \times 0,60$) | LTV Acumulat ($LTV_c(t)$) | ROI de la Cohort ($LTV_c(t) / CAC$) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mes 1 (Gener)** | 35.000 € | 35,00 € | 21,00 € | 21,00 € | 0,70x (No rendible) |
| **Mes 2 (Febrer)** | 12.000 € | 12,00 € | 7,20 € | 28,20 € | 0,94x (Punt d'equilibri) |
| **Mes 3 (Març)** | 8.000 € | 8,00 € | 4,80 € | **33,00 €** | **1,10x (Rendible)** |
| **Mes 4 (Abril)** | 6.500 € | 6,50 € | 3,90 € | 36,90 € | 1,23x (Rendible) |

### Anàlisi del cas pràctic:
*   Al **Mes 1**, els clients compren per valor de 35 € de mitjana. Després de descomptar el COGS i la logística, ens queden 21 € de marge. Com que el CAC ha estat de 30 €, estem perdent 9 € per client adquirit.
*   Al **Mes 2**, part d'aquests clients tornen a comprar o paguen la seva subscripció. Generen 12 € addicionals per usuari de facturació (promitjat sobre el total inicial de la cohort). L'LTV acumulat puja a 28,20 €.
*   Al **Mes 3**, l'LTV acumulat puja a 33,00 €, superant oficialment els 30 € del CAC.
*   **Resultat:** El **Payback Period** d'aquest canal de trànsit és de **3 mesos**. A partir d'aquest moment, cada euro addicional que compri la cohort de gener és pur benefici net per a la companyia.

---

## Com implementar l'anàlisi de cohorts al teu negoci

Per estructurar aquesta anàlisi al teu comerç electrònic o startup, has de seguir una sèrie de passos analítics:

1.  **Extracció de dades transaccionals netes:** Necessites un llistat històric de comandes que inclogui l'identificador únic del client, la data de la transacció, el valor de la comanda i el marge associat.
2.  **Identificació de la data de naixement (Adquisició):** Assigna a cada client el seu primer mes de compra. Aquesta serà la seva marca de cohort inalterable.
3.  **Càlcul d'ingressos agregats per període:** Suma els ingressos generats pels membres de cada cohort en els períodes de temps transcorreguts (Mes 0, Mes 1, Mes 2, etc.).
4.  **Creuar amb els costos d'adquisició (CAC):** Importa les dades de despesa publicitària real de les plataformes d'anuncis corresponents a cada mes per calcular el CAC exacte d'aquesta cohort.

## Conclusió

L'anàlisi de cohorts canvia les regles del joc a l'hora d'escalar campanyes de màrqueting de resultats. Et permet veure la rendibilitat real dels teus esforços publicitaris a llarg termini, alliberant el potencial d'escalar canals amb un ROI inicial baix però amb un LTV de retenció excepcional. Deixa de mesurar l'èxit amb mètriques estàtiques i introdueix l'anàlisi de cohorts al teu quadre de comandament mensual per prendre decisions financeres intel·ligents i basades en dades reals.
