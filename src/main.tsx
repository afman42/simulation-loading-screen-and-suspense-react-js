import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoadingProvider } from "./context/LoadingContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
