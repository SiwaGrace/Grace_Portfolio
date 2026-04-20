import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useScroll } from "motion/react";
import HeadingText from "../HeadingText";
import { ExternalLink, Code } from "lucide-react";

import data from "../../lib/projects.json";

const ProjectsCarousel = () => {
  const allData = data.data;
  const projects = allData.slice(0, 5);
  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });

  return (
    <section id="projects" className="mt-10 py-12 px-4">
      <HeadingText
        hTextOne="Selected"
        hTextTwo="Projects"
        paragraph="A showcase of my recent work and development projects"
      />

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/6] lg:aspect-[4/5] min-w-[320px] lg:min-w-[370px] max-w-[420px] flex-shrink-0 scroll-snap-align-start"
            style={{
              transform: `translateX(${scrollX.get() * 0.1}px)`,
            }}
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/40 to-transparent   dark:from-black dark:via-black/40 dark:to-transparent  p-6 flex flex-col justify-end translate-y-8 sm:group-hover:translate-y-0 transition-transform duration-300 mb-4 sm:mb-0">
              <div className="space-y-4 ">
                {/* Tech Tags */}
                <div className="flex gap-2 flex-wrap">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accentColor text-white text-[10px] font-bold rounded uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                  {!project.tech && (
                    <>
                      <span className="px-2 py-1 bg-accentColor text-white text-[10px] font-bold rounded uppercase tracking-wider">
                        React
                      </span>
                      <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded uppercase tracking-wider">
                        Tailwind
                      </span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Description - appears on hover */}
                <p className="text-white dark:text-secondaryText text-sm max-w-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>

                {/* Action Buttons - appear on hover */}
                <div className="flex gap-4 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <a
                    href={
                      project.websiteLink.startsWith("http")
                        ? project.websiteLink
                        : `https://${project.websiteLink}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    className="size-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-pink-600 transition-colors"
                    aria-label="View project code"
                    onClick={() => {
                      if (project.githublink) {
                        window.open(
                          project.githublink,
                          "_blank",
                          "noopener,noreferrer",
                        );
                        console.log(`View code for ${project.title}`);
                      }
                      console.log(`View code for ${project.title}`);
                    }}
                  >
                    <Code className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <RouterLink
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full bg-accentColor px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-500"
        >
          More projects
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
