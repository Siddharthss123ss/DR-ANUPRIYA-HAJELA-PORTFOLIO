"use client";

import {
  Phone,
  Calendar,
  MessageCircle,
} from "lucide-react";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden px-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
      
      <div className="bg-white/90 backdrop-blur-2xl border border-white/80 shadow-[0_-10px_40px_rgba(0,0,0,0.12)] rounded-3xl p-3">
        
        <div className="grid grid-cols-3 gap-2.5">

          {/* CALL */}
          <a
            href="tel:+917777802365"
            aria-label="Call Dr. Anupriya Hajela Shah"
            className="flex min-h-[68px] flex-col items-center justify-center gap-1.5 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-2xl shadow-lg active:scale-[0.97] transition-transform duration-150"
          >
            <Phone size={21} strokeWidth={2.2} />

            <span className="text-xs font-semibold">
              Call
            </span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/917777802365"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="flex min-h-[68px] flex-col items-center justify-center gap-1.5 bg-[#25D366] text-white rounded-2xl shadow-lg active:scale-[0.97] transition-transform duration-150"
          >
            <MessageCircle size={21} strokeWidth={2.2} />

            <span className="text-xs font-semibold">
              WhatsApp
            </span>
          </a>

          {/* BOOK APPOINTMENT */}
          <a
            href="/contact"
            aria-label="Book an appointment"
            className="flex min-h-[68px] flex-col items-center justify-center gap-1.5 bg-slate-950 text-white rounded-2xl shadow-lg active:scale-[0.97] transition-transform duration-150"
          >
            <Calendar size={21} strokeWidth={2.2} />

            <span className="text-xs font-semibold">
              Book
            </span>
          </a>

        </div>
      </div>
    </div>
  );
}