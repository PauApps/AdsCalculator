---
title: "L'impacte de la velocitat de càrrega de la teva landing page sobre el pressupost malbaratat en Ads"
description: "Anàlisi tècnica de WPO (Web Performance Optimization) i la seva relació directa amb el rebot de visites, el nivell de qualitat i l'increment del CPA publicitari."
pubDate: 2026-10-29
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

En l'ecosistema de la publicitat digital de pagament (PPC), gran part de l'atenció dels especialistes se centra a optimitzar les campanyes dins de les plataformes: ajustar licitacions, refinar la segmentació d'audiències, redactar copies persuasius i dissenyar creativitats cridaneres. Tanmateix, existeix un factor crític extern a la plataforma publicitària que saboteja silenciosament la rendibilitat de les inversions: **la velocitat de càrrega de la pàgina de destinació (landing page)**.

Quan un usuari fa clic en un anunci, s'inicia una cursa contra el temps. Si la pàgina no es renderitza gairebé de forma instantània, l'usuari abandonarà el lloc web abans que es registri si més no la seva visita. Per a l'anunciant, això es tradueix en trànsit pagat que mai no va arribar a veure l'oferta, és a dir, **pressupost publicitari malbaratat de manera directa**.

A continuació, analitzarem a nivell tècnic com l'optimització del rendiment web (WPO) impacta directament en les mètriques financeres de les teves campanyes de Ads i com mesurar l'impacte del temps de càrrega sobre el Cost per Adquisició (CPA).

---

## 1. La discrepància analítica: Clics enfront de Sessions

El primer símptoma d'un problema de velocitat en una pàgina de destinació és la bretxa de dades entre els clics reportats per la plataforma publicitària (Meta Ads, Google Ads) i les sessions registrades en l'eina d'analítica web (Google Analytics 4).

Aquesta discrepància es quantifica a través de la **Taxa de Visites Perdudes** ($LVR$, *Lost Visit Rate*):

