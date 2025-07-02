import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styleEstatico.css";
import flecha from "../../assets/flecha-hacia-arriba.png";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="navegacion">
        <ul className="listaNav">
          <li className="listaItem">
            <Link className="linkNavFooter" to='/terminos'>
              Términos y condiciones
            </Link>
          </li>
          <li className="listaItem">
            <Link className="linkNavFooter" to='/preguntas'>
              Preguntas frecuentes
            </Link>
          </li>
          <li className="listaItemFooter">
            <Link className="linkNavFooter" to='/ayuda'>
              Ayuda
            </Link>
          </li>
          <li className="listaItem">
            <a href="" className="flechaArriba">
              <img src={flecha} alt="foto flecha" className="img-flecha" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
