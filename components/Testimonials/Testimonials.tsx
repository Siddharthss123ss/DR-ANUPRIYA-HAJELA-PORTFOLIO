"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  Users,
  HeartPulse,
  Sparkles,
  TrendingUp,
  Calendar,
  Smile,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Clock,
  X,
  Eye,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

// Real patient reviews
const testimonials = [
  {
    id: 1,
    review: "Excellent diagnosis and treatment. Dr. Anupriya explained everything clearly and the care was outstanding. Highly recommend for any ENT issues.",
    location: "Bhopal",
    rating: 5,
    date: "March 2024",
  },
  {
    id: 2,
    review: "Very professional and compassionate ENT specialist. The clinic experience felt premium and comfortable. My sinus problem is completely resolved.",
    location: "Indore",
    rating: 5,
    date: "February 2024",
  },
  {
    id: 3,
    review: "Highly experienced doctor with modern treatment methods. Recovery was smooth and treatment was excellent. Best ENT specialist in Bhopal.",
    location: "Bhopal",
    rating: 5,
    date: "January 2024",
  },
  {
    id: 4,
    review: "Best ENT specialist in Bhopal! My cochlear implant surgery was successful. Thank you doctor for giving me the gift of hearing.",
    location: "Raisen",
    rating: 5,
    date: "December 2023",
  },
  {
    id: 5,
    review: "Professional care and advanced treatment. The staff is very supportive and helpful. Dr. Anupriya is truly an expert in her field.",
    location: "Vidisha",
    rating: 5,
    date: "November 2023",
  },
  {
    id: 6,
    review: "Dr. Anupriya is very patient and explains everything in detail. My vertigo issue is completely cured. Highly recommended!",
    location: "Bhopal",
    rating: 5,
    date: "October 2023",
  },
];

// All patient reviews
const allPatientReviews = [
  {
    id: 1,
    location: "Bhopal",
    review: "Excellent diagnosis and treatment. Dr. Anupriya explained everything clearly and the care was outstanding. Highly recommend for any ENT issues.",
    rating: 5,
    date: "March 2024",
    treatment: "General ENT Consultation",
  },
  {
    id: 2,
    location: "Indore",
    review: "Very professional and compassionate ENT specialist. The clinic experience felt premium and comfortable. My sinus problem is completely resolved.",
    rating: 5,
    date: "February 2024",
    treatment: "Sinus Treatment",
  },
  {
    id: 3,
    location: "Bhopal",
    review: "Highly experienced doctor with modern treatment methods. Recovery was smooth and treatment was excellent. Best ENT specialist in Bhopal.",
    rating: 5,
    date: "January 2024",
    treatment: "ENT Surgery",
  },
  {
    id: 4,
    location: "Raisen",
    review: "Best ENT specialist in Bhopal! My cochlear implant surgery was successful. Thank you doctor for giving me the gift of hearing.",
    rating: 5,
    date: "December 2023",
    treatment: "Cochlear Implant",
  },
  {
    id: 5,
    location: "Vidisha",
    review: "Professional care and advanced treatment. The staff is very supportive and helpful. Dr. Anupriya is truly an expert in her field.",
    rating: 5,
    date: "November 2023",
    treatment: "General ENT Care",
  },
  {
    id: 6,
    location: "Bhopal",
    review: "Dr. Anupriya is very patient and explains everything in detail. My vertigo issue is completely cured. Highly recommended!",
    rating: 5,
    date: "October 2023",
    treatment: "Vertigo Treatment",
  },
  {
    id: 7,
    location: "Jabalpur",
    review: "Amazing experience! The staff is very caring and Dr. Anupriya is a true expert. My ear infection is completely cured.",
    rating: 5,
    date: "September 2023",
    treatment: "Ear Infection",
  },
  {
    id: 8,
    location: "Gwalior",
    review: "Dr. Anupriya is the best ENT specialist I've ever consulted. She explains everything in detail and the treatment is very effective.",
    rating: 5,
    date: "August 2023",
    treatment: "ENT Consultation",
  },
];

