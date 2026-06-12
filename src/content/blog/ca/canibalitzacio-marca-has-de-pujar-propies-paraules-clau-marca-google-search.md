---
title: "Canibalització de marca: Has de pujar per les teves pròpies paraules clau de marca a Google Search?"
description: "Anàlisi del debat Brand Bidding vs. SEO orgànic de marca amb fórmules incrementals i marcs de decisió financera."
pubDate: 2027-01-25
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

Un dels debats més persistents i polaritzats en l'àmbit del Search Engine Marketing (SEM) és si les marques han de pujar per les seves pròpies paraules clau de marca a Google Search (pràctica coneguda com a *Brand Bidding*).

La lògica escèptica sembla raonable: si un usuari escriu el nom exacte de la teva empresa al cercador, el teu lloc web apareixerà en la primera posició orgànica de forma gratuïta. Per què pagar a Google per un clic que probablement hauries obtingut sense gastar ni un cèntim? La resposta ràpida de les agències de màrqueting sol ser «per protegir la teva marca dels competidors». Però la resposta rigorosa i financera exigeix analitzar la **incrementalitat** del tràfic i calcular la **taxa de canibalització**.

En aquest article tècnic, analitzarem la base econòmica del Brand Bidding, desglossarem les fórmules matemàtiques per mesurar la canibalització i els costos d'adquisició reals, i establirem una guia per decidir quan encendre i quan apagar les teves campanyes de marca.

---

## 1. Els Arguments del Debat: Protecció vs. Despesa Inútil

Per entendre la dimensió del problema, primer hem d'avaluar els pros i contres tècnics del Brand Bidding:

### Avantatges de Pujar per la teva Marca:
*   **Bloqueig de Competidors:** Si no puges per la teva marca, els teus competidors poden comprar la teva paraula clau i col·locar els seus anuncis per sobre del teu resultat orgànic número u, robant-te clients amb ofertes agressives.
*   **Control de la Narrativa i la Destinació:** Els anuncis de cerca et permeten escollir amb precisió a quina pàgina d'aterratge enviar l'usuari (per exemple, a una pàgina d'ofertes de temporada en lloc de la pàgina d'inici) i modificar els textos de l'anunci en temps real per comunicar promocions actives.
*   **Millora del Quality Score del Compte:** Les campanyes de marca tenen un CTR (Click-Through Rate) extremadament alt i una rellevància òptima, cosa que millora la puntuació de qualitat general del teu compte de Google Ads i pot ajudar a abaratir els CPCs de les teves campanyes genèriques.

### Desavantatges de Pujar per la teva Marca:
*   **Canibalització del Tràfic Orgànic:** Una part significativa dels usuaris que fan clic a l'anunci haurien fet clic al resultat orgànic si l'anunci no hi hagués estat.
*   **Cost d'Oportunitat Financer:** El pressupost assignat a comprar clics de marca és capital que deixa d'invertir-se en campanyes de prospecció i captació de nou tràfic (tràfic fred).

---

## 2. El Concepte d'Incrementalitat i la Taxa de Canibalització

El factor determinant per avaluar la viabilitat financera del Brand Bidding és la **incrementalitat**. Hem de determinar quantes de les conversions generades per la campanya de marca són *addicionals* (incrementals) i quantes haurien ocorregut igualment a través del canal orgànic.

Per mesurar-ho de forma empírica, sol realitzar-se un test d'encesa/apagada (ON/OFF) o un test de divisió geogràfica (Geo-testing), comparant el comportament del tràfic orgànic i inorgànic en dos escenaris diferenciats.

### Fórmula de la Taxa de Canibalització ($CR$)

La Taxa de Canibalització mesura la proporció de clics de pagament que simplement reemplacen clics orgànics preexistents:

