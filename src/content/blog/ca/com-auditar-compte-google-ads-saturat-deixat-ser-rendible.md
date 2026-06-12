---
title: "Com auditar un compte de Google Ads saturat que ha deixat de ser rendible"
description: "Passos i KPIs per realitzar una auditoria en comptes de Google Ads que perden rendiment."
pubDate: 2026-09-13
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

El declivi en el rendiment d'un compte de Google Ads és un dels problemes més frustrants per a directors de màrqueting i media buyers. Comptes que històricament mantenien un retorn de la inversió publicitària (ROAS) saludable i estable comencen a experimentar increments progressius en el Cost Per Adquisició (CPA) sense variacions evidents en la configuració de les campanyes. Aquest fenomen se sol anomenar "saturació del compte".

Quan una estructura publicitària a Google Ads es satura, no significa simplement que el mercat s'hagi esgotat. Normalment, implica una combinació de fatiga d'audiències, canibalització interna de keywords, licitacions algorítmiques atrapades en bucles d'optimització ineficients i dispersió del pressupost en xarxes secundàries de baixa conversió. En aquesta guia tècnica explicarem el pas a pas metodològic per auditar un compte saturat i les mètriques necessàries per recuperar-ne la rendibilitat.

---

## 1. Els Símptomes d'un Compte de Google Ads Saturat

Abans de reestructurar les campanyes, és imperatiu identificar l'arrel del problema. Un compte saturat sol mostrar els següents patrons en les seves dades històriques:

- **Increment del cost amb conversions estancades:** El pressupost diari es consumeix en la seva totalitat, però el volum absolut de conversions roman pla o disminueix.
- **Degradació del ROAS Marginal:** Cada euro addicional invertit genera un retorn significativament menor que l'anterior.
- **Canibalització de trànsit orgànic i de marca:** Un percentatge desproporcionat de les conversions prové de termes de cerca de marca (*brand keywords*), ocultant la ineficiència de les campanyes de captació genèriques (*generic Search* o *Performance Max*).
- **Fatiga creativa i d'audiències a Display/YouTube:** Els anuncis gràfics i de vídeo mostren una caiguda dràstica en el percentatge de clics (CTR) i un augment en el cost per cada mil impressions (CPM).

---

## 2. Metodologia d'Auditoria en 4 Passos

Per diagnosticar i corregir aquestes ineficiències, estructurarem l'auditoria en quatre àrees d'anàlisi profunda.

### Pas 1: Aïllament del Trànsit de Marca vs. Genèric

Un dels errors de diagnòstic més comuns és analitzar el ROAS agregat del compte. Si la teva campanya de *Performance Max* (PMax) o de cerca capta termes de la teva pròpia marca, el ROAS es veurà inflat artificialment. El trànsit de marca sol tenir una taxa de conversió molt alta i un cost per clic (CPC) molt baix, cosa que emmascara les pèrdues sofertes en les campanyes adreçades a usuaris freds.

Per netejar aquesta mètrica, hem de desglossar les dades de conversió i aplicar la fórmula del **nCPA** (Cost per Adquisició de Nous Clients):

$$nCPA = \frac{\text{Despesa en Anuncis Total} - \text{Despesa en Anuncis de Marca}}{\text{Conversions de Nous Clients}}$$

Si en excloure les cerques de marca descobreixes que el teu nCPA real és superior al valor de vida del client (*Customer Lifetime Value* o LTV) a curt termini, el compte no és rendible i requereix una depuració immediata de termes mitjançant llistes de paraules clau negatives de marca.

### Pas 2: Anàlisi de l'Eficiència de Licitació Algorítmica (Smart Bidding)

Les estratègies de licitació automatitzades de Google (com tCPA o tROAS) es basen en l'aprenentatge automàtic (*Machine Learning*). No obstant això, quan les dades de conversió disminueixen o es tornen inestables, l'algorisme pot entrar en una espiral de mort (*death spiral*). En aquest escenari, l'algorisme redueix les licitacions i l'abast per assegurar que compleix amb el tROAS configurat, la qual cosa al seu torn disminueix el volum de conversions, provocant que l'algorisme redueixi encara més el trànsit.

Per auditar això:
1. Revisa l'historial de canvis del compte en els darrers 90 dies. Canvis freqüents en els objectius de tROAS (més d'un cop cada 14 dies) desestabilitzen l'algorisme.
2. Analitza el retard de conversió (*conversion delay*). Si els teus clients triguen de mitjana 15 dies des del primer clic fins a la compra, i avalues el rendiment basant-te en la darrera setmana, prendràs decisions errònies basades en dades incompletes.

### Pas 3: Desglossament d'Emplaçaments i Xarxes a Performance Max

Les campanyes de Performance Max són caixes negres que distribueixen el pressupost entre Cerca, Shopping, Display, YouTube, Gmail i la xarxa de Partners de Cerca de Google. Amb freqüència, quan una campanya PMax comença a perdre rendibilitat, és perquè Google està desviant el pressupost cap a la xarxa de Display i la xarxa de Partners per consumir el pressupost diari, xarxes que solen tenir un trànsit d'inferior qualitat i altes taxes de clics accidentals o fraudulents.

