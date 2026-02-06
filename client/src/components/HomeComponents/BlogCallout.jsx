import React from "react";
import { ArrowRight } from "lucide-react";
import blog1 from "../../assets/hero3.jpg"; // replace with your actual images
import blog2 from "../../assets/hero3.jpg";

const BlogCallout = () => {
  const blogs = [
    {
      title: "Graphic Design and Photography Workshop This Year",
      date: "August 23, 2019",
      category: "GRAPHIC",
      image: blog1,
      link: "/blog/graphic-workshop", // replace with actual blog link
    },
    {
      title: "Tips for React Beginners",
      date: "September 5, 2025",
      category: "TECH",
      image: blog2,
      link: "/blog/react-tips",
    },
  ];

  return (
    <section className="py-16 px-6" id="blogs">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-primaryText ">
          Explore My Blog
        </h2>
        <p className="text-secondaryText mb-12">
          I share insights, tutorials, and stories from my journey as a
          fullstack developer. Whether you’re just starting out or leveling up,
          you’ll find something valuable. 🚀
        </p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {blogs.map((blog, index) => (
            <a
              href={blog.link}
              key={index}
              className="group rounded-xl overflow-hidden shadow-lg bg-gray-800 transition-transform transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {blog.title}
                </h3>
                <div className="text-sm text-gray-400 flex justify-between">
                  <span>{blog.date}</span>
                  <span className="uppercase font-bold">{blog.category}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action Button */}
        <a
          href="/blog" // replace with main blog link
          className="inline-flex items-center gap-2 text-accentColor underline px-6 py-3 rounded-xl hover:text-white hover:bg-secondaryColor  transition"
        >
          Visit My Blog <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default BlogCallout;
