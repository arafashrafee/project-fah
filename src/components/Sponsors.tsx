"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const brands = [
  { name: "UC Sampdoria", type: "Club" },
  { name: "Bangladesh FF", type: "Federation" },
  { name: "Adidas", type: "Sportswear" },
  { name: "Grameenphone", type: "Telecom" },
  { name: "Walton", type: "Electronics" },
  { name: "Bashundhara", type: "Conglomerate" },
];

export default function Sponsors() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-dark-2/40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Partners"
          title="BRANDS I WORKED WITH"
          subtitle="Proud partnerships and collaborations with leading organizations."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {brands.map((brand, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="group relative h-32 flex flex-col items-center justify-center gap-2 border border-white/[0.04] bg-dark-3/50 hover:border-primary/20 transition-all duration-500 cursor-pointer"
              >
                <span className="text-white/25 text-sm tracking-[0.15em] uppercase font-semibold group-hover:text-white/50 transition-colors duration-300">
                  {brand.name}
                </span>
                <span className="text-white/10 text-[10px] tracking-wider uppercase">
                  {brand.type}
                </span>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="section-divider mt-28 lg:mt-36 max-w-7xl mx-auto relative z-10" />
    </section>
  );
}
