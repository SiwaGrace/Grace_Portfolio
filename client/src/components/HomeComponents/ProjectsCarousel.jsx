import { useRef } from "react";
import { useScroll } from "motion/react";
import project from "../../assets/banner.jpg";
import emezakeduconsulting from "../../assets/Project_Emezak_Educational_Consulting.png";
import asam from "../../assets/asam.png";
import Projecteternal from "../../assets/Project_eternal-life.png";
import accountingforesight from "../../assets/accounting-foresight.png";
import quillpad from "../../assets/quillpad.png";
import ayofitness from "../../assets/ayofitness.png";
import wanderlustvoyage from "../../assets/wanderlust-voyage.png";
import HeadingText from "../HeadingText";
import { ExternalLink, Code } from "lucide-react";

const ProjectsCarousel = () => {
  const projects = [
    {
      title: "Quillpad",
      description:
        "A minimal space for deep reflection, vision tracking, and clarity. Designed for those who build.",
      websiteLink: "https://quillpad.vercel.app/",
      image: quillpad,
      tech: ["React", "Tailwind", "Firebase"],
      githublink: "https://github.com/SiwaGrace/Grace_Portfolio",
    },
    {
      title: "Emezak Educational Consulting",
      description: "An international student consulting platform.",
      websiteLink: "https://emezakeduconsulting.com/",
      image: emezakeduconsulting,
      tech: ["Next.js", "TypeScript", "Prisma"],
      githublink: "https://github.com/SiwaGrace/Grace_Portfolio",
    },
    {
      title: "ASAM Foundation",
      description: "Website for a nonprofit organization that helps the needy.",
      websiteLink: "https://asam-xi.vercel.app/",
      image: asam,
      tech: ["React", "CSS", "Node.js"],
      githublink: "https://github.com/SiwaGrace/Grace_Portfolio",
    },
    {
      title: "Eternal life",
      description:
        "A Ghanaian not-for-profit Christian Institute specialized in Leadership Training.",
      websiteLink: "https://eternal-life-sigma.vercel.app",
      image: Projecteternal,
      tech: ["React", "Tailwind", "Express"],
      githublink: "https://github.com/SiwaGrace/Grace_Portfolio",
    },
    {
      title: "Foresight Consult Ltd",
      description: "Accounting and IT solutions business.",
      websiteLink: "https://accounting-foresight-tweaked.vercel.app/",
      image: accountingforesight,
      tech: ["Next.js", "MongoDB", "Stripe"],
      githublink: "https://github.com/SiwaGrace/Grace_Portfolio",
    },
    // {
    //   title: "Wanderlust Voyage",
    //   description: "Homepage for Wanderlust Voyage.",
    //   websiteLink: "https://wanderlust-voyage.vercel.app/",
    //   image: wanderlustvoyage,
    //   tech: ["React", "GSAP", "Framer"],
    // githublink: "https://github.com/SiwaGrace/Grace_Portfolio",
    // },
  ];

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
                  {/* <button
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
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