$$LVR = \left( 1 - \frac{\text{Sessions Registrades}}{\text{Clics a l'Anunci}} \right) \times 100$$

En condicions d'optimització òptimes, la discrepància normal deguda a discrepàncies de galetes, bloquejadors d'anuncis o tancaments accidentals immediats s'ha de situar per sota del $10\%$. Tanmateix, quan la velocitat de càrrega supera els 3 segons, la $LVR$ pot disparar-se fins al $30\%$ o $50\%$.

Això significa que, per cada 1.000 € invertits en clics de pagament, entre 300 € i 500 € s'estan perdent en latència de xarxa abans que el servidor aconsegueixi servir el primer arxiu HTML al navegador de l'usuari.

---

## 2. L'impacte en la fórmula del Cost per Adquisició Efectiu (CPA)

La pèrdua de trànsit deguda a la lentitud de càrrega exerceix una pressió directa a l'alça sobre el Cost per Adquisició ($CPA$). El $CPA$ efectiu final està determinat per el cost per clic ($CPC$), la taxa de visites perdudes ($LVR$) i la taxa de conversió activa dels usuaris que sí que van aconseguir carregar la pàgina ($CR_{\text{activa}}$):

$$CPA_{\text{efectiu}} = \frac{CPC}{(1 - LVR_{\text{decimal}}) \times CR_{\text{activa}}}$$

**Estudi de Cas Matemàtic:**
Imaginem una campanya de Google Ads per a un servei SaaS amb les variables fixes següents:
*   $CPC$ mitjà = $2,50\ \text{€}$
*   Taxa de conversió dels usuaris que carreguen la pàgina ($CR_{\text{activa}}$) = $4\%$ ($0,04$)

Comparem dos escenaris de rendiment web:

### Escenari A: Landing Page Optimitzada (Temps de càrrega < 1.5s, $LVR = 8\%$)

$$CPA_{\text{efectiu}} = \frac{2,50}{(1 - 0,08) \times 0,04} = \frac{2,50}{0,92 \times 0,04} = \frac{2,50}{0,0368} \approx 67,93\ \text{€}$$

### Escenari B: Landing Page Lenta (Temps de càrrega > 4.5s, $LVR = 35\%$)

$$CPA_{\text{efectiu}} = \frac{2,50}{(1 - 0,35) \times 0,04} = \frac{2,50}{0,65 \times 0,04} = \frac{2,50}{0,026} \approx 96,15\ \text{€}$$

**Conclusió financera:** La ineficiència tècnica de la landing page en l'Escenari B provoca un increment del **$41,5\%$** en el cost final d'adquisició de cada client, mantenint idèntic el copy dels anuncis, la segmentació i la proposta de valor.

---

## 3. El Nivell de Qualitat (Quality Score) i la inflació del CPC

A Google Ads, la velocitat de la pàgina de destinació no només influeix en l'experiència de l'usuari post-clic, sinó que és un component algorítmic directe de la subasta publicitària. L'algorisme avalua l'**Experiència a la Pàgina de Destinació** com un dels tres pilars del **Nivell de Qualitat** (*Quality Score*, puntuat de l'1 al 10).

El Nivell de Qualitat determina directament el teu **Ad Rank** (posició en els resultats de cerca) i el preu final que pagues per cada clic ($CPC$), segons la següent relació de subasta simplificada:

$$CPC_{\text{Real}} = \frac{\text{Ad Rank del Competidor Immediat}}{\text{El teu Nivell de Qualitat}} + 0,01\ \text{€}$$

Si la velocitat de càrrega de la teva landing page és deficient, la qualificació de l'experiència a la pàgina de destinació baixarà. Això redueix el teu Nivell de Qualitat general (per exemple, d'un 8 a un 5). Per mantenir la mateixa posició en els resultats de cerca, Google t'obligarà a realitzar una licitació de CPC real significativament major, encarint artificialment tot el teu trànsit web.

---

## 4. Mètriques de WPO crítiques a optimitzar per a campanyes de trànsit pagat

Per solucionar el malbaratament pressupostari, els equips de desenvolupament web i màrqueting han de monitorar i optimitzar les mètriques estandarditzades per Google sota el marc de les **Core Web Vitals**:

*   **Largest Contentful Paint (LCP):** Mesura el temps que triga a renderitzar-se l'element de contingut principal (generalment la imatge hero de la landing o el títol H1). S'ha de mantenir per sota dels **$2,5$ segons** en connexions mòbils 4G.
*   **Interaction to Next Paint (INP):** Mesura la latència de resposta de la pàgina davant la primera interacció de l'usuari (com fer clic al botó de conversió). Ha de ser inferior a **$200$ mil·lisegons**.
*   **Cumulative Layout Shift (CLS):** Mesura l'estabilitat visual de la pàgina durant la càrrega per evitar que els elements canviïn de posició de sobte (la qual cosa provoca clics erronis). Ha de ser inferior a **$0,1$**.

### Accions tècniques clau d'optimització:
1.  **Reducció del temps de resposta del servidor (TTFB):** Allotjar la landing page en servidors d'alt rendiment optimitzats i utilitzar sistemes d'emmagatzematge en memòria cau (caché) robusts.
2.  **Ús de xarxes de lliurament de contingut (CDN):** Distribuir els recursos del web a través de servidors geogràficament propers a la ubicació de l'usuari que realitza la cerca.
3.  **Compressió i formats d'imatge moderns:** Reemplaçar arxius PNG o JPG tradicionals per formats d'última generació com WebP o AVIF, reduint el pes de la pàgina fins a un $80\%$.
4.  **Priorització i depuració de scripts publicitaris:** Els píxels de seguiment de Meta, Google, TikTok i Hotjar alentexen severament el temps d'interacció si es carregen de forma síncrona. S'ha d'implementar la càrrega asíncrona o deferred (diferida) dels scripts de tracking utilitzant un gestor d'etiquetes com Google Tag Manager de manera optimitzada o arquitectures *Server-Side*.
