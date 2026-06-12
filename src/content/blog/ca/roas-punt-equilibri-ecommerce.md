---
title: "Com calcular i optimitzar el Breakeven ROAS en campanyes d'Ecommerce"
description: "Aprèn a calcular el ROAS de punt d'equilibri (Breakeven ROAS) per a les teves campanyes de comerç electrònic amb fórmules i exemples pràctics."
pubDate: 2026-06-12
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

En el comerç electrònic, un dels errors més greus que cometen les botigues en línia en escalar les seves campanyes de publicitat és no tenir un punto de referència de rendibilitat clar. Molts propietaris es guien per un nombre arbitrari, per exemple, aspirant a un ROAS general de 3.0 perquè "els sembla bé". No obstant això, la rentabilitat real d'un Ecommerce depèn completament dels seus marges. Per operar amb seguretat i rendibilitat, és imprescindible dominar el concepte de **Breakeven ROAS** (o ROAS de punt d'equilibri).

El Breakeven ROAS t'indica el rendiment exacte que les teves campanyes publicitàries han de generar per cobrir tots els costos operatius i de producte. Qualsevol xifra per sota d'aquest punt significa que estàs perdent diners amb cada venda; qualsevol xifra per sobre representa un benefici net. En aquesta guia tècnica, explicarem el model matemàtic pas a pas i et mostrarem com optimitzar-lo.

---

## La base matemàtica: El Marge de Contribució

Abans de calcular el Breakeven ROAS, necessitem entendre quin percentatge de cada venda queda lliure després de pagar els costos directes associats al producte i al seu lliurament. D'això se'n diu **Marge Brut** o **Marge de Contribució**.

La fórmula del percentatge de Marge Brut és:

$$\text{Marge Brut (\%)} = \frac{\text{Preu de Venda} - \text{Costos Directes}}{\text{Preu de Venda}} \times 100$$

On els **Costos Directes** (abans de màrqueting) inclouen:
* El cost de fabricació o compra de l'article (COGS).
* L'embalatge i l'enviament al client final.
* Les comissions per processament de pagament (ex. Stripe, PayPal o Shopify Payments).
* Costos d'emmagatzematge físic prorratejats per unitat.

Si vens un article per 100 € i sumant el seu cost de fabricació (30 €), logística (8 €) and passarel·les de pagament (2 €) tens un cost directe total de 40 €, el teu marge brut en valor absolut és de 60 € i el teu percentatge de Marge Brut és del **60%**.

---

## La fórmula del Breakeven ROAS

Una vegada que coneixes el teu percentatge de marge brut (expressat en format decimal), el càlcul del Breakeven ROAS és summament senzill i directe:

$$\text{Breakeven ROAS} = \frac{1}{\text{Marge Brut (\%) en decimals}}$$

### Exemple pràctic 1:
Si el teu percentatge de marge brut és del 50% (0,50 en decimals):
$$\text{Breakeven ROAS} = \frac{1}{0,50} = 2.0\ \text{(o 200\%)}$$

Això significa que si inverteixes 1.000 € en anuncis, has de facturar almenys 2.000 € per no guanyar ni perdre diners.

### Exemple pràctic 2:
Si vens productes d'electrònica de consum on la competència és ferotge i el marge brut és de només el 20% (0,20 en decimals):
$$\text{Breakeven ROAS} = \frac{1}{0,20} = 5.0\ \text{(o 500\%)}$$

En aquest segon cas, un ROAS de 4.0 (que en altres negocis seria molt rendible) t'estaria portant a la fallida perquè necessites un mínim de 5.0 per cobrir els costos del maquinari i el transport.

---

## Cas pràctic de càlcul complet en Ecommerce

Desglossem un cas d'estudi real per a un Ecommerce que ven suplements esportius:

### 1. Dades del Producte:
* **Preu de venda mitjà (AOV):** 60 €
* **Cost de fabricació i etiquetatge (COGS):** 12 €
* **Logística (Magatzem pick & pack + enviament a domicili):** 5 €
* **Comissions de pagament (Stripe 1.5% + 0,25 €):** 1,15 €

### 2. Càlcul del marge brut i costos directes:
* **Total Costos Directes:** $12\ \text{€} + 5\ \text{€} + 1,15\ \text{€} = 18,15\ \text{€}$
* **Marge Net unitari:** $60\ \text{€} - 18,15\ \text{€} = 41,85\ \text{€}$
* **Percentatge de Marge Brut:** $\frac{41,85\ \text{€}}{60\ \text{€}} = 0,6975\ \text{(69,75\%)}$

### 3. Càlcul dels límits publicitaris:
* **Breakeven ROAS:** $\frac{1}{0,6975} = 1,43$
* **CPA màxim permès (Cost per Adquisició límit):** Per no perdre diners en màrqueting, el cost màxim que pots pagar per adquirir un client és igual al marge net unitari, és a dir, **41,85 €**.

Si les teves campanyes de publicitat aconsegueixen compres amb un CPA mitjà de 25 €, el teu benefici net per venda serà de $41,85 - 25 = 16,85\ \text{€}$, operant amb un ROAS de $\frac{60}{25} = 2.4$, que supera amb escreix el límit d'equilibri d'1,43.

---

## Estratègies per optimitzar i reduir el teu Breakeven ROAS

Un error comú és intentar optimitzar la rendibilitat modificant únicament els anuncis a Facebook o Google Ads. No obstant això, el Breakeven ROAS es pot optimitzar enormement des del costat del negoci. Com més baix sigui el teu Breakeven ROAS, més agressiu podràs ser en les teves licitacions i més fàcil et resultarà escalar la teva facturació de forma rendible.

### 1. Incrementar el Valor Mitjà de la Comanda (AOV)
Si aconsegueixes que els clients comprin més d'un producte per comanda, dilueixes els costos d'enviament i processament de pagaments unitaris, incrementant el marge.
* **Tàctiques:** Paquet de productes (bundles), ofertes de venda creuada (cross-sell) abans de finalitzar la compra, o establir un llindar mínim de compra per aconseguir l'enviament gratuït.

### 2. Negociar el COGS amb proveïdors
Cada cèntim estalviat en el cost d'adquisició del producte va directament al benefici net, la qual cosa redueix el ROAS necessari per cobrir costos.
* **Tàctiques:** Comprar majors volums per obtenir descompte per escala, buscar proveïdors alternatius o signar contractes de subministrament a llarg termini.

### 3. Optimitzar la cadena logística
Les despeses de transport i preparació de comandes són una fuga de capital silenciosa.
* **Tàctiques:** Utilitzar embalatges més lleugers i compactes per reduir les tarifes de les agències de transport, o externalitzar la logística a un 3PL eficient si els teus volums justifiquen la reducció de tarifes negociades.

## Conclusió

El **Breakeven ROAS** és la línia divisòria entre l'èxit i el fracàs financer en l'adquisició de trànsit de pagament. Cap especialista en màrqueting digital hauria de llançar campanyes sense conèixer aquest llindar per a cada producte o categoria del seu catàleg. En comprendre aquesta mètrica i treballar activament per reduir-la mitjançant la millora de marges i l'increment del valor mitjà de la comanda, blindaràs la rendibilitat del teu ecommerce davant dels canvis de sobte en els costos de la publicitat en línia.
