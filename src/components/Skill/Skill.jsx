import css from "./Skill.module.css";
import { Tool, Back, Front } from "./Skills";

export default function Skill() {
  return (
    <div id="skills" className={css.container}>
      <span className={css.title}>MIS SKILLS</span>
      <div className={css.pensarNombre}>
        <div className={css.containerSkills}>
          <span className={css.titleSkill}>Front-End</span>
          <div className={css.skills}>
            {Front?.map((s, index) => (
              <div key={index} className={css.skill}>
                <div>
                  <img src={s.img} alt={s.name} />
                </div>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={css.containerSkills}>
          <span className={css.titleSkill}>Back-End</span>
          <div className={css.skills}>
          {Back?.map((s, index) => (
              <div key={index} className={css.skill}>
                <div>
                  <img src={s.img} alt={s.name} />
                </div>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={css.containerSkills}>
          <span className={css.titleSkill}>Herramientas</span>
          <div className={css.skills}>
          {Tool?.map((s, index) => (
              <div key={index} className={css.skill}>
                <div>
                  <img src={s.img} alt={s.name} />
                </div>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
