"use client";

import {
  Phone,
  Calendar,
  MessageCircle,
} from "lucide-react";

export default function MobileBar() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[999] w-[92%] md:hidden">

      <div className="bg-white/80 backdrop-blur-2xl border border-white shadow-[0_15px_50px_rgba(0,0,0,0.15)] rounded-3xl px-4 py-4">

        <div className="grid grid-cols-3 gap-3">

          {/* CALL */}
          <a
            href="tel:+919876543210"
            className="flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-2xl py-4 shadow-xl"
          >

            <Phone size={22} />

            <span className="text-sm font-semibold">
              Call
            </span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="flex flex-col items-center justify-center gap-2 bg-[#25D366] text-white rounded-2xl py-4 shadow-xl"
          >

            <MessageCircle size={22} />

            <span className="text-sm font-semibold">
              WhatsApp
            </span>
          </a>

          {/* APPOINTMENT */}
          <button className="flex flex-col items-center justify-center gap-2 bg-black text-white rounded-2xl py-4 shadow-xl">

            <Calendar size={22} />

            <span className="text-sm font-semibold">
              Book
            </span>
          </button>

        </div>
      </div>
    </div>
  );
}