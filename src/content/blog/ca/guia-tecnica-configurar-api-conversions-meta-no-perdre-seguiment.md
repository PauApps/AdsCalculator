---
title: "Guia tècnica: Com configurar l'API de conversions de Meta per no perdre el seguiment"
description: "Aprèn com configurar l'API de conversions (CAPI) de Meta pas a pas per evitar la pèrdua de seguiment provocada per bloquejadors i galetes."
pubDate: 2026-07-18
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

En el panorama actual del màrqueting de resultats (performance marketing), la dependència exclusiva del píxel de navegador tradicional (basat en JavaScript al costat del client) és una garantia de subatribució i optimització ineficient. Amb l'auge dels navegadors enfocats en la privacitat (com Brave i Safari amb el seu protocol ITP), les extensions bloquejadores de publicitat (AdBlockers) i les regulacions de consentiment de galetes, s'estima que les marques perden entre el **15% i el 40%** dels esdeveniments de conversió si només utilitzen el seguiment web estàndard.

Per solucionar aquesta bretxa d'atribució, Meta va introduir l'**API de Conversions (Conversions API o CAPI)**. Aquesta tecnologia permet connectar directament les dades del vostre servidor (o CRM, passarel·la de pagament o plataforma de comerç electrònic) amb els servidors de Meta. En ometre el navegador de l'usuari en la transmissió de dades clau, el seguiment és immune als bloquejadors del client i a les galetes de curta durada.

En aquesta guia tècnica detallada, analitzarem els fonaments de l'API de conversions, els paràmetres crítics d'emparellament i com configurar la desduplicació d'esdeveniments per evitar que les vendes es reportin per duplicat.

---

## Per què necessiteu un sistema de mesura híbrid

L'error més comú en planificar la migració a CAPI és pensar que l'API de Conversions ha de substituir per complet el píxel de Meta tradicional. Meta recomana encaridament implementar una **mesura híbrida**, on tant el píxel del navegador com l'API de Conversions enviïn els mateixos esdeveniments simultàniament.

### Avantatges del model híbrid:
1. **Redundància:** Si el navegador del client bloqueja el píxel web (per exemple, mitjançant una extensió AdBlock), l'API de conversions (servidor-servidor) actua com a xarxa de seguretat i lliura l'esdeveniment de conversió a Meta.
2. **Atribució de visualització avançada:** El píxel de navegador continua sent l'eina més eficient per capturar dades de comportament del costat del client ràpides (com moviments del ratolí, desplaçaments ràpids o clics en elements dinàmics) i galetes locals de primera part.
3. **Optimització algorítmica:** Com més dades fiables rebi el píxel en temps real, amb més precisió funcionarà l'algoritme de puja Advantage+ de Meta per reduir el vostre Cost Per Adquisició (CPA).

---

## El repte de la Desduplicació: Evitar comptar doble

Atès que el navegador i el servidor envien el mateix esdeveniment de conversió (per exemple, una compra) a Meta de forma paral·lela, el sistema necessita un mecanisme per detectar que tots dos missatges corresponen a la mateixa transacció física. Si no es configura correctament, Meta registraria dues compres independents, duplicant artificialment els vostres ingressos a l'Ad Manager i arruïnant els vostres càlculs de ROAS.

Aquest procés de desduplicació es basa en la combinació exacta de dos paràmetres crítics de control:

### 1. El nom de l'esdeveniment (`event_name`)
Tots dos esdeveniments han de transmetre exactament la mateixa cadena identificativa estàndard de Meta (per exemple, `Purchase`, `AddToCart`, `InitiateCheckout` o `Lead`).

### 2. L'identificador d'esdeveniment (`event_id`)
Aquest paràmetre ha de ser una cadena única generada dinàmicament per a cada transacció o sessió al web. Totes dues fonts (navegador i servidor) han d'adjuntar el mateix `event_id` per a aquell esdeveniment d'usuari específic.

