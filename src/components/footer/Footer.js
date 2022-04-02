import React from "react";
import Icon from "../icons/Icon";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-5xl mx-auto py-10 text-base font-medium text-gray-500 ">
      <div className="text-center">
        <div className="flex flex-wrap justify-center mb-8 ">
          <a className="mx-4 hover:underline" href="#">
            Acerca de mí
          </a>
          <a className="mx-4 hover:underline" href="#">
            Proyecto
          </a>
          <a className="mx-4 hover:underline" href="#">
            Blog
          </a>
          <a className="mx-4 hover:underline" href="#">
            Contacto
          </a>
        </div>
        <div className="flex justify-center mb-8">
          <a className="mx-3" href="#">
            <Icon icon="git" />
          </a>
          <a className="mx-3" href="#">
            <Icon icon="linkeding" />
          </a>
          <a className="mx-3" href="#">
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
