import { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeLenguage, changeMode } from "../../redux/actions";

import css from "./Header.module.css";

export default function Header() {
  const mode = useSelector((state) => state.mode);
  const [currentMode, setCurrentMode] = useState(mode);
  const dispatch = useDispatch();

  function selectLenguage(e) {
    if (e.target.value === "ESP" || e.target.value === "ENG") {
      dispatch(changeLenguage(e.target.value));
    }
  }
  function divMode() {
    if (currentMode === "dark") {
      setCurrentMode("light");
    } else if (currentMode === "light") {
      setCurrentMode("dark");
    }
    dispatch(changeMode(currentMode));
  }
  return (
    <div className={css.container}>
      <span
        className={mode === "dark" ? `${css.logoDark}` : `${css.logoLight}`}
      >
        &lt; Shock /&gt;
      </span>

      <section className={css.section}>
        <select onChange={(e) => selectLenguage(e)} className={css.select}>
          <option value="ESP">ESP</option>
          <option value="ENG">ENG</option>
        </select>
        <div onClick={divMode} className={css.mood}>
          <BsMoonFill />
        </div>
      </section>
    </div>
  );
}
