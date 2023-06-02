
import React from "react";
import ReactDOM from "react-dom/client";
import RenderRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
