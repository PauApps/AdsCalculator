---
title: "Guia definitiva del CPA (Cost per Adquisició): Com calcular el vostre marge net per unitat"
description: "Aprèn a calcular i optimitzar el Cost per Adquisició (CPA) per protegir el teu marge net unitari amb fórmules i exemples pràctics de màrqueting."
pubDate: 2026-06-12
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

En el màrqueting digital, l'atenció sol centrar-se en mètriques visuals i directes com els clics, les impressions i el CTR. Tanmateix, quan es tracta d'avaluar la viabilitat d'un model de negoci transaccional (ja sigui un Ecommerce o un SaaS), hi ha una mètrica reina que vincula directament el rendiment publicitari amb la rendibilitat comptable: el **CPA (Cost per Adquisició)** o *Cost Per Acquisition*.

El CPA és el cost total invertit en aconseguir que un usuari realitzi una acció de conversió específica (generalment una compra o una subscripció de pagament). Si no calculeu correctament el vostre CPA límit i el vostre CPA objectiu basant-vos en l'estructura de costos del vostre negoci, correu el risc de vendre a pèrdues de forma constant. En aquesta guia tècnica, aprendreu les fórmules essencials del CPA, com determinar el vostre marge net unitari a partir d'ell i com optimitzar aquesta mètrica per maximitzar els vostres beneficis.

---

## Diferències entre CPA, CPL i CAC

Abans de submergir-nos en les fórmules, és fonamental aclarir la terminologia, ja que sovint es confonen diversos conceptes de cost unitari:

1. **CPL (Cost per Lead):** Mesura el cost de capturar un registre o client potencial (nom, email, telèfon). No implica una transacció econòmica directa.
2. **CPA (Cost per Adquisició / Conversió):** S'enfoca en una transacció específica (una venda, un registre de pagament, una descàrrega de pagament). En comerç electrònic, equival al cost de generar una comanda.
3. **CAC (Cost d'Adquisició de Client):** És una mètrica financera macro. Suma *tots* els costos de vendes i màrqueting (incloent-hi sous de l'equip, programari d'email màrqueting, comissions d'agències i inversió en anuncis) dividits pel nombre de nous clients aconseguits en un període.

*Nota:* Per a l'optimització de campanyes del dia a dia, utilitzarem principalment el **CPA**.

---

## La fórmula matemàtica del CPA

El càlcul retrospectiu del CPA és senzill:

$$\text{CPA} = \frac{\text{Inversió Total en Publicitat}}{\text{Nombre de Conversions (Vendes) Aconseguides}}$$

Tanmateix, per entendre el comportament de les vostres campanyes, heu de conèixer com es relaciona el CPA amb altres mètriques clau com el **CPC (Cost per Clic)** i la **Taxa de Conversió (CR - Conversion Rate)**:

$$\text{CPA} = \frac{\text{CPC}}{\text{Taxa de Conversió (\%) en format decimal}}$$

### Exemple pràctic de la relació:
Imagineu dos escenaris diferents a les vostres campanyes de trànsit de pagament:
* **Campanya A:** Teniu un CPC de 0,50 € i una taxa de conversió del web del 2% (0,02).
  $$\text{CPA} = \frac{0{,}50\ \text{€}}{0{,}02} = 25\ \text{€}$$
* **Campanya B:** Teniu un CPC d'1,20 € perquè competiu en un nínxol molt demanat, però la vostra taxa de conversió és del 6% (0,06) gràcies a una gran landing page.
  $$\text{CPA} = \frac{1{,}20\ \text{€}}{0{,}06} = 20\ \text{€}$$

Tot i que el CPC de la Campanya B és més del doble de car, l'alta taxa de conversió fa que l'adquisició de cada venda sigui més econòmica (20 € enfront de 25 €). Això demostra per què el CPC de forma aïllada mai no s'ha d'utilitzar per determinar l'èxit d'una campanya.

---

## Com calcular el vostre "CPA Límit" (Breakeven CPA)

El **CPA Límit** és la quantitat màxima de diners que us podeu permetre gastar en publicitat per aconseguir una venda sense perdre diners. Representa el marge brut unitari abans de màrqueting.

La fórmula per calcular el CPA Límit és:

