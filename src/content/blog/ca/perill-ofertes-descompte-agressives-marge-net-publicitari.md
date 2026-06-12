---
title: "El perill de les ofertes de descompte agressives sobre el teu marge net publicitari"
description: "Anàlisi financera de l'impacte destructiu dels cupons i descomptes sobre el marge net publicitari i la viabilitat de les teves campanyes de comerç electrònic."
pubDate: 2026-08-21
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

En la cerca constant de majors taxes de conversió i volum de vendes, l'eina més utilitzada pels gestors de comerç electrònic és el descompte directe. Cupons de benvinguda del 10%, rebaixes de temporada del 20%, o promocions flash del 30% s'apliquen amb lleugeresa sota la premissa que \"més vendes compensen la reducció del preu\".

Tanmateix, des d'una perspectiva estrictament financera, els descomptes agressius actuen com un àcid sobre el marge de contribució. En retallar directament el preu de venda final sense reduir els costos variables d'adquisició del producte, la logística o les passarel·les de pagament, els descomptes forcen que les campanyes de màrqueting digital treballin a nivells de rendiment extraordinàriament elevats només per evitar pèrdues. En aquest anàlisi desglossarem la matemàtica de l'impacte dels descomptes sobre el teu marge net publicitari i calcularem la quantitat exacta de volum addicional requerit perquè una promoció sigui rentable.

---

## La matemàtica del descompte: Impacte sobre el Marge de Contribució

Per avaluar l'impacte d'un descompte, primer hem de definir l'estructura de costos d'un producte estàndard. El preu de venda original ($P$) es compon dels costos variables ($C$, que engloben COGS, enviaments, comissions de pagament i emmagatzematge) i el marge brut en valor absolut ($M$):

$$P = C + M$$

El percentatge de marge brut inicial ($M_\%$) s'expressa com:

$$M_\% = \frac{P - C}{P} = \frac{M}{P}$$

Quan apliquem una taxa de descompte ($d$, expressada en format decimal), el nou preu de venda és $P' = P(1 - d)$. Com que els costos variables ($C$) romanen inalterats (els proveïdors no ens cobren menys ni les empreses de transport rebaixen les seves tarifes pel descompte), el nou marge brut absolut ($M'$) passa a ser:

$$M' = P(1 - d) - C = (P - C) - d \cdot P = M - d \cdot P$$

