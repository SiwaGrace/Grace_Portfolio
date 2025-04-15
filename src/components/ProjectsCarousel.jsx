import { useRef } from "react";
import { useScroll } from "motion/react";

const ProjectsCarousel = () => {
  const projects = [
    {
      title: "Emezak Edu",
      description: "An international student consulting platform.",
    },
    {
      title: "ASAM Foundation",
      description: "Website for a nonprofit health initiative.",
    },
    {
      title: "Ecoclean",
      description: "Landing page for a professional cleaning service.",
    },
    {
      title: "Oasis Infobyte",
      description: "Interactive web apps built during internship.",
    },
    {
      title: "Oasis Infobyte",
      description: "Interactive web apps built during internship.",
    },
    {
      title: "Oasis Infobyte",
      description: "Interactive web apps built during internship.",
    },
    {
      title: "Oasis Infobyte",
      description: "Interactive web apps built during internship.",
    },
  ];

  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });

  return (
    <section className="py-12 bg-pink-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-700">
        My Projects
      </h2>
      <div
        ref={carouselRef}
        className="flex space-x-6 overflow-x-auto px-4 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[300px] h-[200px] flex-shrink-0 rounded-xl bg-white shadow-md scroll-snap-align-start p-4 transition-transform duration-300"
            style={{
              transform: `translateX(${scrollX.get() * 0.2}px)`,
            }}
          >
            <h3 className="text-xl font-semibold text-pink-600">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
