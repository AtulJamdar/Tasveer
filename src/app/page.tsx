import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGallery from "@/components/FeaturedGallery";
import Services from "@/components/Services";
import BookingProcess from "@/components/BookingProcess";
import Testimonials from "@/components/Testimonials";
import InstagramReel from "@/components/InstagramReel";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden selection:bg-gold-500 selection:text-black">
      {/* Background ambient editorial grid lines */}
      <div className="fixed inset-0 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-gold-300/40 h-full" />
        <div className="border-r border-gold-300/40 h-full" />
        <div className="border-r border-gold-300/40 h-full" />
        <div className="h-full" />
      </div>

      {/* Elegant scroll-morphed Header */}
      <Navbar />
      
      {/* Core Editorial Experience */}
      <main className="relative z-10">
        <Hero />
        <FeaturedGallery />
        <Testimonials />
        <Services />
        <BookingProcess />
        <InstagramReel />
        <FAQ />
      </main>

      {/* Emotional Final CTA & Footer */}
      <Footer />

      {/* High-intent mobile floating chat trigger */}
      <StickyCTA />
    </div>
  );
}
