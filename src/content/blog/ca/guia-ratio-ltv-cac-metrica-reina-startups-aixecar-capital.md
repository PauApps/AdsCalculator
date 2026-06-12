---
title: "Guia del Ràtio LTV/CAC: La mètrica reina que les startups necessiten per aixecar capital"
description: "Explicació del ràtio LTV/CAC, benchmarks financers i fórmules per a startups."
pubDate: 2026-09-30
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

Per a qualsevol startup de base tecnològica, ja sigui sota un model SaaS, e-commerce de subscripció o plataforma transaccional, demostrar la viabilitat financera és el pas crític per aixecar capital de risc (*Venture Capital*). En les rondes d'inversió Seed i Series A, els inversors no només avaluen el creixement absolut de la facturació mensual (MRR o ARR), sinó la salut de les unitats econòmiques unitàries (*unit economics*).

Dins d'aquestes mètriques, el **ràtio LTV/CAC** és considerat unànimement com la reina de les mètriques d'eficiència. Aquest indicador financer revela si el motor de creixement d'una empresa és sostenible o si, per contra, està destruint capital en escalar. En aquesta guia tècnica desglossarem els seus components, les fórmules exactes per al seu càlcul i els estàndards que exigeixen els inversors.

---

## 1. Descomposició de la Mètrica: LTV i CAC

El ràtio LTV/CAC compara el valor financer total que aporta un client mitjà al llarg del seu cicle de vida a l'empresa amb el cost necessari per convèncer aquest client de comprar el nostre producte o servei.

### El Cost d'Adquisició de Clients (CAC)

El càlcul erroni del CAC és un dels errors més habituals en les auditories prèvies a una ronda d'inversió (*due diligence*). Les empreses solen simplificar-lo dividint la inversió publicitària en Ads entre els clients aconseguits. Tanmateix, el CAC real ha d'incorporar **tots** els costos associats al procés de captació de clients durant un període de temps determinat:

