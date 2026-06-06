"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const traits = [
  { stat: "15", label: "Jersey Number" },
  { stat: "MF", label: "Position" },
  { stat: "BD", label: "Nationality" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/bg/4.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#050505]/95" />
      </div>
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="The Player"
          title="WHO IS FAHAMEDUL ISLAM"
          subtitle="A story of passion, perseverance, and the relentless pursuit of footballing excellence."
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Portrait */}
          <AnimatedSection>
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Red accent frame */}
              <div className="absolute -inset-3 border border-primary/20 -z-0" />
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />

              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/portrait/main.jpg"
                  alt="Fahamedul Islam portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent" />
              </div>

              {/* Stat badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                {traits.map((t, i) => (
                  <div
                    key={i}
                    className="bg-dark-2 border border-white/[0.06] px-5 py-3 text-center"
                  >
                    <div className="font-[family-name:var(--font-bebas)] text-2xl text-primary tracking-wider">
                      {t.stat}
                    </div>
                    <div className="text-white/40 text-[10px] tracking-[0.2em] uppercase">
                      {t.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Story content */}
          <div className="pt-8 lg:pt-0">
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <p className="text-white/90 text-lg leading-relaxed">
                  From the dusty fields of Bangladesh to the professional
                  stadiums of Europe — Fahamedul Islam&apos;s journey is one of
                  unwavering determination. Every touch of the ball carries the
                  weight of 170 million dreams.
                </p>
                <p className="text-white/70 leading-relaxed">
                  A dynamic midfielder with exceptional vision and technical
                  prowess, Fahamedul has represented Bangladesh on the
                  international stage while honing his craft at UC Sampdoria in
                  Serie A. His playing style combines creative flair with
                  tireless work ethic — a player who can change the game in a
                  single moment.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Off the pitch, he embodies the ambition of a new generation of
                  Bangladeshi footballers — proving that talent knows no
                  boundaries and that the beautiful game truly belongs to
                  everyone.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-10 flex items-center gap-6">
                <a
                  href="#story"
                  className="group flex items-center gap-3 text-primary text-sm font-semibold tracking-[0.15em] uppercase cursor-pointer hover:gap-4 transition-all duration-300"
                >
                  Read Full Story
                  <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all duration-300" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="section-divider mt-28 lg:mt-36 max-w-7xl mx-auto relative z-10" />
    </section>
  );
}
