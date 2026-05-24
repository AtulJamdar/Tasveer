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
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hi Tasveer, we would love to check availability for our wedding. Could you share your packages?"
    );

    window.open(
      `https://wa.me/919876543210?text=${text}`,
      "_blank"
    );
  };

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      
      {/* Background Slider */}
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
            className={`h-full w-full object-cover ${
              index === currentSlide ? "animate-slow-pan" : ""
            }`}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/30 to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center md:mt-20 md:px-12">
        
        {/* Tag */}
        <div
          className="mb-4 animate-fade-in opacity-0"
          style={{ animationDelay: "100ms" }}
        >
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-gold-400 md:text-xs">
            PUNE&apos;S PREMIER WEDDING CINEMATOGRAPHER
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 max-w-4xl font-serif text-4xl font-light leading-[1.1] tracking-wide text-gold-100 md:text-7xl md:leading-[1.15] animate-fade-in-up">
          Preserving the{" "}
          <span className="italic text-gold-400">poetry</span> of your love
          <span className="sr-only">
            {" "}
            | Wedding Photographer in Pune
          </span>
        </h1>

        {/* Description */}
        <p
          className="mb-10 max-w-2xl animate-fade-in font-sans text-sm font-light leading-relaxed tracking-wider text-gold-100/70 opacity-0 md:text-base"
          style={{ animationDelay: "400ms" }}
        >
          Luxury candid photography & premium cinematic films crafted for modern
          couples. We weave emotions, lights, and tears into heirloom
          masterpieces.
        </p>

        {/* Buttons */}
        <div
          className="flex w-full flex-col items-center justify-center gap-4 animate-fade-in opacity-0 sm:w-auto sm:flex-row"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="#gallery"
            className="w-full bg-gold-400 px-8 py-4 text-center font-sans text-xs font-bold uppercase tracking-[0.25em] text-black shadow-lg transition-all duration-300 hover:bg-gold-500 hover:shadow-gold-400/10 sm:w-auto"
          >
            View Portfolios
          </a>

          <button
            onClick={handleWhatsAppClick}
            className="w-full border border-white/20 px-8 py-4 text-center font-sans text-xs uppercase tracking-[0.25em] text-gold-100 backdrop-blur-sm transition-all duration-300 hover:border-gold-400 hover:text-gold-400 sm:w-auto"
          >
            Check Date Availability
          </button>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute inset-y-0 left-12 hidden w-[1px] bg-white/[0.02] md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-12 hidden w-[1px] bg-white/[0.02] md:block" />

      {/* Scroll Indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 transform flex-col items-center space-y-2">
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-500">
          Scroll to Explore
        </span>

        <div className="relative h-12 w-[1px] overflow-hidden bg-gradient-to-b from-gold-400 to-transparent">
          <div className="absolute left-0 top-0 h-1/2 w-full animate-bounce bg-white" />
        </div>
      </div>
    </section>
  );
}