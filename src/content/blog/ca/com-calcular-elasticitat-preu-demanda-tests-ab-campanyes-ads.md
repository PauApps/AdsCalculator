---
title: "Com calcular l'elasticitat preu de la demanda fent servir tests A/B en les teves campanyes d'Ads"
description: "Formulació i tests publicitaris per mesurar la sensibilitat dels clients als canvis de preu."
pubDate: 2027-01-07
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

En l'ecosistema del comerç electrònic i els negocis digitals, fixar el preu òptim d'un producte és una de les decisions més crítiques i complexes. Un preu massa alt pot allunyar els clients potencials i enfonsar la taxa de conversió; un preu massa baix pot erosionar els marges de benefici, deixant el negoci sense recursos per finançar l'adquisició de trànsit de pagament.

Tradicionalment, les empreses estimaven la sensibilitat al preu mitjançant enquestes d'intenció de compra (com el mètode de Van Westendorp) o mitjançant complexos anàlisis històrics de dades de vendes. Tanmateix, les campanyes de publicitat digital (Google Ads, Meta Ads, TikTok Ads) ofereixen avui un entorn d'experimentació idoni: un laboratori en temps real on podem realitzar tests A/B empírics per mesurar amb precisió científica l'**elasticitat preu de la demanda**.

A continuació, analitzarem detalladament el model matemàtic de l'elasticitat, com estructurar experiments a les teves plataformes d'ads i com interpretar els resultats per maximitzar els teus ingressos i el teu retorn de la inversió (ROI).

---

## 1. La base econòmica: Què és l'elasticitat preu de la demanda?

L'elasticitat preu de la demanda (EPD o $E_p$) mesura la sensibilitat o capacitat de resposta de la quantitat demandada d'un bé davant d'un canvi en el seu preu. Conceptualment, ens indica en quin percentatge varia la quantitat venuda per cada punt percentual que es modifica el preu de venda.

La fórmula general per calcular l'elasticitat preu és:

$$E_p = \frac{\% \Delta Q}{\% \Delta P}$$

On:
*   $\% \Delta Q$ és el canvi percentual en la quantitat demandada: $\frac{Q_2 - Q_1}{Q_1}$
*   $\% \Delta P$ es el canvi percentual en el preu del producte: $\frac{P_2 - P_1}{P_1}$

Desglossant la fórmula matemàticament, obtenim:

$$E_p = \frac{\frac{Q_2 - Q_1}{Q_1}}{\frac{P_2 - P_1}{P_1}}$$

### Interpretació dels valors de l'elasticitat
Atès que la llei de la demanda estableix una relació inversa entre el preu i la quantitat (a major preu, menor quantitat demandada), el valor d'$E_p$ acostuma a ser negatiu. A la pràctica, els analistes i directors de màrqueting avaluen el valor absolut de l'elasticitat ($|E_p|$):

1.  **Demanda Elàstica ($|E_p| > 1$):** Els consumidors són altament sensibles al preu. Un increment del 10% en el preu provocarà una caiguda de la quantitat demandada superior al 10%. En aquest escenari, apujar el preu redueix els ingressos totals.
2.  **Demanda Inelàstica ($|E_p| < 1$):** Els consumidors mostren poca sensibilitat al preu. Un increment del 10% en el preu provoca una reducció de la quantitat demandada inferior al 10%. Aquí, apujar el preu augmenta la facturació total i el marge.
3.  **Elasticitat Unitària ($|E_p| = 1$):** La variació percentual del preu és exactament igual a la variació percentual de la quantitat demandada. Els ingressos totals es mantenen constants.

---

## 2. Com estructurar el Test A/B a les teves plataformes d'Ads

Per calcular l'elasticitat preu de forma empírica i evitar biaixos estacionals o demogràfics, hem de dissenyar un experiment controlat (Test A/B) on l'única variable modificada sigui el preu de venda exposat a l'usuari.

### Pas 1: Definir els preus de prova
Tria un preu de control ($P_1$) i un preu alternatiu ($P_2$). La diferència entre tots dos ha de ser prou representativa (generalment entre un 10% i un 25%) perquè els algorismes de compra i els usuaris percebin el canvi i generin diferències estadísticament significatives. Per exemple:
*   **Preu de Control ($P_1$):** 49 €
*   **Preu de Variant ($P_2$):** 59 €

