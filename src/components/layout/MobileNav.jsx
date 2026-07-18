import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Home,
  Info,
  Briefcase,
  Mail,
} from "lucide-react";

const PHONE = "07752263659";

const WHATSAPP =
  "https://wa.me/447752263659?text=Hi%20Book%26Clean%2C%20I'd%20like%20to%20request%20a%20quote.";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setOpen(false);

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (!section) return;

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-[#f1ede6] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-0.5">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            aria-label="Go to homepage"
            className="cursor-pointer"
          >
            <img
              src="/images/logo.png"
              alt="Book&Clean"
              className="h-14 w-14 object-contain transition hover:scale-105"
            />
          </button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="rounded-lg p-2 transition hover:bg-[#faf8f5]"
          >
            <Menu className="h-6 w-6 text-[#222]" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/50"
        />
      )}

      {/* Mobile Menu */}
      <aside
        className={`fixed right-0 top-0 z-[60] h-full w-[88%] max-w-sm overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-6">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="cursor-pointer"
          >
            <img
              src="/images/logo.png"
              alt="Book&Clean"
              className="h-16 w-auto object-contain"
            />
          </button>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-7 w-7 text-[#222]" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 p-6">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-4 rounded-xl p-4 text-left transition hover:bg-[#faf8f5]"
          >
            <Home className="h-5 w-5 text-[#b5964d]" />
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-4 rounded-xl p-4 text-left transition hover:bg-[#faf8f5]"
          >
            <Info className="h-5 w-5 text-[#b5964d]" />
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("services")}
            className="flex items-center gap-4 rounded-xl p-4 text-left transition hover:bg-[#faf8f5]"
          >
            <Briefcase className="h-5 w-5 text-[#b5964d]" />
            Services
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-4 rounded-xl p-4 text-left transition hover:bg-[#faf8f5]"
          >
            <Mail className="h-5 w-5 text-[#b5964d]" />
            Contact
          </button>

          {/* CTA Buttons */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-[#b5964d] py-4 font-semibold text-white transition hover:bg-[#9f823f]"
          >
            <MessageCircle className="h-5 w-5" />
            Get a Free Quote
          </a>

          <a
            href={`tel:${PHONE}`}
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-[#b5964d] py-4 font-semibold text-[#b5964d] transition hover:bg-[#b5964d] hover:text-white"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </nav>
      </aside>
    </>
  );
}