import css from "./Projects.module.css";
import Proyect from "./Project.js";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

export default function Projects() {
  return (
    <div className={css.containerShadow}>
      <div id="proyectos" className={css.container}>
        <span className={css.title}>MIS PROYECTOS</span>
        <div className={css.containerCards}>
          {Proyect?.map((p, index) => (
            <div key={index} className={css.card}>
              <img src={p.img} />
              <div className={css.containerHover}>
                <div className={css.deploy}>
                  <a href={p.deploy} target="_blank">
                    <BsBoxArrowUpRight />
                  </a>
                  <a href={p.github} target="_blank">
                    <BsGithub />
                  </a>
                </div>
                <div className={css.tecnologias}>
                  {p.tecnologys.map((t, index) => (
                    <p key={index} className={css.nameTecnologia}>
                      {t}
                    </p>
                  ))}
                </div>
              </div>
              <span>{p.name}</span>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
