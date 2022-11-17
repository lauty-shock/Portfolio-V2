import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.mode);
  return (
    <div className={css.app}>
      <div
        className={mode === "dark" ? `${css.navbarDark}` : `${css.navbarLight}`}
      >
        <Navbar />
      </div>
      <div className={mode === "dark" ? `${css.headerDark}` : `${css.headerLight}`}>
        <Header />
      </div>
      <div className={mode === "dark" ? `${css.contentDark}` : `${css.contentLight}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
