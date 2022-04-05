import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import PersonalWebApp from "./PersonalWebApp";
const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <PersonalWebApp />
  </HashRouter>
);
// <React.StrictMode>
//     <PersonalWebApp />
//   </React.StrictMode>,
