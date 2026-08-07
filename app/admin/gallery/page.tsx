'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Search, 
  X, 
  Calendar, 
  MapPin, 
  User, 
  Tag,
  Sparkles,
  ZoomIn,
  Clock,
  Filter
} from 'lucide-react';

interface GalleryImage {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  isFeatured: boolean;
  createdAt: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch('/api/gallery');
      const data = await res.json();
      
      if (data.success) {
        setImages(data.data || []);
        // ✅ FIX: Type assertion to fix TypeScript error
       const galleryImages = data.data as GalleryImage[];

setImages(galleryImages);

const uniqueCategories = Array.from(
  new Set(galleryImages.map((img) => img.category))
);

setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredImages = images.filter((image) => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          image.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 font-medium">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50/30 via-white to-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 via-cyan-600/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 mb-4">
              <Sparkles size={16} className="text-teal-700" />
              <span className="text-teal-800 font-bold text-xs tracking-[0.2em] uppercase">Our Gallery</span>
              <Sparkles size={16} className="text-teal-700" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              ENT Care
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Visual Journey
              </span>
            </h1>
            
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our advanced ENT procedures, state-of-the-art facilities, and compassionate care
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-200">
                <span className="font-bold text-teal-700">{images.length}</span>
                <span className="text-gray-600 text-sm">Images</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-200">
                <span className="font-bold text-teal-700">{categories.length}</span>
                <span className="text-gray-600 text-sm">Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="py-6 bg-white/80 backdrop-blur-sm border-y border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 w-full sm:w-auto">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium text-sm whitespace-nowrap transition-all capitalize ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/25'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold text-gray-900">No images found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image)}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-gray-200"
                >
                  {/* Image Container with relative positioning */}
                  <div className="relative w-full aspect-[4/3] bg-gray-100">
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority={index < 4}
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="w-full">
                        <h3 className="text-white font-bold text-lg line-clamp-1">{image.title}</h3>
                        {image.description && (
                          <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full capitalize">
                            {image.category}
                          </span>
                          {image.isFeatured && (
                            <span className="px-3 py-1 bg-amber-400/80 backdrop-blur-sm text-black text-xs font-bold rounded-full">
                              ⭐ Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full capitalize">
                        {image.category}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {image.isFeatured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-amber-400 text-black text-xs font-bold rounded-full shadow-lg">
                          ⭐
                        </span>
                      </div>
                    )}

                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                        <ZoomIn size={24} className="text-teal-600" />
                      </div>
                    </div>
                  </div>

                  {/* Content below image */}
                  <div className="p-4">
                    <h3 className="text-gray-900 font-semibold text-sm line-clamp-1">{image.title}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-gray-500 text-xs capitalize">{image.category}</span>
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Clock size={12} />
                        {new Date(image.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-8 text-center text-gray-500 text-sm">
            Showing {filteredImages.length} of {images.length} images
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-all duration-300"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Image Container */}
            <div className="relative w-full bg-gray-900" style={{ height: '60vh', maxHeight: '600px' }}>
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
                priority
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 bg-white">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-black text-gray-900">
                    {selectedImage.title}
                  </h2>
                  {selectedImage.description && (
                    <p className="mt-2 text-gray-600 text-lg leading-relaxed">
                      {selectedImage.description}
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 font-bold rounded-full text-sm capitalize border border-teal-200">
                    {selectedImage.category}
                  </span>
                  {selectedImage.isFeatured && (
                    <span className="px-4 py-2 bg-amber-50 text-amber-700 font-bold rounded-full text-sm border border-amber-200">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-500 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(selectedImage.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={16} />
                  <span className="capitalize">{selectedImage.category}</span>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    const currentIndex = filteredImages.findIndex(img => img._id === selectedImage._id);
                    if (currentIndex > 0) {
                      setSelectedImage(filteredImages[currentIndex - 1]);
                    }
                  }}
                  className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={filteredImages.findIndex(img => img._id === selectedImage._id) === 0}
                >
                  ← Previous
                </button>
                <button
                  onClick={() => {
                    const currentIndex = filteredImages.findIndex(img => img._id === selectedImage._id);
                    if (currentIndex < filteredImages.length - 1) {
                      setSelectedImage(filteredImages[currentIndex + 1]);
                    }
                  }}
                  className="flex-1 px-4 py-2.5 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={filteredImages.findIndex(img => img._id === selectedImage._id) === filteredImages.length - 1}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}