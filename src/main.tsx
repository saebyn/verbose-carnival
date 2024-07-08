import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Router";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import OBS from "./OBS";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <OBS>
      <RouterProvider router={router} />
    </OBS>
  </React.StrictMode>
);
