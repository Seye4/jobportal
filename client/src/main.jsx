import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "react-toastify/ReactToastify.css";
// // import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <ToastContainer /> */}
  </StrictMode>
);
