import React from "react";
import { Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-link",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/your-username",
      icon: Github,
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=esidjograce@gmail.com",
      icon: Mail,
      isExternal: false,
    },
    // {
    //   label: "Twitter",
    //   href: "https://x.com/Hanna16469920",
    //   icon: Twitter,
    // },
    // {
    //   label: "Instagram",
    //   href: "https://www.instagram.com/tini_gracey",
    //   icon: Instagram,
    // },
  ];

  return (
    <footer className="mt-[100px] w-full py-4 px-6 border-t border-gray-200 dark:border-gray-500 ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondaryText">
        <div className="text-center w-full sm:w-auto">
          &copy; {new Date().getFullYear()} SiwaGrace. All rights reserved.
        </div>

        <div className="flex items-center gap-3 group">
          <div className="size-8 bg-accentColor rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(238,43,140,0.4)]">
            <span className="material-symbols-outlined">code</span>
          </div>
          <span className="text-lg font-bold text-primaryText tracking-tight font-mono">
            Siwa<span className="text-accentColor">Grace</span>
          </span>
        </div>

        <div className="flex justify-center sm:justify-end w-full sm:w-auto space-x-4">
          {socialLinks.map(({ label, href, icon: Icon, isExternal = true }) => (
            <a
              key={label}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={label}
            >
              <Icon className="w-5 h-5 hover:text-accentColor" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
