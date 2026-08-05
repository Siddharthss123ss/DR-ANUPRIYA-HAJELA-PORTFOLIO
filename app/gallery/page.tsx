'use client';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';
import { 
  Sparkles, 
  Camera, 
  Crown,
  Star,
  ZoomIn,
  X,
  Download,
  Share2,
  ChevronLeft,
  ChevronRight
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

// ============================================
// 🖼️ LIGHTBOX COMPONENT
// ============================================
function ImageLightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose 
}: { 
  images: GalleryImage[]; 
  currentIndex: number; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, index]);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleDownload = async () => {
    const image = images[index];
    if (!image) return;
    try {
      const response = await fetch(image.imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = image.title || 'image';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
      >
        <X size={28} />
      </button>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
        {index + 1} / {images.length}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative w-full max-w-6xl max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black/50">
          <img
            src={currentImage.imageUrl}
            alt={currentImage.title}
            className="w-full h-full object-contain"
          />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl"
        >
          <h3 className="text-2xl font-bold text-white">{currentImage.title}</h3>
          {currentImage.description && (
            <p className="text-gray-300/80 mt-1">{currentImage.description}</p>
          )}
          <span className="inline-block mt-2 text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full capitalize">
            {currentImage.category}
          </span>
        </motion.div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all"
            >
              <ChevronRight size={32} />
            </button>
          </>
        )}

        <div className="absolute bottom-24 right-4 flex flex-col gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); handleDownload(); }}
            className="text-white/70 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all"
            title="Download"
          >
            <Download size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (navigator.share) {
                navigator.share({
                  title: currentImage.title,
                  text: currentImage.description,
                  url: currentImage.imageUrl,
                });
              }
            }}
            className="text-white/70 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all"
            title="Share"
          >
            <Share2 size={20} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// 🎯 MAIN GALLERY PAGE
// ============================================
export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

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

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a1a] via-teal-950/90 to-[#0a0a1a]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-400 mx-auto"></div>
          <p className="text-amber-300/70 mt-4 font-light tracking-wider">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a1a] via-teal-950/90 to-[#0a0a1a]">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">😅</div>
          <h3 className="text-xl font-semibold text-amber-300">Oops! Something went wrong</h3>
          <p className="text-gray-400 mt-2">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-amber-500/20 border border-amber-400/30 rounded-lg text-amber-300 hover:bg-amber-500/30 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a1a] via-teal-950/90 to-[#0a0a1a]">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🖼️</div>
          <h3 className="text-xl font-semibold text-amber-300">No Images Yet</h3>
          <p className="text-gray-400 mt-2">Check back soon for our gallery</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-teal-950/90 to-[#0a0a1a] py-16 px-4">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-teal-500/10 to-amber-500/10 border border-amber-400/20 backdrop-blur-xl shadow-2xl shadow-amber-500/5 mb-6">
              <Crown size={16} className="text-amber-400" />
              <span className="text-amber-300/90 font-semibold tracking-[3px] uppercase text-xs">
                Royal Gallery
              </span>
              <Sparkles size={14} className="text-amber-400" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1]">
              <span className="text-white">Inside Our</span>
              <span className="block bg-gradient-to-r from-amber-200 via-teal-300 to-amber-200 bg-clip-text text-transparent mt-2">
                Medical Gallery
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400/30"></div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400/60"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60"></div>
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400/30"></div>
            </div>

            <p className="mt-5 text-gray-300/70 max-w-2xl mx-auto text-sm tracking-wide font-light">
              Experience world-class healthcare through our premium collection
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
              <Camera size={14} className="text-amber-400/70" />
              <span className="text-amber-300/50 text-xs font-light tracking-wider">
                {images.length} {images.length === 1 ? 'IMAGE' : 'IMAGES'}
              </span>
            </div>
          </motion.div>

          {/* ============================================ */}
          {/* ✅ GALLERY GRID - ULTRA FIXED HEIGHT */}
          {/* ============================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {images.map((image, index) => (
              <motion.div
                key={image._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-amber-500/5"
                onClick={() => openLightbox(index)}
              >
                {/* ✅ ULTRA FIX: Fixed height with bg color */}
                <div 
                  className="relative w-full overflow-hidden bg-gray-800/50"
                  style={{ height: '350px' }}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 line-clamp-1">
                      {image.title}
                    </h3>
                    {image.description && (
                      <p className="text-gray-300 text-sm truncate transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {image.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <span className="text-xs bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full capitalize">
                        {image.category}
                      </span>
                      {image.isFeatured && (
                        <span className="text-xs bg-gradient-to-r from-amber-400 to-amber-500 text-black px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                          <Star size={10} className="fill-black" />
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-black/40 backdrop-blur-sm p-3 rounded-full border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Featured Badge - Top */}
                  {image.isFeatured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Star size={10} className="fill-black" />
                      FEATURED
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImageIndex !== null && (
        <ImageLightbox
          images={images}
          currentIndex={selectedImageIndex}
          isOpen={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </>
  );
}