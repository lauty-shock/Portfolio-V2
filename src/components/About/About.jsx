import css from "./About.module.css";

export default function About() {
  return (
    <div className={css.containerShadow}>
      <div id="sobreMi" className={css.container}>
        <span className={css.title}>SOBRE MI</span>
        <div className={css.content}>
          <img className={css.img} src="/img/Traje.jpg" alt="" />
          <div className={css.containerText}>
            <span>
              Mi nombre es Lautaro y soy Desarrollador Web Fullstack. Aunque
              disfruto trabajando en ambos lados, Frontend y Backend, me siento
              un poco más cómodo en el lado Frontend. Me fascina el mundo de la
              programación, soy una persona proactiva que siempre busca aprender
              y crecer, tanto profesional como personalmente. Me siento
              identificado con una frase que leo y comparto: "Nada en el mundo
              puede ocupar el lugar de la perseverancia". Me caracterizo por ser
              siempre responsable, bien predispuesto y comprometido con mis
              tareas, y de fácil adaptación a nuevos equipos de trabajo.
            </span>
            <span>
              Hobbies: básquetbol, programación y viajar, entre otros.
            </span>
            <span>Desde: Córdoba, Argentina</span>
            <div className={css.buttons}>
              <a
                className={css.btn}
                href="Lautaro-Cesar-Perez.pdf"
                target="_blank"
              >
                Ver currículum
              </a>
              <a
                className={css.btn}
                href="Lautaro-Cesar-Perez.pdf"
                target="_blank"
                download
              >
                Descargar currículum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
