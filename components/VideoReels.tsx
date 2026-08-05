// components/VideoSlider.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Star,
  Microscope,
  Ear,
  Brain,
  Stethoscope,
  Clock,
  Shield,
  Award,
} from "lucide-react";

// 📌 4 VIDEOS
const doctorVideos = [
  {
    id: 1,
    title: "Allergy Testing & Treatment",
    desc: "Advanced hearing restoration with precision",
    icon: Ear,
    videoUrl: "/videos/doc1.mp4",
    badge: "Latest Technique",
  },
  {
    id: 2,
    title: "OAE NEWBORN HEARIING ASSESSMENT",
    icon: Brain,
    videoUrl: "/videos/doc2.mp4",
    duration: "3:15",
    badge: "Highly Effective",
  },
  {
    id: 3,
    title: "Operation",
    icon: Stethoscope,
    videoUrl: "/videos/doc3.mp4",
    duration: "1:45",
    badge: "State of Art",
  },
  {
    id: 4,
    title: "Microscopic Ear Surgery",
    icon: Microscope,
    videoUrl: "/videos/micro.mp4",
    duration: "4:00",
    badge: "Expert Care",
  },
];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalVideos = doctorVideos.length;
  const currentVideo = doctorVideos[currentIndex];

  // ⏱️ VIDEO DURATION TRACK - Video jitni lambi utni chale
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      const duration = video.duration;
      setVideoDuration(duration);
      console.log(`📹 Video duration: ${duration} seconds`);
    };

    const handleTimeUpdate = () => {
      if (video.duration) {
        const progress = (video.currentTime / video.duration) * 100;
        setVideoProgress(progress);
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentIndex]);

  // ⏱️ AUTO-SLIDE - Video khatam hone par ya max 15 sec
  useEffect(() => {
    if (!isPlaying || isHovering) return;

    const video = videoRef.current;
    if (!video) return;

    // Clear any existing timer
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
      slideTimerRef.current = null;
    }

    let elapsedTime = 0;
    const MAX_DURATION = 15; // Maximum 15 seconds

    const checkVideo = () => {
      if (!video) return;

      // Agar video duration available hai
      if (video.duration > 0) {
        const videoLen = video.duration;
        
        // 🔥 LOGIC: Video jitni lambi hai utni chale, lekin max 15 sec
        const playTime = Math.min(videoLen, MAX_DURATION);
        
        console.log(`📊 Video: ${videoLen}s, Playing: ${playTime}s`);

        // Video end hone par ya max time hone par next pe jao
        const onTimeUpdate = () => {
          elapsedTime = video.currentTime;
          
          // Agar video end ho gayi ya max time ho gaya
          if (video.ended || elapsedTime >= playTime) {
            console.log(`⏭️ Moving to next video at ${elapsedTime}s`);
            
            // Video ko pause karo
            video.pause();
            
            // Next video pe jao
            goToNext();
            
            // Event listener hatao
            video.removeEventListener('timeupdate', onTimeUpdate);
          }
        };

        video.addEventListener('timeupdate', onTimeUpdate);

        // Cleanup function
        return () => {
          video.removeEventListener('timeupdate', onTimeUpdate);
        };
      } else {
        // Agar video duration nahi mili toh 5 second baad check karo
        setTimeout(checkVideo, 1000);
      }
    };

    // Start checking
    const timeoutId = setTimeout(checkVideo, 500);
    slideTimerRef.current = timeoutId;

    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
        slideTimerRef.current = null;
      }
    };
  }, [isPlaying, isHovering, currentIndex]);

  // 🎬 Video control
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isPlaying, currentIndex]);

  // 🔄 Reset video on slide change
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      setVideoProgress(0);
      if (isPlaying) {
        video.play().catch(() => {});
      }
    }
  }, [currentIndex]);

  // 👈👉 Arrow Button Functions
  const goToNext = () => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
      slideTimerRef.current = null;
    }
    setCurrentIndex((prev) => (prev + 1) % totalVideos);
  };

  const goToPrev = () => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
      slideTimerRef.current = null;
    }
    setCurrentIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
  };

  const goToSlide = (index: number) => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
      slideTimerRef.current = null;
    }
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  // 📱 Touch/Swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }
    if (touchStart - touchEnd < -50) {
      goToPrev();
    }
  };

  const IconComponent = currentVideo.icon;
  
  // Display duration for badge
  const displayDuration = videoDuration > 0 ? Math.min(Math.round(videoDuration), 15) : 0;

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-violet-200/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100/50 shadow-sm mb-3 sm:mb-4">
            <Microscope size={12} className="text-teal-600" />
            <span className="text-[10px] sm:text-xs font-semibold text-teal-700 tracking-widest uppercase">
              Our Procedures
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Watch Our{" "}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Advanced Surgeries
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-transparent to-teal-400" />
            <div className="flex items-center gap-1 sm:gap-2">
              <Star size={14} className="text-teal-500 fill-teal-500/30" />
              <span className="text-xs sm:text-sm text-gray-400 font-medium">See the precision</span>
              <Star size={14} className="text-teal-500 fill-teal-500/30" />
            </div>
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-l from-transparent to-teal-400" />
          </div>
        </motion.div>

        {/* 🎥 Video Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/20 border border-white/10">
            
            {/* 📐 FIXED 16:9 ASPECT RATIO */}
            <div 
              className="relative w-full"
              style={{
                aspectRatio: '16 / 9',
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <video
                ref={videoRef}
                key={currentIndex}
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src={currentVideo.videoUrl} type="video/mp4" />
              </video>

              {/* ⏱️ Duration Badge - Shows actual play time */}
              <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-1.5 border border-teal-400/30">
                <span className="text-[10px] sm:text-xs font-medium text-teal-300 flex items-center gap-1.5">
                  <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                  {videoDuration > 0 ? (
                    <>⏱️ {Math.min(Math.round(videoDuration), 15)}s / max 15s</>
                  ) : (
                    <>⏱️ Loading...</>
                  )}
                </span>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

              {/* 🔢 Slide Counter - Top Left */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-black/50 backdrop-blur-md rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 border border-white/10">
                <span className="text-[10px] sm:text-xs font-medium text-white">
                  {currentIndex + 1} / {totalVideos}
                </span>
              </div>

              {/* 🏷️ Category - Top Right */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 bg-black/50 backdrop-blur-md rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 border border-white/10 flex items-center gap-1 sm:gap-1.5">
                <IconComponent size={10} className="text-teal-400" />
                <span className="text-[10px] sm:text-xs font-medium text-white">
                  {currentVideo.category}
                </span>
              </div>

              {/* 📝 Content - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white z-10">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-400/30 mb-1 sm:mb-1.5">
                      <Award size={8} className="text-teal-400" />
                      <span className="text-[8px] sm:text-[10px] font-medium text-teal-300 truncate">
                        {currentVideo.badge}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xs sm:text-sm lg:text-lg xl:text-xl font-bold text-white leading-tight truncate">
                      {currentVideo.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="hidden sm:block text-xs sm:text-sm text-white/70 mt-0.5 sm:mt-1 line-clamp-1">
                      {currentVideo.desc}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-2 sm:gap-3 mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-white/50">
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Clock size={10} className="sm:w-3 sm:h-3" />
                        {currentVideo.duration}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="hidden sm:flex items-center gap-1">
                        <Shield size={12} />
                        Advanced Care
                      </span>
                    </div>
                  </div>

                  {/* 🎮 Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    {isPlaying ? (
                      <Pause size={16} className="sm:w-5 sm:h-5 text-white" />
                    ) : (
                      <Play size={16} className="sm:w-5 sm:h-5 text-white ml-0.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* 🔇 Mute Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-16 sm:bottom-20 lg:bottom-24 right-3 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                {isMuted ? (
                  <VolumeX size={14} className="sm:w-[18px] sm:h-[18px] text-white" />
                ) : (
                  <Volume2 size={14} className="sm:w-[18px] sm:h-[18px] text-white" />
                )}
              </button>

              {/* 👈👉 ARROW BUTTONS */}
              <button
                onClick={goToPrev}
                className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-black/60 backdrop-blur-md border-2 border-white/30 items-center justify-center hover:bg-teal-500 hover:border-teal-400 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous video"
              >
                <ChevronLeft size={20} className="xl:w-6 xl:h-6 text-white" />
              </button>

              <button
                onClick={goToNext}
                className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-black/60 backdrop-blur-md border-2 border-white/30 items-center justify-center hover:bg-teal-500 hover:border-teal-400 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next video"
              >
                <ChevronRight size={20} className="xl:w-6 xl:h-6 text-white" />
              </button>

              {/* 📊 Video Progress Bar - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-400 to-cyan-400"
                  initial={{ width: "0%" }}
                  animate={{ width: `${videoProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* 📊 Slide Progress Bar - Bottom */}
              <div className="absolute bottom-[4px] left-0 right-0 h-0.5 bg-white/5 z-20">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-300 to-cyan-300"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentIndex + 1) / totalVideos) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* 🟢 Dots Navigation */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {doctorVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 sm:w-8 h-1.5 sm:h-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                    : "w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-gray-300 rounded-full hover:bg-gray-400"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>

          {/* 📌 Video Titles */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 px-2">
            {doctorVideos.map((video, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`text-[9px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium shadow-lg shadow-teal-500/30"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {video.title.length > 15 ? video.title.substring(0, 15) + "..." : video.title}
              </button>
            ))}
          </div>

          {/* 📱 Swipe Hint */}
          <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-3 sm:mt-4 lg:hidden">
            <span className="inline-flex items-center gap-1">
              <ChevronLeft size={12} />
              Swipe to browse
              <ChevronRight size={12} />
            </span>
          </p>
        </motion.div>

        {/* 🏆 Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 lg:mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white shadow-xl border border-gray-100/50">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Award size={16} className="sm:w-5 sm:h-5 text-teal-600" />
              <span className="text-xs sm:text-sm font-semibold text-gray-900">500+ Surgeries</span>
            </div>
            <div className="hidden sm:block w-px h-6 sm:h-8 bg-gray-200" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Shield size={16} className="sm:w-5 sm:h-5 text-teal-600" />
              <span className="text-xs sm:text-sm font-semibold text-gray-900">98% Success</span>
            </div>
            <div className="hidden sm:block w-px h-6 sm:h-8 bg-gray-200" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star size={16} className="sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
              <span className="text-xs sm:text-sm font-semibold text-gray-900">4.9/5</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}