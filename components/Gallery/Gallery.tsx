"use client";

import { motion } from "framer-motion";

const images = [
  {
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    title: "Advanced ENT Consultation",
    height: "large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    title: "Modern Clinic Environment",
    height: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
    title: "Professional Patient Care",
    height: "medium",
  },
  {
    image:
      "https://images.unsplash.com/photo-1631815588090-d1bcbe9a9278?q=80&w=1200&auto=format&fit=crop",
    title: "ENT Surgical Expertise",
    height: "large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
    title: "Advanced Diagnosis",
    height: "medium",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    title: "Premium Healthcare Experience",
    height: "small",
  },
];

export default function Gallery() {
  return (
    <section className="relative py-32 bg-[#06111f] overflow-hidden">

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

            Premium Gallery
          </div>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight text-white">

            Inside Our
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Modern ENT Care
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            Experience advanced healthcare facilities,
            compassionate patient care, and premium ENT treatment environments.
          </p>
        </motion.div>

        {/* GALLERY GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24 auto-rows-[250px]">

          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`
                group relative overflow-hidden rounded-[36px]
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                ${item.height === "large" ? "row-span-2" : ""}
                ${item.height === "medium" ? "row-span-1" : ""}
              `}
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-8">

                <h3 className="text-3xl font-black text-white leading-tight">
                  {item.title}
                </h3>

                <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"></div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}