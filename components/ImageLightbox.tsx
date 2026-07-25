'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
  images: { _id: string; imageUrl: string; title: string; description?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({ images, currentIndex, isOpen, onClose }: ImageLightboxProps) {
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
        >
          <X size={28} />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
          {index + 1} / {images.length}
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-6xl max-h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={currentImage.imageUrl}
              alt={currentImage.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Image Info */}
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
          </motion.div>

          {/* Navigation Buttons */}
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

          {/* Action Buttons */}
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
    </AnimatePresence>
  );
}