"use client";

const STEPS = [
  {
    number: "01",
    title: "The Dialogue",
    subtitle: "Inquiry & Virtual Consultation",
    description: "Every great collection starts with a simple conversation. We align on dates, discuss your celebratory timeline, and explore your stylistic expectations.",
  },
  {
    number: "02",
    title: "The Vision Board",
    subtitle: "Creative Direction & Moodboarding",
    description: "We don't shoot blindly. Prior to the celebrations, we collaborate on a customized visual styleboard detailing color scopes, framing styles, and audio themes.",
  },
  {
    number: "03",
    title: "The Celebration",
    subtitle: "Candid Documenting on the Day",
    description: "Our photographers and filmmakers blend into the crowds. We capture authentic emotions, whispers, and dances without being intrusive or blocking views.",
  },
  {
    number: "04",
    title: "The Heirloom",
    subtitle: "Mastering & Custom Box Delivery",
    description: "We color-grade every frame and engineer cinematic soundscapes. Your memories are delivered digitally, accompanied by a custom premium leather prints box.",
  },
];

export default function BookingProcess() {
  const handleConsultation = () => {
    const text = encodeURIComponent("Hi Tasveer, I would like to schedule an introductory consultation call for our wedding.");
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <section id="process" className="py-24 md:py-36 bg-[#0A0A0A] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <span className="text-[10px] tracking-[0.35em] text-gold-400 font-sans uppercase block mb-3 font-semibold">
            Our Method
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-gold-100 tracking-wide mb-6">
            The Path to <span className="font-serif italic text-gold-400">Preservation</span>
          </h2>
          <p className="text-xs md:text-sm text-gold-100/60 font-sans leading-relaxed tracking-wider font-light">
            We follow a meticulous, four-step artistic workflow to ensure your wedding film and candid frames feel exactly like an award-winning cinematic masterwork.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Desktop connecting horizontal line */}
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/5 hidden lg:block pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {STEPS.map((step) => (
              <div key={step.number} className="flex flex-col group">
                {/* Step Circle & Number */}
                <div className="flex items-baseline space-x-3 mb-6 relative">
                  {/* Subtle top indicator for desktop styling */}
                  <div className="w-2 h-2 rounded-full bg-gold-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute -top-[5px] left-0 hidden lg:block" />

                  <span className="font-serif text-5xl md:text-6xl text-gold-500/20 group-hover:text-gold-400/80 transition-colors duration-500 font-light italic">
                    {step.number}
                  </span>
                  <div className="h-[1px] bg-white/5 w-12 hidden lg:block" />
                </div>

                {/* Step Content */}
                <h3 className="font-serif text-xl text-gold-100 mb-1 group-hover:text-gold-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[9px] tracking-widest text-gold-500 uppercase font-sans font-medium mb-4">
                  {step.subtitle}
                </p>
                <p className="text-xs text-gold-100/60 font-sans font-light leading-relaxed tracking-wider">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-step Bottom CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <button
            onClick={handleConsultation}
            className="px-10 py-5 bg-[#121212] border border-gold-500/20 hover:border-gold-400 text-gold-400 text-xs font-sans tracking-[0.25em] uppercase font-bold transition-all duration-500 hover:bg-gold-400 hover:text-black hover:shadow-xl hover:shadow-gold-400/5"
          >
            Schedule Free Consultation Call
          </button>
        </div>
      </div>
    </section>
  );
}
