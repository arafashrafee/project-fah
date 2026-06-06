"use client";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Story", href: "#story" },
  { label: "Feature", href: "#feature" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider mb-4">
              <span className="text-primary">FAHAMEDUL</span>
              <span className="text-white/30 ml-1">ISLAM</span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs">
              Professional footballer representing Bangladesh. Fearless on the
              pitch, relentless in pursuit of greatness.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-primary text-[11px] tracking-[0.4em] uppercase font-semibold mb-5">
              Quick Links
            </h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/30 hover:text-white/60 text-sm transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-primary text-[11px] tracking-[0.4em] uppercase font-semibold mb-5">
              Social Media
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/30 hover:text-primary text-sm transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Fahamedul Islam. All rights
            reserved.
          </p>
          <p className="text-white/10 text-xs tracking-wider">
            Designed with passion for the beautiful game
          </p>
        </div>
      </div>
    </footer>
  );
}
