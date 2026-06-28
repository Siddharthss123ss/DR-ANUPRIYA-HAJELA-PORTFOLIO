"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-[82px]">

      {/* HERO VIDEO */}
      <div
        className="
        relative

        w-full

        h-[55svh]
        sm:h-[72svh]
        lg:h-[96svh]

        overflow-hidden
        "
      >

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
          absolute
          inset-0

          w-full
          h-full

          object-cover
          object-center
          "
        >

          <source
            src="/videos/doctorV.mp4"
            type="video/mp4"
          />

        </video>

        {/* LIGHT OVERLAY */}
        <div
          className="
          absolute
          inset-0

          bg-black/10
          "
        ></div>

        {/* CINEMATIC FADE */}
        <div
          className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/30
          via-transparent
          to-black/10
          "
        ></div>

        {/* CONTENT */}
        <div
          className="
          absolute
          inset-0

          z-10

          flex
          items-end
          "
        >

          <div
            className="
            w-full

            px-4
            sm:px-6
            lg:px-10

            pb-10
            sm:pb-14
            lg:pb-20
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="max-w-4xl"
            >

              {/* BADGE */}
              <div
                className="
                inline-flex
                items-center

                gap-3

                rounded-full

                border
                border-white/20

                bg-white/10

                backdrop-blur-xl

                px-5
                py-3
                "
              >

                <div
                  className="
                  w-2
                  h-2

                  rounded-full

                  bg-cyan-300
                  "
                ></div>

                <span
                  className="
                  text-white

                  font-semibold

                  tracking-[2px]

                  text-[10px]
                  sm:text-xs

                  uppercase
                  "
                >

                  Advanced ENT Specialist • Bhopal

                </span>

              </div>

              {/* TITLE */}
              <h1
                className="
                mt-6

                text-5xl
                sm:text-6xl
                lg:text-7xl

                font-black

                leading-[0.95]

                tracking-tight

                text-white
                "
              >

                Dr. Anupriya
                <span className="block text-cyan-300">

                  Hajela Shah

                </span>

              </h1>

              {/* BUTTON */}
              <div className="mt-8 sm:mt-10">

                <button
                  className="
                  rounded-2xl

                  bg-white

                  px-7
                  sm:px-9

                  py-4

                  text-sm
                  sm:text-base

                  font-bold

                  text-slate-900

                  shadow-[0_10px_40px_rgba(255,255,255,0.2)]

                  hover:scale-[1.03]

                  transition-all
                  duration-300
                  "
                >

                  Book Consultation

                </button>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}