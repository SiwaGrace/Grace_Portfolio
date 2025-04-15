import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider"; // You'll need to create this
import RootLayout from "./layout/RootLayout";
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Blog from "./Pages/Blog";
// import Contact from "./Pages/Contact";
// import Projects from "./Pages/Projects";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} /> */}
      </Route>
    )
  );

  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <RouterProvider router={myRoute} />
    </ThemeProvider>
  );
};

export default App;
