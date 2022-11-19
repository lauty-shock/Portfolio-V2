import { useSelector } from "react-redux";
import { BsFillFlagFill } from "react-icons/bs";
import css from "../About.module.css";

export default function SectionGoals() {
  const lenguage = useSelector((state) => state.lenguage);
  const mode = useSelector((state) => state.mode);
  return (
    <div className={
      mode === "dark"
        ? `${css.contentInfoGoalsDark}`
        : `${css.contentInfoGoalsLight}`
    }>
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
  );
}
