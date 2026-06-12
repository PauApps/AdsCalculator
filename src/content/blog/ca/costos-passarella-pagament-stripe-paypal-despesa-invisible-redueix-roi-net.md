---
title: "Costos de passarel·la de pagament (Stripe, PayPal): La despesa invisible que redueix el teu ROI net"
description: "Impacte de les comissions de processament de pagament en el marge net del teu e-commerce."
pubDate: 2026-11-09
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

Quan analitzem la rendibilitat d'un comerç electrònic, l'atenció sol centrar-se de forma gairebé obsessiva en dues grans àrees: el cost d'adquisició de clients (CAC) a través de la inversió publicitària (Ad Spend) i el cost dels béns venuts (COGS). No obstant això, existeix un drenatge financer silenciós que opera en cada transacció individual, erosionant els marges de contribució abans que els diners arribin tan sols al compte bancari de l'empresa. Ens referim als **costos de processament i passarel·les de pagament**.

Passarel·les líders com Stripe, PayPal, Shopify Payments o Adyen no presten els seus serveis de forma gratuïta. Les seves comissions combinen percentatges variables i taxes fixes per transacció que, si bé individualment semblen insignificants, agregades a gran escala poden representar entre l' $1,5\%$ i el $5\%$ de la facturació bruta total d'una botiga online. En aquest article tècnic, analitzarem matemàticament l'impacte d'aquestes comissions en el Retorn de la Inversió (ROI) net, com afecten el ROAS de punt d'equilibri (Break-Even ROAS) i quines estratègies pots implementar per mitigar aquesta despesa invisible.

---

## L'anatomia de les comissions de pagament: Què estem pagant realment?

Per avaluar l'impacte real en el marge, primer hem d'entendre l'estructura de costos dels principals processadors de pagament. Generalment, els models de preus s'editen sota una fórmula mixta:

$$\text{Comissió per Transacció} = (\text{Valor de la Comanda} \times f) + c$$

On:
*   $f$ es el percentatge variable cobrat per la passarel·la (taxa d'intercanvi de la targeta, costos de l'esquema de pagament i marge del processador).
*   $c$ és una comissió fixa per transacció completada (cost de processament tècnic).

### Estructura de tarifes estàndard del mercat (Targetes de la UE/Schengen):
*   **Stripe:** $1,4\% + 0,25\ \text{€}$ per a targetes europees estàndard; $2,9\% + 0,25\ \text{€}$ per a targetes internacionals i corporatives.
*   **PayPal:** Varia significativament segons el volum, però la tarifa base sol ser de $2,9\% + 0,35\ \text{€}$ (i pot ascendir a més del $4\%$ si hi ha canvi de divisa o transferències internacionals).
*   **Shopify Payments:** Depèn del pla contractat (de $1,6\% + 0,25\ \text{€}$ en el pla Basic a $1,3\% + 0,25\ \text{€}$ en el pla Advanced).

> [!WARNING]
> La conversió de divises (Dynamic Currency Conversion) i els pagaments transfronterers afegeixen recàrrecs ocults d'entre l' $1\%$ i el $3\%$ addicional sobre el tipus de canvi oficial, la qual cosa pot triplicar el cost de processament en vendes internacionals.

---

## Impacte matemàtic en la rendibilitat neta

Per il·lustrar com influeixen aquestes comissions en el benefici real, analitzem l'equació clàssica del Benefici Net ($B_{\text{neto}}$) d'un e-commerce:

$$B_{\text{neto}} = \text{Facturació Bruta} - \text{COGS} - \text{Logística (Enviament i preparació)} - \text{Ad Spend} - \text{Costos Fixos/Estructura} - \text{Comissions de Pagament}$$

Si expressem les comissions de pagament de forma desglossada utilitzant el volum total de comandes ($N$) i el tiquet mitjà o Valor Mitjà de la Comanda ($\text{AOV}$), obtenim la següent relació per als costos financers de passarel·la ($\text{CFP}$):

