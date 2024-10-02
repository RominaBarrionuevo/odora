import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./cart.css"

const Cart = () => {
 const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

 if (cantidadTotal === 0) {
    return (
        <>
            <h2>No se agregaron productos al carrito.</h2>
            <Link to="/">Ver Productos</Link>
        </>

    )
 }

  return (
    <div className="contCarrito">
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
        }
<hr></hr>
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button className="botones"   onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout">Finalizar Compra</Link>

    </div>
  )
}

export default Cart