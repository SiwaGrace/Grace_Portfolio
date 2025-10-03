import { motion } from "framer-motion";

const SuccessModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose} // click outside closes
    >
      {/* overlay — only this div is translucent */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }} // reliable
      />

      {/* modal card — fully opaque */}
      <motion.div
        onClick={(e) => e.stopPropagation()} // don't close when clicking modal
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Submission Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your submission. You will receive a confirmation email
          shortly.
        </p>

        <button
          onClick={onClose}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
};

export default SuccessModal;
