import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import "./cartItem.css"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div className='itemsCarrito'>
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: $ {item.precio}</p>
        <button className="botonEliminar" onClick={()=>eliminarProducto(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem