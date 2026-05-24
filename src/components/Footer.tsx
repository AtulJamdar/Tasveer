"use client";

export default function Footer() {
  const handleWhatsAppCTA = () => {
    const text = encodeURIComponent("Hi Tasveer, we are planning our wedding and would love to check your packages and schedule a call.");
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  const handleBrochureClick = () => {
    alert("Thank you! The Tasveer 2026 Wedding Cinema & Photography brochure has been sent to your device.");
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-28 pb-16 z-10 overflow-hidden">
      {/* Background Gold Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= FINAL CTA SECTION ================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-28 border-b border-white/5 pb-20">
          <span className="text-[10px] tracking-[0.4em] text-gold-400 font-sans uppercase mb-4 font-semibold">
            Reserve Your Date
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-gold-100 leading-tight mb-8">
            Let&apos;s write your <br />
            <span className="font-serif italic text-gold-400">heirloom story</span>
          </h2>
          
          <p className="text-xs md:text-sm text-gold-100/60 font-sans font-light max-w-xl leading-relaxed tracking-widest mb-10">
            For couples who value deep raw tears, spontaneous loud laughter, and moving pictures that truly breathe. Let us document your forever chapters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppCTA}
              className="w-full sm:w-auto px-8 py-4.5 bg-gold-400 hover:bg-gold-500 text-black text-xs font-sans tracking-[0.25em] uppercase font-bold transition-all duration-300 shadow-xl shadow-gold-400/5"
            >
              Inquire On WhatsApp
            </button>
            <button
              onClick={handleBrochureClick}
              className="w-full sm:w-auto px-8 py-4.5 border border-white/20 hover:border-gold-400 text-gold-100 hover:text-gold-400 text-xs font-sans tracking-[0.25em] uppercase transition-all duration-300 bg-transparent"
            >
              Download Investment Guide
            </button>
          </div>
        </div>

        {/* ================= FOOTER LINKS & CONTACT SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          
          {/* Logo & Studio details */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <a href="#" className="flex flex-col w-fit">
              <span className="font-serif text-3xl tracking-[0.25em] text-gold-100 uppercase transition-colors hover:text-gold-400">
                Tasveer
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold-500 font-sans -mt-1 pl-0.5">
                Pune Wedding Studio
              </span>
            </a>
            <p className="text-xs text-gold-100/60 font-sans font-light leading-relaxed tracking-wider max-w-sm">
              We are a collective of elite wedding photographers and filmmakers preserving spontaneous romance and royal heritage weddings since 2018.
            </p>
            <div className="flex flex-col space-y-2 text-xs text-gold-100/80 font-sans font-light tracking-wide">
              <p className="flex items-center">
                <span className="text-gold-400 mr-2 font-bold font-serif italic">A:</span> Lane 6, Koregaon Park, Pune, Maharashtra 411001
              </p>
              <p className="flex items-center">
                <span className="text-gold-400 mr-2 font-bold font-serif italic">E:</span> hello@tasveerweddingphotography.com
              </p>
              <p className="flex items-center">
                <span className="text-gold-400 mr-2 font-bold font-serif italic">P:</span> +91 98765 43210 / +91 20 2663 4882
              </p>
            </div>
          </div>

          {/* Sitemap links */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-sans font-bold">
              The Navigation
            </span>
            <ul className="flex flex-col space-y-3 text-xs font-sans tracking-widest text-gold-100/60 font-light">
              <li>
                <a href="#gallery" className="hover:text-gold-400 transition-colors duration-300">Portfolios</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors duration-300">Investment Packages</a>
              </li>
              <li>
                <a href="#process" className="hover:text-gold-400 transition-colors duration-300">The Method</a>
              </li>
              <li>
                <a href="#reels" className="hover:text-gold-400 transition-colors duration-300">Instagram Reels</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-400 transition-colors duration-300">Planning FAQs</a>
              </li>
            </ul>
          </div>

          {/* Social connections */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-sans font-bold">
              Cinematic Feeds
            </span>
            <p className="text-xs text-gold-100/50 font-sans font-light leading-relaxed">
              We share high-fidelity BTS frames, full length trailers, and emotional couple stories daily. Connect with our artistic streams.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gold-100/60 uppercase tracking-[0.2em] font-sans">
              <a
                href="https://instagram.com/tasveer_photography_pune"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors duration-300"
              >
                Vimeo
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors duration-300"
              >
                YouTube
              </a>
            </div>
          </div>

        </div>

        {/* ================= COPYRIGHT / FOOTNOTE ================= */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-center gap-4">
          <p className="text-[10px] tracking-wider text-gold-100/40 font-sans font-light">
            &copy; {new Date().getFullYear()} Tasveer Photography Pune. All Rights Reserved.
          </p>
          <p className="text-[10px] tracking-[0.25em] text-gold-500 uppercase font-sans font-medium">
            Preserving Poetry &bull; Framing Love
          </p>
        </div>

      </div>
    </footer>
  );
}
