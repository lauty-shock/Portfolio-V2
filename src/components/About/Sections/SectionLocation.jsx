import { useSelector } from "react-redux";
import css from "../About.module.css";

export default function SectionLocation() {
  const lenguage = useSelector((state) => state.lenguage);
  const mode = useSelector((state) => state.mode);
  return (
    <div className={
      mode === "dark"
        ? `${css.contentInfoLocationDark}`
        : `${css.contentInfoLocationLight}`
    }>
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
  );
}
