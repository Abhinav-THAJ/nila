"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 min-h-screen">
      <h1 className="text-4xl font-black text-slate-900 mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-100">
          <p className="text-xl text-slate-500 mb-6">Your cart is empty.</p>
          <Link href="/shop">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold px-8">
              Start Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="w-24 h-24 bg-orange-50 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-orange-500 font-black text-2xl uppercase">{item.name.charAt(0)}</span>
                    )}
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    {item.size && <p className="text-sm text-slate-500 mt-1">{item.size}</p>}
                    <p className="text-orange-600 font-bold mt-2">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-slate-50 rounded-full border border-slate-200">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-slate-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-400 hover:text-red-600 transition-colors bg-red-50 hover:bg-red-100 rounded-full"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button 
                onClick={clearCart}
                className="text-slate-500 hover:text-slate-900 text-sm font-medium underline"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-slate-900 rounded-3xl p-8 text-white sticky top-28">
              <h2 className="text-2xl font-black mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 border-b border-slate-800 pb-6">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Shipping</span>
                  <span className="font-semibold text-white">Calculated at checkout</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end mb-8">
                <span className="text-lg font-bold">Total</span>
                <span className="text-3xl font-black text-orange-400">₹{cartTotal}</span>
              </div>
              
              <Link href="/checkout" className="block w-full">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold h-14 text-lg flex items-center justify-center gap-2 group transition-all">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
