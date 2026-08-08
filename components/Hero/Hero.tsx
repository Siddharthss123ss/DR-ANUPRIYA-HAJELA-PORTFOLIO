"use client";

import {
  Award,
  Users,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* MOBILE NAVBAR SPACER */}
      <div className="h-14 sm:h-16 md:hidden" />

      {/* HERO VIDEO */}
      <div className="relative mt-2 sm:mt-3 w-full h-[45svh] sm:h-[55svh] md:h-[65svh] lg:h-[85svh] xl:h-screen overflow-hidden">
        {/* VIDEO - Optimized */}
       <video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source
    media="(max-width: 768px)"
    src="/videos/Herovideo1.mp4"
    type="video/mp4"
  />
  <source
    media="(min-width: 769px)"
    src="/videos/Herovideo1.mp4"
    type="video/mp4"
  />
</video>

        {/* VERY LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-black/15" />

        {/* SCROLL INDICATOR */}
        <div className="hidden md:block absolute right-6 lg:right-8 bottom-8 z-20">
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/80 text-xs tracking-widest uppercase rotate-180 [writing-mode:vertical-rl]">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* DOCTOR FEATURES CARDS */}
      <div className="bg-[#f6f8fb] py-6 sm:py-8 lg:py-12">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-7">
            
            {/* ✅ CARD 1 - Experience - Fixed */}
            <div className="group flex items-center gap-3 sm:gap-4 md:gap-5 rounded-2xl sm:rounded-[24px] md:rounded-[30px] bg-white px-4 sm:px-5 md:px-7 py-5 sm:py-6 md:py-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] md:hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px] w-[50px] sm:w-[60px] md:w-[70px] h-[50px] sm:h-[60px] md:h-[70px] rounded-xl sm:rounded-2xl bg-cyan-50 text-[#00658a] group-hover:bg-[#00658a] group-hover:text-white transition-all duration-300">
                <Award size={24} className="sm:size-[28px] md:size-[34px]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-slate-900">10+ Years</h3>
                <p className="mt-0.5 sm:mt-1 md:mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">Extensive clinical experience in patient care.</p>
              </div>
            </div>

            {/* ✅ CARD 2 - Patients - Fixed */}
            <div className="group flex items-center gap-3 sm:gap-4 md:gap-5 rounded-2xl sm:rounded-[24px] md:rounded-[30px] bg-white px-4 sm:px-5 md:px-7 py-5 sm:py-6 md:py-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] md:hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px] w-[50px] sm:w-[60px] md:w-[70px] h-[50px] sm:h-[60px] md:h-[70px] rounded-xl sm:rounded-2xl bg-cyan-50 text-[#00658a] group-hover:bg-[#00658a] group-hover:text-white transition-all duration-300">
                <Users size={24} className="sm:size-[28px] md:size-[34px]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-slate-900">10,000+ Patients</h3>
                <p className="mt-0.5 sm:mt-1 md:mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">Trusted by thousands for honest medical advice.</p>
              </div>
            </div>

            {/* ✅ CARD 3 - Rating - Fixed */}
            <div className="group flex items-center gap-3 sm:gap-4 md:gap-5 rounded-2xl sm:rounded-[24px] md:rounded-[30px] bg-white px-4 sm:px-5 md:px-7 py-5 sm:py-6 md:py-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] md:hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px] w-[50px] sm:w-[60px] md:w-[70px] h-[50px] sm:h-[60px] md:h-[70px] rounded-xl sm:rounded-2xl bg-cyan-50 text-[#00658a] group-hover:bg-[#00658a] group-hover:text-white transition-all duration-300">
                <Star size={24} className="sm:size-[28px] md:size-[34px]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-slate-900">4.9 ★ Rating</h3>
                <p className="mt-0.5 sm:mt-1 md:mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">Consistently rated excellent by patients.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}