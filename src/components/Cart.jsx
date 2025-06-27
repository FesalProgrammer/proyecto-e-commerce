import React, { useContext } from 'react'
import './styleCart.css'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cart, handleDeleteFromCart, clearCart, isCartOpen, setCartOpen } = useContext(CartContext)

    const handleCheckout = () => {
        clearCart()
        
    }
        
    return (
        <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
                <button onClick={()=> setCartOpen(false)} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {cart.length === 0 ? (<p style={{ color: '#FF5A2C' }}>El carrito esta vacío</p>) : (<><ul className='cart-item'>
                    {cart.map((item, index) => (
                        <>
                            <li key={item.id} style={{ color: 'black', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                             <img src={item.imagen} style={{ height: '30px', width:'30px', marginRight:'50px' }} /> {item.nombre} - ${item.precio} - cant: {item.cantidad}
                                <button onClick={() => handleDeleteFromCart(item)}><i className="fa-solid fa-trash"></i></button>
                            </li>
                        </>
                    ))}
                </ul>
                    <div className='cart-footer'>
                        <p style={{ color: 'black', fontWeight:'bold' }}>Total: ${cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)}</p>
                        <button className='btnCheckout' onClick={handleCheckout}>
                                Finalizar Compra
                        </button>
                    </div>
                </>)}

            </div>

        </div>
    )
}

export default Cart
