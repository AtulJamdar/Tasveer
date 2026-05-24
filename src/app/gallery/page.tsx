"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Weddings", "Pre-Wedding", "Haldi", "Engagement", "Destination"];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Avani & Rohan",
    location: "Umaid Bhawan Palace, Jodhpur",
    category: "Destination",
    image: "/assets/hero/img1.jpg",
    aspect: "aspect-[16/10]", // Landscape
    story: "A grand destination pheras ceremony under the golden sandstone pillars of Jodhpur. The desert sunset cast a warm, imperial glow over their sacred vows.",
  },
  {
    id: 2,
    title: "Ananya & Kabir",
    location: "The Leela Palace, Udaipur",
    category: "Weddings",
    image: "/assets/hero/img2.jpg",
    aspect: "aspect-[3/4]", // Vertical
    story: "Capturing the final adjustments of Ananya's red bridal lehenga. In this raw moment, the soft whisper of her mother filled the royal dressing suite with quiet tears.",
  },
  {
    id: 3,
    title: "Kriti & Sameer",
    location: "Mulshi Lake Resort, Pune",
    category: "Pre-Wedding",
    image: "/assets/hero/img3.jpg",
    aspect: "aspect-[3/4]", // Vertical
    story: "A quiet, romantic evening walk along the banks of Mulshi Lake. The golden hour sun broke through the monsoon clouds, framing their embrace in natural backlight.",
  },
  {
    id: 4,
    title: "Meera & Dev",
    location: "Koregaon Park Studio, Pune",
    category: "Engagement",
    image: "/assets/FeaturedGallery/img1.jpg",
    aspect: "aspect-square", // Square
    story: "The exact micro-second of the ring exchange. Close-up details capturing the fine silver bands, the intricate hand mehendi, and the subtle tremble of anticipation.",
  },
  {
    id: 5,
    title: "Diya & Shlok",
    location: "JW Marriott, Pune",
    category: "Haldi",
    image: "/assets/FeaturedGallery/img2.jpg",
    aspect: "aspect-[3/4]", // Vertical
    story: "A spectacular spray of fresh marigold petals and turmeric splashes. Diya laughed out loud as her brothers drenched her in celebratory haldi colors.",
  },
  {
    id: 6,
    title: "Rhea & Vivek",
    location: "Beachside Altar, South Goa",
    category: "Destination",
    image: "/assets/FeaturedGallery/img3.jpg",
    aspect: "aspect-[16/10]", // Landscape
    story: "An intimate beach wedding altar set against the roaring waves of South Goa. They walked hand-in-hand down the sandy aisle as the sky turned a deep pastel pink.",
  },
  {
    id: 7,
    title: "Sanjana & Yash",
    location: "Oxford Golf Club, Pune",
    category: "Pre-Wedding",
    image: "/assets/FeaturedGallery/img4.jpg",
    aspect: "aspect-[16/10]", // Landscape
    story: "Sanjana and Yash sharing a quiet laugh on the rolling lawns of Pune's golf valley, highlighting natural candid frames without staged poses.",
  },
  {
    id: 8,
    title: "Priyanka & Arjun",
    location: "Conrad Hotel, Pune",
    category: "Weddings",
    image: "/assets/hero/img1.jpg",
    aspect: "aspect-square", // Square
    story: "The joyful entry of the groom, Arjun, carried high on his friends' shoulders under a canopy of hand-woven baby's breath flowers.",
  },
  {
    id: 9,
    title: "Nisha & Aman",
    location: "Sheraton Grand, Pune",
    category: "Haldi",
    image: "/assets/hero/img2.jpg",
    aspect: "aspect-[3/4]", // Vertical
    story: "A beautiful candid capture of Nisha laughing through teary eyes as her grandmothers blessed her with turmeric paste and family prayers.",
  },
  {
    id: 10,
    title: "Tanya & Aditya",
    location: "Hyatt Regency, Pune",
    category: "Engagement",
    image: "/assets/hero/img3.jpg",
    aspect: "aspect-[3/4]", // Vertical
    story: "An intimate close-up of Tanya's hand holding Aditya's ring, showcasing custom diamond carvings, fine silk textures, and raw emotion.",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Mobile Swipe Gesture States
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Filter Items
  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  const handleClose = () => {
    setSelectedIdx(null);
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  // Mobile Swipe Gesture Listeners
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50; // Swiped left (Next)
    const isRightSwipe = distance < -50; // Swiped right (Prev)

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    // Reset touch variables
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleWhatsAppInquiry = (item: typeof GALLERY_ITEMS[0]) => {
    const text = encodeURIComponent(
      `Hi Tasveer! I was browsing your premium gallery and absolutely fell in love with ${item.title}'s frame from ${item.location}. Can you check availability and share a quote?`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gold-100 relative">
      {/* Background visual grid lines */}
      <div className="fixed inset-0 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-gold-300/40 h-full" />
        <div className="border-r border-gold-300/40 h-full" />
        <div className="border-r border-gold-300/40 h-full" />
        <div className="h-full" />
      </div>

      {/* Header / Back Navigation */}
      <header className="border-b border-white/5 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs tracking-[0.2em] uppercase text-gold-400 hover:text-gold-100 transition-colors duration-300"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
          
          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-xl md:text-2xl tracking-[0.25em] text-gold-100 uppercase">
              Tasveer
            </span>
            <span className="text-[7px] tracking-[0.4em] uppercase text-gold-500 font-sans -mt-0.5">
              Pune Studio
            </span>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%20Tasveer!%20We%20want%20to%20check%20availability%20for%20our%20wedding..."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block border border-gold-500/20 hover:border-gold-400 px-4 py-2 text-[9px] font-sans tracking-[0.25em] uppercase text-gold-400 hover:text-black hover:bg-gold-400 transition-all duration-300"
          >
            Check Calendar
          </a>
        </div>
      </header>

      {/* Page Title */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-[9px] tracking-[0.35em] text-gold-400 font-sans uppercase block mb-3 font-semibold">
            Fine-Art Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-gold-100 tracking-wide mb-6">
            The Cinematic <span className="font-serif italic text-gold-400">Chronicle</span>
          </h1>
          <p className="text-xs md:text-sm text-gold-100/60 font-sans leading-relaxed tracking-wider font-light">
            An organic anthology of raw laughter, tears, and heritage ceremonies. Use the filters below to explore chapters of our editorial storytelling.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-8 border-b border-white/5 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIdx(null); // Clear active slides on filter change
              }}
              className={`text-xs tracking-[0.2em] uppercase font-sans py-2 relative transition-colors duration-300 ${
                (cat === "All" && activeCategory === "All") || activeCategory === cat
                  ? "text-gold-400 font-semibold"
                  : "text-gold-100/40 hover:text-gold-100"
              }`}
            >
              {cat}
              {((cat === "All" && activeCategory === "All") || activeCategory === cat) && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400 transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* TRUE CSS MASONRY GRID LAYOUT */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 [column-fill:_balance]">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(index)}
              className="break-inside-avoid mb-6 md:mb-8 w-full block group cursor-pointer relative overflow-hidden bg-dark-100 border border-white/5"
            >
              {/* Image Frame */}
              <div className="zoom-container relative w-full h-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={`${item.title} wedding memories`}
                  className="zoom-image w-full h-auto object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s]"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Bottom Story details revealed on Hover */}
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[800ms] cubic-bezier(0.16,1,0.3,1) flex flex-col pointer-events-none">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-gold-400 font-sans font-medium mb-1">
                    {item.category} Story
                  </span>
                  <span className="font-serif text-xl text-gold-100 mb-0.5 tracking-wide">
                    {item.title}
                  </span>
                  <span className="text-[9px] tracking-widest text-gold-100/60 font-sans uppercase font-light">
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Mobile text caption (Visible under card for mobile touch devices) */}
              <div className="p-4 flex flex-col md:hidden">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-serif text-lg text-gold-100">{item.title}</h3>
                  <span className="text-[8px] tracking-widest text-gold-400 font-sans uppercase border border-gold-400/20 px-2 py-0.5">
                    {item.category}
                  </span>
                </div>
                <p className="text-[9px] tracking-widest text-gold-500 font-sans uppercase mb-2">
                  {item.location}
                </p>
                <p className="text-[10px] text-gold-100/50 font-sans font-light leading-relaxed">
                  {item.story.slice(0, 70)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ================= IMMERSIVE LIGHTBOX WITH MOBILE SWIPE ================= */}
      {selectedIdx !== null && (
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between p-6 md:p-12 animate-fade-in"
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between w-full relative z-10">
            <div className="flex flex-col text-left">
              <span className="text-[9px] tracking-[0.25em] text-gold-400 uppercase font-sans font-bold">
                Chapter 0{selectedIdx + 1}
              </span>
              <span className="text-xs text-gold-100/40 font-sans">
                {filteredItems[selectedIdx].category} Story
              </span>
            </div>
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-gold-400/50 flex items-center justify-center text-gold-100 hover:text-gold-400 transition-colors duration-300"
              aria-label="Close Lightbox"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Lightbox Center Picture Frame */}
          <div className="flex-grow flex items-center justify-center relative w-full h-[55vh] md:h-[65vh] my-4">
            {/* Desktop Left navigation arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 w-12 h-12 rounded-full border border-white/10 hover:border-gold-400 bg-black/40 text-gold-100 hover:text-black hover:bg-gold-400 items-center justify-center transition-all duration-300 hidden md:flex z-20"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Main Picture Frame */}
            <div className="relative w-full h-full max-w-5xl flex items-center justify-center select-none pointer-events-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={filteredItems[selectedIdx].image}
                alt={filteredItems[selectedIdx].title}
                className="max-w-full max-h-full object-contain border border-white/5 shadow-2xl"
              />
            </div>

            {/* Desktop Right navigation arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 w-12 h-12 rounded-full border border-white/10 hover:border-gold-400 bg-black/40 text-gold-100 hover:text-black hover:bg-gold-400 items-center justify-center transition-all duration-300 hidden md:flex z-20"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Lightbox Footer (Backstory & Inquiries) */}
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6 relative z-10 border-t border-white/5 pt-6">
            
            {/* Story Text */}
            <div className="max-w-2xl text-left">
              <span className="text-[10px] tracking-widest text-gold-500 uppercase font-sans block mb-1">
                {filteredItems[selectedIdx].location}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-gold-100 mb-3 tracking-wide">
                {filteredItems[selectedIdx].title}
              </h2>
              <p className="text-xs md:text-sm text-gold-100/70 font-sans font-light leading-relaxed tracking-wider">
                {filteredItems[selectedIdx].story}
              </p>
            </div>

            {/* Contextual Lead Button */}
            <button
              onClick={() => handleWhatsAppInquiry(filteredItems[selectedIdx])}
              className="w-full md:w-auto px-6 py-4 bg-gold-400 hover:bg-gold-500 text-black text-[10px] font-sans tracking-[0.25em] uppercase font-bold transition-all duration-300 shadow-xl"
            >
              Inquire About Similar Style
            </button>
          </div>

          {/* Mobile swipe help text indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 md:hidden pointer-events-none">
            <span className="text-[7px] tracking-[0.3em] uppercase text-gold-500/50 font-sans">
              Swipe Left / Right to Browse
            </span>
          </div>
        </div>
      )}

      {/* Studio Footer */}
      <footer className="border-t border-white/5 py-12 text-center bg-[#050505] relative z-10">
        <p className="text-[10px] tracking-wider text-gold-100/30 font-sans font-light">
          &copy; {new Date().getFullYear()} Tasveer Photography. Preserving Poetry &bull; Pune Studio
        </p>
      </footer>
    </div>
  );
}
