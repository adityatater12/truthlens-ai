import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { DocumentProvider } from "./context/DocumentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DocumentProvider>
      <App />
    </DocumentProvider>
  </BrowserRouter>
);