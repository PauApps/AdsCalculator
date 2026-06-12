---
title: "Com calcular el cost d'adquisició de clients (CAC) ponderat per canal"
description: "Aprèn a calcular el Cost d'Adquisició de Clients (CAC) ponderat per canal amb fórmules matemàtiques i financeres avançades per al teu negoci digital."
pubDate: 2026-07-12
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

El **Cost d'Adquisició de Clients (CAC)** és, juntament amb el Valor del Temps de Vida del Client (LTV), el pilar fonamental que determina la viabilitat financera de qualsevol negoci digital. Tant si gestiones una startup SaaS, un comerç electrònic o una empresa de serveis B2B, conèixer amb precisió quants diners costa atreure un nou comprador és crític per planificar l'escala del negoci o assegurar rondes d'inversió.

Tanmateix, la immensa majoria de les organitzacions calculen el CAC de manera simplista, dividint la inversió publicitària mensual pel nombre total de clients adquirits. Aquest enfocament, conegut com a CAC Blended (o mitjà), oculta ineficiències greus i pot portar a prendre decisions pressupostàries desastroses.

Per obtenir una visió analítica i impecable, els analistes de creixement han de dominar el **CAC ponderat per canal**, una metodologia tècnica que distribueix tant els costos d'inversió directa com els costos indirectes (agències, eines, salaris i comissions) sobre els canals d'adquisició corresponents. En aquesta guia, desglossarem les fórmules matemàtiques i els passos pràctics per realitzar aquest càlcul.

---

## Per què el CAC Blended bàsic oculta la realitat

El càlcul tradicional del CAC es regeix sota la següent fórmula elemental:

$$CAC_{Blended} = \frac{\text{Despesa Total de Vendes i Màrqueting}}{\text{Total de Nous Clients Adquirits}}$$

Encara que aquesta mètrica és de gran utilitat perquè l'equip directiu revisi el rendiment macro de l'empresa, és inútil per a l'assignació diària de pressupostos. Suposem que una empresa adquireix 1.000 clients al mes amb un cost total de màrqueting de 20.000 €. El seu CAC Blended és de **20 €**.

El perill radica en el fet que aquesta mitjana aritmètica difumina la gran disparitat de rendiment que acostuma a haver-hi entre els canals:
* **Canal A (Cerca Orgànica - SEO):** Adquireix 600 clients amb una inversió mínima de manteniment. El seu CAC real podria ser de 3 €.
* **Canal B (Meta Ads):** Adquireix 400 clients mitjançant una intensa inversió en anuncis. El seu CAC real podria estar en 45 €.

Si l'equip de creixement decideix duplicar el pressupost creient que el cost de captació mitjà és saludable (20 €), injectarà la major part del capital a Meta Ads (el canal escalable de pagament), fent que el CAC blended general es dispari i arruïni la rendibilitat del negoci.

---

## La metodologia del CAC Ponderat per Canal

Per obtenir el **CAC Ponderat ($CAC_{p}$)** d'un canal específic, hem d'imputar proporcionalment dues categories de despeses:

