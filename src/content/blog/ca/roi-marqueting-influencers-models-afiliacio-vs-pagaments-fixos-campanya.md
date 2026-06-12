---
title: "El ROI del màrqueting d'influencers: Models d'afiliació enfront de pagaments fixos per campanya"
description: "Mètriques de retorn i comparació financera entre campanyes d'influencers a comissió o amb tarifa fixa."
pubDate: 2026-11-21
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

El màrqueting d'influencers ha recorregut un llarg camí des de l'època en què les marques pagaven milers d'euros basant-se únicament en mètriques de vanitat, com el nombre de seguidors o la taxa d'interacció (engagement rate) estimada d'un perfil. Avui dia, aquesta disciplina es tracta amb el mateix rigor analític que els canals de compra de mitjans de pagament (Paid Media). Els directors financers i de growth exigeixen mètriques precises del retorn de la inversió (ROI) abans d'aprovar pressupostos per a col·laboracions amb creadors de contingut.

A l'hora d'estructurar financerament una campanya amb influencers, les marques s'enfronten a un dilema recurrent: **És preferible pactar un pagament fix per publicació (Flat Fee) o implementar un model d'afiliació a comissió (Revenue Share)?** Tots dos models presenten perfils de risc, costos marginals i retorns esperats radicalment oposats. En aquest article tècnic, desglossarem les fórmules financeres d'ambdós esquemes, analitzarem els seus avantatges i inconvenients i determinarem el punt d'equivalència matemàtica per decidir quin utilitzar en cada escenari.

---

## Modelatge Financer dels Esquemes de Pagament

Per avaluar la rendibilitat real d'una campanya amb influencers, primer hem de formalitzar el benefici net de l'acció. Definim:
*   $V$: Volum total de comandes generades per l'influencer.
*   $P$: Valor Mitjà de la Comanda o Tiquet Mitjà (AOV).
*   $COGS_{\text{u}}$: Cost de béns venuts unitari.
*   $S_{\text{u}}$: Despeses d'enviament i logística per comanda.
*   $M_{\text{u}}$: Marge de contribució unitari abans de costos de màrqueting ($M_{\text{u}} = P - COGS_{\text{u}} - S_{\text{u}}$).
*   $C$: Cost total de la campanya de màrqueting.

El Benefici Net ($B_{\text{net}}$) de la campanya es calcula com:

$$B_{\text{net}} = V \times M_{\text{u}} - C$$

I el Retorn sobre la Inversió (ROI) net com:

$$\text{ROI} = \frac{B_{\text{net}}}{C} \times 100$$

---

## Model A: Pagament Fix per Campanya (Flat Fee)

En aquest model, el cost de la campanya ($C$) és una constant fixa preestablerta amb l'influencer o la seva agència de representació.

$$C = C_{\text{fix}}$$

Per tant, la rendibilitat de la campanya depèn completament de la capacitat del creador per generar volum de conversió ($V$). Les equacions queden configurades de la manera següent:

$$\text{ROI}_{\text{fix}} = \frac{V \times (P - COGS_{\text{u}} - S_{\text{u}}) - C_{\text{fix}}}{C_{\text{fix}}} \times 100$$

### Característiques de risc:
*   **Risc de Conversió:** Assumit al $100\%$ per la marca. Si la campanya no genera vendes ($V = 0$), la pèrdua neta és igual a $C_{\text{fix}}$.
*   **Marge de Benefici Il·limitat:** Si la campanya es fa viral i genera un volum massiu de vendes ($V \to \infty$), el cost de màrqueting per unitat venuda tendeix a zero, maximitzant la rendibilitat.

---

## Model B: Afiliació Pura (Revenue Share)

Sota aquest enfocament, l'influencer rep un percentatge de comissió ($c_{\text{afiliat}}$) sobre el valor de les vendes brutes generades a través del seu enllaç UTM d'afiliat o el seu codi promocional únic.

$$C = V \times P \times c_{\text{afiliat}} + C_{\text{setup}}$$

On $C_{\text{setup}}$ representa costos fixos de configuració o enviament de mostres de producte sense cost. Assumint que $C_{\text{setup}} = 0$ per simplificar la comparació directa, el ROI es calcula com:

$$\text{ROI}_{\text{afiliat}} = \frac{V \times M_{\text{u}} - (V \times P \times c_{\text{afiliat}})}{V \times P \times c_{\text{afiliat}}} \times 100$$

Eliminant la variable del volum ($V$) del numerador i denominador:

$$\text{ROI}_{\text{afiliat}} = \frac{M_{\text{u}} - P \times c_{\text{afiliat}}}{P \times c_{\text{afiliat}}} \times 100 = \left( \frac{M_{\text{u}}}{P \times c_{\text{afiliat}}} - 1 \right) \times 100$$

> [!NOTE]
> En un model d'afiliació pura, el ROI net de la campanya és constant i independent del volum de vendes generades. La rendibilitat queda assegurada des del primer euro facturat.

---

