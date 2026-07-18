import { MessageCircle, Phone, Sparkles } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/447752263659?text=Hi%20Book%26Clean%2C%20I%27d%20like%20to%20request%20a%20quote.";

export default function HeroSection() {
  return (
    <section
  id="home"
  className="relative min-h-[90vh] flex items-end overflow-hidden"
>
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Bright, professionally cleaned home"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
      </div>

      <div className="relative z-10 w-full px-5 sm:px-6 pb-12 sm:pb-16 md:pb-20 pt-28 sm:pt-32">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-[#c5a45a]">
            Professional Cleaning Across Oxford
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-5"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Leave the Cleaning to{" "}
            <span className="block sm:inline text-[#c5a45a]">
              Book&amp;Clean
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-white/90 mb-6">
            Professional cleaning and sanitisation for homes and businesses
            across Oxford and the surrounding areas. From regular house
            cleaning to deep cleans and specialist upholstery care, every job
            is completed with care and attention to detail.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/80 mb-5">
            <Sparkles className="w-4 h-4 text-[#c5a45a] shrink-0" />
            <span>Professional equipment and quality products</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b5964d] hover:bg-[#9f813f] transition-colors px-7 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Get a Free Quote
            </a>

            <a
              href="tel:07752263659"
              className="border border-white/60 bg-white/10 hover:bg-white hover:text-black transition-colors px-7 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}