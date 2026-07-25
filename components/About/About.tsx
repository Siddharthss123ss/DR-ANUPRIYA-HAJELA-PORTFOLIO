"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Award,
  GraduationCap,
  Microscope,
  Stethoscope,
  HeartHandshake,
  Ear,
  Brain,
  ArrowUpRight,
  Star,
  Calendar,
  MapPin,
  Phone,
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  ChevronRight,
  BadgeCheck,
  HeartPulse,
} from "lucide-react";

const expertise = [
  {
    icon: Ear,
    title: "Cochlear Implant",
    desc: "Advanced hearing restoration and rehabilitation procedures.",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Brain,
    title: "Skull Base Surgery",
    desc: "Modern endoscopic skull base and sinus procedures.",
    color: "from-violet-400 to-purple-500",
    bg: "bg-violet-50",
  },
  {
    icon: Microscope,
    title: "Microscopic ENT Surgery",
    desc: "Precision microscopic and endoscopic ENT surgeries.",
    color: "from-blue-400 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    desc: "Patient-focused diagnosis and personalized treatment plans.",
    color: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
  },
];

const stats = [
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "10K+", label: "Happy Patients", icon: Users },
  { value: "500+", label: "Surgeries", icon: ShieldCheck },
  { value: "Gold", label: "Medalist", icon: Award },
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number; duration: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Initialize particles on client side only
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20,
    }));
    setParticles(newParticles);
  }, []);

  // Mouse tracking for 3D effect on image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-24 lg:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-200/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Floating particles */}
        {particles.length > 0 && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: `radial-gradient(circle, ${['#0d9488', '#06b6d4', '#8b5cf6', '#6366f1'][i % 4]}, transparent)`,
            }}
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              y: [particle.y, particle.y - 150, particle.y + 150],
              x: [particle.x, particle.x + 80, particle.x - 80],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* IMAGE SIDE - Premium 3D Card */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative"
          >
            {/* Glow behind image */}
            <motion.div
              className="absolute -inset-6 rounded-3xl blur-2xl"
              animate={{
                background: [
                  "radial-gradient(circle at 30% 30%, rgba(13,148,136,0.3), rgba(6,182,212,0.3), transparent 70%)",
                  "radial-gradient(circle at 70% 70%, rgba(139,92,246,0.3), rgba(13,148,136,0.3), transparent 70%)",
                  "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.3), rgba(99,102,241,0.3), transparent 70%)",
                  "radial-gradient(circle at 30% 30%, rgba(13,148,136,0.3), rgba(6,182,212,0.3), transparent 70%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/20 border border-white/50">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 z-10"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <img
                src="/Images/Anupriya.jpg"
                alt="Dr. Anupriya Hajela Shah"
                className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover object-top"
              />

              {/* Premium Floating Badge - Bottom */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                className="absolute bottom-6 left-6 right-6 z-20"
              >
                <motion.div
                  className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/50 hover:shadow-teal-500/30 transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 rounded-xl blur-sm"
                        animate={{
                          background: [
                            "linear-gradient(135deg, #0d9488, #06b6d4)",
                            "linear-gradient(135deg, #8b5cf6, #0d9488)",
                            "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                            "linear-gradient(135deg, #0d9488, #06b6d4)",
                          ],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                        <Award size={28} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Gold Medalist</h4>
                      <p className="text-sm text-teal-600 font-medium flex items-center gap-1">
                        <Sparkles size={12} className="animate-pulse" />
                        MBBS, MS, DNB
                      </p>
                    </div>
                    <motion.div
                      className="ml-auto"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 flex items-center justify-center text-teal-600 shadow-inner">
                        <ChevronRight size={20} />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Experience Badge - Top Right */}
              <motion.div
                initial={{ x: 30, opacity: 0, rotate: 5 }}
                whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                className="absolute -top-3 -right-3 z-20"
                whileHover={{ scale: 1.08, rotate: -2 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      background: [
                        "radial-gradient(circle at center, rgba(251,191,36,0.4), transparent 70%)",
                        "radial-gradient(circle at center, rgba(251,146,60,0.4), transparent 70%)",
                        "radial-gradient(circle at center, rgba(251,191,36,0.4), transparent 70%)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="relative bg-white rounded-xl px-5 py-3 shadow-xl border border-amber-100/50 backdrop-blur-sm">
                    <div className="text-center">
                      <motion.p
                        className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                      >
                        15+
                      </motion.p>
                      <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                        Years Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Verified Badge - Top Left */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-4 left-4 z-20"
              >
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/20">
                  <BadgeCheck size={14} className="text-emerald-400" />
                  <span className="text-xs font-medium text-white">Verified Specialist</span>
                </div>
              </motion.div>
            </div>

            {/* Floating decorative ring */}
            <motion.div
              className="absolute -z-10 -inset-8 rounded-full border-2 border-teal-200/30"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* CONTENT SIDE - Premium Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Label with animated underline */}
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100/50 shadow-sm">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles size={14} className="text-teal-600" />
                </motion.div>
                <span className="text-xs font-semibold text-teal-700 tracking-wider uppercase">
                  About The Doctor
                </span>
              </div>
            </div>

            {/* Name - Premium Box Style with Animated Gradient */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gray-900">Dr. Anupriya</span>
                <br />
                <motion.span
                  className="inline-block bg-gradient-to-r from-teal-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent relative"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Hajela Shah
                </motion.span>
              </h2>

              {/* Premium Underline Box - Animated */}
              <motion.div
                className="mt-2 h-1 w-32 bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-500 rounded-full"
                animate={{
                  width: ["8rem", "12rem", "8rem"],
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
            </div>

            {/* Title Line with animated dash */}
            <div className="flex items-center gap-4">
              <motion.div
                className="h-0.5 bg-gradient-to-r from-teal-600 to-cyan-600"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 1 }}
              />
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold text-teal-700">
                  ENT & Voice Specialist
                </p>
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-base sm:text-lg">
                Dr. Anupriya Hajela Shah is a distinguished{" "}
                <span className="text-teal-700 font-semibold relative inline-block group cursor-default">
                  ENT Specialist
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>{" "}
                in Bhopal, renowned for her expertise in advanced ear, nose, and
                throat treatments.
              </p>
              <p className="text-base sm:text-lg">
                With a Gold Medal in MS from KGMC Lucknow and prestigious fellowships
                from Bombay Hospital, Mumbai & Saveetha Medical College,Chennai, she specializes in{" "}
                <span className="text-teal-700 font-semibold relative inline-block group cursor-default">
                  cochlear implants,
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
                Endoscopic and Microscopic ear surgery, Endoscopic Sinus and skull base surgery, voice and phonosurgery.
              </p>
            </div>

            {/* Stats - Premium Grid */}
            <div className="grid grid-cols-4 gap-3 pt-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, type: "spring" }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="relative group"
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(13,148,136,0.1), rgba(6,182,212,0.1))",
                        "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(13,148,136,0.1))",
                        "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(99,102,241,0.1))",
                        "linear-gradient(135deg, rgba(13,148,136,0.1), rgba(6,182,212,0.1))",
                      ],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-xl px-3 py-3 text-center border border-gray-100/50 group-hover:border-teal-200 transition-colors duration-300">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                    </motion.div>
                    <p className="text-lg font-black text-gray-900">{stat.value}</p>
                    <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expertise Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {expertise.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, type: "spring" }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -3,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${item.bg} border border-transparent hover:border-teal-200 rounded-full text-xs font-medium text-teal-700 cursor-default transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden`}
                >
                  <item.icon size={12} className={`text-teal-600`} />
                  {item.title}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <motion.a
                href="/about"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-shadow duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-700 via-cyan-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center gap-2">
                  Know More
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="tel:+917777802365"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-teal-400 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Phone size={18} className="text-teal-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                Call Now
              </motion.a>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-1 ml-2"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.3, rotate: 10 }}
                  >
                    <Star
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  </motion.div>
                ))}
                <motion.span
                  className="text-xs font-medium text-gray-500 ml-1"
                  whileHover={{ scale: 1.05 }}
                >
                  (4.9/5)
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      
    </section>
  );
  
  
}
