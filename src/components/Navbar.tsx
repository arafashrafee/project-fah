"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Story", href: "#story" },
  { label: "Feature", href: "#feature" },
  { label: "Social", href: "#social" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="relative group cursor-pointer">
              <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.15em] text-white">
                FAHAMEDUL
                <span className="text-primary">.</span>
              </span>
            </a>

            {/* Center info — desktop */}
            <div className="hidden md:flex items-center gap-0">
              <span className="text-white/40 text-[11px] tracking-[0.35em] uppercase font-medium">
                Bangladesh
              </span>
              <span className="text-white/20 mx-3 text-[8px]">·</span>
              <span className="text-white/40 text-[11px] tracking-[0.35em] uppercase font-medium">
                Forward
              </span>
            </div>

            {/* Toggle button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-11 h-11 rounded-full border border-white/15 hover:border-white/30 flex items-center justify-center transition-colors duration-300 cursor-pointer group"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center justify-center gap-[5px]">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-[18px] h-[1.5px] bg-white/60 group-hover:bg-white transition-colors duration-300"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block w-[18px] h-[1.5px] bg-white/60 group-hover:bg-white transition-colors duration-300"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-[18px] h-[1.5px] bg-white/60 group-hover:bg-white transition-colors duration-300"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-bebas)] text-5xl text-white/60 hover:text-primary py-2 tracking-wider transition-colors cursor-pointer"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
