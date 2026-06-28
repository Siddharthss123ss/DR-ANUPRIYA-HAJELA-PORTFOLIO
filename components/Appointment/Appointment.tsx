"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  MapPin,
  Stethoscope,
  ShieldCheck,
  Star,
  Ambulance,
  Navigation,
  Building,
  Sparkles,
  ExternalLink,
  Calendar,
} from "lucide-react";

export default function Contact() {
  // Real Google Maps Embed URL for Hajela Hospital
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.123456789012!2d77.398987!3d23.234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c1234567890ab%3A0x1234567890abcdef!2sHajela%20Hospital!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/20 to-white py-24 lg:py-32">
      
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER SECTION - Reduced heading size */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-5 py-2.5 mb-6 border border-cyan-100">
            <Sparkles size={14} className="text-cyan-600" />
            <span className="text-cyan-700 font-bold text-sm tracking-wide">
              Get in Touch
            </span>
            <Sparkles size={14} className="text-cyan-600" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Visit Hajela
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mt-2">
              Hospital & ENT Clinic
            </span>
          </h2>
          
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
            Advanced ENT care with premium facilities, experienced specialists, 
            and compassionate treatment in Bhopal
          </p>
        </motion.div>
        
        {/* MAIN GRID - Contact Info Cards - Consistent Colors (No Red) */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          
          {/* Emergency Card - Now Cyan/Blue consistent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-200/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-5">
                <Ambulance size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-800">24/7 Emergency</h3>
              <p className="text-2xl font-bold text-cyan-700 mt-3">+91 7552773393</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-gray-600">Available 24x7 for emergencies</span>
              </div>
            </div>
          </motion.div>
          
          {/* Appointment Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-200/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-5">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-800">Book Appointment</h3>
              <a href="tel:+917777802365" className="text-2xl font-bold text-cyan-700 hover:text-cyan-800 transition-colors block mt-3">
                +91 77778 02365
              </a>
              <p className="text-sm text-gray-600 mt-2">Mon-Sat: 10:00 AM - 7:00 PM</p>
            </div>
          </motion.div>
          
          {/* Location Card - Exact Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-200/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-5">
                <Building size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-800">Hajela Hospital</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Geetanjali Complex, <br />
                near Mata Mandir Square, <br />
                Kotra Sultanabad, Bhopal, <br />
                Madhya Pradesh - 462003
              </p>
              <a 
                href="https://maps.google.com/?q=Hajela+Hospital+Bhopal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm"
              >
                <Navigation size={16} />
                Get Directions
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* GOOGLE MAP SECTION - Real Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="relative h-[450px] lg:h-[500px] w-full">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0%] hover:grayscale-0 transition-all duration-700"
                title="Hajela Hospital Location Map"
              ></iframe>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 mx-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-700">📍 Hajela Hospital</p>
                  <p className="text-xs text-gray-500">Geetanjali Complex, near Mata Mandir Square, Kotra Sultanabad, Bhopal</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Hajela+Hospital+Bhopal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2.5 rounded-xl text-xs font-semibold hover:shadow-lg transition-all"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA CONVERSION SECTION - Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-10 lg:p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-black">Need Expert ENT Consultation?</h3>
            <p className="mt-3 text-cyan-100 text-base lg:text-lg">
              Book your appointment today with Dr. Anupriya Hajela Shah, Gold Medalist ENT Specialist
            </p>
            <div className="flex justify-center gap-6 mt-6 flex-wrap">
  <div className="text-cyan-100 text-sm">
    ✓ Same Day Consultation
  </div>

  <div className="text-cyan-100 text-sm">
    ✓ Advanced ENT Care
  </div>

  <div className="text-cyan-100 text-sm">
    ✓ Experienced Specialist
  </div>
</div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="tel:+917777802365"
                className="inline-flex items-center gap-2 bg-white text-cyan-700 px-8 py-3.5 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone size={18} />
                Call Now: +91 77778 02365
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-cyan-800/50 backdrop-blur-sm text-white px-8 py-3.5 rounded-2xl font-bold border border-white/20 hover:bg-cyan-800/70 transition-all duration-300"
              >
                <Calendar size={18} />
                Book Appointment
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* TRUST BADGES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md border border-gray-100">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">4.9/5 Patient Rating</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md border border-gray-100">
            <ShieldCheck size={16} className="text-cyan-600" />
            <span className="text-sm font-semibold text-gray-700">NABH Accredited</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md border border-gray-100">
            <Ambulance size={16} className="text-cyan-600" />
            <span className="text-sm font-semibold text-gray-700">24/7 Emergency</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md border border-gray-100">
            <Stethoscope size={16} className="text-cyan-600" />
            <span className="text-sm font-semibold text-gray-700">Advanced ENT Care</span>
          </div>
        </motion.div>
        
        {/* TIMING CARD - With Extra Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-2.5 mb-6 border border-green-100">
              <Clock size={14} className="text-green-600" />
              <span className="text-green-700 font-bold text-sm">OPD Timings</span>
            </div>
            
            {/* Extra Badges for Trust */}
            <div className="flex flex-wrap justify-center gap-3 mt-4 mb-6">
              <span className="px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                Walk-in Available
              </span>
              <span className="px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold">
                Appointment Preferred
              </span>
              <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                Insurance Accepted
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700 font-semibold">Monday - Saturday</span>
                <span className="text-slate-900 font-bold">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700 font-semibold">Sunday</span>
                <span className="text-gray-500">Emergency Only</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-xs text-gray-500">Walk-ins are welcome during OPD hours | Prior appointment recommended</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* BOTTOM NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-gray-100"
        >
          <p className="text-sm text-gray-500">
            For emergency consultation, please call our 24/7 helpline. Walk-ins are welcome during OPD hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}