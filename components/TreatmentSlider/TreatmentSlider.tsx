"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import {
  Ear,
  Microscope,
  Activity,
  ShieldPlus,
} from "lucide-react";

import "swiper/css";

const treatments = [
  {
    title: "Tympanoplasty",
    desc: "Advanced ear membrane repair procedures with modern ENT techniques.",
    icon: Ear,
  },
  {
    title: "FESS Surgery",
    desc: "Functional endoscopic sinus surgery with precision technology.",
    icon: Microscope,
  },
  {
    title: "Hearing Treatment",
    desc: "Comprehensive hearing diagnosis and personalized treatment.",
    icon: Activity,
  },
  {
    title: "Tonsillectomy",
    desc: "Safe and advanced surgical treatment for chronic tonsil conditions.",
    icon: ShieldPlus,
  },
];

export default function TreatmentSlider() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#06111f] to-[#0b1727]">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >

          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/10 text-cyan-300 font-semibold backdrop-blur-xl mb-8">

            Premium Treatments
          </div>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight text-white">

            Specialized
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              ENT Procedures
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            Advanced ENT treatments designed with modern medical techniques,
            precision diagnosis, and compassionate patient care.
          </p>
        </motion.div>

        {/* SLIDER */}
        <div className="mt-24">

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
          >

            {treatments.map((item, index) => (
              <SwiperSlide key={index}>

                <div className="group relative overflow-hidden rounded-[40px] bg-white/5 backdrop-blur-2xl border border-white/10 p-10 min-h-[420px] shadow-[0_20px_80px_rgba(0,0,0,0.3)] hover:-translate-y-4 transition-all duration-500">

                  {/* GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* ICON */}
                  <div className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-center text-white shadow-2xl shadow-blue-500/30">

                    <item.icon size={40} />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10">

                    <h3 className="mt-10 text-4xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-gray-300">
                      {item.desc}
                    </p>

                    <button className="mt-10 bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all">
                      Learn More
                    </button>
                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
}