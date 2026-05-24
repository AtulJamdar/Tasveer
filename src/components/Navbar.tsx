"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Stories", href: "#gallery" },
    { name: "Investment", href: "#services" },
    { name: "Our Process", href: "#process" },
    { name: "Reels", href: "#reels" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hi Tasveer! We love your cinematic portfolio and would love to check availability for our wedding.");
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-gold-100 uppercase transition-all duration-300 group-hover:text-gold-400">
              Tasveer
            </span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-gold-500 font-sans -mt-1 pl-0.5">
              Pune Studio
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase font-sans text-gold-100/70 hover:text-gold-400 transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-2.5 border border-gold-500/40 text-gold-400 text-xs tracking-[0.25em] uppercase hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-500 font-sans"
            >
              Inquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-4 z-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[1px] bg-gold-100 transition-all duration-300 ${
                isMobileMenuOpen ? "transform rotate-45 translate-y-[7.5px] w-6" : "w-6"
              }`}
            />
            <span
              className={`h-[1px] bg-gold-100 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "w-4 self-end"
              }`}
            />
            <span
              className={`h-[1px] bg-gold-100 transition-all duration-300 ${
                isMobileMenuOpen ? "transform -rotate-45 -translate-y-[7.5px] w-6" : "w-5 self-end"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-between px-8 py-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Overlay Art / Grid lines */}
        <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-5">
          <div className="border-r border-gold-300/40 h-full" />
          <div className="border-r border-gold-300/40 h-full" />
          <div className="h-full" />
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-8 mt-12 relative z-10">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-sans">
            Menu Navigation
          </span>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl italic tracking-wide text-gold-100 hover:text-gold-400 transition-colors duration-300 flex items-center space-x-4"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${idx * 70}ms` : "0ms",
                }}
              >
                <span className="font-sans text-xs tracking-widest text-gold-500/60 not-italic">
                  0{idx + 1}.
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="flex flex-col space-y-6 relative z-10">
          <div className="h-[1px] bg-white/5 w-full" />
          <div className="flex flex-col space-y-2">
            <p className="text-[10px] tracking-[0.2em] text-gold-500 font-sans uppercase">
              Pune Studio
            </p>
            <p className="text-xs text-gold-100/60 font-sans">
              Koregaon Park, Lane 6, Pune, India
            </p>
          </div>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleWhatsAppClick();
            }}
            className="w-full py-4 bg-gold-400 text-black text-xs font-sans tracking-[0.2em] uppercase font-semibold hover:bg-gold-500 transition-all duration-300"
          >
            Connect on WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
