---
title: "Métricas clave en Amazon Ads: Diferencias críticas entre ACoS, TACoS y ROAS"
description: "Guía completa de métricas en Amazon Ads. Aprende a calcular e interpretar el ACoS, TACoS y ROAS para maximizar la rentabilidad de tu cuenta de vendedor."
pubDate: 2026-09-02
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

El ecosistema publicitario de Amazon Ads funciona bajo dinámicas radicalmente distintas a las de canales tradicionales como Meta Ads o Google Ads. En Amazon, la publicidad y el posicionamiento orgánico están íntimamente entrelazados: las ventas generadas a través de anuncios pagados (Sponsored Products, Sponsored Brands) mejoran el historial de ventas del producto (*sales velocity*) y su tasa de conversión, impulsando directamente su visibilidad orgánica en los resultados de búsqueda.

Debido a esta simbiosis entre tráfico de pago y orgánico, los vendedores de Amazon (ya sea a través de Seller Central o Vendor Central) no pueden medir la salud de su negocio basándose únicamente en el retorno publicitario directo. Es imprescindible comprender y analizar en conjunto tres métricas fundamentales: **ACoS**, **TACoS** y **ROAS**. En esta guía técnica explicaremos sus fórmulas de cálculo, diferencias críticas y cómo interpretarlas para optimizar la rentabilidad global de tu cuenta.

---

## 1. ACoS (Advertising Cost of Sales)

El **ACoS** (Coste Publicitario de las Ventas) es la métrica de eficiencia publicitaria por excelencia en la plataforma de Amazon. Expresa el porcentaje de ingresos por publicidad que se destina a cubrir el gasto en anuncios.

La fórmula de cálculo del ACoS es:

$$ACoS = \frac{\text{Gasto Publicitario (Ad Spend)}}{\text{Ventas Publicitarias (Ad Sales)}} \times 100$$

### Interpretación financiera del ACoS:
El ACoS te dice cuán eficiente es una campaña en términos puramente publicitarios. Para evaluar si tu ACoS es saludable, debes compararlo con el **Margen de Beneficio antes de Publicidad** (conocido como *Breakeven ACoS*).

* Si tu margen de beneficio bruto sobre el producto (después de restar costes de fabricación, logística FBA y tarifas de referencia de Amazon) es del 35%:
  * Un **ACoS del 35%** significa que estás en el punto de equilibrio (no ganas ni pierdes dinero con la publicidad).
  * Un **ACoS del 25%** significa que retienes un 10% de beneficio neto sobre las ventas publicitarias.
  * Un **ACoS del 45%** significa que estás perdiendo un 10% por cada venta patrocinada.

---

## 2. ROAS (Return on Ad Spend)

El **ROAS** es el retorno de la inversión publicitaria. Aunque es la métrica estándar en el resto de canales de marketing digital, en Amazon ha sido tradicionalmente secundaria frente al ACoS, aunque hoy en día ambas se muestran en la consola de publicidad.

La fórmula del ROAS es:

$$ROAS = \frac{\text{Ventas Publicitarias (Ad Sales)}}{\text{Gasto Publicitario (Ad Spend)}}$$

Como habrás observado, el ROAS es simplemente el inverso matemático del ACoS (expresado en formato decimal):

$$ROAS = \frac{1}{\text{ACoS (en decimales)}}$$

$$ACoS = \frac{1}{\text{ROAS}} \times 100$$

* Si tienes un ACoS del 20% (0,20 en decimales): $ROAS = \frac{1}{0,20} = 5,0$.
* Si tienes un ROAS de 4,0: $ACoS = \frac{1}{4,0} \times 100 = 25\%$.

---

## 3. TACoS (Total Advertising Cost of Sales)

El **TACoS** (Coste Publicitario Total de las Ventas) es la métrica más importante para evaluar la salud global de un negocio en Amazon. A diferencia del ACoS, el TACoS mide el impacto del gasto publicitario en relación con las **ventas totales** del negocio (ventas orgánicas + ventas publicitarias).

La fórmula de cálculo del TACoS es:

$$TACoS = \frac{\text{Gasto Publicitario (Ad Spend)}}{\text{Ventas Totales (Orgánicas + Publicitarias)}} \times 100$$

El TACoS es crucial porque refleja el "efecto volante" o *flywheel effect* de Amazon. Si tus anuncios de pago están posicionando bien tu producto a nivel orgánico, tus ventas orgánicas deberían crecer, lo que diluirá el peso del gasto publicitario sobre la facturación total.

---

## Comparativa de Escenarios y Relación entre ACoS y TACoS

Para tomar decisiones estratégicas de inventario, precios y pujas, debes analizar de forma combinada la tendencia del ACoS y del TACoS. Veamos los cuatro escenarios analíticos más comunes:

