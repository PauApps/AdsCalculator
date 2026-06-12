---
title: "Cómo calcular la elasticidad precio de la demanda usando tests A/B en tus campañas de Ads"
description: "Formulacion y tests publicitarios para medir la sensibilidad de los clientes a cambios de precio."
pubDate: 2027-01-07
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

En el ecosistema del comercio electrónico y los negocios digitales, fijar el precio óptimo de un producto es una de las decisiones más críticas y complejas. Un precio demasiado alto puede ahuyentar a los clientes potenciales y hundir la tasa de conversión; un precio demasiado bajo puede erosionar los márgenes de beneficio, dejando al negocio sin recursos para financiar la adquisición de tráfico de pago.

Tradicionalmente, las empresas estimaban la sensibilidad al precio mediante encuestas de intención de compra (como el método de Van Westendorp) o mediante complejos análisis históricos de datos de ventas. Sin embargo, las campañas de publicidad digital (Google Ads, Meta Ads, TikTok Ads) ofrecen hoy un entorno de experimentación idóneo: un laboratorio en tiempo real donde podemos realizar tests A/B empíricos para medir con precisión científica la **elasticidad precio de la demanda**.

A continuación, analizaremos en detalle el modelo matemático de la elasticidad, cómo estructurar experimentos en tus plataformas de ads y cómo interpretar los resultados para maximizar tus ingresos y tu retorno de la inversión (ROI).

---

## 1. La base económica: ¿Qué es la elasticidad precio de la demanda?

La elasticidad precio de la demanda (EPD o $E_p$) mide la sensibilidad o capacidad de respuesta de la cantidad demandada de un bien ante un cambio en su precio. Conceptualmente, nos indica en qué porcentaje varía la cantidad vendida por cada punto porcentual que se modifica el precio de venta.

La fórmula general para calcular la elasticidad precio es:

$$E_p = \frac{\% \Delta Q}{\% \Delta P}$$

Donde:
*   $\% \Delta Q$ es el cambio porcentual en la cantidad demandada: $\frac{Q_2 - Q_1}{Q_1}$
*   $\% \Delta P$ es el cambio porcentual en el precio del producto: $\frac{P_2 - P_1}{P_1}$

Desglosando la fórmula matemáticamente, obtenemos:

$$E_p = \frac{\frac{Q_2 - Q_1}{Q_1}}{\frac{P_2 - P_1}{P_1}}$$

### Interpretación de los valores de la elasticidad
Dado que la ley de la demanda establece una relación inversa entre el precio y la cantidad (a mayor precio, menor cantidad demandada), el valor de $E_p$ suele ser negativo. En la práctica, los analistas y directores de marketing evalúan el valor absoluto de la elasticidad ($|E_p|$):

1.  **Demanda Elástica ($|E_p| > 1$):** Los consumidores son altamente sensibles al precio. Un incremento del 10% en el precio provocará una caída de la cantidad demandada superior al 10%. En este escenario, subir el precio reduce los ingresos totales.
2.  **Demanda Inelástica ($|E_p| < 1$):** Los consumidores muestran poca sensibilidad al precio. Un incremento del 10% en el precio provoca una reducción de la cantidad demandada inferior al 10%. Aquí, subir el precio aumenta la facturación total y el margen.
3.  **Elasticidad Unitaria ($|E_p| = 1$):** La variación porcentual del precio es exactamente igual a la variación porcentual de la cantidad demandada. Los ingresos totales se mantienen constantes.

---

## 2. Cómo estructurar el Test A/B en tus plataformas de Ads

Para calcular la elasticidad precio de forma empírica y evitar sesgos estacionales o demográficos, debemos diseñar un experimento controlado (Test A/B) donde la única variable modificada sea el precio de venta expuesto al usuario.

### Paso 1: Definir los precios de prueba
Elige un precio de control ($P_1$) y un precio alternativo ($P_2$). La diferencia entre ambos debe ser lo suficientemente representativa (generalmente entre un 10% y un 25%) para que los algoritmos de compra y los usuarios perciban el cambio y generen diferencias estadísticamente significativas. Por ejemplo:
*   **Precio de Control ($P_1$):** 49 €
*   **Precio de Variante ($P_2$):** 59 €

### Paso 2: Aislar y dividir el tráfico publicitario
Para que el test sea riguroso, no debes mezclar audiencias. Cada usuario debe ver un único precio durante todo el ciclo de decisión.

