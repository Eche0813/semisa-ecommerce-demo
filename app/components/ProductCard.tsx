'use client';

import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { Product } from '@/types/ecommerce';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart, cart } = useCart();
    const isInCart = cart.some((item) => item.product.id === product.id);

    return (
        <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
            <div>
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                        <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              {product.badge}
            </span>
                    )}
                </div>

                <div className="p-5 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
            {product.category}
          </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2">
                        {product.description}
                    </p>
                </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                <div>
                    <span className="text-xs text-slate-400 font-medium block">Precio</span>
                    <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
                        {product.originalPrice && (
                            <span className="text-xs text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
                        )}
                    </div>
                </div>

                <button
                    onClick={() => addToCart(product)}
                    className={`px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all flex items-center gap-2 shadow-md ${
                        isInCart
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                    }`}
                >
                    {isInCart ? (
                        <>
                            <Check className="w-4 h-4" />
                            <span>Agregado</span>
                        </>
                    ) : (
                        <>
                            <ShoppingCart className="w-4 h-4" />
                            <span>Añadir</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}