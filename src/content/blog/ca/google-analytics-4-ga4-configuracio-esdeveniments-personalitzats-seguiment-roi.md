---
title: "Google Analytics 4 (GA4): Configuració d'esdeveniments personalitzats per a un seguiment de ROI impecable"
description: "Configuració d'esdeveniments, paràmetres de valor i atribució multicanal a GA4."
pubDate: 2027-01-13
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

Amb la transició definitiva de Universal Analytics a Google Analytics 4 (GA4), els professionals del màrqueting digital es van veure obligats a canviar radicalment la seva mentalitat de mesura. GA4 va deixar enrere el model basat en sessions i pàgines vistes per centrar-se per complet en un model basat en **esdeveniments i paràmetres**.

Aquest canvi tècnic, lluny de ser un inconvenient, representa una oportunitat extraordinària. GA4 permet ara mesurar de forma granular el comportament de l'usuari i estructurar un sistema d'atribució molt més madur. Tanmateix, per aconseguir un seguiment de ROI (Retorn de la Inversió) impecable, la configuració estàndard de mesura millorada de GA4 no és suficient. És imprescindible dominar el desplegament d'**esdeveniments personalitzats amb paràmetres financers dinàmics**.

En aquesta guia tècnica, us ensenyarem a configurar pas a pas aquests esdeveniments a través de Google Tag Manager (GTM), a assignar valor a conversions no transaccionals i a interpretar els models d'atribució multicanal de GA4 per optimitzar la rendibilitat de les vostres campanyes.

---

## 1. El model de dades de GA4: Esdeveniments i Paràmetres

A diferència del seu predecessor, a GA4 *tot és un esdeveniment*. Des d'una pàgina vista (`page_view`) fins a un clic de sortida (`click`) o una compra (`purchase`).

Cada esdeveniment pot portar associats fins a 25 paràmetres personalitzats que aporten context addicional. Quan l'objectiu és mesurar el ROI de canals de pagament i orgànics, hi ha tres paràmetres fonamentals que han de viatjar amb qualsevol esdeveniment crític de l'embut (conversions principals):

*   `value`: El valor monetari numèric de l'acció (per exemple, `49.99`).
*   `currency`: La moneda en format de codi ISO 4217 de tres lletres (per exemple, `EUR`, `USD`, `MXN`).
*   `transaction_id`: Un identificador únic de la transacció per evitar duplicats al tauler de control.

Si veneu en un ecommerce clàssic, aquests paràmetres es configuren a través de l'array estàndard `purchase`. Però, què passa si gestioneu un negoci SaaS, una acadèmia en línia o un negoci B2B de captació de leads? Aquí és on entren en joc les **conversions amb valor estimat**.

---

## 2. Modelatge del valor per a conversions no transaccionals

No totes les conversions en un web tenen un valor transaccional immediat. Un registre de Lead, la descàrrega d'un dossier o el registre a una prova gratuïta (Free Trial) no generen ingressos directes en el moment de la conversió. Tanmateix, si no els assigneu un valor a GA4, els vostres informes de ROI i els algoritmes de Smart Bidding de les vostres campanyes d'Ads estaran operant a cegues.

Per estimar el valor d'un lead no transaccional de forma matemàtica, heu de creuar les dades del vostre embut de vendes i el vostre CRM utilitzant la fórmula següent:

$$\text{Valor del Lead} = \text{Taxa de Conversió a Client (\%)} \times \text{Valor Mitjà del Client (LTV)}$$

### Exemple pràctic:
Suposem que gestioneu una empresa de programari (SaaS) on:
1.  El **Valor del Cicle de Vida del Client (LTV)** net mitjà és de **1.200 €**.
2.  De cada 100 usuaris que es registren per a una prova gratuïta (Free Trial), **8** acaben convertint-se en subscriptors de pagament. És a dir, la taxa de conversió de Lead a Client és del **8%** ($0{,}08$ en decimals).

Aplicant la fórmula per calcular el valor estimat d'aquest esdeveniment de prova gratuïta:

$$\text{Valor del Lead (Free Trial)} = 0{,}08 \times 1.200\ \text{€} = 96\ \text{€}$$

Cada cop que un usuari activi l'esdeveniment personalitzat `free_trial_signup` al vostre web, heu d'indicar a GA4 que aquest esdeveniment té un paràmetre `value` de `96` i un paràmetre `currency` de `EUR`. Això us permetrà calcular de forma automàtica un **ROAS predictiu** directe als vostres informes de màrqueting.

---

## 3. Configuració de l'esdeveniment a Google Tag Manager (GTM)

Per implementar el seguiment, utilitzarem Google Tag Manager, la via més neta i escalable que evita modificar el codi del web repetidament.

