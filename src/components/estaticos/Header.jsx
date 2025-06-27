import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styleEstatico.css";
import Cart from "../Cart";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { CartContext } from '../../context/CartContext';

const Header = () => {
  
  const { cart } = useContext(CartContext);
  // const cartCount = cart.length; //cantidad de items en el carrito
  const cartCount = cart.reduce((total, item) => total + (item.cantidad || 1), 0);// cantidad total de productos agregados al carrito.

  const {setCartOpen} = useContext(CartContext)

  return (
    <header>
      <nav className="navbar navbar-expand-lg  " data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="foto" className="img-logo" />
            <span className="logo-text">Video<span style={{color:'var(--color-boton-oscuro)'}}>Play</span>Shop</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="link" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link" to="/acercade">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link" to="/productos">
                  Video juegos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <div style={{ position: "relative" }}>
                  <button
                  className="btnCart link"
                  onClick={() => setCartOpen(true)}
                  style={{ background: "none", border: "none" }}
                >
                  <div className="contador" style={{display: cartCount === 0 ? 'none' : 'block'}}>{cartCount}</div><FaShoppingCart color="red" />
                  </button>
                </div>
                <Cart />
              </li>
              <li className="nav-item">
                <NavLink className="link" to="/login">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link" to="/admin">
                  <i className="fa-solid fa-user-tie"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