$$\text{CFP} = \sum_{i=1}^{N} (\text{Venda}_i \times f + c)$$

Si assumim valors mitjans estables, podem simplificar-ho com:

$$\text{CFP} = \text{Facturació Bruta} \times f + N \times c$$

Atès que la Facturació Bruta és igual a $N \times \text{AOV}$, podem reescriure l'equació:

$$\text{CFP} = N \times (\text{AOV} \times f + c)$$

### Cas Pràctic: L'impacte de l'AOV en l'erosió del marge

Considerem dues botigues online diferents, ambdues facturant $50.000\ \text{€}$ al mes utilitzant Stripe estàndard ($1,4\% + 0,25\ \text{€}$ de comissió mitjana ponderada):

*   **Botiga A (Baix Tiquet):** AOV de $15\ \text{€}$. Requereix $3.333$ comandes per facturar $50.000\ \text{€}$.
*   **Botiga B (Alt Tiquet):** AOV de $100\ \text{€}$. Requereix $500$ comandes per facturar $50.000\ \text{€}$.

Calculem els costos de passarel·la per a cadascuna:

#### Botiga A (AOV = 15 €):
$$\text{CFP}_A = 3.333 \times (15\ \text{€} \times 0,014 + 0,25\ \text{€}) = 3.333 \times (0,21\ \text{€} + 0,25\ \text{€}) = 3.333 \times 0,46\ \text{€} = 1.533,18\ \text{€}$$
*Percentatge efectiu sobre facturació:* **$3,07\%$**

#### Botiga B (AOV = 100 €):
$$\text{CFP}_B = 500 \times (100\ \text{€} \times 0,014 + 0,25\ \text{€}) = 500 \times (1,40\ \text{€} + 0,25\ \text{€}) = 500 \times 1,65\ \text{€} = 825,00\ \text{€}$$
*Percentatge efectiu sobre facturació:* **$1,65\%$**

Com podem veure, per al mateix volum de facturació, la botiga amb menor tiquet de venda paga gairebé el doble en comissions de passarel·la en termes relatius a causa del pes de la taxa fixa de transacció ($c$). Si aquesta botiga opera amb un marge net ajustat del $10\%$, les tarifes de pagament estan consumint gairebé un terç de la seva rendibilitat final.

---

## Com afecten les comissions de pagament al ROAS de Punt d'Equilibri

El ROAS de punt d'equilibri ($\text{ROAS}_{\text{BE}}$) és la mètrica de control que defineix el punt exacte en què una campanya publicitària no genera pèrdues ni guanys. Tradicionalment es calcula com:

$$\text{ROAS}_{\text{BE}} = \frac{1}{\text{Marge de Contribució Brut}}$$

On el marge es calcula com:

$$\text{Marge} = \frac{\text{AOV} - \text{COGS} - \text{Enviament}}{\text{AOV}}$$

Si afegim les comissions del processador de pagaments al càlcul unitari, el marge de contribució real es contrau i la fórmula del ROAS de punt d'equilibri es recalcula de la següent manera:

$$\text{ROAS}_{\text{BE (real)}} = \frac{\text{AOV}}{\text{AOV} - \text{COGS} - \text{Enviament} - (\text{AOV} \times f + c)}$$

