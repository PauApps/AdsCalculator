---
title: "Cómo auditar una cuenta de Google Ads saturada que ha dejado de ser rentable"
description: "Pasos y KPIs para realizar una auditoria en cuentas de Google Ads que pierden rendimiento."
pubDate: 2026-09-13
tags: ["marketing-digital", "roas", "roi"]
author: "AdsRoiCalc Team"
---

El declive en el rendimiento de una cuenta de Google Ads es uno de los problemas más frustrantes para directores de marketing y media buyers. Cuentas que históricamente mantenían un retorno de la inversión publicitaria (ROAS) saludable y estable comienzan a experimentar incrementos progresivos en el Coste Por Adquisición (CPA) sin variaciones evidentes en la configuración de las campañas. Este fenómeno suele denominarse "saturación de la cuenta".

Cuando una estructura publicitaria en Google Ads se satura, no significa simplemente que el mercado se haya agotado. Por lo general, implica una combinación de fatiga de audiencias, canibalización interna de keywords, pujas algorítmicas atrapadas en bucles de optimización ineficientes y dispersión del presupuesto en redes secundarias de baja conversión. En esta guía técnica explicaremos el paso a paso metodológico para auditar una cuenta saturada y las métricas necesarias para recuperar su rentabilidad.

---

## 1. Los Síntomas de una Cuenta de Google Ads Saturada

Antes de reestructurar las campañas, es imperativo identificar la raíz del problema. Una cuenta saturada suele mostrar los siguientes patrones en sus datos históricos:

- **Incremento del coste con conversiones estancadas:** El presupuesto diario se consume en su totalidad, pero el volumen absoluto de conversiones permanece plano o disminuye.
- **Degradación del ROAS Marginal:** Cada euro adicional invertido genera un retorno significativamente menor que el anterior.
- **Canibalización de tráfico orgánico y de marca:** Un porcentaje desproporcionado de las conversiones proviene de términos de búsqueda de marca (*brand keywords*), ocultando la ineficiencia de las campañas de captación genéricas (*generic Search* o *Performance Max*).
- **Fatiga creativa y de audiencias en Display/YouTube:** Los anuncios gráficos y de vídeo muestran una caída drástica en el porcentaje de clics (CTR) y un aumento en el coste por cada mil impresiones (CPM).

---

## 2. Metodología de Auditoría en 4 Pasos

Para diagnosticar y corregir estas ineficiencias, estructuraremos la auditoría en cuatro áreas de análisis profundo.

### Paso 1: Aislamiento del Tráfico de Marca vs. Genérico

Uno de los errores de diagnóstico más comunes es analizar el ROAS agregado de la cuenta. Si tu campaña de *Performance Max* (PMax) o de búsqueda capta términos de tu propia marca, el ROAS se verá inflado artificialmente. El tráfico de marca suele tener una tasa de conversión muy alta y un coste por clic (CPC) muy bajo, lo que enmascara las pérdidas sufridas en las campañas dirigidas a usuarios fríos.

Para limpiar esta métrica, debemos desglosar los datos de conversión y aplicar la fórmula del **nCPA** (Coste por Adquisición de Nuevos Clientes):

$$nCPA = \frac{\text{Ad Spend Total} - \text{Ad Spend de Marca}}{\text{Conversiones de Nuevos Clientes}}$$

Si al excluir las búsquedas de marca descubres que tu nCPA real es superior al valor de vida del cliente (*Customer Lifetime Value* o LTV) a corto plazo, la cuenta no es rentable y requiere una depuración inmediata de términos mediante listas de palabras clave negativas de marca.

### Paso 2: Análisis de la Eficiencia de Puja Algorítmica (Smart Bidding)

Las estrategias de puja automatizadas de Google (como tCPA o tROAS) se basan en el aprendizaje automático (*Machine Learning*). Sin embargo, cuando los datos de conversión disminuyen o se vuelven inestables, el algoritmo puede entrar en una espiral de muerte (*death spiral*). En este escenario, el algoritmo reduce las pujas y el alcance para asegurar que cumple con el tROAS configurado, lo que a su vez disminuye el volumen de conversiones, provocando que el algoritmo reduzca aún más el tráfico.

Para auditar esto:
1. Revisa el historial de cambios de la cuenta en los últimos 90 días. Cambios frecuentes en los objetivos de tROAS (más de una vez cada 14 días) desestabilizan el algoritmo.
2. Analiza el retraso de conversión (*conversion delay*). Si tus clientes tardan en promedio 15 días desde el primer clic hasta la compra, y evalúas el rendimiento basándote en la última semana, tomarás decisiones erróneas basadas en datos incompletos.

### Paso 3: Desglose de Emplazamientos y Redes en Performance Max

Las campañas de Performance Max son cajas negras que distribuyen el presupuesto entre Búsqueda, Shopping, Display, YouTube, Gmail y la red de Partners de Búsqueda de Google. Con frecuencia, cuando una campaña PMax empieza a perder rentabilidad, es porque Google está desviando el presupuesto hacia la red de Display y la red de Partners para consumir el presupuesto diario, redes que suelen tener un tráfico de inferior calidad y altas tasas de clics accidentales o fraudulentos.

