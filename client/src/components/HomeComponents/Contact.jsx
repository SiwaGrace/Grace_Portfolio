import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

const Input = ({ as = "input", className = "", ...props }) => {
  const baseStyles =
    "w-full px-5 py-3 border-b border-b-gray-400 text-white focus:outline-none";
  const Component = as;
  return <Component className={`${baseStyles} ${className}`} {...props} />;
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      message: form.current.message.value,
    };

    // ✅ Set your deployed backend URL here
    const API_URL =
      import.meta.env.VITE_BACKEND_URL ||
      "https://grace-portfolio.onrender.com"; // fallback just in case

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        form.current.reset();
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mt-10 py-16 px-6">
      <div className="max-w-3xl mx-auto items-center md:h-[600px]">
        <div className="p-8 shadow-lg bg-gray-900 text-white h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-8 text-gray-300">
            Have a project in mind or just want to connect? Send me a message!
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid gap-6 text-left"
          >
            <Input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <Input
              as="textarea"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-600 text-white py-3 rounded-sm hover:bg-pink-700 transition font-semibold cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorModal onClose={() => setShowError(false)} />}
    </section>
  );
};

export default Contact;
