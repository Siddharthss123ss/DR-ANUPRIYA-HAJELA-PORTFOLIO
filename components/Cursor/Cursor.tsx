"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      mouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        mouseMove
      );
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 80,
        y: position.y - 80,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="hidden lg:block fixed top-0 left-0 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl pointer-events-none z-[999]"
    />
  );
}