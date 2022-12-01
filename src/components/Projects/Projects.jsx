import css from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={css.container}>
      <div className={css.containerProject}>
        <div className={css.containerTitle}>
          <h1>#1 Projects</h1>
        </div>
        <div className={css.containerImg}>
          <div className={css.img}></div>
        </div>
      </div>
    </div>
  );
}
