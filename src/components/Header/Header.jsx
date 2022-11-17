import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.container}>
      <span className={css.logo}>&lt; Shock /&gt;</span>

      <section className={css.section}>
        <select className={css.select}>
          <option>Language</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
        <div className={css.mood}>
          <BsMoonFill />
        </div>
      </section>
    </div>
  );
}
