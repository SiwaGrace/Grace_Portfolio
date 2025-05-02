import React from "react";
import HeroSection from "../components/HeroSection";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ProfileCard from "@/components/ProfileCard";

const Home = () => {
  return (
    <div className="bg-background text-text">
      {" "}
      {/* These are theme-aware classes */}
      <HeroSection />
      <ScrollRevealSection>
        <ProfileCard />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <ProjectsCarousel />
      </ScrollRevealSection>
    </div>
  );
};

export default Home;
