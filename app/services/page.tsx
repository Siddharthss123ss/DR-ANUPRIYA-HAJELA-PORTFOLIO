"use client";

import { motion } from "framer-motion";

import {
  Ear,
  Waves,
  Microscope,
  Brain,
  Speech,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Activity,
} from "lucide-react";

const services = [
  {
    title: "Cochlear Implant",
    desc:
      "Advanced hearing restoration and cochlear implant rehabilitation with modern ENT expertise.",
    icon: Ear,
  },

  {
    title: "FESS Surgery",
    desc:
      "Modern minimally invasive sinus surgery for chronic sinus disease and breathing improvement.",
    icon: Microscope,
  },

  {
    title: "Septorhinoplasty",
    desc:
      "Advanced nasal correction procedures focused on functionality and aesthetics.",
    icon: Waves,
  },

  {
    title: "Vertigo Clinic",
    desc:
      "Comprehensive diagnosis and treatment for dizziness and balance disorders.",
    icon: Brain,
  },

  {
    title: "Voice Disorders",
    desc:
      "Specialized voice, swallowing, and laryngology treatment with expert evaluation.",
    icon: Speech,
  },

  {
    title: "Sleep Apnea Care",
    desc:
      "Advanced snoring and obstructive sleep apnea treatment solutions.",
    icon: HeartPulse,
  },
];

const procedures = [
  "Myringotomy with Grommet Insertion",
  "Tympanoplasty",
  "Mastoidectomy",
  "Stapedotomy / Stapedectomy",
  "Endoscopic Septoplasty",
  "Turbinoplasty",
  "Endoscopic Skull Base Surgery",
  "Tonsillectomy",
  "Injection Laryngoplasty",
  "Thyroidectomy",
  "Parotidectomy",
  "Micro Laryngeal Surgery",
];

const diagnostics = [
  "Pure Tone Audiometry",
  "BERA Hearing Test",
  "Otoacoustic Emission Test",
  "Diagnostic Nasal Endoscopy",
  "Videolaryngoscopy",
  "Speech & Voice Therapy",
  "Skin Prick Allergy Testing",
  "Vertigo Evaluation",
];

export default function ServicesPage() {

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

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            text-center

            max-w-5xl

            mx-auto
            "
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
                text-cyan-300

                font-bold

                tracking-[2px]

                uppercase

                text-sm
                "
              >

                Advanced ENT Services

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

              Specialized ENT
              <span className="block text-cyan-300">

                Treatments & Procedures

              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="
              mt-8

              max-w-4xl

              mx-auto

              text-lg
              lg:text-xl

              leading-9

              text-gray-300
              "
            >

              Comprehensive ENT care with advanced surgical expertise,
              precision diagnostics,
              modern treatment techniques,
              and patient-focused healthcare excellence.

            </p>

          </motion.div>

        </div>

      </section>

      {/* SERVICES GRID */}
      <section
        className="
        relative

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

              shadow-lg
              "
            >

              <Stethoscope
                size={18}
                className="text-cyan-700"
              />

              <span
                className="
                text-cyan-700

                font-bold

                tracking-[2px]

                uppercase

                text-sm
                "
              >

                ENT Expertise

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

              Advanced ENT
              <span
                className="
                block

                bg-gradient-to-r
                from-cyan-600
                to-blue-700

                bg-clip-text
                text-transparent
                "
              >

                Clinical Services

              </span>

            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="
                rounded-[40px]

                bg-white

                border
                border-gray-100

                p-8
                lg:p-10

                shadow-[0_20px_80px_rgba(15,23,42,0.06)]

                transition-all
                duration-300
                "
              >

                {/* ICON */}
                <div
                  className="
                  flex
                  items-center
                  justify-center

                  w-20
                  h-20

                  rounded-3xl

                  bg-gradient-to-r
                  from-cyan-600
                  to-blue-700

                  text-white

                  shadow-xl
                  "
                >

                  <item.icon size={36} />

                </div>

                {/* TITLE */}
                <h3
                  className="
                  mt-8

                  text-3xl

                  font-black

                  leading-tight

                  text-slate-900
                  "
                >

                  {item.title}

                </h3>

                {/* DESC */}
                <p
                  className="
                  mt-5

                  text-lg

                  leading-8

                  text-slate-600
                  "
                >

                  {item.desc}

                </p>

                {/* BUTTON */}
                <button
                  className="
                  mt-8

                  inline-flex
                  items-center

                  gap-2

                  text-cyan-700

                  font-bold

                  text-lg

                  hover:gap-4

                  transition-all
                  duration-300
                  "
                >

                  Learn More

                  <ArrowUpRight size={20} />

                </button>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* SURGERIES */}
      <section className="bg-white py-24 lg:py-32">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* TOP */}
          <div className="text-center max-w-4xl mx-auto">

            <div
              className="
              inline-flex
              items-center

              gap-3

              rounded-full

              bg-cyan-50

              px-6
              py-3

              text-cyan-700

              font-bold
              "
            >

              <Microscope size={18} />

              ENT Surgical Procedures

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

              Advanced ENT
              <span className="block text-cyan-700">

                Surgical Expertise

              </span>

            </h2>

          </div>

          {/* LIST */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">

            {procedures.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                className="
                flex
                items-start

                gap-4

                rounded-[30px]

                border
                border-gray-100

                bg-[#f8fbff]

                p-6

                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                "
              >

                <div
                  className="
                  flex
                  items-center
                  justify-center

                  w-12
                  h-12

                  rounded-2xl

                  bg-gradient-to-r
                  from-cyan-600
                  to-blue-700

                  text-white
                  "
                >

                  <CheckCircle2 size={20} />

                </div>

                <h3
                  className="
                  text-xl

                  font-black

                  leading-8

                  text-slate-900
                  "
                >

                  {item}

                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* DIAGNOSTICS */}
      <section
        className="
        relative

        overflow-hidden

        bg-[#06111f]

        py-24
        lg:py-32
        "
      >

        <div
          className="
          absolute
          top-0
          right-0

          w-[600px]
          h-[600px]

          bg-cyan-500/10

          rounded-full

          blur-3xl
          "
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

          {/* TOP */}
          <div className="text-center max-w-4xl mx-auto">

            <div
              className="
              inline-flex
              items-center

              gap-3

              rounded-full

              bg-white/10

              border
              border-white/10

              px-6
              py-3

              text-cyan-300

              font-bold
              "
            >

              <Activity size={18} />

              Diagnostic Facilities

            </div>

            <h2
              className="
              mt-8

              text-5xl
              lg:text-6xl

              font-black

              leading-tight

              text-white
              "
            >

              Advanced ENT
              <span className="block text-cyan-300">

                Diagnostics & Evaluation

              </span>

            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

            {diagnostics.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                rounded-[36px]

                bg-white/5

                border
                border-white/10

                backdrop-blur-xl

                p-8
                "
              >

                <div
                  className="
                  flex
                  items-center
                  justify-center

                  w-16
                  h-16

                  rounded-3xl

                  bg-gradient-to-r
                  from-cyan-600
                  to-blue-700

                  text-white
                  "
                >

                  <Activity size={28} />

                </div>

                <h3
                  className="
                  mt-8

                  text-2xl

                  font-black

                  leading-tight

                  text-white
                  "
                >

                  {item}

                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}