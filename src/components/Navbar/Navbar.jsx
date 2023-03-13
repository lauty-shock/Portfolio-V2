import css from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={css.container}>
      <img src="/img/S-logo-blanco.svg" alt="Logo" />

      <ul>
        <a className={css.linkActive} href="#inicio">INICIO</a>
        <a className={css.link} href="#sobreMi">SOBRE MI</a>
        <a className={css.link} href="#skills">SKILLS</a>
        <a className={css.link} href="#proyectos">PROYECTOS</a>
        <a className={css.link} href="#contacto">CONTACTO</a>
      </ul>
    </div>
  );
}
