import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div>
      <h3 className=" text-gray-700 text-2xl font-bold py-4">
        <FontAwesomeIcon icon={faBriefcase} size="lg" color="#F7BE3B" />
        <span className="px-2">Proyectos</span>
      </h3>
      <hr />
      <section className="cards mt-5">
        <article className="card cursor-pointer relative">
          <a href="#" className="absolute inset-0"></a>
          <div className="card__container hover:bg-gray-200">
            <h2 className="card__title">Binance P2P Price Alert</h2>
          </div>
        </article>
      </section>
    </div>
  );
}
