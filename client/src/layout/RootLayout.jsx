import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useTheme } from "next-themes";

const RootLayout = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      <NavBar />
      <main>
        <Outlet />
      </main>{" "}
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default RootLayout;