### Pas 1: Enviar les dades al DataLayer (Capa de Dades)
Quan un usuari completi el formulari o la conversió, el vostre lloc web ha d'enviar la informació rellevant al DataLayer. El vostre equip de desenvolupament (o el vostre plugin d'ecommerce) ha d'implementar un codi similar al següent:

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'lead_conversion',
  'leadValue': 96.00,
  'currency': 'EUR',
  'transactionId': 'L-984723'
});
```

### Pas 2: Crear les variables de capa de dades a GTM
Entreu al vostre contenidor de Google Tag Manager i creeu tres variables de tipus **Variable de capa de dades**:
1.  **Nom de la variable:** `dlv - lead value` | **Nom de la variable de capa de dades:** `leadValue`
2.  **Nom de la variable:** `dlv - currency` | **Nom de la variable de capa de dades:** `currency`
3.  **Nom de la variable:** `dlv - transaction id` | **Nom de la variable de capa de dades:** `transactionId`

### Pas 3: Crear l'activador (Trigger)
Creeu un nou activador de tipus **Esdeveniment personalitzat**:
*   **Nom de l'esdeveniment:** `lead_conversion`
*   **Nom de l'activador:** `Custom Event - Lead Conversion`

### Pas 4: Configurar l'etiqueta (Tag) d'esdeveniment de GA4
Creeu una nova etiqueta de tipus **Google Analytics: Esdeveniment de GA4**:
1.  **ID de mesura:** Introduïu la vostra etiqueta d'ID de Google Tag (`G-XXXXXXXXXX`).
2.  **Nom de l'esdeveniment:** Escriviu un nom normalitzat compatible amb GA4, per exemple: `generate_lead` o `lead_registration`.
3.  **Paràmetres de l'esdeveniment (Event Parameters):** Afegiu files per associar les variables de GTM creades:
    *   Fila 1: Paràmetre: `value` | Valor: `{{dlv - lead value}}`
    *   Fila 2: Paràmetre: `currency` | Valor: `{{dlv - currency}}`
    *   Fila 3: Paràmetre: `transaction_id` | Valor: `{{dlv - transaction id}}`
4.  **Activació (Triggering):** Associeu l'activador `Custom Event - Lead Conversion` creat al Pas 3.
5.  Deseu els canvis, feu clic a **Vista Prèvia** (DebugMode) per provar que l'esdeveniment es dispara correctament amb els seus paràmetres a la consola de GA4 i publiqueu els canvis.

---

## 4. Registre de paràmetres a la interfície de GA4

Un error recurrent i catastròfic és enviar els paràmetres a GA4 a través de GTM però no registrar-los a la plataforma. Si no els registreu, GA4 rebrà la informació però no la processarà per als vostres informes d'anàlisi personalitzats.

Per registrar els paràmetres a GA4:
1.  Aneu al tauler d'**Administració** de GA4.
2.  A la columna de propietat, feu clic a **Definicions personalitzades**.
3.  Feu clic a **Crear mètriques personalitzades** (per a paràmetres numèrics com el valor del lead).
    *   **Nom de la mètrica:** `Valor del Lead`
    *   **Àmbit:** `Esdeveniment`
    *   **Descripció:** Valor econòmic predictiu assignat a un lead.
    *   **Paràmetre d'esdeveniment:** Escriviu el nom exacte del paràmetre que envieu per GTM: `value`.
    *   **Unitat de mesura:** `Moneda` (Currency).
4.  Deseu la mètrica.
5.  Assegureu-vos d'anar a **Administració > Conversions** (o **Esdeveniments clau**) i marcar l'esdeveniment `generate_lead` com a conversió/esdeveniment clau per habilitar el càlcul automàtic del ROI.

---

## 5. Models d'atribució multicanal i anàlisi de ROI

Un cop les vostres dades de conversió i valor flueixen correctament cap a GA4, el repte següent consisteix a analitzar-les sota el model d'atribució adequat.

Per defecte, GA4 utilitza el model d'**Atribució Basada en Dades (Data-Driven Attribution - DDA)**. Aquest model utilitza algoritmes de machine learning per assignar una fracció del crèdit de conversió a cada punt de contacte (cerca de pagament, trànsit orgànic, xarxes socials, email màrqueting) que l'usuari va visitar abans de comprar.

### Com comprovar el ROI real per canal a GA4

1.  Aneu al mòdul de **Informes > Publicitat > Rutes de conversió** o **Comparació de models**.
2.  L'informe de **Comparació de models** us permet avaluar els canvis de valoració comparant, per exemple, el model d'**Últim clic del canal de pagament** amb el model **Basat en dades**.
3.  En analitzar les vostres mètriques financeres mitjançant aquest tauler, podreu identificar la veritable contribució dels canals assistencials o de descobriment (com els anuncis de vídeo de conscienciació a YouTube o Meta Ads), que tradicionalment rebien un ROI de zero en els models clàssics de conversió basats en l'últim clic (Last Click).

## Conclusió

La implementació d'esdeveniments personalitzats enriquits amb paràmetres financers dinàmics a GA4 és el pont que uneix l'analítica tècnica amb la rendibilitat empresarial. En assignar valors realistes a les vostres conversions indirectes a través de variables a GTM i integrar-les a la interfície de GA4, obtindreu una visibilitat total sobre els canals i campanyes publicitàries que realment estan generant valor net per a la vostra organització.
