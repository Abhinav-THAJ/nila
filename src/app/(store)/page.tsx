import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, ShieldCheck, Clock, Zap, Star, CheckCircle2, ChevronRight } from "lucide-react";
import { getProducts, getCategories } from "@/lib/woocommerce";
import AddToCartButton from "@/components/shop/AddToCartButton";

export default async function Home() {
  const wooProducts = await getProducts({ per_page: '6' }); // fetch 6 for home page
  const wooCategories = await getCategories();

  const displayProducts = wooProducts && wooProducts.length > 0 
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

  // Filter out "Uncategorized" and parse out html entities
  const displayCategories = wooCategories && wooCategories.length > 0
    ? wooCategories
        .filter((c: any) => c.name !== 'Uncategorized')
        .map((c: any) => ({
          id: c.id,
          name: c.name.replace(/&amp;/g, '&'),
          count: c.count,
          image: c.image?.src || "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop"
        }))
    : [];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* 1. HERO SECTION - Modern Redesign */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Dynamic Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-600/20 blur-[120px] mix-blend-screen"></div>
          <div className="absolute top-40 -left-20 w-[500px] h-[500px] rounded-full bg-amber-600/20 blur-[100px] mix-blend-screen"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-red-600/20 blur-[100px] mix-blend-screen"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            {/* Hero Text */}
            <div className="flex-1 flex flex-col space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-orange-400 font-medium rounded-full text-sm w-fit border border-white/10">
                <Leaf className="w-4 h-4" />
                <span>100% Pure & Authentic</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight">
                Taste the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                  Tradition
                </span><br/>
                of Kerala
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl font-light">
                Discover the finest spices, pure oils, and homemade pickles. Directly from the heart of Kerala to your kitchen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/shop">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full h-14 px-8 text-lg font-bold shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all hover:scale-105 border-none w-full sm:w-auto">
                    Explore Products
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 transition-all w-full sm:w-auto">
                    Our Heritage
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/10 mt-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-orange-100 flex items-center justify-center font-bold text-orange-600 text-xs">AJ</div>
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-xs">SM</div>
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-green-100 flex items-center justify-center font-bold text-green-600 text-xs">RJ</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-amber-400 text-sm">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-slate-400 text-xs mt-1">Loved by 10,000+ homes</span>
                </div>
              </div>
            </div>

            {/* Hero Image / Composition */}
            <div className="flex-1 relative w-full h-[500px] lg:h-[700px] hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Decorative glowing orb behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-amber-500/30 rounded-full blur-[80px] mix-blend-screen animate-pulse duration-1000"></div>
                
                {/* Main Feature Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border border-white/10 shadow-2xl z-20 bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Premium Indian Spices" 
                    className="w-full h-full object-cover opacity-90 transform hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-10 -left-6 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl transform -rotate-6 animate-bounce" style={{ animationDuration: '3s' }}>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                       <CheckCircle2 className="w-5 h-5 text-white" />
                     </div>
                     <div>
                       <p className="text-white font-bold text-sm">Zero</p>
                       <p className="text-slate-300 text-xs">Preservatives</p>
                     </div>
                   </div>
                </div>

                <div className="absolute bottom-20 -right-6 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl transform rotate-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                       <Leaf className="w-5 h-5 text-white" />
                     </div>
                     <div>
                       <p className="text-white font-bold text-sm">Sourced</p>
                       <p className="text-slate-300 text-xs">Direct from Farms</p>
                     </div>
                   </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY (Dynamic from WooCommerce) */}
      <section className="w-full py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Shop by <span className="text-orange-500">Category</span></h2>
              <p className="text-slate-500 text-lg">Explore our diverse range of traditional products, meticulously prepared to bring the authentic taste of Kerala to your home.</p>
            </div>
            <Link href="/shop" className="group flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors">
              View All Categories 
              <span className="bg-orange-100 p-2 rounded-full group-hover:bg-orange-200 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayCategories.map((category: any, index: number) => (
              <Link href={`/shop?category=${encodeURIComponent(category.name)}`} key={category.id} className="group">
                <div className="relative h-[300px] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-slate-900 z-10 opacity-30 group-hover:opacity-10 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
                  
                  {/* We use a placeholder image logic or actual category image if available from WP */}
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-2xl font-black text-white mb-1 group-hover:text-orange-400 transition-colors">{category.name}</h3>
                    <p className="text-slate-300 text-sm font-medium">{category.count} Products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LATEST ARRIVALS / FEATURED PRODUCTS */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-bold rounded-full text-xs uppercase tracking-wider mb-4">
              Freshly Prepared
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Latest <span className="text-orange-500">Additions</span></h2>
            <p className="text-slate-500 text-lg">Handpicked and freshly prepared batches of our most loved traditional items.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProducts.length > 0 ? (
              displayProducts.map((product: any) => (
                <Link href={`/product/${product.id}`} key={product.id} className="block group">
                  <div className="bg-white rounded-[2.5rem] p-5 transition-all duration-500 hover:shadow-2xl border border-slate-100 flex flex-col h-full relative group-hover:-translate-y-2">
                    {/* Image Area */}
                    <div className="w-full aspect-[4/5] bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl mb-6 relative overflow-hidden flex items-center justify-center group-hover:border-orange-200 transition-colors border border-transparent">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1500ms]" />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm text-orange-500 font-black text-3xl uppercase">
                          {product.name.charAt(0)}
                        </div>
                      )}
                      
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-sm">
                        {product.category}
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="px-3 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors line-clamp-1">{product.name}</h3>
                      <p className="text-orange-500 font-medium text-sm mb-4 line-clamp-1">{product.malayalam}</p>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.sizes}</span>
                          <span className="text-2xl font-black text-slate-900 tracking-tight">₹{product.price}</span>
                        </div>
                        {/* Interactive Add To Cart */}
                        <div className="transform group-hover:scale-105 transition-transform">
                          <AddToCartButton product={product} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-3xl border border-slate-100">
                <p className="text-lg font-medium">New exciting products arriving soon!</p>
              </div>
            )}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link href="/shop">
              <Button size="lg" className="bg-slate-900 hover:bg-orange-600 text-white rounded-full h-14 px-12 text-lg font-bold shadow-xl transition-colors">
                View Entire Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. THE NILA PROMISE (Glassmorphism design) */}
      <section className="w-full py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Background" />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight">The Nila <span className="text-orange-500">Promise</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">100% Natural</h3>
              <p className="text-slate-300 leading-relaxed">No artificial colors, flavors, or preservatives. We guarantee absolute purity in every pack.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-slate-300 leading-relaxed">Sourced directly from trusted local farmers in Kerala, ensuring top-tier grades.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fresh Batches</h3>
              <p className="text-slate-300 leading-relaxed">Produced in small, controlled batches to maintain supreme freshness and aroma.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER */}
      <section className="w-full py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-[3rem] p-10 md:p-20 flex flex-col text-center items-center justify-center max-w-4xl mx-auto shadow-sm border border-orange-200 relative overflow-hidden">
            {/* Decors */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400 rounded-full blur-[80px] opacity-40"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-400 rounded-full blur-[80px] opacity-40"></div>
            
            <div className="relative z-10 w-full">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Join the Nila Family</h2>
              <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">Subscribe to our newsletter for exclusive offers, traditional recipes, and updates on new arrivals.</p>
              
              <div className="flex flex-col sm:flex-row w-full max-w-lg mx-auto bg-white p-2 rounded-full shadow-lg border border-slate-100">
                <input 
                  type="email" 
                  placeholder="Your email address..." 
                  className="flex-1 bg-transparent border-none text-slate-900 px-6 py-4 focus:outline-none focus:ring-0 placeholder:text-slate-400 font-medium"
                />
                <Button className="bg-orange-500 hover:bg-slate-900 text-white rounded-full px-10 py-4 h-auto font-bold transition-colors shadow-md">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
