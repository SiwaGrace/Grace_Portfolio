import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import me from "../../assets/me.jpg";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

// ✅ Reusable Input component
const Input = ({ as = "input", className = "", ...props }) => {
  // bg-gray-800 border-b-gray-700 focus:ring-2 focus:ring-pink-600
  const baseStyles =
    "w-full px-5 py-3 border-b border-b-gray-400  text-white focus:outline-none ";

  const Component = as;
  return <Component className={`${baseStyles} ${className}`} {...props} />;
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // sends to YOU
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          setShowSuccess(true);

          // ✅ Auto reply (send to user)
          emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
            {
              user_name: form.current.user_name.value,
              user_email: form.current.user_email.value,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );
        },
        () => {
          setLoading(false);
          setShowError(true);
        }
      );
  };

  return (
    <section id="contact" className="mt-10 py-16 px-6">
      {/*max-w-6xl grid  gap-12  md:grid-cols-2 */}
      <div className="max-w-3xl mx-auto  items-center md:h-[600px]">
        {/* Contact Form motion.div*/}
        <div
          // initial={{ x: 300, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 1, ease: "easeOut" }}
          className="p-8 shadow-lg bg-gray-900 text-white h-full "
        >
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
        {/* </motion.div> */}

        {/* Picture */}
        {/* <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center h-full"
        >
          <img
            src={me}
            alt="Contact Illustration"
            className="hidden md:flex w-full  shadow-lg object-cover md:h-[600px]"
          />
        </motion.div> */}
      </div>
      {/* Modals */}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorModal onClose={() => setShowError(false)} />}
    </section>
  );
};

export default Contact;
