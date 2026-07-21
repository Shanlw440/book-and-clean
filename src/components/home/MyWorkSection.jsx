import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const projects = [
  {
    image: "/images/3.jpeg",
    title: "Outdoor Furniture Cleaning",
    description: "Professional cleaning for chairs, cushions and outdoor furniture.",
    position: "center",
  },
  {
    image: "/images/5.jpeg",
    title: "Sofa Cleaning",
    description: "Deep extraction cleaning to refresh upholstered furniture.",
    position: "center",
  },
  {
    image: "/images/1.jpeg",
    title: "Car Upholstery Cleaning",
    description: "Cleaning and sanitisation for car seats and interiors.",
    position: "center",
  },
  {
    image: "/images/4.jpeg",
    title: "Before & After Results",
    description: "Visible results from a professional sofa deep clean.",
    position: "center",
  },
  {
    image: "/images/2.jpeg",
    title: "Mattress Sanitisation",
    description: "Deep cleaning to help remove dirt, odours and allergens.",
    position: "center",
  },
];

export default function MyWorkSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <>
      <section className="bg-[#faf8f5] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b5964d]">
              Our Recent Work
            </p>

            <h2 className="font-serif text-4xl text-[#2f2924] sm:text-5xl">
              Real cleaning results
            </h2>

            <p className="mt-5 text-base leading-7 text-[#6f665f] sm:text-lg">
              A selection of cleaning and sanitisation work completed for our
              customers.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.image}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.title}`}
                  className="block w-full cursor-pointer text-left"
                >
                  <div
                    className={`relative overflow-hidden bg-[#eee9e2] ${
                      index === 0
                        ? "aspect-[16/9]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      style={{ objectPosition: project.position }}
                    />

                    <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />

                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#2f2924] opacity-0 shadow-md transition group-hover:opacity-100">
                      <ZoomIn className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-[#2f2924]">
                      {project.title}
                    </h3>

                    <p className="mt-2 leading-6 text-[#6f665f]">
                      {project.description}
                    </p>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close image"
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="max-h-[75vh] bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-3xl text-[#2f2924]">
                  {selectedProject.title}
                </h3>

                <p className="mt-2 text-[#6f665f]">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}