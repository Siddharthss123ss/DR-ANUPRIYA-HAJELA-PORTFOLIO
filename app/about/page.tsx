"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline/Timeline";

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

export default function AboutPage() {
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
    { name: "Bombay Hospital Fellowship", icon: Briefcase, color: "from-blue-500 to-cyan-500" },
    { name: "Chennai Fellowship", icon: Stethoscope, color: "from-cyan-600 to-indigo-600" },
  ];

  const facilities = [
    "Pure Tone Audiometry",
    "BERA Hearing Test",
    "Otoacoustic Emission Test",
    "Cochlear Implant Rehabilitation",
    "Diagnostic Nasal Endoscopy",
    "Speech & Voice Therapy",
    "Skin Prick Allergy Testing",
    "Videolaryngoscopy",
  ];

  // Hero stats with icons
  const achievements = [
    { value: "15+", label: "Years Experience", icon: Briefcase },
    { value: "5000+", label: "Happy Patients", icon: HeartPulse },
    { value: "98%", label: "Success Rate", icon: Star },
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
      {/* HERO - Premium */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#06111f] to-[#0a1622] pt-36 pb-20 lg:pb-24">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2.5">
                <ShieldCheck size={16} className="text-cyan-300" />
                <span className="text-cyan-300 font-semibold text-sm tracking-wide">
                  Advanced ENT Specialist • Bhopal
                </span>
              </div>

              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
                Dr. Anupriya
                <span className="block text-cyan-300 mt-2">Hajela Shah</span>
              </h1>

              <p className="mt-6 max-w-3xl text-base lg:text-lg leading-relaxed text-gray-300">
                Dr. Anupriya Hajela Shah is an experienced ENT Specialist
                in Bhopal known for advanced ENT surgery,
                cochlear implant rehabilitation,
                skull base procedures,
                allergy treatment,
                and compassionate patient-focused care.
              </p>

              {/* ACHIEVEMENTS BADGES WITH ICONS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                {achievements.map((item, idx) => (
                  <div key={idx} className="rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/10 p-3 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <item.icon size={14} className="text-cyan-300" />
                      <span className="text-xl font-black text-white">{item.value}</span>
                    </div>
                    <p className="text-xs text-gray-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 border border-white/10 backdrop-blur-2xl p-3 shadow-2xl">
                <img
                  src="/Images/Anupriya.jpg"
                  alt="Dr. Anupriya Hajela Shah"
                  className="w-full h-[500px] lg:h-[650px] object-cover rounded-2xl"
                />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/10 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                      <Award size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">Gold Medalist</h3>
                      <p className="text-sm text-cyan-300">MBBS, MS, DNB ENT Specialist</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-5 py-2.5 mb-6">
              <GraduationCap size={16} className="text-cyan-600" />
              <span className="text-cyan-700 font-bold text-sm">Qualifications & Fellowships</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight text-slate-900">
              Education &
              <span className="block text-cyan-600 mt-1">Medical Excellence</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-800">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE - White Version */}
      <Timeline />

      {/* EXPERTISE - With Unique Icons */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-sm mb-6">
              <Microscope size={16} className="text-cyan-600" />
              <span className="text-cyan-700 font-bold text-sm">Specialized Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight text-slate-900">
              Advanced ENT
              <span className="block text-cyan-600 mt-1">Procedures & Treatments</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={18} />
                </div>
                <h3 className="mt-4 text-sm font-black text-slate-800 leading-tight">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-5 py-2.5 mb-6">
              <Activity size={16} className="text-cyan-600" />
              <span className="text-cyan-700 font-bold text-sm">Scope Of Facilities</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight text-slate-900">
              Modern ENT
              <span className="block text-cyan-600 mt-1">Diagnostic Facilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {facilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="text-base font-bold text-slate-700">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & ACHIEVEMENTS - New Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-sm mb-6">
              <Trophy size={16} className="text-amber-600" />
              <span className="text-amber-700 font-bold text-sm">Recognitions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight text-slate-900">
              Awards &
              <span className="block text-amber-600 mt-1">Professional Achievements</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Recognized for excellence in ENT surgery and patient care
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {awards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-base font-black text-slate-800 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}