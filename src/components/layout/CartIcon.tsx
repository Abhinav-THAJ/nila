"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export function CartIcon() {
  const { cartCount } = useCart();

  return (
    <Link href="/cart">
      <Button variant="default" size="icon" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full relative shadow-lg shadow-orange-500/30 w-10 h-10">
        <ShoppingCart className="h-4 w-4" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
        <span className="sr-only">Cart</span>
      </Button>
    </Link>
  );
}
