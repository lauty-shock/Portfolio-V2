import { useSelector } from "react-redux";
import css from "../About.module.css";

export default function SectionTechnologies() {
    const lenguage = useSelector((state) => state.lenguage);
    const mode = useSelector((state) => state.mode);
  return (
    <div className={
        mode === "dark"
          ? `${css.containerTechnologiesDark}`
          : `${css.containerTechnologiesLight}`
      }>
        <div className={css.technologieColum}>Lenguajes</div>
        <div className={css.technologieColum}>Frameworks</div>
        <div className={css.technologieColum}>Librerias</div>
      </div>
  )
}
