"use client";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";

import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

export default function Awards() {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    fetch("/api/awards")
      .then((res) => res.json())
      .then((data) => setAwards(data));
  }, []);

  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-bold uppercase tracking-widest">
            Recognition
          </span>

          <h2 className="text-5xl font-black mt-4 text-gray-900">
            Awards & Achievements
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional milestones, certifications and achievements
            earned through dedication and excellence in ENT care.
          </p>

        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
         {awards.map((award: any) => (
  <SwiperSlide key={award._id}>
    
    <Link href={`/awards/${award.slug}`}>
      
      <div className="group h-full bg-white rounded-[32px] border border-blue-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">

        {/* IMAGE */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={award.image || "/Images/default-award.jpg"}
            alt={award.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

          <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-2xl">
            🏆
          </div>

          <div className="absolute bottom-4 left-4">
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl text-white font-bold text-sm">
              {award.year}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8">

          <h3 className="text-2xl font-black text-gray-900 line-clamp-2">
            {award.title}
          </h3>

          <p className="text-gray-600 mt-4 leading-7 line-clamp-3">
            {award.description}
          </p>

          <div className="flex items-center gap-2 mt-6 text-cyan-600 font-bold">
            View Details →
          </div>

          <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-500"></div>

        </div>

      </div>

    </Link>

            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-14">
  <Link
    href="/awards"
    className="
      group
      inline-flex
      items-center
      gap-3
      px-8
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-cyan-600
      to-blue-600
      text-white
      font-bold
      shadow-xl
      hover:shadow-cyan-300/40
      hover:scale-105
      transition-all
      duration-300
    "
  >
    View All Awards

    <span className="group-hover:translate-x-1 transition-all">
      →
    </span>
  </Link>
</div>

      </div>

    </section>
  );
}