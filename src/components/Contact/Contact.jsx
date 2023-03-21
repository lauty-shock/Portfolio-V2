import css from "./Contact.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useFormik } from "formik";

export default function Contact() {
  function submit(e) {
    e.preventDefault();
    axios.post("https://submit-form.com/nT4t6IoQ", formik.values);
    formik.resetForm();

    Swal.fire({
      background: "rgb(100, 100, 100)",
      color: "white",
      title: "¡Aprecio su interes!",
      text: "¡Me comunicaré a la brevedad!",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
    });
  }
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Requerido";
    } else if (values.name.length < 3) {
      errors.name = "Su nombre debe superar los 3 caracteres";
    }

    if (!values.mensaje) {
      errors.mensaje = "Requerido";
    } else if (values.mensaje.length < 20) {
      errors.mensaje = "Su mensaje debe superar los 20 caracteres";
    }

    if (!values.email) {
      errors.email = "Requerido";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Correo electrónico invalido";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mensaje: "",
    },
    validate,
    onSubmit: (values) => {
      submit();
    },
    resetForm: () => {
      formik.values = {
        name: "",
        email: "",
        mensaje: "",
      };
    },
  });

  return (
    <div id="contacto" className={css.container}>
      <span className={css.title}>CONTACTO</span>
      <div className={css.form}>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Tu nombre"
        />
        {formik.errors.name ? (
          <div className={css.error}>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="ejemplo@gmail.com"
        />
        {formik.errors.email ? (
          <div className={css.error}>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="mensaje">Su mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          onChange={formik.handleChange}
          value={formik.values.mensaje}
          placeholder="¡Hola! Quiero contactarme con vos porque..."
        />
        {formik.errors.mensaje ? (
          <div className={css.errorTextarea}>{formik.errors.mensaje}</div>
        ) : null}
        <center>
          {(Object.keys(formik.errors).length !== 0) |
          (formik.values.name === "") |
          (formik.values.email === "") |
          (formik.values.mensaje === "") ? (
            <button className={css.inavilitado}>Enviar mensaje</button>
          ) : (
            <button className={css.avilitado} onClick={submit}>
              Enviar mensaje
            </button>
          )}
        </center>
      </div>
    </div>
  );
}
