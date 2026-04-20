import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RootLayout from "./layout/RootLayout";
import ErrorModal from "./components/HomeComponents/ErrorModal";
import Home from "./Pages/Home";
import Projects from "./Pages/projects/Projects";
// import Blog from "./Pages/Blog";
// import Contact from "./Pages/Contact";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          element={
            <RootLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          }
        >
          <Route index element={<Home />} />
          {/*
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          */}
          <Route path="/er" element={<ErrorModal />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
      </>,
    ),
  );

  return (
    <HelmetProvider>
      <RouterProvider router={myRoute} />
    </HelmetProvider>
  );
};

export default App;
