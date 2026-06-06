"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const articles = [
  {
    date: "May 2024",
    category: "International",
    title: "Fahamedul shines in World Cup qualifier with crucial performance",
    excerpt:
      "A masterclass display against Lebanon highlighted Fahamedul's growing influence as Bangladesh's creative engine in the World Cup qualifying campaign.",
    image: "/images/gallery/g2.jpg",
    featured: true,
  },
  {
    date: "Mar 2024",
    category: "Serie A",
    title: "Sampdoria's Bangladeshi gem continues to impress in training",
    excerpt:
      "Coaches praise Fahamedul's dedication and rapid development at the Italian club's youth setup.",
    image: "/images/gallery/g1.jpg",
    featured: false,
  },
  {
    date: "Jan 2024",
    category: "Feature",
    title: "Rising star: How Fahamedul Islam is changing Bangladeshi football",
    excerpt:
      "An in-depth look at the midfielder's journey from grassroots to international recognition and European football.",
    image: "/images/news/press.jpg",
    featured: false,
  },
  {
    date: "Nov 2023",
    category: "National Team",
    title: "Bangladesh squad announcement: Fahamedul named in Asian Cup roster",
    excerpt:
      "The young midfielder earns his place in the squad for the biggest tournament in Asian football.",
    image: "/images/gallery/1.jpg",
    featured: false,
  },
];

export default function News() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section id="feature" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-dark-2/30" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Press"
          title="FEATURE"
          subtitle="Latest updates, media mentions, and football news."
        />

        {/* Featured article */}
        <AnimatedSection className="mb-12">
          <a href="#" className="group block cursor-pointer">
            <div className="grid lg:grid-cols-2 gap-0 overflow-hidden bg-dark-2 border border-white/[0.04] hover:border-primary/15 transition-colors duration-500">
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-2/20" />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] px-3 py-1.5 tracking-[0.2em] uppercase font-semibold">
                  Featured
                </span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-white/30 text-sm">{featured.date}</span>
                  <span className="text-primary/60 text-[10px] tracking-[0.2em] uppercase border border-primary/20 px-2 py-0.5">
                    {featured.category}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl lg:text-4xl tracking-wider text-white group-hover:text-primary transition-colors duration-300 mb-4">
                  {featured.title.toUpperCase()}
                </h3>
                <p className="text-white/40 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold tracking-[0.15em] uppercase">
                  Read More
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </a>
        </AnimatedSection>

        {/* Article list */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((article, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <a
                href="#"
                className="group block bg-dark-2/50 border border-white/[0.04] hover:border-primary/15 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#050505]/30" />
                  <span className="absolute top-3 left-3 bg-dark-2/80 text-primary text-[10px] px-2 py-1 tracking-[0.2em] uppercase font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-white/25 text-xs">{article.date}</span>
                  <h4 className="font-[family-name:var(--font-bebas)] text-xl tracking-wider text-white group-hover:text-primary transition-colors duration-300 mt-2 mb-2">
                    {article.title.toUpperCase()}
                  </h4>
                  <p className="text-white/35 text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="section-divider mt-28 lg:mt-36 max-w-7xl mx-auto relative z-10" />
    </section>
  );
}
