import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import ThemeContextProvider from "./Store/ThemeContextProvider.jsx";
import ContextProvider from "./Store/ContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ContextProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
