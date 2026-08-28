import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, ShieldCheck, Clock, Zap, Star, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#faf8f5]">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-orange-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-yellow-100 blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="flex flex-col space-y-6 max-w-xl">
              <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 font-bold rounded-full text-sm w-fit uppercase tracking-wider border border-orange-200">
                A Sopanam Group of Company
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Authentic Taste <br/>
                <span className="text-orange-500">Shouldn't Be<br/>So Hard</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed md:max-w-[85%]">
                Experience the true essence of traditional Kerala cooking. We bring you pure, unadulterated spices, masalas, pulses, pickles, and oils made with 100% natural ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full h-14 px-8 text-base shadow-xl">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-slate-200 text-slate-700 hover:bg-slate-50">
                  Our Story
                </Button>
              </div>
            </div>

            {/* Hero Image Area (Actual Image) */}
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white z-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop" 
                  alt="Premium Indian Spices" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Elements around image */}
              <div className="absolute top-10 md:top-20 left-0 md:left-10 w-24 h-24 bg-white rounded-2xl shadow-xl z-30 flex flex-col items-center justify-center transform -rotate-6 animate-pulse" style={{ animationDuration: '4s' }}>
                 <span className="text-orange-500 font-black text-xl">100%</span>
                 <span className="text-slate-600 text-[10px] font-bold uppercase tracking-wider">Natural</span>
              </div>

              <div className="absolute bottom-10 right-0 md:-right-10 w-40 h-16 bg-white rounded-full shadow-xl z-30 flex items-center justify-center gap-3 px-4 transform rotate-3">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                   <Leaf className="w-5 h-5 text-green-600" />
                 </div>
                 <span className="text-slate-800 text-sm font-black uppercase tracking-tight">Pure Spices</span>
              </div>
              
              {/* Decorative Blurs */}
              <div className="absolute top-1/4 -left-4 w-12 h-12 bg-red-500 rounded-full shadow-lg blur-[3px] opacity-60"></div>
              <div className="absolute bottom-1/4 -right-4 w-16 h-16 bg-yellow-400 rounded-full shadow-lg blur-[2px] opacity-60"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. REAL FOOD INGREDIENTS BANNER */}
      <section className="w-full py-12 bg-white relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 flex gap-4 items-center">
              <div className="w-24 h-24 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                 <Leaf className="w-10 h-10 text-orange-500" />
              </div>
              <div className="w-24 h-24 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                 <ShieldCheck className="w-10 h-10 text-yellow-600" />
              </div>
            </div>
            <div className="flex-[2]">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Real Food Ingredients</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe in transparency. Everything we make uses real, wholesome ingredients sourced directly from farmers. No artificial colors, no preservatives, and no hidden fillers.
              </p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full">Read More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHEN TO USE (Features) */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Perfect For Every Meal</h2>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto">Enhance the flavor of your dishes naturally. Our products are designed to make your daily cooking easier and healthier.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Breakfast</h3>
              <p className="text-sm text-slate-500">Start your day with healthy options.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lunch</h3>
              <p className="text-sm text-slate-500">Rich gravies and perfect sides.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Snacks</h3>
              <p className="text-sm text-slate-500">Guilt-free traditional bites.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Dinner</h3>
              <p className="text-sm text-slate-500">Light, digestible, and pure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="w-full py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Us?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                We bridge the gap between traditional food wisdom and modern convenience. Our products are meticulously prepared using age-old recipes without compromising on quality or hygiene.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">100% Natural</h4>
                    <p className="text-slate-500">No artificial additives or preservatives.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Authentic Recipes</h4>
                    <p className="text-slate-500">Passed down through generations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full h-[500px] bg-white rounded-3xl shadow-xl flex items-center justify-center p-8 border border-slate-100 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white"></div>
               {/* Actual Image for 'Why Choose Us' */}
               <div className="relative z-10 w-full max-w-sm aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-end group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&h=800&auto=format&fit=crop" 
                    alt="Authentic Spices Quality" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90"></div>
                  
                  <div className="relative z-20 p-8">
                    <h3 className="text-white text-3xl font-black mb-2 leading-tight">Nila<br/><span className="text-orange-500">Quality</span></h3>
                    <p className="text-slate-200 font-medium text-lg leading-snug">Purity you can taste in every bite.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEST SELLING PRODUCTS */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Best Selling Products</h2>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto">Discover our most loved items, handpicked by our community of food enthusiasts.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Product Card 1 */}
            <div className="group bg-slate-50 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-100 flex flex-col h-full">
              <div className="w-full aspect-[4/5] bg-white rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop" alt="Chilli Powder" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Chilli Powder (മുളകുപൊടി)</h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">Premium quality roasted chilli powder.</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-400">250g / 500g</span>
                  <span className="text-2xl font-black text-slate-900">₹250</span>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold px-6">Buy</Button>
              </div>
            </div>
            
            {/* Product Card 2 */}
            <div className="group bg-slate-50 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-100 flex flex-col h-full">
              <div className="w-full aspect-[4/5] bg-white rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1596633605700-1efc9b49e277?w=600&auto=format&fit=crop" alt="Chicken Masala" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Chicken Masala (ചിക്കൻ മസാല)</h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">Perfect blend of traditional spices for authentic Kerala chicken curry.</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-400">250g / 500g</span>
                  <span className="text-2xl font-black text-slate-900">₹180</span>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold px-6">Buy</Button>
              </div>
            </div>
            
            {/* Product Card 3 */}
            <div className="group bg-slate-50 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-100 flex flex-col h-full">
              <div className="w-full aspect-[4/5] bg-white rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1599909693688-66cbaf9e574f?w=600&auto=format&fit=crop" alt="Prawn Chutney" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Prawn Chutney Powder</h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">(ചെമ്മീൻ ചമ്മന്തി പൊടി) Traditional delicacy.</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-400">Standard Pack</span>
                  <span className="text-2xl font-black text-slate-900">₹150</span>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold px-6">Buy</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full h-14 px-10 text-base">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* 6. STATS */}
      <section className="w-full py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black mb-2 text-orange-500">15+</span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-sm">Products</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black mb-2 text-orange-500">20+</span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black mb-2 text-orange-500">10k+</span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-sm">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black mb-2 text-orange-500">100%</span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-sm">Natural Ingredients</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="w-full py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Happy Clients Say</h2>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto">Read how Nila Kitchen Fresh has transformed the cooking experience for thousands.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 flex gap-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center text-orange-500 font-bold text-xl">SM</div>
              <div>
                <div className="flex text-yellow-400 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-slate-700 italic mb-4 leading-relaxed">"The Sambar powder is exactly how my grandmother used to make it. It saves me so much time without compromising on the authentic taste."</p>
                <h4 className="font-bold text-slate-900">Sneha Menon</h4>
                <p className="text-slate-500 text-sm">Verified Buyer</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 flex gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center text-blue-500 font-bold text-xl">RJ</div>
              <div>
                <div className="flex text-yellow-400 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-slate-700 italic mb-4 leading-relaxed">"Their puttu podi and roasted rice powders are premium quality. You can tell they use good quality grains. Highly recommended."</p>
                <h4 className="font-bold text-slate-900">Rahul Jacob</h4>
                <p className="text-slate-500 text-sm">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            {/* Decorative background for newsletter */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
            
            <div className="flex-1 relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe for daily Updates</h2>
              <p className="text-slate-400 text-lg">Join our newsletter and get 10% off your first purchase.</p>
            </div>
            
            <div className="flex-1 w-full relative z-10">
              <div className="flex w-full bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/20">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-transparent border-none text-white px-6 focus:outline-none focus:ring-0 placeholder:text-slate-400"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 shrink-0">
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