### Escenario A: ACoS estable o a la baja y TACoS a la baja
* **Significado:** Las campañas publicitarias están funcionando con alta eficiencia y, al mismo tiempo, el posicionamiento orgánico del producto está mejorando. El volumen de ventas orgánicas está creciendo a un ritmo más rápido que el gasto en anuncios.
* **Acción:** Es el escenario ideal. Puedes permitirte escalar el presupuesto publicitario o subir las pujas para capturar más cuota de mercado.

### Escenario B: ACoS al alza pero TACoS estable o a la baja
* **Significado:** Tus anuncios se están volviendo menos eficientes (por ejemplo, debido a una mayor competencia y CPCs más caros), pero las ventas totales del negocio siguen creciendo de manera saludable gracias al incremento de las ventas orgánicas. La publicidad sigue alimentando positivamente el algoritmo orgánico.
* **Acción:** Mantén la calma, pero audita las campañas. Optimiza palabras clave negativas y puja de forma más conservadora en términos de concordancia amplia, pero no recortes drásticamente el presupuesto ya que podrías perjudicar las ventas orgánicas colaterales.

### Escenario C: ACoS al alza y TACoS al alza
* **Significado:** Las campañas publicitarias están perdiendo eficiencia y las ventas orgánicas se están estancando o disminuyendo. El negocio se está volviendo excesivamente dependiente de la publicidad para generar cada venta, devorando el margen neto global.
* **Acción:** Intervención urgente. Necesitas revisar la tasa de conversión de la ficha de producto (imágenes, listado de beneficios, reseñas, A+ Content) y pausar palabras clave irrelevantes de alto coste.

### Escenario D: ACoS a la baja pero TACoS al alza
* **Significado:** Las campañas publicitarias parecen muy eficientes en los informes de Amazon (bajo ACoS / alto ROAS), pero el volumen de ventas orgánicas está sufriendo una fuerte caída. Esto suele ocurrir cuando tus anuncios están canibalizando tus propias palabras clave orgánicas (los usuarios hacen clic en el anuncio en lugar de hacer clic en tu listado orgánico que ya estaba en la primera posición).
* **Acción:** Realiza un test reduciendo la puja en los términos de marca o palabras clave donde ya ocupas de forma natural la primera posición orgánica para ver si las ventas se trasladan al canal gratuito.

---

## Caso práctico de cálculo completo

Analicemos las métricas mensuales de un vendedor de Amazon que comercializa accesorios de cocina:

### Datos de partida:
* **Gasto en publicidad (Ad Spend):** 4.500 €
* **Ventas atribuidas a la publicidad (Ad Sales):** 15.000 €
* **Ventas totales de la cuenta (Total Sales):** 45.000 €
* **Margen de beneficio neto del producto (antes de publicidad):** 30%

### Cálculos métricos:
1. **Cálculo del ACoS:**
   $$ACoS = \frac{4.500}{15.000} \times 100 = 30\%$$

2. **Cálculo del ROAS:**
   $$ROAS = \frac{15.000}{4.500} = 3,33$$

3. **Cálculo del TACoS:**
   $$TACoS = \frac{4.500}{45.000} \times 100 = 10\%$$

### Diagnóstico de salud financiera del negocio:
* El **ACoS del 30%** coincide exactamente con el margen neto del producto del 30% (Breakeven ACoS). Esto significa que las ventas que provienen directamente de anuncios no están dejando ningún beneficio directo al vendedor; operan a coste cero.
* Sin embargo, el **TACoS es de solo el 10%**. Esto indica que el negocio gasta únicamente un 10% de su facturación total en captación publicitaria.
* Dado que las ventas totales son de 45.000 € y el coste de publicidad es de 4.500 €, el margen neto global consolidado de la cuenta es:
  $$\text{Beneficio Bruto Total} = 45.000 \times 0,30 = 13.500\ \text{€}$$
  $$\text{Beneficio Neto Real} = 13.500 - 4.500\ \text{(Ad Spend)} = 9.000\ \text{€}$$
  $$\text{Porcentaje de Margen Neto Final} = \frac{9.000}{45.000} \times 100 = 20\%$$

A pesar de que las campañas publicitarias operan en punto de equilibrio individual (ACoS del 30%), la cuenta en su conjunto conserva un **20% de beneficio neto real** gracias a que el 66,6% de las ventas ocurren de forma orgánica. El gasto publicitario está justificado debido a que sostiene el posicionamiento y volumen total.

---

## Conclusión

Gestionar una marca en Amazon analizando únicamente el ACoS es como conducir mirando solo el espejo retrovisor. Para asegurar un crecimiento rentable a largo plazo, el TACoS debe ser tu estrella guía. Al mantener el TACoS bajo control (generalmente entre el 6% y el 15% según la madurez del nicho) y optimizar el ACoS para que permanezca por debajo de tus límites de margen neto, lograrás activar el volante orgánico de Amazon de forma rentable y sostenible en el tiempo.
