import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PersonalWebApp from "./PersonalWebApp";
const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <PersonalWebApp />
  </BrowserRouter>
);
// <React.StrictMode>
//     <PersonalWebApp />
//   </React.StrictMode>,
