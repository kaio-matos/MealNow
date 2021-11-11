import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { APIContextProvider } from "./contexts/APIContext";

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
