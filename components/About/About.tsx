"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const expertise = [
  {
    icon: Ear,
    title: "Cochlear Implant",
    desc: "Advanced hearing restoration and rehabilitation procedures.",
  },
  {
    icon: Brain,
    title: "Skull Base Surgery",
    desc: "Modern endoscopic skull base and sinus procedures.",
  },
  {
    icon: Microscope,
    title: "Microscopic ENT Surgery",
    desc: "Precision microscopic and endoscopic ENT surgeries.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    desc: "Patient-focused diagnosis and personalized treatment plans.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* SOFT BACKGROUND */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* MAIN CARD */}
            <div className="relative bg-gradient-to-br from-[#06111f] to-[#0b1727] rounded-[28px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
              {/* IMAGE - Height reduced */}
              <img
                src="/Images/Anupriya.jpg"
                alt="Dr. Anupriya Hajela Shah"
                className="w-full h-[480px] sm:h-[600px] lg:h-[680px] object-cover object-top"
              />
              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06111f] via-transparent to-transparent"></div>

              {/* FLOATING EXPERIENCE - Kept only this one */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[24px] p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-2xl">
                    <Award size={30} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      Gold Medalist
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-cyan-300">
                      MBBS, MS, DNB ENT Specialist
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* BADGE with Star */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
              <Stethoscope size={18} />
              About The Specialist
              <Star size={14} className="text-yellow-500" />
            </div>

            {/* TITLE - Changed to Doctor Name */}
            <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
              Dr. Anupriya
              <span className="block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Hajela Shah
              </span>
            </h2>

            {/* Subtitle */}
            <div className="mt-4 inline-block">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full px-5 py-2">
                <p className="text-sm sm:text-base font-semibold text-cyan-700">
                  ⚕️ Advanced ENT Specialist & Surgeon
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 text-base sm:text-lg lg:text-xl leading-8 lg:leading-9 text-gray-600">
              Dr. Anupriya Hajela Shah is an advanced ENT Specialist
              in Bhopal with expertise in cochlear implants,
              skull base surgery,
              microscopic ear surgery,
              allergy treatment,
              voice disorders,
              and modern ENT procedures.
            </p>

            <p className="mt-5 text-base sm:text-lg lg:text-xl leading-8 lg:leading-9 text-gray-600">
              She holds MBBS,
              MS (Gold Medalist),
              and DNB qualifications with fellowships from Bombay Hospital
              and Chennai in Endoscopic Sinus Surgery,
              Allergy,
              Clinical Immunology,
              and Laryngology.
            </p>

            {/* QUALIFICATIONS */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="bg-[#06111f] rounded-[24px] p-6 text-white hover:scale-[1.02] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <GraduationCap size={26} />
                </div>
                <h3 className="mt-5 text-xl lg:text-2xl font-black">
                  MBBS, MS, DNB
                </h3>
                <p className="mt-3 text-gray-300 leading-7">
                  KGMC Lucknow • Gold Medalist
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-700 to-cyan-500 rounded-[24px] p-6 text-white hover:scale-[1.02] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Microscope size={26} />
                </div>
                <h3 className="mt-5 text-xl lg:text-2xl font-black">
                  Fellowships
                </h3>
                <p className="mt-3 opacity-90 leading-7">
                  Bombay Hospital & Chennai
                </p>
              </div>
            </div>

            {/* EXPERTISE - With hover effects */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-[22px] bg-white border border-gray-100 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm sm:text-base leading-7 text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA BUTTON - Text changed */}
            <div className="mt-12">
              <a
                href="/about"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[#06111f] px-7 sm:px-8 py-4 sm:py-5 text-white font-black shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:bg-blue-700 transition-all duration-300"
              >
                Know More About Dr. Anupriya
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}