import {
  Phone,
  MessageCircle,
  MapPin,
  ChevronRight,
} from "lucide-react";

const PHONE_1 = "07752263659";
const PHONE_2 = "07519394418";

const WHATSAPP =
  "https://wa.me/447752263659?text=Hi%20Book%26Clean%2C%20I'd%20like%20to%20request%20a%20quote.";

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <img
              src="/images/footer-logo.png"
              alt="Book&Clean"
              className="h-20 mb-6 object-contain"
            />

            <p className="text-white/70 leading-7">
              Professional domestic and commercial cleaning services throughout
              Oxford and the surrounding areas.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Contact
            </h3>

            <div className="space-y-4">
              <a
                href={`tel:${PHONE_1}`}
                className="flex items-center gap-3 hover:text-[#c5a45a] transition"
              >
                <Phone className="w-5 h-5" />
                07752 263659
              </a>

              <a
                href={`tel:${PHONE_2}`}
                className="flex items-center gap-3 hover:text-[#c5a45a] transition"
              >
                <Phone className="w-5 h-5" />
                07519 394418
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#c5a45a] transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Service Area
            </h3>

            <div className="flex gap-3 text-white/70">
              <MapPin className="w-5 h-5 mt-1 shrink-0 text-[#c5a45a]" />

              <p className="leading-7">
                Oxford
                <br />
                Abingdon
                <br />
                Kidlington
                <br />
                Witney
                <br />
                Bicester
                <br />
                &amp; surrounding areas
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Quick Links
            </h3>

            <div className="space-y-4">
              <a
                href="#about"
                className="flex items-center gap-2 hover:text-[#c5a45a] transition"
              >
                <ChevronRight className="w-4 h-4" />
                About
              </a>

              <a
                href="#services"
                className="flex items-center gap-2 hover:text-[#c5a45a] transition"
              >
                <ChevronRight className="w-4 h-4" />
                Services
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 hover:text-[#c5a45a] transition"
              >
                <ChevronRight className="w-4 h-4" />
                Contact
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#c5a45a] transition"
              >
                <MessageCircle className="w-4 h-4" />
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Book&amp;Clean. All rights reserved.
          </p>

          <p className="text-sm text-white/50 text-center">
            Website designed and created by{" "}
            <a
              href="https://shannonwisedigital.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a45a] hover:underline"
            >
              Shannon Wise Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}