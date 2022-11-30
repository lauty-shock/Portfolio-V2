import css from "./Resume.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Resume({ handleSee }) {
  return (
    <div className={css.container}>
      <button className={css.close} onClick={handleSee}>
        <AiOutlineClose />
      </button>
      <embed
        className={css.cv}
        src="CV-Lautaro-Cesar-Perez.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=55.5"
        type="application/pdf"
      />
    </div>
  );
}
