---
title: "Cómo calcular el coste de adquisición de clientes (CAC) ponderado por canal"
description: "Aprende a calcular el Coste de Adquisición de Clientes (CAC) ponderado por canal con fórmulas matemáticas y financieros avanzados para tu negocio digital."
pubDate: 2026-07-12
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

El **Coste de Adquisición de Clientes (CAC)** es, junto al Valor del Tiempo de Vida del Cliente (LTV), el pilar fundamental que determina la viabilidad financiera de cualquier negocio digital. Ya sea que gestiones una startup SaaS, un comercio electrónico o una empresa de servicios B2B, conocer con precisión cuánto dinero cuesta atraer a un nuevo comprador es crítico para planificar la escala del negocio o asegurar rondas de inversión.

Sin embargo, la inmensa mayoría de las organizaciones calculan el CAC de manera simplista, dividiendo la inversión publicitaria mensual por el número de clientes totales adquiridos. Este enfoque, conocido como CAC Blended (o promedio), oculta ineficiencias graves y puede llevar a tomar decisiones presupuestarias desastrosas. 

Para obtener una visión analítica e impecable, los analistas de crecimiento deben dominar el **CAC ponderado por canal**, una metodología técnica que distribuye tanto los costes de inversión directa como los costes indirectos (agencias, herramientas, salarios y comisiones) sobre los canales de adquisición correspondientes. En esta guía, desglosaremos las fórmulas matemáticas y los pasos prácticos para realizar este cálculo.

---

## Por qué el CAC Blended básico oculta la realidad

El cálculo tradicional del CAC se rige bajo la siguiente fórmula elemental:

$$CAC_{Blended} = \frac{\text{Gasto Total de Ventas y Marketing}}{\text{Total de Nuevos Clientes Adquiridos}}$$

Aunque esta métrica es de gran utilidad para que el equipo directivo revise el rendimiento macro de la empresa, es inútil para la asignación diaria de presupuestos. Supongamos que una empresa adquiere 1.000 clientes al mes con un coste total de marketing de 20.000 €. Su CAC Blended es de **20 €**.

El peligro radica en que esta media aritmética difumina la enorme disparidad de rendimiento que suele haber entre los canales:
* **Canal A (Búsqueda Orgánica - SEO):** Adquiere 600 clientes con una inversión mínima de mantenimiento. Su CAC real podría ser de 3 €.
* **Canal B (Meta Ads):** Adquiere 400 clientes mediante una intensa inversión en anuncios. Su CAC real podría estar en 45 €.

Si el equipo de crecimiento decide duplicar el presupuesto creyendo que el coste de captación promedio es saludable (20 €), inyectará la mayor parte del capital en Meta Ads (el canal escalable de pago), haciendo que el CAC blended general se dispare y arruine la rentabilidad del negocio.

---

## La metodología del CAC Ponderado por Canal

Para obtener el **CAC Ponderado ($CAC_{p}$)** de un canal específico, debemos imputar proporcionalmente dos categorías de gastos:

1. **Costes Directos:** Inversión publicitaria consumida por el canal (Ad Spend).
2. **Costes Indirectos / Operativos:** Gastos no publicitarios que permiten que el canal funcione (salarios del equipo, honorarios de agencias externas, suscripciones de software analítico y costes creativos de diseño de anuncios).

### La fórmula matemática del CAC Ponderado por Canal ($CAC_{p, i}$)

Para calcular el coste ponderado de un canal publicitario individual $i$, utilizamos la siguiente ecuación:

$$CAC_{p, i} = \frac{AdSpend_{i} + (\text{Costes Indirectos Totales} \times W_{i})}{Clientes_{i}}$$

*Donde:*
* $AdSpend_{i}$ es el presupuesto publicitario directo consumido por el canal $i$ en el período evaluado.
* $Clientes_{i}$ es el número de nuevos clientes atribuidos de manera fiable a ese canal $i$ (utilizando modelos de atribución consistentes).
* $\text{Costes Indirectos Totales}$ es el coste agregado de salarios, agencias y software de marketing durante el período.
* $W_{i}$ es el **factor de peso (weight)** asignado al canal $i$. Este factor representa la proporción de tiempo, esfuerzo humano o recursos de software dedicados a dar soporte a dicho canal, donde la suma de todos los pesos de la empresa debe ser igual a 1 ($\sum W_i = 1.0$).

---

## Caso Práctico: Cálculo de CAC Ponderado paso a paso

Imaginemos un negocio e-commerce de moda que vende a través de tres canales principales: **Facebook Ads**, **Google Ads** y **Tráfico Orgánico (SEO / Directo)**.

### Datos del período (Un mes de operación):
* **Inversión directa (Ad Spend):**
  * Facebook Ads: 10.000 €
  * Google Ads: 5.000 €
  * SEO / Orgánico: 0 € (Ad Spend directo)
* **Nuevos clientes adquiridos:**
  * Facebook Ads: 400 clientes
  * Google Ads: 250 clientes
  * SEO / Orgánico: 350 clientes
  * *Clientes Totales:* 1.000 clientes
* **Costes Indirectos de la empresa (Ventas y Marketing):**
  * Salario de la plantilla interna de marketing: 6.000 €
  * Honorarios de la Agencia de Facebook Ads: 2.000 € (coste específico para Facebook)
  * Herramientas de software (Shopify, analíticas, CRM): 2.000 €
  * *Costes Indirectos Totales:* 10.000 €

