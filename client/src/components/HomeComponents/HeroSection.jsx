import { motion } from "motion/react";
import hero from "../../assets/heroSection.jpg";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <>
      <section
        className="mt-25 relative w-full h-[80vh] bg-cover bg-center"
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

          <motion.p
            className="inline-block bg-pink-600 text-white py-3 px-8 rounded-full cursor-pointer text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Link
              to="projects" // the id of the section you want to scroll to
              smooth={true} // enables smooth scrolling
              duration={800} // scroll duration in ms
              offset={-50} // adjust if you have a sticky navbar
              spy={true} // adds "active" class when in view (optional)
            >
              See My Work
            </Link>
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
