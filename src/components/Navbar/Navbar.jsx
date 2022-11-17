import { FaHome } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={css.container}>
      <Link to="/" className={css.seccion}>
        <FaHome />
        <span className={css.seccionName}>Home</span>
      </Link>
      <Link to="/about" className={css.seccion}>
        <FaUserGraduate />
        <span className={css.seccionName}>About Me</span>
      </Link>
      <Link to='/projects' className={css.seccion}>
        <FaLayerGroup />
        <span className={css.seccionName}>Projects</span>
      </Link>
      <li className={css.seccion}>
        <MdDescription />
        <span className={css.seccionName}>Resume</span>
      </li>
      <li className={css.seccion}>
        <MdEmail />
        <span className={css.seccionName}>Contac</span>
      </li>
    </ul>
  );
}
