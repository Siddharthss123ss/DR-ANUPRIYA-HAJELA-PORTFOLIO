"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowUpRight, Stethoscope, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/#services" },
    { name: "Gallery", link: "/#gallery" },
    { name: "Contact", link: "/#contact" },
  ];

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 w-full z-[999]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN NAVBAR - Slim aur Rounded-full */}
        <motion.div
          className={`
            relative overflow-hidden
            rounded-full
            flex items-center justify-between
            transition-all duration-500 ease-out
            w-full
            ${
              scrolled
                ? "bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl py-2.5 px-5 sm:px-6"
                : "bg-white/90 backdrop-blur-md border border-gray-50 shadow-lg py-2.5 px-5 sm:px-6"
            }
          `}
          whileHover={{ boxShadow: "0 25px 40px -12px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Premium Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-blue-400/8 to-cyan-300/8 rounded-full blur-2xl" />

          {/* LEFT - Premium Logo */}
          <a href="/" className="relative z-10 group">
            <div className="flex items-center gap-2.5">
              {/* Premium Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-cyan-600 to-blue-700 p-2 rounded-xl shadow-lg">
                  <Stethoscope size={18} className="text-white" />
                </div>
              </div>
              
              {/* Text */}
              <div className="leading-tight">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Dr. 
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}Anupriya
                  </span>
                </h1>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] text-cyan-700 font-semibold">
                  ENT & Voice Specialist
                </p>
              </div>
            </div>
          </a>

          {/* DESKTOP NAV - With Underline Animation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 relative z-10">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="relative font-medium text-[15px] text-slate-700 hover:text-cyan-600 transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT - Premium Call Button */}
          <div className="flex items-center gap-3 relative z-10">
            {/* Premium Call Button */}
            <motion.a
              href="tel:+917777802365"
              className="hidden lg:flex items-center gap-2 rounded-full bg-[#06111f] px-6 py-2.5 text-white font-semibold hover:bg-cyan-700 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.12)] group"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Call Clinic</span>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5" />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 text-slate-900 hover:border-cyan-200 transition-all duration-300"
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenu ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* PREMIUM MOBILE MENU - Smooth Animation */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden px-4 sm:px-6 mt-3"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl">
              {/* Premium Mobile Background Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-bl from-cyan-400/15 to-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-blue-400/10 to-cyan-300/10 rounded-full blur-2xl" />

              <div className="relative z-10 p-6">
                {/* Mobile Navigation Links with Stagger */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.link}
                      onClick={() => setMobileMenu(false)}
                      variants={mobileItemVariants}
                      className="group flex items-center justify-between py-3.5 px-3 rounded-xl text-base font-semibold text-slate-700 hover:text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300"
                      whileHover={{ x: 8 }}
                    >
                      {item.name}
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Call Button */}
                <motion.a
                  href="tel:+917777802365"
                  variants={mobileItemVariants}
                  className="relative z-10 mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-3.5 text-white font-semibold shadow-lg shadow-cyan-500/20 overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Phone size={16} />
                  <span>Call Clinic: +91 77778 02365</span>
                </motion.a>

                {/* Premium Trust Badge */}
                <motion.div
                  variants={mobileItemVariants}
                  className="mt-6 pt-4 border-t border-gray-100 text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles size={12} className="text-cyan-500" />
                    <p className="text-[11px] text-slate-500 font-medium">
                      24/7 Emergency Available
                    </p>
                    <Sparkles size={12} className="text-cyan-500" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}