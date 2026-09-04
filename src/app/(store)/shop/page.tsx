import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import AddToCartButton from "@/components/shop/AddToCartButton";
import { getProducts } from "@/lib/woocommerce";

// No mock products anymore, strictly using WooCommerce

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  const categoryFilter = typeof resolvedParams.category === 'string' ? resolvedParams.category : undefined;
  
  const wooProducts = await getProducts({ per_page: '100' }); // Fetch up to 100 products to ensure we get everything for filtering
  
  let displayProducts = wooProducts && wooProducts.length > 0 
    ? wooProducts.map((wp: any) => ({
        id: wp.id,
        name: wp.name,
        malayalam: wp.short_description?.replace(/(<([^>]+)>)/gi, "") || "",
        category: (wp.categories?.[0]?.name || "Uncategorized").replace(/&amp;/g, '&'),
        sizes: wp.attributes?.find((a: any) => a.name === "Size")?.options?.join(" / ") || "Standard",
        price: Number(wp.price) || 0,
        image: wp.images?.[0]?.src || ""
      }))
    : [];

  const categories = Array.from(new Set(displayProducts.map((p: any) => p.category)));

  if (categoryFilter) {
    displayProducts = displayProducts.filter((p: any) => p.category === categoryFilter);
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf8f5]">
      {/* Page Header */}
      <div className="w-full bg-slate-900 py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-slate-900 opacity-20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Complete Catalog</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Browse our selection of 100% pure, high-quality, and authentic traditional Kerala spices, pulses, and pickles.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 sticky top-28">
            <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold text-lg border-b border-slate-100 pb-4">
              <Filter className="w-5 h-5" />
              <span>Categories</span>
            </div>
            
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-orange-600 font-bold flex items-center justify-between group">
                  <span>All Products</span>
                  <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full group-hover:bg-orange-200">{displayProducts.length}</span>
                </Link>
              </li>
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <Link 
                    href={`/shop?category=${encodeURIComponent(cat as string)}`} 
                    className={`font-medium transition-colors ${categoryFilter === cat ? 'text-orange-600 font-bold' : 'text-slate-600 hover:text-orange-500'}`}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-8 gap-4">
             <p className="text-slate-600 font-medium">Showing all <span className="font-bold text-slate-900">{displayProducts.length}</span> products</p>
             <div className="relative w-full sm:w-auto">
               <input 
                 type="text" 
                 placeholder="Search products..." 
                 className="w-full sm:w-64 pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
               />
               <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
             </div>
          </div>

          {/* Grid */}
          {displayProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500">We couldn't find any products matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProducts.map((product: any) => (
                <Link href={`/product/${product.id}`} key={product.id} className="block group">
                  <div className="group bg-white rounded-3xl p-5 transition-all duration-300 hover:shadow-xl border border-slate-100 flex flex-col h-full">
                    <div className="w-full aspect-square bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl mb-5 relative overflow-hidden flex items-center justify-center border border-orange-100 group-hover:border-orange-300 transition-colors">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-orange-500 font-black text-2xl uppercase">
                          {product.name.charAt(0)}
                        </div>
                      )}
                      
                      {/* Category Badge overlay */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-slate-700 uppercase tracking-wider shadow-sm">
                        {product.category}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                    <p className="text-orange-500 font-medium text-sm mb-4 flex-grow">{product.malayalam}</p>
                    
                    <div className="flex items-end justify-between mt-auto pt-4 border-t border-slate-100">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{product.sizes}</span>
                        <span className="text-xl font-black text-slate-900">₹{product.price} <span className="text-xs text-slate-400 font-normal ml-1">onwards</span></span>
                      </div>
                      <AddToCartButton product={product} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
