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

      {/* Sections */}
      <HeroSection />
      <ScrollRevealSection>
        <About />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <Services />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <ProjectsCarousel />
      </ScrollRevealSection>
      <BlogCallout />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