*   **En Meta Ads (Facebook/Instagram):** Utiliza la herramienta nativa de **Experimentos A/B**. Configura el test dividiendo las audiencias de manera aleatoria y sin solapamiento (split test). La campaña A dirigirá al tráfico a una landing page con el precio $P_1$, y la campaña B dirigirá a una landing page idéntica pero con el precio $P_2$.
*   **En Google Ads:** Si utilizas campañas de Búsqueda o Performance Max, puedes emplear los **Borradores y Experimentos de Campaña** aplicando una división del tráfico basada en la búsqueda (search splits) o en las cookies.
*   **A nivel Técnico en la Web:** Implementa herramientas de A/B testing en tu sitio (como Google Optimize Alternatives, AB Tasty o VWO) o utiliza aplicaciones de Shopify/WooCommerce que modifiquen el precio dinámicamente y de forma consistente según la cookie del usuario, garantizando que el precio de la landing page coincida exactamente con el del checkout.

### Paso 3: Control de variables externas
Asegúrate de que:
*   Los anuncios (creativos, copies, formatos) sean idénticos en ambos grupos.
*   Los presupuestos asignados a cada variante sean iguales.
*   El periodo del test cubra al menos dos ciclos completos de compra (habitualmente 14 a 30 días) para mitigar el efecto del día de la semana.

---

## 3. Caso práctico de cálculo completo y análisis financiero

Supongamos que gestionamos una tienda online que vende un producto y hemos ejecutado un test A/B publicitario durante 3 semanas con el fin de probar una subida de precio. El coste de adquisición de producto (COGS) unitario es de **15 €**.

Obtenemos las siguientes métricas de rendimiento del test:

| Métrica / Variante | Variante A (Control) | Variante B (Variante) |
| :--- | :--- | :--- |
| **Precio ($P$)** | 49 € | 59 € |
| **Impresiones** | 200.000 | 200.000 |
| **Clics** | 6.000 | 6.000 |
| **Inversión Ads** | 3.000 € | 3.000 € |
| **Conversiones ($Q$)** | 240 | 180 |

### Paso A: Calcular las variaciones porcentuales

*   **Variación porcentual del Precio ($\% \Delta P$):**
    $$\% \Delta P = \frac{59 - 49}{49} = \frac{10}{49} \approx 0,2041\ (20,41\%)$$

*   **Variación porcentual de la Cantidad ($\% \Delta Q$):**
    $$\% \Delta Q = \frac{180 - 240}{240} = \frac{-60}{240} = -0,2500\ (-25,00\%)$$

### Paso B: Calcular la Elasticidad Precio de la Demanda

$$E_p = \frac{-25,00\%}{20,41\%} \approx -1,225$$

El valor absoluto es $|E_p| = 1,225$. Como es superior a 1, concluimos que la demanda de nuestro producto es **elástica** en este rango de precios. Los usuarios son sensibles al precio, lo que significa que el aumento del 20,41% en el precio causó una caída desproporcionada del 25% en las unidades vendidas.

### Paso C: Análisis del Impacto en el Margen y la Rentabilidad (ROI)
A primera vista, podríamos pensar que incrementar el precio es un error debido a la caída de ventas. Pero calculemos la rentabilidad financiera real del negocio:

**Análisis de la Variante A (Precio a 49 €):**
*   **Ingresos totales:** $240 \times 49\ \text{€} = 11.760\ \text{€}$
*   **Coste del producto (COGS):** $240 \times 15\ \text{€} = 3.600\ \text{€}$
*   **Margen bruto antes de marketing:** $11.760\ \text{€} - 3.600\ \text{€} = 8.160\ \text{€}$
*   **Inversión publicitaria:** 3.000 €
*   **Beneficio Neto Real:** $8.160\ \text{€} - 3.000\ \text{€} = 5.160\ \text{€}$
*   **ROAS obtenido:** $\frac{11.760}{3.000} = 3,92$

**Análisis de la Variante B (Precio a 59 €):**
*   **Ingresos totales:** $180 \times 59\ \text{€} = 10.620\ \text{€}$
*   **Coste del producto (COGS):** $180 \times 15\ \text{€} = 2.700\ \text{€}$
*   **Margen bruto antes de marketing:** $10.620\ \text{€} - 2.700\ \text{€} = 7.920\ \text{€}$
*   **Inversión publicitaria:** 3.000 €
*   **Beneficio Neto Real:** $7.920\ \text{€} - 3.000\ \text{€} = 4.920\ \text{€}$
*   **ROAS obtenido:** $\frac{10.620}{3.000} = 3,54$

