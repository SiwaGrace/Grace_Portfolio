import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";
// use EmailJS for the contact

const Contact = () => {
  return (
    <section id="contact" className="mt-10 py-16 px-6 ">
      <div className="max-w-6xl  mx-auto grid md:grid-cols-2 gap-12 items-center md:h-[600px]">
        {/* Contact Form (left side) */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="p-8 rounded-2xl shadow-lg bg-gray-900 text-white h-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-8 text-gray-300">
            Have a project in mind or just want to connect? Send me a message!
            I’ll get back to you as soon as possible.
          </p>

          <form className="grid gap-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 border border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 border border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-5 py-3 border border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Picture (right side) */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center h-full"
        >
          <img
            src={me}
            alt="Contact Illustration"
            className="hidden md:flex w-full rounded-2xl shadow-lg object-cover  md:h-[600px] md:object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
