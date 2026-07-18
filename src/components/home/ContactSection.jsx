import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const PHONE = "07752263659";

const WHATSAPP =
  "https://wa.me/447752263659?text=Hi%20Book%26Clean%2C%20I'd%20like%20to%20request%20a%20quote.";

export default function ContactSection() {
  return (
    <motion.section
  id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-[#EFE9DF] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.25em] text-[#c5a45a] text-sm font-semibold mb-3">
            Contact Us
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#222]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Get Your Free Quote Today
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
            We'd love to hear about your cleaning requirements. Whether you're
            looking for regular cleaning, a one-off deep clean or specialist
            sanitisation, we're here to help.
          </p>

        </div>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[2rem] shadow-xl overflow-hidden grid lg:grid-cols-2"
        >

          {/* Left */}

          <div className="bg-[#b5964d] text-white p-10">

            <h3
              className="text-3xl mb-6"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Why Contact Book&Clean?
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0 mt-1" />
                <p>Free, no-obligation quotations.</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0 mt-1" />
                <p>Domestic & commercial cleaning services.</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0 mt-1" />
                <p>Professional equipment & quality products.</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0 mt-1" />
                <p>Friendly, reliable and flexible appointments.</p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="p-10">

            <div className="space-y-8">

              <div className="flex gap-4">
                <MapPin className="text-[#b5964d] w-7 h-7 shrink-0" />

                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Service Area
                  </h4>

                  <p className="text-gray-600">
                    Oxford and the surrounding areas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3 className="text-[#b5964d] w-7 h-7 shrink-0" />

                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Opening Hours
                  </h4>

                  <p className="text-gray-600">
                    Monday - Saturday
                    <br />
                    Flexible appointment times available.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">

                <a
                  href={`tel:${PHONE}`}
                  className="rounded-2xl border border-[#b5964d] py-4 px-6 text-center font-semibold text-[#b5964d] hover:bg-[#b5964d] hover:text-white transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#b5964d] py-4 px-6 text-center font-semibold text-white hover:bg-[#9d7f3e] transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}