### Pas 2: Aïllar i dividir el trànsit publicitari
Perquè el test sigui rigorós, no has de barrejar audiències. Cada usuari ha de veure un únic preu durant tot el cicle de decisió.

*   **A Meta Ads (Facebook/Instagram):** Utilitza l'eina nativa d'**Experiments A/B**. Configura el test dividint les audiències de manera aleatòria i sense solapament (split test). La campanya A dirigirà el trànsit a una landing page amb el preu $P_1$, i la campanya B dirigirà a una landing page idèntica però amb el preu $P_2$.
*   **A Google Ads:** Si utilitzes campanyes de Cerca o Performance Max, pots emprar els **Esborranys i Experiments de Campanya** aplicant una divisió del trànsit basada en la cerca (search splits) o en les galetes (cookies).
*   **A nivell Tècnic al Web:** Implementa eines d'A/B testing al teu lloc (com Google Optimize Alternatives, AB Tasty o VWO) o utilitza aplicacions de Shopify/WooCommerce que modifiquin el preu dinàmicament i de forma consistent segons la galeta de l'usuari, garantint que el preu de la landing page coincideixi exactament amb el del checkout.

### Pas 3: Control de variables externes
Assegura't que:
*   Els anuncis (creatius, copies, formats) siguin idèntics en tots dos grups.
*   Els pressupostos assignats a cada variant siguin iguals.
*   El període del test cobreixi almenys dos cicles complets de compra (habitualment de 14 a 30 dies) per mitigar l'efecte del dia de la setmana.

---

## 3. Cas pràctic de càlcul complet i anàlisi financer

Suposem que gestionem una botiga en línia que ven un producte i hem executat un test A/B publicitari durant 3 setmanes amb la finalitat de provar una pujada de preu. El cost d'adquisició de producte (COGS) unitari és de **15 €**.

Obtenim les següents mètriques de rendiment del test:

| Mètrica / Variant | Variant A (Control) | Variant B (Variant) |
| :--- | :--- | :--- |
| **Preu ($P$)** | 49 € | 59 € |
| **Impressions** | 200.000 | 200.000 |
| **Clics** | 6.000 | 6.000 |
| **Inversió Ads** | 3.000 € | 3.000 € |
| **Conversions ($Q$)** | 240 | 180 |

### Pas A: Calcular les variacions porcentuals

*   **Variació percentual del Preu ($\% \Delta P$):**
    $$\% \Delta P = \frac{59 - 49}{49} = \frac{10}{49} \approx 0,2041\ (20,41\%)$$

*   **Variació percentual de la Quantitat ($\% \Delta Q$):**
    $$\% \Delta Q = \frac{180 - 240}{240} = \frac{-60}{240} = -0,2500\ (-25,00\%)$$

### Pas B: Calcular l'Elasticitat Preu de la Demanda

$$E_p = \frac{-25,00\%}{20,41\%} \approx -1,225$$

El valor absolut és $|E_p| = 1,225$. Com que és superior a 1, concloem que la demanda del nostre producte és **elàstica** en aquest rang de preus. Els usuaris són sensibles al preu, la qual cosa significa que l'augment del 20,41% en el preu va causar una caiguda desproporcionada del 25% en les unitats venudes.

### Pas C: Anàlisi de l'Impacte en el Marge i la Rentabilitat (ROI)
A primera vista, podríem pensar que incrementar el preu és un error a causa de la caiguda de vendes. Però calculem la rendibilitat financera real del negoci:

**Anàlisi de la Variant A (Preu a 49 €):**
*   **Ingressos totals:** $240 \times 49\ \text{€} = 11.760\ \text{€}$
*   **Cost del producte (COGS):** $240 \times 15\ \text{€} = 3.600\ \text{€}$
*   **Marge brut abans de màrqueting:** $11.760\ \text{€} - 3.600\ \text{€} = 8.160\ \text{€}$
*   **Inversió publicitària:** 3.000 €
*   **Benefici Net Real:** $8.160\ \text{€} - 3.000\ \text{€} = 5.160\ \text{€}$
*   **ROAS obtingut:** $\frac{11.760}{3.000} = 3,92$

**Anàlisi de la Variant B (Preu a 59 €):**
*   **Ingressos totals:** $180 \times 59\ \text{€} = 10.620\ \text{€}$
*   **Cost del producte (COGS):** $180 \times 15\ \text{€} = 2.700\ \text{€}$
*   **Marge brut abans de màrqueting:** $10.620\ \text{€} - 2.700\ \text{€} = 7.920\ \text{€}$
*   **Inversió publicitària:** 3.000 €
*   **Benefici Net Real:** $7.920\ \text{€} - 3.000\ \text{€} = 4.920\ \text{€}$
*   **ROAS obtingut:** $\frac{10.620}{3.000} = 3,54$

