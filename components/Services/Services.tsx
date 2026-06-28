"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  Ear,
  Waves,
  Microscope,
  Brain,
  Speech,
  HeartPulse,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Cochlear Implant",
    desc: "Advanced hearing restoration and rehabilitation with precision ENT expertise for profound hearing loss.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop",
    icon: Ear,
    tag: "Hearing Restoration",
  },
  {
    title: "FESS Surgery",
    desc: "Modern minimally invasive sinus surgery for chronic sinus disease and long-term breathing improvement.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1400&auto=format&fit=crop",
    icon: Microscope,
    tag: "Minimally Invasive",
  },
  {
    title: "Septorhinoplasty",
    desc: "Advanced nasal correction procedures focused on functionality, breathing, and natural aesthetics.",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1400&auto=format&fit=crop",
    icon: Waves,
    tag: "Functional & Aesthetic",
  },
  {
    title: "Vertigo Clinic",
    desc: "Comprehensive diagnosis and advanced treatment for dizziness, balance disorders, and vertigo.",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1400&auto=format&fit=crop",
    icon: Brain,
    tag: "Balance Care",
  },
  {
    title: "Voice Disorders",
    desc: "Specialized voice, swallowing, and laryngology treatment with expert diagnostic evaluation.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1400&auto=format&fit=crop",
    icon: Speech,
    tag: "Voice Care",
  },
  {
    title: "Sleep Apnea Care",
    desc: "Advanced snoring and obstructive sleep apnea treatment for better sleep quality.",
    image: "https://images.unsplash.com/photo-1631815588090-d1bcbe9a9278?q=80&w=1400&auto=format&fit=crop",
    icon: HeartPulse,
    tag: "Sleep Solutions",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24 lg:py-32"
    >
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
      
      {/* Subtle Grid Pattern - Fixed SVG */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(0,0,0,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* TOP SECTION - More Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 px-5 py-2.5 shadow-sm">
            <Sparkles size={14} className="text-cyan-600" />
            <span className="text-sm font-bold text-cyan-700 tracking-wide">
              Premium ENT Care
            </span>
            <Sparkles size={14} className="text-cyan-600" />
          </div>

          {/* Elegant Title */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-slate-900">
            Advanced ENT
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mt-1">
              Treatment Services
            </span>
          </h2>

          {/* Sophisticated Description */}
          <p className="mt-6 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed text-slate-600">
            Comprehensive ENT care with modern surgical expertise, advanced diagnostics, 
            and compassionate patient-focused treatment.
          </p>
        </motion.div>

        {/* PREMIUM SERVICES SLIDER */}
        <div className="mt-20">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={28}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1.3, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1200: { slidesPerView: 3, spaceBetween: 32 },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="premium-services-slider"
          >
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Premium Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  
                  {/* Image Section */}
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Category Tag */}
                    <div className="absolute top-5 left-5 z-20">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                        <span className="text-xs font-bold text-slate-700 tracking-wide">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute bottom-5 left-5 z-20">
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <item.icon size={28} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-7 lg:p-8">
                    <h3 className="text-2xl lg:text-2xl font-black leading-tight text-slate-900 group-hover:text-cyan-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
                      {item.desc}
                    </p>
                    
                    {/* Premium CTA Link */}
                    <div className="mt-6 pt-2">
                      <button className="group/btn inline-flex items-center gap-2 text-cyan-600 font-bold text-sm tracking-wide hover:text-cyan-700 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowUpRight 
                          size={16} 
                          className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300" 
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Premium CTA Button */}
        <div className="flex justify-center mt-16">
          <motion.a
            href="/services"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 px-9 py-4.5 text-white font-black shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span>Explore Complete Services</span>
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />
          </motion.a>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx global>{`
        .premium-services-slider {
          padding-bottom: 3rem !important;
        }
        
        .premium-services-slider .swiper-button-next,
        .premium-services-slider .swiper-button-prev {
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          transition: all 0.3s;
        }
        
        .premium-services-slider .swiper-button-next:hover,
        .premium-services-slider .swiper-button-prev:hover {
          background: #06b6d4;
          border-color: #06b6d4;
        }
        
        .premium-services-slider .swiper-button-next:hover::after,
        .premium-services-slider .swiper-button-prev:hover::after {
          color: white;
        }
        
        .premium-services-slider .swiper-button-next::after,
        .premium-services-slider .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
          color: #0f172a;
          transition: color 0.3s;
        }
        
        .premium-services-slider .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }
        
        .premium-services-slider .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: linear-gradient(to right, #06b6d4, #3b82f6);
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}