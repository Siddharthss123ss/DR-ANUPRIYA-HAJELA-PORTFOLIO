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
  Building,
  Sparkles,
  ExternalLink,
  Calendar,
  Mail,
  MessageCircle,
  Clock as ClockIcon,
  Award,
  HeartPulse,
  ChevronRight,
  Activity,
  Users,
  ThumbsUp,
  Zap,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Custom Social Media Icons
const Twitter = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Facebook = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Linkedin = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface TrustBadge {
  icon: any;
  label: string;
  sub: string;
  color: string;
}

// Fixed seed-based particle generation to avoid hydration mismatch
const generateParticles = () => {
  const particles = [];
  const seed = 12345;
  let currentSeed = seed;
  
  const pseudoRandom = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };

  for (let i = 0; i < 20; i++) {
    particles.push({
      id: i,
      x: pseudoRandom() * 100,
      y: pseudoRandom() * 100,
      duration: 5 + pseudoRandom() * 10,
      delay: pseudoRandom() * 5,
      size: 2 + pseudoRandom() * 4,
    });
  }
  return particles;
};

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingParticles = generateParticles();

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.123456789012!2d77.398987!3d23.234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c1234567890ab%3A0x1234567890abcdef!2sHajela%20Hospital!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 77778 02365",
      sub: "24/7 Emergency: +91 7552773393",
      color: "from-teal-500 to-cyan-500",
      action: "tel:+917777802365",
      gradient: "hover:shadow-teal-500/30",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "dranupriyahajelashahentsurgeon@entcare.com",
      sub: "We reply within 24 hours",
      color: "from-cyan-500 to-blue-500",
      action: "mailto:dr.anupriya@entcare.com",
      gradient: "hover:shadow-cyan-500/30",
    },
    {
      icon: Building,
      title: "Address",
      detail: "Geetanjali Complex, near Mata Mandir Square, Kotra Sultanabad, Bhopal - 462003",
      sub: "Get Directions",
      color: "from-blue-500 to-indigo-500",
      action: "https://maps.google.com/?q=Hajela+Hospital+Bhopal",
      gradient: "hover:shadow-blue-500/30",
    },
    {
      icon: ClockIcon,
      title: "OPD Timings",
      detail: "Mon-Sat: 10:00 AM - 7:00 PM",
      sub: "Sunday: Emergency Only",
      color: "from-indigo-500 to-purple-500",
      gradient: "hover:shadow-indigo-500/30",
    },
  ];

  const trustBadges: TrustBadge[] = [
    {
      icon: Star,
      label: "4.9/5 Rating",
      sub: "Patient Satisfaction",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: Award,
      label: "Gold Medalist",
      sub: "MS ENT Topper",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: Ambulance,
      label: "24/7 Emergency",
      sub: "Round the Clock",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: HeartPulse,
      label: "10K+ Patients",
      sub: "Happy & Healthy",
      color: "from-rose-500 to-pink-500",
    },
  ];

  // ✅ UPDATED SOCIAL LINKS - Facebook & Instagram added
  const socialLinks = [
    { 
      icon: Facebook, 
      label: "Facebook", 
      href: "https://www.facebook.com/share/19BTmoqF2u/", 
      color: "hover:bg-blue-600" 
    },
    { 
      icon: Instagram, 
      label: "Instagram", 
      href: "https://www.instagram.com/anupriyahajela?igsh=MW94YzZ0cDdrMzZyZw==", 
      color: "hover:bg-pink-600" 
    },
    { 
      icon: Twitter, 
      label: "Twitter", 
      href: "#", 
      color: "hover:bg-sky-500" 
    },
    { 
      icon: Youtube, 
      label: "YouTube", 
      href: "#", 
      color: "hover:bg-red-600" 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "#", 
      color: "hover:bg-blue-700" 
    },
  ];

  return (
    <main className="overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative">
      {/* Premium Animated Background Particles - Only render on client */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {floatingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-teal-400/20 to-cyan-400/20"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* ✅ SUPER PREMIUM HERO WITH HOSPITAL BACKGROUND - Desktop + Mobile */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 z-10">
        {/* ✅ Background with Premium Overlay - Ab mobile pe bhi dikhega */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            src="/Images/hos.jpeg"
            alt="Hajela Hospital Background"
            className="w-full h-full object-cover object-center opacity-25 sm:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06111f]/90 via-[#0a1622]/85 to-[#06111f]/90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-transparent to-cyan-500/20" />

          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-teal-400/30 shadow-[0_0_40px_rgba(20,184,166,.25)] px-6 py-2 backdrop-blur-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(20,184,166,.4)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-teal-300 sm:size-[18px]" />
              </motion.div>
              <span className="text-teal-300 font-bold text-[10px] sm:text-sm tracking-[0.2em] uppercase">
                Get in Touch
              </span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-teal-300 sm:size-[18px]" />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight"
            >
              <span className="block text-white drop-shadow-[0_5px_30px_rgba(255,255,255,.3)]">
                Contact
              </span>
              <motion.span
                className="block mt-2 bg-gradient-to-r from-cyan-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Hajela Hospital
              </motion.span>
              <motion.div
                className="mx-auto mt-6 h-1.5 w-40 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 shadow-[0_0_25px_rgba(45,212,191,.7)]"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-sm sm:text-lg lg:text-xl text-white/90 font-light max-w-3xl mx-auto leading-9"
            >
              Experience world-class ENT care with premium facilities,
              <span className="text-teal-300 font-semibold">
                {" "}
                experienced specialists
              </span>
              , and compassionate treatment in Bhopal
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              {[
                { icon: Phone, label: "+91 77778 02365", href: "tel:+917777802365" },
                { icon: Mail, label: "Email Us", href: "mailto:dranupriyahajelashahentsurgeon@entcare.com" },
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/917777802365" },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.href}
                  target={item.label === "WhatsApp" ? "_blank" : undefined}
                  rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 hover:bg-white/15 hover:border-teal-400/50 transition-all duration-300 shadow-lg hover:shadow-teal-500/20"
                >
                  <item.icon
                    size={16}
                    className="text-teal-300 group-hover:text-teal-200 transition-colors sm:size-[18px]"
                  />
                  <span className="text-[11px] sm:text-sm font-semibold text-white group-hover:text-teal-100 transition-colors">
                    {item.label}
                  </span>
                  <ChevronRight
                    size={14}
                    className="text-teal-400/50 group-hover:text-teal-300 group-hover:translate-x-1 transition-all"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-16 sm:pb-20 lg:pb-28 -mt-4 sm:-mt-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10">
            {/* LEFT - Contact Cards with Premium Animations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-5 sm:space-y-6"
            >
              {contactCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="relative group"
                >
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-teal-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center text-white shadow-lg shadow-teal-500/20 flex-shrink-0 relative`}
                      >
                        <card.icon size={20} className="sm:size-[22px]" />
                        <motion.div
                          className="absolute -inset-1 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 blur-md opacity-0 -z-10 group-hover:opacity-50 transition-opacity duration-500"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
                          {card.title}
                        </h3>
                        {idx === 2 ? (
                          <p className="text-[11px] sm:text-sm text-gray-600 leading-relaxed mt-0.5 break-words">
                            {card.detail}
                          </p>
                        ) : idx === 3 ? (
                          <div className="mt-1">
                            <p className="text-[11px] sm:text-sm font-semibold text-gray-800">
                              {card.detail}
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-500">
                              {card.sub}
                            </p>
                          </div>
                        ) : (
                          <a
                            href={card.action}
                            className="text-teal-600 font-bold hover:text-teal-700 transition-colors text-sm sm:text-base break-words"
                          >
                            {card.detail}
                          </a>
                        )}
                        {idx === 2 && (
                          <motion.a
                            href={card.action}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-1.5 text-teal-600 font-semibold text-[10px] sm:text-xs hover:gap-2 transition-all group-hover:text-teal-700"
                            whileHover={{ x: 5 }}
                          >
                            {card.sub}{" "}
                            <ChevronRight size={14} className="sm:size-[16px]" />
                          </motion.a>
                        )}
                        {(idx === 0 || idx === 1) && (
                          <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                            {card.sub}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT - Premium Info Panel with Glowing Effects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative group">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div
                  className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-teal-100/50 shadow-2xl hover:shadow-3xl shadow-teal-500/5 transition-all duration-500"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    transform: mounted && isHovered
                      ? `perspective(1000px) rotateY(${(mousePosition.x / window.innerWidth - 0.5) * 2}deg) rotateX(${(mousePosition.y / window.innerHeight - 0.5) * -2}deg)`
                      : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 rounded-t-3xl"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  {/* Quick Stats with Premium Animations */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: Stethoscope, label: "ENT Specialists", value: "5+" },
                      { icon: Users, label: "Happy Patients", value: "10K+" },
                      { icon: ThumbsUp, label: "Success Rate", value: "98%" },
                      { icon: Award, label: "Years Experience", value: "15+" },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="bg-gradient-to-br from-gray-50 to-teal-50/50 rounded-xl p-4 text-center border border-teal-100/30 hover:border-teal-300 transition-all duration-300 cursor-default"
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.5,
                          }}
                        >
                          <stat.icon className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                        </motion.div>
                        <motion.div
                          className="text-xl font-black text-gray-900"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.2 + idx * 0.1 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-[10px] font-medium text-gray-500">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Social Links with Premium Hover Effects - ✅ UPDATED */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <BadgeCheck size={14} className="text-teal-500" />
                      Connect With Us
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {socialLinks.map((social, idx) => (
                        <motion.a
                          key={idx}
                          whileHover={{ scale: 1.15, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2.5 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 text-gray-600 hover:text-white border border-gray-100 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-teal-500/25 relative overflow-hidden group`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <social.icon size={18} className="relative z-10" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Trust Badges with Glowing Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-6 border-t-2 border-gray-100"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {trustBadges.map((badge, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="relative group"
                        >
                          <motion.div
                            className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <div className="relative bg-white rounded-xl p-3 border border-teal-100/50 shadow-sm hover:shadow-xl transition-all duration-300 text-center overflow-hidden">
                            <motion.div
                              className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${badge.color}`}
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            <div className="flex items-center justify-center gap-1.5">
                              <motion.div
                                animate={{
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: idx * 0.3,
                                }}
                              >
                                <badge.icon size={14} className="text-teal-600" />
                              </motion.div>
                              <span className="text-xs sm:text-sm font-black text-gray-800">
                                {badge.label}
                              </span>
                            </div>
                            <p className="text-[9px] sm:text-[10px] font-medium text-gray-500 mt-0.5">
                              {badge.sub}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Premium Decorative Element */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* MAP SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-teal-100/50 transition-all duration-500">
                <div className="relative h-[250px] sm:h-[350px] lg:h-[450px] w-full">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hover:scale-[1.02] transition-all duration-1000"
                    title="Hajela Hospital Location Map"
                  ></iframe>

                  <motion.div
                    className="absolute top-4 left-4 bg-white/95 backdrop-blur-xl rounded-xl px-4 py-3 shadow-xl border border-teal-100/50"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2.5">
                      <motion.div
                        className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/25"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <MapPin size={16} />
                      </motion.div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">Find Us Here</p>
                        <p className="text-[10px] text-gray-500">Hajela Hospital</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="bg-white p-4 sm:p-5 border-t-2 border-teal-100/50">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center shadow-xl shadow-teal-500/25 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <MapPin size={22} className="text-white sm:size-[24px]" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-bold text-gray-900">
                        📍 Hajela Hospital
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                        Geetanjali Complex, near Mata Mandir Square, Kotra Sultanabad, Bhopal
                      </p>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://maps.google.com/?q=Hajela+Hospital+Bhopal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                      Open Maps <ExternalLink size={14} className="sm:size-[16px]" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EMERGENCY CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-14 text-center text-white shadow-2xl shadow-red-500/30"
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />

                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      top: `${20 + i * 12}%`,
                      left: `${10 + i * 15}%`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div
                      className="p-3 sm:p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-xl"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Ambulance size={28} className="sm:size-[36px]" />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">24/7 Emergency</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                    />
                    <span className="text-sm font-semibold text-green-200">Always Available</span>
                  </div>
                </div>

                <p className="text-red-100/90 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                  For medical emergencies, please call our dedicated emergency helpline
                  immediately.
                  <span className="block text-red-200/80 text-xs sm:text-sm mt-1">
                    We're here for you 24 hours a day, 7 days a week
                  </span>
                </p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+917552773393"
                  className="inline-flex items-center gap-3 mt-6 sm:mt-8 bg-white text-red-700 px-8 sm:px-12 py-3.5 sm:py-4.5 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 text-sm sm:text-base"
                >
                  <Phone size={18} className="sm:size-[20px]" />
                  Emergency: +91 9575052525
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ChevronRight size={18} />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}