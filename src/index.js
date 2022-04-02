import React from "react";
import * as ReactDOMClient from "react-dom/client";
import PersonalWebApp from "./PersonalWebApp";
const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<PersonalWebApp />);
// <React.StrictMode>
//     <PersonalWebApp />
//   </React.StrictMode>,
