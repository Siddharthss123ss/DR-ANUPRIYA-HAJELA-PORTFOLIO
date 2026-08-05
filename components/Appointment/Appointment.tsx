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
  Award,
  HeartPulse,
} from "lucide-react";

export default function Contact() {
  // Real Google Maps Embed URL for Hajela Hospital
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.123456789012!2d77.398987!3d23.234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c1234567890ab%3A0x1234567890abcdef!2sHajela%20Hospital!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
      
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-teal-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-cyan-100/20 rounded-full blur-3xl"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #0d9488 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* ========== HEADER SECTION ========== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-4 sm:px-5 py-2 sm:py-2.5 mb-4 sm:mb-6 border border-teal-100 shadow-sm">
            <Sparkles size={14} className="text-teal-600" />
            <span className="text-teal-700 font-bold text-xs sm:text-sm tracking-wider uppercase">
              Get in Touch
            </span>
            <Sparkles size={14} className="text-teal-600" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Visit Hajela
            <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mt-2">
              Hospital & ENT Clinic
            </span>
          </h2>
          
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto px-4">
            Advanced ENT care with premium facilities, experienced specialists, 
            and compassionate treatment in Bhopal
          </p>
        </motion.div>
        
        {/* ========== CONTACT INFO CARDS ========== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          
          {/* Emergency Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-teal-100 hover:border-teal-400 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-xl shadow-teal-500/25 group-hover:scale-110 group-hover:shadow-teal-500/40 transition-all duration-300 mb-4 sm:mb-5">
              <Ambulance size={26} className="sm:size-[28px]" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-gray-900">24/7 Emergency</h3>
            <p className="text-2xl sm:text-3xl font-bold text-teal-600 mt-3">+91 9575052525</p>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">Available 24x7</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-400">📞 Emergency Helpline</span>
            </div>
          </motion.div>
          
          {/* Appointment Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-teal-100 hover:border-teal-400 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-xl shadow-teal-500/25 group-hover:scale-110 group-hover:shadow-teal-500/40 transition-all duration-300 mb-4 sm:mb-5">
              <Phone size={26} className="sm:size-[28px]" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-gray-900">Book Appointment</h3>
            <a href="tel:+917777802365" className="text-2xl sm:text-3xl font-bold text-teal-600 hover:text-teal-700 transition-colors block mt-3 break-words">
              +91 77778 02365
            </a>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 font-medium">Mon-Sat: 10:00 AM - 7:00 PM</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-400">📅 Book your slot today</span>
            </div>
          </motion.div>
          
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-teal-100 hover:border-teal-400 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 overflow-hidden sm:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-xl shadow-teal-500/25 group-hover:scale-110 group-hover:shadow-teal-500/40 transition-all duration-300 mb-4 sm:mb-5">
              <Building size={26} className="sm:size-[28px]" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-gray-900">Hajela Hospital</h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Geetanjali Complex, <br />
              near Mata Mandir Square, <br />
              Kotra Sultanabad, Bhopal, <br />
              Madhya Pradesh - 462003
            </p>
            <a 
              href="https://maps.google.com/?q=Hajela+Hospital+Bhopal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 sm:mt-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 text-sm group/btn"
            >
              <Navigation size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              Get Directions
              <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
            </a>
          </motion.div>
        </div>
        
        {/* ========== GOOGLE MAP SECTION ========== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-teal-100 hover:border-teal-300 transition-all duration-500">
            <div className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px] xl:h-[520px] w-full">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:scale-[1.02] transition-all duration-700"
                title="Hajela Hospital Location Map"
              ></iframe>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 sm:p-5 border-t-2 border-teal-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center shadow-xl shadow-teal-500/25 flex-shrink-0">
                  <MapPin size={20} className="sm:size-[24px] text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base sm:text-lg font-black text-gray-900">📍 Hajela Hospital</p>
                  <p className="text-xs sm:text-sm text-gray-600">Geetanjali Complex, near Mata Mandir Square, Kotra Sultanabad, Bhopal</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Hajela+Hospital+Bhopal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-bold hover:shadow-xl hover:shadow-teal-500/30 transition-all text-center group/btn"
                >
                  <span className="flex items-center justify-center gap-2">
                    Open Maps
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* ========== CTA CONVERSION SECTION ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="relative bg-gradient-to-r from-teal-600 via-teal-600 to-cyan-600 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 text-center text-white shadow-2xl shadow-teal-500/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 border border-white/20">
                <Award size={16} className="text-yellow-300" />
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wider">Gold Medalist ENT Specialist</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">Need Expert ENT Consultation?</h3>
              <p className="mt-3 sm:mt-4 text-teal-100 text-sm sm:text-base md:text-lg px-2 max-w-2xl mx-auto">
                Book your appointment today with Dr. Anupriya Hajela Shah
              </p>
              
              <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-5 flex-wrap">
                <div className="flex items-center gap-1.5 text-teal-100 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  Same Day Consultation
                </div>
                <div className="flex items-center gap-1.5 text-teal-100 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  Advanced ENT Care
                </div>
                <div className="flex items-center gap-1.5 text-teal-100 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  Experienced Specialist
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <a
                  href="tel:+917777802365"
                  className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base group/btn"
                >
                  <Phone size={18} className="group-hover/btn:scale-110 transition-transform" />
                  Call Now: +91 77778 02365
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-teal-800/40 backdrop-blur-sm text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-2xl font-bold border-2 border-white/30 hover:bg-teal-800/60 hover:border-white/50 transition-all duration-300 text-sm sm:text-base"
                >
                  <Calendar size={18} />
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* ========== TRUST BADGES ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white shadow-lg border-2 border-teal-100 hover:border-teal-400 hover:shadow-teal-500/10 transition-all duration-300">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs sm:text-sm font-bold text-gray-700">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white shadow-lg border-2 border-teal-100 hover:border-teal-400 hover:shadow-teal-500/10 transition-all duration-300">
            <ShieldCheck size={16} className="text-teal-600" />
            <span className="text-xs sm:text-sm font-bold text-gray-700">NABH Accredited</span>
          </div>
          <div className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white shadow-lg border-2 border-teal-100 hover:border-teal-400 hover:shadow-teal-500/10 transition-all duration-300">
            <Ambulance size={16} className="text-teal-600" />
            <span className="text-xs sm:text-sm font-bold text-gray-700">24/7 Emergency</span>
          </div>
          <div className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white shadow-lg border-2 border-teal-100 hover:border-teal-400 hover:shadow-teal-500/10 transition-all duration-300">
            <Stethoscope size={16} className="text-teal-600" />
            <span className="text-xs sm:text-sm font-bold text-gray-700">Advanced ENT</span>
          </div>
        </motion.div>
        
        {/* ========== TIMING CARD ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-teal-100 hover:border-teal-300 transition-all duration-500 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-4 sm:px-5 py-2 sm:py-2.5 mb-5 sm:mb-6 border-2 border-teal-100">
              <Clock size={16} className="text-teal-600" />
              <span className="text-teal-700 font-bold text-sm">OPD Timings</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs sm:text-sm font-semibold border-2 border-teal-200">
                Walk-in Available
              </span>
              <span className="px-3 sm:px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-xs sm:text-sm font-semibold border-2 border-cyan-200">
                Appointment Preferred
              </span>
              <span className="px-3 sm:px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold border-2 border-blue-200">
                Insurance Accepted
              </span>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4 border-b-2 border-gray-100 gap-1 sm:gap-0">
                <span className="text-gray-600 font-semibold text-base sm:text-lg">Monday - Saturday</span>
                <span className="text-gray-900 font-black text-base sm:text-lg">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4 gap-1 sm:gap-0">
                <span className="text-gray-600 font-semibold text-base sm:text-lg">Sunday</span>
                <span className="text-gray-400 font-semibold text-base sm:text-lg">Emergency Only</span>
              </div>
            </div>
            
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t-2 border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-xs sm:text-sm text-gray-500 text-center font-medium">
                  Walk-ins welcome during OPD hours | Prior appointment recommended
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* ========== BOTTOM NOTE ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 lg:mt-16 pt-8 sm:pt-10 border-t-2 border-gray-100"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <HeartPulse size={16} className="text-teal-500" />
            <p className="text-xs sm:text-sm text-gray-500 font-medium px-4">
              For emergency consultation, please call our 24/7 helpline. Walk-ins are welcome during OPD hours.
            </p>
            <HeartPulse size={16} className="text-teal-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}