**Conclusión del ejemplo:** A pesar de que el precio más alto ($P_2 = 59\ \text{€}$) ofrecía un margen unitario mayor ($44\ \text{€}$ frente a $34\ \text{€}$), la caída del volumen de pedidos debido a la elasticidad de la demanda redujo tanto los ingresos como el beneficio neto del negocio en 240 € durante el periodo de prueba. Por lo tanto, la estrategia óptima bajo las condiciones actuales de adquisición es mantener el precio original de 49 €.

---

## 4. El efecto de la elasticidad en el embudo de Ads (CPA y ROAS)

La elasticidad del precio no solo afecta a los registros contables finales, sino que altera directamente las métricas de rendimiento en las consolas de publicidad. Comprender este impacto es clave para los Traffic Acquisition Specialists.

### Relación entre Tasa de Conversión (CVR) y CPA
Cuando incrementamos el precio, el rozamiento en la decisión de compra aumenta, lo que generalmente disminuye la tasa de conversión de la landing page ($CVR$). Dado que el coste por clic ($CPC$) tiende a ser relativamente estable a corto plazo para una misma audiencia, la bajada de la $CVR$ encarece el Coste por Adquisición ($CPA$):

$$\text{CPA} = \frac{\text{CPC}}{\text{CVR}}$$

Si la $CVR$ cae de un $4\%$ a un $3\%$ con un $CPC$ de $0,50\ \text{€}$, el $CPA$ se incrementará de:

$$\text{CPA}_A = \frac{0,50}{0,04} = 12,50\ \text{€}$$
$$\text{CPA}_B = \frac{0,50}{0,03} = 16,66\ \text{€}$$

### Impacto en el ROAS
El retorno de la inversión publicitaria es una función del valor medio de pedido (AOV o precio de venta $P$) y del coste por adquisición ($CPA$):

$$\text{ROAS} = \frac{P}{\text{CPA}} = \frac{P \times \text{CVR}}{\text{CPC}}$$

Si incrementas el precio, el ROAS solo subirá si el porcentaje de caída de la $CVR$ es inferior al porcentaje de subida del precio. Dicho de otro modo, si la demanda es inelástica ($|E_p| < 1$), el ROAS de tus campañas mejorará al subir los precios; si es elástica ($|E_p| > 1$), el ROAS empeorará.

---

## 5. Directrices metodológicas para un test fiable

Para garantizar que tus cálculos de elasticidad precio no estén sesgados por fluctuaciones estadísticas o del mercado, sigue estas reglas técnicas:

1.  **Alcanzar significación estadística:** No tomes decisiones con muestras pequeñas. Utiliza calculadoras de significación estadística para asegurarte de que la diferencia en la tasa de conversión ($CVR$) entre las variantes A y B cuenta con un nivel de confianza de al menos el 95% ($p < 0,05$).
2.  **Mitigar el efecto novedad:** Las subidas o bajadas bruscas de precio pueden provocar un comportamiento anómalo inicial en clientes recurrentes. Si es posible, excluye de tus campañas de test a los compradores antiguos y enfócate únicamente en la adquisición de tráfico frío (tráfico nuevo).
3.  **Monitorear el valor del tiempo de vida del cliente (LTV):** A veces, un precio inicial más bajo genera más volumen de clientes que, si bien aportan menos beneficio inmediato, vuelven a comprar repetidamente en el futuro. Si el LTV es alto, puede convenir operar con una demanda elástica en primera compra a fin de maximizar la base de clientes a largo plazo.

## Conclusión

El uso de campañas de publicidad digital como herramienta para testear precios transforma la fijación de precios (pricing) de una disciplina basada en la intuición a una ciencia exacta fundamentada en los datos. Calcular la elasticidad precio de la demanda te permite entender matemáticamente hasta qué punto puedes exigir a tus clientes antes de que tu volumen de conversiones se resienta. Al dominar estas fórmulas y cruzarlas con tus costes operativos reales y tus métricas de captación (CPA y CVR), podrás encontrar el punto de equilibrio idóneo para escalar tu negocio de manera predecible y altamente rentable.
