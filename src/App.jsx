import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider"; // You'll need to create this
import { HelmetProvider } from "react-helmet-async";
import RootLayout from "./layout/RootLayout";
import Home from "./Pages/Home";
// import Blog from "./Pages/Blog";
// import Contact from "./Pages/Contact";
// import Projects from "./Pages/Projects";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* 
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} /> */}
      </Route>
    )
  );

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" enableSystem>
        <RouterProvider router={myRoute} />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