## El Punt d'Equilibri de Volum (Break-Even Volume)

Per determinar en quin moment una marca ha d'optar per negociar una tarifa fixa en lloc d'una comissió per afiliació, hem d'igualar els costos d'ambdós models. Definim el **Volum d'Equivalència ($V^*$)** com el nombre de comandes on el cost per afiliació iguala la tarifa fixa:

$$C_{\text{fix}} = V^* \times P \times c_{\text{afiliat}}$$

Aïllant $V^*$:

$$V^* = \frac{C_{\text{fix}}}{P \times c_{\text{afiliat}}}$$

### Cas Pràctic de Presa de Decisions:
Una marca de moda sostenible negocia una col·laboració amb un influencer d'estil de vida. Es presenten dues opcions sobre la taula:
*   **Opció A (Fix):** Pagament únic de $2.000\ \text{€}$.
*   **Opció B (Afiliat):** Comissió del $15\%$ sobre les vendes facturades ($c_{\text{afiliat}} = 0{,}15$).
*   **Dades del Producte:** El tiquet mitjà ($\text{AOV}$ o $P$) és de $80\ \text{€}$. El marge de contribució unitari ($M_{\text{u}}$) és de $45\ \text{€}$.

Calculem el Volum d'Equivalència ($V^*$):

$$V^* = \frac{2.000\ \text{€}}{80\ \text{€} \times 0{,}15} = \frac{2.000}{12} \approx 167\ \text{comandes}$$

*   **Si l'influencer genera menys de $167$ comandes:** El cost efectiu del model d'afiliació hauria estat inferior al pagament fix. Per tant, el model d'afiliació protegeix el ROI de la marca.
*   **Si l'influencer genera més de $167$ comandes:** El cost del model fix s'amortitza millor i el cost per adquisició (CPA) unitari comença a reduir-se, oferint un ROI global significativament superior al del model de comissions.

```
Volum de Vendes (V)
  | 
  |--------------------> V > V* (167 comandes): Triar Pagament Fix (Cost mitjà decreix)
  |
  +--------------------> V = V* (167 comandes): Punt d'Indiferència Financera
  |
  |--------------------> V < V* (167 comandes): Triar Afiliació (Baix cost i risc protegit)
```

---

## Comparativa de Perfils Financers

| Mètrica / Aspecte | Model Pagament Fix (Flat Fee) | Model Afiliació (Revenue Share) |
| :--- | :--- | :--- |
| **Cost Total d'Adquisició** | Predictible i invariable al volum. | Variable i directament proporcional al volum. |
| **Cost per Adquisició Unitari (CAC)** | Decreixent a major volum ($CAC = C_{\text{fix}} / V$). | Constant i invariable ($CAC = P \times c_{\text{afiliat}}$). |
| **Risc Financer** | Molt Alt (Risc de fracàs o nul·la conversió). | Molt Baix o Nul (Pagament després de validació d'ingressos). |
| **Alineació d'Interessos** | Baixa (El creador cobra independentment de les vendes). | Alta (L'incentiu del creador és maximitzar la conversió). |
| **Atracció de Talent (Tier 1/2)** | Excel·lent (Els creadors prefereixen ingressos garantits). | Baixa (Els grans creadors no assumeixen el risc de conversió). |

---

## Models Híbrids: L'Equilibri Òptim

Atès que la majoria dels influencers amb comunitats actives i de qualitat rebutgen els models d'afiliació pura a causa de la incertesa, la tendència dominant en marques madures és la implementació de **models híbrids**.

Aquests consisteixen en un petit pagament base fix per cobrir els costos de producció i enviament de mostres del creador, sumat a una comissió variable reduïda per cada venda certificada:

$$C_{\text{híbrid}} = C_{\text{base}} + V \times P \times c_{\text{reduïda}}$$

### Avantatges del model híbrid:
1.  **Redueix el risc inicial de la marca:** En no desemborsar tarifes elevades sense certificar el rendiment.
2.  **Incentiva la conversió:** A diferència del pagament fix clàssic, l'influencer continua motivat per optimitzar el seu discurs de venda i fer seguiment (follow-up) de la seva audiència, incrementant la freqüència d'impactes per impulsar l'ús del seu codi de descompte.
3.  **Facilita la negociació:** Proporciona seguretat financera bàsica per al creador alhora que respecta els límits de rendibilitat del negoci.

## Conclusió

L'elecció entre models fixos o d'afiliació per al màrqueting d'influencers no ha de fonamentar-se en intuïcions. Requereix un desglossament rigorós del volum d'equivalència ($V^*$) en funció del tiquet mitjà de la teva botiga i el marge de contribució. Per a marques que comencen o amb recursos limitats, el model d'afiliació o híbrid és idoni per salvaguardar el flux de caixa. A mesura que es disposa de dades històriques de conversió i es treballa amb creadors recurrents de rendiment predictible, migrar cap a pagaments fixos negociats permetrà maximitzar les economies d'escala i exprimir el ROI al màxim.
