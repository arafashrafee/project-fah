"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const stories = [
  {
    date: "15TH MAY 2024",
    image: "/images/gallery/g2.jpg",
    caption:
      "What a night! Proud to represent Bangladesh on the international stage. The fans were incredible — this one was for you all",
    type: "photo" as const,
  },
  {
    date: "2ND APRIL 2024",
    image: "/images/gallery/g1.jpg",
    caption:
      "Another day at Sampdoria, another step closer to the dream. Hard work pays off — grateful for every opportunity",
    type: "photo" as const,
  },
  {
    date: "18TH MARCH 2024",
    image: "/images/story/3.jpg",
    caption:
      "Training never stops. Early mornings, late nights — the grind continues. Italy has taught me so much about the beautiful game",
    type: "photo" as const,
  },
  {
    date: "5TH FEBRUARY 2024",
    image: "/images/gallery/g3.jpg",
    caption:
      "Honoured to be part of the squad for the upcoming qualifiers. Bangladesh football is on the rise and we are just getting started",
    type: "photo" as const,
  },
  {
    date: "20TH JANUARY 2024",
    image: "/images/story/youth.jpg",
    caption:
      "Visited the youth academy today. Seeing the next generation of Bangladeshi footballers — the future is bright. Never stop dreaming",
    type: "photo" as const,
  },
  {
    date: "8TH DECEMBER 2023",
    image: "/images/gallery/1.jpg",
    caption:
      "Match day vibes. Nothing compares to the feeling of stepping onto the pitch with your country's flag on your chest",
    type: "photo" as const,
  },
];

export default function LatestStories() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#080808]">
      {/* Subtle noise */}
      <div className="absolute inset-0 noise" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="w-full h-[1px] bg-primary/40 mb-12" />
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl tracking-wider text-white">
              Latest Stories
            </h2>
          </div>
        </AnimatedSection>

        {/* Stories feed */}
        <div className="space-y-20 lg:space-y-28">
          {stories.map((story, i) => (
            <AnimatedSection key={i} delay={0.05}>
              <article className="text-center">
                {/* Date */}
                <time className="block text-white/25 text-[11px] tracking-[0.35em] uppercase mb-6">
                  {story.date}
                </time>

                {/* Image */}
                <div className="relative mx-auto max-w-lg aspect-[4/3] overflow-hidden mb-6 group cursor-pointer">
                  <Image
                    src={story.image}
                    alt={story.caption}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 540px"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                </div>

                {/* Caption */}
                <p className="text-white/60 text-[15px] leading-relaxed max-w-lg mx-auto">
                  &ldquo;{story.caption}&rdquo;
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Load more hint */}
        <AnimatedSection>
          <div className="text-center mt-20">
            <button className="group text-white/20 hover:text-white/50 text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 cursor-pointer flex items-center gap-3 mx-auto">
              <span className="w-8 h-[1px] bg-current" />
              View All Stories
              <span className="w-8 h-[1px] bg-current" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
