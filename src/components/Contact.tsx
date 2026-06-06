"use client";

import { Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="absolute inset-0">
        <Image
          src="/images/bg/stadium-dark.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#050505]/97" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_100%,rgba(233,58,59,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeading
          label="Inquiries"
          title="GET IN TOUCH"
          subtitle="For brand partnerships, media requests, football opportunities, and collaborations."
        />

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-primary text-xs tracking-[0.4em] uppercase font-semibold mb-5">
                  Management
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-white/60">
                    <Mail size={16} className="text-primary/60 mt-0.5 shrink-0" />
                    <span className="text-sm">management@fahamedulislam.com</span>
                  </div>
                  <div className="flex items-start gap-3 text-white/60">
                    <MapPin size={16} className="text-primary/60 mt-0.5 shrink-0" />
                    <span className="text-sm">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-primary text-xs tracking-[0.4em] uppercase font-semibold mb-5">
                  Media & Press
                </h3>
                <div className="flex items-start gap-3 text-white/60">
                  <Mail size={16} className="text-primary/60 mt-0.5 shrink-0" />
                  <span className="text-sm">press@fahamedulislam.com</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-white/25 text-xs leading-relaxed">
                  Response time: 2-3 business days. For urgent inquiries, please
                  mark your subject line accordingly.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-white/40 text-[11px] tracking-[0.2em] uppercase block mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full bg-dark-3/80 border border-white/[0.06] focus:border-primary/30 px-4 py-3.5 text-white text-sm outline-none transition-colors duration-300 placeholder:text-white/15"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-white/40 text-[11px] tracking-[0.2em] uppercase block mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-dark-3/80 border border-white/[0.06] focus:border-primary/30 px-4 py-3.5 text-white text-sm outline-none transition-colors duration-300 placeholder:text-white/15"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="text-white/40 text-[11px] tracking-[0.2em] uppercase block mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full bg-dark-3/80 border border-white/[0.06] focus:border-primary/30 px-4 py-3.5 text-white text-sm outline-none transition-colors duration-300 placeholder:text-white/15"
                  placeholder="Partnership / Media / General"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-white/40 text-[11px] tracking-[0.2em] uppercase block mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-dark-3/80 border border-white/[0.06] focus:border-primary/30 px-4 py-3.5 text-white text-sm outline-none transition-colors duration-300 placeholder:text-white/15 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white text-sm font-semibold tracking-[0.2em] uppercase hover:bg-primary-light transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(233,58,59,0.3)]"
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
