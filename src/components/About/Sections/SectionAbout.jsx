import { useSelector } from "react-redux";
import css from "../About.module.css";

export default function SectionAbout() {
  const lenguage = useSelector((state) => state.lenguage);
  const mode = useSelector((state) => state.mode);
  return (
    <div className={
      mode === "dark"
        ? `${css.contentInfoAboutDark}`
        : `${css.contentInfoAboutLight}`
    }>
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
  );
}
