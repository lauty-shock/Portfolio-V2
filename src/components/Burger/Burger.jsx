import { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeLenguage, changeMode } from "../../redux/actions";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import css from "./Burger.module.css";

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
          <div className={css.menuNavbar}>
            <Link
              to="/"
              className={
                mode === "dark"
                  ? `${css.seccionDark}`
                  : `${css.seccionLight}`
              }
              onClick={(e) => setCollapsed(!collapsed)}
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/about"
              className={
                mode === "dark"
                  ? `${css.seccionDark}`
                  : `${css.seccionLight}`
              }
              onClick={(e) => setCollapsed(!collapsed)}
            >
              <FaUserGraduate /> About Me
            </Link>
            <Link
              to="/projects"
              className={
                mode === "dark"
                  ? `${css.seccionDark}`
                  : `${css.seccionLight}`
              }
              onClick={(e) => setCollapsed(!collapsed)}
            >
              <FaLayerGroup /> Projects
            </Link>
            <span
              className={
                mode === "dark"
                  ? `${css.seccionDark}`
                  : `${css.seccionLight}`
              }
              onClick={(e) => setCollapsed(!collapsed)}
            >
              <MdDescription /> Resume
            </span>
            <span
              className={
                mode === "dark"
                  ? `${css.seccionDark}`
                  : `${css.seccionLight}`
              }
              onClick={(e) => setCollapsed(!collapsed)}
            >
              <MdEmail /> Contac
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
