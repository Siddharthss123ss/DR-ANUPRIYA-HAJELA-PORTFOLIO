"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Award,
  GraduationCap,
  Microscope,
  ShieldCheck,
  Ear,
  Brain,
  Stethoscope,
  HeartPulse,
  Activity,
  CheckCircle2,
  Star,
  Trophy,
  Briefcase,
  Hospital,
  Mic,
  Microscope as MicroscopeIcon,
  Scan,
  TestTube,
} from "lucide-react";

// ✅ Lazy load Timeline
const Timeline = dynamic(
  () => import("@/components/Timeline/Timeline"),
  {
    ssr: false,
    loading: () => (
      <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto"></div>
            <div className="h-4 w-64 bg-gray-200 rounded mx-auto mt-2"></div>
            <div className="mt-8 space-y-4">
              <div className="h-20 bg-gray-100 rounded-xl"></div>
              <div className="h-20 bg-gray-100 rounded-xl"></div>
              <div className="h-20 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
);

export default function AboutPage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Expertise with unique icons for each
  const expertise = [
    { title: "Cochlear Implant", icon: Ear, color: "from-cyan-500 to-blue-500" },
    { title: "FESS Surgery", icon: Microscope, color: "from-blue-500 to-indigo-500" },
    { title: "Skull Base Surgery", icon: Brain, color: "from-indigo-500 to-purple-500" },
    { title: "Septorhinoplasty", icon: Scan, color: "from-purple-500 to-pink-500" },
    { title: "Vertigo Evaluation", icon: Activity, color: "from-pink-500 to-rose-500" },
    { title: "Voice Disorders", icon: Mic, color: "from-rose-500 to-orange-500" },
    { title: "Allergy Testing", icon: TestTube, color: "from-orange-500 to-amber-500" },
    { title: "Microscopic Ear Surgery", icon: MicroscopeIcon, color: "from-amber-500 to-yellow-500" },
  ];

  // Qualifications with icons
  const qualifications = [
    { name: "MBBS", icon: GraduationCap, color: "from-blue-600 to-cyan-500" },
    { name: "MS (Gold Medalist)", icon: Trophy, color: "from-cyan-500 to-teal-500" },
    { name: "DNB ENT", icon: ShieldCheck, color: "from-indigo-600 to-blue-500" },
    { name: "KGMC Lucknow", icon: Hospital, color: "from-cyan-600 to-blue-600" },
    { name: "Fellowship in Endoscopic sinus and skull base surgery, Bombay Hospital", icon: Briefcase, color: "from-blue-500 to-cyan-500" },
    { name: "Fellowship in Allergy and Clinical immunology, Chennai", icon: Stethoscope, color: "from-cyan-600 to-indigo-600" },
    { name: "Fellowship in Phonosurgery, Bombay Hospital", icon: Stethoscope, color: "from-cyan-600 to-indigo-600" },
  ];

  const facilities = [
    "Pure Tone Audiometry",
    "BERA Hearing Test",
    "Otoacoustic Emission Test",
    "Cochlear Implant Rehabilitation",
    "Diagnostic Nasal Endoscopy",
    "Speech & Voice Therapy",
    "Skin Prick Allergy Testing",
    "Videolaryngoscopy and Narrow Band Imaging",
  ];

  // Hero stats with icons
  const achievements = [
    { value: "10+", label: "Years Experience", icon: Briefcase },
    { value: "10,000+", label: "Happy Patients", icon: HeartPulse },
    { value: "90%", label: "Success Rate", icon: Star },
    { value: "24/7", label: "Emergency Care", icon: Activity },
  ];

  // New Awards Section
  const awards = [
    { title: "Gold Medal in MS ENT", icon: Trophy, color: "from-amber-500 to-yellow-500", desc: "University Topper" },
    { title: "Bombay Hospital Fellowship", icon: Hospital, color: "from-cyan-500 to-blue-500", desc: "Endoscopic Surgery" },
    { title: "Chennai Fellowship", icon: Stethoscope, color: "from-blue-500 to-indigo-500", desc: "Allergy & Immunology" },
    { title: "DNB ENT National Board", icon: ShieldCheck, color: "from-indigo-500 to-purple-500", desc: "National Recognition" },
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO - Premium With Background Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#06111f] to-[#0a1622] pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        
        {/* ✅ BACKGROUND IMAGE - Mobile Optimized */}
        <div className="absolute inset-0">
  <Image
    src="/Images/anu3.jpeg"
    alt="Background"
    fill
    priority
    sizes="100vw"
    className="object-cover object-top md:scale-105 md:blur-[2px] opacity-40"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-[#06111f]/70 via-[#0a1622]/60 to-[#06111f]/70" />
  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />
</div>

        {/* ✅ Animated background elements - Hidden on Mobile */}
        <div className="hidden lg:block absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center">
            
            {/* LEFT - Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2">
                <ShieldCheck size={13} className="text-cyan-300 sm:size-[15px]" />
                <span className="text-cyan-300 font-semibold text-[10px] sm:text-xs tracking-wide">
                  Advanced ENT Specialist • Bhopal
                </span>
              </div>

              <h1 className="mt-3 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight text-white">
                Dr. Anupriya
                <span className="block text-cyan-300 mt-0.5 sm:mt-1">Hajela Shah</span>
              </h1>

              <p className="mt-3 sm:mt-5 max-w-3xl text-xs sm:text-sm lg:text-base leading-relaxed text-gray-300">
                Dr. Anupriya Hajela Shah is an experienced ENT Specialist
                of Bhopal known for advanced ENT surgeries,
                Cochlear implant surgeries,
                Endoscopic sinus and skull base procedures,
                Allergy treatment,
                and compassionate patient-focused care.
              </p>

              {/* ACHIEVEMENTS BADGES */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 sm:mt-6">
                {achievements.map((item, idx) => (
                  <div key={idx} className="rounded-xl bg-white/10 backdrop-blur-2xl border border-white/10 p-2 sm:p-3 text-center">
                    <div className="flex items-center justify-center gap-1 sm:gap-1.5 mb-0.5">
                      <item.icon size={11} className="text-cyan-300 sm:size-[13px]" />
                      <span className="text-sm sm:text-lg lg:text-xl font-black text-white">{item.value}</span>
                    </div>
                    <p className="text-[8px] sm:text-[10px] text-gray-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/10 border border-white/10 backdrop-blur-2xl p-1.5 sm:p-2 shadow-2xl max-w-[280px] sm:max-w-md mx-auto lg:max-w-full">
                <Image
  src="/Images/Anupriya.jpg"
  alt="Dr. Anupriya Hajela Shah"
  width={700}
  height={900}
  priority
  className="w-full h-[240px] sm:h-[350px] lg:h-[420px] xl:h-[480px] object-cover object-top rounded-xl"
/>
                
                {/* ✅ Floating Badge - Slower animation */}
                <motion.div
                  animate={isDesktop ? { y: [0, -6, 0] } : {}}
                  transition={{ duration: 7, repeat: Infinity }}
                  className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-xl bg-black/50 backdrop-blur-2xl border border-white/10 p-2 sm:p-3"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                      <Award size={18} className="sm:size-[22px]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-black text-white">Gold Medalist</h3>
                      <p className="text-[10px] sm:text-xs text-cyan-300">MBBS, MS, DNB ENT Specialist</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-5">
              <GraduationCap size={14} className="text-cyan-600 sm:size-[16px]" />
              <span className="text-cyan-700 font-bold text-[10px] sm:text-xs">Qualifications & Fellowships</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-slate-900">
              Education &
              <span className="block text-cyan-600 mt-1">Medical Excellence</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={isDesktop ? { y: -4 } : {}}
                className="group flex items-center gap-3 sm:gap-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <item.icon size={15} className="sm:size-[18px]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-base font-black text-slate-800 leading-tight">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE - Lazy Loaded */}
      <Timeline />

      {/* EXPERTISE */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm mb-3 sm:mb-5">
              <Microscope size={14} className="text-cyan-600 sm:size-[16px]" />
              <span className="text-cyan-700 font-bold text-[10px] sm:text-xs">Specialized Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-slate-900">
              Advanced ENT
              <span className="block text-cyan-600 mt-1">Procedures & Treatments</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={isDesktop ? { y: -5 } : {}}
                className="group rounded-xl bg-white border border-gray-100 p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={14} className="sm:size-[16px]" />
                </div>
                <h3 className="mt-2 sm:mt-3 text-[11px] sm:text-sm font-black text-slate-800 leading-tight">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-5">
              <Activity size={14} className="text-cyan-600 sm:size-[16px]" />
              <span className="text-cyan-700 font-bold text-[10px] sm:text-xs">Scope Of Facilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-slate-900">
              Modern ENT
              <span className="block text-cyan-600 mt-1">Diagnostic Facilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
            {facilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={isDesktop ? { y: -4 } : {}}
                className="flex items-center gap-3 sm:gap-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <CheckCircle2 size={14} className="sm:size-[16px]" />
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-slate-700">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & ACHIEVEMENTS */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm mb-3 sm:mb-5">
              <Trophy size={14} className="text-amber-600 sm:size-[16px]" />
              <span className="text-amber-700 font-bold text-[10px] sm:text-xs">Recognitions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-slate-900">
              Awards &
              <span className="block text-amber-600 mt-1">Professional Achievements</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
              Recognized for excellence in ENT surgery and patient care
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-8 sm:mt-10">
            {awards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={isDesktop ? { y: -6, scale: 1.02 } : {}}
                className="group relative bg-white rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-3`}>
                  <item.icon size={20} className="sm:size-[24px]" />
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-black text-slate-800 mb-0.5">{item.title}</h3>
                <p className="text-[10px] sm:text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}