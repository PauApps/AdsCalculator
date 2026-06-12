---
title: "Errors comuns al calcular el cost per lead (CPL) en negocis de serveis locals"
description: "Falles analítiques en estimar el CPL en serveis locals i com calcular de forma precisa el retorn real de la teva inversió publicitària."
pubDate: 2026-10-17
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

Per als negocis de serveis locals (clíniques mèdiques, despatxos d'advocats, serralleries, empreses de reformes, instal·ladors de climatització, entre d'altres), la captació de clients a través de campanyes de publicitat online (Google Ads, Meta Ads, Local Services Ads) és el motor de creixement fonamental. En aquests models de negoci, la mètrica reina sol ser el **Cost per Lead (CPL)**.

No obstant això, en la pràctica analítica diària, la immensa majoria de les PIMES i agències cometen errors metodològics greus en definir, rastrejar i calcular aquesta mètrica. El resultat d'un càlcul erroni del CPL és una falsa sensació de rentabilitat que pot portar una empresa a escalar campanyes publicitàries que, en realitat, estan erosionant el seu marge net de benefici.

En aquest article analitzem de forma matemàtica i tècnica les falles analítiques més recurrents i establim la metodologia correcta per estimar el retorn real dels leads locals.

---

## 1. Confondre Leads Totals de Plataforma amb Leads Qualificats (MQL/SQL)

El primer i més comú error consisteix a extreure la dada de conversió crua directament del panell de control de Google Ads o Meta Ads i dividir el pressupost invertit entre aquest número. Les plataformes publicitàries registren com a conversió qualsevol esdeveniment configurat: una trucada de tres segons, un clic al botó de WhatsApp o un formulari enviat.

No obstant això, en els serveis locals, una proporció substancial d'aquests contactes no representa una oportunitat comercial real. Entre ells es troben:
*   Usuaris buscant feina.
*   Proveïdors intentant vendre els seus serveis.
*   Trucades per error o números de telèfon falsos introduïts en els formularis.
*   Consultes fora de la zona de cobertura geogràfica del negoci.

Per solucionar això, hem de definir matemàticament el **Cost per Lead Qualificat per Vendes (Cost Per Sales Qualified Lead - CPCSQL)** o simplement **CPL Real**:

$$CPCSQL = \frac{\text{Inversió Publicitària Total}}{\text{Leads Totals} \times CSR}$$

On $CSR$ (*Lead Qualification Rate* o Taxa de Qualificació de Leads) és la proporció de leads que compleixen amb els requisits mínims per ser atesos per l'equip comercial:

$$CSR = \frac{\text{Leads Qualificats}}{\text{Leads Totals}}$$

**Exemple Pràctic:**
Si invertim 2.000 € i la plataforma reporta 100 conversions (CPL aparent de 20 €), però després de l'auditoria comercial només 40 trucades eren de potencials clients reals dins de la nostra zona de servei ($CSR = 0.40$), el cost per lead qualificat real és:

$$CPCSQL = \frac{2000}{100 \times 0.40} = 50\ \text{€}$$

Un CPL real de 50 € en lloc de 20 € canvia per complet la viabilitat financera del canal d'adquisició.

---

## 2. No depurar l'impacte del Trànsit de Marca (Brand Traffic)

Un altre error metodològic crític és agrupar les mètriques de les campanyes de cerca de marca (*Brand Campaigns*) amb les campanyes de prospecció genèrica (*Generic/Non-Brand*).

Molts usuaris que ja coneixen el negoci local (a través de recomanacions, trànsit orgànic, vehicles rotulats, etc.) busquen el nom exacte de l'empresa a Google i fan clic en els anuncis de marca en lloc de la fitxa orgànica de Google Business Profile.

En incloure aquestes conversions de marca en el càlcul global:
*   El CPL general es redueix de forma artificial, ja que el cost per clic i la taxa de conversió de marca són extremadament favorables.
*   Es genera la il·lusió que les campanyes de captació freda estan funcionant bé, quan en realitat el negoci està pagant per leads que haurien arribat de forma orgànica o directa sense necessitat d'inversió publicitària.

La fórmula de CPL s'ha de calcular **excloent estrictament les campanyes de marca**:

$$CPL_{\text{Genèric}} = \frac{\text{Inversió Publicitària (Total - Campanyes Marca)}}{\text{Leads Generats (Total - Leads Marca)}}$$

---

## 3. Ignorar els costos tecnològics i de gestió operativa

El cost de captació no es limita únicament al pagament directe a Google o Meta pel trànsit web. Per operar una campanya de serveis locals de forma professional, es requereixen eines de programari específiques i recursos humans que són indispensables per al rastreig i l'atribució. Aquests costos addicionals inclouen:
*   Llicències de plataformes de *Call Tracking* (rastreig de trucades) com CallRail o Ringover.
*   Subscripcions al CRM de vendes per processar els leads.
*   Costos d'allotjament i integracions (Zapier, Make).
*   Honoraris de l'agència de màrqueting o de l'especialista intern encarregat de l'optimització.

Ignorar aquestes variables de cost subestima el verdader **Cost d'Adquisició de Clients (CAC)**. La equació completa per calcular el cost d'un lead llest per a conversió comercial s'ha d'estructurar així:

$$CPL_{\text{Total}} = \frac{\text{Inversió en Ads} + \text{Cost Programari Atribució} + \text{Costos de Gestió}}{\text{Leads Qualificats}}$$

---

## 4. Analitzar el CPL sense ponderar el Valor de Vida del Client (LTV)

Un error estratègic comú és descartar un canal de captació perquè el seu CPL és \"massa alt\" en comparació amb la primera transacció de venda, sense tenir en compte la recurrència del servei.

En serveis locals recurrents (per exemple, clíniques dentals amb tractaments continuats, gestories comptables o contractes de manteniment de climatització), el benefici no s'obté en la primera visita, sinó al llarg de la relació contractual.

Per determinar si un CPL és sostenible, hem de calcular el **Valor del Cicle de Vida del Client (LTV)**:

$$LTV = APV \times AFR \times ALT$$

On:
*   $APV$ és el Valor Mitjà de Compra (*Average Purchase Value*).
*   $AFR$ es la Freqüència de Compra Anual (*Average Frequency Rate*).
*   $ALT$ és la Retenció Mitjana del Client en Anys (*Average Lifetime*).

A partir d'aquest valor, i coneixent la Taxa de Tancament de Leads Qualificats ($CR_{\text{Sales}}$), podem definir el **CPL Màxim Permès** abans d'incórrer en pèrdues, aplicant un factor de marge de contribució desitjat ($MC$, expressat en decimals):

$$CPL_{\text{Màxim}} = LTV \times MC \times CR_{\text{Sales}}$$

Si una clínica dental té un LTV de 1.200 €, el seu marge de contribució objectiu és del $40\%$ ($MC = 0.40$), i el seu equip comercial tanca el $25\%$ de les trucades de diagnòstic ($CR_{\text{Sales}} = 0.25$), el CPL màxim que pot suportar és:

$$CPL_{\text{Màxim}} = 1200 \times 0.40 \times 0.25 = 120\ \text{€}$$

Si la clínica dental avalgués el CPL basant-se únicament en la primera consulta de neteja bucal (que costa 50 €), un CPL de 80 € semblaria inviable i deficitari. No obstant això, en ponderar el LTV (1.200 €), descobrim que pagar 80 € per lead qualificat és altament rentable per al creixement del negoci a mig termini.
