
import "./ItemDetail.css"
import Contador from "../Contador/Contador"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify';


const ItemDetail = ({id, nombre, precio, img, detalle, stock}) => {


const [agregarCantidad, setAgregarCantidad] = useState(0)

const {agregarAlCarrito} = useContext(CarritoContext)


const manejadorCantidad = (cantidad) => {
  setAgregarCantidad(cantidad);
  

  const item = {id, nombre, precio}
  agregarAlCarrito (item, cantidad)
  toast.success("Su Producto fue agregado al carrito",{autoClose: 2000, theme: "light", position: "top-right"})


}



  return (
    <div className='contenedorItem'>

      <div >
      <img src={img} alt={nombre} />
      </div>
      <div>
        <h3>Nombre: {nombre} </h3>
        <h6>Precio {precio} </h6>
        <p>ID: {id}</p>
       
        <p>{detalle}</p>


        
        {
         
          agregarCantidad > 0 ? (<Link to="/cart"> Finalizar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
       

       <br></br> <Link to="/"> Seguir Comprando</Link>
       </div>
    </div>
  )
}

export default ItemDetail


