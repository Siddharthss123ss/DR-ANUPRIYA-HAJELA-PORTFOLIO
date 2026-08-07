"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Menu, 
  X, 
  ArrowUpRight, 
  Stethoscope, 
  Sparkles,
  Award,
  ChevronRight,
  ChevronDown,
  Ear,
  Brain,
  Microscope,
  Droplets,
  Mic,
  Volume2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Services Data
const servicesData = [
  { 
    id: 1, 
    name: "Cochlear Implant", 
    slug: "cochlear-implant",
    icon: Ear,
    description: "Advanced hearing restoration"
  },
  { 
    id: 2, 
    name: "Skull Base Surgery", 
    slug: "skull-base-surgery",
    icon: Brain,
    description: "Endoscopic skull base procedures"
  },
  { 
    id: 3, 
    name: "Microscopic ENT Surgery", 
    slug: "microscopic-ent-surgery",
    icon: Microscope,
    description: "Precision microscopic surgeries"
  },
  { 
    id: 4, 
    name: "Endoscopic Sinus Surgery", 
    slug: "endoscopic-sinus-surgery",
    icon: Droplets,
    description: "Modern sinus treatments"
  },
  { 
    id: 5, 
    name: "Voice & Phonosurgery", 
    slug: "voice-phonosurgery",
    icon: Mic,
    description: "Voice restoration procedures"
  },
  { 
    id: 6, 
    name: "Hearing Aid Services", 
    slug: "hearing-aid-services",
    icon: Volume2,
    description: "Advanced hearing solutions"
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenu(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", link: "/", icon: "🏠" },
    { name: "About", link: "/about", icon: "👨‍⚕️" },
    { name: "Services", link: "/services", icon: "🔬", hasDropdown: true },
    { name: "Awards", link: "/awards", icon: "🏆" },
    { name: "Gallery", link: "/gallery", icon: "📸" },
    { name: "Contact", link: "/contact", icon: "📱" },
  ];

  const isActive = (link: string) => {
    if (link === "/") return pathname === "/";
    return pathname === link;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-[998]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`
            relative overflow-visible
            rounded-full
            flex items-center justify-between
            transition-all duration-500 ease-out
            w-full
            ${
              scrolled
                ? "bg-white/95 backdrop-blur-xl border border-teal-100 shadow-xl py-2.5 px-5 sm:px-6"
                : "bg-white/90 backdrop-blur-md border border-teal-50 shadow-lg py-2.5 px-5 sm:px-6"
            }
          `}
        >
          {/* LEFT - Logo */}
          <Link href="/" className="relative z-10 group">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-teal-600 to-cyan-700 p-2 rounded-xl shadow-lg">
                  <Stethoscope size={18} className="text-white" />
                </div>
              </div>
              
              <div className="leading-tight">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900">
                  Dr. 
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    {" "}Anupriya 
                  </span>
                </h1>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] text-teal-700 font-semibold">
                  ENT & Voice Specialist
                </p>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 relative z-10">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className={`
                  relative font-medium text-[15px] transition-all duration-300 group flex items-center gap-1.5
                  ${isActive(item.link) 
                    ? "text-teal-600" 
                    : "text-gray-700 hover:text-teal-600"
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
                <span className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 rounded-full ${
                  isActive(item.link) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          {/* RIGHT - Call & Menu */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-500/20 border border-amber-300/30">
              <Award size={12} className="text-amber-500" />
              <span className="text-[10px] font-bold text-amber-700">Award Winner</span>
              <Sparkles size={10} className="text-amber-400" />
            </div>

            <a
              href="tel:+917777802365"
              className="hidden lg:flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-2.5 text-white font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-[0_10px_30px_rgba(13,148,136,0.15)]"
            >
              <Phone size={16} />
              <span>Call Clinic</span>
              <ArrowUpRight size={14} />
            </a>

            {/* MOBILE MENU BUTTON - SIMPLE & WORKING */}
            <button
              onClick={() => setMobileMenu(prev => !prev)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-teal-100 text-gray-900 hover:border-teal-300 transition-all duration-300"
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
            >
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
  duration: 0.22,
  ease: "easeOut",
}}
            className="lg:hidden px-4 sm:px-6 mt-3 relative z-[99999]"
          >
            <div className="relative rounded-2xl bg-white/95 backdrop-blur-xl border border-teal-100 shadow-2xl">
              <div className="relative z-10 p-6 max-h-[80vh] overflow-y-auto">
                <div className="flex flex-col gap-1">
                  {navLinks.map((item, idx) => (
                    <div key={idx}>
                      {item.hasDropdown ? (
                        <>
                          <button
                            onClick={() => setMobileServicesOpen(prev => !prev)}
                            className={`flex items-center justify-between w-full py-3.5 px-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                              mobileServicesOpen
                                ? "text-teal-600 bg-gradient-to-r from-teal-50/80 to-cyan-50/80"
                                : "text-gray-700 hover:text-teal-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-xl">{item.icon}</span>
                              {item.name}
                            </span>
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${
                                mobileServicesOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 pl-4 border-l-2 border-teal-200 space-y-1 overflow-hidden"
                              >
                                {servicesData.map((service) => {
                                  const Icon = service.icon;
                                  return (
                                    <Link
                                      key={service.id}
                                      href={`/services/${service.slug}`}
                                      onClick={() => {
                                        setMobileMenu(false);
                                        setMobileServicesOpen(false);
                                      }}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                                        <Icon size={14} className="text-teal-600" />
                                      </div>
                                      <span className="text-sm font-medium text-gray-700">
                                        {service.name}
                                      </span>
                                    </Link>
                                  );
                                })}
                                <Link
                                  href="/services"
                                  onClick={() => {
                                    setMobileMenu(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-teal-600 hover:text-teal-700"
                                >
                                  <span>View All Services</span>
                                  <ArrowUpRight size={14} />
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.link}
                          onClick={() => setMobileMenu(false)}
                          className={`flex items-center justify-between py-3.5 px-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                            isActive(item.link)
                              ? "text-teal-600 bg-gradient-to-r from-teal-50/80 to-cyan-50/80"
                              : "text-gray-700 hover:text-teal-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-xl">{item.icon}</span>
                            {item.name}
                          </span>
                          <ChevronRight size={16} className="opacity-0 group-hover:opacity-100" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Call Button Mobile */}
                <a
                  href="tel:+917777802365"
                  className="relative z-10 mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-3.5 text-white font-semibold shadow-lg shadow-teal-500/20"
                >
                  <Phone size={16} />
                  <span className="text-sm sm:text-base">Call Clinic: +91 77778 02365</span>
                </a>

                <div className="mt-6 pt-4 border-t border-teal-100 text-center">
                  <p className="text-[11px] text-teal-600 font-medium">
                    ⚡ 24/7 Emergency Available
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}