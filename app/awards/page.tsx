// app/awards/page.tsx
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Award from "@/models/Award";
import { 
  Trophy, 
  Award as AwardIcon, 
  Sparkles, 
  Star, 
  Calendar,
  ArrowUpRight,
  Gem,
  Crown,
  ShieldCheck,
  Users,
  TrendingUp,
  Medal,
  ChevronRight,
  Zap,
  Heart,
  CheckCircle
} from "lucide-react";

export const metadata = {
  title: "Awards & Achievements | Dr. Anupriya Hajela Shah",
  description:
    "Explore awards, fellowships, certifications and professional achievements of Dr. Anupriya Hajela Shah.",
};

export default async function AwardsPage() {
  await connectDB();

  const awards = await Award.find().sort({ year: -1 }).lean();

  // Stats
  const stats = [
    { icon: Trophy, value: "15+", label: "Awards & Honors", color: "from-amber-400 to-orange-500" },
    { icon: Medal, value: "Gold", label: "MS Gold Medalist", color: "from-yellow-400 to-amber-500" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", color: "from-emerald-400 to-teal-500" },
    { icon: Users, value: "5000+", label: "Happy Patients", color: "from-blue-400 to-cyan-500" },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* ============================================= */}
      {/* HERO - ULTRA PREMIUM WITH GLOW EFFECTS */}
      {/* ============================================= */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-cyan-900">
        
        {/* Premium Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-10 right-20 w-4 h-4 bg-amber-400/40 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-5 h-5 bg-teal-400/30 rounded-full blur-md animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-amber-300/20 rounded-full blur-sm animate-pulse delay-1000"></div>

        {/* Golden Lines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Stats Row - More Premium */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 mb-12">
            {stats.map((item, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} shadow-lg shadow-amber-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500`}>
                    <item.icon size={22} />
                  </div>
                </div>
                <p className="mt-2 text-2xl font-black text-white">{item.value}</p>
                <p className="text-xs text-white/70 font-medium">{item.label}</p>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Main Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-teal-500/20 border border-amber-400/30 backdrop-blur-xl">
            <Crown size={16} className="text-amber-400" />
            <span className="text-white font-bold text-xs tracking-[0.2em] uppercase">Recognition & Excellence</span>
            <Sparkles size={14} className="text-amber-400" />
          </div>

          {/* Main Heading - Crystal Clear with Premium Glow */}
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Awards &
            <span className="block bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent mt-1 drop-shadow-[0_0_40px_rgba(251,191,36,0.4)]">
              Achievements
            </span>
          </h1>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/40"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400/80 shadow-lg shadow-amber-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400/80 shadow-lg shadow-teal-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400/80 shadow-lg shadow-amber-400/50"></div>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/40"></div>
          </div>

          {/* Description - Enhanced Readability */}
          <p className="mt-5 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed text-white/90 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            A journey of dedication, academic excellence, fellowships and
            professional achievements in advanced ENT care.
          </p>

          {/* Awards Count - More Premium */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <AwardIcon size={18} className="text-amber-400" />
            <span className="text-white text-sm font-bold tracking-wide">
              {awards.length} Awards & Recognitions
            </span>
            <div className="w-1 h-1 rounded-full bg-amber-400/60"></div>
            <span className="text-white/70 text-xs">🏆 Updated 2026</span>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* AWARDS GRID - ULTRA PREMIUM */}
      {/* ============================================= */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header - More Premium */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 px-5 py-2.5 mb-4 border border-teal-200 shadow-lg shadow-teal-500/10">
              <Sparkles size={16} className="text-teal-700" />
              <span className="text-teal-800 font-bold text-xs tracking-[0.2em] uppercase">Our Prestigious Awards</span>
              <Sparkles size={16} className="text-teal-700" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              Recognized for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Excellence</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto mt-3 rounded-full"></div>
            <p className="mt-3 text-gray-600 text-sm">Awards that speak volumes about our commitment to quality care</p>
          </div>

          {/* Grid - Enhanced Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {awards.map((award: any, index: number) => (
              <Link
                key={award._id.toString()}
                href={`/awards/${award.slug}`}
              >
                <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-3 transition-all duration-500">

                  {/* Image Section - Enhanced */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={award.image || "/Images/default-award.jpg"}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Trophy Badge - Premium */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 backdrop-blur-xl flex items-center justify-center text-2xl shadow-xl shadow-amber-500/40 border border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      🏆
                    </div>

                    {/* Year Badge - Premium */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/30 text-white font-bold text-xs shadow-lg flex items-center gap-1.5">
                        <Calendar size={12} className="text-amber-400" />
                        {award.year || "2024"}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-teal-600/80 backdrop-blur-xl border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                        {award.category || "Achievement"}
                      </span>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>

                  {/* Content - Enhanced */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={14} className="text-amber-400 fill-amber-400" />
                      <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider">Achievement</span>
                    </div>

                    <h3 className="text-xl font-black text-gray-900 group-hover:text-teal-700 transition-colors duration-300 line-clamp-2 leading-tight">
                      {award.title}
                    </h3>

                    <p className="mt-2 text-gray-600 leading-relaxed line-clamp-2 text-sm">
                      {award.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="font-bold text-teal-600 group-hover:gap-2 transition-all duration-300 inline-flex items-center gap-1 text-sm">
                        Read More
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white flex items-center justify-center text-base group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-teal-500/30">
                        🏅
                      </div>
                    </div>

                    <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-teal-600 to-cyan-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          {/* Empty State - Enhanced */}
          {awards.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-3 rounded-full bg-amber-50 px-6 py-4 border-2 border-amber-200 shadow-lg shadow-amber-500/10">
                <AwardIcon size={20} className="text-amber-600" />
                <span className="text-amber-800 font-bold">No awards found. Add some!</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================= */}
      {/* WHY CHOOSE US - PREMIUM SECTION */}
      {/* ============================================= */}
      <section className="py-16 bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 mb-4 backdrop-blur-sm">
              <Zap size={14} className="text-amber-400" />
              <span className="text-white font-bold text-xs tracking-[0.2em] uppercase">Why Choose Us</span>
              <Zap size={14} className="text-amber-400" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
              Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-200">Every Aspect</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Trusted Expertise", desc: "15+ years of experience in ENT care" },
              { icon: Heart, title: "Compassionate Care", desc: "Patient-first approach with empathy" },
              { icon: CheckCircle, title: "Proven Results", desc: "98% success rate in treatments" },
              { icon: Users, title: "Happy Patients", desc: "5000+ satisfied patients worldwide" }
            ].map((item, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-amber-400/20 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-teal-500/20 border border-amber-400/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500">
                  <item.icon size={28} className="text-amber-400" />
                </div>
                <h3 className="mt-4 text-white font-bold text-lg">{item.title}</h3>
                <p className="mt-1 text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* CTA SECTION - ULTRA PREMIUM */}
      {/* ============================================= */}
      <section className="relative overflow-hidden py-14 lg:py-16 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
        
        {/* Glows */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm px-4 py-2 mb-4">
            <Crown size={14} className="text-white" />
            <span className="text-white font-bold text-[10px] tracking-[0.2em] uppercase">Proud of Our Achievements</span>
            <Crown size={14} className="text-white" />
          </div>

          <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Dedicated to Excellence in <span className="text-yellow-200">ENT Care</span>
          </h3>

          <p className="mt-3 text-white/90 max-w-2xl mx-auto text-base">
            Every award reflects our commitment to providing the best ENT treatment
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-amber-700 px-7 py-3.5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 text-sm"
            >
              Book Consultation
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-amber-900/40 backdrop-blur-sm text-white px-7 py-3.5 rounded-2xl font-bold border border-white/30 hover:bg-amber-900/60 transition-all duration-300 text-sm"
            >
              Explore Services
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Gem size={12} className="text-yellow-300" />
            <span className="text-white/80 text-[10px] font-medium">Trusted by 5000+ patients</span>
            <Gem size={12} className="text-yellow-300" />
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FOOTER - ULTRA PREMIUM */}
      {/* ============================================= */}
      <footer className="relative overflow-hidden bg-gray-900 pt-12 pb-6">
        
        {/* Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Dr. Anupriya</h3>
                  <p className="text-teal-400 text-[10px] font-semibold tracking-wider">ENT Specialist</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Providing advanced ENT care with modern diagnosis and compassionate treatment.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-[10px] mb-3 tracking-[0.2em] uppercase">Quick Links</h4>
              <ul className="space-y-1.5">
                {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-teal-400 text-xs transition-all duration-300 flex items-center gap-1 group"
                    >
                      <ChevronRight size={10} className="text-teal-500 opacity-0 group-hover:opacity-100 transition-all" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div>
              <h4 className="text-white font-bold text-[10px] mb-3 tracking-[0.2em] uppercase">Treatments</h4>
              <ul className="space-y-1.5">
                {["Cochlear Implant", "FESS Surgery", "Skull Base Surgery", "Vertigo Treatment", "Voice Disorders"].map((item) => (
                  <li key={item}>
                    <span className="text-gray-400 hover:text-teal-400 text-xs transition-all duration-300 cursor-pointer flex items-center gap-1 group">
                      <div className="w-1 h-1 rounded-full bg-teal-500 group-hover:w-1.5 transition-all"></div>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-[10px] mb-3 tracking-[0.2em] uppercase">Contact</h4>
              <ul className="space-y-2 text-xs">
                <li className="text-gray-400">
                  <span className="text-teal-400 font-semibold">📞</span> +91 77778 02365
                </li>
                <li className="text-gray-400">
                  <span className="text-teal-400 font-semibold">📧</span> clinic@hajelahospital.com
                </li>
                <li className="text-gray-400 text-[10px] leading-relaxed">
                  <span className="text-teal-400 font-semibold">📍</span> Geetanjali Complex, near Mata Mandir Square, Kotra Sultanabad, Bhopal - 462003
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-5 flex flex-col lg:flex-row items-center justify-between gap-2">
            <p className="text-gray-500 text-[10px]">
              © 2026 Dr. Anupriya Hajela Shah. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-3">
              <span className="text-teal-500 text-[10px] font-medium">Advanced ENT Care</span>
              <div className="w-0.5 h-0.5 rounded-full bg-teal-500"></div>
              <span className="text-teal-500 text-[10px] font-medium">Premium Healthcare</span>
              <div className="w-0.5 h-0.5 rounded-full bg-teal-500"></div>
              <span className="text-teal-500 text-[10px] font-medium">Patient First</span>
            </div>
            
            <p className="text-teal-500/40 text-[10px] font-medium">
              Designed with ❤️ for Better Healthcare
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}