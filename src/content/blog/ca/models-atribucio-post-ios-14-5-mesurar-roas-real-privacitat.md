---
title: "Models d'atribució post-iOS 14.5: Com mesurar el ROAS real en entorns de privacitat"
description: "Descobreix com mesurar el ROAS real en l'ecosistema publicitari post-iOS 14.5 utilitzant models d'atribució avançats i fórmules d'incrementalitat."
pubDate: 2026-07-01
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

L'abril del 2021, Apple va llançar iOS 14.5 i va introduir el protocol **App Tracking Transparency (ATT)**. Aquesta actualització de privacitat va marcar un punt d'inflexió sense retorn en la història de la publicitat digital. En obligar les aplicacions a sol·licitar el consentiment explícit de l'usuari per rastrejar la seva activitat entre aplicacions i llocs web, la immensa majoria dels usuaris d'iPhone (al voltant del 80-85% a escala global) va optar per «No rastregis».

Aquest canvi va destruir la capacitat dels píxels de seguiment tradicionals (com el de Meta Ads o TikTok Ads) per recopilar l'identificador d'anunciants d'Apple (**IDFA**), trencant els ponts que connectaven la visualització d'un anunci amb la conversió final del client. Tres anys després, en un entorn hiper-regulat per lleis de privacitat com el RGPD europeu i la imminent desaparició de les galetes de tercers als navegadors web, mesurar el **Retorn de la Inversió Publicitària (ROAS)** de forma tradicional ja no és fiable.

En aquest article analitzarem tècnicament les alternatives d'atribució post-iOS 14.5 i explicarem com modelar matemàticament el teu retorn real en un ecosistema publicitari cegat per la privacitat.

---

## L'impacte d'ATT i la pèrdua del seguiment lineal

Abans d'iOS 14.5, l'atribució de conversió era en gran mesura un procés determinista i lineal. Si un usuari veia un anunci a Instagram al seu telèfon intel·ligent, feia clic i realitzava una compra 15 dies després a Safari, el píxel de Meta associava l'IDFA del dispositiu amb la compra i atribuïa la venda al 100% a la campanya publicitària corresponent. Les finestres d'atribució eren àmplies (fins a 28 dies de clic i 28 dies de visualització).

### Limitacions actuals de les plataformes publicitàries
1. **Reducció de finestres:** Meta Ads va reduir la seva finestra predeterminada a **7 dies de clic i 1 dia de visualització**. Les conversions que es produeixen més enllà del setè dia es perden completament per a l'optimitzador automàtic de la plataforma.
2. **Modelatge de dades (Data Modeling):** Davant la manca de dades directes, plataformes com Meta i Google Ads utilitzen aprenentatge automàtic per «estimar» i omplir els buits de conversió mitjançant models probabilístics agregats. Això significa que les vendes reportades als taulers d'anuncis no sempre corresponen a transaccions individuals reals, sinó a projeccions estadístiques.
3. **Conversió retardada i agregació:** A través de l'API SKAdNetwork d'Apple (i el recent AdAttributionKit), les conversions d'iOS s'envien en paquets de dades agregats amb retards aleatoris d'entre 24 i 72 hores per evitar la identificació individual de l'usuari. Això elimina l'optimització de les ofertes en temps real.

---

## Models d'atribució alternatius per a la nova era

Per mesurar el ROAS net real, les marques han de migrar d'una perspectiva d'atribució en un sol canal (Single-Touch) a marcs de mesurament híbrids i holístics:

### 1. Atribució basada en dades (DDA - Data-Driven Attribution)
Utilitzat per defecte a Google Analytics 4 (GA4), aquest model distribueix el crèdit de la conversió entre tots els punts de contacte de l'embut de vendes del client (cerca orgànica, anuncis de pagament, correu electrònic, xarxes socials directes). Utilitza algorismes de la teoria de jocs (com els valors de Shapley) per calcular la contribució marginal de cada canal.
* *Avantatge:* És dinàmic i evita la canibalització entre canals.
* *Inconvenient:* Continua depenent de galetes pròpies (First-Party Cookies) i paràmetres d'URL (`gclid`, `fbclid`), que els navegadors moderns restringeixen cada vegada més.

### 2. Models de mix de medis (MMM - Marketing Mix Modeling)
El MMM és un mètode estadístic que utilitza dades històriques agregades de vendes i d'inversió en màrqueting per analitzar la correlació matemàtica entre el volum de despesa i els ingressos generats al llarg del temps. No requereix rastrejar cap usuari individual ni depèn de galetes o píxels.
* *Fórmula matemàtica:* Utilitza models de regressió lineal múltiple per estimar els coeficients de contribució:

$$Vendes_{t} = \beta_0 + \sum_{i} \beta_i \cdot Despesa\_Publicitaria_{i, t} + \beta_d \cdot Tendencia_{t} + \epsilon_{t}$$

*On $Despesa\_Publicitaria_{i, t}$ representa la inversió en el canal publicitari $i$ en el període $t$, $\beta_i$ és el pes marginal d'aquest canal sobre les vendes i $\epsilon_{t}$ representa l'error del model.*

