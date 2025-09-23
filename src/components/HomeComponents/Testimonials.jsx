import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Startup Founder",
    feedback:
      "Working with you was seamless! The project was delivered on time and exceeded expectations.",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    feedback:
      "Your frontend skills brought our vision to life beautifully. Highly recommend!",
  },
  {
    name: "Michael Lee",
    role: "Entrepreneur",
    feedback:
      "Professional, reliable, and creative. The fullstack solution was exactly what we needed.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-600 italic mb-4">"{t.feedback}"</p>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
