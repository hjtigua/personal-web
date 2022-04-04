import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  return (
    <div className="flex items-center justify-center flex-col text-2xl">
      <span className="py-4">Hombres trabajando.</span>
      <FontAwesomeIcon icon={faPersonDigging} size="10x" color="#F7BE3B" />
    </div>
  );
}
