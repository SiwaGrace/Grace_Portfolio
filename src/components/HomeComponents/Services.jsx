import React from "react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern, and user-friendly interfaces using React, TailwindCSS, and JavaScript.",
  },
  {
    title: "Backend Development",
    description:
      "Creating secure, scalable, and efficient APIs with Node.js, Express, and MongoDB.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Delivering complete solutions from database to UI, integrating frontend and backend seamlessly.",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Transforming design concepts into functional, pixel-perfect interfaces with a focus on user experience.",
  },
  {
    title: "API Integration",
    description:
      "Connecting third-party APIs and building custom integrations to enhance app functionality.",
  },
  {
    title: "Deployment & Hosting",
    description:
      "Deploying and maintaining applications on modern platforms like Vercel, Netlify, and Render.",
  },
  {
    title: "Database Design",
    description:
      "Designing and managing databases with MongoDB, ensuring efficient data flow and storage.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">My Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
