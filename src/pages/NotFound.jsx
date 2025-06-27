import React from "react";
import { Link } from "react-router-dom";
import "../components/styleNotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container-ppal">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Ups... Producto no encontrado </p>
        <p className="notfound-text">
          Parece que hubo un problema... aguardá unos minutos.
        </p>
      </div>
      <button className="btn-notfound">
        <Link className="link-volver" to="/">
          Volver al inicio
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
