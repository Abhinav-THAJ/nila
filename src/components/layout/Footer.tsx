import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Nila Kitchen Fresh" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-xs text-orange-600 font-bold mb-4 uppercase tracking-wider">A Sopanam group of company</p>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              100% pure, high-quality, and authentic traditional Kerala spices, masalas, pulses, pickles, and oils.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-orange-500 hover:border-orange-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-orange-500 hover:border-orange-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-orange-500 hover:border-orange-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Sopanam, Choranad, Vadamon PO, Anchal 691306, Kollam, Kerala, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>+91 7902425634</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-orange-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <span>WhatsApp: +91 7902425634</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:nilakitchenfresh@gmail.com" className="hover:text-orange-500">nilakitchenfresh@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/shop" className="text-slate-600 hover:text-orange-500">Shop Spices</Link></li>
              <li><Link href="/shop?category=traditional-pickles" className="text-slate-600 hover:text-orange-500">Traditional Pickles</Link></li>
              <li><Link href="/shop?category=chutney-powders" className="text-slate-600 hover:text-orange-500">Chutney Powders</Link></li>
              <li><Link href="/shop?category=pure-oils" className="text-slate-600 hover:text-orange-500">Pure Oils</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/terms" className="text-slate-600 hover:text-orange-500">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-slate-600 hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link href="/shipping" className="text-slate-600 hover:text-orange-500">Shipping Policy</Link></li>
              <li><Link href="/refunds" className="text-slate-600 hover:text-orange-500">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Nila Kitchen Fresh. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="font-medium">Secure Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
