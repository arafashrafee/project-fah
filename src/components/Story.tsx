"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const milestones = [
  {
    year: "2005",
    title: "The Beginning",
    description:
      "A young boy from Bangladesh discovers his love for football, spending every free moment on the pitch. The dream begins under the floodlights.",
    image: "/images/story/youth.jpg",
    side: "left" as const,
  },
  {
    year: "2016",
    title: "Youth Development",
    description:
      "Training grounds become home. Early mornings, late nights — grinding through youth academies with a single-minded focus to become the best.",
    image: "/images/story/3.jpg",
    side: "right" as const,
  },
  {
    year: "2019",
    title: "National Team Call-Up",
    description:
      "Selected for the Bangladesh National Team. The jersey — the flag on his chest — everything changes. 170 million people behind him.",
    image: "/images/bg/4.jpg",
    side: "left" as const,
  },
  {
    year: "2022",
    title: "European Dream",
    description:
      "Makes the move to UC Sampdoria in Italy's Serie A system. A Bangladeshi footballer in one of the world's most competitive leagues — making history.",
    image: "/images/gallery/g1.jpg",
    side: "right" as const,
  },
  {
    year: "2024",
    title: "Rising Star",
    description:
      "Establishing himself on the international stage with standout performances in World Cup qualifiers and Asian Cup campaigns. The journey continues.",
    image: "/images/gallery/g3.jpg",
    side: "left" as const,
  },
];

export default function Story() {
  return (
    <section id="story" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg/stadium-dark.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#050505]/95" />
      </div>

      {/* Center line (desktop) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.04] hidden lg:block" />

      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Journey"
          title="THE STORY SO FAR"
          subtitle="From the streets of Bangladesh to the stadiums of Europe — every chapter written with passion."
        />

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center line (mobile) */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent lg:-translate-x-[1px]" />

          {milestones.map((milestone, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`relative flex items-start gap-8 mb-20 last:mb-0 ${
                  milestone.side === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-4 h-4 rounded-full bg-primary glow-red"
                  />
                </div>

                {/* Card with image */}
                <div
                  className={`ml-16 lg:ml-0 lg:w-[calc(50%-40px)] ${
                    milestone.side === "right" ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <div className="relative bg-dark-2/80 border border-white/[0.04] hover:border-primary/15 transition-colors duration-500 group overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-2 via-dark-2/40 to-transparent" />
                      {/* Year overlay */}
                      <span className="absolute bottom-3 right-4 font-[family-name:var(--font-bebas)] text-5xl text-white/10 tracking-wider">
                        {milestone.year}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="p-6 lg:p-8">
                      <span className="text-primary text-[11px] tracking-[0.3em] uppercase font-semibold">
                        {milestone.year}
                      </span>
                      <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wider text-white mt-2 mb-3">
                        {milestone.title.toUpperCase()}
                      </h3>
                      <p className="text-white/40 leading-relaxed text-sm">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Hover accent */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="section-divider mt-28 lg:mt-36 max-w-7xl mx-auto relative z-10" />
    </section>
  );
}
