"use client";

import { motion } from "framer-motion";

import {
  Award,
  GraduationCap,
  Microscope,
  BadgeCheck,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

const awards = [
  {
    title: "ENT Excellence Award",
    desc: "Recognized for advanced ENT treatments and patient care.",
    icon: Award,
  },
  {
    title: "Research Publications",
    desc: "Published multiple academic papers and ENT research work.",
    icon: Microscope,
  },
  {
    title: "Medical Workshops",
    desc: "Participated in advanced surgical and ENT workshops.",
    icon: GraduationCap,
  },
  {
    title: "Certified Specialist",
    desc: "Professional ENT expertise with modern treatment methods.",
    icon: BadgeCheck,
  },
  {
    title: "Advanced Surgical Training",
    desc: "Specialized training in modern ENT surgical procedures.",
    icon: Award,
  },
];

export default function Awards() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-[#f7fbff]">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >

          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold mb-8">

            <Award size={18} />

            Awards & Achievements
          </div>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">

            Excellence in
            <span className="block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              ENT Healthcare
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Recognized for professional expertise,
            advanced treatments, research work,
            and exceptional patient care.
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

            {awards.map((item, index) => (
              <SwiperSlide key={index}>

                <div className="group relative overflow-hidden bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] rounded-[36px] p-10 hover:-translate-y-4 transition-all duration-500 min-h-[360px]">

                  {/* GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* ICON */}
                  <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-center text-white shadow-2xl shadow-blue-500/30">

                    <item.icon size={34} />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10">

                    <h3 className="mt-10 text-3xl font-black text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-gray-600 leading-8 text-lg">
                      {item.desc}
                    </p>
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