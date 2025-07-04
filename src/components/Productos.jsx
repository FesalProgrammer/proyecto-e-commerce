import React , {useState, useContext}from 'react'
import './styleProductos.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
const Productos = ({producto}) => {

  const {handleAddToCart} = useContext(CartContext)
  const [cantidad, setCantidad] = useState(producto.cantidad);
  
  

  const increase = () => {
    if (cantidad + producto.cantidad <= producto.stock) {
      setCantidad(prev => prev + 1);
    }
  };

  const decrease = () => {
    setCantidad(prev => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <section className='card'>
      <div className='imagenContainer'>
        <img src={producto.imagen}alt="" className='imagen'/>
      </div>

      <h3 className='nombre'>{producto.nombre}</h3>
      <p className='precio'>${producto.precio}</p>
      <p className='stock'>{producto.stock}</p>

      <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase}>+</button>
      </div>

      <button style={{border:"none", borderRadius:'10px' , backgroundColor:'var(--color-boton)',color:'white', padding:'6px 10px'}} onClick={()=> handleAddToCart({...producto, cantidad:cantidad})}>Agregar al carrito</button>

      <Link to={`/productos/${producto.id}`} 
      style={{
            display: "inline-block",
            padding: "0.3rem 1.2rem",
            background: "var(--color-boton)",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "1rem",
            marginBottom: "0.3rem",
          }}>
         Ver mas
      </Link>

    </section>
  )
}

export default Productos
