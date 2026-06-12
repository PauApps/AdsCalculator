---
title: "Campanyes de Branding vs. Performance: Com mesurar el retorn de la inversió a llarg termini"
description: "Metodologies per equilibrar i avaluar la rendibilitat del branding i de la captació directa de clients."
pubDate: 2026-09-24
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

Un dels debats més recurrents als comitès de direcció i als departaments de màrqueting digital és la distribució del pressupost publicitari entre campanyes de **Branding** (construcció de marca) i campanyes de **Performance** (màrqueting de resposta directa). Amb l'arribada dels dashboards en temps real, les marques s'han tornat addictes al ROAS d'últim clic immediat. Aquesta obsessió per l'atribució directa ha relegat el branding a un segon pla, sota l'argument que «no es pot mesurar de forma precisa».

Tot i això, prioritzar exclusivament el performance provoca una saturació accelerada dels canals d'adquisició, encareix el cost per client (CAC) i limita el creixement del negoci a llarg termini. En aquesta guia explorarem les metodologies analítiques per mesurar el retorn de la inversió del branding a llarg termini i com equilibrar de manera òptima ambdós enfocaments.

---

## 1. El Dilema del Curt vs. Llarg Termini

El màrqueting de **Performance** captura la demanda existent. El seu objectiu és convertir els usuaris que ja tenen una intenció de compra activa en clients de la manera més ràpida i econòmica possible.
El màrqueting de **Branding** crea demanda futura. El seu objectiu és construir associacions mentals i identitat de marca en una audiència àmplia que avui no està preparada per comprar, però que ho estarà en els propers mesos o anys.

Els reconeguts investigadors Les Binet i Peter Field van determinar en els seus extensos estudis sobre eficàcia publicitària la regla del **60:40**. De mitjana, per maximitzar el creixement sostenible, les marques han de destinar aproximadament un $60\%$ del seu pressupost a campanyes de branding i un $40\%$ a campanyes de performance.

Si inverteixes el $100\%$ en performance, obtindràs un pic immediat de conversions, però aviat toparàs amb un sostre de vidre: el pool d'usuaris preparats per comprar s'esgota i els costos de subhasta es disparen, reduint la rendibilitat global.

---

## 2. Metodologies Modernes per Mesurar el Retorn del Branding

Mesurar el branding no consisteix a comptar impressions o «likes». Requereix metodologies científiques que aïllin l'impacte de la marca en els resultats de negoci.

### A. Share of Search (Quota de Cerca)

El *Share of Search* (SoS) ha demostrat tenir una correlació directa del 80-90% amb la quota de mercat (*Market Share*) en la majoria d'indústries de consum i B2B. Mesura la proporció de cerques a Google de la teva marca en comparació amb el volum total de cerques dels teus principals competidors.

La fórmula de càlcul del Share of Search per a la Marca A és:

$$SoS_A = \left( \frac{\text{Volum de Cerques de la Marca A}}{\sum_{i=1}^{n} \text{Volum de Cerques de la Marca } i} \right) \times 100$$

On el denominador representa la suma del volum de cerques de totes les marques rellevants de la mateixa categoria.

**Com auditar-ho:** Fes servir eines com Google Trends o APIs de cerca de paraules clau per recopilar la freqüència de cerca històrica mensual de la teva marca i de la competència. Si les teves campanyes de branding són efectives, el teu $SoS$ experimentarà un creixement sostingut, que sol precedir un augment en les vendes orgàniques i directes de la companyia.

### B. Proves d'Incrementalitat (Geo-Testing i Lift Studies)

L'atribució tradicional assigna el valor d'una compra a l'últim punt de contacte publicitari. Això assumeix erròniament que, si l'usuari no hagués vist l'anunci, no hauria comprat. Les proves d'incrementalitat resolen aquest problema mitjançant experiments controlats (A/B testing a nivell de mercat):

