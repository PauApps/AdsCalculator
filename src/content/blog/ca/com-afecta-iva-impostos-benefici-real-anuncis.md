---
title: "Com afecta l'IVA i els impostos ocults al benefici real dels teus anuncis"
description: "Aprèn com l'IVA, la Taxa Google i els impostos intracomunitaris afecten el ROAS i el benefici net real de les teves campanyes de publicitat."
pubDate: 2026-06-12
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

En el màrqueting digital, la majoria d'eines i plataformes publicitàries (com ara Facebook Ads, Google Ads o TikTok Ads) estan dissenyades en entorns anglosaxons on operen de manera nativa sense tenir en compte els impostos sobre les vendes en els informes de rendiment. Com a resultat, els taulers de control d'aquestes plataformes mostren ingressos bruts i costos publicitaris que no reflecteixen la realitat fiscal de mercats com l'europeu o el llatinoamericà.

Per a un anunciant a Espanya o la Unió Europea, ignorar l'**IVA (Impost sobre el Valor Afegit)** i altres **impostos ocults** (com els recàrrecs per serveis digitals o la Taxa Google) en calcular el ROAS i el ROI és un camí directe cap a la pèrdua de rendibilitat. L'IVA no és diners teus; és un impost que recaudes en nom de l'Estat. En aquest article tècnic, analitzarem com afecten aquests impostos al benefici net real de les teves campanyes i com integrar-los correctament en les teves equacions financeres.

---

## El perill de calcular el ROAS amb ingressos bruts (amb IVA)

L'error més comú en el comerç electrònic és configurar el píxel de seguiment (o l'API de Conversions) per enviar el valor total del carret de la compra, el qual inclou l'IVA del país del comprador (que a Espanya és generalment del **21%**).

Si la teva botiga factura 12.100 € en vendes brutes registrades pel píxel, i has invertit 3.000 € en anuncis, el tauler de Facebook Ads et mostrarà un ROAS molt atractiu:

$$\text{ROAS (Fals)} = \frac{12.100\ \text{€}}{3.000\ \text{€}} = 4.03$$

Tanmateix, l'IVA d'aquestes vendes ($12.100 - 10.000 = 2.100\ \text{€}$) pertany a l'Agència Tributària. Els teus ingressos nets reals són de 10.000 €. Per tant, el ROAS real dels teus anuncis és:

$$\text{ROAS (Real)} = \frac{10.000\ \text{€}}{3.000\ \text{€}} = 3.33$$

Si el teu Breakeven ROAS (calculat sobre el cost del producte) fos de 3,50, pensaries que estàs guanyant diners (ROAS de 4,03) quan en realitat estàs operant en pèrdues (ROAS real de 3,33).

### La fórmula per extreure l'IVA dels teus ingressos:
Per calcular la base imposable real (ingressos nets), has de dividir els ingressos bruts entre 1 més el tipus impositiu aplicable expressat en decimals:

