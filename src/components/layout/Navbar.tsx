import Link from "next/link";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Nila Kitchen Fresh" className="h-14 w-auto object-contain" />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-semibold">
          <Link href="/" className="text-orange-500">Home</Link>
          <Link href="/shop" className="text-slate-600 hover:text-orange-500 transition-colors">Shop</Link>
          <Link href="/about" className="text-slate-600 hover:text-orange-500 transition-colors">About</Link>
          <Link href="/contact" className="text-slate-600 hover:text-orange-500 transition-colors">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-full">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="default" size="icon" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full relative shadow-lg shadow-orange-500/30 w-10 h-10">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-[10px] font-bold text-white">
              0
            </span>
            <span className="sr-only">Cart</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-slate-600">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