$$\text{Taxa de Canibalització (\%)} = \frac{\text{Clics Orgànics Perduts quan Ads està ON}}{\text{Clics d'Ads Registrats}} \times 100$$

On:
$$\text{Clics Orgànics Perduts} = \text{Clics Orgànics}_{\text{Ads OFF}} - \text{Clics Orgànics}_{\text{Ads ON}}$$

### Exemple Numèric Pràctic:

Suposem que realitzem un experiment controlat de dues setmanes per a una marca:

*   **Setmana 1 (Campanya de Marca Apagada - Ads OFF):**
    *   Clics Orgànics de Marca: **10.000**
    *   Conversions Orgàniques: **500**
    *   Inversió publicitària en marca: 0 €
    *   **Conversions Totals del període:** **500**

*   **Setmana 2 (Campanya de Marca Encesa - Ads ON):**
    *   Clics en Anuncis de Marca: **4.000**
    *   Clics Orgànics de Marca: **7.000**
    *   Conversions d'Anuncis de Marca: **220**
    *   Conversions Orgàniques de Marca: **350**
    *   Inversió publicitària en marca: **700 €**
    *   **Conversions Totals del període:** **570**

Aplicant les fórmules:

1.  **Clics Orgànics Perduts:**
    $$\text{Clics Orgànics Perduts} = 10.000 - 7.000 = 3.000\ \text{clics}$$

2.  **Taxa de Canibalització ($CR$):**
    $$\text{Taxa de Canibalització} = \frac{3.000}{4.000} \times 100 = 75\%$$

El 75% dels clics pagats a la campanya d'anuncis de Google Ads van ser clics canibalitzats. Només el 25% dels clics pagats (1.000 dels 4.000) van ser clics veritablement incrementals que d'altra manera s'haurien perdut.

---

## 3. Càlcul de la Rendibilitat Real: El CPA Incremental (iCPA)

Si ens limitem a analitzar les mètriques que reporta la interfície de Google Ads per a la Setmana 2, veuríem un rendiment aparentment espectacular:
*   Inversió: 700 €
*   Conversions registrades per la campanya: 220
*   **CPA nominal reportat per la plataforma:**
    $$\text{CPA}_{\text{Nominal}} = \frac{700\ \text{€}}{220} = 3,18\ \text{€}$$

Tanmateix, des del punt de vista financer corporatiu, aquest CPA nominal és una il·lusió mètrica. Per calcular l'eficiència del capital invertit, hem de calcular el **CPA Incremental ($iCPA$)**, que relaciona la despesa real de la campanya únicament amb les conversions que no hauríem obtingut orgànicament.

### Fórmula del CPA Incremental ($iCPA$)

$$\text{iCPA} = \frac{\text{Inversió en Campanya de Marca}}{\text{Conversions Incrementals}}$$

On:
$$\text{Conversions Incrementals} = \text{Conversions Totals}_{\text{Ads ON}} - \text{Conversions Totals}_{\text{Ads OFF}}$$

Continuant amb les dades del nostre exemple:
*   Conversions Incrementals: $570 - 500 = 70\ \text{conversions}$
*   **CPA Incremental ($iCPA$):**
    $$\text{iCPA} = \frac{700\ \text{€}}{70} = 10,00\ \text{€}$$

### Anàlisi de Decisió Financera:
El cost real per adquirir un client incremental mitjançant Brand Bidding no és de 3,18 €, sinó de **10,00 €**.
*   Si el marge brut mitjà per conversió (descomptant el COGS) és de **30,00 €**, pagar un iCPA de 10,00 € continua sent una decisió altament rendible, ja que genera un benefici net addicional de $30 - 10 = 20\ \text{€}$ per usuari que d'altra manera no hauria comprat.
*   Si el marge net per producte fos de **8,00 €**, la campanya de marca estaria perdent diners activament per cada conversió incremental adquirida ($8 - 10 = -2\ \text{€}$). En aquest últim cas, apagar la campanya i confiar plenament en el tràfic orgànic maximitzaria el benefici de la companyia.

---

## 4. Guia Tècnica de Decisió: Quan has de pujar?

Per evitar realitzar tests complexos de forma continuada, pots seguir aquesta matriu de decisió tècnica basada en les característiques del mercat en temps real:

### Escenari A: Els competidors estan pujant per la teva marca
*   **Acció:** **Pujar obligatòriament (Campanya Activa)**.
*   **Raó:** Google col·locarà els anuncis dels teus competidors per sobre del teu resultat orgànic. La taxa de pèrdua de clics i conversions cap a la competència si no apareixes a la zona d'anuncis és molt elevada, cosa que fa que la incrementalitat de la teva campanya sigui extremadament alta.

### Escenari B: Ningú està pujant per la teva marca i el resultat orgànic és net
*   **Acció:** **Apagar o minimitzar Puges (Campanya Pausada)**.
*   **Raó:** En no haver-hi competidors a la subhasta d'anuncis, la taxa de canibalització sol apropar-se al 90-100%. Els usuaris faran clic al teu resultat orgànic principal de forma natural. Guardar aquest pressupost de màrqueting per a altres campanyes de captació és l'opció financerament òptima.

### Escenari C: Cerques amb alta presència d'intermediaris o distribuïdors
*   **Acció:** **Pujar de forma controlada**.
*   **Raó:** Si ets un hotel i agències com Booking o Expedia pugen pel teu nom, o si ets una marca de programari i portals de ressenyes dominen els resultats, és convenient mantenir una presència de marca pagada. Tot i que siguin socis comercials, la venda directa al teu lloc web sol aportar marges molt més alts que la venda a través d'intermediaris.

## Conclusió

El Brand Bidding no ha de ser una decisió de màrqueting basada en suposicions, sinó una decisió financera sustentada en el càlcul del CPA Incremental ($iCPA$) i la Taxa de Canibalització ($CR$). En executar de forma periòdica experiments controlats d'apagada i encesa de campanyes de marca i creuar els resultats amb els teus marges operatius reals, podràs identificar el límit exacte on la protecció davant la competència es converteix en un cost ineficient, protegint així el ROI global de les teves inversions publicitàries.
