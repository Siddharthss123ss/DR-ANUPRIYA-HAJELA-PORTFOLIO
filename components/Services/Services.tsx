"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Ear,
  Waves,
  Microscope,
  Brain,
  Speech,
  HeartPulse,
  Sparkles,
  ArrowUpRight,
  Stethoscope,
  Mic,
  Scissors,
  Activity,
  Bandage,
  Syringe,
  Clock,
  Volume2,
  ShieldCheck,
  ChevronRight,
  Star,
  Award,
  BadgeCheck,
  Loader2,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icon mapping
const iconMap: Record<string, any> = {
  Stethoscope,
  Mic,
  Ear,
  Microscope,
  Scissors,
  Activity,
  Brain,
  Bandage,
  Syringe,
  Waves,
  Clock,
  Volume2,
  Speech,
  HeartPulse,
};

interface Service {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  image: string;
  icon: string;
  tag: string;
  color: string;
  bg: string;
  gradient: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  recovery: string;
  successRate: string;
  featured: boolean;
  order: number;
}

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/services");
      const data = await response.json();

      if (data.success) {
        setServices(data.data);
      } else {
        setError(data.error || "Failed to load services");
      }
    } catch (err) {
      setError("Failed to load services");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ SEO: Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Advanced ENT Treatment Services | Dr. Anupriya Hajela Shah",
    "description": "Comprehensive ENT care services including ear, nose, throat treatments with advanced surgical expertise in Bhopal.",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Hajela Hospital",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "India"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ENT Treatment Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": service.title,
        "description": service.desc,
        "url": `/services/${service.slug}`
      }))
    }
  };

  if (loading) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
        <div className="text-center">
          <Loader2 size={48} className="text-teal-600 animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
        <div className="text-center max-w-md">
          <p className="text-red-600">{error}</p>
          <button
            onClick={fetchServices}
            className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ✅ SEO: JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ✅ SEO: Meta Tags */}
      <Head>
        <title>Advanced ENT Treatment Services | Dr. Anupriya Hajela Shah - Hajela Hospital</title>
        <meta name="description" content="Comprehensive ENT care services including ear, nose, throat treatments with advanced surgical expertise. 15+ years experience, 10,000+ happy patients." />
        <meta name="keywords" content="ENT services, ear treatment, nose treatment, throat treatment, ENT specialist Bhopal, Dr. Anupriya Hajela Shah, Hajela Hospital, ENT surgery, cochlear implant, sinus treatment" />
        <meta property="og:title" content="Advanced ENT Treatment Services | Dr. Anupriya Hajela Shah" />
        <meta property="og:description" content="Comprehensive ENT care with modern surgical expertise, advanced diagnostics, and compassionate patient-focused treatment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hajelahospital.com/services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hajelahospital.com/services" />
      </Head>

      <section
        id="services"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-20 lg:py-28"
        aria-label="ENT Treatment Services"
      >
        {/* Premium Animated Background */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-200/10 rounded-full blur-3xl animate-pulse delay-2000" />
            <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full animate-ping" />
            <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-300" />
            <div className="absolute bottom-20 left-1/3 w-2.5 h-2.5 bg-violet-400 rounded-full animate-ping delay-700" />
          </div>
        )}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(13,148,136,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100/50 px-5 py-2.5 shadow-sm">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Award size={14} className="text-teal-600" />
              </motion.div>
              <span className="text-sm font-bold text-teal-700 tracking-wide">Award-Winning ENT Care</span>
              <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Sparkles size={14} className="text-teal-600" />
              </motion.div>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight">
              <span className="text-gray-900">Advanced ENT</span>
              <motion.span
                className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent mt-1"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Treatment Services
              </motion.span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed text-gray-600">
              Comprehensive ENT care with modern surgical expertise, advanced diagnostics,
              and compassionate patient-focused treatment.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-teal-600" />
                <span className="text-sm font-medium text-gray-700">15+ Years Experience</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">10,000+ Happy Patients</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>

          {/* SERVICES SLIDER - Desktop Same, Mobile Responsive */}
          <div className="mt-16 lg:mt-20">
            <Swiper
              slidesPerView={1.1}
              spaceBetween={28}
              loop={true}
              autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              navigation={{ enabled: true }}
              pagination={{ clickable: true, dynamicBullets: true }}
              breakpoints={{
                640: { slidesPerView: 1.3, spaceBetween: 24 },
                768: { slidesPerView: 2, spaceBetween: 28 },
                1024: { slidesPerView: 2.5, spaceBetween: 30 },
                1280: { slidesPerView: 3, spaceBetween: 32 },
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="premium-services-slider"
            >
              {services.map((item, index) => {
                const Icon = iconMap[item.icon] || Stethoscope;
                return (
                  <SwiperSlide key={item._id}>
                    <Link href={`/services/${item.slug}`}>
                      <motion.div
                        whileHover={{ y: -15, scale: 1.01 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                        className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-teal-500/15 transition-all duration-500 h-full flex flex-col cursor-pointer"
                      >
                        {/* Gradient on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-10 pointer-events-none rounded-3xl`} />

                        {/* Image Section - DESKTOP SIZE */}
                        <div className="relative h-[280px] overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                          {/* Tag Badge */}
                          <div className="absolute top-5 left-5 z-20">
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg border border-white/50">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
                              <span className="text-xs font-bold text-gray-700 tracking-wide uppercase">{item.tag}</span>
                              <Sparkles size={10} className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text`} />
                            </div>
                          </div>

                          {/* Number Badge */}
                          <div className="absolute top-5 right-5 z-20">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white font-black text-sm">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                          </div>

                          {/* Icon */}
                          <div className="absolute bottom-5 left-5 z-20">
                            <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} shadow-2xl shadow-teal-500/30 relative`}>
                              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                              <Icon size={30} className="text-white relative z-10" />
                            </div>
                          </div>
                        </div>

                        {/* Content - DESKTOP SIZE */}
                        <div className="p-6 lg:p-7 flex-grow flex flex-col">
                          <h3 className="text-xl lg:text-2xl font-black leading-tight text-gray-900 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-3 flex-grow">
                            {item.desc}
                          </p>
                          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs font-medium text-teal-600 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                              Learn More
                            </span>
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                              <ChevronRight size={18} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 lg:mt-16">
            <Link href="/services#services">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-teal-600 via-cyan-600 to-violet-600 px-10 py-5 text-white font-black shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="absolute inset-0 bg-gradient-to-r from-teal-700 via-cyan-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <span className="relative flex items-center gap-3 z-10">
                  <Sparkles size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                  Explore Complete Services
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </span>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Slider Styles */}
        <style jsx global>{`
          .premium-services-slider {
            padding-bottom: 3.5rem !important;
          }
          .premium-services-slider .swiper-wrapper {
            padding: 0.5rem 0;
          }
          .premium-services-slider .swiper-button-next,
          .premium-services-slider .swiper-button-prev {
            width: 52px;
            height: 52px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            border-radius: 50%;
            box-shadow: 0 15px 40px -5px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease;
          }
          .premium-services-slider .swiper-button-next::after,
          .premium-services-slider .swiper-button-prev::after {
            font-size: 18px;
            font-weight: 700;
            color: #0f172a;
            transition: color 0.3s;
          }
          .premium-services-slider .swiper-button-next:hover,
          .premium-services-slider .swiper-button-prev:hover {
            background: linear-gradient(135deg, #0d9488, #06b6d4);
            border-color: transparent;
            box-shadow: 0 15px 40px -5px rgba(13, 148, 136, 0.4);
            transform: scale(1.08);
          }
          .premium-services-slider .swiper-button-next:hover::after,
          .premium-services-slider .swiper-button-prev:hover::after {
            color: white;
          }
          .premium-services-slider .swiper-button-disabled {
            opacity: 0.2 !important;
            cursor: not-allowed !important;
          }
          .premium-services-slider .swiper-pagination {
            bottom: 0 !important;
          }
          .premium-services-slider .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #cbd5e1;
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          .premium-services-slider .swiper-pagination-bullet:hover {
            opacity: 1;
            transform: scale(1.3);
          }
          .premium-services-slider .swiper-pagination-bullet-active {
            width: 32px;
            border-radius: 6px;
            background: linear-gradient(to right, #0d9488, #06b6d4);
            opacity: 1;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          @media (max-width: 640px) {
            .premium-services-slider .swiper-button-next,
            .premium-services-slider .swiper-button-prev {
              display: none;
            }
            .premium-services-slider .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
            }
            .premium-services-slider .swiper-pagination-bullet-active {
              width: 24px;
            }
          }
        `}</style>
      </section>
    </>
  );
}