$$CAC = \frac{\text{Ad Spend} + \text{Salaris de l'Equip de Vendes i Màrqueting} + \text{Eines/Programari (CRM, etc.)} + \text{Agències i Freelancers}}{\text{Nombre de Nous Clients Adquirits}}$$

Si al vostre equip de vendes teniu comercials dedicats a tancar comptes (*Account Executives* o BDRs), els seus sous i comissions han d'estar sumats al numerador. En cas contrari, estareu subestimant substancialment el vostre cost de captació.

### El Valor del Cicle de Vida del Client (LTV)

El LTV (*Lifetime Value*) estima el marge net que reportarà un client des que realitza la primera transacció fins que abandona definitivament la plataforma o marca.

Per calcular el LTV de forma precisa en un model d'ingressos recurrents (subscripcions), apliquem la fórmula matemàtica següent:

$$LTV = \frac{\text{ARPU} \times \text{Marge Brut (\%)}}{\ \text{Churn Rate}}$$

On:
- **ARPU (Average Revenue Per User):** És l'ingrés mitjà mensual per client actiu. Es calcula com $\frac{\text{Ingrés Recurrent Mensual (MRR)}}{\text{Clients Actius Totals}}$.
- **Marge Brut (%):** És el percentatge d'ingressos que queda després de descomptar els costos directes associats al lliurament del servei (com ara servidors d'allotjament, suport tècnic directe o costos de passarel·la de pagament).
- **Churn Rate (Taxa de Cancelació):** El percentatge de clients que cancel·len la seva subscripció en un període de temps determinat (normalment mensual). La seva fórmula és $\frac{\text{Clients Perduts en el Període}}{\text{Clients Totals a l'Inici del Període}}$.

Incloure el Marge Brut al numerador és vital. Un error comú és usar l'ingrés brut en lloc del marge brut per al LTV. Si una startup factura 100 € al mes per usuari però els seus costos de servidors i suport són de 30 € (Marge Brut del $70\%$), el seu LTV ha de basar-se en el marge de 70 € i no en la facturació de 100 €.

---

## 2. El Ràtio LTV/CAC i els seus Benchmarks Financers

Un cop obtinguts tots dos valors, calculem el ràtio de la manera següent:

$$\text{Ràtio LTV/CAC} = \frac{LTV}{CAC}$$

Aquest ràtio proporciona una mesura de la rendibilitat del motor d'adquisició. A continuació es presenten les bandes de referència utilitzades pels fons de Venture Capital per avaluar aquest indicador:

| Ràtio LTV/CAC | Diagnòstic de Negoci | Decisió de l'Inversor |
| :--- | :--- | :--- |
| **$< 1{,}0$** | Destrucció de capital. Cada client costa més del que aportarà. | Rebuig immediat de la ronda. |
| **$1{,}0 - 2{,}0$** | Ineficient. Negoci no rendible o mal segmentat. | Requereix canvis estructurals de pricing o captació. |
| **$3{,}0$** | **Òptim i equilibrat.** L'estàndard de la indústria. | Nivell ideal per iniciar processos d'escalament. |
| **$> 5{,}0$** | Subinversió. Creixement massa conservador. | Recomanació d'incrementar Ad Spend i accelerar la captació. |

Si el ràtio és superior a $5{,}0$, tot i que sembla excel·lent a primera vista, sol indicar que la startup és massa prudent en les seves inversions de màrqueting. Podria estar captant quota de mercat de forma molt més ràpida augmentant el seu CAC sense posar en risc la viabilitat de la companyia.

---

## 3. CAC Payback Period: El Factor Crític del Flux de Caixa

El ràtio LTV/CAC té una gran limitació: no té en compte el factor temps. Una startup pot tenir un ràtio fantàstic de $5{,}0$ perquè reté molt bé els seus clients durant 5 anys, però si tarda 24 mesos a recuperar el CAC invertit el mes 1, s'enfrontarà a greus problemes de liquiditat (*cash flow*) en intentar escalar de forma agressiva.

Per això, els inversors creuen el ràtio amb el **CAC Payback Period** (Temps de Recuperació del CAC):

$$\text{CAC Payback Period (Mesos)} = \frac{CAC}{\text{ARPU} \times \text{Marge Brut (\%)}}$$

L'estàndard d'or per a startups de SaaS en etapes inicials (B2B) és un període de recuperació inferior a **12 mesos**. Per a models orientats al consumidor final (B2C), els inversors solen demanar que aquest retorn es produeixi en menys de **6 a 9 mesos**, atès que el Churn B2C tendeix a ser més volàtil i impredictible.

---

## 4. Estratègies Pràctiques per Optimitzar el Ràtio LTV/CAC

Si la vostra startup necessita preparar els números abans d'obrir una ronda d'inversió, heu d'activar palancas en totes dues parts de l'equació:

### Per Incrementar el LTV:
1. **Ajust de Preus (Pricing Optimization):** Augmentar l'ARPU és la forma més ràpida d'elevar el LTV. Implementeu models basats en l'ús o afegiu tiers premium amb funcionalitats avançades.
2. **Reducció del Churn:** Analitzeu els primers 30 dies de l'experiència de l'usuari (*Customer Onboarding*). Un flux de benvinguda deficient és la causa principal de la deserció primerenca de clients.
3. **Estratègies d'Upselling i Cross-selling:** Oferiu productes addicionals o serveis complementaris a la vostra base de clients actual per incrementar-ne el valor acumulat.

### Per Reduir el CAC:
1. **Enfocament en Canals Orgànics:** Desenvolupeu canals de trànsit propi com el SEO, màrqueting de continguts o programes de referits, que no depenguin directament del pagament per clic (PPC).
2. **Optimització de l'Embut de Vendes (CRO):** Millorar el flux de registre i el checkout del web redueix el cost unitari d'adquisició en rendibilitzar millor el trànsit de pagament existent.
3. **Qualificació de Leads en B2B (MQL a SQL):** Eviteu que l'equip de vendes dediqui temps a leads freds que tenen baixa propensió de tancament de compra.

Dominar i saber reportar el ràtio LTV/CAC juntament amb el seu període de recuperació demostra als inversors que la startup no només compta amb un gran producte, sinó amb una sòlida comprensió matemàtica i financera de com construir un negoci escalable, predictible i altament rendible.