// ✅ STATS - Direct Numbers
const stats = [
  {
    title: "Happy Patients",
    icon: Smile,
    value: "20,000+",
    color: "from-teal-500 to-cyan-500",
    borderColor: "border-teal-200",
    description: "Patients trust our care",
  },
  {
    title: "Years of Excellence",
    icon: Calendar,
    value: "12+",
    color: "from-teal-600 to-cyan-600",
    borderColor: "border-teal-200",
    description: "Experience you can trust",
  },
  {
    title: "Success Rate",
    icon: TrendingUp,
    value: "90%",
    color: "from-teal-500 to-cyan-500",
    borderColor: "border-teal-200",
    description: "Positive outcomes",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [showAllReviewsModal, setShowAllReviewsModal] = useState(false);
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 7000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 7000);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const currentTestimonial = testimonials[currentIndex];

  const toggleExpandReview = (id: number) => {
    setExpandedReview(expandedReview === id ? null : id);
  };

  return (
    <>
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 overflow-hidden bg-gradient-to-b from-white via-teal-50/30 to-white">
        
        {/* ✅ Premium Light Glows - Hidden on Mobile */}
        <div className="hidden md:block absolute top-0 left-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-br from-teal-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute bottom-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-tl from-teal-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          
          {/* ========== STATS CARDS ========== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-28">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={
                  isDesktop
                    ? {
                        y: -10,
                        scale: 1.03,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }
                    : {}
                }
                className={`group relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl shadow-teal-500/10 border ${item.borderColor} transition-all duration-500 cursor-pointer`}
              >
                {/* Animated Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-full group-hover:translate-x-full"></div>
                
                <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 text-center">
                  {/* Icon */}
                  <motion.div 
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg shadow-teal-500/20`}
                    whileHover={
                      isDesktop
                        ? {
                            scale: 1.15,
                            rotate: [0, -5, 5, -5, 0],
                            transition: { duration: 0.5 }
                          }
                        : {}
                    }
                  >
                    <item.icon size={28} />
                  </motion.div>
                  
                  {/* Number - Dark Text */}
                  <div className="mt-3 sm:mt-4 md:mt-5">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
                      {item.value}
                    </div>
                  </div>
                  
                  {/* Title - Dark Text */}
                  <p className="mt-1.5 sm:mt-2 text-sm sm:text-base font-bold text-gray-800">
                    {item.title}
                  </p>
                  
                  {/* Description - Dark Text */}
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500">
                    {item.description}
                  </p>
                  
                  {/* Animated Bottom Bar */}
                  <motion.div 
                    className={`mt-4 sm:mt-5 md:mt-6 h-1.5 mx-auto bg-gradient-to-r ${item.color} rounded-full`}
                    initial={{ width: "2.5rem" }}
                    whileHover={isDesktop ? { width: "5rem" } : {}}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />

                  {/* Hover Arrow */}
                  {isDesktop && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4"
                    >
                      <ArrowRight size={18} className="text-teal-500" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ========== HEADING SECTION ========== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 mb-3 sm:mb-4 md:mb-6 border border-teal-100">
              <Star size={12} className="text-teal-600" />
              <span className="text-teal-700 font-bold text-[10px] sm:text-xs md:text-sm tracking-wide">
                Patient Testimonials
              </span>
              <Sparkles size={10} className="text-teal-600" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Trusted by
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mt-1">
                Thousands of Patients
              </span>
            </h2>

            {/* Google Reviews Badge */}
            <div className="flex justify-center mt-3 sm:mt-4 md:mt-6">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-white border border-teal-200 shadow-sm">
                <Star className="fill-yellow-400 text-yellow-400" size={12} />
                <span className="font-semibold text-gray-700 text-[10px] sm:text-xs md:text-sm">
                  4.9/5 Average Rating
                </span>
                <ExternalLink size={10} className="text-teal-400" />
              </div>
            </div>

            <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto px-4">
              Exceptional ENT care with compassionate treatment,
              modern diagnosis, and patient-focused healthcare experiences.
            </p>
          </motion.div>

          {/* ========== TESTIMONIALS CAROUSEL ========== */}
          <div className="relative max-w-5xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute -left-2 sm:-left-3 md:-left-4 lg:-left-8 xl:-left-16 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-xl border border-teal-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 hover:text-white hover:border-transparent transition-all duration-300 group"
            >
              <ChevronLeft size={16} className="group-hover:text-white text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute -right-2 sm:-right-3 md:-right-4 lg:-right-8 xl:-right-16 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-xl border border-teal-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 hover:text-white hover:border-transparent transition-all duration-300 group"
            >
              <ChevronRight size={16} className="group-hover:text-white text-gray-600" />
            </button>

            {/* ✅ Carousel Container - Lighter animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 xl:p-14 shadow-2xl shadow-teal-500/10 border border-teal-100/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-cyan-50/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote Icon */}
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                    <Quote size={20} />
                  </div>
                </div>

                {/* Star Ratings */}
                <div className="flex gap-0.5 sm:gap-1 mt-3 sm:mt-4 md:mt-6 relative z-10">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mt-3 sm:mt-4 md:mt-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl relative z-10">
                  “{currentTestimonial.review}”
                </p>

                {/* Patient Info */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6 lg:mt-8 pt-3 sm:pt-4 md:pt-5 lg:pt-6 border-t border-teal-100/50 relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center text-white font-black text-sm sm:text-base md:text-lg lg:text-xl shadow-md shadow-teal-500/20">
                    <Users size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg truncate">
                      Patient from {currentTestimonial.location}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-teal-500"></div>
                      <p className="text-teal-600 text-[10px] sm:text-xs md:text-sm font-medium">
                        Verified Review
                      </p>
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-teal-500"></div>
                      <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">
                        {currentTestimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 md:gap-2 mt-4 sm:mt-5 md:mt-6 lg:mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setAutoplay(false);
                    setTimeout(() => setAutoplay(true), 7000);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? "w-4 sm:w-5 md:w-6 lg:w-8 h-1.5 sm:h-2 bg-gradient-to-r from-teal-600 to-cyan-600"
                      : "w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-teal-200 hover:bg-teal-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trust Badge Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16"
          >
            <motion.button
              onClick={() => setShowAllReviewsModal(true)}
              whileHover={isDesktop ? { scale: 1.03 } : {}}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all duration-300 group"
            >
              <HeartPulse size={12} className="text-teal-600 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-semibold whitespace-nowrap">
                Read all {allPatientReviews.length}+ verified reviews
              </span>
              <Eye size={12} className="text-teal-600 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ========== ALL REVIEWS MODAL (No changes - Perfect) ========== */}
      <AnimatePresence>
        {showAllReviewsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setShowAllReviewsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl sm:rounded-3xl md:rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-100 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 truncate">
                      Patient Reviews
                    </h2>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-0.5 sm:mt-1">
                      {allPatientReviews.length} verified reviews from our patients
                    </p>
                  </div>
                  <button
                    onClick={() => setShowAllReviewsModal(false)}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center flex-shrink-0"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Reviews List */}
              <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {allPatientReviews.map((review) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: review.id * 0.05 }}
                      whileHover={isDesktop ? { y: -4 } : {}}
                      className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300"
                    >
                      {/* Rating */}
                      <div className="flex items-center gap-0.5 sm:gap-1 mb-1.5 sm:mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <div className="relative">
                        <p className={`text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed ${expandedReview === review.id ? '' : 'line-clamp-3'}`}>
                          "{review.review}"
                        </p>
                        {review.review.length > 100 && (
                          <button
                            onClick={() => toggleExpandReview(review.id)}
                            className="text-teal-600 text-[10px] sm:text-xs md:text-sm font-semibold mt-1 hover:text-teal-700 transition-colors inline-flex items-center gap-1"
                          >
                            {expandedReview === review.id ? (
                              <>
                                Show Less <ChevronUp size={12} />
                              </>
                            ) : (
                              <>
                                Read More <ChevronDown size={12} />
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Patient Info */}
                      <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
                        <div className="flex items-center justify-between flex-wrap gap-1 sm:gap-2">
                          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center text-white font-black text-[10px] sm:text-xs flex-shrink-0">
                              <Users size={10} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 truncate">
                                Patient from {review.location}
                              </p>
                              <div className="flex items-center gap-1 text-[8px] sm:text-[10px] md:text-xs text-gray-400">
                                <Clock size={8} />
                                <span>{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-teal-500"></div>
                            <span className="text-[8px] sm:text-[10px] md:text-xs text-teal-600 font-medium">Verified</span>
                          </div>
                        </div>
                        {review.treatment && (
                          <div className="mt-1 sm:mt-2">
                            <span className="inline-block px-1.5 sm:px-2 py-0.5 bg-teal-50 text-teal-700 text-[8px] sm:text-[10px] md:text-xs font-semibold rounded-full border border-teal-200 truncate max-w-full">
                              {review.treatment}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white/95 backdrop-blur border-t border-gray-100 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-gray-900 text-xs sm:text-sm">4.9/5</span>
                  </div>
                  <span className="text-gray-400 text-[10px] sm:text-xs">•</span>
                  <span className="text-gray-500 text-[10px] sm:text-xs md:text-sm">
                    {allPatientReviews.length} reviews
                  </span>
                </div>
                <button
                  onClick={() => setShowAllReviewsModal(false)}
                  className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-full text-[10px] sm:text-xs md:text-sm hover:shadow-lg transition-all duration-300"
                >
                  Close Reviews
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}