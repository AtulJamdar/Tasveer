"use client";

import { useState } from "react";

const FAQS = [
  {
    id: 1,
    question: "Where is your studio based, and do you travel for destination weddings?",
    answer: "Our primary creative studio is based in Koregaon Park, Pune. However, we document love stories globally. Over 60% of our assignments are destination weddings across Rajasthan (Udaipur, Jaipur), Goa, Mumbai, and international locations. Travel and accommodation charges are added directly to custom commissions.",
  },
  {
    id: 2,
    question: "How early in advance should we secure our wedding dates with Tasveer?",
    answer: "Because we prioritize editorial quality and emotional detail, we take on a strictly limited number of commissions each season (typically no more than 15-20 weddings per year). To secure our team, most premium couples book us 6 to 9 months in advance, especially for the heavy winter wedding calendar.",
  },
  {
    id: 3,
    question: "What is your delivery timeline for final photographs and cinematic films?",
    answer: "Art takes time. Color-grading hundreds of candid photographs and custom-scoring a 30-minute cinematic wedding feature film requires meticulous editing. Our standard delivery timeline is 8 to 12 weeks post-wedding. However, we deliver a 3-minute cinematic teaser within 14 days of your sangeet/reception so you can share it with friends.",
  },
  {
    id: 4,
    question: "Do you share raw, unedited files with the family?",
    answer: "We deliver comprehensive, high-resolution post-processed digital masters. We do not release raw, unedited RAW files because they represent incomplete artwork—much like an author sharing rough outlines. Rest assured, our selection process is highly inclusive, ensuring every genuine smile, ritual, and tear is preserved in your final gallery.",
  },
  {
    id: 5,
    question: "How do you coordinate with our wedding planner and event decorators?",
    answer: "Seamlessly. Once booked, we join planning calls with your decorators and planners to review the venue layout, stage coordinates, lighting temperatures (essential for warm, cinematic skin tones), and ritual timelines. We ensure our team is aligned perfectly so you can focus entirely on enjoying your celebration.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-dark-200 border-b border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.35em] text-gold-400 font-sans uppercase block mb-3 font-semibold">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-gold-100 tracking-wide">
            Planning & <span className="font-serif italic text-gold-400">Context</span>
          </h2>
        </div>

        {/* Collapsible FAQ Accordion List */}
        <div className="flex flex-col border-t border-white/5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-white/5 py-6 md:py-8 smooth-transition">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="font-serif text-lg md:text-2xl text-gold-100 group-hover:text-gold-400 transition-colors duration-300 pr-6">
                    {faq.question}
                  </span>
                  
                  {/* Rotating gold plus/minus icon */}
                  <span className="flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gold-400 transition-all duration-300 group-hover:border-gold-400/40">
                    <svg
                      className={`w-3 h-3 transform transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>

                {/* Collapsible content area */}
                <div
                  className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs md:text-sm text-gold-100/70 font-sans font-light leading-relaxed tracking-wider">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gold-100/50 font-sans font-light">
            Have a highly specific planning question not answered here?{" "}
            <a
              href="https://wa.me/919876543210?text=Hi%20Tasveer!%20I%20have%20a%20few%20questions%20about%20your%20wedding%20packages..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 underline hover:text-gold-500 transition-colors"
            >
              Ask our studio team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
