import React from "react";
import "./hightText.css";
export default function Home() {
  return (
    <>
      <h2 className="my-3">
        <span className="highlighted__text m-0 p-0">
          Desarrollador web Full-Stack
        </span>
      </h2>
      <hr />
      <div className="mt-5">
        <p className="mb-3 text-xl text-zinc-600">
          Hola soy Héctor Tigua, desarrollador web con más de 3 años de
          experiencia.
        </p>
        <p className="mb-0 text-xl text-zinc-600">
          Entusiasta de la tecnología, activamente materializando mis ideas en
          código.
        </p>
      </div>
    </>
  );
}
