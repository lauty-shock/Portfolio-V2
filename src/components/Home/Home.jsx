import css from "./Home.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Front-End", "Back-End", "FullStack"],
    loop: 0,
  });
  return (
    <div id="inicio" className={css.container}>
      <div className={css.containerPresentacion}>
        <span className={css.presentacion}>Hola! Yo soy</span>
        <span className={css.nombre}>Lautaro Perez</span>
        <span className={css.presentacion}>
          <span className={css.soy}>Y soy </span>
          <span className={css.servicios}>
            Desarrollador web {text}
            {/* Desarrollador web Front-End */}
            <Cursor />
          </span>
        </span>
        <span className={css.text}>
          Soy un apasionado por el mundo de la programación, lo que me lleva a
          siempre estar buscando nuevos desafíos.
        </span>

        <div className={css.containerRedes}>
          <a
            className={css.red}
            href="https://www.linkedin.com/in/lautaroperez135/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className={css.red}
            href="https://github.com/lauty-shock"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            className={css.red}
            href="https://api.whatsapp.com/send?phone=+543517468699&text=Hola%20Lautaro!%20vi%20tu%20portfolio.."
            target="_blank"
          >
            <BsWhatsapp />
          </a>
          <a
            className={css.red}
            href="mailto:lautaroperez135@gmail.com"
            target="_blank"
          >
            <BsFillEnvelopeFill />
          </a>
        </div>
        <a className={css.btn} href="#sobreMi">
          Saber más
        </a>
      </div>
      <div className={css.img}></div>
    </div>
  );
}
