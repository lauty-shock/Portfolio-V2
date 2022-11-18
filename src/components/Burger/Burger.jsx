import { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeLenguage, changeMode } from "../../redux/actions";
import { AiOutlineClose } from "react-icons/ai";
import css from "./Burger.module.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

export default function Burger() {
  const lenguage = useSelector((state) => state.lenguage);
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const [currentMode, setCurrentMode] = useState(mode);
  const [collapsed, setCollapsed] = useState(false);

  function btnLenguage(e) {
    dispatch(changeLenguage(e.target.value));
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
    <>
      <div className={css.header}>
        <span
          className={mode === "dark" ? `${css.logoDark}` : `${css.logoLight}`}
        >
          &lt; Shock /&gt;
        </span>
        <button
          onClick={(e) => setCollapsed(!collapsed)}
          className={css.burger}
        >
          <span
            className={mode === "dark" ? `${css.lineDark}` : `${css.lineLight}`}
          ></span>
          <span
            className={mode === "dark" ? `${css.lineDark}` : `${css.lineLight}`}
          ></span>
          <span
            className={mode === "dark" ? `${css.lineDark}` : `${css.lineLight}`}
          ></span>
        </button>
      </div>
      {collapsed ? (
        <div
          className={
            mode === "dark" ? `${css.showMenuDark}` : `${css.showMenuLight}`
          }
        >
          <div className={css.menuHeader}>
            <button onClick={(e) => setCollapsed(!collapsed)} className={css.X}>
              <span>
                <AiOutlineClose />
              </span>
            </button>

            <section className={css.lenguage}>
              {lenguage === "ESP" ? (
                <>
                  <button
                    className={
                      mode === "dark"
                        ? `${css.btnLenguageActiveDark}`
                        : `${css.btnLenguageActiveLight}`
                    }
                  >
                    ESP
                  </button>
                  <button
                    onClick={(e) => btnLenguage(e)}
                    value="ENG"
                    className={
                      mode === "dark"
                        ? `${css.btnLenguageDark}`
                        : `${css.btnLenguageLight}`
                    }
                  >
                    ENG
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={(e) => btnLenguage(e)}
                    value="ESP"
                    className={
                      mode === "dark"
                        ? `${css.btnLenguageDark}`
                        : `${css.btnLenguageLight}`
                    }
                  >
                    ESP
                  </button>
                  <button
                    className={
                      mode === "dark"
                        ? `${css.btnLenguageActiveDark}`
                        : `${css.btnLenguageActiveLight}`
                    }
                  >
                    ENG
                  </button>
                </>
              )}
            </section>

            {mode === "dark" ? (
              <div onClick={divMode} className={css.moodDark}>
                <BsMoonFill />
              </div>
            ) : (
              <div onClick={divMode} className={css.moodLight}>
                <BsSunFill />
              </div>
            )}
          </div>
          <BurgerMenu/>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
