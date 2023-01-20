import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "@/assets/styles/base.css";
import "@/assets/styles/components.css";
import "@/assets/styles/utilities.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
