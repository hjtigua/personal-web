import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuOptions({ text, url }) {
  return (
    <NavLink
      className="text-base font-medium text-gray-500 hover:text-gray-900"
      to={url}
    >
      {text}
    </NavLink>
  );
}
