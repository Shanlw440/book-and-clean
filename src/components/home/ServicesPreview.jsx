import {
  Home,
  Sofa,
  Building2,
  Sparkles,
  KeyRound,
  Car,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "House Cleaning",
    desc: "Regular and one-off cleaning to keep your home spotless, fresh and comfortable.",
    message:
      "Hi Book&Clean, I'd like to request a quote for house cleaning.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "A thorough top-to-bottom clean, ideal for spring cleaning or giving your property a complete refresh.",
    message:
      "Hi Book&Clean, I'd like to request a quote for deep cleaning.",
  },
  {
    icon: KeyRound,
    title: "End of Tenancy",
    desc: "Detailed cleaning designed to leave a property ready for inspection, new tenants or handover.",
    message:
      "Hi Book&Clean, I'd like to request a quote for end of tenancy cleaning.",
  },
  {
    icon: Sofa,
    title: "Upholstery Sanitisation",
    desc: "Professional sanitisation for sofas, chairs, armchairs and carpets using specialist equipment.",
    message:
      "Hi Book&Clean, I'd like to request a quote for upholstery sanitisation.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    desc: "Reliable cleaning for offices, schools, pubs, restaurants, stores and other business premises.",
    message:
      "Hi Book&Clean, I'd like to request a quote for commercial cleaning.",
  },
  {
    icon: Car,
    title: "Mattress & Car Seat Cleaning",
    desc: "Specialist cleaning that helps remove dirt, bacteria, allergens and unwanted odours.",
    message:
      "Hi Book&Clean, I'd like to request a quote for mattress or car seat cleaning.",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#c5a45a]">
            Our Services
          </p>

          <h2
            className="text-4xl text-[#222] md:text-5xl"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Cleaning Services Tailored to You
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Every property is different. Whether you need regular cleaning, a
            one-off deep clean or specialist sanitisation, Book&amp;Clean
            provides a reliable service using professional equipment and
            quality cleaning products.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            const whatsappUrl = `https://wa.me/447752263659?text=${encodeURIComponent(
              service.message
            )}`;

            return (
              <a
                key={service.title}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Request a quote for ${service.title}`}
                className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-[#faf8f5] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#b5964d] focus:ring-offset-4"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#b5964d] text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-8 w-8" />
                </div>

                <h3
                  className="mb-4 text-3xl text-[#222]"
                  style={{ fontFamily: "Cormorant Garamond" }}
                >
                  {service.title}
                </h3>

                <p className="mb-8 flex-1 leading-8 text-gray-600">
                  {service.desc}
                </p>

                <div className="inline-flex items-center gap-2 font-semibold text-[#b5964d] transition-all group-hover:gap-4">
                  Request a Quote
                  <ArrowRight className="h-5 w-5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}