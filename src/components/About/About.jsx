import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsFillFlagFill } from "react-icons/bs";
import technologies from "../About/technologies";
import css from "./About.module.css";

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
          {section === "about" && (
            <div className={css.contentInfoAbout}>
              <span className={css.infoTitle}>
                {lenguage === "ESP" ? "¿Quién soy?" : "Who am I?"}
              </span>
              <span className={css.infoText}>
                {lenguage === "ESP"
                  ? "Soy un desarrollador web Full Stack. Estudié en el Bootcamp de Henry y decidí adentrarme en el increíble mundo del Front-end. Durante el instituto estudié diferentes lenguajes de programación y resolví diferentes problemas de lógica. Me gusta mucho aprender nuevas tecnologías ya que soy una persona muy proactiva y curiosa. "
                  : "I am a Full Stack web developer. I studied on Henry's Bootcamp and decided to go into the amazing world of Front-end. During high school I studied different programmig languages and solved different logic problems. I really enjoy learning new technologies as I am a very proactive and curious person."}
              </span>
              <span className={css.infoTitleSecondary}>
                {lenguage === "ESP" ? "Pasatiempos: " : "Hobbies: "}
                <span className={css.infoText}>
                  {lenguage === "ESP"
                    ? "Baloncesto, programación y viajes, entre otros."
                    : "Basketball, programming and travel, among others."}
                </span>
              </span>
            </div>
          )}
          {section === "goals" && (
            <div className={css.contentInfoGoals}>
              <span className={css.flag}>
                <BsFillFlagFill />
                <span className={css.infoText}>
                  {" "}
                  -{" "}
                  {lenguage === "ESP"
                    ? "Me apasiona la tecnología, por lo que me entusiasma aprender cosas nuevas. Entre ellas me gustaría saber más sobre el desarrollo de aplicaciones móviles, UX, frameworks, automatización, etc."
                    : "I'm passionate about technology, so I'm very excited to learn new things. Among them I would like to know more about mobile app development, UX, frameworks, automation, etc."}
                </span>
              </span>
              <span className={css.flag}>
                <BsFillFlagFill />
                <span className={css.infoText}> - METAAAAAA</span>
              </span>
              <span className={css.flag}>
                <BsFillFlagFill />
                <span className={css.infoText}> - METAAAAAA</span>
              </span>
            </div>
          )}
          {section === "location" && (
            <div className={css.contentInfoLocation}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108925.52035047632!2d-64.13317053462211!3d-31.44380015555676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses!2sar!4v1668826494064!5m2!1ses!2sar"
                className={css.map}
              />
              <span className={css.infoTextMap}>
                {lenguage === "ESP"
                  ? "Me encuentro en Córdoba, Argentina. Preferiría trabajar a distancia aunque estoy abierto a discutir todas las propuestas."
                  : "I'm located in Cordoba, Argentina. I would prefer to work remotely although I'm open to discuss all proposals."}
              </span>
            </div>
          )}
          {section === "skills" && lenguage === "ESP" && (
            <div className={css.contentInfoSkill}>
              {softSkills.esp.map((s) => (
                <span key={s} className={css.skillDark}>
                  {s}
                </span>
              ))}
            </div>
          )}
          {section === "skills" && lenguage === "ENG" && (
            <div className={css.contentInfoSkill}>
              {softSkills.eng.map((s) => (
                <span key={s} className={css.skillDark}>
                  {s}
                </span>
              ))}
            </div>
          )}
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
          {technologies.map((t, index) => (
            <img key={index} className={css.imgTechnologie} src={t.img}></img>
          ))}
        </div>
      </div>
    </div>
  );
}
