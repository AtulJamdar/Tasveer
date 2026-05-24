"use client";

import { useState } from "react";
import Image from "next/image";

const GALLERY_CATEGORIES = ["All Stories", "Cinematic Films", "Intimate Rituals", "Editorial Portraits"];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Avani & Rohan",
    location: "Udaipur Palace",
    category: "Intimate Rituals",
    image: "/assets/FeaturedGallery/img1.jpg",
    aspect: "aspect-[3/4]", // Vertical
  },
  {
    id: 2,
    title: "Meera & Dev",
    location: "The Leela, Pune",
    category: "Cinematic Films",
    image: "/assets/FeaturedGallery/img2.jpg",
    aspect: "aspect-square", // Square
  },
  {
    id: 3,
    title: "Ananya & Kabir",
    location: "Koregaon Park, Pune",
    category: "Editorial Portraits",
    image: "/assets/FeaturedGallery/img3.jpg",
    aspect: "aspect-[3/4]", // Vertical
  },
  {
    id: 4,
    title: "Diya & Shlok",
    location: "Umaid Bhawan, Jodhpur",
    category: "Intimate Rituals",
    image: "/assets/FeaturedGallery/img4.jpg",
    aspect: "aspect-[16/10]", // Landscape
  },
  {
    id: 5,
    title: "Kriti & Sameer",
    location: "JW Marriott, Pune",
    category: "Editorial Portraits",
    image: "/assets/FeaturedGallery/img1.jpg",
    aspect: "aspect-[3/4]", // Vertical
  },
  {
    id: 6,
    title: "Sanjana & Yash",
    location: "Mulshi Lake Resort",
    category: "Cinematic Films",
    image: "/assets/FeaturedGallery/img2.jpg",
    aspect: "aspect-[16/10]", // Landscape
  },
];

export default function FeaturedGallery() {
  const [activeFilter, setActiveFilter] = useState("All Stories");

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => activeFilter === "All Stories" || item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#0A0A0A] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-xl">
            <span className="text-[10px] tracking-[0.3em] text-gold-400 font-sans uppercase block mb-3 font-semibold">
              Curated Love Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gold-100 leading-tight">
              Capturing raw emotion, <br />
              framed in <span className="font-serif italic text-gold-500">timeless luxury</span>
            </h2>
          </div>
          <div className="text-left md:text-right max-w-sm">
            <p className="text-xs md:text-sm text-gold-100/60 font-sans leading-relaxed tracking-wider font-light">
              Every couple has a rhythm, a soft laughter, a quiet touch. We document these subtle chapters into premium editorial visual art.
            </p>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-white/5 pb-6 mb-12">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`text-xs tracking-[0.2em] uppercase font-sans py-2 relative transition-colors duration-300 ${
                activeFilter === category ? "text-gold-400 font-medium" : "text-gold-100/40 hover:text-gold-100"
              }`}
            >
              {category}
              {activeFilter === category && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400 transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Column 1 */}
          <div className="grid gap-8 md:gap-12">
            {filteredItems.slice(0, 2).map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="grid gap-8 md:gap-12 md:mt-16">
            {filteredItems.slice(2, 4).map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="grid gap-8 md:gap-12 lg:mt-8">
            {filteredItems.slice(4, 6).map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item }: { item: typeof PORTFOLIO_ITEMS[0] }) {
  return (
    <div className="group relative w-full flex flex-col bg-transparent overflow-hidden">
      {/* Zoom Container */}
      <div className={`zoom-container relative w-full ${item.aspect} bg-dark-100 border border-white/5`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={`${item.title} wedding photos`}
          className="zoom-image w-full h-full object-cover grayscale opacity-90 transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:opacity-100"
        />

        {/* Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Floating Details */}
        <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[800ms] cubic-bezier(0.16,1,0.3,1) flex flex-col pointer-events-none">
          <span className="text-[10px] tracking-[0.2em] uppercase text-gold-400 font-sans font-medium mb-1">
            {item.category}
          </span>
          <span className="font-serif text-2xl text-gold-100 mb-0.5 tracking-wide">
            {item.title}
          </span>
          <span className="text-[10px] tracking-widest text-gold-100/60 font-sans uppercase font-light">
            {item.location}
          </span>
        </div>
      </div>

      {/* Static Label for Mobile/No-Hover accessibility */}
      <div className="mt-4 flex items-center justify-between px-1 md:hidden">
        <div>
          <h3 className="font-serif text-lg text-gold-100">{item.title}</h3>
          <p className="text-[9px] tracking-widest text-gold-500 font-sans uppercase">{item.location}</p>
        </div>
        <span className="text-[8px] tracking-widest text-gold-400 font-sans border border-gold-400/20 px-2 py-0.5 uppercase">
          {item.category}
        </span>
      </div>
    </div>
  );
}
