import React, { useState, useMemo } from 'react';
import { Copy, TrendingUp, Calculator as CalcIcon, RotateCcw, Printer, Image } from 'lucide-react';
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
      copySuccess: 'Results copied to clipboard!',
      copyChartSuccess: 'Chart copied to clipboard!',
      downloadChartSuccess: 'Chart downloaded as PNG!',
      exportPdf: 'Export PDF',
      copyChart: 'Copy Chart',
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
      copySuccess: '¡Resultados copiados al portapapeles!',
      copyChartSuccess: '¡Gráfico copiado al portapapeles!',
      downloadChartSuccess: '¡Gráfico descargado como PNG!',
      exportPdf: 'Exportar PDF',
      copyChart: 'Copiar Gráfico',
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
      copySuccess: 'Resultats copiats al porta-retalls!',
      copyChartSuccess: 'Gràfic copiat al porta-retalls!',
      downloadChartSuccess: 'Gràfic descarregat com a PNG!',
      exportPdf: 'Exportar PDF',
      copyChart: 'Copiar Gràfic',
    }
  }[lang];

  // State
  const [adSpend, setAdSpend] = useState<number>(1000);
  const [clicks, setClicks] = useState<number>(500);
  const [conversions, setConversions] = useState<number>(50);

  const [salePrice, setSalePrice] = useState<number>(50);
  const [cogs, setCogs] = useState<number>(15);
  const [taxPercent, setTaxPercent] = useState<number>(21);
  const [customTaxValue, setCustomTaxValue] = useState<string>('21');
  const [isCustomTax, setIsCustomTax] = useState<boolean>(false);

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  const handleClear = () => {
    setAdSpend(0);
    setClicks(0);
    setConversions(0);
    setSalePrice(0);
    setCogs(0);
    setTaxPercent(0);
    setCustomTaxValue('');
    setIsCustomTax(false);
  };

  // Derived Calculations
  const calculations = useMemo(() => {
    const taxMultiplier = 1 + taxPercent / 100;
    const netSalePrice = salePrice / taxMultiplier;

    const totalRevenue = salePrice * conversions;
    const netRevenue = netSalePrice * conversions;

    const totalCogs = cogs * conversions;
    const totalCosts = totalCogs + adSpend; // Excludes tax as tax is remitted to gov

    const netProfitPerUnit = netSalePrice - cogs - (adSpend / (conversions || 1));
    const totalNetProfit = netRevenue - totalCosts;

    const roas = adSpend > 0 ? totalRevenue / adSpend : 0;
    const roi = adSpend > 0 ? (totalNetProfit / adSpend) * 100 : 0;
    const cpa = conversions > 0 ? adSpend / conversions : 0;

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
    const data = [];
    const maxUnits = Math.max(conversions * 2, 10);
    const taxMultiplier = 1 + taxPercent / 100;
    const netSalePrice = salePrice / taxMultiplier;

    for (let u = 0; u <= maxUnits; u += Math.max(1, Math.floor(maxUnits / 10))) {
      const revenue = salePrice * u; // Gross revenue
      const netRev = netSalePrice * u;
      const cst = (cogs * u) + adSpend;
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
    const text = `📊 ${t.title} - Ads Calculator
-----------------------
📈 ${t.investment}:
- ${t.adSpend}: ${adSpend}€
- ${t.conversions}: ${conversions}
- ${t.cpa}: ${calculations.cpa}€

💰 ${t.results}:
- ${t.roas}: ${calculations.roas}x (Breakeven: ${calculations.breakevenRoas}x)
- ${t.roi}: ${calculations.roi}%
- ${t.netProfit}: ${calculations.totalNetProfit}€`;
    
    navigator.clipboard.writeText(text).then(() => {
      setToast({ message: t.copySuccess, type: 'success' });
      setTimeout(() => setToast(null), 2500);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleExportPDF = () => {
    window.print();
  };

  const copyChartToClipboard = async () => {
    try {
      const container = document.querySelector('.recharts-responsive-container');
      if (!container) return;
      const svgEl = container.querySelector('svg');
      if (!svgEl) return;

      const svgString = new XMLSerializer().serializeToString(svgEl);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const DOMURL = window.URL || window.webkitURL || window;
      const blobUrl = DOMURL.createObjectURL(svgBlob);

      const image = new window.Image();
      image.src = blobUrl;

      image.onload = () => {
        const canvas = document.createElement('canvas');
        const rect = svgEl.getBoundingClientRect();
        
        // Scale for crispness (2x)
        const scale = 2;
        canvas.width = rect.width * scale;
        canvas.height = rect.height * scale;
        
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Check if dark mode is active to choose background color
          const isDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
          ctx.fillStyle = isDark ? '#1f2937' : '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          ctx.scale(scale, scale);
          ctx.drawImage(image, 0, 0, rect.width, rect.height);
          
          canvas.toBlob(async (blob) => {
            if (blob) {
              try {
                if (navigator.clipboard && window.ClipboardItem) {
                  await navigator.clipboard.write([
                    new window.ClipboardItem({
                      'image/png': blob
                    })
                  ]);
                  setToast({ message: t.copyChartSuccess, type: 'success' });
                  setTimeout(() => setToast(null), 2500);
                } else {
                  throw new Error('ClipboardItem not supported');
                }
              } catch (clipErr) {
                console.warn('ClipboardItem write failed, downloading instead', clipErr);
                // Fallback to download
                const downloadUrl = DOMURL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = downloadUrl;
                a.download = 'ads-roi-chart.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                DOMURL.revokeObjectURL(downloadUrl);
                
                setToast({ message: t.downloadChartSuccess, type: 'success' });
                setTimeout(() => setToast(null), 2500);
              }
            }
          }, 'image/png');
        }
        DOMURL.revokeObjectURL(blobUrl);
      };
    } catch (error) {
      console.error('Error copying chart:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 font-sans print:p-0">
      
      {/* PRINT-ONLY REPORT SUMMARY (Hidden on screen) */}
      <div className="hidden print:block text-gray-900 bg-white mb-8">
        <div className="flex justify-between items-center border-b-2 border-blue-600 pb-3 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{t.title}</h1>
            <p className="text-xs text-gray-500">adsroicalc.com • Campaign Profitability Analysis</p>
          </div>
          <div className="text-right text-xs text-gray-500">
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{t.investment}</h3>
            <table className="w-full text-xs">
              <tbody>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.adSpend}</td>
                  <td className="font-bold text-gray-900">{adSpend}€</td>
                </tr>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.clicks}</td>
                  <td className="font-bold text-gray-900">{clicks}</td>
                </tr>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.conversions}</td>
                  <td className="font-bold text-gray-900">{conversions}</td>
                </tr>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.salePrice}</td>
                  <td className="font-bold text-gray-900">{salePrice}€</td>
                </tr>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.cogs}</td>
                  <td className="font-bold text-gray-900">{cogs}€</td>
                </tr>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.tax}</td>
                  <td className="font-bold text-gray-900">{taxPercent}%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{t.results}</h3>
            <table className="w-full text-xs">
              <tbody>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.roas}</td>
                  <td className={`font-bold ${Number(calculations.roas) >= Number(calculations.breakevenRoas) ? 'text-green-600' : 'text-red-500'}`}>{calculations.roas}x</td>
                </tr>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.breakevenRoas}</td>
                  <td className="font-bold text-gray-900">{calculations.breakevenRoas}x</td>
                </tr>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.roi}</td>
                  <td className={`font-bold ${Number(calculations.roi) >= 0 ? 'text-green-600' : 'text-red-500'}`}>{calculations.roi}%</td>
                </tr>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.netProfit}</td>
                  <td className={`font-bold ${Number(calculations.totalNetProfit) >= 0 ? 'text-green-600' : 'text-red-500'}`}>{calculations.totalNetProfit}€</td>
                </tr>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.cpa}</td>
                  <td className="font-bold text-gray-900">{calculations.cpa}€</td>
                </tr>
                <tr className="border-b border-gray-100 py-1.5 flex justify-between">
                  <td className="text-gray-500">{t.netMarginPerUnit}</td>
                  <td className="font-bold text-gray-900">{calculations.netProfitPerUnit}€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Title block (Hidden on print) */}
      <div className="flex items-center gap-3 mb-8 print:hidden">
        <div className="p-3 bg-blue-600 rounded-lg shadow-sm text-white">
          <CalcIcon size={24} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{t.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* FORM SECTION (Hidden on print) */}
        <div className="lg:col-span-4 space-y-8 print:hidden">

          {/* Investment Data */}
          <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
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
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
          <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-100">{t.product}</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{t.salePrice}</label>
                  <input
                    type="number"
                    value={salePrice}
                    onChange={(e) => setSalePrice(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{t.cogs}</label>
                  <input
                    type="number"
                    value={cogs}
                    onChange={(e) => setCogs(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 bg-gray-50 dark:bg-gray-700 dark:text-white outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5">{t.tax}</label>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex bg-gray-100 dark:bg-gray-700/60 rounded-xl p-1 border border-gray-200 dark:border-gray-600/50">
                    {[0, 4, 10, 21].map((val) => {
                      const isActive = taxPercent === val && !isCustomTax;
                      return (
                        <button
                          key={val}
                          type="button"
                          onClick={() => {
                            setTaxPercent(val);
                            setIsCustomTax(false);
                          }}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                            isActive
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-600/30'
                          }`}
                        >
                          {val}%
                        </button>
                      );
                    })}
                  </div>
                  
                  <div className="relative flex items-center flex-grow min-w-[70px] max-w-[100px]">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      placeholder="Otro"
                      value={isCustomTax ? customTaxValue : ''}
                      onChange={(e) => {
                        const valStr = e.target.value;
                        setCustomTaxValue(valStr);
                        setIsCustomTax(true);
                        const valNum = Number(valStr);
                        if (!isNaN(valNum)) {
                          setTaxPercent(valNum);
                        }
                      }}
                      onFocus={() => {
                        setIsCustomTax(true);
                        if (customTaxValue !== '') {
                          setTaxPercent(Number(customTaxValue));
                        }
                      }}
                      className={`w-full pl-2 pr-6 py-1.5 text-xs border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold ${
                        isCustomTax
                          ? 'border-blue-500 ring-2 ring-blue-600/20'
                          : 'border-gray-250 dark:border-gray-650'
                      }`}
                    />
                    <span className="absolute right-2 text-xs font-semibold text-gray-400 pointer-events-none">%</span>
                  </div>
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

        {/* RESULTS SECTION (Full width on print) */}
        <div className="lg:col-span-8 flex flex-col gap-6 print:col-span-12 print:w-full">

          <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 print:shadow-none print:border-none print:p-0">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.results}</h2>
              <div className="flex flex-wrap items-center gap-2 print:hidden">
                {/* Export PDF Button */}
                <button
                  onClick={handleExportPDF}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-50 dark:bg-gray-750 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white active:scale-95 transition-all shadow-sm"
                  title={t.exportPdf}
                >
                  <Printer size={14} />
                  <span>{t.exportPdf}</span>
                </button>

                {/* Copy Results Button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-600/10"
                  title={t.copy}
                >
                  <Copy size={14} />
                  <span>{t.copy}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

              {/* ROAS */}
              <div className="p-4 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 border border-blue-600/20 dark:border-blue-600/30">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{t.roas}</p>
                <p className={`text-2xl sm:text-3xl font-bold ${Number(calculations.roas) >= Number(calculations.breakevenRoas) ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                  {calculations.roas}x
                </p>
                <p className="text-xs text-gray-500 mt-2">{t.breakevenRoas}: {calculations.breakevenRoas}x</p>
              </div>

              {/* ROI */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t.roi}</p>
                <p className={`text-2xl sm:text-3xl font-bold ${Number(calculations.roi) > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                  {calculations.roi}%
                </p>
              </div>

              {/* Net Profit */}
              <div className="col-span-2 lg:col-span-1 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t.netProfit}</p>
                <p className={`text-2xl sm:text-3xl font-bold ${Number(calculations.totalNetProfit) > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
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
          <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex-1 min-h-[350px] print:shadow-none print:border-none print:p-0 print:mt-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{t.chartTitle}</h3>
              <div className="flex items-center gap-2 print:hidden">
                <button
                  onClick={copyChartToClipboard}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-50 dark:bg-gray-750 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white active:scale-95 transition-all shadow-sm"
                  title={t.copyChart}
                >
                  <Image size={14} />
                  <span>{t.copyChart}</span>
                </button>
              </div>
            </div>

            <div className="w-full h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorCosts" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
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

      {/* FLOATING TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-xl shadow-2xl border border-slate-800 dark:border-gray-200">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{toast.message}</span>
          </div>
        </div>
      )}

    </div>
  );
}
