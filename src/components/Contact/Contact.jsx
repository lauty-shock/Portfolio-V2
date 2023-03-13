import css from "./Contact.module.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Contact() {
  const [input, setInput] = useState({
    email: "",
    name: "",
    mensaje: "",
  });

  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    e.preventDefault()
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(input.email)) {
      Swal.fire({
        // background: "black",
        border: "2px solid blue",
        // color: "white",
        title: "¡Error!",
        text: "Por favor complete con un email valido",
        icon: "error",
        timer: 3000,
      });
    } else if (!input.name || input.name.length < 4) {
      Swal.fire({
        background: "black",
        color: "white",
        title: "¡Error!",
        text: "Por favor complete con su nombre",
        icon: "error",
        timer: 3000,
      });
    } else if (input.mensaje.length < 8) {
      Swal.fire({
        background: "black",
        color: "white",
        title: "¡Error!",
        text: "Por favor complete con la razón de su comunicado",
        icon: "error",
        timer: 3000,
      });
    } else {
      axios.post("https://submit-form.com/nT4t6IoQ", input);

      setInput({
        email: "",
        name: "",
        mensaje: "",
      });

      Swal.fire({
        background: "rgb(100, 100, 100)",
        color: "white",
        title: "¡Aprecio su interes!",
        text: "¡Me comunicaré a la brevedad!",
        icon: "success",
        timer: 4000,
        timerProgressBar: true,
      });
    }
  }
  return (
    <div id="contacto" className={css.container}>
      <span className={css.title}>CONTACTO</span>
      <div className={css.form}>
          <label htmlFor="">Nombre</label>
          <input type="text" name="name" value={input.name} onChange={(e) => handleInput(e)} placeholder="Tu nombre" />
          <label htmlFor="">Dirección de correo electrónico</label>
          <input type="email" name="email" value={input.email} onChange={(e) => handleInput(e)} placeholder="ejemplo@gmail.com" />
          <label htmlFor="">Su mensaje</label>
          <textarea name="mensaje" value={input.mensaje} onChange={(e) => handleInput(e)} placeholder="¡Hola! Quiero contactarme con vos porque..."></textarea>
        <center>
          <button onClick={e => submit(e)}>Enviar mensaje</button>
        </center>
      </div>
    </div>
  );
}
