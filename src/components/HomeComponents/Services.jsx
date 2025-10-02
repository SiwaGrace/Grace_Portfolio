import React from "react";
import { Code, Server, Database, Layout, Link, Rocket } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern, and user-friendly interfaces using React, TailwindCSS, and JavaScript.",
    icon: <Code className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Backend Development",
    description:
      "Creating secure, scalable, and efficient APIs with Node.js, Express, and MongoDB.",
    icon: <Server className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Full-Stack Development",
    description:
      "Delivering complete solutions from database to UI, integrating frontend and backend seamlessly.",
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Transforming design concepts into functional, pixel-perfect interfaces with a focus on user experience.",
    icon: <Layout className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "API Integration",
    description:
      "Connecting third-party APIs and building custom integrations to enhance app functionality.",
    icon: <Link className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Database Design",
    description:
      "Designing and managing databases with MongoDB, ensuring efficient data flow and storage.",
    icon: <Database className="w-6 h-6 text-purple-500" />,
  },
];

const Services = () => {
  return (
    <section className="mt-10 py-16 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12" style={{ color: "#ff69b4" }}>
          My Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative  p-8 flex flex-col items-start gap-4 hover:scale-105 transition-transform duration-300 shadow-xl"
              style={{
                backgroundColor: "#333333",
                color: "#fafafa",
              }}
            >
              {/* bg-gradient-to-br from-pink-300 to-purple-300 */}
              <div className="p-4 rounded-full shadow-md">{service.icon}</div>
              <h3
                className="text-xl font-semibold"
                style={{ color: "#e91e63" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
