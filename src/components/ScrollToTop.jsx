import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Optional: if you use lucide icons

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700 transition-opacity duration-300 z-50 animate-bounce"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTop;
