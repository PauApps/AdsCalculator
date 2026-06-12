declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;
	export type CollectionEntry<C extends keyof AnyEntryMap> = Flatten<AnyEntryMap[C]>;

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"ca/errors-roi-ads.md": {
	id: "ca/errors-roi-ads.md";
  slug: "ca/errors-roi-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/performance-vs-growth.md": {
	id: "ca/performance-vs-growth.md";
  slug: "ca/performance-vs-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/que-es-el-roas.md": {
	id: "ca/que-es-el-roas.md";
  slug: "ca/que-es-el-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/roas-de-punt-de-equilibri.md": {
	id: "ca/roas-de-punt-de-equilibri.md";
  slug: "ca/roas-de-punt-de-equilibri";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/breakeven-roas.md": {
	id: "en/breakeven-roas.md";
  slug: "en/breakeven-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/performance-vs-growth.md": {
	id: "en/performance-vs-growth.md";
  slug: "en/performance-vs-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/roi-mistakes.md": {
	id: "en/roi-mistakes.md";
  slug: "en/roi-mistakes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/what-is-roas.md": {
	id: "en/what-is-roas.md";
  slug: "en/what-is-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/analisis-cohortes-secreto-analitico-descubrir-cuando-vuelve-rentable-cliente.md": {
	id: "es/analisis-cohortes-secreto-analitico-descubrir-cuando-vuelve-rentable-cliente.md";
  slug: "es/analisis-cohortes-secreto-analitico-descubrir-cuando-vuelve-rentable-cliente";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/breakeven-roas-ecommerce.md": {
	id: "es/breakeven-roas-ecommerce.md";
  slug: "es/breakeven-roas-ecommerce";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/calculadora-roas-predecir-ganancias-negocio.md": {
	id: "es/calculadora-roas-predecir-ganancias-negocio.md";
  slug: "es/calculadora-roas-predecir-ganancias-negocio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/calcular-rentabilidad-campana-growth-marketing.md": {
	id: "es/calcular-rentabilidad-campana-growth-marketing.md";
  slug: "es/calcular-rentabilidad-campana-growth-marketing";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/campanas-branding-vs-performance-medir-retorno-inversion-largo-plazo.md": {
	id: "es/campanas-branding-vs-performance-medir-retorno-inversion-largo-plazo.md";
  slug: "es/campanas-branding-vs-performance-medir-retorno-inversion-largo-plazo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/canibalizacion-marca-debes-pujar-propias-palabras-clave-marca-google-search.md": {
	id: "es/canibalizacion-marca-debes-pujar-propias-palabras-clave-marca-google-search.md";
  slug: "es/canibalizacion-marca-debes-pujar-propias-palabras-clave-marca-google-search";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/cogs-costo-bienes-vendidos.md": {
	id: "es/cogs-costo-bienes-vendidos.md";
  slug: "es/cogs-costo-bienes-vendidos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/como-auditar-cuenta-google-ads-saturada-dejado-ser-rentable.md": {
	id: "es/como-auditar-cuenta-google-ads-saturada-dejado-ser-rentable.md";
  slug: "es/como-auditar-cuenta-google-ads-saturada-dejado-ser-rentable";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/como-calcular-coste-adquisicion-clientes-cac-ponderado-canal.md": {
	id: "es/como-calcular-coste-adquisicion-clientes-cac-ponderado-canal.md";
  slug: "es/como-calcular-coste-adquisicion-clientes-cac-ponderado-canal";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/como-calcular-elasticidad-precio-demanda-tests-ab-campanas-ads.md": {
	id: "es/como-calcular-elasticidad-precio-demanda-tests-ab-campanas-ads.md";
  slug: "es/como-calcular-elasticidad-precio-demanda-tests-ab-campanas-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/como-escalar-presupuesto-google-performance-max-pmax-sin-romper-roas.md": {
	id: "es/como-escalar-presupuesto-google-performance-max-pmax-sin-romper-roas.md";
  slug: "es/como-escalar-presupuesto-google-performance-max-pmax-sin-romper-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/como-estructurar-presupuesto-growth-marketing-desde-cero-mvp.md": {
	id: "es/como-estructurar-presupuesto-growth-marketing-desde-cero-mvp.md";
  slug: "es/como-estructurar-presupuesto-growth-marketing-desde-cero-mvp";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/como-optimizar-valor-medio-pedido-aov-rescatar-roas-plano.md": {
	id: "es/como-optimizar-valor-medio-pedido-aov-rescatar-roas-plano.md";
  slug: "es/como-optimizar-valor-medio-pedido-aov-rescatar-roas-plano";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/como-preparar-campanas-financieras-black-friday-sin-hundir-margen.md": {
	id: "es/como-preparar-campanas-financieras-black-friday-sin-hundir-margen.md";
  slug: "es/como-preparar-campanas-financieras-black-friday-sin-hundir-margen";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/como-utilizar-inteligencia-artificial-generar-copys-bajar-cpa.md": {
	id: "es/como-utilizar-inteligencia-artificial-generar-copys-bajar-cpa.md";
  slug: "es/como-utilizar-inteligencia-artificial-generar-copys-bajar-cpa";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/coste-inventario-parado-liquidar-stock-campanas-publicitarias-punto-equilibrio.md": {
	id: "es/coste-inventario-parado-liquidar-stock-campanas-publicitarias-punto-equilibrio.md";
  slug: "es/coste-inventario-parado-liquidar-stock-campanas-publicitarias-punto-equilibrio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/costos-pasarela-pago-stripe-paypal-gasto-invisible-reduce-roi-neto.md": {
	id: "es/costos-pasarela-pago-stripe-paypal-gasto-invisible-reduce-roi-neto.md";
  slug: "es/costos-pasarela-pago-stripe-paypal-gasto-invisible-reduce-roi-neto";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/errores-comunes-calcular-coste-por-lead-cpl-servicios-locales.md": {
	id: "es/errores-comunes-calcular-coste-por-lead-cpl-servicios-locales.md";
  slug: "es/errores-comunes-calcular-coste-por-lead-cpl-servicios-locales";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/errores-roi-ads.md": {
	id: "es/errores-roi-ads.md";
  slug: "es/errores-roi-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/estrategias-escalar-roas-facebook-ads.md": {
	id: "es/estrategias-escalar-roas-facebook-ads.md";
  slug: "es/estrategias-escalar-roas-facebook-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/estrategias-puja-google-ads-maximizar-conversiones-vs-target-roas.md": {
	id: "es/estrategias-puja-google-ads-maximizar-conversiones-vs-target-roas.md";
  slug: "es/estrategias-puja-google-ads-maximizar-conversiones-vs-target-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/estrategias-retargeting-b2b-acortar-ciclos-venta-linkedin-ads.md": {
	id: "es/estrategias-retargeting-b2b-acortar-ciclos-venta-linkedin-ads.md";
  slug: "es/estrategias-retargeting-b2b-acortar-ciclos-venta-linkedin-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/google-ads-smart-bidding-algoritmo.md": {
	id: "es/google-ads-smart-bidding-algoritmo.md";
  slug: "es/google-ads-smart-bidding-algoritmo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/google-analytics-4-ga4-configuracion-eventos-personalizados-rastreo-roi.md": {
	id: "es/google-analytics-4-ga4-configuracion-eventos-personalizados-rastreo-roi.md";
  slug: "es/google-analytics-4-ga4-configuracion-eventos-personalizados-rastreo-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/guia-agencias-reportar-roi-real.md": {
	id: "es/guia-agencias-reportar-roi-real.md";
  slug: "es/guia-agencias-reportar-roi-real";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/guia-definitiva-cpa-margen-neto.md": {
	id: "es/guia-definitiva-cpa-margen-neto.md";
  slug: "es/guia-definitiva-cpa-margen-neto";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/guia-definitiva-kpis-dashboards-financieros-marketing-digital.md": {
	id: "es/guia-definitiva-kpis-dashboards-financieros-marketing-digital.md";
  slug: "es/guia-definitiva-kpis-dashboards-financieros-marketing-digital";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/guia-ltv-cac-ratio-metrica-reina-startups-levantar-capital.md": {
	id: "es/guia-ltv-cac-ratio-metrica-reina-startups-levantar-capital.md";
  slug: "es/guia-ltv-cac-ratio-metrica-reina-startups-levantar-capital";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/guia-tecnica-como-configurar-api-conversiones-meta-no-perder-tracking.md": {
	id: "es/guia-tecnica-como-configurar-api-conversiones-meta-no-perder-tracking.md";
  slug: "es/guia-tecnica-como-configurar-api-conversiones-meta-no-perder-tracking";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/impacto-iva-impuestos-anuncios.md": {
	id: "es/impacto-iva-impuestos-anuncios.md";
  slug: "es/impacto-iva-impuestos-anuncios";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/impacto-ltv-roi-publicitario.md": {
	id: "es/impacto-ltv-roi-publicitario.md";
  slug: "es/impacto-ltv-roi-publicitario";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/impacto-oculto-devoluciones-ecommerce-recalculan-roi.md": {
	id: "es/impacto-oculto-devoluciones-ecommerce-recalculan-roi.md";
  slug: "es/impacto-oculto-devoluciones-ecommerce-recalculan-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/impacto-velocidad-carga-landing-page-presupuesto-malgastado-ads.md": {
	id: "es/impacto-velocidad-carga-landing-page-presupuesto-malgastado-ads.md";
  slug: "es/impacto-velocidad-carga-landing-page-presupuesto-malgastado-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/mer-marketing-efficiency-ratio-metrica-global-directores.md": {
	id: "es/mer-marketing-efficiency-ratio-metrica-global-directores.md";
  slug: "es/mer-marketing-efficiency-ratio-metrica-global-directores";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/metricas-clave-amazon-ads-diferencias-criticas-acos-tacos-roas.md": {
	id: "es/metricas-clave-amazon-ads-diferencias-criticas-acos-tacos-roas.md";
  slug: "es/metricas-clave-amazon-ads-diferencias-criticas-acos-tacos-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/metricas-retencion-saas-churn-rate-roi-publicitario.md": {
	id: "es/metricas-retencion-saas-churn-rate-roi-publicitario.md";
  slug: "es/metricas-retencion-saas-churn-rate-roi-publicitario";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/metricas-vanidad-vs-metricas-negocio.md": {
	id: "es/metricas-vanidad-vs-metricas-negocio.md";
  slug: "es/metricas-vanidad-vs-metricas-negocio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/micro-conversiones-alimentar-pixel-anuncios-productos-alta-consideracion.md": {
	id: "es/micro-conversiones-alimentar-pixel-anuncios-productos-alta-consideracion.md";
  slug: "es/micro-conversiones-alimentar-pixel-anuncios-productos-alta-consideracion";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/modelos-atribucion-post-ios-14-5-medir-roas-real-privacidad.md": {
	id: "es/modelos-atribucion-post-ios-14-5-medir-roas-real-privacidad.md";
  slug: "es/modelos-atribucion-post-ios-14-5-medir-roas-real-privacidad";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/peligro-ofertas-descuento-agresivas-margen-neto-publicitario.md": {
	id: "es/peligro-ofertas-descuento-agresivas-margen-neto-publicitario.md";
  slug: "es/peligro-ofertas-descuento-agresivas-margen-neto-publicitario";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/performance-vs-growth.md": {
	id: "es/performance-vs-growth.md";
  slug: "es/performance-vs-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/presupuestos-contingencia-proteger-negocio-plataforma-publicitaria-banea-cuenta.md": {
	id: "es/presupuestos-contingencia-proteger-negocio-plataforma-publicitaria-banea-cuenta.md";
  slug: "es/presupuestos-contingencia-proteger-negocio-plataforma-publicitaria-banea-cuenta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/psicologia-precio-pequenos-ajustes-checkout-alteran-conversion.md": {
	id: "es/psicologia-precio-pequenos-ajustes-checkout-alteran-conversion.md";
  slug: "es/psicologia-precio-pequenos-ajustes-checkout-alteran-conversion";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/publicidad-meta-infoproductos-estructuras-embudos-maximizar-roi-lanzamientos.md": {
	id: "es/publicidad-meta-infoproductos-estructuras-embudos-maximizar-roi-lanzamientos.md";
  slug: "es/publicidad-meta-infoproductos-estructuras-embudos-maximizar-roi-lanzamientos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/publicidad-nativa-taboola-outbrain-calcular-rentabilidad-portales-nicho.md": {
	id: "es/publicidad-nativa-taboola-outbrain-calcular-rentabilidad-portales-nicho.md";
  slug: "es/publicidad-nativa-taboola-outbrain-calcular-rentabilidad-portales-nicho";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/que-es-blended-roas-por-que-marcas-multimillonarias-confian-el.md": {
	id: "es/que-es-blended-roas-por-que-marcas-multimillonarias-confian-el.md";
  slug: "es/que-es-blended-roas-por-que-marcas-multimillonarias-confian-el";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/que-es-el-roas.md": {
	id: "es/que-es-el-roas.md";
  slug: "es/que-es-el-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/roas-de-punto-de-equilibrio.md": {
	id: "es/roas-de-punto-de-equilibrio.md";
  slug: "es/roas-de-punto-de-equilibrio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/roas-vs-roi.md": {
	id: "es/roas-vs-roi.md";
  slug: "es/roas-vs-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/roi-contenidos-organicos-frente-trafico-pagado-estrategias-sinergia.md": {
	id: "es/roi-contenidos-organicos-frente-trafico-pagado-estrategias-sinergia.md";
  slug: "es/roi-contenidos-organicos-frente-trafico-pagado-estrategias-sinergia";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/roi-email-marketing-automatizacion-valor-lista.md": {
	id: "es/roi-email-marketing-automatizacion-valor-lista.md";
  slug: "es/roi-email-marketing-automatizacion-valor-lista";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/roi-marketing-influencers-modelos-afiliacion-frente-pagos-fijos-campana.md": {
	id: "es/roi-marketing-influencers-modelos-afiliacion-frente-pagos-fijos-campana.md";
  slug: "es/roi-marketing-influencers-modelos-afiliacion-frente-pagos-fijos-campana";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/roi-optimizacion-tasa-conversion-cro-modificar-web-barato-trafico.md": {
	id: "es/roi-optimizacion-tasa-conversion-cro-modificar-web-barato-trafico.md";
  slug: "es/roi-optimizacion-tasa-conversion-cro-modificar-web-barato-trafico";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/tendencias-growth-marketing-2027-metricas-centrarse-este-ano.md": {
	id: "es/tendencias-growth-marketing-2027-metricas-centrarse-este-ano.md";
  slug: "es/tendencias-growth-marketing-2027-metricas-centrarse-este-ano";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/tiktok-ads-ecommerce-estructuras-campana-fatiga-creativo.md": {
	id: "es/tiktok-ads-ecommerce-estructuras-campana-fatiga-creativo.md";
  slug: "es/tiktok-ads-ecommerce-estructuras-campana-fatiga-creativo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/ventanas-atribucion-1-day-click-vs-7-day-click-cambian-datos-panel.md": {
	id: "es/ventanas-atribucion-1-day-click-vs-7-day-click-cambian-datos-panel.md";
  slug: "es/ventanas-atribucion-1-day-click-vs-7-day-click-cambian-datos-panel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