$$\text{CPA Límit} = \text{Preu de Venda (AOV)} - \text{COGS} - \text{Costos d'Enviament i Logística} - \text{Comissions de Pagament}$$

### Exemple de càlcul del CPA Límit:
Imagineu que veneu una motxilla ergonòmica en les condicions següents:
* **Preu de venda (AOV):** 80 €
* **COGS (Cost de fabricació + importació):** 25 €
* **Enviament al client final i embalatge:** 7 €
* **Passarel·la de pagament (Stripe/PayPal):** 2 €

Calculem el CPA Límit:
$$\text{CPA Límit} = 80\ \text{€} - 25\ \text{€} - 7\ \text{€} - 2\ \text{€} = 46\ \text{€}$$

Si el vostre CPA mitjà als canals d'anuncis és exactament de **46 €**, estareu al punt d'equilibri (Breakeven): els vostres ingressos cobriran totes les vostres despeses però el vostre benefici net serà de 0 €. Si el CPA és de 50 €, perdreu 4 € per venda.

---

## Com calcular el vostre "CPA Objectiu" (Target CPA) i Marge Net

Perquè el vostre negoci sigui rendible i sostenible, no podeu operar al límit del punt d'equilibri. Heu de definir un **CPA Objectiu** que incorpori el marge net desitjat per a la vostra empresa.

La fórmula és:

$$\text{CPA Objectiu} = \text{CPA Límit} - \text{Marge Net Desitjat per Unitat}$$

### Exemple de càlcul del CPA Objectiu:
Seguint l'exemple de la motxilla (CPA Límit de 46 €), decidiu que voleu retenir un **20% de marge net real** sobre la facturació per reinvertir en la marca i generar utilitats.
* **Marge Net Desitjat per Unitat:** $80\ \text{€} \times 20\% = 16\ \text{€}$

Calculem el CPA Objectiu:
$$\text{CPA Objectiu} = 46\ \text{€} - 16\ \text{€} = 30\ \text{€}$$

Si el gestor de campanyes manté el CPA mitjà en **30 €**, la distribució financera de cada venda de 80 € serà la següent:
* **COGS:** 25 € (31,25%)
* **Logística:** 7 € (8,75%)
* **Comissions:** 2 € (2,5%)
* **Publicitat (CPA):** 30 € (37,5%)
* **Benefici Net Real:** 16 € (20,0%)

---

## Estratègies avançades per optimitzar i reduir el vostre CPA

Si les vostres campanyes estan operant per sobre del vostre CPA Objectiu, heu d'actuar sobre les variables que el componen. Aquí us mostrem com optimitzar-les de forma estructurada:

### 1. Incrementar la Taxa de Conversió (CRO)
Atès que la taxa de conversió és el denominador a la fórmula del CPA, qualsevol augment en aquesta variable redueix el cost d'adquisició de forma exponencial.
* **Tàctiques:** Optimitzar la velocitat de càrrega del web, simplificar el procés de checkout eliminant passos innecessaris, afegir proves socials (ressenyes, testimonis) i oferir múltiples mètodes de pagament (Bizum, Apple Pay, Klarna).

### 2. Optimitzar el Cost per Clic (CPC) mitjançant el CTR
Podeu abaratir el CPC millorant la rellevància dels vostres anuncis per als algoritmes (Quality Score a Google o rellevància a Facebook).
* **Tàctiques:** Dissenyar creatius amb ganxos (hooks) visuals forts per elevar el percentatge de clics (CTR) i segmentar audiències més afins que demostrin major intenció de compra.

### 3. Augmentar el valor de la cistella mitjana (AOV)
En augmentar l'AOV, incrementeu automàticament el CPA Límit, la qual cosa us atorga un major marge de maniobra als canals publicitaris.
* **Tàctiques:** Implementar ofertes del tipus "compra 2 i endut-te el tercer amb descompte" o recomanar productes complementaris abans del pagament.

## Conclusió

El **CPA** és el pont fonamental que connecta l'analítica publicitària amb la rendibilitat financera. Conèixer el vostre CPA Límit i configurar campanyes en funció d'un CPA Objectiu realista és l'única manera de garantir que l'escalament dels vostres anuncis digitals es tradueixi en diners reals al vostre compte bancari. Analitzeu la vostra estructura de costos avui mateix, determineu els vostres límits i optimitzeu les vostres taxes de conversió per assegurar un creixement veritablement rendible.
