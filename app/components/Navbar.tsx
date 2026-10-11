'use client';

import React from 'react';
import { ShoppingBag, Search, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const { totalItems, setIsCartOpen } = useCart();

    return (
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Brand Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-blue-600/20">
                        S
                    </div>
                    <div>
            <span className="text-xs font-extrabold tracking-widest text-slate-900 uppercase block">
              SEMISA <span className="text-blue-600">Store</span>
            </span>
                        <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-blue-600" /> Compra Segura
            </span>
                    </div>
                </div>

                {/* Search Input */}
                <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 w-80 border border-slate-200 focus-within:border-blue-600 transition-colors">
                    <Search className="w-4 h-4 text-slate-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        className="bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none w-full"
                    />
                </div>

                {/* Cart Trigger */}
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative p-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-all flex items-center gap-2 border border-blue-200"
                >
                    <ShoppingBag className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-bold hidden sm:inline">Carrito</span>
                    {totalItems > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              {totalItems}
            </span>
                    )}
                </button>
            </div>
        </nav>
    );
}