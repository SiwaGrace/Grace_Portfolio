import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 text-center text-sm text-gray-500 border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
      &copy; {new Date().getFullYear()} SiwaGrace. All rights reserved.
    </footer>
  );
};

export default Footer;
