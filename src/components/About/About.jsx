import React, { useState } from "react";
import { useSelector } from "react-redux";
import technologies from "../About/technologies";
import css from "./About.module.css";

export default function About() {
  const [section, setSection] = useState("about");
  const lenguage = useSelector((state) => state.lenguage);
  const mode = useSelector((state) => state.mode);
  return (
    <div className={css.containerGrid}>
      <div className={css.containerSections}>
        {section === "about" ? (
          <button
            className={
              mode === "dark"
                ? `${css.sectionDarkActive}`
                : `${css.sectionLightActive}`
            }
          >
            {lenguage === "ESP" ? "Sobre mi" : "About me"}
          </button>
        ) : (
          <button
            onClick={(e) => setSection(e.target.value)}
            value="about"
            className={
              mode === "dark" ? `${css.sectionDark}` : `${css.sectionLight}`
            }
          >
            {lenguage === "ESP" ? "Sobre mi" : "About me"}
          </button>
        )}

        {section === "goals" ? (
          <button
            className={
              mode === "dark"
                ? `${css.sectionDarkActive}`
                : `${css.sectionLightActive}`
            }
          >
            {lenguage === "ESP" ? "Metas" : "Goals"}
          </button>
        ) : (
          <button
            onClick={(e) => setSection(e.target.value)}
            value="goals"
            className={
              mode === "dark" ? `${css.sectionDark}` : `${css.sectionLight}`
            }
          >
            {lenguage === "ESP" ? "Metas" : "Goals"}
          </button>
        )}

        {section === "location" ? (
          <button
            className={
              mode === "dark"
                ? `${css.sectionDarkActive}`
                : `${css.sectionLightActive}`
            }
          >
            {lenguage === "ESP" ? "Ubicación" : "Location"}
          </button>
        ) : (
          <button
            onClick={(e) => setSection(e.target.value)}
            value="location"
            className={
              mode === "dark" ? `${css.sectionDark}` : `${css.sectionLight}`
            }
          >
            {lenguage === "ESP" ? "Ubicación" : "Location"}
          </button>
        )}

        {section === "skills" ? (
          <button
            className={
              mode === "dark"
                ? `${css.sectionDarkActive}`
                : `${css.sectionLightActive}`
            }
          >
            {lenguage === "ESP" ? "Habilidades blandas" : "Soft skills"}
          </button>
        ) : (
          <button
            onClick={(e) => setSection(e.target.value)}
            value="skills"
            className={
              mode === "dark" ? `${css.sectionDark}` : `${css.sectionLight}`
            }
          >
            {lenguage === "ESP" ? "Habilidades blandas" : "Soft skills"}
          </button>
        )}
      </div>

      <div className={css.containerContent}>
        <div className={css.containerCharacter}>
          <div className={css.character}></div>
        </div>

        <div className={css.content}>
          <div className={css.contentInfo}>
            {section === "about" && (
              <>
                <span className={css.infoTitle}>
                  {lenguage === "ESP" ? "¿Quién soy?" : "Who am I?"}
                </span>
                <span className={css.infoText}>
                  {lenguage === "ESP"
                    ? "es el protagonista principal de la serie de Anime/Manga Haikyuu!! ilustrada por Haruichi Furudate. Él actualmente jugador del ASAS Sao Paulo y fue estudiante de la Preparatoria Karasuno."
                    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium maiores maxime corrupti distinctio earum, deleniti doloremque fuga et accusamus ipsa laboriosam pariatur quos soluta ducimus rerum, totam qui placeat?"}
                </span>
                <span className={css.infoHobbies}>
                  {lenguage === "ESP" ? "Pasatiempos:" : "Hobbies:"}
                </span>
              </>
            )}

            {section === "goals" && <span>GOALS</span>}
            {section === "location" && <span>LOCATION</span>}
            {section === "skills" && <span>SKILLS</span>}
          </div>
        </div>
      </div>

      <div className={css.containerTechnologies}>
        <div
          className={
            mode === "dark"
              ? `${css.technologiesDark}`
              : `${css.technologiesLight}`
          }
        >
          {technologies.map((t) => (
            <img className={css.imgTechnologie} src={t.img}></img>
          ))}
        </div>
      </div>
    </div>
  );
}
