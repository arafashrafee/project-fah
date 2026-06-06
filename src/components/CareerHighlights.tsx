"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CareerClub {
  name: string;
  shortName: string;
  period: string;
  apps: string;
  goals: string;
  image: string;
  color: string;
  logo: React.ReactNode;
}

/* ── SVG Club Crests ──────────────────────────────────── */

function BangladeshCrest() {
  return (
    <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
      {/* Shield shape */}
      <path
        d="M100 10 L185 50 L185 150 Q185 200 100 230 Q15 200 15 150 L15 50 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M100 25 L172 58 L172 148 Q172 190 100 218 Q28 190 28 148 L28 58 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.15"
      />
      {/* Center circle — flag */}
      <circle cx="100" cy="125" r="40" fill="currentColor" opacity="0.2" />
      <circle cx="100" cy="125" r="35" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* BFF text */}
      <text
        x="100"
        y="90"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.35"
        fontSize="16"
        fontWeight="600"
        letterSpacing="4"
      >
        BFF
      </text>
      {/* Football */}
      <circle cx="100" cy="125" r="15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25" />
      <path d="M100 110 L100 140 M85 125 L115 125 M88 113 L112 137 M112 113 L88 137" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      {/* Stars */}
      <circle cx="80" cy="50" r="3" fill="currentColor" opacity="0.2" />
      <circle cx="100" cy="45" r="3" fill="currentColor" opacity="0.2" />
      <circle cx="120" cy="50" r="3" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

function SampdoriaCrest() {
  return (
    <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
      {/* Shield */}
      <path
        d="M100 10 L185 40 L185 160 Q185 210 100 235 Q15 210 15 160 L15 40 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      {/* Inner shield */}
      <path
        d="M100 30 L168 55 L168 152 Q168 195 100 215 Q32 195 32 152 L32 55 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.15"
      />
      {/* Horizontal stripes (Sampdoria style) */}
      <line x1="45" y1="70" x2="155" y2="70" stroke="currentColor" strokeWidth="3" opacity="0.12" />
      <line x1="45" y1="80" x2="155" y2="80" stroke="currentColor" strokeWidth="3" opacity="0.08" />
      <line x1="45" y1="90" x2="155" y2="90" stroke="currentColor" strokeWidth="3" opacity="0.15" />
      <line x1="45" y1="100" x2="155" y2="100" stroke="currentColor" strokeWidth="3" opacity="0.10" />
      {/* Sailor / Baciccia silhouette hint */}
      <circle cx="100" cy="130" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2" />
      <path d="M82 155 Q100 170 118 155" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" />
      <line x1="100" y1="148" x2="100" y2="165" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      {/* UC text */}
      <text
        x="100"
        y="200"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.3"
        fontSize="14"
        fontWeight="600"
        letterSpacing="6"
      >
        U.C.S.
      </text>
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────── */

const clubs: CareerClub[] = [
  {
    name: "BANGLADESH NATIONAL TEAM",
    shortName: "BANGLADESH",
    period: "2019 — PRESENT",
    apps: "25+",
    goals: "4",
    image: "/images/gallery/g2.jpg",
    color: "#006a4e",
    logo: <BangladeshCrest />,
  },
  {
    name: "UC SAMPDORIA",
    shortName: "SAMPDORIA",
    period: "2022 — PRESENT",
    apps: "15+",
    goals: "2",
    image: "/images/gallery/g1.jpg",
    color: "#005DA0",
    logo: <SampdoriaCrest />,
  },
];

/* ── Component ────────────────────────────────────────── */

export default function CareerHighlights() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const DURATION = 6000; // ms per slide

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % clubs.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + 100 / (DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [next]);

  const club = clubs[active];

  return (
    <section className="relative py-0 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle color wash from active club */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${club.color}08 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 min-h-[85vh]">
          {/* Left — Logo + Info */}
          <div className="relative flex flex-col justify-between py-16 px-6 lg:px-12">
            {/* Label */}
            <div>
              <span className="text-primary text-[11px] tracking-[0.4em] uppercase font-semibold">
                Career Highlights
              </span>
            </div>

            {/* Club Logo — large watermark */}
            <div className="relative flex-1 flex items-center justify-center my-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[280px] h-[340px] lg:w-[320px] lg:h-[380px]"
                  style={{ color: club.color }}
                >
                  {club.logo}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Club name + stats */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl lg:text-3xl tracking-[0.1em] text-white mb-2">
                    {club.name}
                  </h3>
                  <div className="flex items-center gap-6 text-white/30 text-xs tracking-[0.2em] uppercase">
                    <span>{club.period}</span>
                    <span className="w-[1px] h-3 bg-white/10" />
                    <span>{club.apps} Apps</span>
                    <span className="w-[1px] h-3 bg-white/10" />
                    <span>{club.goals} Goals</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Club selector dots + progress */}
              <div className="flex items-center gap-4 mt-8">
                {clubs.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActive(i);
                      setProgress(0);
                    }}
                    className="group flex items-center gap-3 cursor-pointer"
                    aria-label={`View ${c.shortName}`}
                  >
                    <div className="relative">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === active
                            ? "bg-primary scale-125"
                            : "bg-white/15 group-hover:bg-white/30"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                        i === active
                          ? "text-white/60"
                          : "text-white/20 group-hover:text-white/40"
                      }`}
                    >
                      {c.shortName}
                    </span>
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-4 h-[1px] bg-white/[0.06] w-full max-w-xs">
                <motion.div
                  className="h-full bg-primary/60"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.05 }}
                />
              </div>
            </div>
          </div>

          {/* Right — Video / Image */}
          <div className="relative min-h-[400px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/20" />
              </motion.div>
            </AnimatePresence>

            {/* Play indicator overlay */}
            <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
                  Now Playing
                </span>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-white/[0.08] z-10" />
            <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-white/[0.08] z-10" />
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.04]" />
    </section>
  );
}
