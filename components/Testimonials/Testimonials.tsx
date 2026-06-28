"use client";

import { useState, useEffect } from "react";
import Counter from "@/components/Counter/Counter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  Users,
  Award,
  HeartPulse,
  Sparkles,
  TrendingUp,
  Calendar,
  Smile,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// Real patient reviews with city names only (no fake names)
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

const stats = [
  {
    title: "Happy Patients",
    icon: Smile,
    value: 5000,
    suffix: "+",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Years of Excellence",
    icon: Calendar,
    value: 15,
    suffix: "+",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Success Rate",
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-cyan-50/40 to-white">
      
      {/* Premium Light Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* PREMIUM STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative p-8 text-center">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={34} />
                </div>
                
                <div className="mt-6">
                  <div className="text-5xl lg:text-6xl font-black text-slate-900">
                    <Counter end={item.value} suffix={item.suffix} />
                  </div>
                </div>
                
                <p className="mt-3 text-base font-bold text-gray-600 tracking-wide">
                  {item.title}
                </p>
                
                <div className="mt-6 w-12 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HEADING SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-5 py-2.5 mb-6 border border-cyan-100">
            <Star size={14} className="text-cyan-600" />
            <span className="text-cyan-700 font-bold text-sm tracking-wide">
              Patient Testimonials
            </span>
            <Sparkles size={12} className="text-cyan-600" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Trusted by
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mt-2">
              Thousands of Patients
            </span>
          </h2>

          {/* Google Reviews Badge */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <Star className="fill-yellow-400 text-yellow-400" size={16}/>
              <span className="font-semibold text-slate-700 text-sm">
                4.9/5 Average Rating
              </span>
              <ExternalLink size={12} className="text-gray-400" />
            </div>
          </div>

          <p className="mt-6 text-base lg:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
            Exceptional ENT care with compassionate treatment,
            modern diagnosis, and patient-focused healthcare experiences.
          </p>
        </motion.div>

        {/* PREMIUM TESTIMONIALS CAROUSEL - Larger & Premium */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons - Bigger */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 lg:-ml-16 z-20 w-14 h-14 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 group"
          >
            <ChevronLeft size={24} className="group-hover:text-white text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 lg:-mr-16 z-20 w-14 h-14 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 group"
          >
            <ChevronRight size={24} className="group-hover:text-white text-gray-600" />
          </button>

          {/* Carousel Container - Larger Quote Icon */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl p-10 lg:p-14 shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 to-blue-50/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quote Icon - Larger */}
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg">
                  <Quote size={36} />
                </div>
              </div>

              {/* Star Ratings */}
              <div className="flex gap-1 mt-6 relative z-10">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-6 text-gray-700 leading-relaxed text-lg lg:text-xl relative z-10">
                “{currentTestimonial.review}”
              </p>

              {/* Patient Info - Anonymous */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                  <Users size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-slate-800 text-lg">
                    Patient from {currentTestimonial.location}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    <p className="text-cyan-600 text-sm font-medium">
                      Verified Review
                    </p>
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    <p className="text-gray-400 text-sm">
                      {currentTestimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 5000);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-8 h-2 bg-gradient-to-r from-cyan-600 to-blue-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
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
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100">
            <HeartPulse size={14} className="text-cyan-600" />
            <span className="text-xs text-gray-700 font-semibold">
              Real reviews from 5000+ verified patients across Madhya Pradesh
            </span>
            <HeartPulse size={14} className="text-cyan-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}