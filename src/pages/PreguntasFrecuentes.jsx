import React from "react";
import "../components/styleAcercaDe.css";
import { Link } from "react-router-dom";
import bgInicio from "../assets/bg10.jpg";

const PreguntasFrecuentes = () => {
  return (
    <div className="container-principal">
      <h1 className="titulo-terminos">Preguntas frecuentes</h1>
      <div className="container-terminos">
        <img src={bgInicio} alt="foto" className="img-acerca-de" />
        <div className="container-parrafos">
          <p className="parrafo-acerca-de">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid
            officia voluptates ea recusandae repellendus, eligendi soluta
            qui labore officiis asperiores magnam corporis eos neque. Eligendi
            nulla sunt perferendis.
          </p>
          <p className="parrafo-acerca-de">
            libero possimus repudiandae dignissimos, dolor facere tempore
            corrupti asperiores vitae non ullam exercitationem corporis ratione
            saepe deleniti ducimus consectetur. Maxime quibusdam minus suscipit
            accusamus quae quo, atque placeat ipsum omnis expedita.
          </p>
        </div>
      </div>
      <Link className="btnFooter" to="/">
        Ir a inicio
      </Link>
    </div>
  );
};

export default PreguntasFrecuentes;
