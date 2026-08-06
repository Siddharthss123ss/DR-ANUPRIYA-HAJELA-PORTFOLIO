"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Microscope,
  HeartHandshake,
  Ear,
  Brain,
  ArrowUpRight,
  Star,
  Phone,
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";

const expertise = [
  {
    icon: Ear,
    title: "Cochlear Implant",
    desc: "Advanced hearing restoration and rehabilitation procedures.",
    bg: "bg-emerald-50",
  },
  {
    icon: Brain,
    title: "Skull Base Surgery",
    desc: "Modern endoscopic skull base and sinus procedures.",
    bg: "bg-violet-50",
  },
  {
    icon: Microscope,
    title: "Microscopic ENT Surgery",
    desc: "Precision microscopic and endoscopic ENT surgeries.",
    bg: "bg-blue-50",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    desc: "Patient-focused diagnosis and personalized treatment plans.",
    bg: "bg-rose-50",
  },
];

const stats = [
  { value: "12+", label: "Years Experience", icon: Clock },
  { value: "20K+", label: "Happy Patients", icon: Users },
  { value: "500+", label: "Surgeries", icon: ShieldCheck },
  { value: "Gold", label: "Medalist", icon: Award },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-16 sm:py-20 lg:py-28">
      {/* Premium Background - Static */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-200/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Premium Glow */}
            <div className="absolute -inset-6 rounded-3xl blur-2xl bg-gradient-to-br from-teal-500/20 via-cyan-500/20 to-purple-500/20" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/20 border border-white/50">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent z-10" />

              <Image
                src="/Images/Anupriya.jpg"
                alt="Dr. Anupriya Hajela Shah"
                width={700}
                height={700}
                priority
                className="w-full h-[450px] sm:h-[550px] lg:h-[700px] object-cover object-top"
              />

              {/* Premium Badge - Bottom */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/50">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 blur-sm" />
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                        <Award size={24} className="sm:w-7 sm:h-7" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-lg font-bold text-gray-900">Gold Medalist</h4>
                      <p className="text-xs sm:text-sm text-teal-600 font-medium flex items-center gap-1">
                        <Sparkles size={12} className="text-teal-600" />
                        MBBS, MS, DNB
                      </p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 flex items-center justify-center text-teal-600 shadow-inner">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge - Top Right */}
              <motion.div
                initial={{ x: 30, opacity: 0, rotate: 5 }}
                whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-amber-400/30 blur-md" />
                  <div className="relative bg-white rounded-xl px-3 py-2 sm:px-5 sm:py-3 shadow-xl border border-amber-100/50 backdrop-blur-sm">
                    <div className="text-center">
                      <p className="text-lg sm:text-2xl font-black text-amber-600">15+</p>
                      <p className="text-[8px] sm:text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
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
                className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20"
              >
                <div className="flex items-center gap-1 sm:gap-2 bg-black/30 backdrop-blur-md rounded-full px-2 py-1 sm:px-3 sm:py-1.5 border border-white/20">
                  <BadgeCheck size={12} className="text-emerald-400 sm:w-3.5 sm:h-3.5" />
                  <span className="text-[8px] sm:text-xs font-medium text-white">Verified Specialist</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100/50 shadow-sm">
                <Sparkles size={14} className="text-teal-600" />
                <span className="text-[10px] sm:text-xs font-semibold text-teal-700 tracking-wider uppercase">
                  About The Doctor
                </span>
              </div>
            </div>

            {/* Name */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gray-900">Dr. Anupriya</span>
                <br />
                <span className="inline-block bg-gradient-to-r from-teal-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  Hajela Shah
                </span>
              </h2>
              <div className="mt-2 h-1 w-20 sm:w-32 bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-500 rounded-full" />
            </div>

            {/* Title */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-teal-600 to-cyan-600" />
              <div className="flex items-center gap-2">
                <p className="text-sm sm:text-base font-semibold text-teal-700">
                  ENT & Voice Specialist
                </p>
                <Star size={14} className="text-amber-400 fill-amber-400 flex-shrink-0" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
              <p className="text-sm sm:text-base lg:text-lg">
                Dr. Anupriya Hajela Shah is a distinguished{" "}
                <span className="text-teal-700 font-semibold">ENT Specialist</span>{" "}
                in Bhopal, renowned for her expertise in advanced ear, nose, and
                throat treatments.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                With a Gold Medal in MS from KGMC Lucknow and prestigious fellowships
                from Bombay Hospital, Mumbai & Saveetha Medical College, Chennai, she specializes in{" "}
                <span className="text-teal-700 font-semibold">cochlear implants</span>,
                endoscopic and microscopic ear surgery, sinus and skull base surgery.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-xl px-2 py-2 sm:px-3 sm:py-3 text-center border border-gray-100/50 shadow-sm"
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mx-auto mb-0.5 sm:mb-1" />
                  <p className="text-base sm:text-lg font-black text-gray-900">{stat.value}</p>
                  <p className="text-[8px] sm:text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Expertise Chips */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {expertise.map((item, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 ${item.bg} border border-transparent rounded-full text-[10px] sm:text-xs font-medium text-teal-700 shadow-sm`}
                >
                  <item.icon size={12} className="text-teal-600 flex-shrink-0" />
                  <span className="hidden xs:inline">{item.title}</span>
                  <span className="xs:hidden">{item.title.split(' ')[0]}</span>
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
              <motion.a
                href="/about"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden shadow-xl shadow-teal-500/30 text-sm sm:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-700 via-cyan-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center gap-2">
                  Know More
                  <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="tel:+917777802365"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-teal-400 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300 shadow-sm text-sm sm:text-base"
              >
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-teal-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                Call Now
              </motion.a>

              {/* Social proof */}
              <div className="flex items-center gap-1 ml-1 sm:ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="text-amber-400 fill-amber-400 sm:w-[14px] sm:h-[14px]"
                  />
                ))}
                <span className="text-[10px] sm:text-xs font-medium text-gray-500 ml-0.5 sm:ml-1">
                  (4.9/5)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}