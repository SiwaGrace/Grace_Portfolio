import React from "react";
import { Quote, Star } from "lucide-react"; // quote & star icons

const testimonials = [
  {
    name: "John Doe",
    role: "Startup Founder",
    rating: 5,
    feedback:
      "Working with you was seamless! The project was delivered on time and exceeded expectations.",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    rating: 4,
    feedback:
      "Your frontend skills brought our vision to life beautifully. Highly recommend!",
  },
  {
    name: "Michael Lee",
    role: "Entrepreneur",
    rating: 5,
    feedback:
      "Professional, reliable, and creative. The fullstack solution was exactly what we needed.",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-10 py-16 px-6  text-gray-100" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-black">
          What Clients Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              {/* Quote + Stars in same line */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-6 h-6 text-pink-500 mr-2" />
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 mr-1 ${
                        i < t.rating ? "text-yellow-400" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Feedback bubble */}
              <p className="text-gray-200 mb-4 leading-relaxed">{t.feedback}</p>

              {/* Message tail */}
              <div className="absolute top-5 -left-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-800"></div>

              {/* Client info */}
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
