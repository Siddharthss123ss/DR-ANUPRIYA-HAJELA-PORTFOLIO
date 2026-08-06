"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Award, 
  Trophy, 
  ArrowUpRight,
  Star,
  Medal,
  Users,
  Crown,
  Gem,
  Zap,
  ChevronRight,
  Calendar,
  Loader2
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Awards() {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDesktop(window.innerWidth >= 1024);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    
    // ✅ FIX: Fetch awards
    fetchAwards();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchAwards = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/awards");
      const data = await response.json();
      setAwards(data);
    } catch (error) {
      console.error("Error fetching awards:", error);
    } finally {
      setLoading(false);
    }
  };

  // For 3D tilt effect on cards - DESKTOP ONLY
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (!isDesktop || hoveredIndex !== index) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // ✅ SEO: Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Awards & Achievements | Dr. Anupriya Hajela Shah - Hajela Hospital",
    "description": "Professional milestones, certifications and achievements earned through dedication and excellence in advanced ENT care.",
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
      "name": "Awards & Achievements",
      "itemListElement": awards.map((award: any, index: number) => ({
        "@type": "Award",
        "position": index + 1,
        "name": award.title,
        "description": award.description,
        "url": `/awards/${award.slug}`
      }))
    }
  };

  // ✅ Loading State
  if (loading) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
        <div className="text-center">
          <Loader2 size={48} className="text-teal-600 animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Loading awards...</p>
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

      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 overflow-hidden">

        {/* ✅ PREMIUM ANIMATED BACKGROUND - HIDDEN ON MOBILE */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="hidden md:block absolute -top-40 -right-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse" />
            <div className="hidden md:block absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-200/10 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
        )}

        {/* SUBTLE GRID PATTERN */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0d9488 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* TOP SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100/50 shadow-sm">
              <Award size={16} className="text-teal-600" />
              <span className="text-sm font-bold text-teal-700 tracking-wide">
                Professional Recognition
              </span>
              <Sparkles size={14} className="text-teal-600" />
            </div>

            {/* Premium Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-900 mt-6">
              Awards &
              <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent mt-1">
                Achievements
              </span>
            </h2>

            <p className="mt-6 text-base lg:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Professional milestones, certifications and achievements earned through 
              dedication and excellence in advanced ENT care.
            </p>

            {/* Decorative Line */}
            <div className="flex justify-center mt-6">
              <div className="relative">
                <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
                <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-sm opacity-50"></div>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/25">
                  <Trophy size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-gray-900">12+</p>
                  <p className="text-xs text-gray-500">Awards Won</p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/25">
                  <Star size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-gray-900">5+</p>
                  <p className="text-xs text-gray-500">Gold Medals</p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/25">
                  <Users size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-gray-900">15+</p>
                  <p className="text-xs text-gray-500">Certifications</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ✅ AWARDS SLIDER - Shows only if awards exist */}
          {awards.length > 0 ? (
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              navigation
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.2, spaceBetween: 24 },
                768: { slidesPerView: 2, spaceBetween: 28 },
                1024: { slidesPerView: 2.5, spaceBetween: 30 },
                1280: { slidesPerView: 3, spaceBetween: 32 },
              }}
              className="awards-slider"
            >
              {awards.map((award: any, index: number) => (
                <SwiperSlide key={award._id}>
                  <motion.div
                    onMouseEnter={() => isDesktop && setHoveredIndex(index)}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      rotateX: isDesktop && hoveredIndex === index ? rotateX : 0,
                      rotateY: isDesktop && hoveredIndex === index ? rotateY : 0,
                      transformStyle: "preserve-3d",
                    }}
                    className="h-full"
                  >
                    <Link href={`/awards/${award.slug}`}>
                      <div className="group relative h-full bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg md:hover:shadow-2xl md:hover:shadow-teal-500/15 transition-all duration-500 cursor-pointer">

                        {/* Premium Glow on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-3xl"></div>

                        {/* Image Section - Using Next.js Image */}
                        <div className="relative h-64 overflow-hidden flex-shrink-0">
                          <Image
                            src={award.image || "/Images/default-award.jpg"}
                            alt={award.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                          {/* Premium Trophy Icon */}
                          <div className="absolute top-4 right-4 z-20">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 backdrop-blur-xl flex items-center justify-center text-3xl shadow-xl shadow-amber-500/30 border border-white/20">
                              🏆
                            </div>
                          </div>

                          {/* Year Badge */}
                          <div className="absolute bottom-4 left-4 z-20">
                            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white font-bold text-sm shadow-lg">
                              <Calendar size={14} className="inline mr-1" />
                              {award.year}
                            </span>
                          </div>

                          {/* Premium Category Tag */}
                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide">
                              <Medal size={12} className="inline mr-1 text-amber-400" />
                              Achievement
                            </span>
                          </div>

                          {/* Shimmer Effect - Desktop only */}
                          <div className="hidden md:block absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
                        </div>

                        {/* Content Section */}
                        <div className="p-7 lg:p-8 flex-grow flex flex-col">
                          {/* Premium Badge */}
                          <div className="flex items-center gap-2 mb-3">
                            <Star size={14} className="text-amber-400 fill-amber-400" />
                            <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">Recognition</span>
                            <div className="flex-1" />
                            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                              <Zap size={12} />
                            </div>
                          </div>

                          <h3 className="text-2xl font-black text-gray-900 line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
                            {award.title}
                          </h3>

                          <p className="text-gray-600 mt-4 leading-relaxed line-clamp-3 flex-grow">
                            {award.description}
                          </p>

                          {/* Premium CTA */}
                          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-teal-600 font-bold text-sm group-hover:translate-x-1 transition-transform duration-300">
                              <span>View Details</span>
                              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/30 group-hover:scale-110 group-hover:rotate-90 transition-all duration-300">
                              <ChevronRight size={16} />
                            </div>
                          </div>

                          {/* Animated Underline */}
                          <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-teal-600 to-cyan-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
                        </div>

                      </div>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // ✅ Empty State
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
                <Award size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-700">No Awards Yet</h3>
              <p className="text-gray-500 mt-2">Awards will be added soon.</p>
            </div>
          )}

          {/* VIEW ALL BUTTON */}
          {awards.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center mt-14 lg:mt-16"
            >
              <motion.a
                href="/awards"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-teal-600 via-cyan-600 to-violet-600 text-white font-black shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-700 via-cyan-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-3">
                  <Crown size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  View All Awards
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </span>
              </motion.a>
            </motion.div>
          )}

          {/* TRUST BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-50/80 to-cyan-50/80 backdrop-blur-sm border border-teal-100/50 shadow-lg shadow-teal-500/5">
              <Gem size={16} className="text-teal-600" />
              <span className="text-sm text-gray-700 font-semibold">
                Recognized for excellence in ENT surgery & patient care
              </span>
              <Gem size={16} className="text-teal-600" />
            </div>
          </motion.div>

        </div>

        {/* CUSTOM SLIDER STYLES */}
        <style jsx global>{`
          .awards-slider {
            padding-bottom: 4rem !important;
          }
          
          .awards-slider .swiper-wrapper {
            padding: 0.5rem 0;
          }
          
          .awards-slider .swiper-button-next,
          .awards-slider .swiper-button-prev {
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 50%;
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease;
          }
          
          .awards-slider .swiper-button-next::after,
          .awards-slider .swiper-button-prev::after {
            font-size: 16px;
            font-weight: 700;
            color: #0f172a;
            transition: color 0.3s;
          }
          
          .awards-slider .swiper-button-next:hover,
          .awards-slider .swiper-button-prev:hover {
            background: linear-gradient(135deg, #0d9488, #06b6d4);
            border-color: transparent;
            box-shadow: 0 10px 30px -5px rgba(13, 148, 136, 0.3);
            transform: scale(1.05);
          }
          
          .awards-slider .swiper-button-next:hover::after,
          .awards-slider .swiper-button-prev:hover::after {
            color: white;
          }
          
          .awards-slider .swiper-button-disabled {
            opacity: 0.3 !important;
            cursor: not-allowed !important;
          }
          
          .awards-slider .swiper-pagination {
            bottom: 0 !important;
          }
          
          .awards-slider .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #cbd5e1;
            opacity: 0.6;
            transition: all 0.3s ease;
          }
          
          .awards-slider .swiper-pagination-bullet:hover {
            opacity: 1;
            transform: scale(1.2);
          }
          
          .awards-slider .swiper-pagination-bullet-active {
            width: 28px;
            border-radius: 4px;
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
            .awards-slider .swiper-button-next,
            .awards-slider .swiper-button-prev {
              display: none;
            }
          }
        `}</style>

      </section>
    </>
  );
}