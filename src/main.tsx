import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global/index.sass";
import "./styles/global/reset.sass";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
