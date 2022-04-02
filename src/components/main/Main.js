import React from "react";

export default function Main() {
  return (
    <section className="ftco-section-no-padding bg-light h-full">
      <div className="hero-wrap">
        <div className="d-flex align-items-center align-items-center js-fullheight">
          <div className="author-info text p-3 p-md-5">
            <div className="desc">
              <span className="subheading">Hola soy</span>
              <h1 className="mb-4">
                <span>Héctor Tigua</span> Desarrollador<span> Web</span>
              </h1>
              <div className="intro">
                <p className="mb-3">
                  Con más de 3 años de experiencia en el desarrollo web,
                  frontent y backend.
                </p>
                <p className="mb-0">
                  Entusiasta de la tecnología, activamente materializando mis
                  ideas en código.
                </p>
                {/* <p className="mb-0">
                  En mi tiempo libre creo contenido de para la comunidad.
                </p> */}
              </div>

              <ul className="ftco-social mt-3">
                <li className="ftco-animate">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/hector-javier-tigua-guerrero-a1a08a12a"
                  >
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a target="_blank" href="https://wa.me/5930995011126">
                    <span className="icon-whatsapp"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
