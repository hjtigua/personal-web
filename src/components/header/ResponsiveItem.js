import React from "react";
import Icon from "../icons/Icon";

export default function ResponsiveItem({ href, name, icon }) {
  return (
    <a
      href={href}
      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
    >
      <Icon icon={icon} />

      <span className="ml-3 text-base font-medium text-gray-900">{name}</span>
    </a>
  );
}
