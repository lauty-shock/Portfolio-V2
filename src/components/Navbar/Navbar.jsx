import React, { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="nav-logo" src="img/S-logo-blanco.svg" alt="Logo" />

      <div className={`nav-items ${isOpen && "open"}`}>
        <a onClick={() => setIsOpen(!isOpen)} href="#inicio">Inicio</a>
        <a onClick={() => setIsOpen(!isOpen)} href="#sobreMi">Sobre mí</a>
        <a onClick={() => setIsOpen(!isOpen)} href="#skills">Skills</a>
        <a onClick={() => setIsOpen(!isOpen)} href="#proyectos">Proyectos</a>
        <a onClick={() => setIsOpen(!isOpen)} href="#contacto">Contacto</a>
      </div>
      
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}
