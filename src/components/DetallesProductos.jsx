import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./estaticos/Header";
import Footer from "./estaticos/Footer";
import { CartContext } from "../context/CartContext";
import NotFound from "../pages/NotFound";
import "./styleDetalle.css";

const DetallesProductos = () => {
  const { productos } = useContext(CartContext);
  const { id } = useParams();

  const product = productos.find((producto) => producto.id == id);

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <section
        className="section-detalles"
        style={{
          maxWidth: "500px",
          margin: "32px auto",
          padding: "2rem",
          border: "1px solid #eee",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          background: "#fff",
        }}
      >
        <h1 className="titulo-detalle" style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--color-titulo)" }}>
          {product.nombre}
        </h1>
        {product.imagen && (
          <img className="imgDetalle"
            src={product.imagen}
            alt={product.nombre}
            style={{
              width: "100%",
              maxHeight: "550px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "1.5rem",
            }}
          />
        )}
        <p className="descripcion-detalle" style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#555" }}>
          {product.descripcion}
        </p>
        <p className="precio-detalle" style={{ fontWeight: "bold", fontSize: "1.3rem", color: "var(--color-titulo)" }}>
          Precio: ${product.precio}
        </p>
        <div className="contenedor-detalle-producto" style={{ marginBottom: "1.5rem" }}>
          <h5
            className="subtitulo-detalle" style={{  color: "#333", cursor: "pointer" }}
          >
            Detalle del producto
          </h5>
          <ul className="texto-detalle" style={{paddingLeft:"0.2rem", color: "#555" }}>
            <li>Marca: Acme</li>
            <li>Categoría: {product.categoria}</li>
            <li>SKU: {product.id * 1250}</li>
            <li>
              Fecha de lanzamiento:{" "}
              {new Date().toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </li>
          </ul>
        </div>

        <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1.5rem" }}>
          Stock: {product.stock}
        </p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            background: "var(--color-titulo)",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          Ir a inicio
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default DetallesProductos;

