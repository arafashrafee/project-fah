"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const videos = [
  {
    title: "Season Highlights 2024",
    thumbnail: "/images/gallery/g2.jpg",
    duration: "12:45",
    category: "Highlights",
  },
  {
    title: "Best Goals & Assists",
    thumbnail: "/images/gallery/g3.jpg",
    duration: "8:32",
    category: "Compilation",
  },
  {
    title: "National Team Debut",
    thumbnail: "/images/story/2.jpg",
    duration: "6:18",
    category: "International",
  },
];

export default function Highlights() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="highlights" className="relative py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg/pitch.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#050505]/95" />
      </div>
      <div className="absolute inset-0 noise" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Highlights"
          title="WATCH THE ACTION"
          subtitle="Relive the best moments from the pitch — goals, skills, and unforgettable plays."
        />

        {/* Featured video */}
        <AnimatedSection className="mb-10">
          <div
            className="relative aspect-video max-w-5xl mx-auto group cursor-pointer overflow-hidden"
            onClick={() => setActiveVideo(0)}
          >
            <Image
              src="/images/gallery/g2.jpg"
              alt="Featured highlight"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-[#050505]/50 group-hover:bg-[#050505]/30 transition-colors duration-500" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150 group-hover:scale-[2] transition-transform duration-700" />
                <div className="relative w-24 h-24 rounded-full border-2 border-primary/80 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Play
                    size={32}
                    className="text-primary ml-1"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>

            {/* Video info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#050505]/90 to-transparent">
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold">
                Featured
              </span>
              <h3 className="font-[family-name:var(--font-bebas)] text-3xl lg:text-4xl tracking-wider text-white mt-1">
                SEASON HIGHLIGHTS 2024
              </h3>
            </div>

            {/* Corner accents */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary/40" />
          </div>
        </AnimatedSection>

        {/* Video grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((video, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className="group cursor-pointer"
                onClick={() => setActiveVideo(i)}
              >
                <div className="relative aspect-video mb-4 overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-[#050505]/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full border border-primary/60 flex items-center justify-center bg-primary/10">
                      <Play
                        size={18}
                        className="text-primary ml-0.5"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-[#050505]/80 text-white/70 text-xs px-2 py-1 font-medium">
                    {video.duration}
                  </span>
                  <span className="absolute top-2 left-2 bg-primary/90 text-white text-[10px] px-2 py-1 tracking-wider uppercase font-semibold">
                    {video.category}
                  </span>
                </div>
                <h4 className="text-white/80 text-sm font-medium group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h4>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-primary transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-4xl bg-dark-3 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-white/30 text-sm tracking-wider">
                Video player placeholder — embed YouTube/Vimeo here
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-divider mt-28 lg:mt-36 max-w-7xl mx-auto relative z-10" />
    </section>
  );
}
