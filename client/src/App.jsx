import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RootLayout from "./layout/RootLayout";
import Home from "./Pages/Home";
import ErrorModal from "./components/HomeComponents/ErrorModal";
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
        <Route path="/er" element={<ErrorModal />} />
      </Route>,
    ),
  );

  return (
    <HelmetProvider>
      <RouterProvider router={myRoute} />
    </HelmetProvider>
  );
};

export default App;