**Conclusió de l'exemple:** Malgrat que el preu més alt ($P_2 = 59\ \text{€}$) oferís un marge unitari major ($44\ \text{€}$ enfront de $34\ \text{€}$), la caiguda del volum de comandes a causa de l'elasticitat de la demanda va reduir tant els ingressos com el benefici net del negoci en 240 € durant el període de prova. Per tant, l'estratègia òptima sota les condicions actuals d'adquisició és mantenir el preu original de 49 €.

---

## 4. L'efecte de l'elasticitat en l'embut d'Ads (CPA i ROAS)

L'elasticitat del preu no només afecta els registres comptables finals, sinó que altera directament les mètriques de rendiment a les consoles de publicitat. Comprendre aquest impacte és clau per als Traffic Acquisition Specialists.

### Relació entre Taxa de Conversió (CVR) i CPA
Quan incrementem el preu, el fregament en la decisió de compra augmenta, la qual cosa generalment disminueix la taxa de conversió de la landing page ($CVR$). Atès que el cost per clic ($CPC$) tendeix a ser relativament estable a curt termini per a una mateixa audiència, la baixada de la $CVR$ encareix el Cost per Adquisició ($CPA$):

$$\text{CPA} = \frac{\text{CPC}}{\text{CVR}}$$

Si la $CVR$ cau d'un $4\%$ a un $3\%$ amb un $CPC$ de $0,50\ \text{€}$, el $CPA$ s'incrementarà de:

$$\text{CPA}_A = \frac{0,50}{0,04} = 12,50\ \text{€}$$
$$\text{CPA}_B = \frac{0,50}{0,03} = 16,66\ \text{€}$$

### Impacte en el ROAS
El retorn de la inversió publicitària és una funció del valor mitjà de comanda (AOV o preu de venda $P$) i del cost per adquisició ($CPA$):

$$\text{ROAS} = \frac{P}{\text{CPA}} = \frac{P \times \text{CVR}}{\text{CPC}}$$

Si incrementes el preu, el ROAS només pujarà si el percentatge de caiguda de la $CVR$ és inferior al percentatge de pujada del preu. Dit d'una altra manera, si la demanda és inelàstica ($|E_p| < 1$), el ROAS de les teves campanyes millorarà en apujar els preus; si és elàstica ($|E_p| > 1$), el ROAS empitjorarà.

---

## 5. Directrius metodològiques per a un test fiable

Per garantir que els teus càlculs d'elasticitat preu no estiguin biaixats per fluctuacions estadístiques o del mercat, segueix aquestes regles tècniques:

1.  **Assolir significació estadística:** No prenguis decisions amb mostres petites. Utilitza calculadores de significació estadística per assegurar-te que la diferència en la taxa de conversió ($CVR$) entre les variants A i B compta amb un nivell de confiança d'almenys el 95% ($p < 0,05$).
2.  **Mitigar l'efecte novetat:** Les pujades o baixades brutes de preu poden provocar un comportament anòmal inicial en clients recurrents. Si és possible, exclou de les teves campanyes de test els compradors antics i enfoca't únicament en l'adquisició de trànsit fred (trànsit nou).
3.  **Monitorar el valor del temps de vida del client (LTV):** A vegades, un preu inicial més baix genera més volum de clients que, si bé aporten menys benefici immediat, tornen a comprar repetidament en el futur. Si el LTV és alt, pot convenir operar amb una demanda elàstica en primera compra a fi de maximitzar la base de clients a llarg termini.

## Conclusió

L'ús de campanyes de publicitat digital com a eina per testejar preus transforma la fixació de preus (pricing) d'una disciplina basada en la intuïció a una ciència exacta fonamentada en les dades. Calcular l'elasticitat preu de la demanda et permet entendre matemàticament fins a quin punt pots exigir als teus clients abans que el teu volum de conversions es ressenti. En dominar aquestes fórmules i creuar-les amb els teus costos operatius reals i les teves mètriques de captació (CPA i CVR), podràs trobar el punt d'equilibri idoni per escalar el teu negoci de manera previsible i altament rendible.
