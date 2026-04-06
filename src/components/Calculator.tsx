import React, { useState, useMemo } from 'react';
import { Copy, TrendingUp, Calculator as CalcIcon, RotateCcw } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from 'recharts';

export default function Calculator({ lang = 'en' }: { lang?: 'en' | 'es' | 'ca' }) {
  // Literals for basic i18n
  const t = {
    en: {
      title: 'ROAS & ROI Calculator',
      investment: 'Investment Data',
      adSpend: 'Ad Spend (€)',
      clicks: 'Clicks',
      conversions: 'Conversions',
      product: 'Product Costs',
      salePrice: 'Sale Price (€)',
      cogs: 'Unit Cost / COGS (€)',
      tax: 'VAT (%)',
      results: 'Results',
      roas: 'ROAS',
      roi: 'Total ROI',
      cpa: 'CPA (Cost per Acquisition)',
      netMarginPerUnit: 'Net Margin / Unit',
      netProfit: 'Net Profit',
      breakevenRoas: 'Breakeven ROAS',
      copy: 'Copy Results',
      copied: 'Copied!',
      chartTitle: 'Revenue, Costs and Profit Relation',
      chartRevenue: 'Revenue',
      chartCosts: 'Total Costs',
      chartProfit: 'Profit',
      unitsSold: 'Units Sold',
      clearFields: 'Clear Fields',
    },
    es: {
      title: 'Calculadora de ROAS & ROI',
      investment: 'Datos de Inversión',
      adSpend: 'Gasto en Ads (€)',
      clicks: 'Clics',
      conversions: 'Conversiones',
      product: 'Costes de Producto',
      salePrice: 'Precio de venta (€)',
      cogs: 'Coste Unitario / COGS (€)',
      tax: 'IVA (%)',
      results: 'Resultados',
      roas: 'ROAS',
      roi: 'ROI Total',
      cpa: 'CPA (Coste por Adquisición)',
      netMarginPerUnit: 'Margen Neto / Unidad',
      netProfit: 'Beneficio Neto',
      breakevenRoas: 'Breakeven ROAS',
      copy: 'Copiar Resultados',
      copied: '¡Copiado!',
      chartTitle: 'Relación de Ingresos, Gastos y Beneficio',
      chartRevenue: 'Ingresos',
      chartCosts: 'Costes Totales',
      chartProfit: 'Beneficio',
      unitsSold: 'Unidades Vendidas',
      clearFields: 'Limpiar campos',
    },
    ca: {
      title: 'Calculadora de ROAS & ROI',
      investment: 'Dades d\'Inversió',
      adSpend: 'Despesa en Ads (€)',
      clicks: 'Clics',
      conversions: 'Conversions',
      product: 'Costos de Producte',
      salePrice: 'Preu de venda (€)',
      cogs: 'Cost Unitari / COGS (€)',
      tax: 'IVA (%)',
      results: 'Resultats',
      roas: 'ROAS',
      roi: 'ROI Total',
      cpa: 'CPA (Cost per Adquisició)',
      netMarginPerUnit: 'Marge Net / Unitat',
      netProfit: 'Benefici Net',
      breakevenRoas: 'Breakeven ROAS',
      copy: 'Copiar Resultats',
      copied: 'Copiat!',
      chartTitle: 'Relació d\'Ingressos, Despeses i Benefici',
      chartRevenue: 'Ingressos',
      chartCosts: 'Costos Totals',
      chartProfit: 'Benefici',
      unitsSold: 'Unitats Venudes',
      clearFields: 'Netejar camps',
    }
  }[lang];

  // State
  const [adSpend, setAdSpend] = useState<number>(1000);
  const [clicks, setClicks] = useState<number>(500);
  const [conversions, setConversions] = useState<number>(50);
  
  const [salePrice, setSalePrice] = useState<number>(50);
  const [cogs, setCogs] = useState<number>(15);
  const [taxPercent, setTaxPercent] = useState<number>(21);

  const [copied, setCopied] = useState(false);

  const handleClear = () => {
    setAdSpend(0);
    setClicks(0);
    setConversions(0);
    setSalePrice(0);
    setCogs(0);
    setTaxPercent(0);
  };

  // Derived Calculations
  const calculations = useMemo(() => {
    const taxMultiplier = 1 + taxPercent / 100;
    // We assume the salePrice includes TAX when calculating net revenue?
    // Usually, ROAS is calculated over raw revenue. Let's assume salePrice is WITH tax.
    // So Net Sale Price = salePrice / taxMultiplier
    const netSalePrice = salePrice / taxMultiplier;
    const taxAmountPerUnit = salePrice - netSalePrice;

    const totalRevenue = salePrice * conversions;
    const netRevenue = netSalePrice * conversions;

    const totalCogs = cogs * conversions;
    const totalCosts = totalCogs + adSpend; // Excludes tax as tax is remitted to gov, not a "cost" in standard ROI, but lowers net revenue

    // Net Profit: Net Revenue - Total Costs
    const netProfitPerUnit = netSalePrice - cogs - (adSpend / (conversions || 1));
    const totalNetProfit = netRevenue - totalCosts;

    const roas = adSpend > 0 ? totalRevenue / adSpend : 0;
    const roi = totalCosts > 0 ? (totalNetProfit / totalCosts) * 100 : 0;
    const cpa = conversions > 0 ? adSpend / conversions : 0;
    
    // Breakeven ROAS = 1 / Net Margin %. 
    // Net Margin % (gross margin actually before ads) = (Net Sale Price - COGS) / Sale Price.
    // Breakeven ROAS basically tells us how much revenue we need per € spent on ads to break even.
    const productMargin = (netSalePrice - cogs) / salePrice; 
    const breakevenRoas = productMargin > 0 ? 1 / productMargin : 0;

    return {
      roas: roas.toFixed(2),
      roi: roi.toFixed(2),
      cpa: cpa.toFixed(2),
      netProfitPerUnit: netProfitPerUnit.toFixed(2),
      totalNetProfit: totalNetProfit.toFixed(2),
      breakevenRoas: breakevenRoas.toFixed(2),
    };
  }, [adSpend, conversions, salePrice, cogs, taxPercent]);

  // Chart Data Generation
  const chartData = useMemo(() => {
    // Generate some points to draw lines (from 0 conversions up to 2x current conversions)
    const data = [];
    const maxUnits = Math.max(conversions * 2, 10);
    const taxMultiplier = 1 + taxPercent / 100;
    const netSalePrice = salePrice / taxMultiplier;

    for (let u = 0; u <= maxUnits; u += Math.max(1, Math.floor(maxUnits / 10))) {
      const revenue = salePrice * u; // Gross revenue
      const netRev = netSalePrice * u;
      const cst = (cogs * u) + adSpend; // Assuming fixed ad spend for simplicity in this chart
      const profit = netRev - cst;

      data.push({
        units: u,
        revenue: Math.round(revenue),
        costs: Math.round(cst),
        profit: Math.round(profit)
      });
    }
    return data;
  }, [conversions, salePrice, cogs, adSpend, taxPercent]);

  const handleCopy = () => {
    const text = `
    📊 ${t.title} - Ads Calculator
    -----------------------
    📈 ${t.investment}:
    - ${t.adSpend}: ${adSpend}€
    - ${t.conversions}: ${conversions}
    - ${t.cpa}: ${calculations.cpa}€

    💰 ${t.results}:
    - ${t.roas}: ${calculations.roas}x (Breakeven: ${calculations.breakevenRoas}x)
    - ${t.roi}: ${calculations.roi}%
    - ${t.netProfit}: ${calculations.totalNetProfit}€
    `;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 font-sans">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-600 rounded-lg shadow-sm text-white">
          <CalcIcon size={24} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{t.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* FORM SECTION */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Investment Data */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <TrendingUp size={20} className="text-blue-600" />
              {t.investment}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{t.adSpend}</label>
                <input 
                  type="number" 
                  value={adSpend} 
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-gray-50 dark:bg-gray-700 dark:text-white transition-all outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{t.clicks}</label>
                  <input 
                    type="number" 
                    value={clicks} 
                    onChange={(e) => setClicks(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 bg-gray-50 dark:bg-gray-700 dark:text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{t.conversions}</label>
                  <input 
                    type="number" 
                    value={conversions} 
                    onChange={(e) => setConversions(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 bg-gray-50 dark:bg-gray-700 dark:text-white outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Costs */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-100">{t.product}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{t.salePrice}</label>
                <input 
                  type="number" 
                  value={salePrice} 
                  onChange={(e) => setSalePrice(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{t.cogs}</label>
                  <input 
                    type="number" 
                    value={cogs} 
                    onChange={(e) => setCogs(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 bg-gray-50 dark:bg-gray-700 dark:text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{t.tax}</label>
                  <select
                    value={taxPercent}
                    onChange={(e) => setTaxPercent(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 bg-gray-50 dark:bg-gray-700 dark:text-white outline-none"
                  >
                    <option value={0}>0%</option>
                    <option value={4}>4%</option>
                    <option value={10}>10%</option>
                    <option value={21}>21%</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleClear}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all font-medium text-sm shadow-sm"
          >
            <RotateCcw size={16} />
            {t.clearFields}
          </button>

        </div>

        {/* RESULTS SECTION */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative">
            <button 
              onClick={handleCopy}
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors flex items-center gap-2 text-sm font-medium"
              title={t.copy}
            >
              {copied ? <span className="text-green-500">{t.copied}</span> : <><Copy size={18} /> <span className="hidden sm:inline">{t.copy}</span></>}
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t.results}</h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* ROAS */}
              <div className="p-4 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 border border-blue-600/20 dark:border-blue-600/30">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-600 mb-1">{t.roas}</p>
                <p className={`text-3xl font-bold ${Number(calculations.roas) >= Number(calculations.breakevenRoas) ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                  {calculations.roas}x
                </p>
                <p className="text-xs text-gray-500 mt-2">{t.breakevenRoas}: {calculations.breakevenRoas}x</p>
              </div>

              {/* ROI */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t.roi}</p>
                <p className={`text-3xl font-bold ${Number(calculations.roi) > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                  {calculations.roi}%
                </p>
              </div>

              {/* Net Profit */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t.netProfit}</p>
                <p className={`text-3xl font-bold ${Number(calculations.totalNetProfit) > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                  {calculations.totalNetProfit}€
                </p>
              </div>

              {/* CPA */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t.cpa}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {calculations.cpa}€
                </p>
              </div>

              {/* Net Margin Per Unit */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t.netMarginPerUnit}</p>
                <p className={`text-2xl font-bold ${Number(calculations.netProfitPerUnit) > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                  {calculations.netProfitPerUnit}€
                </p>
              </div>

            </div>
          </div>

          {/* CHART SECTION */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex-1 min-h-[350px]">
             <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-100">{t.chartTitle}</h3>
             
             <div className="w-full h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <defs>
                      <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorCosts" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-gray-700" />
                    <XAxis 
                      dataKey="units" 
                      tickLine={false} 
                      axisLine={false}
                      className="text-xs text-gray-500"
                      tickFormatter={(value) => `${value} u.`}
                    />
                    <YAxis 
                      tickLine={false} 
                      axisLine={false}
                      className="text-xs text-gray-500"
                      tickFormatter={(value) => `${value}€`}
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      labelFormatter={(label) => `${label} ${t.unitsSold}`}
                    />
                    <ReferenceLine x={conversions} stroke="#2563eb" strokeDasharray="3 3" label={{ position: 'top', value: 'Actual', fill: '#2563eb', fontSize: 12 }} />
                    <ReferenceLine y={0} stroke="#9ca3af" />
                    <Area type="monotone" dataKey="costs" name={t.chartCosts} stroke="#ef4444" fillOpacity={1} fill="url(#colorCosts)" />
                    <Area type="monotone" dataKey="profit" name={t.chartProfit} stroke="#10b981" fillOpacity={1} fill="url(#colorProfit)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