### Paso 1: Distribución específica e indirecta de costes
Antes de aplicar la fórmula general, debemos separar los costes indirectos específicos (como la agencia que solo gestiona una plataforma) y distribuir proporcionalmente el resto de costes comunes (salarios y software) estimando el esfuerzo real ($W_i$) de los equipos en cada canal:

* **Esfuerzo estimado del equipo ($W_i$):**
  * Facebook Ads ($W_{FB}$): 0.50 (50% del tiempo de los diseñadores y gestores se dedica a creativos de vídeo para Meta).
  * Google Ads ($W_{GG}$): 0.30 (30% del esfuerzo se dedica a optimizar las fichas de Google Shopping y palabras clave).
  * SEO ($W_{SEO}$): 0.20 (20% del esfuerzo se dedica a redactar artículos de blog y optimización técnica on-page).

### Paso 2: Cálculo del Coste Ponderado Total por Canal
Procedemos a sumar a la inversión de anuncios los costes asignados proporcionalmente:

#### 1. Facebook Ads:
* Ad Spend: 10.000 €
* Costes indirectos asignados: Agencia (2.000 € específicos) + 50% de los gastos comunes (8.000 € de salarios y herramientas) = $2.000\ \text{€} + 4.000\ \text{€} = 6.000\ \text{€}$.
* **Coste Ponderado Total:** $10.000\ \text{€}\ (Ads) + 6.000\ \text{€}\ (indirectos) = 16.000\ \text{€}$.
* **CAC Ponderado:** $\frac{16.000\ \text{€}}{400\ \text{clientes}} = 40\ \text{€}$

#### 2. Google Ads:
* Ad Spend: 5.000 €
* Costes indirectos asignados: 30% de los gastos comunes = $0.30 \times 8.000\ \text{€} = 2.400\ \text{€}$.
* **Coste Ponderado Total:** $5.000\ \text{€}\ (Ads) + 2.400\ \text{€}\ (indirectos) = 7.400\ \text{€}$.
* **CAC Ponderado:** $\frac{7.400\ \text{€}}{250\ \text{clientes}} = 29,60\ \text{€}$

#### 3. SEO / Orgánico:
* Ad Spend: 0 €
* Costes indirectos asignados: 20% de los gastos comunes = $0.20 \times 8.000\ \text{€} = 1.600\ \text{€}$.
* **Coste Ponderado Total:** $0\ \text{€}\ (Ads) + 1.600\ \text{€}\ (indirectos) = 1.600\ \text{€}$.
* **CAC Ponderado:** $\frac{1.600\ \text{€}}{355\ \text{clientes}} = 4,57\ \text{€}$

---

## Tabla Comparativa: CAC de Plataforma vs. CAC Ponderado

| Canal de Adquisición | Clientes Adquiridos | CAC de Plataforma (Solo Ad Spend) | CAC Ponderado (Con gastos indirectos) | Desviación / Subestimación |
| :--- | :--- | :--- | :--- | :--- |
| **Facebook Ads** | 400 | 25,00 € | 40,00 € | +60.0% (El coste real es mucho mayor) |
| **Google Ads** | 250 | 20,00 € | 29,60 € | +48.0% |
| **SEO / Orgánico** | 350 | 0,00 € | 4,57 € | N/A |
| **Blended (General)** | **1.000** | **15,00 €** *(solo Ads)* | **25,00 €** *(total gastos)* | **+66.6%** |

Como se aprecia en la tabla, evaluar el rendimiento publicitario basándote únicamente en el CAC de plataforma o el CAC blended ocultaría el hecho de que **Facebook Ads te cuesta en realidad 40 € por cliente**, un 60% más de lo que indica el panel publicitario. Si tu margen de contribución por cliente es de 35 €, Facebook Ads en realidad está operando en pérdidas netas para la empresa.

---

## Decisiones Estratégicas basadas en el CAC Ponderado

Una vez que posees los datos de CAC ponderado por canal, debes cruzarlos con el **LTV (Valor del Ciclo de Vida del Cliente)** específico de cada canal para guiar las decisiones de inversión:

1. **Monitorear el Ratio LTV/CAC:** El estándar de la industria dicta que este ratio debe ser superior a **3:1** (es decir, el valor del cliente debe triplicar el coste de adquisición). Si el CAC ponderado de Facebook Ads arroja un ratio de 1.8:1 debido a los altos honorarios de la agencia, debes replantearte la internalización del canal o renegociar la comisión del proveedor.
2. **Identificar la saturación de canales:** Si observas que el CAC ponderado de un canal pagado aumenta mes a mes conforme incrementas la inversión (rendimientos decrecientes), es señal de que has alcanzado la saturación de esa audiencia. Es momento de trasladar el presupuesto marginal a canales con CAC ponderado inferior.

## Conclusión

Calcular el CAC ponderado por canal requiere un esfuerzo analítico adicional para registrar los costes operativos y asignar pesos de dedicación interna a cada canal. Sin embargo, es el único método financiero válido para conocer la rentabilidad real de tus esfuerzos de adquisición. Al incorporar el coste de las herramientas, el personal y las agencias asociadas a cada fuente de tráfico, transformarás los datos crudos en inteligencia de negocio precisa para escalar con seguridad y consistencia.
