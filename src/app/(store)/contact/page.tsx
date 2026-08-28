import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf8f5]">
      
      {/* Header */}
      <div className="w-full bg-slate-900 py-16 px-4 md:px-6">
        <div className="container mx-auto text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Contact Us</h1>
          <p className="text-slate-300 text-lg">
            We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Get In Touch</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Reach out to Nila Kitchen Fresh. As a proud Sopanam Group company, we ensure top-notch customer service and fast responses.
              </p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Location</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sopanam, Choranad, Vadamon PO, <br />
                    Anchal 691306, Kollam, <br />
                    Kerala, India.
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Phone & WhatsApp</h3>
                  <p className="text-slate-600 mb-1">
                    <span className="font-medium text-slate-900">Call Us:</span> +91 7902425634
                  </p>
                  <p className="text-slate-600">
                    <span className="font-medium text-slate-900">WhatsApp:</span> +91 7902425634
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Email Address</h3>
                  <a href="mailto:nilakitchenfresh@gmail.com" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
                    nilakitchenfresh@gmail.com
                  </a>
                  <p className="text-slate-500 text-sm mt-2">We typically reply within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 h-fit">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can we help you?" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Write your message here..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all resize-none"
                ></textarea>
              </div>
              
              <Button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 rounded-xl text-lg flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
