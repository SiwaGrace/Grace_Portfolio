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
import { useTheme } from "next-themes";
import { Link } from "react-scroll";

const NavBar = () => {
  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "services", label: "Services" },
    { href: "projects", label: "Projects" },
    // { href: "blogs", label: "Blogs" },
    // { href: "contact", label: "Contact" },
  ];

  const { setTheme, theme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full bg-[#fef6f9] dark:bg-[#1a1a1a] shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <h1 className="text-xl font-bold text-textColor dark:text-textColor font-mono">
          SiwaGrace
        </h1>

        {/* Center - Navigation (hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth={true}
              duration={500}
              offset={-80} // adjust if you have fixed header height
              className="hover:text-textColor cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right - Dark mode toggle & CV button */}
        <div className="flex items-center gap-6">
          {/* Dark Mode Toggle */}
          {/* <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-yellow-400" />
            <Switch
              checked={theme === "dark"}
              onCheckedChange={(checked) =>
                setTheme(checked ? "dark" : "light")
              }
            />
            <Moon className="w-4 h-4 text-blue-500" />
          </div> */}

          {/* Desktop CV button */}
          <Button className="hidden md:inline-flex bg-textColor hover:bg-accent hover:text-black hover:border hover:border-textColor text-white rounded-xl px-4 py-2">
            <a href="/GraceEsimeDjobokouResume.pdf" download>
              Download CV
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 dark:text-textColor w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <Link
                      to={link.href}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => document.activeElement?.blur()} // close dropdown
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
