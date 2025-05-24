import { motion } from "motion/react";
import hero from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        {/* Navbar placeholder*/}
        <div className="absolute top-0 left-0 w-full h-full z-10  bg-black opacity-80">
          {/* Place your navbar here */}
        </div>

        {/* Hero content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Welcome to My Portfolio
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            I’m a passionate software engineer ready to bring ideas to life.
          </motion.p>

          <motion.a
            href="#projects"
            className="inline-block bg-pink-600 text-white py-3 px-8 rounded-full text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            See My Work
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
