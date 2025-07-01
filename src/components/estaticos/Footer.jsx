import React from "react";
import "./styleEstatico.css";
import flecha from "../../assets/flecha-hacia-arriba.png";

const Footer = () => {
  return (
    <footer class="footer">
      <nav class="navFooter">
        <ul class="listaNav">
          <li class="listaItem">
            <a class="linkNavFooter" href="">
              Términos y condiciones
            </a>
          </li>
          <li class="listaItem">
            <a class="linkNavFooter" href="">
              Preguntas frecuentes
            </a>
          </li>
          <li class="listaItem">
            <a class="linkNavFooter" href="">
              Ayuda
            </a>
          </li>
          <li class="listaItem">
            <a href="" class="flechaArriba">
              <img src={flecha} alt="foto flecha" className="img-flecha" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
