"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const socials = [
  {
    name: "Facebook",
    handle: "Fahamedul Islam",
    url: "#",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 hover:text-[#1877F2]",
  },
  {
    name: "Instagram",
    handle: "@fahamedul.islam",
    url: "#",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    color: "hover:bg-[#E4405F]/10 hover:border-[#E4405F]/30 hover:text-[#E4405F]",
  },
  {
    name: "TikTok",
    handle: "@fahamedul",
    url: "#",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.6a8.23 8.23 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.01z" />
      </svg>
    ),
    color: "hover:bg-white/10 hover:border-white/30 hover:text-white",
  },
  {
    name: "X",
    handle: "@fahamedul10",
    url: "#",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "hover:bg-white/10 hover:border-white/30 hover:text-white",
  },
  {
    name: "Wikipedia",
    handle: "Fahamedul Islam",
    url: "#",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l2.681-5.312-2.37-4.726c-.357-.679-.537-1.044-.684-1.108-.145-.065-.534-.104-.748-.108-.162-.004-.233-.053-.233-.149v-.468l.06-.045h4.292l.051.045v.455c0 .115-.073.17-.219.17l-.473.024c-.37.018-.54.095-.54.263 0 .085.041.223.127.404l1.671 3.517 1.708-3.404c.115-.242.172-.44.172-.587 0-.217-.217-.332-.654-.345l-.393-.018c-.174-.003-.26-.054-.26-.158v-.472l.06-.042s2.86-.004 3.843-.004l.052.043v.468c0 .102-.073.155-.222.16-.694.023-1.105.166-1.105.166l-2.392 4.627 2.718 5.458s3.632-8.088 4.593-10.201c.126-.276.188-.493.188-.644 0-.226-.218-.339-.654-.339h-.58c-.168 0-.249-.058-.249-.164v-.468l.06-.042h4.495l.055.042v.468c0 .107-.068.163-.207.163-.682 0-1.195.226-1.542.88-.174.327-5.048 10.903-5.048 10.903z" />
      </svg>
    ),
    color: "hover:bg-white/10 hover:border-white/30 hover:text-white",
  },
];

export default function Social() {
  return (
    <section id="social" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(233,58,59,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeading
          label="Connect"
          title="FOLLOW THE JOURNEY"
          subtitle="Stay connected across all platforms for behind-the-scenes content, updates, and more."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {socials.map((social, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.a
                href={social.url}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`group flex flex-col items-center gap-4 p-8 border border-white/[0.06] bg-dark-2/50 text-white/40 transition-all duration-500 cursor-pointer ${social.color}`}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm text-white/70 group-hover:text-current transition-colors duration-300">
                    {social.name}
                  </div>
                  <div className="text-[11px] text-white/25 mt-1">
                    {social.handle}
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="section-divider mt-28 lg:mt-36 max-w-7xl mx-auto" />
    </section>
  );
}
