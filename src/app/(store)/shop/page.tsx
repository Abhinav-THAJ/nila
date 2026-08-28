import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";

// Mocking all products from the user's catalog requirement
const PRODUCTS = [
  // Spice Powders & Masalas
  { id: 1, name: "Chilli Powder", malayalam: "മുളകുപൊടി", category: "Spice Powders & Masalas", sizes: "250g / 500g", price: 120, image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?w=600&auto=format&fit=crop" },
  { id: 2, name: "Coriander Powder", malayalam: "മല്ലിപ്പൊടി", category: "Spice Powders & Masalas", sizes: "250g / 500g", price: 90, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop" },
  { id: 3, name: "Turmeric Powder", malayalam: "മഞ്ഞൾപൊടി", category: "Spice Powders & Masalas", sizes: "200g / 400g", price: 110, image: "https://images.unsplash.com/photo-1615486171447-49339e3b97b0?w=600&auto=format&fit=crop" },
  { id: 4, name: "Curry Powder", malayalam: "കറിപ്പൊടി", category: "Spice Powders & Masalas", sizes: "250g / 500g", price: 130, image: "https://images.unsplash.com/photo-1599909693688-66cbaf9e574f?w=600&auto=format&fit=crop" },
  { id: 5, name: "Chicken Masala", malayalam: "ചിക്കൻ മസാല", category: "Spice Powders & Masalas", sizes: "250g / 500g", price: 150, image: "https://images.unsplash.com/photo-1587834515569-798835f8fcaf?w=600&auto=format&fit=crop" },
  { id: 6, name: "Fish Masala", malayalam: "ഫിഷ് മസാല", category: "Spice Powders & Masalas", sizes: "250g / 500g", price: 160, image: "https://images.unsplash.com/photo-1599909693688-66cbaf9e574f?w=600&auto=format&fit=crop" },
  { id: 7, name: "Meat Masala", malayalam: "മീറ്റ് മസാല", category: "Spice Powders & Masalas", sizes: "250g / 500g", price: 165, image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?w=600&auto=format&fit=crop" },
  { id: 8, name: "Garam Masala", malayalam: "ഗരം മസാല", category: "Spice Powders & Masalas", sizes: "250g / 500g", price: 180, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop" },
  { id: 9, name: "Sambar Powder", malayalam: "സാമ്പാർ പൊടി", category: "Spice Powders & Masalas", sizes: "250g / 500g", price: 140, image: "https://images.unsplash.com/photo-1615486171447-49339e3b97b0?w=600&auto=format&fit=crop" },
  { id: 10, name: "Black Pepper Powder", malayalam: "കുരുമുളക് പൊടി", category: "Spice Powders & Masalas", sizes: "200g / 400g", price: 210, image: "https://images.unsplash.com/photo-1599909693688-66cbaf9e574f?w=600&auto=format&fit=crop" },

  // Raw Food & Whole Spices
  { id: 11, name: "Cumin Seeds", malayalam: "ജീരകം", category: "Raw Food & Whole Spices", sizes: "250g", price: 110, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop" },
  { id: 12, name: "Mustard Seeds", malayalam: "കടുക്", category: "Raw Food & Whole Spices", sizes: "250g", price: 60, image: "https://images.unsplash.com/photo-1615486171447-49339e3b97b0?w=600&auto=format&fit=crop" },
  { id: 13, name: "Fenugreek Seeds", malayalam: "ഉലുവ", category: "Raw Food & Whole Spices", sizes: "250g", price: 70, image: "https://images.unsplash.com/photo-1599909693688-66cbaf9e574f?w=600&auto=format&fit=crop" },
  { id: 14, name: "Green Gram", malayalam: "ചെറുപയർ", category: "Raw Food & Whole Spices", sizes: "500g / 1kg", price: 120, image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?w=600&auto=format&fit=crop" },
  { id: 15, name: "Red Cowpeas / Red Beans", malayalam: "വൻപയർ", category: "Raw Food & Whole Spices", sizes: "500g / 1kg", price: 115, image: "https://images.unsplash.com/photo-1587834515569-798835f8fcaf?w=600&auto=format&fit=crop" },
  { id: 16, name: "Black Gram / Urad Dal", malayalam: "ഉഴുന്ന്", category: "Raw Food & Whole Spices", sizes: "500g / 1kg", price: 140, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop" },
  { id: 17, name: "Chickpeas / Chana Dal", malayalam: "കടല പരിപ്പ്", category: "Raw Food & Whole Spices", sizes: "500g / 1kg", price: 95, image: "https://images.unsplash.com/photo-1615486171447-49339e3b97b0?w=600&auto=format&fit=crop" },
  { id: 18, name: "Toor Dal", malayalam: "സാമ്പാർ പരിപ്പ്", category: "Raw Food & Whole Spices", sizes: "500g / 1kg", price: 160, image: "https://images.unsplash.com/photo-1599909693688-66cbaf9e574f?w=600&auto=format&fit=crop" },
  { id: 19, name: "Kadala Black", malayalam: "കടല", category: "Raw Food & Whole Spices", sizes: "500g / 1kg", price: 105, image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?w=600&auto=format&fit=crop" },
  { id: 20, name: "Kadala White", malayalam: "വെള്ള കടല", category: "Raw Food & Whole Spices", sizes: "500g / 1kg", price: 110, image: "https://images.unsplash.com/photo-1587834515569-798835f8fcaf?w=600&auto=format&fit=crop" },

  // Traditional Pickles
  { id: 21, name: "Lemon Pickle", malayalam: "നാരങ്ങ അച്ചാർ", category: "Traditional Pickles", sizes: "400g", price: 140, image: "https://images.unsplash.com/photo-1626200419189-39c8c79a50c7?w=600&auto=format&fit=crop" },
  { id: 22, name: "Mango Pickle", malayalam: "മാങ്ങ അച്ചാർ", category: "Traditional Pickles", sizes: "400g", price: 150, image: "https://images.unsplash.com/photo-1626200419189-39c8c79a50c7?w=600&auto=format&fit=crop" },
  { id: 23, name: "Tuna Fish Pickle", malayalam: "ചൂര അച്ചാർ", category: "Traditional Pickles", sizes: "400g", price: 280, image: "https://images.unsplash.com/photo-1626200419189-39c8c79a50c7?w=600&auto=format&fit=crop" },
  { id: 24, name: "Beef Pickle", malayalam: "ബീഫ് അച്ചാർ", category: "Traditional Pickles", sizes: "400g", price: 320, image: "https://images.unsplash.com/photo-1626200419189-39c8c79a50c7?w=600&auto=format&fit=crop" },
  { id: 25, name: "Garlic Pickle", malayalam: "വെളുത്തുള്ളി അച്ചാർ", category: "Traditional Pickles", sizes: "400g", price: 160, image: "https://images.unsplash.com/photo-1626200419189-39c8c79a50c7?w=600&auto=format&fit=crop" },

  // Chutney Powders
  { id: 26, name: "Prawn Chutney Powder", malayalam: "ചെമ്മീൻ ചമ്മന്തി പൊടി", category: "Chutney Powders", sizes: "200g", price: 190, image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?w=600&auto=format&fit=crop" },
  { id: 27, name: "Coconut Chutney Powder", malayalam: "തേങ്ങാ ചമ്മന്തി പൊടി", category: "Chutney Powders", sizes: "200g", price: 120, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop" },

  // Pure Oils
  { id: 28, name: "Coconut Oil", malayalam: "കോക്കനട്ട് ഓയിൽ", category: "Pure Oils", sizes: "500ml / 1L", price: 220, image: "https://images.unsplash.com/photo-1615486171447-49339e3b97b0?w=600&auto=format&fit=crop" },
];

export default function ShopPage() {
  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));

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
                  <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full group-hover:bg-orange-200">{PRODUCTS.length}</span>
                </Link>
              </li>
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <Link href={`/shop?category=${cat}`} className="text-slate-600 hover:text-orange-500 font-medium transition-colors">
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
             <p className="text-slate-600 font-medium">Showing all <span className="font-bold text-slate-900">{PRODUCTS.length}</span> products</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl p-5 transition-all duration-300 hover:shadow-xl border border-slate-100 flex flex-col h-full">
                <div className="w-full aspect-square bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl mb-5 relative overflow-hidden flex items-center justify-center border border-orange-100 group-hover:border-orange-300 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-orange-500 font-black text-2xl uppercase">
                    {product.name.charAt(0)}
                  </div>
                  
                  {/* Category Badge overlay */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-slate-700 uppercase tracking-wider shadow-sm">
                    {product.category}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{product.name}</h3>
                <p className="text-orange-500 font-medium text-sm mb-4 flex-grow">{product.malayalam}</p>
                
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{product.sizes}</span>
                    <span className="text-xl font-black text-slate-900">₹{product.price} <span className="text-xs text-slate-400 font-normal ml-1">onwards</span></span>
                  </div>
                  <Button className="bg-slate-900 hover:bg-orange-500 text-white rounded-full font-bold px-5 transition-colors">
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
