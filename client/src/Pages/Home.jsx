import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import ProjectsCarousel from "@/components/HomeComponents/ProjectsCarousel";
import About from "@/components/HomeComponents/About";
import Services from "@/components/HomeComponents/Services";
import Testimonials from "@/components/HomeComponents/Testimonials";
import Contact from "@/components/HomeComponents/Contact";
import BlogCallout from "@/components/HomeComponents/BlogCallout";
import SEO from "@/components/common/SEO";
import TechStack from "@/components/HomeComponents/TechStack";

const Home = () => {
  return (
    <div className="w-[90vw] mx-auto  text-text">
      {/* SEO for the Home Page */}
      <SEO
        title="Home | Grace's Portfolio"
        description="Welcome to my portfolio! I build modern, scalable applications with React, Node.js, and more."
      />
      {/* add this to every page */}
      {/* <SEO
        title="Page Title | Grace's Portfolio"
        description="Page-specific description here"
      /> */}

      {/* hero section */}
      {/* <HeroSection /> */}

      {/* about section */}
      <ScrollRevealSection>
        <About />
      </ScrollRevealSection>

      {/* services section */}
      <ScrollRevealSection>
        <Services />
      </ScrollRevealSection>

      {/* tech stack section */}
      <TechStack />

      {/* project section */}
      <ScrollRevealSection>
        <ProjectsCarousel />
      </ScrollRevealSection>

      {/* blog section */}
      {/* <BlogCallout /> */}

      {/* testimonaial section */}
      {/* <Testimonials /> */}

      {/* contact section */}
      <Contact />
    </div>
  );
};

export default Home;
