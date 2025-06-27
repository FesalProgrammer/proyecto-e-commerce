import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Footer from "../components/estaticos/Footer";
import { useAuth } from "../context/AuthContext";
import "../components/styleContactoLogin.css";

const Login = () => {
  const { email, setEmail, password, setPassword, handleSubmit, errors } =
    useAuth();

  return (
    <div className="container-login">
      <form className="formArea" onSubmit={handleSubmit}>
        <h2 className="tituloContacto">Login</h2>
        <div>
          <input
            className="campo"
            id="formBasicEmail"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div
              style={{
                color: "red",
                fontSize: "0.875rem",
              }}
            >
              {errors.email}
            </div>
          )}
        </div>
        <div>
          <input
            className="campo"
            id="formBasicPassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div
              style={{
                color: "red",
                fontSize: "0.875rem",
              }}
            >
              {errors.password}
            </div>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="btnEnviar"
            style={{
              marginTop: "0.2rem",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
