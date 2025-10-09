import { motion } from "framer-motion";

const ErrorModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Submission Failed
        </h2>
        <p className="text-gray-600 mb-6">
          Oops! Something went wrong. Please try again later.
        </p>
        <button
          onClick={onClose}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ErrorModal;
