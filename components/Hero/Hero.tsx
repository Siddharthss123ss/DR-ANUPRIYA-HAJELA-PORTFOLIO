"use client";

import {
  Zap,
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
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            filter: "brightness(1.03) contrast(1.02) saturate(1.05)",
          }}
        >
          <source
            src="/videos/anu.mp4"
            type="video/mp4"
          />
        </video>

        {/* VERY LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-black/15" />

        {/* SUBTLE VIGNETTE */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 65%, rgba(0,0,0,0.25) 100%)",
          }}
        />

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
      <div className="bg-[#f6f8fb] py-8 lg:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
            
            {/* CARD 1 - Experience */}
            <div className="group flex items-center gap-5 rounded-[30px] bg-white px-7 py-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center min-w-[70px] h-[70px] rounded-2xl bg-cyan-50 text-[#00658a] group-hover:bg-[#00658a] group-hover:text-white transition-all duration-300">
                <Award size={34} />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-black text-slate-900">15+ Years</h3>
                <p className="mt-2 text-sm text-slate-500">Extensive clinical experience in patient care.</p>
              </div>
            </div>

            {/* CARD 2 - Patients */}
            <div className="group flex items-center gap-5 rounded-[30px] bg-white px-7 py-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center min-w-[70px] h-[70px] rounded-2xl bg-cyan-50 text-[#00658a] group-hover:bg-[#00658a] group-hover:text-white transition-all duration-300">
                <Users size={34} />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-black text-slate-900">10,000+ Patients</h3>
                <p className="mt-2 text-sm text-slate-500">Trusted by thousands for honest medical advice.</p>
              </div>
            </div>

            {/* CARD 3 - Rating */}
            <div className="group flex items-center gap-5 rounded-[30px] bg-white px-7 py-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center min-w-[70px] h-[70px] rounded-2xl bg-cyan-50 text-[#00658a] group-hover:bg-[#00658a] group-hover:text-white transition-all duration-300">
                <Star size={34} />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-black text-slate-900">4.9 ★ Rating</h3>
                <p className="mt-2 text-sm text-slate-500">Consistently rated excellent by patients.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}