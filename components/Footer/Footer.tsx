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

      <footer className="relative overflow-hidden bg-white border-t border-teal-100 pt-16 pb-6">
        
        {/* Premium Background Effects - Soft Teal */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-50/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-50/50 rounded-full blur-3xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ccfbf1 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <Stethoscope size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900">
                    Dr. Anupriya
                  </h3>
                  <p className="text-teal-600 text-xs font-semibold tracking-wide">
                    ENT Specialist
                  </p>
                </div>
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Providing advanced ENT care with modern diagnosis,
                compassionate treatment, and patient-centered healthcare in Bhopal.
              </p>
              {/* Trust Badge */}
              <div className="flex items-center gap-2 mt-4">
                <Shield size={14} className="text-teal-600" />
                <span className="text-xs text-gray-500">NABH Accredited Hospital</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                <Sparkles size={16} className="text-teal-600" />
                Quick Links
              </h3>
              <div className="space-y-3">
                {["Home", "About", "Services", "Gallery", "Contact"].map((item, index) => (
                  <a
                    key={index}
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-all duration-300 text-sm"
                  >
                    <ChevronRight size={14} className="text-teal-400 group-hover:translate-x-1 transition-transform duration-300" />
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Treatments */}
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                <Sparkles size={16} className="text-teal-600" />
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
                    className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-all duration-300 text-sm cursor-pointer group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:w-2 transition-all duration-300"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                <Sparkles size={16} className="text-teal-600" />
                Contact Info
              </h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Call for Appointment</p>
                    <a href="tel:+917777802365" className="text-gray-900 font-semibold text-sm hover:text-teal-600 transition-colors">
                      +91 77778 02365
                    </a>
                  </div>
                </div>
                
                {/* Emergency */}
                <div className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">24/7 Emergency</p>
                    <a href="tel:+917552773393" className="text-gray-900 font-semibold text-sm hover:text-red-500 transition-colors">
                      +91 75527 73393
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email Address</p>
                    <a href="mailto:clinic@hajelahospital.com" className="text-gray-900 font-semibold text-sm hover:text-teal-600 transition-colors">
                      clinic@hajelahospital.com
                    </a>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Clinic Address</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Geetanjali Complex, near Mata Mandir Square,<br />
                      Kotra Sultanabad, Bhopal - 462003
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-teal-100 mt-12 pt-6 flex flex-col lg:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs text-center lg:text-left">
              © 2026 Dr. Anupriya Hajela Shah. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <p className="text-teal-600 text-xs font-medium">Advanced ENT Care</p>
              <div className="w-1 h-1 rounded-full bg-teal-400"></div>
              <p className="text-teal-600 text-xs font-medium">Premium Healthcare</p>
              <div className="w-1 h-1 rounded-full bg-teal-400"></div>
              <p className="text-teal-600 text-xs font-medium">Patient First</p>
            </div>
            
            <p className="text-teal-400 text-xs font-medium">
              Designed with ❤️ for Better Healthcare
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}