Aunque la interfaz estándar oculta estos desgloses, puedes auditarlo de la siguiente forma:
- Utiliza scripts personalizados de Google Ads para desglosar el coste invertido en la red de Display dentro de PMax.
- Revisa la pestaña de "Emplazamientos" en los informes detallados para excluir aplicaciones móviles de juegos y sitios web de baja calidad a nivel de cuenta.

### Paso 4: Análisis de la Superposición de Subastas (*Auction Overlap*)

Cuando estructuramos múltiples campañas enfocadas al mismo tipo de producto o audiencia, corremos el riesgo de competir contra nosotros mismos en las subastas de Google. Aunque técnicamente Google Ads evita la autopuja que infle artificialmente el precio del CPC para un mismo anunciante, la superposición de audiencias y keywords genera una fragmentación de datos históricos que confunde a las estrategias de puja de Smart Bidding.

Debemos comprobar el informe de *Auction Insights* (Información de subastas) para ver si distintas campañas de búsqueda o shopping registran las mismas keywords objetivo, y unificar presupuestos y estructuras bajo una arquitectura simplificada (como el framework *Hagakure* o la consolidación en campañas temáticas más amplias).

---

## 3. KPIs Avanzados para Diagnosticar Pérdidas de Rentabilidad

Durante la auditoría, debes calcular y monitorizar de cerca estos tres indicadores financieros:

### 1. Retorno Marginal del Ad Spend (mROAS)

El ROAS medio suele dar una falsa sensación de seguridad. Lo que realmente determina si podemos seguir escalando o si debemos recortar la inversión es el **mROAS**, que mide el retorno obtenido por los últimos euros invertidos:

$$mROAS = \frac{\Delta \text{Ingresos}}{\Delta \text{Inversión Publicitaria}} = \frac{\text{Ingresos}_{\text{Periodo B}} - \text{Ingresos}_{\text{Periodo A}}}{\text{Inversión}_{\text{Periodo B}} - \text{Inversión}_{\text{Periodo A}}}$$

Si el $mROAS < 1.0$, cualquier incremento de presupuesto estará reduciendo el beneficio neto total de la empresa, incluso si el ROAS promedio visible en el dashboard de Google Ads sigue pareciendo aceptable (por ejemplo, $3.0$).

### 2. Tasa de Pérdida de Impresiones por Presupuesto y por Ranking

El análisis de la cuota de impresiones (*Search Impression Share*) es el mejor indicador de la saturación y salud de tus campañas:

- **Cuota de impresiones perdida por presupuesto (Search Lost IS budget):** Si este indicador es alto (por ejemplo, $>30\%$), significa que tus campañas se quedan sin dinero temprano en el día. Esto obliga al algoritmo a suboptimizar las pujas para que duren todo el día, reduciendo la rentabilidad global.
- **Cuota de impresiones perdida por ranking (Search Lost IS rank):** Si este indicador sube, significa que tu Ad Rank (determinado por el Nivel de Calidad y el importe de la puja) es insuficiente para competir. En lugar de subir pujas, debes auditar la relevancia de tus landing pages y la tasa de conversión histórica.

---

## 4. Plan de Acción para Desaturar y Recuperar la Cuenta

Una vez completada la auditoría, implementa los siguientes cambios estructurales:

1. **Consolidación de estructura:** Reduce el número de campañas. Si tienes 5 campañas de búsqueda con presupuestos pequeños que apenas consiguen 10-15 conversiones al mes cada una, consolídalas en una sola campaña. Los algoritmos de aprendizaje de Google Ads requieren un volumen mínimo de unas 30 a 50 conversiones por campaña al mes para optimizar de manera eficiente las pujas de forma automática.
2. **Exclusión estricta de marca:** Crea listas de exclusión de marca en tus campañas de Performance Max y redirige ese tráfico a una campaña de Búsqueda dedicada con concordancia exacta y con una puja de coste por clic optimizado bajo.
3. **Limpieza de audiencias y emplazamientos:** Excluye las redes de socios de búsqueda y la red de Display en las campañas de Búsqueda genéricas. En PMax, añade exclusiones de categorías de aplicaciones móviles a nivel de cuenta para evitar el tráfico basura.
4. **Implementación de conversiones mejoradas (*Enhanced Conversions*):** Asegúrate de enviar señales precisas a Google utilizando datos propios cifrados de tus clientes. Esto ayuda al algoritmo a identificar patrones de usuarios de alto valor incluso con las restricciones modernas de privacidad y cookies.

El saneamiento de una cuenta saturada en Google Ads no consiste en incrementar el presupuesto de manera temeraria o probar todas las funciones nuevas que sugiere el panel de recomendaciones de Google. Consiste en simplificar la estructura publicitaria, eliminar las ineficiencias de tráfico que erosionan los márgenes y alimentar al algoritmo con datos limpios y de alta conversión.
