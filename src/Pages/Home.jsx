import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import ProjectsCarousel from "@/components/HomeComponents/ProjectsCarousel";
import About from "@/components/HomeComponents/About";
import Services from "@/components/HomeComponents/Services";
import Testimonials from "@/components/HomeComponents/Testimonials";
import Contact from "@/components/HomeComponents/Contact";
import BlogCallout from "@/components/HomeComponents/BlogCallout";

const Home = () => {
  return (
    <div className="w-[90vw] mx-auto bg-background text-text">
      {" "}
      {/* These are theme-aware classes */}
      <HeroSection />
      <ScrollRevealSection>
        <About />
      </ScrollRevealSection>
      <Services />
      <ScrollRevealSection>
        <ProjectsCarousel />
      </ScrollRevealSection>
      {/* <BlogCallout /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      {/* <h1 className="pt-[100px]">hi</h1> */}
    </div>
  );
};

export default Home;
