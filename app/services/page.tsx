"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  Ear,
  Waves,
  Microscope,
  Brain,
  Speech,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Volume2,
  Mic,
  Clock,
  Scan,
  Headphones,
  Wind,
  X,
  Calendar,
  Phone,
  Award,
  Users,
  Star,
  AlertCircle,
  Video,
  Heart,
  User,
  BadgeCheck,
  Quote,
  Sparkles,
  Target,
  MessageCircle,
  PlayCircle,
  Loader2,
  Scissors,
  Bandage,
  Syringe,
} from "lucide-react";

// ✅ ICON MAP - MongoDB se aane wale icon names ko map karo
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
  Wind,
  Scan,
  AlertCircle,
  User,
};

const FallbackIcon = Stethoscope;

interface Service {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  shortDesc: string;
  image: string;
  icon: string;
  tag: string;
  color: string;
  bg: string;
  gradient: string;
  fullDesc: string;
  benefits: string[];
  procedures: string[];
  duration: string;
  recovery: string;
  successRate: string;
  featured: boolean;
  order: number;
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/services");
      const data = await response.json();

      console.log("📦 Services Data:", data);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <Loader2 size={48} className="text-teal-600 animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md">
          <p className="text-red-600">{error}</p>
          <button
            onClick={fetchServices}
            className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-hidden bg-white">

      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden pt-36 pb-28 lg:pt-44 lg:pb-36 min-h-[700px] flex items-center">
        
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/anu1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        
        <div className="absolute inset-0 z-[1] bg-white/40"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-teal-40/40 via-transparent to-cyan-50/30"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-white via-white/30 to-transparent"></div>
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl z-[1]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl z-[1]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-white/90 backdrop-blur-sm border border-teal-100/50 px-8 py-3 shadow-xl shadow-teal-500/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                <ShieldCheck size={18} className="text-teal-600" />
              </div>
              <span className="text-teal-700 font-bold tracking-[2px] uppercase text-sm">
                Premium ENT Care
              </span>
            </div>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-gray-900">
              Comprehensive ENT
              <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Care & Treatments
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg lg:text-xl leading-9 text-gray-700">
              State-of-the-art and tailored to your needs, our ENT services combine 
              advanced surgical expertise with compassionate patient care.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-xl hover:shadow-teal-500/25 hover:scale-[1.02] transition-all duration-300"
              >
                <Calendar size={20} />
                Book Consultation
              </a>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 font-bold rounded-full border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
                <PlayCircle size={20} className="text-teal-600" />
                Watch Video
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              {[
                { icon: Award, label: "Experience", value: "20+ Years" },
                { icon: Users, label: "Happy Patients", value: "50,000+" },
                { icon: Star, label: "Success Rate", value: "98%" },
                { icon: Heart, label: "Satisfaction", value: "4.9/5" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100/50 shadow-lg shadow-gray-200/20 hover:shadow-teal-500/10 transition-all duration-300"
                >
                  <stat.icon className="w-7 h-7 text-teal-600 mx-auto mb-1" />
                  <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 rounded-full bg-teal-50 px-8 py-3 text-teal-700 font-bold border border-teal-100">
              <Stethoscope size={18} />
              Our Specialties
            </div>
            <h2 className="mt-6 text-4xl lg:text-5xl font-black leading-tight text-gray-900">
              Advanced ENT
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Surgical Services
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Highly qualified team of ENT Specialist Doctors with expertise in advanced surgical procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || FallbackIcon;
              return (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_80px_rgba(13,148,136,0.12)] hover:border-teal-200 transition-all duration-500"
                >
                  <div className="relative h-48 bg-gradient-to-br from-teal-50/60 to-cyan-50/60 overflow-hidden">
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-xl shadow-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={40} />
                      </div>
                    </div>

                    {service.tag && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-teal-700 rounded-full border border-teal-100">
                          {service.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {service.shortDesc || service.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.procedures && service.procedures.slice(0, 2).map((proc: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">
                          {proc}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="mt-6 inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-4 transition-all duration-300 group/btn"
                    >
                      Know More
                      <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-teal-50/30 py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 rounded-full bg-teal-100 px-8 py-3 text-teal-800 font-bold">
              <ShieldCheck size={18} />
              Why Choose Our Clinic
            </div>
            <h2 className="mt-8 text-4xl lg:text-5xl font-black leading-tight text-gray-900">
              Excellence in
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                ENT Care
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Target, title: "Tailored Treatment Plans", desc: "Each patient is different. We offer personalized surgical and non-surgical procedures to improve your natural beauty and boost your confidence." },
              { icon: Award, title: "Expertise in Aesthetic Skills", desc: "Our expert plastic surgeon uses the latest techniques to deliver safe, precise and natural results." },
              { icon: Heart, title: "Confidential & Compassionate Care", desc: "We care about you and your comfort. We provide a private, caring and professional experience." },
              { icon: Sparkles, title: "Less Invasive Procedures", desc: "We offer advanced cosmetic treatments with reduced downtime, faster recovery and longer-lasting improvements." },
              { icon: BadgeCheck, title: "Demonstrated Surgical Expertise", desc: "Enjoy the benefits of skilled hands, evidence-based practices, and a commitment to balanced, harmonious results." },
              { icon: MessageCircle, title: "Consultations Made Easy", desc: "Schedule a face-to-face or virtual consultation to discuss your goals and receive professional guidance." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[30px] border border-gray-200 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(13,148,136,0.08)] hover:border-teal-200 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="mt-6 text-2xl font-black text-gray-900 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SURGICAL PROCEDURES ========== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-8 py-3 text-blue-700 font-bold">
              <Microscope size={18} />
              Surgical Expertise
            </div>
            <h2 className="mt-8 text-4xl lg:text-5xl font-black leading-tight text-gray-900">
              Advanced ENT Surgical
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Procedures & Techniques
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
            {services.map((service) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 hover:bg-teal-50 hover:border-teal-200 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <CheckCircle2 size={16} className="text-teal-600 flex-shrink-0" />
                <span className="text-gray-700 font-semibold text-sm group-hover:text-teal-600 transition-colors">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PATIENT REVIEWS ========== */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 rounded-full bg-teal-100 px-8 py-3 text-teal-800 font-bold">
              <Quote size={18} />
              Patient Reviews
            </div>
            <h2 className="mt-8 text-4xl lg:text-5xl font-black leading-tight text-gray-900">
              What Our
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Patients Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                name: "Patient Review",
                text: "One of the Best ENT Care Hospitals. Dr. Anupriya listens to you very patiently & gives you sufficient time to say your problems. She is very caring and soft spoken. She is a dedicated Doctor.",
                rating: 5,
              },
              {
                name: "Patient Review",
                text: "Excellent care and treatment. The staff is very professional and the doctor explained everything clearly. I felt very comfortable throughout my treatment.",
                rating: 5,
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] border border-gray-200 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white font-black">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">Verified Patient</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Book Your First Appointment
          </h2>
          <p className="mt-4 text-xl text-teal-100 max-w-2xl mx-auto">
            Book your consultation today and start your journey with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-teal-700 font-bold rounded-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Calendar size={20} />
              Book Consultation
            </a>
            <a
              href="tel:+917777802365"
              className="inline-flex items-center gap-3 px-10 py-4 bg-teal-700 text-white font-bold rounded-full hover:bg-teal-800 hover:shadow-xl transition-all duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ========== MODAL ========== */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <X size={22} />
              </button>

              <div className="relative">
                <div className="relative h-64 bg-gradient-to-r from-teal-600 to-cyan-600 overflow-hidden">
                  {selectedService.image && (
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover opacity-30"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(() => {
                      const ModalIcon = iconMap[selectedService.icon] || FallbackIcon;
                      return <ModalIcon className="w-24 h-24 text-white/30" />;
                    })()}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-3xl font-black text-white">{selectedService.title}</h3>
                    {selectedService.tag && (
                      <span className="mt-2 inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">
                        {selectedService.tag}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {selectedService.fullDesc || selectedService.desc}
                  </p>

                  {selectedService.procedures && selectedService.procedures.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-sm font-bold uppercase tracking-[2px] text-teal-600">Procedures</h4>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedService.procedures.map((proc: string, i: number) => (
                          <span key={i} className="px-4 py-2 bg-teal-50 text-teal-700 font-bold rounded-full text-sm">
                            {proc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedService.benefits && selectedService.benefits.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-sm font-bold uppercase tracking-[2px] text-teal-600">Benefits</h4>
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        {selectedService.benefits.map((benefit: string, i: number) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedService.recovery && (
                    <div className="mt-6 p-4 bg-teal-50 rounded-2xl border border-teal-100">
                      <div className="flex items-start gap-3">
                        <Clock size={20} className="text-teal-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-teal-800">Recovery Time</h4>
                          <p className="text-gray-700">{selectedService.recovery}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300"
                    >
                      <Calendar size={20} />
                      Book Consultation
                    </a>
                    <a
                      href="tel:+917777802365"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transition-all duration-300"
                    >
                      <Phone size={20} />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}