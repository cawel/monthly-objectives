import React from "react";
import ReactDOM from "react-dom";

import "./css/style.css";
import { Router } from "./routes/Router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("main")
);