#### Exemple de flux de desduplicació:
* **Client al web:** Realitza una compra. El backend genera l'ID únic `compra_985721`.
* **Píxel de Navegador (Client-side):** Envia l'esdeveniment `Purchase` amb `event_id = "compra_985721"`.
* **API de Conversions (Server-side):** Envia payload `Purchase` amb `event_id = "compra_985721"`.
* **Servidors de Meta:** Reben tots dos esdeveniments. En detectar que coincideixen tant en `event_name` ("Purchase") com en `event_id` ("compra_985721") en un període de 48 hores, descarten la transmissió del navegador (o la del servidor, depenent de quina arribi en segon lloc) i guarden només un esdeveniment únic al vostre tauler.

---

## Paràmetres clau de coincidència d'usuaris (EMQ)

La qualitat de la coincidència de l'esdeveniment (Event Match Quality o EMQ) és la mètrica de Meta que qualifica com d'efectiva és la vostra API enviant dades per identificar usuaris de la seva xarxa social. Per aconseguir un EMQ superior a 6,0 (classificat com a "Bo" o "Excel·lent"), heu d'enviar la major quantitat de paràmetres del client xifrats en hashing **SHA-256** (a excepció dels camps que per naturalesa no requereixen xifrat, com l'adreça IP o el User Agent del navegador).

### Payload JSON recomanat per a l'API de Conversions:

```json
{
  "data": [
    {
      "event_name": "Purchase",
      "event_time": 1781881200, 
      "event_id": "purchase_2026_07_18_abc",
      "user_data": {
        "em": "f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a", 
        "ph": "4509a2b85e05dc9b32c6e3b2e53efc023d8c1c4f5fcd45f09abc0234de56ab12", 
        "client_ip_address": "192.168.1.50",
        "client_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)...",
        "fbc": "fb.1.1554763782725.AbCdEfGhIjKlMnOpQrStUvWxYz",
        "fbp": "fb.1.1554763782725.123456789"
      },
      "custom_data": {
        "currency": "EUR",
        "value": 89.90,
        "order_id": "purchase_2026_07_18_abc"
      },
      "action_source": "website",
      "event_source_url": "https://adsroicalc.com/ca/checkout/success"
    }
  ]
}
```

*On:*
* **`em` i `ph`:** Correu electrònic (`email`) i telèfon (`phone`) normalitzats (en minúscules, sense espais) i convertits a SHA-256.
* **`fbp` i `fbc`:** Les galetes de primera part de Meta (`_fbp` i `_fbc`). Si l'usuari ha arribat a través d'un anunci de Meta amb un paràmetre `fbclid`, la galeta `_fbc` emmagatzemarà aquell ID. Enviar-lo garanteix una atribució del 100%.

---

## Opcions d'implementació tècnica

Hi ha tres formes principals d'integrar l'API de conversions de Meta segons el pressupost i la complexitat tècnica de la infraestructura:

1. **Passarel·les natives (Cloud integration):** Plataformes com Shopify, WooCommerce o BigCommerce ofereixen integracions directes (one-click) on la plataforma gestiona automàticament la generació d'`event_id` i l'enviament de payloads a Meta des dels seus servidors. És la millor opció per a e-commerce estàndard.
2. **Google Tag Manager Server-Side:** Consisteix a aixecar un contenidor de GTM en un servidor al núvol (com Google Cloud o Stape.io). El navegador envia les etiquetes a aquest servidor propi i és el servidor el que distribueix les peticions tant a Google Analytics com a Meta CAPI. Ofereix el màxim control sobre les dades enviades.
3. **Desenvolupament a mida (Direct API Integration):** Integrar crides HTTP POST des del backend del vostre web (Node.js, Python, PHP, Ruby) utilitzant els SDKs oficials de Meta Business SDK o peticions `curl` directes a l'endpoint `/events` de la Graph API de Meta.

## Conclusió

Implementar l'API de Conversions de Meta no és una optimització de màrqueting opcional; és un requisit tècnic bàsic per mantenir la precisió operativa en la publicitat digital post-iOS 14.5. Configurar correctament l'enviament híbrid amb paràmetres robustos d'emparellament i desduplicació sòlida mitjançant `event_id` us permetrà recuperar el volum de dades del vostre píxel, calibrar de forma realista el vostre ROAS net i donar a l'algoritme intel·ligent de Meta el combustible necessari per adquirir nous clients amb eficiència.
