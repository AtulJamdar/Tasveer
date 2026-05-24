"use client";

import { useState, useEffect } from "react";

const HERO_SLIDES = [
  {
    image: "/assets/hero/img1.jpg",
    alt: "Cinematic portrait of an Indian bride in red lehenga",
  },
  {
    image: "/assets/hero/img2.jpg",
    alt: "Indian couple smiling during pheras wedding ritual",
  },
  {
    image: "/assets/hero/img3.jpg",
    alt: "Detail of hands, jewelry, and mehendi at traditional Indian wedding",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Rotate slide every 6s
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hi Tasveer, we would love to check availability for our wedding. Could you share your packages?");
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image Slider with Pan Effect */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? "opacity-40" : "opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt={slide.alt}
            className={`w-full h-full object-cover ${
              index === currentSlide ? "animate-slow-pan" : ""
            }`}
          />
        </div>
      ))}

      {/* Cinematic Vignette and Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/30 to-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-12 md:mt-20">
        {/* Subtle Brand Tag */}
        <div className="mb-4 animate-fade-in opacity-0" style={{ animationDelay: "100ms" }}>
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-gold-400 font-sans font-semibold">
            PUNE&apos;S PREMIER WEDDING CINEMATOGRAPHER
          </span>
        </div>

        <h1 
          className="text-4xl md:text-7xl font-serif font-light text-gold-100 leading-[1.1] md:leading-[1.15] max-w-4xl tracking-wide mb-6 animate-fade-in-up"
        >
          Preserving the <span className="font-serif italic text-gold-400">poetry</span> of your love
          <span className="sr-only"> | Wedding Photographer in Pune</span>
        </h1>

        {/* Supporting description (Clean modern Sans) */}
        <p 
          className="text-sm md:text-base text-gold-100/70 font-sans font-light max-w-2xl leading-relaxed tracking-wider mb-10 animate-fade-in opacity-0"
          style={{ animationDelay: "400ms" }}
        >
          Luxury candid photography & premium cinematic films crafted for modern couples. We weave emotions, lights, and tears into heirloom masterpieces.
        </p>

        {/* Calls to Action */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in opacity-0"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-4 bg-gold-400 hover:bg-gold-500 text-black text-xs font-sans tracking-[0.25em] uppercase font-bold text-center transition-all duration-300 shadow-lg hover:shadow-gold-400/10"
          >
            View Portfolios
          </a>
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-gold-400 text-gold-100 hover:text-gold-400 text-xs font-sans tracking-[0.25em] uppercase text-center transition-all duration-300 backdrop-blur-sm"
          >
            Check Date Availability
          </button>
        </div>
      </div>

      {/* Decorative vertical lines representing cinematic grid */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none">
        <span className="text-[9px] tracking-[0.3em] uppercase text-gold-500 font-sans">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
