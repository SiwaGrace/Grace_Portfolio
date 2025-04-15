import React from "react";
import HeroSection from "../components/HeroSection";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";

const Home = () => {
  return (
    <div className="bg-background text-text">
      {" "}
      {/* These are theme-aware classes */}
      <HeroSection />
      <ScrollRevealSection>
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm a software engineer who loves building clean, responsive, and
            interactive websites.
          </p>
        </section>
      </ScrollRevealSection>
      <ScrollRevealSection>
        <ProjectsCarousel />
      </ScrollRevealSection>
    </div>
  );
};

export default Home;
