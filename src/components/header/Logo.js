import React from "react";
import "./header.css";
export default function Logo() {
  return (
    <div className="flex flex-col justify-start lg:w-0 lg:flex-1 logo__text cursor-pointer">
      <a href="#">
        <span className="sr-only">Workflow</span>
      </a>
      <h1 className="text-2xl flex">
        <i className="icon coin"></i>
        <span className="mx-1">Héctor Tigua</span>
        <i className="icon bitcoin"></i>
      </h1>
    </div>
  );
}
