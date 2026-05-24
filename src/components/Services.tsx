"use client";

const COLLECTIONS = [
  {
    id: "heirloom",
    title: "The Heirloom Collection",
    subtitle: "Complete Cinematic & Photo Coverage",
    description: "Our signature all-inclusive visual package designed to capture the absolute emotional essence of your multi-day wedding celebration.",
    price: "₹3,50,000",
    deliverables: [
      "Signature 3-Day Wedding Storytelling",
      "Fine-Art Candid & Traditional Stills",
      "Cinematic Wedding Feature Film (25-30 min)",
      "Bespoke 3-Minute Trailer / Teaser",
      "Premium Leather Hardbound Heirloom Album",
      "Comprehensive Digital Cloud Archive",
      "Team of 3 Photographers & 3 Cinematographers",
    ],
    popular: true,
  },
  {
    id: "anthology",
    title: "The Cinematic Anthology",
    subtitle: "Cinema & Audio-Visual Storytelling",
    description: "Dedicated to breathtaking moving pictures. We weave stunning cinematic shots, atmospheric sounds, and intimate interviews into a movie.",
    price: "₹2,20,000",
    deliverables: [
      "Cinematic Moving Pictures Coverage",
      "4K Ultra-HD Master Grading & Sound Design",
      "Cinematic Documentary Film (15-20 min)",
      "Pre-Wedding Cinematic Love Story Video",
      "Aerial drone cinematography (where permitted)",
      "Team of 3 Elite Cinematographers",
    ],
    popular: false,
  },
  {
    id: "stills",
    title: "The Editorial Still",
    subtitle: "Fine-Art Candid Photography",
    description: "A focused collection capturing the silent glances, loud laughs, and traditional details in beautiful, print-ready digital masterpieces.",
    price: "₹1,80,000",
    deliverables: [
      "Fine-Art Candid & Creative Photography",
      "Full Traditional Ritual Documentation",
      "Premium Post-Processed Digital Masters",
      "Custom Wedding Day Moodboarding",
      "Fine-Art Prints Box (50 Handpicked Frames)",
      "Team of 2 Elite Photographers",
    ],
    popular: false,
  },
];

export default function Services() {
  const handleInquiry = (collectionName: string) => {
    const text = encodeURIComponent(`Hi Tasveer, we are looking at your "${collectionName}" package and want to check availability for our wedding.`);
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-dark-200 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <span className="text-[10px] tracking-[0.35em] text-gold-400 font-sans uppercase block mb-3 font-semibold">
            Bespoke Services
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-gold-100 tracking-wide mb-6">
            Curated <span className="font-serif italic text-gold-400">Collections</span>
          </h2>
          <p className="text-xs md:text-sm text-gold-100/60 font-sans leading-relaxed tracking-wider font-light">
            We don&apos;t count hours; we document stories. Choose a collection that aligns with your celebration, or inquire for a custom-tailored commission.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {COLLECTIONS.map((collection) => (
            <div
              key={collection.id}
              className={`glass-card p-8 md:p-10 flex flex-col relative transition-all duration-500 hover:-translate-y-2 ${
                collection.popular ? "border-gold-500/30 bg-[#0E0E0E]" : "border-white/5 bg-[#0A0A0A]"
              }`}
            >
              {collection.popular && (
                <span className="absolute -top-3 left-10 px-3 py-1 bg-gold-400 text-black text-[9px] font-sans tracking-[0.2em] uppercase font-bold">
                  Highly Commended
                </span>
              )}

              {/* Title Header */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl text-gold-100 mb-1">{collection.title}</h3>
                <p className="text-[10px] tracking-widest uppercase text-gold-500 font-sans font-light">
                  {collection.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-gold-100/60 font-sans font-light leading-relaxed tracking-wider mb-8 h-16 overflow-hidden">
                {collection.description}
              </p>

              {/* Pricing */}
              <div className="border-t border-b border-white/5 py-6 mb-8 flex items-baseline justify-between">
                <span className="text-[10px] tracking-widest text-gold-500 uppercase font-sans">
                  Investment
                </span>
                <div className="text-right">
                  <span className="text-2xl font-serif text-gold-400">{collection.price}</span>
                  <span className="text-[9px] tracking-widest text-gold-100/40 font-sans block">
                    Starting price / Day
                  </span>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="flex flex-col space-y-4 mb-10 flex-grow">
                <span className="text-[9px] tracking-widest text-gold-500 uppercase font-sans font-bold">
                  What is Preserved
                </span>
                <ul className="flex flex-col space-y-3">
                  {collection.deliverables.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      {/* Premium Gold Bullet */}
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500/60 flex-shrink-0" />
                      <span className="text-xs text-gold-100/80 font-sans font-light tracking-wide leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Action */}
              <button
                onClick={() => handleInquiry(collection.title)}
                className={`w-full py-4 text-xs font-sans tracking-[0.25em] uppercase font-bold transition-all duration-300 ${
                  collection.popular
                    ? "bg-gold-400 hover:bg-gold-500 text-black shadow-lg shadow-gold-400/5"
                    : "border border-white/20 hover:border-gold-400 hover:text-gold-400 text-gold-100 bg-transparent"
                }`}
              >
                Inquire For Availability
              </button>
            </div>
          ))}
        </div>

        {/* Tailored Commision Subtext */}
        <div className="mt-16 text-center max-w-lg mx-auto">
          <p className="text-xs text-gold-100/50 font-sans font-light leading-relaxed">
            Planning a multi-city destination wedding or an intimate elopement? <br />
            We commission custom proposals to perfectly match your travel plans.{" "}
            <a
              onClick={() => handleInquiry("Custom Commission")}
              className="text-gold-400 underline cursor-pointer hover:text-gold-500 transition-colors"
            >
              Request Custom Quote
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
