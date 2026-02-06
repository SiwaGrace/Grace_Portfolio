import React from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Moon, Sun, Menu } from "lucide-react";
// using react scroll here, when i have pages would turn it into react router dom
import { Link } from "react-scroll";

const NavBar = ({ isDarkMode, toggleTheme }) => {
  const navLinks = [
    // { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "services", label: "Services" },
    { href: "projects", label: "Projects" },
    // { href: "blogs", label: "Blogs" },
    // { href: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed bg-primaryColor top-0 left-0 w-full shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Group */}
        <div className="flex items-center gap-3 group">
          <div className="size-8 bg-accentColor rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(238,43,140,0.4)]">
            <span className="material-symbols-outlined">code</span>
          </div>
          <span className="text-xl font-bold text-primaryText tracking-tight font-mono">
            Siwa<span className="text-accentColor">Grace</span>
          </span>
        </div>

        {/* Center - Navigation (hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-secondaryText ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth={true}
              duration={500}
              offset={-80} // adjust if you have fixed header height
              spy={true}
              activeClass="text-accentColor font-bold"
              className="hover:text-textColor cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* right:theme & small screen navigation */}
        <div className="flex items-center gap-6">
          {/* Right - Dark mode toggle & CV button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-yellow-400 transition-all hover:scale-110"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Desktop CV button */}
          <Button className="hidden md:inline-flex bg-secondaryColor hover:bg-accent hover:text-black hover:border hover:border-textColor text-white rounded-xl px-4 py-2">
            <a href="/GraceEsimeDjobokouResume.pdf" download>
              Download CV
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="bg-primaryColor dark:bg-black"
              >
                <Button variant="outline" size="icon">
                  <Menu className="h-5  w-5 text-primaryText " />
                </Button>
              </DropdownMenuTrigger>
              {/* h-[50vh] */}
              <DropdownMenuContent className="w-40 mr-4 bg-primaryColor text-primaryText border border-gray-100 dark:border-gray-800  ">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <Link
                      to={link.href}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => document.activeElement?.blur()} // close dropdown
                      spy={true}
                      activeClass="text-accentColor font-bold"
                      className="cursor-pointer w-full block"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <a
                    href="/GraceEsimeDjobokouResume.pdf"
                    download
                    className="w-full block"
                  >
                    Download CV
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
