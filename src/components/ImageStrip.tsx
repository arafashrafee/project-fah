"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/gallery/g1.jpg", alt: "Sampdoria training" },
  { src: "/images/gallery/g2.jpg", alt: "International match action" },
  { src: "/images/gallery/1.jpg", alt: "UCB club action" },
  { src: "/images/gallery/g3.jpg", alt: "Match intensity" },
  { src: "/images/bg/4.jpg", alt: "National team lineup" },
  { src: "/images/portrait/main.jpg", alt: "Fahamedul portrait" },
  { src: "/images/story/3.jpg", alt: "Training session" },
  { src: "/images/story/youth.jpg", alt: "Night match atmosphere" },
];

export default function ImageStrip() {
  return (
    <section className="relative py-4 overflow-hidden">
      <div className="flex gap-4 animate-none">
        <motion.div
          className="flex gap-4 shrink-0"
          animate={{ x: [0, -1200] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
          }}
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="relative w-[300px] md:w-[400px] aspect-[16/10] shrink-0 overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-[#050505]/30 group-hover:bg-[#050505]/10 transition-colors duration-500" />
              {/* Red accent on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
