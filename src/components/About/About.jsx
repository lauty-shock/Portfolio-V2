import React, { useState } from "react";
import { useSelector } from "react-redux";
import technologies from "../About/technologies";
import SectionAbout from "./Sections/SectionAbout";
import SectionGoals from "./Sections/SectionGoals";
import SectionLocation from "./Sections/SectionLocation";
import css from "./About.module.css";
import SectionTechnologies from "./Sections/SectionTechnologies";

export default function About() {
  const softSkills = {
    esp: [
      "creatividad",
      "innovación",
      "liderazgo",
      "perseverancia",
      "persuasión",
      "proactivo",
      "sociable",
    ],
    eng: [
      "creativity",
      "innovation",
      "leadership",
      "perseverance",
      "persuasion",
      "proactive",
      "sociable",
    ],
  };
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

        {section === "technologies" ? (
          <button
            className={
              mode === "dark"
                ? `${css.sectionDarkActive}`
                : `${css.sectionLightActive}`
            }
          >
            {lenguage === "ESP" ? "Tecnologías" : "Technologies"}
          </button>
        ) : (
          <button
            onClick={(e) => setSection(e.target.value)}
            value="technologies"
            className={
              mode === "dark" ? `${css.sectionDark}` : `${css.sectionLight}`
            }
          >
            {lenguage === "ESP" ? "Tecnologías" : "Technologies"}
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
          <div className={css.character}>AQUÍ VA LA IMAGEN DE UNA PELOTA</div>
        </div>

        <div className={css.content}>
          {section === "about" && <SectionAbout />}
          {section === "goals" && <SectionGoals />}
          {section === "location" && <SectionLocation />}
          {section === "technologies" && <SectionTechnologies />}
          {section === "skills" && lenguage === "ESP" && (
            <div
              className={
                mode === "dark"
                  ? `${css.contentInfoSkillDark}`
                  : `${css.contentInfoSkillLight}`
              }
            >
              {softSkills.esp.map((s) => (
                <span
                  key={s}
                  className={
                    mode === "dark" ? `${css.skillDark}` : `${css.skillLight}`
                  }
                >
                  {s}
                </span>
              ))}
            </div>
          )}
          {section === "skills" && lenguage === "ENG" && (
            <div
              className={
                mode === "dark"
                  ? `${css.contentInfoSkillDark}`
                  : `${css.contentInfoSkillLight}`
              }
            >
              {softSkills.eng.map((s) => (
                <span
                  key={s}
                  className={
                    mode === "dark" ? `${css.skillDark}` : `${css.skillLight}`
                  }
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
