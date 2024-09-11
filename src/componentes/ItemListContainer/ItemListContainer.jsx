import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategorias } from "../../asynmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams()

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        
    }, [idCategoria])

    return (
        <>
            <h2 style={{ textAlign: "center", marginTop:"20px", fontSize:"30px" }}>Fragancias Importadas</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer