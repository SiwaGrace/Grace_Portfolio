import { useRef } from "react";
import { useScroll } from "motion/react";
import project from "../../assets/banner.jpg";
import emezakeduconsulting from "../../assets/Project_Emezak_Educational_Consulting.png";
import asam from "../../assets/asam.png";
import Projecteternal from "../../assets/Project_eternal-life.png";
import ayofitness from "../../assets/ayofitness.png";
import accountingforesight from "../../assets/accounting-foresight.png";
import wanderlustvoyage from "../../assets/wanderlust-voyage.png";

const ProjectsCarousel = () => {
  const projects = [
    {
      title: "Emezak Educational Consulting",
      description: "An international student consulting platform.",
      websiteLink: "https://emezakeduconsulting.com/",
      image: `${emezakeduconsulting}`,
    },
    {
      title: "ASAM Foundation",
      description: "Website for a nonprofit organization that helps the needy.",
      websiteLink: "https://asam-xi.vercel.app/",
      image: `${asam}`,
    },
    {
      title: "Eternal life",
      description:
        "A Ghanain not-for-profit Christian Institute specialized in Leadership Training.",
      websiteLink: "eternal-life-sigma.vercel.app",
      image: `${Projecteternal}`,
    },
    {
      title: "AyoFitness",
      description: "Affordable gym at home.",
      websiteLink: "https://ayo-fitness-gym.vercel.app/",
      image: `${ayofitness}`,
    },
    // {
    //   title: "Wanderlust Voyage",
    //   description: "homepage for Wanderlust Voyage.",
    //   websiteLink: "https://wanderlust-voyage.vercel.app/",
    //   image: `${wanderlustvoyage}`,
    // },
    {
      title: "Foresight Consult Ltd",
      description: "accounting and IT solutions business.",
      websiteLink: "https://accounting-foresight-tweaked.vercel.app/",
      image: `${accountingforesight}`,
    },
  ];

  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });

  return (
    <section id="projects" className="mt-10 py-12  bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-700 ">
        My Projects
      </h2>
      <div
        ref={carouselRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[320px] max-w-[320px] bg-white dark:bg-gray-800 shadow-lg rounded- flex flex-col overflow-hidden scroll-snap-align-start transform transition-transform duration-300 hover:scale-105 mb-5"
            style={{
              transform: `translateX(${scrollX.get() * 0.2}px)`,
            }}
          >
            {/* Image Section */}
            <div className="w-full overflow-hidden h-[200px]">
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
