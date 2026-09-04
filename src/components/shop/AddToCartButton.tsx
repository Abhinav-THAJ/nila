"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  sizes?: string;
};

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image || "",
      size: product.sizes
    });
  };

  return (
    <Button 
      onClick={handleAdd}
      className="bg-slate-900 hover:bg-orange-500 text-white rounded-full font-bold px-5 transition-colors"
    >
      Add
    </Button>
  );
}