1. **Costos Directes:** Inversió publicitària consumida pel canal (Ad Spend).
2. **Costos Indirectes / Operatius:** Despeses no publicitàries que permeten que el canal funcioni (salaris de l'equip, honoraris d'agències externes, subscripcions de programari analític i costos creatius de disseny d'anuncis).

### La fórmula matemàtica del CAC Ponderat per Canal ($CAC_{p, i}$)

Per calcular el cost ponderat d'un canal publicitari individual $i$, utilitzem l'equació següent:

$$CAC_{p, i} = \frac{AdSpend_{i} + (\text{Costos Indirectos Totals} \times W_{i})}{Clients_{i}}$$

*On:*
* $AdSpend_{i}$ és el pressupost publicitari directe consumit pel canal $i$ en el període avaluat.
* $Clients_{i}$ és el nombre de nous clients atribuïts de manera fiable a aquest canal $i$ (utilitzant models d'atribució consistents).
* $\text{Costos Indirectos Totals}$ és el cost agregat de salaris, agències i programari de màrqueting durant el període.
* $W_{i}$ és el **factor de pes (weight)** assignat al canal $i$. Aquest factor representa la proporció de temps, esforç humà o recursos de programari dedicats a donar suport a aquest canal, on la suma de tots els pesos de l'empresa ha de ser igual a 1 ($\sum W_i = 1.0$).

---

## Cas Pràctic: Càlcul de CAC Ponderat pas a pas

Imaginem un negoci de comerç electrònic de moda que ven a través de tres canals principals: **Facebook Ads**, **Google Ads** i **Trànsit Orgànic (SEO / Directe)**.

### Dades del període (Un mes d'operació):
* **Inversió directa (Ad Spend):**
  * Facebook Ads: 10.000 €
  * Google Ads: 5.000 €
  * SEO / Orgànic: 0 € (Ad Spend directe)
* **Nous clients adquirits:**
  * Facebook Ads: 400 clients
  * Google Ads: 250 clients
  * SEO / Orgànic: 350 clients
  * *Clients Totals:* 1.000 clients
* **Costos Indirectes de l'empresa (Vendes i Màrqueting):**
  * Salari de la plantilla interna de màrqueting: 6.000 €
  * Honoraris de l'Agència de Facebook Ads: 2.000 € (cost específic per a Facebook)
  * Eines de programari (Shopify, analítiques, CRM): 2.000 €
  * *Costos Indirectos Totals:* 10.000 €

### Pas 1: Distribució específica i indirecta de costos
Abans d'aplicar la fórmula general, hem de separar els costos indirectes específics (com l'agència que només gestiona una plataforma) i distribuir proporcionalment la resta de costos comuns (salaris i programari) estimant l'esforç real ($W_i$) dels equips en cada canal:

* **Esforç estimat de l'equip ($W_i$):**
  * Facebook Ads ($W_{FB}$): 0.50 (el 50% del temps dels dissenyadors i gestors es dedica a creatius de vídeo per a Meta).
  * Google Ads ($W_{GG}$): 0.30 (el 30% de l'esforç es dedica a optimitzar les fitxes de Google Shopping i paraules clau).
  * SEO ($W_{SEO}$): 0.20 (el 20% de l'esforç es dedica a redactar articles de blog i optimització tècnica on-page).

### Pas 2: Càlcul del Cost Ponderat Total per Canal
Procedim a sumar a la inversió d'anuncis els costos assignats proporcionalment:

#### 1. Facebook Ads:
* Ad Spend: 10.000 €
* Costos indirectes assignats: Agència (2.000 € específics) + 50% de les despeses comunes (8.000 € de salaris i eines) = $2.000\ \text{€} + 4.000\ \text{€} = 6.000\ \text{€}$.
* **Cost Ponderat Total:** $10.000\ \text{€}\ (Ads) + 6.000\ \text{€}\ (indirectes) = 16.000\ \text{€}$.
* **CAC Ponderat:** $\frac{16.000\ \text{€}}{400\ \text{clients}} = 40\ \text{€}$

#### 2. Google Ads:
* Ad Spend: 5.000 €
* Costos indirectes assignats: 30% de les despeses comunes = $0.30 \times 8.000\ \text{€} = 2.400\ \text{€}$.
* **Cost Ponderat Total:** $5.000\ \text{€}\ (Ads) + 2.400\ \text{€}\ (indirectes) = 7.400\ \text{€}$.
* **CAC Ponderat:** $\frac{7.400\ \text{€}}{250\ \text{clients}} = 29,60\ \text{€}$

#### 3. SEO / Orgànic:
* Ad Spend: 0 €
* Costos indirectes assignats: 20% de les despeses comunes = $0.20 \times 8.000\ \text{€} = 1.600\ \text{€}$.
* **Cost Ponderat Total:** $0\ \text{€}\ (Ads) + 1.600\ \text{€}\ (indirectes) = 1.600\ \text{€}$.
* **CAC Ponderat:** $\frac{1.600\ \text{€}}{350\ \text{clients}} = 4,57\ \text{€}$

---

## Taula Comparativa: CAC de Plataforma vs. CAC Ponderat

| Canal d'Adquisició | Clients Adquirits | CAC de Plataforma (Només Ad Spend) | CAC Ponderat (Amb despeses indirectes) | Desviació / Subestimació |
| :--- | :--- | :--- | :--- | :--- |
| **Facebook Ads** | 400 | 25,00 € | 40,00 € | +60.0% (El cost real és molt major) |
| **Google Ads** | 250 | 20,00 € | 29,60 € | +48.0% |
| **SEO / Orgànic** | 350 | 0,00 € | 4,57 € | N/A |
| **Blended (General)** | **1.000** | **15,00 €** *(només Ads)* | **25,00 €** *(total despeses)* | **+66.6%** |

Com es pot apreciar a la taula, avaluar el rendiment publicitari basant-te únicament en el CAC de plataforma o el CAC blended ocultaria el fet que **Facebook Ads et costa en realitat 40 € per client**, un 60% més del que indica el panell publicitari. Si el teu marge de contribució per client és de 35 €, Facebook Ads en realitat està operant en pèrdues netes per a l'empresa.

---

## Decisions Estratègiques basades en el CAC Ponderado

Una vegada que tens les dades de CAC ponderat per canal, has de creuar-les amb el **LTV (Valor del Cicle de Vida del Client)** específic de cada canal per guiar les decisions d'inversió:

1. **Monitorar la Ràtio LTV/CAC:** L'estàndard de la indústria dicta que aquesta ràtio ha de ser superior a **3:1** (és a dir, el valor del client ha de triplicar el cost d'adquisició). Si el CAC ponderat de Facebook Ads dona una ràtio d'1.8:1 a causa dels alts honoraris de l'agència, has de replantejar-te la internalització del canal o renegociar la comissió del proveïdor.
2. **Identificar la saturació de canals:** Si observes que el CAC ponderat d'un canal de pagament augmenta mes a mes a mesura que incrementes la inversió (rendiments decreixents), és senyal que has assolit la saturació d'aquella audiència. És moment de traslladar el pressupost marginal a canals amb un CAC ponderat inferior.

## Conclusió

Calcular el CAC ponderat per canal requereix un esforç analític addicional per registrar els costos operatius i assignar pesos de dedicació interna a cada canal. Tanmateix, és l'únic mètode financer vàlid per conèixer la rendibilitat real dels teus esforços d'adquisició. En incorporar el cost de les eines, el personal i les agències associades a cada font de trànsit, transformaràs les dades brutes en intel·ligència de negoci precisa per escalar amb seguretat i consistència.