### 3. Incrementalitat i prova geogràfica (Incrementality Testing)
La incrementalitat mesura el volum de vendes que **només** es van produir gràcies a la publicitat i que no s'haurien produït de forma orgànica. Es realitza dividint el públic objectiu en un grup de prova (que veu els anuncis) i un grup de control (que no els veu).

La fórmula matemàtica per calcular el factor d'incrementalitat ($FI$) és:

$$FI = \frac{\text{Vendes del Grup de Prova} - \text{Vendes del Grup de Control}}{\text{Vendes Atribuïdes per la Plataforma}}$$

---

## Com calcular el ROAS incremental ($iROAS$)

Per evitar pagar per usuaris que haurien comprat el teu producte de totes maneres (per exemple, pujant les teves paraules clau de marca orgànica a Google), hem de guiar les decisions pressupostàries a través del **iROAS (ROAS Incremental)**.

### Cas pràctic de càlcul:
Una startup SaaS inverteix 10.000 € a LinkedIn Ads durant un mes. La plataforma de LinkedIn Ads afirma haver generat **15.000 €** en ingressos per subscripcions (ROAS brut d'1,5).

Per verificar la incrementalitat, l'equip realitza una prova geogràfica: apaga la campanya al 50% de les províncies del país (Grup de Control) i manté la inversió proporcional a l'altre 50% (Grup de Prova).

Després d'analitzar les dades d'ingressos totals durant el període:
* **Ingressos totals a les províncies amb anuncis (Prova):** 60.000 €
* **Ingressos totals a les províncies sense anuncis (Control):** 52.000 €
* **Ingressos incrementals reals:** $60.000\ \text{€} - 52.000\ \text{€} = 8.000\ \text{€}$

Calculem el iROAS real en comparació amb el ROAS que reporta la plataforma:
* **ROAS de la plataforma (LinkedIn Ads):** $1,5\ (150\%)$
* **iROAS real:** $\frac{8.000\ \text{€}\ (\text{Ingressos Incrementals Reals})}{10.000\ \text{€}\ (\text{Inversió a LinkedIn Ads})} = 0,8\ (80\%)$

La prova demostra que el canal d'adquisició té en realitat un retorn incremental per sota del cost d'inversió (iROAS < 1,0). El tauler de LinkedIn estava atribuint conversions d'usuaris que haurien contractat el SaaS de forma orgànica o directa per altres canals.

---

## Taula comparativa: Mètodes d'atribució actuals

| Metodologia | Dependència de galetes/píxel | Complexitat d'implementació | Nivell de privacitat | Recomanat per a |
| :--- | :--- | :--- | :--- | :--- |
| **Atribució a la plataforma (Ad Manager)** | Alta | Baixa | Baix | Optimització algorísmica de les ofertes internes de la campanya |
| **Data-Driven (GA4)** | Mitjana | Mitjana | Mitjà | Anàlisi comparativa tàctica diària entre canals digitals |
| **Prova geogràfica (Incrementalitat)** | Nul·la | Alta | Màxim | Validar la rendibilitat neta de canals d'adquisició madurs |
| **Marketing Mix Modeling (MMM)** | Nul·la | Molt alta | Màxim | Assignació estratègica de pressupostos anuals i multicanal |

---

## Infraestructura tècnica obligatòria per mitigar la ceguesa de dades

Si vols continuar obtenint dades el més netes i completes possibles als teus taulers de control digital, és crític migrar l'arquitectura de mesurament del teu lloc web cap als estàndards de privacitat moderns:

1. **Etiquetatge del servidor (Server-Side Tagging):** En lloc d'executar codi JavaScript al navegador de l'usuari (que és bloquejat per navegadors com Safari o extensions AdBlock), el servidor del teu lloc web recull els esdeveniments de conversió i els envia de servidor a servidor (Server-to-Server) als endpoints de Facebook, Google i TikTok.
2. **APIs de Conversió (CAPI):** Implementa les APIs oficials de conversió amb paràmetres de coincidència avançats (correus electrònics xifrats amb hash SHA-256, telèfons, adreces IP). Això permet a les xarxes socials fer un emparellament retrospectiu de la compra amb el compte de l'usuari, recuperant entre un 15% i un 35% d'atribució perduda.
3. **Conversions millorades (Enhanced Conversions):** Envia dades segures de primera part del formulari del checkout (com el correu electrònic introduït pel client) a Google de manera codificada. Google creua aquesta informació amb les seves bases de dades internes per identificar comptes iniciats a YouTube, Gmail o Google Search i assigna la conversió amb precisió.

## Conclusió

L'impacte d'iOS 14.5 va forçar la transició d'un model publicitari on el seguiment era determinista i exacte a un on el rendiment ha d'estimar-se mitjançant probabilitat estadística i anàlisi incremental. Les marques d'èxit en l'ecosistema actual no confien cegament en el ROAS brut que mostra la plataforma publicitària; en lloc d'això, combinen configuracions avançades del costat del servidor (CAPI) amb proves d'incrementalitat periòdiques per descobrir la veritable contribució neta de cada euro invertit en adquisició de clients.
