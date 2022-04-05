import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../icons/Icon";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-5xl mx-auto py-10 text-base font-medium text-gray-500 ">
      <div className="text-center">
        <div className="flex flex-wrap justify-center mb-8 ">
          <NavLink className="mx-4 hover:underline" to="/about">
            Acerca de mí
          </NavLink>
          <NavLink className="mx-4 hover:underline" to="/projects">
            Proyecto
          </NavLink>
          <NavLink className="mx-4 hover:underline" to="/blog">
            Blog
          </NavLink>
          <NavLink className="mx-4 hover:underline" to="/contact">
            Contacto
          </NavLink>
        </div>
        <div className="flex justify-center mb-8">
          <a
            className="mx-3"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/hjtigua"
          >
            <Icon icon="git" />
          </a>
          <a
            className="mx-3"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/hector-javier-tigua-guerrero-a1a08a12a/"
          >
            <Icon icon="linkeding" />
          </a>
          <a
            rel="noreferrer"
            className="mx-3"
            target="_blank"
            href="https://twitter.com/javi3rtigua"
          >
            <Icon icon="twitter" />
          </a>
        </div>
        <div className="text-center mx-2">
          <p>©{year}, Héctor Tigua.Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
