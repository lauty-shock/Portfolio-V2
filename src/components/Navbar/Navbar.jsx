import { FaHome } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Contac from "../Contac/Contac";
import Resume from "../Resume/Resume";

export default function Navbar() {
  const mode = useSelector((state) => state.mode);
  const lenguage = useSelector((state) => state.lenguage);
  const [viewContac, setViewContac] = useState(false);
  const [viewResume, setViewResume] = useState(false);

  function seeResume() {
    setViewResume(!viewResume)
  }
  function seeContac() {
    setViewContac(!viewContac)
  }
  return (
    <>
      <ul className={css.container}>
        <Link
          to="/"
          className={
            mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
          }
        >
          <FaHome />
          <span
            className={
              mode === "dark"
                ? `${css.seccionNameDark}`
                : `${css.seccionNameLight}`
            }
          >
            {lenguage === "ESP" ? "Inicio" : "Home"}
          </span>
        </Link>
        <Link
          to="/about"
          className={
            mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
          }
        >
          <FaUserGraduate />
          <span
            className={
              mode === "dark"
                ? `${css.seccionNameDark}`
                : `${css.seccionNameLight}`
            }
          >
            {lenguage === "ESP" ? "Sobre mi" : "About me"}
          </span>
        </Link>
        <Link
          to="/projects"
          className={
            mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
          }
        >
          <FaLayerGroup />
          <span
            className={
              mode === "dark"
                ? `${css.seccionNameDark}`
                : `${css.seccionNameLight}`
            }
          >
            {lenguage === "ESP" ? "Proyectos" : "Projects"}
          </span>
        </Link>
        <li
          className={
            mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
          }
          onClick={seeResume}
        >
          <MdDescription />
          <span
            className={
              mode === "dark"
                ? `${css.seccionNameDark}`
                : `${css.seccionNameLight}`
            }
          >
            {lenguage === "ESP" ? "CV" : "Resume"}
          </span>
        </li>
        <li
          className={
            mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
          }
          onClick={seeContac}
        >
          <MdEmail />
          <span
            className={
              mode === "dark"
                ? `${css.seccionNameDark}`
                : `${css.seccionNameLight}`
            }
          >
            {lenguage === "ESP" ? "Contacto" : "Contac"}
          </span>
        </li>
      </ul>
      {viewContac && <Contac handleSee={seeContac} />}
      {viewResume && <Resume handleSee={seeResume} />}
    </>
  );
}
