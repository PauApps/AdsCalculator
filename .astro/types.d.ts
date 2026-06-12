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
"ca/analisi-cohorts-descobrir-rentabilitat-client.md": {
	id: "ca/analisi-cohorts-descobrir-rentabilitat-client.md";
  slug: "ca/analisi-cohorts-descobrir-rentabilitat-client";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/calculadora-roas-predir-beneficis-negoci.md": {
	id: "ca/calculadora-roas-predir-beneficis-negoci.md";
  slug: "ca/calculadora-roas-predir-beneficis-negoci";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/calcular-rendibilitat-campanya-growth-marketing.md": {
	id: "ca/calcular-rendibilitat-campanya-growth-marketing.md";
  slug: "ca/calcular-rendibilitat-campanya-growth-marketing";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/campanyes-branding-vs-performance-mesurar-retorn-inversio-llarg-termini.md": {
	id: "ca/campanyes-branding-vs-performance-mesurar-retorn-inversio-llarg-termini.md";
  slug: "ca/campanyes-branding-vs-performance-mesurar-retorn-inversio-llarg-termini";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/canibalitzacio-marca-has-de-pujar-propies-paraules-clau-marca-google-search.md": {
	id: "ca/canibalitzacio-marca-has-de-pujar-propies-paraules-clau-marca-google-search.md";
  slug: "ca/canibalitzacio-marca-has-de-pujar-propies-paraules-clau-marca-google-search";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/cogs-cost-dels-bens-venuts-destrueix-roi-si-lignores.md": {
	id: "ca/cogs-cost-dels-bens-venuts-destrueix-roi-si-lignores.md";
  slug: "ca/cogs-cost-dels-bens-venuts-destrueix-roi-si-lignores";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/com-afecta-iva-impostos-benefici-real-anuncis.md": {
	id: "ca/com-afecta-iva-impostos-benefici-real-anuncis.md";
  slug: "ca/com-afecta-iva-impostos-benefici-real-anuncis";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/com-afecten-iva-impostos-ocults-benefici-real-anuncis.md": {
	id: "ca/com-afecten-iva-impostos-ocults-benefici-real-anuncis.md";
  slug: "ca/com-afecten-iva-impostos-ocults-benefici-real-anuncis";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/com-auditar-compte-google-ads-saturat-deixat-ser-rendible.md": {
	id: "ca/com-auditar-compte-google-ads-saturat-deixat-ser-rendible.md";
  slug: "ca/com-auditar-compte-google-ads-saturat-deixat-ser-rendible";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/com-calcular-cost-adquisicio-clients-cac-ponderat-canal.md": {
	id: "ca/com-calcular-cost-adquisicio-clients-cac-ponderat-canal.md";
  slug: "ca/com-calcular-cost-adquisicio-clients-cac-ponderat-canal";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/com-calcular-elasticitat-preu-demanda-tests-ab-campanyes-ads.md": {
	id: "ca/com-calcular-elasticitat-preu-demanda-tests-ab-campanyes-ads.md";
  slug: "ca/com-calcular-elasticitat-preu-demanda-tests-ab-campanyes-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/com-escalar-pressupost-google-performance-max-pmax-sense-trencar-roas.md": {
	id: "ca/com-escalar-pressupost-google-performance-max-pmax-sense-trencar-roas.md";
  slug: "ca/com-escalar-pressupost-google-performance-max-pmax-sense-trencar-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/com-estructurar-pressupost-growth-marketing-des-de-zero-mvp.md": {
	id: "ca/com-estructurar-pressupost-growth-marketing-des-de-zero-mvp.md";
  slug: "ca/com-estructurar-pressupost-growth-marketing-des-de-zero-mvp";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/com-optimitzar-valor-mitjà-comanda-aov-rescatar-roas-pla.md": {
	id: "ca/com-optimitzar-valor-mitjà-comanda-aov-rescatar-roas-pla.md";
  slug: "ca/com-optimitzar-valor-mitjà-comanda-aov-rescatar-roas-pla";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/com-preparar-campanyes-financeres-black-friday-sense-enfonsar-marge.md": {
	id: "ca/com-preparar-campanyes-financeres-black-friday-sense-enfonsar-marge.md";
  slug: "ca/com-preparar-campanyes-financeres-black-friday-sense-enfonsar-marge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/com-utilitzar-intel-ligencia-artificial-generar-copys-baixar-cpa.md": {
	id: "ca/com-utilitzar-intel-ligencia-artificial-generar-copys-baixar-cpa.md";
  slug: "ca/com-utilitzar-intel-ligencia-artificial-generar-copys-baixar-cpa";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/cost-inventari-aturat-liquidar-estoc-campanyes-publicitaries-punt-equilibri.md": {
	id: "ca/cost-inventari-aturat-liquidar-estoc-campanyes-publicitaries-punt-equilibri.md";
  slug: "ca/cost-inventari-aturat-liquidar-estoc-campanyes-publicitaries-punt-equilibri";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/costos-passarella-pagament-stripe-paypal-despesa-invisible-redueix-roi-net.md": {
	id: "ca/costos-passarella-pagament-stripe-paypal-despesa-invisible-redueix-roi-net.md";
  slug: "ca/costos-passarella-pagament-stripe-paypal-despesa-invisible-redueix-roi-net";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/errors-comuns-calcular-cost-per-lead-cpl-serveis-locals.md": {
	id: "ca/errors-comuns-calcular-cost-per-lead-cpl-serveis-locals.md";
  slug: "ca/errors-comuns-calcular-cost-per-lead-cpl-serveis-locals";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/errors-roi-ads.md": {
	id: "ca/errors-roi-ads.md";
  slug: "ca/errors-roi-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/estrategies-puja-google-ads-maximitzar-conversions-vs-target-roas.md": {
	id: "ca/estrategies-puja-google-ads-maximitzar-conversions-vs-target-roas.md";
  slug: "ca/estrategies-puja-google-ads-maximitzar-conversions-vs-target-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/estrategies-retargeting-b2b-escurcar-cicles-venda-linkedin-ads.md": {
	id: "ca/estrategies-retargeting-b2b-escurcar-cicles-venda-linkedin-ads.md";
  slug: "ca/estrategies-retargeting-b2b-escurcar-cicles-venda-linkedin-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/finestres-atribucio-1-day-click-vs-7-day-click-dades-panell.md": {
	id: "ca/finestres-atribucio-1-day-click-vs-7-day-click-dades-panell.md";
  slug: "ca/finestres-atribucio-1-day-click-vs-7-day-click-dades-panell";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/google-ads-smart-bidding-algoritme-maximitzar-retorn.md": {
	id: "ca/google-ads-smart-bidding-algoritme-maximitzar-retorn.md";
  slug: "ca/google-ads-smart-bidding-algoritme-maximitzar-retorn";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/google-analytics-4-ga4-configuracio-esdeveniments-personalitzats-seguiment-roi.md": {
	id: "ca/google-analytics-4-ga4-configuracio-esdeveniments-personalitzats-seguiment-roi.md";
  slug: "ca/google-analytics-4-ga4-configuracio-esdeveniments-personalitzats-seguiment-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/guia-definitiva-cpa-marge-net-per-unitat.md": {
	id: "ca/guia-definitiva-cpa-marge-net-per-unitat.md";
  slug: "ca/guia-definitiva-cpa-marge-net-per-unitat";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/guia-definitiva-kpis-quadres-comandament-financers-marqueting-digital.md": {
	id: "ca/guia-definitiva-kpis-quadres-comandament-financers-marqueting-digital.md";
  slug: "ca/guia-definitiva-kpis-quadres-comandament-financers-marqueting-digital";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/guia-ratio-ltv-cac-metrica-reina-startups-aixecar-capital.md": {
	id: "ca/guia-ratio-ltv-cac-metrica-reina-startups-aixecar-capital.md";
  slug: "ca/guia-ratio-ltv-cac-metrica-reina-startups-aixecar-capital";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/guia-supervivencia-agencies-reportar-roi-real-transparent.md": {
	id: "ca/guia-supervivencia-agencies-reportar-roi-real-transparent.md";
  slug: "ca/guia-supervivencia-agencies-reportar-roi-real-transparent";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/guia-tecnica-configurar-api-conversions-meta-no-perdre-seguiment.md": {
	id: "ca/guia-tecnica-configurar-api-conversions-meta-no-perdre-seguiment.md";
  slug: "ca/guia-tecnica-configurar-api-conversions-meta-no-perdre-seguiment";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/impacte-ltv-roi-publicitari.md": {
	id: "ca/impacte-ltv-roi-publicitari.md";
  slug: "ca/impacte-ltv-roi-publicitari";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/impacte-ocult-devolucions-ecommerce-recalcular-roi.md": {
	id: "ca/impacte-ocult-devolucions-ecommerce-recalcular-roi.md";
  slug: "ca/impacte-ocult-devolucions-ecommerce-recalcular-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/impacte-velocitat-carrega-landing-page-pressupost-malbaratat-ads.md": {
	id: "ca/impacte-velocitat-carrega-landing-page-pressupost-malbaratat-ads.md";
  slug: "ca/impacte-velocitat-carrega-landing-page-pressupost-malbaratat-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/mer-marketing-efficiency-ratio-metrica-global-directors.md": {
	id: "ca/mer-marketing-efficiency-ratio-metrica-global-directors.md";
  slug: "ca/mer-marketing-efficiency-ratio-metrica-global-directors";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/metriques-clau-amazon-ads-diferencies-critiques-acos-tacos-roas.md": {
	id: "ca/metriques-clau-amazon-ads-diferencies-critiques-acos-tacos-roas.md";
  slug: "ca/metriques-clau-amazon-ads-diferencies-critiques-acos-tacos-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/metriques-retencio-saas-churn-rate-roi-publicitari.md": {
	id: "ca/metriques-retencio-saas-churn-rate-roi-publicitari.md";
  slug: "ca/metriques-retencio-saas-churn-rate-roi-publicitari";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/metriques-vanitat-vs-metriques-negoci.md": {
	id: "ca/metriques-vanitat-vs-metriques-negoci.md";
  slug: "ca/metriques-vanitat-vs-metriques-negoci";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/micro-conversions-alimentar-pixel-anuncis-productes-alta-consideracio.md": {
	id: "ca/micro-conversions-alimentar-pixel-anuncis-productes-alta-consideracio.md";
  slug: "ca/micro-conversions-alimentar-pixel-anuncis-productes-alta-consideracio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/models-atribucio-post-ios-14-5-mesurar-roas-real-privacitat.md": {
	id: "ca/models-atribucio-post-ios-14-5-mesurar-roas-real-privacitat.md";
  slug: "ca/models-atribucio-post-ios-14-5-mesurar-roas-real-privacitat";
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
"ca/perill-ofertes-descompte-agressives-marge-net-publicitari.md": {
	id: "ca/perill-ofertes-descompte-agressives-marge-net-publicitari.md";
  slug: "ca/perill-ofertes-descompte-agressives-marge-net-publicitari";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/pressupostos-contingencia-protegir-negoci-plataforma-publicitaria-bloqueja-compte.md": {
	id: "ca/pressupostos-contingencia-protegir-negoci-plataforma-publicitaria-bloqueja-compte.md";
  slug: "ca/pressupostos-contingencia-protegir-negoci-plataforma-publicitaria-bloqueja-compte";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/psicologia-preu-petits-ajustos-checkout-alteren-conversio.md": {
	id: "ca/psicologia-preu-petits-ajustos-checkout-alteren-conversio.md";
  slug: "ca/psicologia-preu-petits-ajustos-checkout-alteren-conversio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/publicitat-meta-infoproductes-estructures-embuts-maximitzar-roi-llancaments.md": {
	id: "ca/publicitat-meta-infoproductes-estructures-embuts-maximitzar-roi-llancaments.md";
  slug: "ca/publicitat-meta-infoproductes-estructures-embuts-maximitzar-roi-llancaments";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/publicitat-nativa-taboola-outbrain-calcular-rentabilitat-portals-nitxol.md": {
	id: "ca/publicitat-nativa-taboola-outbrain-calcular-rentabilitat-portals-nitxol.md";
  slug: "ca/publicitat-nativa-taboola-outbrain-calcular-rentabilitat-portals-nitxol";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/que-es-blended-roas-per-que-marques-multimilionaries-confien-ell.md": {
	id: "ca/que-es-blended-roas-per-que-marques-multimilionaries-confien-ell.md";
  slug: "ca/que-es-blended-roas-per-que-marques-multimilionaries-confien-ell";
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
"ca/roas-punt-equilibri-ecommerce.md": {
	id: "ca/roas-punt-equilibri-ecommerce.md";
  slug: "ca/roas-punt-equilibri-ecommerce";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/roas-vs-roi.md": {
	id: "ca/roas-vs-roi.md";
  slug: "ca/roas-vs-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/roi-continguts-organics-front-transit-pagat-estrategies-sinergia.md": {
	id: "ca/roi-continguts-organics-front-transit-pagat-estrategies-sinergia.md";
  slug: "ca/roi-continguts-organics-front-transit-pagat-estrategies-sinergia";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/roi-email-marketing-automatitzacio-estrategies-maximitzar-valor-llista.md": {
	id: "ca/roi-email-marketing-automatitzacio-estrategies-maximitzar-valor-llista.md";
  slug: "ca/roi-email-marketing-automatitzacio-estrategies-maximitzar-valor-llista";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/roi-marqueting-influencers-models-afiliacio-vs-pagaments-fixos-campanya.md": {
	id: "ca/roi-marqueting-influencers-models-afiliacio-vs-pagaments-fixos-campanya.md";
  slug: "ca/roi-marqueting-influencers-models-afiliacio-vs-pagaments-fixos-campanya";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/roi-optimitzacio-taxa-conversio-cro-modificar-web-barat-transit.md": {
	id: "ca/roi-optimitzacio-taxa-conversio-cro-modificar-web-barat-transit.md";
  slug: "ca/roi-optimitzacio-taxa-conversio-cro-modificar-web-barat-transit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/tendencies-growth-marketing-2027-metriques-centrar-se-aquest-any.md": {
	id: "ca/tendencies-growth-marketing-2027-metriques-centrar-se-aquest-any.md";
  slug: "ca/tendencies-growth-marketing-2027-metriques-centrar-se-aquest-any";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ca/tiktok-ads-ecommerce-estructures-campanya-fatiga-creatiu.md": {
	id: "ca/tiktok-ads-ecommerce-estructures-campanya-fatiga-creatiu.md";
  slug: "ca/tiktok-ads-ecommerce-estructures-campanya-fatiga-creatiu";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/agency-survival-guide-reporting-real-roi-transparently.md": {
	id: "en/agency-survival-guide-reporting-real-roi-transparently.md";
  slug: "en/agency-survival-guide-reporting-real-roi-transparently";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/attribution-models-post-ios-14-5-measuring-real-roas-privacy.md": {
	id: "en/attribution-models-post-ios-14-5-measuring-real-roas-privacy.md";
  slug: "en/attribution-models-post-ios-14-5-measuring-real-roas-privacy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/attribution-windows-1-day-click-vs-7-day-click-dashboard-data.md": {
	id: "en/attribution-windows-1-day-click-vs-7-day-click-dashboard-data.md";
  slug: "en/attribution-windows-1-day-click-vs-7-day-click-dashboard-data";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/b2b-retargeting-strategies-shorten-sales-cycles-linkedin-ads.md": {
	id: "en/b2b-retargeting-strategies-shorten-sales-cycles-linkedin-ads.md";
  slug: "en/b2b-retargeting-strategies-shorten-sales-cycles-linkedin-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/brand-cannibalization-should-you-bid-own-brand-keywords-google-search.md": {
	id: "en/brand-cannibalization-should-you-bid-own-brand-keywords-google-search.md";
  slug: "en/brand-cannibalization-should-you-bid-own-brand-keywords-google-search";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/branding-vs-performance-campaigns-measuring-long-term-roi.md": {
	id: "en/branding-vs-performance-campaigns-measuring-long-term-roi.md";
  slug: "en/branding-vs-performance-campaigns-measuring-long-term-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/breakeven-roas-ecommerce.md": {
	id: "en/breakeven-roas-ecommerce.md";
  slug: "en/breakeven-roas-ecommerce";
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
"en/calculate-growth-marketing-campaign-profitability.md": {
	id: "en/calculate-growth-marketing-campaign-profitability.md";
  slug: "en/calculate-growth-marketing-campaign-profitability";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/cogs-cost-of-goods-sold-destroys-roi-if-ignored.md": {
	id: "en/cogs-cost-of-goods-sold-destroys-roi-if-ignored.md";
  slug: "en/cogs-cost-of-goods-sold-destroys-roi-if-ignored";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/cohort-analysis-discover-customer-profitability.md": {
	id: "en/cohort-analysis-discover-customer-profitability.md";
  slug: "en/cohort-analysis-discover-customer-profitability";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/common-mistakes-calculating-cost-per-lead-cpl-local-services.md": {
	id: "en/common-mistakes-calculating-cost-per-lead-cpl-local-services.md";
  slug: "en/common-mistakes-calculating-cost-per-lead-cpl-local-services";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/contingency-budgets-protect-business-ad-platform-ban.md": {
	id: "en/contingency-budgets-protect-business-ad-platform-ban.md";
  slug: "en/contingency-budgets-protect-business-ad-platform-ban";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/conversion-rate-optimisation-roi-cro-cheaper-than-buying-traffic.md": {
	id: "en/conversion-rate-optimisation-roi-cro-cheaper-than-buying-traffic.md";
  slug: "en/conversion-rate-optimisation-roi-cro-cheaper-than-buying-traffic";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/cost-of-idle-inventory-liquidating-stock-with-breakeven-ad-campaigns.md": {
	id: "en/cost-of-idle-inventory-liquidating-stock-with-breakeven-ad-campaigns.md";
  slug: "en/cost-of-idle-inventory-liquidating-stock-with-breakeven-ad-campaigns";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/danger-aggressive-discount-offers-net-advertising-margin.md": {
	id: "en/danger-aggressive-discount-offers-net-advertising-margin.md";
  slug: "en/danger-aggressive-discount-offers-net-advertising-margin";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/definitive-guide-cpa-net-margin-per-unit.md": {
	id: "en/definitive-guide-cpa-net-margin-per-unit.md";
  slug: "en/definitive-guide-cpa-net-margin-per-unit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/definitive-guide-kpis-financial-dashboards-digital-marketing.md": {
	id: "en/definitive-guide-kpis-financial-dashboards-digital-marketing.md";
  slug: "en/definitive-guide-kpis-financial-dashboards-digital-marketing";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/email-marketing-roi-automation-strategies-maximize-list-value.md": {
	id: "en/email-marketing-roi-automation-strategies-maximize-list-value.md";
  slug: "en/email-marketing-roi-automation-strategies-maximize-list-value";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/google-ads-bidding-strategies-maximize-conversions-vs-target-roas.md": {
	id: "en/google-ads-bidding-strategies-maximize-conversions-vs-target-roas.md";
  slug: "en/google-ads-bidding-strategies-maximize-conversions-vs-target-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/google-ads-smart-bidding-algorithm-maximize-return.md": {
	id: "en/google-ads-smart-bidding-algorithm-maximize-return.md";
  slug: "en/google-ads-smart-bidding-algorithm-maximize-return";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/google-analytics-4-ga4-custom-events-roi-tracking.md": {
	id: "en/google-analytics-4-ga4-custom-events-roi-tracking.md";
  slug: "en/google-analytics-4-ga4-custom-events-roi-tracking";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/growth-marketing-trends-2027-metrics-to-focus-on-this-year.md": {
	id: "en/growth-marketing-trends-2027-metrics-to-focus-on-this-year.md";
  slug: "en/growth-marketing-trends-2027-metrics-to-focus-on-this-year";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/hidden-impact-ecommerce-returns-recalculating-roi.md": {
	id: "en/hidden-impact-ecommerce-returns-recalculating-roi.md";
  slug: "en/hidden-impact-ecommerce-returns-recalculating-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-audit-saturated-google-ads-account-lost-profitability.md": {
	id: "en/how-to-audit-saturated-google-ads-account-lost-profitability.md";
  slug: "en/how-to-audit-saturated-google-ads-account-lost-profitability";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-calculate-customer-acquisition-cost-cac-weighted-by-channel.md": {
	id: "en/how-to-calculate-customer-acquisition-cost-cac-weighted-by-channel.md";
  slug: "en/how-to-calculate-customer-acquisition-cost-cac-weighted-by-channel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-calculate-price-elasticity-of-demand-ab-testing-ads.md": {
	id: "en/how-to-calculate-price-elasticity-of-demand-ab-testing-ads.md";
  slug: "en/how-to-calculate-price-elasticity-of-demand-ab-testing-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-optimize-average-order-value-aov-rescue-flat-roas.md": {
	id: "en/how-to-optimize-average-order-value-aov-rescue-flat-roas.md";
  slug: "en/how-to-optimize-average-order-value-aov-rescue-flat-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-prepare-financial-campaigns-black-friday-without-sinking-margin.md": {
	id: "en/how-to-prepare-financial-campaigns-black-friday-without-sinking-margin.md";
  slug: "en/how-to-prepare-financial-campaigns-black-friday-without-sinking-margin";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-scale-google-performance-max-pmax-budget-without-breaking-roas.md": {
	id: "en/how-to-scale-google-performance-max-pmax-budget-without-breaking-roas.md";
  slug: "en/how-to-scale-google-performance-max-pmax-budget-without-breaking-roas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-structure-growth-marketing-budget-from-scratch-mvp.md": {
	id: "en/how-to-structure-growth-marketing-budget-from-scratch-mvp.md";
  slug: "en/how-to-structure-growth-marketing-budget-from-scratch-mvp";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-use-ai-to-generate-ad-copy-and-lower-cpa.md": {
	id: "en/how-to-use-ai-to-generate-ad-copy-and-lower-cpa.md";
  slug: "en/how-to-use-ai-to-generate-ad-copy-and-lower-cpa";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-vat-hidden-taxes-affect-ads-real-profit.md": {
	id: "en/how-vat-hidden-taxes-affect-ads-real-profit.md";
  slug: "en/how-vat-hidden-taxes-affect-ads-real-profit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/impact-ltv-advertising-roi.md": {
	id: "en/impact-ltv-advertising-roi.md";
  slug: "en/impact-ltv-advertising-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/influencer-marketing-roi-affiliate-models-vs-flat-fee-campaign.md": {
	id: "en/influencer-marketing-roi-affiliate-models-vs-flat-fee-campaign.md";
  slug: "en/influencer-marketing-roi-affiliate-models-vs-flat-fee-campaign";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/key-metrics-amazon-ads-acos-tacos-roas-differences.md": {
	id: "en/key-metrics-amazon-ads-acos-tacos-roas-differences.md";
  slug: "en/key-metrics-amazon-ads-acos-tacos-roas-differences";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/landing-page-load-speed-wasted-ads-budget.md": {
	id: "en/landing-page-load-speed-wasted-ads-budget.md";
  slug: "en/landing-page-load-speed-wasted-ads-budget";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/ltv-cac-ratio-guide-startups-raising-capital.md": {
	id: "en/ltv-cac-ratio-guide-startups-raising-capital.md";
  slug: "en/ltv-cac-ratio-guide-startups-raising-capital";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/mer-marketing-efficiency-ratio-global-metric-cmos.md": {
	id: "en/mer-marketing-efficiency-ratio-global-metric-cmos.md";
  slug: "en/mer-marketing-efficiency-ratio-global-metric-cmos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/meta-ads-infoproducts-funnel-structures-launch-roi.md": {
	id: "en/meta-ads-infoproducts-funnel-structures-launch-roi.md";
  slug: "en/meta-ads-infoproducts-funnel-structures-launch-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/micro-conversions-feed-pixel-high-consideration-products.md": {
	id: "en/micro-conversions-feed-pixel-high-consideration-products.md";
  slug: "en/micro-conversions-feed-pixel-high-consideration-products";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/native-advertising-taboola-outbrain-niche-portals-profitability.md": {
	id: "en/native-advertising-taboola-outbrain-niche-portals-profitability.md";
  slug: "en/native-advertising-taboola-outbrain-niche-portals-profitability";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/payment-gateway-costs-stripe-paypal-invisible-expense-reduces-net-roi.md": {
	id: "en/payment-gateway-costs-stripe-paypal-invisible-expense-reduces-net-roi.md";
  slug: "en/payment-gateway-costs-stripe-paypal-invisible-expense-reduces-net-roi";
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
"en/pricing-psychology-checkout-adjustments-conversion-metrics.md": {
	id: "en/pricing-psychology-checkout-adjustments-conversion-metrics.md";
  slug: "en/pricing-psychology-checkout-adjustments-conversion-metrics";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/roas-calculator-predict-business-profits.md": {
	id: "en/roas-calculator-predict-business-profits.md";
  slug: "en/roas-calculator-predict-business-profits";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/roas-vs-roi-true-profitability-metric-digital-marketing.md": {
	id: "en/roas-vs-roi-true-profitability-metric-digital-marketing.md";
  slug: "en/roas-vs-roi-true-profitability-metric-digital-marketing";
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
"en/roi-organic-content-vs-paid-traffic-synergy-strategies.md": {
	id: "en/roi-organic-content-vs-paid-traffic-synergy-strategies.md";
  slug: "en/roi-organic-content-vs-paid-traffic-synergy-strategies";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/saas-retention-metrics-churn-rate-advertising-roi.md": {
	id: "en/saas-retention-metrics-churn-rate-advertising-roi.md";
  slug: "en/saas-retention-metrics-churn-rate-advertising-roi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/strategies-to-scale-roas-on-facebook-ads.md": {
	id: "en/strategies-to-scale-roas-on-facebook-ads.md";
  slug: "en/strategies-to-scale-roas-on-facebook-ads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/technical-guide-configure-meta-conversions-api-avoid-tracking-loss.md": {
	id: "en/technical-guide-configure-meta-conversions-api-avoid-tracking-loss.md";
  slug: "en/technical-guide-configure-meta-conversions-api-avoid-tracking-loss";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/tiktok-ads-ecommerce-campaign-structures-ad-fatigue.md": {
	id: "en/tiktok-ads-ecommerce-campaign-structures-ad-fatigue.md";
  slug: "en/tiktok-ads-ecommerce-campaign-structures-ad-fatigue";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/vanity-metrics-vs-business-metrics-advertising.md": {
	id: "en/vanity-metrics-vs-business-metrics-advertising.md";
  slug: "en/vanity-metrics-vs-business-metrics-advertising";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/what-is-blended-roas-why-multimillion-brands-rely-on-it.md": {
	id: "en/what-is-blended-roas-why-multimillion-brands-rely-on-it.md";
  slug: "en/what-is-blended-roas-why-multimillion-brands-rely-on-it";
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
