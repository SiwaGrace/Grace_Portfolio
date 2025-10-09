import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Maintenance from "./components/Maintenance";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Maintenance /> */}
  </StrictMode>
);
