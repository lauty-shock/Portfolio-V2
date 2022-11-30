import Swal from "sweetalert2";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import css from "./Contac.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Contac({ handleSee }) {
  const mode = useSelector((state) => state.mode);
  const lenguage = useSelector((state) => state.lenguage);
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
    e.preventDefault();
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
    <div className={css.container}>
      <button className={css.close} onClick={handleSee}>
        <AiOutlineClose />
      </button>
      <form className={css.form} onSubmit={(e) => submit(e)}>
        <h1>{lenguage === "ESP" ? "Contacto" : "Contac"}</h1>
        <div className={css.containerInput}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(e) => handleInput(e)}
            placeholder="ejemplo@gmail.com"
          />
        </div>
        <div className={css.containerInput}>
          <label>{lenguage === "ESP" ? "Nombre" : "Name"}</label>
          <input
            className={css.input}
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleInput(e)}
            placeholder={lenguage === "ESP" ? "Nombre" : "Name"}
          />
        </div>
        <div className={css.containerTextarea}>
          <label>{lenguage === "ESP" ? "Mensaje" : "Message"}</label>
          <textarea
            name="mensaje"
            value={input.mensaje}
            onChange={(e) => handleInput(e)}
            placeholder={
              lenguage === "ESP"
                ? "¡Hola! Quiero contactar con usted porque..."
                : "Hello! I want to contact you because..."
            }
          />
        </div>

        <button className={css.submit}>
          {lenguage === "ESP" ? "Enviar" : "Send"}
        </button>
      </form>
      <div className={css.contacts}>
        <a
          className={css.btnContac}
          href="https://github.com/lauty-shock"
          target="_blank"
        >
          <BsGithub />
        </a>
        <a
          className={css.btnContac}
          href={
            lenguage === "ESP"
              ? "https://api.whatsapp.com/send?phone=+543517468699&text=Hola%20Lautaro!%20vi%20tu%20portfolio.."
              : "https://api.whatsapp.com/send?phone=+543517468699&text=Hi%20Lautaro,%20I%20have%20seen%20your%20portfolio.."
          }
          target="_blank"
        >
          <BsWhatsapp />
        </a>
        <a
          className={css.btnContac}
          href="https://www.linkedin.com/in/lautaroperez135/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}
