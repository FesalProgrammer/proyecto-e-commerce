import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import loadingGif from "../assets/loading.gif";
import "../components/styleAdmin.css";
import Swal from "sweetalert2";

const Admin = () => {
  const { setIsAuth } = useContext(CartContext);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);
  const [openEditor, setOpenEditor] = useState(false);
  const apiUrl =
    "https://684c76faed2578be881ee316.mockapi.io/e-commerce-fesal/productos";

  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const cargarProductos = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.log("Error al cargar productos ", error);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch(
        "https://684c76faed2578be881ee316.mockapi.io/e-commerce-fesal/productos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        }
      );
      if (!respuesta.ok) {
        throw new Error("Error al agregar producto");
      }
      const data = await respuesta.json();
      Swal.fire({
        title: "Producto agregado",
        text: `El producto ${data.nombre} ha sido agregado exitosamente.`,
        icon: "success",
      });
      cargarProductos();
      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const actulizarProducto = async (producto) => {
    try {
      const respuesta = await fetch(`${apiUrl}/${producto.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok) throw Error("Error al actualizar el producto");
      const data = await respuesta.json();
      Swal.fire({
        title: "Producto actualizado",
        text: `El producto ${data.nombre} ha sido actualizado exitosamente.`,
        icon: "success",
      });
      setOpenEditor(false);
      setSeleccionado(null);
      cargarProductos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("Estas seguro de eliminar el producto?");
    if (confirmar) {
      try {
        const respuesta = await fetch(
          `https://684c76faed2578be881ee316.mockapi.io/e-commerce-fesal/productos/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!respuesta.ok) throw Error("Error al eliminar");
        Swal.fire({
          title: "Producto eliminado",
          text: "Producto eliminado correctamente",
          icon: "success",
        });
        cargarProductos();
      } catch (error) {
        Swal.fire({
          title: "Error al eliminar",
          text: "Hubo un problema al eliminar el producto",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="containerAdmin">
      {loading ? (
        <img src={loadingGif} alt="loadingGif" />
      ) : (
        <>
          <nav>
            <ul className="nav">
              <li className="navItem">
                <button
                  className="navButton"
                  onClick={() => {
                    setIsAuth(false);
                    navigate("/");
                    localStorage.removeItem("isAuth");
                  }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </li>
              <li className="navItem">
                <a href="/admin">Admin</a>
              </li>
            </ul>
          </nav>
          <h1 className="title">Panel Administrativo</h1>

          <ul className="list">
            {productos.map((product) => (
              <li key={product.id} className="listItem">
                <img
                  className="listItemImage"
                  src={product.imagen}
                  alt={product.nombre}
                />
                <span>{product.nombre}</span>
                <span>${product.precio}</span>
                <div>
                  <button
                    className="editButton"
                    onClick={() => {
                      setOpenEditor(true);
                      setSeleccionado(product);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="deleteButton"
                    onClick={() => eliminarProducto(product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <button className="addButton" onClick={() => setOpen(true)}>
        Agregar producto nuevo
      </button>
      {open && <FormularioProducto onAgregar={agregarProducto} />}
      {openEditor && (
        <FormularioEdicion
          productoSeleccionado={seleccionado}
          onActualizar={actulizarProducto}
        />
      )}
    </div>
  );
};

export default Admin;
