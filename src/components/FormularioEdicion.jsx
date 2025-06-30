import React, { useState, useEffect } from 'react';

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
    const [producto, setProducto] = useState(productoSeleccionado);

    useEffect(()=>{
        setProducto(productoSeleccionado)
    },[productoSeleccionado])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });

    };
    return (
        <form style={{
                borderRadius: '10px',
                backgroundColor: '#f0f0f0',
                display:'flex',
                marginTop: '6px',
                
                
              }} onSubmit={(e)=>{
            e.preventDefault()
            onActualizar(producto)
        }}>
            <h2>Editar Producto</h2>
            <div>
                <label>ID:</label>
                <input
                    type="number"
                    name="id"
                    value={producto.id || ''}
                    onChange={handleChange}
                    readOnly
                />
            </div>
            <div>
                <label style={{color:'black'}}>Nombre:</label>
                <input
                    style={{color:'black'}}
                    type="text"
                    name="nombre"
                    value={producto.nombre || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label style={{color:'black'}}>Precio:</label>
                <input
                    style={{color:'black'}}
                    type="number"
                    name="precio"
                    value={producto.precio || ''}
                    onChange={handleChange}
                    required
                    min="0"
                />
            </div>
            <div>
                <label style={{color:'black'}}>stock:</label>
                <input
                    style={{color:'black'}}
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Imagen URL:</label>
                <input
                    type="text"
                    name="imagen"
                    value={producto.imagen || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label style={{color:'black'}}>Categoria:</label>
                <input
                    style={{color:'black'}}
                    type="text"
                    name="categoria"
                    value={producto.categoria || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <button style={{color:'white', backgroundColor:'var(--color-primario-oscuro)' }} type="submit">Actualizar Producto</button>
        </form>
    );
}
export default FormularioEdicion;