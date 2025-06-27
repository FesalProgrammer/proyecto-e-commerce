import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import "../components/styleAcercaDe.css";
import bgInicio from "../assets/bg10.jpg";

const AcercaDe = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className="titulo-acercaDe">Nosotros</h1>
        <div className="container-acerca-de">
          <img src={bgInicio} alt="foto" className="img-acerca-de" />
          <div className="container-parrafos">
            <p className="parrafo-acerca-de">
              Bienvenido a nuestra tienda de video juegos, donde la pasión por
              los videojuegos se encuentra con la excelencia en el servicio al
              cliente. Somos un equipo de entusiastas dedicados a ofrecerte una
              experiencia de compra única y emocionante.
            </p>
            <p className="parrafo-acerca-de">
              En nuestra tienda, encontrarás una amplia selección de los últimos
              lanzamientos, clásicos atemporales y accesorios imprescindibles
              para mejorar tu experiencia de juego. Nos enorgullece ofrecer
              productos de alta calidad y garantizar que cada cliente encuentre
              lo que busca.
            </p>
            <p className="parrafo-acerca-de">
              Nuestro compromiso es brindarte un servicio excepcional, desde el
              momento en que ingresas a nuestra tienda hasta que sales con tu
              compra. Estamos aquí para responder tus preguntas, ofrecerte
              recomendaciones personalizadas y asegurarnos de que disfrutes al
              máximo de tu experiencia de compra.
            </p>
            <p className="parrafo-acerca-de">
              Gracias por elegirnos como tu destino para todo lo relacionado con
              los videojuegos. ¡Esperamos verte pronto!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AcercaDe;
