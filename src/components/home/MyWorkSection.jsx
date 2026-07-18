import {
  ShieldCheck,
  Sparkles,
  Clock3,
  ThumbsUp,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Professional Equipment",
    text: "We use high-quality machines and professional cleaning products to deliver exceptional results every time.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    text: "Every room is cleaned with care, ensuring your home or business looks and feels its absolute best.",
  },
  {
    icon: Clock3,
    title: "Reliable & Flexible",
    text: "Whether you need a regular clean or a one-off visit, we work around your schedule.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted Service",
    text: "Friendly, dependable and committed to providing an outstanding customer experience from start to finish.",
  },
];

export default function MyWorkSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-[#F6F3EE] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.25em] text-[#c5a45a] text-sm font-semibold mb-3">
            Why Choose Us
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#222]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Cleaning You Can Rely On
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
            We believe professional cleaning is about more than making a
            property look tidy. It's about creating healthier, fresher spaces
            while delivering a reliable service you can trust every time.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.45,
                }}
                className="group bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#b5964d] text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>

                <h3
                  className="text-2xl text-[#222] mb-4"
                  style={{ fontFamily: "Cormorant Garamond" }}
                >
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-16 rounded-3xl bg-[#b5964d] text-white p-10 text-center shadow-xl">
          <h3
            className="text-3xl mb-4"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Ready for a Cleaner Home or Workplace?
          </h3>

          <p className="max-w-2xl mx-auto text-white/90 mb-8 leading-8">
            Whether it's a regular clean, deep clean or specialist
            sanitisation, we're here to help. Get in touch today for your free,
            no-obligation quote.
          </p>

          <a
            href="https://wa.me/447752263659?text=Hi%20Book%26Clean%2C%20I'd%20like%20to%20request%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl bg-white px-8 py-4 font-semibold text-[#b5964d] transition hover:scale-105 hover:shadow-lg"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </motion.section>
  );
}