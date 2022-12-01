import { useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

import css from "./BurgerMenu.module.css";
import { useState } from "react";
import Contac from "../../Contac/Contac";

export default function BurgerMenu() {
  const lenguage = useSelector((state) => state.lenguage);
  const mode = useSelector((state) => state.mode);
  const [viewContac, setViewContac] = useState(false);

  function seeContac() {
    setViewContac(!viewContac);
  }
  return (
    <>
      <div className={css.menuNavbar}>
        <Link
          to="/"
          className={
            mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
          }
          onClick={(e) => setCollapsed(!collapsed)}
        >
          <FaHome /> {lenguage === "ESP" ? "Inicio" : "Home"}
        </Link>
        <Link
          to="/about"
          className={
            mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
          }
          onClick={(e) => setCollapsed(!collapsed)}
        >
          <FaUserGraduate /> {lenguage === "ESP" ? "Sobre mi" : "About me"}
        </Link>
        <Link
          to="/projects"
          className={
            mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
          }
          onClick={(e) => setCollapsed(!collapsed)}
        >
          <FaLayerGroup /> {lenguage === "ESP" ? "Proyectos" : "Projects"}
        </Link>
        <li
          className={
            mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
          }
        >
          <MdDescription /> {lenguage === "ESP" ? "CV" : "Resume"}
        </li>
        <li
          className={
            mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
          }
          onClick={seeContac}
        >
          <MdEmail /> {lenguage === "ESP" ? "Contacto" : "Contact"}
        </li>
      </div>
      {viewContac && <Contac handleSee={seeContac} />}
    </>
  );
}
