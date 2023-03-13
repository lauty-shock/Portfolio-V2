import css from "./Footer.module.css";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={css.container}>
      <div className={css.copyright}>
        <img src="/img/S-logo-blanco.svg" />
        <span>© 2022 Lautaro Perez TODOS LOS DERECHOS RESERVADOS</span>
      </div>
      <div className={css.contactos}>
        <a href="https://www.linkedin.com/in/lautaroperez135/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/lauty-shock" target="_blank">
          <BsGithub />
        </a>
        <a href="mailto:lautaroperez135@gmail.com" target="_blank">
          <BsFillEnvelopeFill />
        </a>
      </div>
    </div>
  );
}
