import React from "react";
import { ArrowRight } from "lucide-react";

const BlogCallout = () => {
  return (
    <section className="py-16 px-6 bg-white" id="blog">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Explore My Blog</h2>
        <p className="text-gray-600 mb-8">
          I share insights, tutorials, and stories from my journey as a
          fullstack developer. Whether you’re just starting out or leveling up,
          you’ll find something valuable. 🚀
        </p>
        <a
          href="/blog" // 👉 replace with your actual blog link (Hashnode, personal domain, etc.)
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Visit My Blog <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default BlogCallout;
