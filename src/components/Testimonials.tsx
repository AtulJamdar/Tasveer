"use client";

import { useState } from "react";
import Image from "next/image";

const FEATURED_TESTIMONIALS = [
  {
    id: 1,
    quote: "From our first consult call to the final heirloom box opening, Tasveer felt like family. The film did not just document our rituals; it captured the micro-moments—the tears in my father's eyes, the quick squeeze of Kabir's hand, and the heavy rain outside. It feels like an authentic movie, and we cry every single time we watch it.",
    author: "Rhea & Kabir",
    location: "Koregaon Park Pune Wedding",
    coupleImage: "https://images.unsplash.com/photo-1611106211090-8f3c79ee8552?q=80&w=300",
  },
  {
    id: 2,
    quote: "We were worried about feeling awkward in front of big cameras, but the Tasveer team blended so naturally into the crowd. They were invisible yet managed to capture the most breathtaking candid shots. The editorial quality is on par with international high-fashion magazines. Absolutely stellar storytelling!",
    author: "Nisha & Aman",
    location: "Palace Wedding Udaipur",
    coupleImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=300",
  },
  {
    id: 3,
    quote: "If you want raw emotions rather than stiff, overly-staged poses, Tasveer is the answer. They understood our vibe instantly and built a moodboard that perfectly matched our aesthetic. Our family and friends were blown away by the wedding trailer. They didn't just record a video, they crafted poetry.",
    author: "Priyanka & Arjun",
    location: "Mulshi Lake Resort Wedding",
    coupleImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=300",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-36 bg-dark-200 border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.35em] text-gold-400 font-sans uppercase block mb-3 font-semibold">
            In Their Words
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-gold-100 tracking-wide">
            Echoes of <span className="font-serif italic text-gold-400">Love</span>
          </h2>
        </div>

        {/* Asymmetrical Quote Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Large Highlighted Quote */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[380px] bg-transparent">
            {/* Custom Quotes Sign */}
            <div className="font-serif text-8xl text-gold-400/10 leading-none h-8 select-none">
              &ldquo;
            </div>

            {/* Testimonial Quote Text */}
            <p className="font-serif text-xl md:text-3xl lg:text-4xl text-gold-200 font-light italic leading-relaxed tracking-wide mb-8">
              {FEATURED_TESTIMONIALS[activeIndex].quote}
            </p>

            {/* Couple Profile Details */}
            <div className="flex items-center space-x-4">
              <Image
                src={FEATURED_TESTIMONIALS[activeIndex].coupleImage}
                alt={`${FEATURED_TESTIMONIALS[activeIndex].author} wedding portraits`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover border border-gold-500/20"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg text-gold-100 font-medium">
                  {FEATURED_TESTIMONIALS[activeIndex].author}
                </span>
                <span className="text-[9px] tracking-widest text-gold-500 font-sans uppercase">
                  {FEATURED_TESTIMONIALS[activeIndex].location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Selection Menu / Alternative Quotes */}
          <div className="lg:col-span-4 flex flex-col space-y-6 lg:border-l lg:border-white/5 lg:pl-10">
            <span className="text-[10px] tracking-[0.25em] text-gold-500 font-sans uppercase font-bold">
              Select Couple Stories
            </span>
            <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
              {FEATURED_TESTIMONIALS.map((couple, index) => (
                <button
                  key={couple.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-shrink-0 lg:w-full text-left p-5 transition-all duration-500 flex items-center justify-between ${
                    index === activeIndex
                      ? "bg-[#141414] border border-gold-500/30"
                      : "bg-[#0A0A0A] border border-white/5 hover:border-gold-500/20"
                  }`}
                >
                  <div className="flex flex-col pr-4">
                    <span className={`font-serif text-base transition-colors ${index === activeIndex ? "text-gold-400" : "text-gold-100"}`}>
                      {couple.author}
                    </span>
                    <span className="text-[8px] tracking-widest text-gold-100/40 font-sans uppercase mt-0.5">
                      {couple.location.split(" ")[0]} Celebration
                    </span>
                  </div>
                  {/* Small gold arrow indicating active */}
                  {index === activeIndex && (
                    <span className="text-gold-400 text-sm hidden lg:inline">
                      &rarr;
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            <div className="hidden lg:block pt-6 border-t border-white/5">
              <p className="text-[10px] text-gold-100/40 font-sans leading-relaxed">
                Featured couples are from our premium residencies in Pune, Mumbai, & Rajasthan.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
