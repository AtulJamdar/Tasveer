"use client";

import Image from "next/image";

const REELS = [
  {
    id: 1,
    title: "The Royal Pheras at Umaid Bhawan",
    views: "1.4M",
    likes: "128K",
    category: "Royal Cinematic",
    duration: "0:30",
    image: "/assets/hero/img3.jpg",
  },
  {
    id: 2,
    title: "The Emotional Vidaai (Farewell)",
    views: "890K",
    likes: "94K",
    category: "Raw Emotions",
    duration: "0:45",
    image: "/assets/hero/img1.jpg",
  },
  {
    id: 3,
    title: "The Choreographed Sangeet Night",
    views: "2.1M",
    likes: "215K",
    category: "Festive Vibes",
    duration: "0:50",
    image: "/assets/hero/img2.jpg",
  },
];

export default function InstagramReel() {
  const handleFollow = () => {
    window.open("https://instagram.com/tasveer_photography_pune", "_blank");
  };

  return (
    <section id="reels" className="py-24 md:py-36 bg-[#0A0A0A] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-xl">
            <span className="text-[10px] tracking-[0.35em] text-gold-400 font-sans uppercase block mb-3 font-semibold">
              Social Proof
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-gold-100 tracking-wide leading-tight">
              Cinematic Reels that <br />
              went <span className="font-serif italic text-gold-400">viral</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <button
              onClick={handleFollow}
              className="px-6 py-3 border border-gold-500/20 hover:border-gold-400 text-gold-400 text-xs font-sans tracking-[0.2em] uppercase font-bold transition-all duration-300 bg-transparent hover:bg-gold-400 hover:text-black"
            >
              Follow @tasveer_pune
            </button>
          </div>
        </div>

        {/* Reels Mobile-First Mockup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="group relative flex flex-col bg-transparent overflow-hidden rounded-sm cursor-pointer"
            >
              {/* Vertical Card Container */}
              <div className="zoom-container relative aspect-[9/16] bg-dark-100 border border-white/5 shadow-2xl">
                <Image
                  src={reel.image}
                  alt={reel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="zoom-image w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.5s]"
                />

                {/* Vertical Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 group-hover:via-black/10 transition-colors duration-700 pointer-events-none" />

                {/* Play Button Indicator (Gold circle) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:bg-gold-400 group-hover:border-gold-400 group-hover:scale-110">
                    <svg
                      className="w-4 h-4 text-white group-hover:text-black transition-colors translate-x-[2px]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-6 left-6 flex items-center space-x-2">
                  <span className="text-[8px] tracking-widest text-gold-400 bg-black/60 border border-gold-400/20 px-2 py-0.5 uppercase font-sans">
                    {reel.category}
                  </span>
                  <span className="text-[8px] tracking-widest text-white/60 bg-black/60 border border-white/10 px-2 py-0.5 uppercase font-sans">
                    {reel.duration}
                  </span>
                </div>

                {/* Bottom Video Details */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col pointer-events-none">
                  {/* Views & Likes Panel */}
                  <div className="flex items-center space-x-4 mb-2 text-[9px] tracking-widest text-gold-400 font-sans uppercase font-medium">
                    <span className="flex items-center space-x-1">
                      <svg className="w-3 h-3 text-gold-400 mr-1 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {reel.views} Views
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-3 h-3 text-red-500 mr-1 inline" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      {reel.likes} Likes
                    </span>
                  </div>

                  {/* Caption */}
                  <h3 className="font-serif text-lg md:text-xl text-gold-100 leading-snug">
                    {reel.title}
                  </h3>
                </div>
              </div>

              {/* Mobile text caption (Outside card for accessibility) */}
              <div className="mt-4 flex items-center justify-between px-1 md:hidden">
                <span className="font-serif text-base text-gold-100">{reel.title}</span>
                <span className="text-[9px] tracking-widest text-gold-400 font-sans uppercase font-bold">
                  {reel.views} Views
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom micro-copy linking to Instagram */}
        <div className="mt-12 text-center">
          <p className="text-[10px] text-gold-100/40 font-sans tracking-wide">
            * All reels are edited natively in-studio matching premium audio licensing.
          </p>
        </div>
      </div>
    </section>
  );
}