I el nou percentatge de marge brut ($M'_\%$) es redueix a:

$$M'_\% = \frac{P(1 - d) - C}{P(1 - d)}$$

### Exemple pràctic:
Imaginem una botiga en línia que ven motxilles:
* **Preu original ($P$):** 100 €
* **Costos variables unitaris ($C$):** 40 € (COGS: 25 €, Enviament: 12 €, Passarel·la de pagament: 3 €)
* **Marge brut original ($M$):** $100 - 40 = 60\ \text{€}\ (60\%)$

Si aquesta botiga aplica un descompte del **20%** ($d = 0,20$):
* **Nou preu ($P'$):** 80 €
* **Costos variables ($C$):** 40 € (romanen idèntics)
* **Nou marge brut ($M'$):** $80 - 40 = 40\ \text{€}\ (50\%)$

Encara que el preu de venda només ha disminuït un 20%, el marge brut en valor absolut ha caigut de 60 € a 40 €. Això representa una **reducció del 33,3% del teu benefici brut unitari**. Has sacrificat un terç dels teus guanys per cada unitat venuda.

---

## Quant volum addicional necessites per compensar el descompte?

Per mantenir el mateix benefici brut total abans de despeses de màrqueting, les vendes unitàries s'han d'incrementar exponencialment. La fórmula per determinar l'increment de volum requerit ($I_{\text{volumen}}$) és:

$$I_{\text{volumen}} = \frac{d}{M_\% - d} \times 100$$

On $d$ és la taxa de descompte i $M_\%$ és el marge brut original expressat en decimals.

Seguint amb l'exemple anterior d'un marge del 60% ($0,60$) i aplicant un descompte del 20% ($0,20$):

$$I_{\text{volumen}} = \frac{0,20}{0,60 - 0,20} \times 100 = \frac{0,20}{0,40} \times 100 = 50\%$$

Això significa que en aplicar un descompte del 20%, **has de vendre un 50% més d'unitats físiques** simplement per empatar el benefici brut que tenies abans del descompte. Si abans venies 100 motxilles i guanyaves 6.000 € bruts, ara necessites vendre 150 motxilles per obtenir els mateixos 6.000 €.

Què passa si el marge brut inicial és menor, per exemple, del 30% ($0,30$), i apliques el mateix descompte del 20%?

$$I_{\text{volumen}} = \frac{0,20}{0,30 - 0,20} \times 100 = \frac{0,20}{0,10} \times 100 = 200\%$$

En un producte amb marge del 30%, oferir un 20% de descompte t'obliga a **triplicar les teves vendes** (un increment del 200%) per aconseguir el mateix benefici absolut. Aquest és el camí més directe cap a la insolvència financera d'un comerç electrònic.

---

## L'impacte crític sobre el Breakeven ROAS

La inversió en publicitat de pagament afegeix una altra capa de complexitat. Per avaluar la viabilitat d'una campanya publicitària sota una estratègia de descompte, hem d'observar l'impacte sobre el **Breakeven ROAS** (ROAS de punt d'equilibri).

Recordem la fórmula del Breakeven ROAS:

$$\text{Breakeven ROAS} = \frac{1}{\text{Marge Brut (\%)}}$$

Analitzem com canvies aquest límit per a la motxilla de l'exemple anterior:

* **Sense descompte (Marge del 60% / 0,60):**
  $$\text{Breakeven ROAS} = \frac{1}{0,60} = 1,67$$

* **Amb descompte del 20% (Marge del 50% / 0,50):**
  $$\text{Breakeven ROAS} = \frac{1}{0,50} = 2,00$$

En aplicar el descompte, el ROAS mínim necessari per no perdre diners passa d'1,67 a 2,00.

Si la campanya publicitària operava a un ROAS d'1,90:
* **Sense descompte:** Generava beneficis netos (ROAS d'1,90 > 1,67).
* **Amb descompte del 20%:** Passa a generar pèrdues operatives (ROAS d'1,90 < 2,00), a menys que la taxa de conversió pugi dràsticament per compensar la caiguda d'ingressos i elevar el ROAS real per sobre de 2,00.

---

## Cas d'estudi financer: Simulació de campanya publicitària

Posem front a front dos escenaris reals de captació amb un pressupost de màrqueting fix de 10.000 € i un cost per clic (CPC) de 0,50 € (20.000 clics).

| Mètrica | Escenari A: Preu Complet | Escenari B: Descompte 20% |
| :--- | :--- | :--- |
| **Preu de Venda (AOV)** | 100 € | 80 € |
| **Cost variable unitari (C)**| 40 € | 40 € |
| **Taxa de conversió (CR)** | 2,0% | 2,7% (Increment del 35% per atractiu de l'oferta) |
| **Comandes totals** | 400 | 540 |
| **Facturació bruta** | 40.000 € | 43.200 € |
| **ROAS aconseguit** | 4,00 | 4,32 |
| **Marge Brut Unitari** | 60 € | 40 € |
| **Marge Brut Total** | 24.000 € | 21.600 € |
| **Despesa en Anuncis (Ads)** | 10.000 € | 10.000 € |
| **Marge Net (Benefici Real)**| **14.000 €** | **11.600 €** |

### Anàlisi del cas:
En l'Escenari B, la rebaixa del preu va atreure més compradors, elevant la taxa de conversió d'un 2,0% a un 2,7% i augmentant la facturació en 3.200 € (amb un ROAS de 4,32 enfront de 4,00). A simple vista, el gestor de màrqueting podria catalogar-ho com un èxit absolut.

Tanmateix, en mirar la darrera línia del compte de resultats, el benefici net real ha descendit de 14.000 € a 11.600 € (una caiguda de 2.400 €). Has hagut d'empaquetar, enviar i donar suport a **140 clients addicionals** per acabar guanyant **menys diners nets**. Adicionalment, el desgast operatiu i el risc de devolucions s'han multiplicat de forma gratuïta.

---

## Alternatives estratègiques als descomptes directes

Si els descomptes directes erosionen el marge net de forma tan severa, com podem dinamitzar les vendes i augmentar la taxa de conversió en períodes de baixa activitat? La resposta resideix a **afegir valor percebut** en lloc de reduir el preu.

1. **El model BOGO (Buy One Get One) estructurat:**
   En lloc d'un 50% de descompte directe en un producte, ofereix un \"Compra'n un i emporta't el segon a meitat de preu\" (la qual cosa equival a un 25% de descompte mitjà). La gran diferència és que obligues al client a adquirir dues unitats, distribuint el cost logístic d'enviament en un únic lliurament i augmentant el volum de producte mobilitzat.

2. **Regal per compra mínima (Gift with Purchase):**
   Ofereix un producte complementari de baix cost de fabricació (COGS baix) però alt valor percebut (per exemple, un estoig de transport de 2 € de cost però valorat en 15 € de venda) si superen un import de compra. L'impacte en el teu marge net és de tan sols 2 €, mentre que l'incentiu de conversió equival psicològicament a un gran descompte.

3. **Garanties ampliades i serveis addicionals gratuïts:**
   Afegir valor intangible com \"Suport VIP prioritari durant 1 any\" o \"Garantia de trencament estesa de 2 anys\". Aquests serveis tenen un cost de lliurament proper a zero per al comerç electrònic però eleven l'atractiu de l'oferta de cara al comprador exigent.

## Conclusió

El descompte és un analgèsic de curt termini que genera una addició perillosa tant per a la teva base de clients (que s'acostumen a no pagar mai el preu complet) com per a la salut financera del teu negoci. Abans de llançar qualsevol campanya de cupons, és vital assentar-se a realitzar el càlcul dels marges resultants. Utilitzar la matemàtica aquí exposada et permetrà blindar el teu benefici real enfront de mètriques de vanitat i assegurar que cada euro invertit en publicitat es tradueixi en rendibilitat neta sostenible.
