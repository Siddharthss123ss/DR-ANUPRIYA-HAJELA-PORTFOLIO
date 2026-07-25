'use client';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';
import { 
  Sparkles, 
  Camera, 
  ArrowUpRight,
  Stethoscope,
  HeartPulse,
  Users,
  Building2,
  Award,
  Crown,
  Gem,
  Star,
  ChevronRight,
  Play,
  ZoomIn
} from "lucide-react";

interface GalleryImage {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  cloudinaryId: string;
  category: string;
  isFeatured: boolean;
  createdAt: string;
}

const categoryBadges: Record<string, string> = {
  surgery: "Advanced",
  consultation: "Premium",
  clinic: "Luxury",
  team: "Excellence",
  events: "Cutting-Edge",
  other: "World-Class",
};

const categoryLabels: Record<string, string> = {
  surgery: "Surgery",
  consultation: "Consultation",
  clinic: "Facilities",
  team: "Team",
  events: "Events",
  other: "Other",
};

const getHeightClass = (category: string, index: number) => {
  const heights = ['large', 'medium', 'small'];
  return heights[index % 3];
};

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/gallery');
        
        if (response.data.success) {
          setImages(response.data.data);
          setError(null);
        } else {
          setError('Failed to load gallery images');
        }
      } catch (err: any) {
        console.error('Gallery fetch error:', err);
        setError(err.response?.data?.message || 'Failed to load gallery');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // ✅ Lightbox Modal Component
  const ImageLightbox = ({ image, onClose }: { image: GalleryImage; onClose: () => void }) => {
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative max-w-6xl w-full max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-14 right-0 text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <span className="text-2xl">✕</span> Close
          </button>

          {/* Image */}
          <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-black/50">
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl">
            <h3 className="text-2xl font-bold text-white">{image.title}</h3>
            {image.description && (
              <p className="text-gray-300/80 mt-1">{image.description}</p>
            )}
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full capitalize">
                {image.category}
              </span>
              {image.isFeatured && (
                <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} className="fill-amber-300" />
                  Featured
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  if (loading) {
    return (
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-500 mx-auto"></div>
              <p className="mt-4 text-teal-600/70">Loading gallery...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😅</div>
            <h3 className="text-xl font-semibold text-teal-700">Oops! Something went wrong</h3>
            <p className="text-gray-500 mt-2">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-teal-500/20 border border-teal-400/30 rounded-lg text-teal-700 hover:bg-teal-500/30 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (images.length === 0) {
    return (
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🖼️</div>
            <h3 className="text-xl font-semibold text-teal-700">No Images Yet</h3>
            <p className="text-gray-500 mt-2">Check back soon for our gallery</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-teal-50/30 to-slate-50 overflow-hidden">

        {/* PREMIUM GLOW EFFECTS */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-teal-400/10 rounded-full blur-3xl"></div>
        
        {/* PREMIUM ORBS */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-teal-400/40 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-6 h-6 bg-cyan-400/30 rounded-full blur-md animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-teal-300/30 rounded-full blur-sm animate-pulse delay-500"></div>
        
        {/* SUBTLE GRID PATTERN */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #0d9488 1px, transparent 1px),
            linear-gradient(45deg, transparent 65%, rgba(13,148,136,0.02) 100%)
          `,
          backgroundSize: '40px 40px, 100% 100%'
        }}></div>

        {/* TEAL LINE DIVIDER */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"></div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

          {/* TOP SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 border border-teal-400/20 backdrop-blur-xl shadow-2xl shadow-teal-500/5 mb-8">
              <Stethoscope size={16} className="text-teal-600" />
              <span className="text-teal-700/90 font-semibold tracking-[3px] uppercase text-xs">
                Dr. Anupriya Hajela Shah
              </span>
              <Sparkles size={14} className="text-teal-500" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05]">
              <span className="text-slate-800">Inside Our</span>
              <span className="block bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent mt-2">
                Modern ENT Care
              </span>
            </h2>

            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-teal-400/40"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500/60"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-500/60"></div>
                <div className="w-2 h-2 rounded-full bg-teal-500/60"></div>
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-teal-400/40"></div>
            </div>

            <p className="mt-6 text-lg leading-8 text-slate-600/80 max-w-2xl mx-auto font-light">
              Experience world-class healthcare facilities, compassionate patient care, 
              and premium ENT treatment environments with cutting-edge technology.
            </p>

            <div className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-full bg-teal-500/5 border border-teal-400/10 backdrop-blur-sm">
              <Star size={12} className="text-teal-500 fill-teal-500/50" />
              <span className="text-teal-600/70 text-xs font-light tracking-wider">
                CURATED EXCELLENCE
              </span>
              <Star size={12} className="text-teal-500 fill-teal-500/50" />
            </div>
          </motion.div>

          {/* GALLERY GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-24 auto-rows-[250px] lg:auto-rows-[280px]">
            {images.map((item, index) => {
              const heightClass = getHeightClass(item.category, index);
              const badge = categoryBadges[item.category] || "Premium";
              const categoryLabel = categoryLabels[item.category] || item.category;

              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                    damping: 25
                  }}
                  viewport={{ once: true }}
                  className={`
                    group relative overflow-hidden rounded-[32px] lg:rounded-[40px]
                    shadow-[0_20px_80px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_120px_rgba(13,148,136,0.2)]
                    border border-slate-200/30 hover:border-teal-400/30
                    transition-all duration-700 cursor-pointer
                    ${heightClass === "large" ? "row-span-2" : ""}
                    ${heightClass === "medium" ? "row-span-1" : ""}
                  `}
                  onClick={() => setSelectedImage(item)}
                >
                  {/* ✅ IMAGE - Normal img tag use kar rahe hain */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
                  
                  {/* TEAL OVERLAY ON HOVER */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* BORDER GLOW */}
                  <div className="absolute inset-0 rounded-[32px] lg:rounded-[40px] p-[1px] bg-gradient-to-br from-teal-400/0 via-teal-400/0 to-teal-400/0 group-hover:from-teal-400/30 group-hover:via-cyan-400/30 group-hover:to-teal-400/30 transition-all duration-700 pointer-events-none"></div>

                  {/* CATEGORY BADGE */}
                  <div className="absolute top-5 left-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-3 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-teal-400/20 text-teal-700 text-xs font-bold tracking-wider shadow-2xl">
                      <Sparkles size={10} className="text-teal-500" />
                      {badge}
                    </span>
                  </div>

                  {/* FEATURED BADGE */}
                  {item.isFeatured && (
                    <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 backdrop-blur-xl border border-teal-400/40 shadow-xl">
                        <span className="text-white text-[10px] font-bold tracking-wider flex items-center gap-1">
                          <Star size={10} className="fill-white" />
                          FEATURED
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ZOOM ICON */}
                  {!item.isFeatured && (
                    <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/30 flex items-center justify-center hover:bg-teal-500/30 hover:border-teal-500/50 transition-all duration-300 cursor-pointer group/zoom">
                        <ZoomIn size={16} className="text-slate-600 group-hover/zoom:text-white" />
                      </div>
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
                    <div className="transform group-hover:-translate-y-2 transition-all duration-500">
                      <span className="inline-block text-xs font-light tracking-[2px] text-teal-300/80 uppercase mb-2">
                        {categoryLabel}
                      </span>
                      
                      <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight group-hover:text-teal-200 transition-colors duration-500">
                        {item.title}
                      </h3>
                      
                      <p className="mt-2 text-sm lg:text-base text-gray-300/70 opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:text-gray-300">
                        {item.description || 'Premium ENT care experience'}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-teal-400/60 to-cyan-400/60 rounded-full group-hover:w-20 transition-all duration-700"></div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-10px] group-hover:translate-x-0">
                        <span className="text-xs font-light text-teal-300/70 tracking-wider">EXPLORE</span>
                        <ArrowUpRight 
                          size={16} 
                          className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* HOVER SHIMMER */}
                  <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1500ms] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  
                  {/* CORNER ACCENT */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-br-[40px]"></div>
                </motion.div>
              );
            })}
          </div>

          {/* BOTTOM CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16 lg:mt-20"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-teal-500/5 border border-teal-400/10 backdrop-blur-xl shadow-2xl shadow-teal-500/5">
              <div className="flex items-center gap-2">
                <HeartPulse size={16} className="text-teal-600" />
                <span className="text-sm text-teal-600/70 font-light tracking-wider">
                  Experience Premium Care with
                </span>
              </div>
              <div className="w-px h-6 bg-teal-400/20"></div>
              <span className="text-sm font-semibold text-teal-800/90">
                Dr. Anupriya Hajela Shah
              </span>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-10 py-4.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl shadow-teal-600/20 hover:shadow-teal-600/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative">Book Consultation</span>
                <Stethoscope size={18} className="relative group-hover:rotate-12 transition-transform duration-500" />
              </motion.a>
              
              <motion.a
                href="/gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-10 py-4.5 bg-white/80 backdrop-blur-xl border border-slate-200/50 text-slate-700 font-bold rounded-2xl hover:bg-white hover:border-teal-400/40 transition-all duration-500 shadow-lg"
              >
                <span>View Full Gallery</span>
                <Camera size={18} className="text-teal-600/70 group-hover:rotate-12 transition-transform duration-500" />
              </motion.a>
            </div>
          </motion.div>

        </div>

        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .delay-1000 {
            animation-delay: 1000ms;
          }
          
          .delay-500 {
            animation-delay: 500ms;
          }
        `}</style>

      </section>

      {/* ✅ LIGHTBOX MODAL */}
      {selectedImage && (
        <ImageLightbox 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </>
  );
}