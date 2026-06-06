"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/main.jpg"
          alt="Fahamedul Islam on the pitch"
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />
        {/* Red accent glow */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-primary/[0.07] blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-20 lg:pb-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-10 h-[2px] bg-primary" />
          <span className="text-primary text-xs tracking-[0.4em] uppercase font-semibold">
            Bangladesh National Team
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-bebas)] leading-[0.85] tracking-wider mb-6"
        >
          <span className="block text-[clamp(4rem,12vw,10rem)] text-white">
            FAHAMEDUL
          </span>
          <span className="block text-[clamp(4rem,12vw,10rem)] text-gradient-red text-glow-red">
            ISLAM
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/50 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed"
        >
          Professional footballer. Representing Bangladesh on the world stage.
          Fearless on the pitch, relentless in pursuit of greatness.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#highlights"
            className="group relative px-8 py-4 bg-primary text-white text-sm font-semibold tracking-[0.2em] uppercase overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,58,59,0.3)]"
          >
            <span className="relative z-10">Watch Highlights</span>
            <div className="absolute inset-0 bg-primary-light translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-white/15 text-white/70 text-sm font-medium tracking-[0.2em] uppercase hover:border-primary/40 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Discover More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/30 text-[10px] tracking-[0.5em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-primary/50" />
        </motion.div>
      </motion.div>

      {/* Bottom red line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-10" />
    </section>
  );
}
