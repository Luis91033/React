/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Approuter from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Approuter />
  </StrictMode>
);