Tot i que la interfície estàndard oculta aquests desglossaments, pots auditar-ho de la següent manera:
- Utilitza scripts personalitzats de Google Ads per desglossar el cost invertit en la xarxa de Display dins de PMax.
- Revisa la pestanya de "Emplaçaments" en els informes detallats per excloure aplicacions mòbils de jocs i llocs web de baixa qualitat a nivell de compte.

### Pas 4: Anàlisi de la Superposició de Subhastes (*Auction Overlap*)

Quan estructurem múltiples campanyes enfocades al mateix tipus de producte o audiència, correm el risc de competir contra nosaltres mateixos en les subhastes de Google. Tot i que tècnicament Google Ads evita l'autolicitació que infli artificialment el preu del CPC per a un mateix anunciant, la superposició d'audiències i keywords genera una fragmentació de dades històriques que confon les estratègies de licitació de Smart Bidding.

Hem de comprovar l'informe d'*Auction Insights* (Informació de subhastes) per veure si diferents campanyes de cerca o shopping registren les mateixes keywords objectiu, i unificar pressupostos i estructures sota una arquitectura simplificada (com el framework *Hagakure* o la consolidació en campanyes temàtiques més àmplies).

---

## 3. KPIs Avançats per Diagnosticar Pèrdues de Rendibilitat

Durant l'auditoria, has de calcular i monitoritzar de prop aquests tres indicadors financers:

### 1. Retorn Marginal de la Despesa en Anuncis (mROAS)

El ROAS mitjà sol donar una falsa sensació de seguretat. El que realment determina si podem continuar escalant o si hem de retallar la inversió és el **mROAS**, que mesura el retorn obtingut pels darrers euros invertits:

$$mROAS = \frac{\Delta \text{Ingressos}}{\Delta \text{Despesa en Anuncis}} = \frac{\text{Ingressos}_{\text{Període B}} - \text{Ingressos}_{\text{Període A}}}{\text{Inversió}_{\text{Període B}} - \text{Inversió}_{\text{Període A}}}$$

Si el $mROAS < 1.0$, qualsevol increment de pressupost estarà reduint el benefici net total de l'empresa, fins i tot si el ROAS mitjà visible al quadre de comandament de Google Ads segueix semblant acceptable (per exemple, $3.0$).

### 2. Taxa de Pèrdua d'Impressions per Pressupost i per Rànquing

L'anàlisi de la quota d'impressions (*Search Impression Share*) és el millor indicador de la saturació i salut de les teves campanyes:

- **Quota d'impressions perduda per pressupost (Search Lost IS budget):** Si aquest indicador és alt (per exemple, $>30\%$), significa que les teves campanyes es queden sense diners d'hora durant el dia. Això obliga l'algorisme a suboptimitzar les licitacions perquè durin tot el dia, reduint la rendibilitat global.
- **Quota d'impressions perduda per rànquing (Search Lost IS rank):** Si aquest indicador puja, significa que el teu Ad Rank (determinat pel Nivell de Qualitat i l'import de la licitació) és insuficient per competir. En lloc de pujar licitacions, has d'auditar la rellevància de les teves pàgines de destinació (*landing pages*) i la taxa de conversió històrica.

---

## 4. Plan d'Acció per Desaturar i Recuperar el Compte

Una vegada completada l'auditoria, implementa els següents canvis estructurals:

1. **Consolidació de l'estructura:** Redueix el nombre de campanyes. Si tens 5 campanyes de cerca amb pressupostos petits que amb prou feines aconsegueixen 10-15 conversions al mes cadascuna, consolida-les en una sola campanya. Els algorismes d'aprenentatge de Google Ads requereixen un volum mínim d'unes 30 a 50 conversions per campanya al mes per optimitzar de manera eficient les licitacions de forma automàtica.
2. **Exclusió estricta de marca:** Crea llistes d'exclusió de marca a les teves campanyes de Performance Max i redirigeix aquest trànsit a una campanya de Cerca dedicada amb concordança exacta i amb una licitació de cost per clic optimitzat baix.
3. **Neteja d'audiències i emplaçaments:** Exclou les xarxes de socis de cerca i la xarxa de Display en les campanyes de Cerca genèriques. A PMax, afegeix exclusions de categories d'aplicacions mòbils a nivell de compte per evitar el trànsit brossa.
4. **Implementació de conversions millorades (*Enhanced Conversions*):** Assegura't d'enviar senyals precisos a Google utilitzant dades pròpies xifrades dels teus clients. Això ajuda l'algorisme a identificar patrons d'usuaris d'alt valor fins i tot amb les restriccions modernes de privacitat i galetes (*cookies*).

El sanejament d'un compte saturat a Google Ads no consisteix a incrementar el pressupost de manera temerària o provar totes les funcions noves que suggereix el panell de recomanacions de Google. Consisteix a simplificar l'estructura publicitària, eliminar les ineficiències de trànsit que erosionen els marges i alimentar l'algorisme amb dades netes i d'alta conversió.
