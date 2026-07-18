import { Phone, MessageCircle } from "lucide-react";

const PHONE = "07752263659";

const WHATSAPP =
  "https://wa.me/447752263659?text=Hi%20Book%26Clean%2C%20I'd%20like%20to%20request%20a%20quote.";

export default function BookNowBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="grid grid-cols-2 shadow-[0_-8px_30px_rgba(0,0,0,0.15)]">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 bg-[#222] px-4 py-4 font-medium text-white"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#c5a45a] px-4 py-4 font-medium text-[#222]"
        >
          <MessageCircle className="h-5 w-5" />
          Free Quote
        </a>
      </div>
    </div>
  );
}