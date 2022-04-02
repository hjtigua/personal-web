import React from "react";

export default function MenuOptions({ text, url }) {
  return (
    <a
      href={url}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {text}
    </a>
  );
}
