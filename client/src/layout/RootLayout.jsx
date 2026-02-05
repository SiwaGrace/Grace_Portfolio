import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";

const RootLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen ">
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>{" "}
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default RootLayout;
