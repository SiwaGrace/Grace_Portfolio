import React from "react";
import { Code, Server, Database, Layout, Link, Rocket } from "lucide-react";
import HeadingText from "../HeadingText";

const iconStyles = {
  iconbase: "w-6 h-6 text-accentColor group-hover:text-white ",
};

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern, and user-friendly interfaces using React, TailwindCSS, and JavaScript.",
    icon: <Code className={`${iconStyles.iconbase}`} />,
  },
  {
    title: "Backend Development",
    description:
      "Creating secure, scalable, and efficient APIs with Node.js, Express, and MongoDB.",
    icon: <Server className={`${iconStyles.iconbase}`} />,
  },
  {
    title: "Full-Stack Development",
    description:
      "Delivering complete solutions from database to UI, integrating frontend and backend seamlessly.",
    icon: <Rocket className={`${iconStyles.iconbase}`} />,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Transforming design concepts into functional, pixel-perfect interfaces with a focus on user experience.",
    icon: <Layout className={`${iconStyles.iconbase}`} />,
  },
  {
    title: "API Integration",
    description:
      "Connecting third-party APIs and building custom integrations to enhance app functionality.",
    icon: <Link className={`${iconStyles.iconbase}`} />,
  },
  {
    title: "Database Design",
    description:
      "Designing and managing databases with MongoDB, ensuring efficient data flow and storage.",
    icon: <Database className={`${iconStyles.iconbase}`} />,
  },
];

const Services = () => {
  return (
    <section className="mt-10 py-16 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <HeadingText
          hTextOne="Expert"
          hTextTwo="Services"
          paragraph="Transforming ideas into digital reality"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 flex flex-col items-start gap-4 hover:scale-105 group transition-transform duration-300 shadow-xl border border-accentColor/20"
            >
              {/* bg-gradient-to-br from-pink-300 to-purple-300 */}
              <div className="p-4 bg-accentColor/10 group-hover:bg-accentColor  rounded-full shadow-md">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primaryText ">
                {service.title}
              </h3>
              <p className="text-sm text-secondaryText text-left">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
