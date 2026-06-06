"use client";

import AnimatedSection from "./AnimatedSection";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: Props) {
  return (
    <AnimatedSection
      className={`mb-16 lg:mb-20 ${align === "center" ? "text-center" : ""}`}
    >
      <div
        className={`inline-flex items-center gap-3 mb-4 ${
          align === "center" ? "justify-center w-full" : ""
        }`}
      >
        <span className="w-8 h-[2px] bg-primary" />
        <span className="text-primary text-xs tracking-[0.4em] uppercase font-semibold">
          {label}
        </span>
        {align === "center" && <span className="w-8 h-[2px] bg-primary" />}
      </div>
      <h2 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/40 text-lg max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
