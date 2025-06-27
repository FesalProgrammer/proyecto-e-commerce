import React, { useState } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import "../components/styleContactoLogin.css";
import Swal from "sweetalert2";

export default function Contactos() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    Swal.fire({
      title: "Envío exitoso",
      text: `Formulario enviado por: ${nombre + " " + apellido}`,
      icon: "success",
    });
    setNombre("");
    setApellido("");
    setEmail("");
  }

  return (
    <>
      <Header />
      <div className="container-contacto">
        <form className="formArea" onSubmit={manejarEnvio}>
          <h2 className="tituloContacto">Contacto</h2>
          <div>
            <input
              className="campo"
              type="text"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="campo"
              type="text"
              placeholder="Ingresa tu apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="campo"
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            className="txtarea"
            name="message"
            cols="30"
            rows="5"
            placeholder="Escribe tu mensaje aqui:"
          ></textarea>
          <div>
            <button type="submit" className="btnEnviar">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
