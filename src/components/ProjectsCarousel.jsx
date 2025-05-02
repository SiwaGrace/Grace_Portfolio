import { useRef } from "react";
import { useScroll } from "motion/react";

const ProjectsCarousel = () => {
  const projects = [
    {
      title: "Emezak Educational Consulting",
      description: "An international student consulting platform.",
      websiteLink: "https://emezakeduconsulting.com/",
    },
    {
      title: "ASAM Foundation",
      description: "Website for a nonprofit health initiative.",
      websiteLink: "asam-xi.vercel.app",
    },
    {
      title: "Ecoclean",
      description: "Landing page for a professional cleaning service.",
      websiteLink: "ecoclean-six.vercel.app",
    },
    {
      title: "Ecoclean",
      description: "Landing page for a professional cleaning service.",
      websiteLink: "ecoclean-six.vercel.app",
    },
    {
      title: "Ecoclean",
      description: "Landing page for a professional cleaning service.",
      websiteLink: "ecoclean-six.vercel.app",
    },
    // ... other projects
  ];

  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });

  return (
    <section className="py-12 bg-pink-50 dark:bg-mutedColor">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-700 ">
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
            className="min-w-[300px] h-[200px] flex-shrink-0 rounded-xl bg-white  shadow-md  dark:bg-muted-foreground scroll-snap-align-start p-4 transition-transform duration-300 mb-5"
            style={{
              transform: `translateX(${scrollX.get() * 0.2}px)`,
            }}
          >
            <h3 className="text-xl font-semibold text-pink-600 ">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{project.description}</p>
            <a href={project.websiteLink} target="_blank">
              view website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
