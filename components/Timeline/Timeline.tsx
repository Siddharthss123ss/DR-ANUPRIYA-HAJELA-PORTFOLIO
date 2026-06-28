"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Microscope,
  Award,
  Stethoscope,
  ShieldCheck,
  Calendar,
  Sparkles,
} from "lucide-react";

const timelineData = [
  {
    year: "2013",
    title: "MBBS Completion",
    desc: "Completed MBBS with strong academic excellence and advanced medical foundation from KGMC Lucknow.",
    icon: GraduationCap,
    color: "from-blue-600 to-cyan-500",
  },
  {
    year: "2016",
    title: "MS ENT - Gold Medalist",
    desc: "Completed MS in ENT with Gold Medal distinction and advanced surgical training.",
    icon: Award,
    color: "from-cyan-500 to-teal-500",
  },
  {
    year: "2018",
    title: "DNB ENT",
    desc: "Achieved DNB specialization with expertise in advanced ENT diagnosis and care.",
    icon: ShieldCheck,
    color: "from-indigo-600 to-blue-500",
  },
  {
    year: "2019",
    title: "Endoscopic Fellowship",
    desc: "Fellowship in Endoscopic Sinus & Skull Base Surgery from Bombay Hospital.",
    icon: Microscope,
    color: "from-cyan-600 to-blue-600",
  },
  {
    year: "2020",
    title: "Allergy & Immunology",
    desc: "Specialized Fellowship in Allergy and Clinical Immunology from Chennai.",
    icon: Stethoscope,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2021",
    title: "Laryngology Fellowship",
    desc: "Advanced fellowship training in Laryngology and voice disorder treatments from Mumbai.",
    icon: Microscope,
    color: "from-cyan-600 to-indigo-600",
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-16 lg:py-24">
      
      {/* Subtle Background Pattern - Fixed without SVG string */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP SECTION - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 mb-5">
            <Sparkles size={14} className="text-cyan-600" />
            <span className="text-cyan-700 font-bold text-xs tracking-wide">
              PROFESSIONAL JOURNEY
            </span>
            <Sparkles size={14} className="text-cyan-600" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-slate-900">
            Journey of
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mt-1">
              Medical Excellence
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm lg:text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Advanced ENT education, fellowships, surgical expertise, and specialized training
            dedicated to premium patient-focused healthcare.
          </p>
        </motion.div>

        {/* COMPACT TIMELINE - Vertical Design */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 rounded-full"></div>

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative flex gap-5 group"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Calendar size={16} className="text-white" />
                  </div>
                  <div className="absolute inset-0 w-10 h-10 rounded-full bg-cyan-500/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex-1 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-cyan-100"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                        <item.icon size={18} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-black text-slate-800 mb-2 mt-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-3 w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Continuing Medical Excellence Journey
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}