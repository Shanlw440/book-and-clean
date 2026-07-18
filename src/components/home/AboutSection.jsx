import { Sparkles, Home, ShieldCheck, Sofa } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#faf8f5] py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <Sparkles className="w-6 h-6 mx-auto text-[#c5a45a] mb-5" />

          <p className="uppercase tracking-[0.25em] text-[#c5a45a] text-sm font-semibold mb-3">
            About Book&Clean
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#222] mb-6"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Professional Cleaning with Attention to Detail
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-8">
            Book&Clean provides reliable domestic and commercial cleaning
            throughout Oxford and the surrounding areas. Whether you need a
            regular house clean, a deep clean or specialist upholstery
            sanitisation, we deliver every service with professionalism,
            attention to detail and high-quality equipment.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

            <Home className="w-10 h-10 text-[#c5a45a] mb-5" />

            <h3
              className="text-2xl mb-3"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Domestic Cleaning
            </h3>

            <p className="text-gray-600 leading-7">
              From regular weekly visits to one-off deep cleans, we keep your
              home looking spotless and feeling fresh.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

            <Sofa className="w-10 h-10 text-[#c5a45a] mb-5" />

            <h3
              className="text-2xl mb-3"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Upholstery Sanitisation
            </h3>

            <p className="text-gray-600 leading-7">
              Specialist cleaning for carpets, sofas, chairs, mattresses,
              armchairs and car seats using professional sanitising equipment.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

            <ShieldCheck className="w-10 h-10 text-[#c5a45a] mb-5" />

            <h3
              className="text-2xl mb-3"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Trusted Service
            </h3>

            <p className="text-gray-600 leading-7">
              Friendly, dependable and committed to delivering outstanding
              results using professional machines and quality products.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}