$$\text{Ingressos Nets} = \frac{\text{Ingressos Bruts}}{1 + \text{Tipus d'IVA}}$$

*Exemple per a Espanya (21%):*
$$\text{Ingressos Nets} = \frac{12.100\ \text{€}}{1 + 0{,}21} = 10.000\ \text{€}$$

---

## Impostos ocults en la facturació de publicitat

No només les vendes estan subjectes a impostos. La compra d'espai publicitari també té implicacions fiscals importants que molts anunciants novells ignoren:

### 1. L'IVA Intracomunitari i el Registre VIES
La majoria de les grans plataformes tecnològiques que venen publicitat (Meta, Google, TikTok) facturen des de les seves seus europees a Irlanda. Si la teva empresa és ubicada a Espanya i no està registrada en el **Registre d'Operadors Intracomunitaris (ROI)** a través del cens VIES, aquestes plataformes et cobraran l'IVA corresponent (21%) directament en la factura de publicitat.
* **Si estàs registrat en el ROI (VIES):** S'aplica el mecanisme d'**inversió del subjecte passiu**. Reps factures sense IVA i has d'autoliquidar-lo en la teva declaració trimestral (model 303/349), la qual cosa no representa un cost financer directe perquè és un IVA suportat i repercutit alhora.
* **Si NO estàs registrat en el ROI:** Meta o Google et cobraran el 21% d'IVA en cada factura. Si el teu pressupost mensual en anuncis és de 5.000 €, pagaràs 1.050 € addicionals d'IVA que perdràs com a cost directe si no ets un subjecte passiu amb dret a deducció total o si no realitzes els tràmits comptables correctes.

### 2. Taxes de Destinació i Recàrrecs per Serveis Digitals (DST)
En els darrers anys, diversos països han implementat impostos sobre els serveis digitals (coneguts informalment com a "Taxa Google"). Plataformes com Google Ads i Apple Search Ads traslladen aquest cost directament als anunciants afegint un recàrrec percentual automàtic a les factures segons el país on es mostrin els anuncis:
* **Espanya:** Google Ads aplica un recàrrec del **3%** sobre el cost dels anuncis mostrats en aquest territori.
* **Regne Unit:** S'aplica un recàrrec del **2%**.
* **Àustria / Turquia:** Els recàrrecs poden arribar al **5%** o **7%**.

Aquest percentatge extra s'ha de sumar directament a la teva despesa publicitària (Ad Spend) real en calcular el CPA i el ROI de les teves campanyes.

---

## Cas pràctic: L'impacte fiscal en un anunciant no optimitzat

Comparem dos anunciants que venen el mateix producte a Espanya amb les mateixes campanyes publicitàries, però amb una gestió fiscal diferent.

### Dades comunes:
* **Producte (AOV amb IVA):** 121 € (Preu net: 100 €, IVA: 21 €)
* **Unitats venudes:** 100 unitats (Ingressos bruts: 12.100 €)
* **Despesa publicitària base:** 3.000 € (segons el tauler de Facebook Ads)
* **COGS dels productes venuts:** 4.000 €
* **Taxa de recàrrec DST (Taxa Google/Meta a Espanya):** 3%

### Anunciant A (No optimitzat - Ignora impostos en les seves mètriques):
* Considera que els seus ingressos són de 12.100 €.
* No està registrat en el VIES (ROI), de manera que Meta li cobra un 21% d'IVA en la factura d'anuncis ($3.000 \times 1{,}21 = 3.630\ \text{€}$).
* A més, se li aplica el recàrrec de destinació del 3% sobre la despesa base ($3.000 \times 0{,}03 = 90\ \text{€}$).
* **Despesa total en anuncis real:** $3.630\ \text{€} + 90\ \text{€} = 3.720\ \text{€}$
* **Marge Net Real:** $\text{Ingressos Nets (10.000 €)} - \text{COGS (4.000 €)} - \text{Despesa Ads Real (3.720 €)} = 2.280\ \text{€}$
* **ROI Financer Real:** $\frac{2.280\ \text{€}}{7.720\ \text{€}} \times 100 = 29{,}53\%$

### Anunciant B (Optimitzat fiscalment):
* Configura la seva analítica per reportar ingressos nets d'IVA (10.000 €).
* Està registrat en el VIES, de manera que rep factures de publicitat amb IVA del 0% (inversió del subjecte passiu).
* Assumeix el recàrrec del 3% DST ($3.000 \times 0{,}03 = 90\ \text{€}$).
* **Despesa total en anuncis real:** $3.000\ \text{€} + 90\ \text{€} = 3.090\ \text{€}$
* **Marge Net Real:** $\text{Ingressos Nets (10.000 €)} - \text{COGS (4.000 €)} - \text{Despesa Ads Real (3.090 €)} = 2.910\ \text{€}$
* **ROI Financer Real:** $\frac{2.910\ \text{€}}{7.090\ \text{€}} \times 100 = 41{,}04\%$

### Conclusió del cas:
L'Anunciant B, simplement per estar registrat correctament en el ROI i descomptar l'IVA dels seus ingressos en optimitzar campanyes, obté un **11,5% més de rendibilitat neta directa** i evita prendre decisions equivocades basades en un ROAS inflat artificialment per impostos.

---

## Consells pràctics per a anunciants

Per evitar sorpreses fiscals i blindar el benefici real dels teus anuncis, implementa els passos següents immediatament:

1. **Configura el seguiment de valor net en el Píxel:** Si fas servir WooCommerce, Shopify o Magento, assegura't que el valor transmès en els esdeveniments `Purchase` sigui el subtotal net d'IVA.
2. **Dona't d'alta en el ROI (Model 036/037):** Si operes des d'Espanya, sol·licita al teu gestor fiscal l'alta en el Registre d'Operadors Intracomunitaris per evitar el recàrrec de l'IVA en les teves factures de publicitat europees.
3. **Afegeix un 3-5% de marge de seguretat als teus càlculs de ROAS:** Considera sempre els recàrrecs locals (com el DST de Google o recàrrecs per fluctuació de moneda a Facebook) dins del cost publicitari.

## Conclusió

En publicitat digital, la facturació és vanitat, el benefici net és realitat i la caixa és la reina. No deixis que l'IVA i els impostos ocults distorsionin el rendiment de les teves campanyes. En integrar la perspectiva fiscal dins de les teves fórmules de ROAS i ROI, passaràs a jugar en la lliga dels anunciants professionals que escalen amb números reals i balanços financers sòlids.
