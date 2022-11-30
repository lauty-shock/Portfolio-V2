import { useSelector } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import projects from "../Projects/arrayProjects";
import technologies from "../About/technologies";
import css from "./Home.module.css";

export default function Home() {
  const lenguage = useSelector((state) => state.lenguage);
  const mode = useSelector((state) => state.mode);
  return (
    <div className={css.container}>
      <div className={css.containerImg}>
        <img src="https://cdni.iconscout.com/illustration/free/thumb/character-2671590-2218229.png" alt="Yo" />
      </div>
      <div className={css.containerDivs}>
        <div
          className={mode === "dark" ? `${css.dataDark}` : `${css.dataLight}`}
        >
          <span className={css.star}>
            <BsFillStarFill />
          </span>
          <span
            className={
              mode === "dark" ? `${css.letterDark}` : `${css.letterLight}`
            }
          >
            Front-End
          </span>
        </div>
        <div
          className={mode === "dark" ? `${css.dataDark}` : `${css.dataLight}`}
        >
          <span
            className={
              mode === "dark" ? `${css.letterDark}` : `${css.letterLight}`
            }
          >
            {projects.length}
          </span>
          <span
            className={
              mode === "dark" ? `${css.letterDark}` : `${css.letterLight}`
            }
          >
            {lenguage === "ESP" ? "Proyectos" : "Projects"}
          </span>
        </div>
        <div
          className={mode === "dark" ? `${css.dataDark}` : `${css.dataLight}`}
        >
          <span
            className={
              mode === "dark" ? `${css.letterDark}` : `${css.letterLight}`
            }
          >
            {technologies.length}
          </span>
          <span
            className={
              mode === "dark" ? `${css.letterDark}` : `${css.letterLight}`
            }
          >
            {lenguage === "ESP" ? "Tecnologías" : "Technologies"}
          </span>
        </div>
        <div
          className={mode === "dark" ? `${css.dataDark}` : `${css.dataLight}`}
        >
          <span
            className={
              mode === "dark" ? `${css.letterDark}` : `${css.letterLight}`
            }
          >
            {lenguage === "ESP" ? "1 Año" : "1 Year"}
          </span>
          <span
            className={
              mode === "dark" ? `${css.letterDark}` : `${css.letterLight}`
            }
          >
            {lenguage === "ESP" ? "Experiencia" : "Experience"}
          </span>
        </div>
      </div>
    </div>
  );
}
