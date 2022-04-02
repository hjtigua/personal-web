import React from "react";
import Icon from "../icons/Icon";
export default function Footer() {
  return (
    <footer className="px-80">
      <div className="flex justify-around py-4">
        <a href="#">Acerca de mí</a>
        <a href="#">Proyecto</a>
        <a href="#">Blog</a>
        <a href="#">Contacto</a>
      </div>
      <div className="flex justify-center py-4">
        <Icon icon="git" />
        <Icon icon="linkeding" />
        <Icon icon="twitter" />
      </div>
      <div className="py-4 text-center">
        <p>2022, Héctor Tigua.Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
