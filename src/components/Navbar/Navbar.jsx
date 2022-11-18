import { FaHome } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const mode = useSelector((state) => state.mode);
  return (
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
          Home
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
          About Me
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
          Projects
        </span>
      </Link>
      <li
        className={
          mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
        }
      >
        <MdDescription />
        <span
          className={
            mode === "dark"
              ? `${css.seccionNameDark}`
              : `${css.seccionNameLight}`
          }
        >
          Resume
        </span>
      </li>
      <li
        className={
          mode === "dark" ? `${css.seccionDark}` : `${css.seccionLight}`
        }
      >
        <MdEmail />
        <span
          className={
            mode === "dark"
              ? `${css.seccionNameDark}`
              : `${css.seccionNameLight}`
          }
        >
          Contac
        </span>
      </li>
    </ul>
  );
}