### Simulació numèrica de l'impacte en el ROAS mínim exigible:
Suposem un producte amb els següents valors unitaris:
*   $\text{Preu de venda (AOV)} = 50\ \text{€}$
*   $\text{COGS} = 18\ \text{€}$
*   $\text{Cost d'enviament} = 5\ \text{€}$

#### Sense considerar passarel·les:
$$\text{Marge} = \frac{50 - 18 - 5}{50} = \frac{27}{50} = 0,54\ (54\%)$$
$$\text{ROAS}_{\text{BE (teòric)}} = \frac{1}{0,54} = 1,85$$

#### Considerant PayPal com a mètode de pagament ($2,9\% + 0,35\ \text{€}$):
$$\text{Cost de Passarel·la} = (50 \times 0,029) + 0,35 = 1,45 + 0,35 = 1,80\ \text{€}$$
$$\text{Marge Net Real} = \frac{50 - 18 - 5 - 1,80}{50} = \frac{25,20}{50} = 0,504\ (50,4\%)$$
$$\text{ROAS}_{\text{BE (real)}} = \frac{1}{0,504} = 1,98$$

En aquest escenari, l'equip d'adquisició que optimitzi basant-se en el ROAS teòric de $1,85$ estarà perdent diners en termes nets en cada conversió si el seu ROAS real se situa entre $1,85$ i $1,98$. La ignorància d'aquesta \"petita\" despesa de processament introdueix un biaix del $7\%$ en el càlcul de rendibilitat.

---

## Estratègies avançades d'optimització de costos de processament

Per protegir el ROI net de les garres dels processadors de pagament, els directors financers i de growth d'e-commerce han d'implementar tàctiques d'optimització activa:

### 1. Enrutament intel·ligent de pagaments (Smart Routing)
Utilitza orquestradors de pagament que dirigeixin dinàmicament les transaccions al proveïdor de serveis de pagament (PSP) que ofereixi la tarifa més baixa en funció del país del client, el tipus de targeta (dèbit, crèdit, corporativa) o la xarxa emissora.

### 2. Promoure mètodes de pagament locals i alternatius (APM)
Els mètodes de pagament locals solen tenir estructures de tarifes substancialment més econòmiques que les xarxes de targetes globals (Visa/Mastercard) i especialment que PayPal:
*   **Bizum (Espanya):** Compta amb costos fixos i percentuals ínfims per a comerços en comparació amb les passarel·les tradicionals (sovint tarifes inferiors al $0,5\%$).
*   **SEPA Direct Debit / Transferències directes (Klarna/Sofort):** Ideals per a tiquets alts, substitueixen el cobro per targeta per transferències directes de compte a compte amb tarifes planes molt baixes.
*   **iDEAL (Països Baixos) o Bancontact (Bèlgica):** Mètodes de cobrament dominants en els seus respectius països que operen sota costos fixos molt reduïts per transacció en lloc de percentatges elevats.

### 3. Negociació de tarifes per volum (Interchange Plus)
Quan una botiga online supera els $100.000\ \text{€}$ de facturació mensual processada, les tarifes estàndard de tarifa plana (Flat Rate) com les de Stripe deixen de ser òptimes. S'ha de negociar un model de preus **Interchange++**, on el comerç paga la taxa d'intercanvi real de la targeta més un petit percentatge fix de l'adquirent. Això redueix les comissions en targetes de dèbit de consum europees a taxes globals de processament per sota de l' $1\%$.

### 4. Traslladar el cost de passarel·les d'alt cost a l'usuari
Tot i que en algunes jurisdiccions europees existeixen restriccions per aplicar recàrrecs (surcharges) directes al client per pagar amb targeta, és perfectament legal oferir incentius o descomptes per utilitzar mètodes de pagament preferents (per exemple: \"5% de descompte addicional en pagar amb Bizum o transferència\"). Això canalitza de forma orgànica els usuaris cap a les passarel·les més rendibles per al negoci.

## Conclusió

El processament de pagaments no és un simple cost de programari inevitable; és una variable financera crítica en l'economia unitària de qualsevol comerç electrònic. Ignorar les tarifes de Stripe o PayPal distorsiona les mètriques de ROAS objectiu i devalua els càlculs del ROI net d'adquisició.

En automatitzar la recopilació de dades de passarel·les i integrar-les de manera directa en els teus models de rendibilitat, garanteixes que les teves decisions pressupostàries en Meta Ads, Google Ads o qualsevol altre canal es basin en beneficis reals transferits al teu banc, i no en estimacions d'ingressos de panells de control superficials.
