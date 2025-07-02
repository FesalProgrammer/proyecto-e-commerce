import React from "react";
import "../components/styleAcercaDe.css";
import { Link } from "react-router-dom";
import bgInicio from "../assets/bg10.jpg";

const Ayuda = () => {
  return (
    <div className="container-principal">
      <h1 className="titulo-terminos">Ayuda</h1>
      <div className="container-terminos">
        <img src={bgInicio} alt="foto" className="img-acerca-de" />
        <div className="container-parrafos">
          <p className="parrafo-acerca-de">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            perspiciatis atque error ut id in alias eligendi mollitia! Deserunt
            itaque sequi impedit illum vel ipsam!
          </p>
          <p className="parrafo-acerca-de">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            cupiditate rem accusamus in dignissimos nemo qui recusandae ipsum
            eos facilis impedit omnis ipsam illum sapiente eius, dolor eveniet
            et temporibus neque, iure voluptatem, nulla deleniti perferendis.
            Delectus excepturi maxime adipisci!
          </p>
        </div>
      </div>
      <Link className="btnFooter" to="/">
        Ir a inicio
      </Link>
    </div>
  );
};

export default Ayuda;