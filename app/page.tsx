'use client';

import { useState, useEffect } from 'react';
import { CartProvider } from '@/context/CartContext';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Sparkles, Shield, Truck, CreditCard } from 'lucide-react';

export default function EcommerceApp() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const filteredProducts =
      selectedCategory === 'Todos'
          ? PRODUCTS
          : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
      <CartProvider>
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
          <Navbar />

          {/* Hero Banner Comercial */}
          <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white py-16 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-6 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Plataforma Demo de Comercio Electrónico</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                Experiencia de Compra Rápida, Intuitiva & Directa
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-light">
                Explore nuestro catálogo, agregue artículos a su carrito y finalice la compra instantáneamente con un mensaje formateado a WhatsApp.
              </p>

              {/* Badges de Confianza */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <Truck className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold">Envíos Garantizados</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold">Garantía de Satisfacción</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <CreditCard className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold">Pagos Flexibles</span>
                </div>
              </div>
            </div>
          </section>

          {/* Sección del Catálogo & Filtros */}
          <section className="max-w-7xl mx-auto px-6 py-12 space-y-8">

            {/* Bar de Filtros por Categoría */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 overflow-x-auto">
              <div className="flex gap-2">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                            selectedCategory === category
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                        }`}
                    >
                      {category}
                    </button>
                ))}
              </div>

              <span className="text-xs text-slate-400 font-medium hidden md:inline">
              Mostrando {filteredProducts.length} productos
            </span>
            </div>

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Drawer del Carrito Flotante */}
          <CartDrawer />

          {/* Footer Institucional Corregido */}
          <footer className="bg-slate-900 text-slate-400 py-10 px-6 border-t border-slate-800 text-center text-xs">
            <p>© {year} Semisa Web Solutions — Demo de Catálogo Interactivo. Todos los derechos reservados.</p>
          </footer>
        </main>
      </CartProvider>
  );
}