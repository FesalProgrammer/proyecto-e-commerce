import React, { useContext } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading.gif";
import { CartContext } from "../context/CartContext";
import bgInicio from "../assets/bg7.jpg";


const Home = () => {
  const { cargando } = useContext(CartContext);

  return (
    <>
      <Header />
      <main className="main-container">
        <img src={bgInicio} alt="foto" className="img-ppal" />
        <div className="contenedor-texto">
          <h1 className="tituloPpal">Tus videojuegos online</h1>
          <h1 className="tituloPpal">
            compralos aqui{" "}
            <span className="imgSpam" role="img" aria-label="videojuegos">
              {" "}
              🎮
            </span>
          </h1>
        </div>
        {cargando ? <img src={loading} alt="loading" /> : <ProductList />}
      </main>
      <Footer />
    </>
  );
};

export default Home;
