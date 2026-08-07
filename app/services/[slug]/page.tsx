"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock as ClockIcon,
  HeartPulse,
  Star,
  Phone,
  Calendar,
  MapPin,
  ShieldCheck,
  Award,
  Sparkles,
  ChevronRight,
  Loader2,
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
} from "lucide-react";

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
}

// ✅ FALLBACK DATA - Agar API fail ho toh ye use hoga
const FALLBACK_SERVICES: Record<string, Service> = {
  "cochlear-implant": {
    _id: "1",
    slug: "cochlear-implant",
    title: "Cochlear Implant",
    desc: "Advanced hearing restoration and rehabilitation procedures.",
    image: "/images/services/cochlear.jpg",
    icon: "Ear",
    tag: "Hearing Restoration",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    gradient: "from-emerald-500 to-teal-600",
    fullDesc: "Cochlear implants are electronic devices that bypass damaged parts of the ear and directly stimulate the auditory nerve. Dr. Anupriya Hajela Shah specializes in advanced cochlear implant procedures with successful outcomes. The surgery is performed under general anesthesia and takes approximately 2-3 hours. Most patients experience significant improvement in hearing within 3-6 months post-surgery.",
    benefits: [
      "Restores hearing in severe hearing loss",
      "Advanced surgical techniques",
      "Minimal scarring",
      "Quick recovery time",
      "Improved quality of life",
      "Long-lasting results"
    ],
    duration: "2-3 Hours",
    recovery: "3-6 Months",
    successRate: "95%"
  },
  "skull-base-surgery": {
    _id: "2",
    slug: "skull-base-surgery",
    title: "Skull Base Surgery",
    desc: "Modern endoscopic skull base and sinus procedures.",
    image: "/images/services/skull-base.jpg",
    icon: "Brain",
    tag: "Advanced Surgery",
    color: "from-violet-400 to-purple-500",
    bg: "bg-violet-50",
    gradient: "from-violet-500 to-purple-600",
    fullDesc: "Endoscopic skull base surgery is a minimally invasive procedure used to treat tumors and other abnormalities at the base of the skull. This advanced technique allows surgeons to access hard-to-reach areas through natural openings, reducing recovery time and complications.",
    benefits: [
      "Minimally invasive approach",
      "Reduced recovery time",
      "Less scarring",
      "Lower risk of complications",
      "Preserves surrounding tissue",
      "Faster return to normal activities"
    ],
    duration: "3-5 Hours",
    recovery: "2-4 Weeks",
    successRate: "92%"
  },
  "microscopic-ent-surgery": {
    _id: "3",
    slug: "microscopic-ent-surgery",
    title: "Microscopic ENT Surgery",
    desc: "Precision microscopic and endoscopic ENT surgeries.",
    image: "/images/services/microscopic.jpg",
    icon: "Microscope",
    tag: "Precision Surgery",
    color: "from-blue-400 to-cyan-500",
    bg: "bg-blue-50",
    gradient: "from-blue-500 to-cyan-600",
    fullDesc: "Microscopic ENT surgery uses high-powered microscopes to perform precise surgical procedures on the ear, nose, and throat. This advanced technique allows surgeons to see and operate on microscopic structures with exceptional precision, resulting in better outcomes and faster recovery.",
    benefits: [
      "High precision surgery",
      "Better visualization",
      "Reduced tissue damage",
      "Faster recovery",
      "Improved outcomes",
      "Minimal scarring"
    ],
    duration: "1-3 Hours",
    recovery: "1-3 Weeks",
    successRate: "94%"
  },
  "endoscopic-sinus-surgery": {
    _id: "4",
    slug: "endoscopic-sinus-surgery",
    title: "Endoscopic Sinus Surgery",
    desc: "Modern sinus treatments and surgeries.",
    image: "/images/services/sinus.jpg",
    icon: "Waves",
    tag: "Sinus Treatment",
    color: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
    gradient: "from-rose-500 to-pink-600",
    fullDesc: "Endoscopic sinus surgery is a minimally invasive procedure used to treat chronic sinusitis and other sinus conditions. Using a thin endoscope with a camera, the surgeon can visualize and treat sinus problems without external incisions, leading to faster recovery and less discomfort.",
    benefits: [
      "Minimally invasive",
      "No external scars",
      "Quick procedure",
      "Fast recovery",
      "Relief from chronic sinusitis",
      "Improved breathing"
    ],
    duration: "1-2 Hours",
    recovery: "1-2 Weeks",
    successRate: "90%"
  },
  "voice-phonosurgery": {
    _id: "5",
    slug: "voice-phonosurgery",
    title: "Voice & Phonosurgery",
    desc: "Voice restoration and phonosurgery procedures.",
    image: "/images/services/voice.jpg",
    icon: "Mic",
    tag: "Voice Restoration",
    color: "from-orange-400 to-amber-500",
    bg: "bg-orange-50",
    gradient: "from-orange-500 to-amber-600",
    fullDesc: "Phonosurgery is a specialized surgical procedure to treat voice disorders and restore normal voice function. Dr. Anupriya Hajela Shah uses advanced techniques to address vocal cord nodules, polyps, and other voice issues, helping patients regain their natural voice quality.",
    benefits: [
      "Restores natural voice",
      "Minimally invasive",
      "Quick recovery",
      "Improves vocal quality",
      "Treats voice disorders",
      "Long-lasting results"
    ],
    duration: "1-2 Hours",
    recovery: "1-4 Weeks",
    successRate: "93%"
  },
  "hearing-aid-services": {
    _id: "6",
    slug: "hearing-aid-services",
    title: "Hearing Aid Services",
    desc: "Advanced hearing solutions and aids.",
    image: "/images/services/hearing-aid.jpg",
    icon: "Volume2",
    tag: "Hearing Solutions",
    color: "from-sky-400 to-blue-500",
    bg: "bg-sky-50",
    gradient: "from-sky-500 to-blue-600",
    fullDesc: "Comprehensive hearing aid services including consultation, fitting, and follow-up care. Dr. Anupriya Hajela Shah provides personalized hearing solutions using state-of-the-art technology to ensure optimal hearing outcomes for patients with hearing loss.",
    benefits: [
      "Personalized fitting",
      "Advanced technology",
      "Comprehensive care",
      "Follow-up support",
      "Improved hearing",
      "Better quality of life"
    ],
    duration: "1-2 Hours",
    recovery: "Immediate",
    successRate: "96%"
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchService();
    }
  }, [slug]);

  const fetchService = async () => {
    try {
      setLoading(true);
      console.log("🔍 Fetching service:", slug);
      
      const response = await fetch(`/api/services/${slug}`);
      const data = await response.json();

      console.log("📦 Response:", data);

      if (data.success) {
        setService(data.data);
        setUsingFallback(false);
      } else {
        // ✅ Agar API fail ho toh fallback use karo
        console.log("⚠️ API failed, using fallback data");
        const fallback = FALLBACK_SERVICES[slug];
        if (fallback) {
          setService(fallback);
          setUsingFallback(true);
        } else {
          setError("Service not found");
        }
      }
    } catch (err) {
      console.error("❌ Error:", err);
      // ✅ Agar error aaye toh fallback use karo
      const fallback = FALLBACK_SERVICES[slug];
      if (fallback) {
        setService(fallback);
        setUsingFallback(true);
      } else {
        setError("Failed to load service");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
        <div className="text-center">
          <Loader2 size={48} className="text-teal-600 animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
        <div className="text-center max-w-md">
          <p className="text-red-600 text-lg">{error || "Service not found"}</p>
          <Link
            href="/services"
            className="mt-4 inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Stethoscope;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#06111f] to-[#0a1622] pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06111f]/90 via-[#0a1622]/80 to-[#06111f]/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors mb-6 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-4">
                <Award size={14} className="text-teal-300" />
                <span className="text-teal-300 text-xs font-bold tracking-wide uppercase">
                  {service.tag}
                </span>
                {usingFallback && (
                  <span className="ml-2 text-[10px] bg-amber-500/30 text-amber-300 px-2 py-0.5 rounded-full">
                    Demo Data
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                {service.title}
              </h1>

              <p className="mt-4 text-lg text-gray-300 max-w-2xl">{service.desc}</p>

              <div className="flex flex-wrap items-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <ClockIcon size={18} className="text-teal-400" />
                  <span className="text-sm">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <HeartPulse size={18} className="text-teal-400" />
                  <span className="text-sm">{service.recovery}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Star size={18} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-bold text-white">
                    {service.successRate} Success Rate
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-80 flex-shrink-0">
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-2xl shadow-teal-500/30`}
              >
                <Icon size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL CONTENT */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg">
                <h2 className="text-2xl font-black text-gray-900 mb-4">
                  About This Service
                </h2>
                <p className="text-gray-600 leading-relaxed">{service.fullDesc}</p>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg">
                <h2 className="text-2xl font-black text-gray-900 mb-4">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 bg-gray-50 rounded-xl p-3 border border-gray-100"
                    >
                      <CheckCircle2
                        size={18}
                        className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text flex-shrink-0 mt-0.5`}
                      />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                <h3 className="text-lg font-black text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Duration</span>
                    <span className="text-sm font-bold text-gray-800">
                      {service.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Recovery</span>
                    <span className="text-sm font-bold text-gray-800">
                      {service.recovery}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-500">Success Rate</span>
                    <span className="text-sm font-bold text-emerald-600">
                      {service.successRate}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100 shadow-lg">
                <h3 className="text-lg font-black text-gray-900 mb-3">
                  Book Appointment
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Schedule a consultation with our expert ENT specialist.
                </p>

                <Link
                  href="/contact"
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-bold text-center shadow-lg shadow-teal-500/30 hover:shadow-xl transition-all block mb-3`}
                >
                  <Calendar size={18} className="inline mr-2" />
                  Book Now
                </Link>

                <a
                  href="tel:+917777802365"
                  className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-bold text-center hover:border-teal-400 hover:text-teal-600 transition-all block"
                >
                  <Phone size={18} className="inline mr-2" />
                  Call Now: +91 77778 02365
                </a>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={18} className="text-teal-600" />
                  <h3 className="text-sm font-bold text-gray-900">Location</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Geetanjali Complex, near Mata Mandir Square, Kotra Sultanabad,
                  Bhopal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}