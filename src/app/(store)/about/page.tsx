import { CheckCircle2, Leaf, ShieldCheck, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-slate-900 z-0"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&auto=format&fit=crop" 
          alt="Spices Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 mix-blend-overlay"
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 font-bold rounded-full text-sm w-fit uppercase tracking-wider border border-orange-500/30 mb-6">
            A Sopanam Group of Company
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The True Essence of <br />
            <span className="text-orange-500">Kerala Tradition</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Nila Kitchen Fresh (നിള കിച്ചൻ ഫ്രഷ്) brings you 100% pure, high-quality, and authentic spices, masalas, pulses, pickles, and oils straight from our traditional kitchen to yours.
          </p>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 w-full h-[600px] relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="https://images.unsplash.com/photo-1587834515569-798835f8fcaf?w=800&auto=format&fit=crop" 
                 alt="Traditional Kerala Cooking" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-10">
                 <h3 className="text-3xl font-black text-white mb-2">Fresh & Hygienic</h3>
                 <p className="text-slate-300 font-medium text-lg">Delivering natural food products without compromise.</p>
               </div>
            </div>

            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">Our Mission</h2>
                <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Preserving the authentic flavors of our ancestors.</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  In a world of fast food and artificial additives, Nila Kitchen Fresh stands for purity. As a proud entity of the Sopanam Group, our mission is to ensure every household has access to food products that are as pure and unadulterated as nature intended.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">100% Natural</h4>
                  <p className="text-slate-600 text-sm">No artificial colors, flavors, or preservatives are ever used in our kitchen.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Premium Quality</h4>
                  <p className="text-slate-600 text-sm">Rigorous quality checks ensure you only receive the highest grade products.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Hygienic Process</h4>
                  <p className="text-slate-600 text-sm">Prepared in ultra-clean environments to maintain absolute purity and hygiene.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Made with Love</h4>
                  <p className="text-slate-600 text-sm">Every recipe honors the rich culinary heritage of traditional Kerala cooking.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
