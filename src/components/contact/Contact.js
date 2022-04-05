import React from "react";
import "./styles.css";
import ilustracion from "../../assets/images/illustration.svg";
export default function Contact() {
  return (
    <section className="contact">
      <figure className="contact__picture">
        <img src={ilustracion} alt="loco" className="contact__img" />
      </figure>
      <form className="contact__form">
        <h2 className="contact__title">Estamos en contacto</h2>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="contact__input"
        />
        <input
          type="email"
          placeholder="Ingresa tu email"
          className="contact__input"
        />
        <textarea
          placeholder="Mensaje..."
          className="contact__input contact__input--area"
        ></textarea>
        <button type="submit" className="contact__cta">
          Enviar ahora
        </button>
      </form>
    </section>
  );
}
