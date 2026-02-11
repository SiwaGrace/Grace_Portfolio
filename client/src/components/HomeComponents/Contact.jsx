import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";
import { Mail, MapPin, CheckCircle2, AlertCircle, X } from "lucide-react";
import FormField from "./FormField";

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

    // deployed backend URL (fallback to localhost during local dev)
    const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
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
    <section className="px-4 md:px-10 lg:px-10 py-24 " id="contact">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-8 leading-[1.1] text-primaryText">
              Let's build something{" "}
              <span className="text-accentColor italic">extraordinary</span>{" "}
              together.
            </h2>
            <p className="text-secondaryText mb-12 text-lg font-light leading-relaxed">
              I am currently available for new opportunities, strategic
              collaborations, and specialized freelance projects. Let's discuss
              your vision.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-5 group">
                <div className="size-14 rounded-2xl bg-accentColor text-white flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg shadow-pink-200">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-primaryText font-black tracking-widest">
                    Email Me
                  </p>
                  <p className="font-bold text-xl text-secondaryText">
                    esidjograce@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="size-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center transition-transform group-hover:rotate-12">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-primaryText font-black tracking-widest">
                    Location
                  </p>
                  <p className="font-bold text-xl text-secondaryText">
                    Accra, GHANA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-primaryColor p-10 rounded-[2rem] border-2 border-slate-100 dark:border-gray-700 shadow-2xl shadow-slate-200/50 dark:shadow-gray-500/50">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Full Name"
                  name="user_name"
                  placeholder="John Doe"
                />

                <FormField
                  label="Email Address"
                  name="user_email"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              <FormField
                label="Project Message"
                name="message"
                as="textarea"
                rows={5}
                placeholder="Describe your vision..."
              />

              <button
                disabled={loading}
                className={`w-full bg-accentColor text-white font-black uppercase tracking-widest py-5 rounded-xl mt-2 transition-all shadow-xl shadow-pink-300 dark:shadow-accentColor/30 hover:bg-[linear-gradient(135deg,#FF2D55_0%,#000000_100%)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer`}
                type="submit"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorModal onClose={() => setShowError(false)} />}
    </section>
  );
};

export default Contact;
