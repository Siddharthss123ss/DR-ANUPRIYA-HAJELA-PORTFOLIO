"use client";

import { motion } from "framer-motion";

import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}
      <section
        className="
        relative

        overflow-hidden

        bg-[#06111f]

        pt-36
        pb-24
        lg:pb-32
        "
      >

        {/* BACKGROUND */}
        <div
          className="
          absolute
          top-0
          left-0

          w-[700px]
          h-[700px]

          bg-cyan-500/10

          rounded-full

          blur-3xl
          "
        ></div>

        <div
          className="
          absolute
          bottom-0
          right-0

          w-[700px]
          h-[700px]

          bg-blue-500/10

          rounded-full

          blur-3xl
          "
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              {/* BADGE */}
              <div
                className="
                inline-flex
                items-center

                gap-3

                rounded-full

                bg-white/10

                border
                border-white/10

                backdrop-blur-xl

                px-6
                py-3
                "
              >

                <ShieldCheck
                  size={18}
                  className="text-cyan-300"
                />

                <span
                  className="
                  text-sm

                  font-bold

                  tracking-[2px]

                  uppercase

                  text-cyan-300
                  "
                >

                  Contact Clinic

                </span>

              </div>

              {/* TITLE */}
              <h1
                className="
                mt-8

                text-5xl
                sm:text-6xl
                lg:text-7xl

                font-black

                leading-[0.95]

                tracking-tight

                text-white
                "
              >

                Advanced ENT
                <span className="block text-cyan-300">

                  Care & Consultation

                </span>

              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                mt-8

                max-w-3xl

                text-lg
                lg:text-xl

                leading-9

                text-gray-300
                "
              >

                Connect directly with the clinic for
                advanced ENT consultation,
                hearing evaluation,
                sinus treatment,
                surgical expertise,
                and patient-focused care.

              </p>

              {/* BUTTONS */}
              <div
                className="
                mt-12

                flex
                flex-col
                sm:flex-row

                gap-5
                "
              >

                {/* CALL */}
                <a
                  href="tel:+919876543210"
                  className="
                  group

                  inline-flex
                  items-center
                  justify-center

                  gap-3

                  rounded-2xl

                  bg-cyan-600

                  px-8
                  py-5

                  text-white

                  font-black

                  shadow-[0_20px_60px_rgba(8,145,178,0.25)]

                  hover:bg-cyan-700

                  transition-all
                  duration-300
                  "
                >

                  <Phone size={20} />

                  Call Clinic

                  <ArrowUpRight
                    size={20}
                    className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1

                    transition-all
                    duration-300
                    "
                  />

                </a>

                {/* MAP */}
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="
                  inline-flex
                  items-center
                  justify-center

                  gap-3

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/5

                  backdrop-blur-xl

                  px-8
                  py-5

                  text-white

                  font-bold

                  hover:bg-white/10

                  transition-all
                  duration-300
                  "
                >

                  <Navigation size={20} />

                  Open Location

                </a>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
              relative

              overflow-hidden

              rounded-[36px]

              bg-white/5

              border
              border-white/10

              backdrop-blur-xl

              p-8
              lg:p-10
              "
            >

              {/* TOP */}
              <div>

                <h2
                  className="
                  text-4xl

                  font-black

                  leading-tight

                  text-white
                  "
                >

                  Clinic Information

                </h2>

                <p
                  className="
                  mt-5

                  text-lg

                  leading-8

                  text-gray-300
                  "
                >

                  Visit the clinic for premium ENT consultation,
                  diagnosis,
                  and advanced treatment care.

                </p>

              </div>

              {/* INFO */}
              <div className="mt-12 space-y-6">

                {/* PHONE */}
                <div
                  className="
                  flex
                  items-start

                  gap-5

                  rounded-[28px]

                  bg-white/5

                  border
                  border-white/10

                  p-6
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    justify-center

                    w-16
                    h-16

                    rounded-2xl

                    bg-cyan-600

                    text-white
                    "
                  >

                    <Phone size={28} />

                  </div>

                  <div>

                    <h3
                      className="
                      text-2xl

                      font-black

                      text-white
                      "
                    >

                      Call Clinic

                    </h3>

                    <p
                      className="
                      mt-3

                      text-lg

                      text-gray-300
                      "
                    >

                      +91 98765 43210

                    </p>

                  </div>

                </div>

                {/* ADDRESS */}
                <div
                  className="
                  flex
                  items-start

                  gap-5

                  rounded-[28px]

                  bg-white/5

                  border
                  border-white/10

                  p-6
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    justify-center

                    w-16
                    h-16

                    rounded-2xl

                    bg-cyan-600

                    text-white
                    "
                  >

                    <MapPin size={28} />

                  </div>

                  <div>

                    <h3
                      className="
                      text-2xl

                      font-black

                      text-white
                      "
                    >

                      Clinic Address

                    </h3>

                    <p
                      className="
                      mt-3

                      text-lg

                      leading-8

                      text-gray-300
                      "
                    >

                      Bhopal,
                      Madhya Pradesh,
                      India

                    </p>

                  </div>

                </div>

                {/* TIMINGS */}
                <div
                  className="
                  flex
                  items-start

                  gap-5

                  rounded-[28px]

                  bg-white/5

                  border
                  border-white/10

                  p-6
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    justify-center

                    w-16
                    h-16

                    rounded-2xl

                    bg-cyan-600

                    text-white
                    "
                  >

                    <Clock size={28} />

                  </div>

                  <div>

                    <h3
                      className="
                      text-2xl

                      font-black

                      text-white
                      "
                    >

                      Consultation Hours

                    </h3>

                    <p
                      className="
                      mt-3

                      text-lg

                      leading-8

                      text-gray-300
                      "
                    >

                      Monday - Saturday
                      <br />
                      10:00 AM - 7:00 PM

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* MAP SECTION */}
      <section
        id="contact"
        className="
        bg-[#f8fbff]

        py-24
        lg:py-32
        "
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* TOP */}
          <div className="text-center max-w-4xl mx-auto">

            <div
              className="
              inline-flex
              items-center

              gap-3

              rounded-full

              bg-white

              border
              border-cyan-100

              px-6
              py-3
              "
            >

              <MapPin
                size={18}
                className="text-cyan-700"
              />

              <span
                className="
                text-sm

                font-bold

                tracking-[2px]

                uppercase

                text-cyan-700
                "
              >

                Clinic Location

              </span>

            </div>

            <h2
              className="
              mt-8

              text-5xl
              lg:text-6xl

              font-black

              leading-tight

              text-slate-900
              "
            >

              Easily Accessible
              <span className="block text-cyan-700">

                ENT Care Center

              </span>

            </h2>

            <p
              className="
              mt-8

              max-w-3xl

              mx-auto

              text-lg
              lg:text-xl

              leading-9

              text-slate-600
              "
            >

              Conveniently located in Bhopal
              for advanced ENT consultation,
              diagnosis,
              and surgical care.

            </p>

          </div>

          {/* MAP */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="mt-20"
          >

            <div
              className="
              overflow-hidden

              rounded-[40px]

              border
              border-gray-100

              bg-white

              shadow-[0_20px_80px_rgba(15,23,42,0.08)]
              "
            >

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.181065512503!2d77.412615!3d23.259933!2m3!1f0!2f0!3f0!"
                width="100%"
                height="600"
                loading="lazy"
                className="border-0"
              ></iframe>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}