"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  MapPin,
  Stethoscope,
  Star,
  Ambulance,
  Building,
  Sparkles,
  ExternalLink,
  Mail,
  MessageCircle,
  Clock as ClockIcon,
  Award,
  HeartPulse,
  ChevronRight,
  Users,
  ThumbsUp,
  BadgeCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

// Custom Social Media Icons
const Twitter = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Facebook = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Linkedin = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 77778 02365",
      sub: "24/7 Emergency: +91 7552773393",
      color: "from-teal-500 to-cyan-500",
      action: "tel:+917777802365",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "dranupriyahajelashahentsurgeon@entcare.com",
      sub: "We reply within 24 hours",
      color: "from-cyan-500 to-blue-500",
      action: "mailto:dranupriyahajelashahentsurgeon@entcare.com",
    },
    {
      icon: Building,
      title: "Address",
      detail: "Geetanjali Complex, near Mata Mandir Square, Kotra Sultanabad, Bhopal - 462003",
      sub: "Get Directions",
      color: "from-blue-500 to-indigo-500",
      action: "https://maps.google.com/?q=Hajela+Hospital+Bhopal",
    },
    {
      icon: ClockIcon,
      title: "OPD Timings",
      detail: "Mon-Sat: 10:00 AM - 7:00 PM",
      sub: "Sunday: Emergency Only",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/19BTmoqF2u/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/anupriyahajela?igsh=MW94YzZ0cDdrMzZyZw==" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <main className="overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30 min-h-screen">
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 z-10">
        <div className="absolute inset-0">
          <img
            src="/Images/hos.jpeg"
            alt="Hajela Hospital Background"
            className="w-full h-full object-cover object-center opacity-35 sm:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06111f]/80 via-[#0a1622]/75 to-[#06111f]/85" />
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-transparent to-cyan-500/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-teal-400/30 shadow-[0_0_40px_rgba(20,184,166,.25)] px-4 py-1.5 backdrop-blur-sm"
            >
              <Sparkles size={12} className="text-teal-300" />
              <span className="text-teal-300 font-bold text-[10px] tracking-[0.2em] uppercase">
                Get in Touch
              </span>
              <Sparkles size={12} className="text-teal-300" />
            </motion.div>

            <h1 className="mt-6 text-[34px] sm:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block text-white drop-shadow-[0_5px_30px_rgba(255,255,255,.3)]">
                Contact
              </span>
              <span className="block mt-1 bg-gradient-to-r from-cyan-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent text-2xl sm:text-4xl lg:text-5xl">
                Hajela Hospital
              </span>
              <div className="mx-auto mt-3 h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 shadow-[0_0_25px_rgba(45,212,191,.7)]" />
            </h1>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base lg:text-lg text-white/90 font-light max-w-2xl mx-auto leading-6 sm:leading-8">
              Experience world-class ENT care with premium facilities,
              <span className="text-teal-300 font-semibold block sm:inline">
                {" "}
                experienced specialists
              </span>
              , and compassionate treatment in Bhopal
            </p>

            {/* ✅ Contact Buttons - Stack on Mobile */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-4 sm:px-0">
              {[
                { icon: Phone, label: "Call Now", href: "tel:+917777802365" },
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/917777802365" },
                { icon: Mail, label: "Email Us", href: "mailto:dranupriyahajelashahentsurgeon@entcare.com" },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  whileHover={isDesktop ? { scale: 1.05, y: -2 } : {}}
                  whileTap={{ scale: 0.95 }}
                  href={item.href}
                  target={item.label === "WhatsApp" ? "_blank" : undefined}
                  rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 hover:bg-white/20 hover:border-teal-400/50 transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  <item.icon size={16} className="text-teal-300" />
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <section className="pb-12 sm:pb-16 lg:pb-20 -mt-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ✅ CONTACT CARDS - Premium rounded-3xl */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {contactCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                viewport={{ once: true }}
                whileHover={isDesktop ? { y: -4 } : {}}
                className="relative group"
              >
                <div className="relative bg-white rounded-3xl p-5 sm:p-6 border border-teal-100/50 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center text-white shadow-lg shadow-teal-500/20 flex-shrink-0`}>
                      <card.icon size={16} className="sm:size-[20px]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[10px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider">
                        {card.title}
                      </h3>
                      {idx === 2 ? (
                        <>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5 break-words">
                            {card.detail}
                          </p>
                          <a
                            href={card.action}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-1 text-teal-600 font-semibold text-[10px] sm:text-xs hover:gap-2 transition-all"
                          >
                            {card.sub} <ChevronRight size={12} />
                          </a>
                        </>
                      ) : idx === 3 ? (
                        <>
                          <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">
                            {card.detail}
                          </p>
                          <p className="text-[10px] sm:text-xs text-gray-500">{card.sub}</p>
                        </>
                      ) : (
                        <>
                          <a
                            href={card.action}
                            className="text-teal-600 font-bold hover:text-teal-700 transition-colors text-xs sm:text-base break-words"
                          >
                            {card.detail}
                          </a>
                          <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{card.sub}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ========== MAP SECTION ========== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 lg:mt-10"
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-teal-100/50">
              <div className="relative h-[260px] sm:h-[320px] lg:h-[420px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.123456789012!2d77.398987!3d23.234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c1234567890ab%3A0x1234567890abcdef!2sHajela%20Hospital!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hajela Hospital Location Map"
                ></iframe>

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xl rounded-lg px-3 py-2 shadow-xl border border-teal-100/50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/25">
                      <MapPin size={12} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-900">Find Us</p>
                      <p className="text-[8px] text-gray-500 hidden sm:block">Hajela Hospital</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 border-t border-teal-100/50">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <div className="hidden sm:flex w-10 h-10 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 items-center justify-center shadow-lg shadow-teal-500/25 flex-shrink-0">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-gray-900">
                      📍 Hajela Hospital, Bhopal
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                      Geetanjali Complex, near Mata Mandir Square, Kotra Sultanabad
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Hajela+Hospital+Bhopal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold shadow-lg shadow-teal-500/30 hover:shadow-xl transition-all flex items-center gap-1.5 w-full sm:w-auto justify-center hover:scale-105"
                  >
                    Open Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========== SOCIAL + EMERGENCY ========== */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10">
            
            {/* SOCIAL LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-teal-100/50 shadow-md"
            >
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BadgeCheck size={14} className="text-teal-500" />
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={isDesktop ? { scale: 1.1, y: -2 } : {}}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 text-gray-600 hover:text-white border border-gray-100 hover:border-transparent transition-all duration-300 shadow-sm"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* EMERGENCY CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 rounded-3xl p-5 sm:p-6 text-center text-white shadow-xl shadow-red-500/30"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Ambulance size={20} className="sm:size-[24px]" />
                  </div>
                  <h3 className="text-base sm:text-xl font-black">24/7 Emergency</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-500" />
                  </div>
                </div>

                <p className="text-red-100/90 text-[10px] sm:text-sm mt-1">
                  Call our emergency helpline immediately
                </p>

                <a
                  href="tel:+917552773393"
                  className="inline-flex items-center gap-2 mt-3 bg-white text-red-700 px-5 sm:px-8 py-2 sm:py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all text-xs sm:text-sm hover:scale-105"
                >
                  <Phone size={14} className="sm:size-[16px]" />
                  Emergency: +91 9575052525
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}