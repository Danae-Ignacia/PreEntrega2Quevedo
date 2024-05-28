import { Link } from "react-router-dom";

export default function ItemCardProduct({title, price, image, idProd}){
    return (
        <>
        <div>
            <h4>{title}</h4>
            <img src="{image}" alt="{title}" />
            <p>Precio: ${price}</p>
            <button>
               <link to={`/product/${idProd}`}>Ver Producto</link>
            </button>
        </div>
        </>
    )
}