import { useRef } from "react";
import { useScroll } from "motion/react";
import project from "../../assets/hero2.jpg";

const ProjectsCarousel = () => {
  const projects = [
    {
      title: "Emezak Educational Consulting",
      description: "An international student consulting platform.",
      websiteLink: "https://emezakeduconsulting.com/",
      image: `${project}`, // Replace with a proper screenshot if available
    },
    {
      title: "ASAM Foundation",
      description: "Website for a nonprofit health initiative.",
      websiteLink: "https://asam-xi.vercel.app/",
      image: `${project}`,
    },
    {
      title: "Ecoclean",
      description: "Landing page for a professional cleaning service.",
      websiteLink: "https://ecoclean-six.vercel.app/",
      image: `${project}`,
    },
    {
      title: "Ecoclean",
      description: "Landing page for a professional cleaning service.",
      websiteLink: "https://ecoclean-six.vercel.app/",
      image: `${project}`,
    },
    {
      title: "Ecoclean",
      description: "Landing page for a professional cleaning service.",
      websiteLink: "https://ecoclean-six.vercel.app/",
      image: `${project}`,
    },
    // ... other projects
  ];

  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });

  return (
    <section className="w-[80%] mx-auto py-12">
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
            className="min-w-[320px] max-w-[320px] bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col overflow-hidden scroll-snap-align-start transform transition-transform duration-300 hover:scale-105 mb-5"
            style={{
              transform: `translateX(${scrollX.get() * 0.2}px)`,
            }}
          >
            {/* Image Section */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")} // Hide image if broken URL
              />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-pink-600">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 flex-grow">
                {project.description}
              </p>
              <a
                href={
                  project.websiteLink.startsWith("http")
                    ? project.websiteLink
                    : `https://${project.websiteLink}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-pink-600 font-semibold hover:underline"
              >
                View Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
