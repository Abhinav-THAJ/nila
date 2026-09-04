"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to our internal Next.js API route to hide Woo credentials
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: formData,
          cart: cart
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to place order");
      }

      setSuccess(true);
      clearCart();
    } catch (error) {
      console.error(error);
      alert("There was an error placing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="container mx-auto px-4 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <CheckCircle2 className="w-24 h-24 text-green-500 mb-6" />
        <h1 className="text-4xl font-black text-slate-900 mb-4">Order Confirmed!</h1>
        <p className="text-lg text-slate-600 mb-8 max-w-md">
          Thank you for your purchase. We have received your order and will process it shortly.
        </p>
        <Button 
          onClick={() => router.push("/shop")}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold px-8 py-6 text-lg"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="mb-8 text-slate-500">Your cart is empty.</p>
        <Button onClick={() => router.push("/shop")}>Return to Shop</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 min-h-screen">
      <h1 className="text-4xl font-black text-slate-900 mb-8">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Checkout Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Shipping Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">First Name</label>
                <input required name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Last Name</label>
                <input required name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Address</label>
              <input required name="address" value={formData.address} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2 col-span-1">
                <label className="text-sm font-semibold text-slate-700">City</label>
                <input required name="city" value={formData.city} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <div className="space-y-2 col-span-1">
                <label className="text-sm font-semibold text-slate-700">State</label>
                <input required name="state" value={formData.state} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <div className="space-y-2 col-span-1">
                <label className="text-sm font-semibold text-slate-700">ZIP</label>
                <input required name="zip" value={formData.zip} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-orange-500 text-white rounded-xl font-bold py-4 h-auto text-lg mt-4 transition-colors"
            >
              {isSubmitting ? "Processing..." : `Place Order • ₹${cartTotal}`}
            </Button>
          </form>
        </div>

        {/* Order Summary sidebar */}
        <div className="w-full lg:w-96">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 sticky top-28">
            <h3 className="text-xl font-bold text-slate-900 mb-6">In your cart</h3>
            
            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex items-center gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center border border-slate-100">
                     {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-slate-400 font-bold">{item.name.charAt(0)}</span>
                      )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="font-bold text-slate-900">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-6">
              <div className="flex justify-between items-center text-lg font-black text-slate-900">
                <span>Total</span>
                <span className="text-2xl text-orange-600">₹{cartTotal}</span>
              </div>
              <p className="text-xs text-slate-500 text-right mt-1">Payment via Cash on Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