1. **Brand Lift Studies:** Fan servir enquestes dins de plataformes com YouTube, Meta o xarxes de display per comparar el record de l'anunci (*Ad Recall*) i la consideració de marca entre un grup exposat a l'anunci de branding i un grup de control que no l'ha vist.
2. **Geo-Testing:** Divideix un país en regions geogràfiques amb comportaments de compra històricament similars. A les regions del grup de prova, s'activen campanyes de branding intensives, mentre que al grup de control es manté l'activitat publicitària base (performance estàndard). La diferència de volum de vendes net acumulat entre les dues zones geogràfiques determina el retorn marginal del branding.

### C. Modelatge de Mix de Màrqueting (MMM)

El *Marketing Mix Modeling* (MMM) és una tècnica estadística basada en models econometrics i regressions multivariants. Analitza dades històriques de vendes (generalment de 2 a 3 anys) juntament amb variables d'inversió publicitària per canals i factors externs (estacionalitat, accions de la competència, crisis macroeconòmiques, canvis de preus) per aïllar el retorn real de cada canal de comunicació.

A través d'un model MMM, es calcula l'efecte d'arrossegament o *adstock* de les campanyes de branding. L'adstock representa l'impacte residual acumulatiu de la publicitat en la ment del consumidor, que es degrada amb el temps segons una taxa de desvaniment matemàtic ($\lambda$):

$$Adstock_t = \text{Inversió}_t + \lambda \times Adstock_{t-1}$$

On $0 < \lambda < 1$. Les campanyes de branding solen tenir una taxa de desvaniment baixa (és a dir, el record persisteix durant mesos), contribuint a la línia base de vendes orgàniques de l'empresa.

---

## 3. Avaluant el ROI a Llarg Termini (LT-ROI)

Per quantificar financerament el valor del branding a llarg termini, hem d'incorporar la mètrica de Valor del Temps de Vida del Client (LTV). Si el branding millora la confiança i la reputació, no només atrau clients més barats en el futur, sinó que sol captar clients amb una major propensió a la recompra i amb menor sensibilitat al preu (major marge unitari).

Definim el ROI a Llarg Termini ($LT\text{-}ROI$) com:

$$LT\text{-}ROI = \frac{\Delta \text{Valor Total de Vida Creat} - \text{Inversió en Branding}}{\text{Inversió en Branding}}$$

On el $\Delta \text{Valor Total de Vida Creat}$ s'estima projectant les vendes orgàniques netes i la retenció del client en el temps lliure de l'efecte directe dels anuncis de resposta directa.

---

## 4. El Concepte de Brandformance: Integració Pràctica

Per evitar la fricció organitzativa, les empreses de creixement ràpid apliquen una estratègia híbrida anomenada **Brandformance**. Consisteix a dissenyar campanyes amb objectius de branding (comunicació de valors de marca, resolució de problemes comuns, diferenciació competitiva) però estructurades i segmentades en canals digitals amb capacitats d'optimització tècniques i de mesura avançades.

### Full de Ruta per Assignar Pressupostos segons la Fase de Maduresa

1. **Fase de Llançament / Startup (Primers 12 mesos):** L'enfocament inicial s'ha d'inclinar cap al performance ($70\%$ Performance / $30\%$ Branding) per assegurar l'encaix producte-mercat (*product-market fit*), generar tracció de caixa immediata i capturar la demanda ja existent.
2. **Fase d'Escalament (1-3 anys):** La quota s'ha d'equilibrar progressivament fins a un $50/50$. La marca comença a consolidar-se i els canals de performance purs comencen a patir fatiga d'audiències.
3. **Líder de Categoria (Més de 3 anys):** Implementació de l'equilibri òptim de Binet i Field ($60\%$ Branding / $40\%$ Performance) per alimentar constantment la part superior de l'embut de vendes i mantenir la notorietat i preferència de marca davant els competidors.

Tractar el branding com un cost inútil o indetectable és una manca de visió estratègica i financera. Amb les eines d'anàlisi de dades i metodologies econometriques actuals, mesurar el retorn de la marca a llarg termini no és només possible, sinó imperatiu per garantir la viabilitat econòmica i el creixement del negoci en entorns altament competitius.
