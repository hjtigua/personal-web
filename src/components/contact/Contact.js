import React from "react";
import "./styles.css";
import ilustracion from "../../assets/images/illustration.svg";
import { useForm } from "../../hooks/useForm";
import { db } from "../../firebase/conf";
import { addDoc, collection } from "firebase/firestore";
export default function Contact() {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messagesRef = collection(db, `contactMessages`);
    await addDoc(messagesRef, {
      name,
      email,
      message,
    });
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
