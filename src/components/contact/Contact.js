import React from "react";
import "./styles.css";
import ilustracion from "../../assets/images/illustration.svg";
import { useForm } from "../../hooks/useForm";
import { analytics, db } from "../../firebase/conf";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { logEvent } from "firebase/analytics";

export default function Contact() {
  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messagesRef = collection(db, `contactMessages`);
    try {
      await addDoc(messagesRef, {
        name,
        email,
        message,
      });
      logEvent(analytics, "send_form", {
        email,
      });

      reset();
      Swal.fire({
        title: "Mensaje enviado",
        text: "Gracias por contactarme, pronto me pondré en contacto contigo",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      Swal.fire({
        title: "Lo sentimos",
        text: "No se pudo enviar el mensaje, intenta de nuevo",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <section className="contact" onSubmit={handleSubmit}>
      <figure className="contact__picture">
        <img src={ilustracion} alt="loco" className="contact__img" />
      </figure>
      <form className="contact__form">
        <h2 className="contact__title">Estamos en contacto</h2>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="contact__input"
          name="name"
          onChange={handleInputChange}
          value={name}
          required
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Ingresa tu email"
          className="contact__input"
          name="email"
          onChange={handleInputChange}
          value={email}
          required
          autoComplete="off"
        />
        <textarea
          placeholder="Mensaje..."
          className="contact__input contact__input--area"
          name="message"
          onChange={handleInputChange}
          value={message}
          required
          autoComplete="off"
        ></textarea>
        <button type="submit" className="contact__cta">
          Enviar ahora
        </button>
      </form>
    </section>
  );
}
