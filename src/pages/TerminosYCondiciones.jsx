import React from "react";
import "../components/styleAcercaDe.css";
import { Link } from "react-router-dom";
import bgInicio from "../assets/bg10.jpg";

const TerminosYCondiciones = () => {
  return (
    <div className="container-principal">
      <h1 className="titulo-terminos">Términos y condiciones</h1>
      <div className="container-terminos">
        <img src={bgInicio} alt="foto" className="img-acerca-de" />
        <div className="container-parrafos">
          <p className="parrafo-acerca-de">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum labore delectus architecto optio maiores. Minus consequuntur, reiciendis necessitatibus soluta tempora laboriosam voluptatum, fuga, nisi magni praesentium ipsam id iste quos non atque rem sed unde.
          </p>
          <p className="parrafo-acerca-de">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore est ea, aut vitae sed ipsum error illo suscipit, ratione dolorem eaque sapiente mollitia vel consectetur labore doloribus nemo dolorum tempore nulla rem amet iusto cupiditate!
          </p>
        </div>
      </div>
      <Link className="btnFooter" to="/">
        Ir a inicio
      </Link>
    </div>
  );
};

export default TerminosYCondiciones;