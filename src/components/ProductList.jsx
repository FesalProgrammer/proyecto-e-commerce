import React, { useContext } from "react";
import Productos from "./Productos";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const {
    productos = [],
    busqueda = "",
    setBusqueda,
  } = useContext(CartContext);

  // Filtrar productos según la búsqueda (id, nombre, categoría)

  const productosFiltrados = productos.filter((producto) => {
    const search = busqueda.toLowerCase();
    return (
      producto.id.toString().includes(search) ||
      producto.nombre?.toLowerCase().includes(search) ||
      producto.categoria?.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          marginTop: "25px",
          color: "var(--color-titulo)",
        }}
      >
        Videojuegos disponibles
        <span role="img" aria-label="videojuegos"> 🎮</span>
      </h2>

      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          marginBottom: "35px",
          border:"none",
          borderRadius: "15px",
          padding: "8px",
          backgroundColor: "#f0f0f0",
          color: "#333",
          fontWeight: "bold",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          columnGap: "30px",
          rowGap: "25px",
        }}
      >
        {productosFiltrados.map((producto) => (
          <Productos key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
