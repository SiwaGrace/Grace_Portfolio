import React from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const NavBar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full bg-[#fef6f9] dark:bg-[#1a1a1a] shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <h1 className="text-xl font-bold text-textColor dark:text-textColor">
          SiwaGrace
        </h1>

        {/* Center - Navigation */}
        <nav className="flex items-center gap-6 text-sm text-gray-700 dark:text-gray-200">
          <a href="#home" className="hover:text-textColor">
            Home
          </a>
          <a href="#about" className="hover:text-textColor">
            About
          </a>
          <a href="#project" className="hover:text-textColor">
            Projects
          </a>
          {/* <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-textColor">
              Projects
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-[#2a2a2a] text-gray-800 dark:text-white">
              <DropdownMenuItem>
                <a href="#project1">Project 1</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#project2">Project 2</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <a href="#contact" className="hover:text-textColor">
            Contact
          </a>
        </nav>

        {/* Right - Dark mode toggle & CV button */}
        <div className="flex items-center gap-4">
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
          <Button className="bg-textColor hover:bg-[#ff85c1] text-white rounded-xl px-4 py-2">
            <a href="/GraceEsimeDjobokouResume.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
