import React from "react";
import ReactDOM from "react-dom";

import "./css/style.css";
import { Router } from "./components/Router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("main")
);
