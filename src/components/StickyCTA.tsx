"use client";

import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only after scrolling past 400px (past hero area)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hi Tasveer, we are on our mobile and want to check if you have availability for our wedding date!");
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-45 md:hidden px-4 pb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full bg-[#0E0E0E]/95 backdrop-blur-lg border border-gold-500/20 px-5 py-4 flex items-center justify-between shadow-2xl rounded-sm">
        
        {/* Left Side: Editorial Prompt */}
        <div className="flex flex-col text-left">
          <span className="text-[9px] tracking-[0.2em] text-gold-400 font-sans uppercase font-bold">
            Securing 2026
          </span>
          <span className="text-xs text-gold-100 font-sans tracking-wide mt-0.5">
            Check Date Availability
          </span>
        </div>

        {/* Right Side: High-impact WhatsApp Action Button */}
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center space-x-2 bg-gold-400 hover:bg-gold-500 text-black px-5 py-3 text-[10px] font-sans tracking-[0.25em] uppercase font-bold shadow-lg transition-all duration-300"
        >
          {/* Custom WhatsApp Vector */}
          <svg
            className="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.896 0c3.181.001 6.173 1.24 8.423 3.493C22.569 5.748 24 8.747 24 11.92c-.004 6.567-5.33 11.892-11.898 11.892-1.993-.001-3.951-.5-5.688-1.448L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97C16.581 1.918 14.116.892 11.9.892c-5.438 0-9.863 4.421-9.867 9.853-.001 1.77.462 3.5 1.34 5.025l-.995 3.637 3.731-.978zm11.567-7.82c-.3-.15-1.773-.875-2.048-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.496-1.782-1.671-2.082-.175-.3-.018-.462.13-.61.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 0-.275-.3-1.05-1.075-1.425-1.975-.347-.84-.716-.94-.975-.94-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.3-.275.225-1.05 1.025-1.05 2.5s1.025 2.9 1.175 3.1c.15.2 2.025 3.075 4.9 4.325.683.298 1.217.475 1.631.607.688.219 1.312.188 1.806.114.549-.082 1.773-.725 2.023-1.425.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.35z" />
          </svg>
          <span>Chat Now</span>
        </button>
      </div>
    </div>
  );
}
