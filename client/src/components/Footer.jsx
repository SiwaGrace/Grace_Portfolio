import React from "react";
import { Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-[100px] w-full py-4 px-6 border-t border-gray-200  ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 ">
        <div className="text-left w-full sm:w-auto">
          &copy; {new Date().getFullYear()} SiwaGrace. All rights reserved.
        </div>

        <div className="text-center w-full sm:w-auto font-semibold text-gray-700 ">
          SiwaGrace
        </div>

        <div className="flex justify-center sm:justify-end w-full sm:w-auto space-x-4">
          <a
            href="https://www.linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 hover:text-pink-600" />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 hover:text-pink-600" />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 hover:text-pink-600" />
          </a>
          <a
            href="https://instagram.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 hover:text-pink-600" />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Email">
            <Mail className="w-5 h-5 hover:text-pink-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
