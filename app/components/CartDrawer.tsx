'use client';

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
    const {
        cart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalAmount,
    } = useCart();

    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');

    if (!isCartOpen) return null;

    const handleWhatsAppCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        if (cart.length === 0) return;

        const phoneNumber = '573000000000'; // Número oficial de Semisa Web Solutions / Cliente

        let message = `🛒 *NUEVO PEDIDO - SEMISA STORE*\n\n`;
        message += `👤 *Cliente:* ${customerName || 'No especificado'}\n`;
        message += `📍 *Dirección/Ciudad:* ${customerAddress || 'Por coordinar'}\n\n`;
        message += `📦 *Detalle del Pedido:*\n`;

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.product.name} (x${item.quantity}) - $${(
                item.product.price * item.quantity
            ).toFixed(2)}\n`;
        });

        message += `\n💰 *TOTAL A PAGAR:* $${totalAmount.toFixed(2)}\n\n`;
        message += `Quedo a la espera de la confirmación para coordinar el pago y envío. ¡Muchas gracias!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm transition-opacity">
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
                <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">

                    {/* Header del Carrito */}
                    <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-600 rounded-lg text-white">
                                <ShoppingBag className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="text-base font-bold">Tu Carrito de Compras</h2>
                                <p className="text-[11px] text-slate-400">
                                    {cart.length} {cart.length === 1 ? 'producto' : 'productos'} en la lista
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Lista de Productos */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-slate-100">
                        {cart.length === 0 ? (
                            <div className="text-center py-16 space-y-3">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto border border-blue-100">
                                    <ShoppingBag className="w-8 h-8" />
                                </div>
                                <p className="text-sm font-semibold text-slate-800">
                                    Tu carrito está vacío
                                </p>
                                <p className="text-xs text-slate-400">
                                    Agrega productos desde el catálogo para iniciar tu pedido.
                                </p>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4">
                                    <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        className="w-16 h-16 object-cover rounded-xl border border-slate-200"
                                    />
                                    <div className="flex-1 space-y-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                                                {item.product.name}
                                            </h4>
                                            <button
                                                onClick={() => removeFromCart(item.product.id)}
                                                className="text-slate-400 hover:text-red-600 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <p className="text-xs font-semibold text-blue-600">
                                            ${item.product.price.toFixed(2)}
                                        </p>

                                        {/* Controles de Cantidad */}
                                        <div className="flex items-center gap-3 pt-1">
                                            <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(item.product.id, item.quantity - 1)
                                                    }
                                                    className="p-1 text-slate-600 hover:bg-slate-200 rounded-l-lg transition-colors"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="px-3 text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(item.product.id, item.quantity + 1)
                                                    }
                                                    className="p-1 text-slate-600 hover:bg-slate-200 rounded-r-lg transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <span className="text-[11px] text-slate-400 font-medium">
                        Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Formulario & Botón de Envíos por WhatsApp */}
                    {cart.length > 0 && (
                        <form
                            onSubmit={handleWhatsAppCheckout}
                            className="p-6 bg-slate-50 border-t border-slate-200 space-y-4"
                        >
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    placeholder="Tu Nombre completo"
                                    required
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    className="w-full text-xs px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-600 text-slate-800"
                                />
                                <input
                                    type="text"
                                    placeholder="Dirección o Ciudad de Entrega"
                                    required
                                    value={customerAddress}
                                    onChange={(e) => setCustomerAddress(e.target.value)}
                                    className="w-full text-xs px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-600 text-slate-800"
                                />
                            </div>

                            <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                                <span className="text-xs text-slate-500 font-medium">Total Estimado</span>
                                <span className="text-xl font-extrabold text-blue-700">
                  ${totalAmount.toFixed(2)}
                </span>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                <span>Confirmar Pedido por WhatsApp</span>
                            </button>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
}