"use client";

import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  MessageCircle,
  Stethoscope,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* FLOATING WHATSAPP - Premium */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer">
            <MessageCircle size={26} />
          </div>
        </div>
      </a>

      <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 pt-20 pb-8">
        
        {/* Premium Background Effects */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Footer Grid - Reduced spacing */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <Stethoscope size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white">
                  Dr. Anupriya
                </h3>
              </div>
              <p className="text-cyan-400 text-sm font-semibold tracking-wide">
                ENT Specialist
              </p>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                Providing advanced ENT care with modern diagnosis,
                compassionate treatment, and patient-centered healthcare in Bhopal.
              </p>
              {/* Trust Badge */}
              <div className="flex items-center gap-2 mt-5">
                <Shield size={14} className="text-cyan-500" />
                <span className="text-xs text-gray-500">NABH Accredited Hospital</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-500" />
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Gallery",
                  "Contact",
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Treatments */}
            <div>
              <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-500" />
                Treatments
              </h3>
              <div className="space-y-3">
                {[
                  "Cochlear Implant",
                  "FESS Surgery",
                  "Skull Base Surgery",
                  "Vertigo Treatment",
                  "Voice Disorders",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm cursor-pointer group"
                  >
                    <div className="w-1 h-1 rounded-full bg-cyan-500 group-hover:w-2 transition-all duration-300"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-500" />
                Contact Info
              </h3>
              <div className="space-y-5">
                {/* Phone */}
                <div className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Call for Appointment</p>
                    <a href="tel:+917777802365" className="text-white font-semibold text-sm hover:text-cyan-400 transition-colors">
                      +91 77778 02365
                    </a>
                  </div>
                </div>
                
                {/* Emergency */}
                <div className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">24/7 Emergency</p>
                    <a href="tel:+917552773393" className="text-white font-semibold text-sm hover:text-red-400 transition-colors">
                      +91 75527 73393
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Email Address</p>
                    <a href="mailto:clinic@hajelahospital.com" className="text-white font-semibold text-sm hover:text-cyan-400 transition-colors">
                      clinic@hajelahospital.com
                    </a>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Clinic Address</p>
                    <p className="text-white text-sm leading-relaxed">
                      Geetanjali Complex, near Mata Mandir Square,<br />
                      Kotra Sultanabad, Bhopal - 462003
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Reduced spacing */}
          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col lg:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs text-center lg:text-left">
              © 2026 Dr. Anupriya Hajela Shah. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <p className="text-gray-600 text-xs">Advanced ENT Care</p>
              <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
              <p className="text-gray-600 text-xs">Premium Healthcare</p>
              <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
              <p className="text-gray-600 text-xs">Patient First</p>
            </div>
            
            <p className="text-cyan-500/60 text-xs font-medium">
              Designed with ❤️ for Better Healthcare
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}