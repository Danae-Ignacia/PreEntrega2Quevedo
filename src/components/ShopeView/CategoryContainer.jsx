import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemCardProduct from "./ItemCardProduct";


export default function CategoryContainer(){
    const [products, setProducts] = useState([]);

    useEffect (() =>{
        getProducts.then((data) => setProducts(data));
    }, []);

    return (
        <>
        <h3>Nuestros Productos</h3>
        <article>
            {products.map((product) => (
             <ItemCardProduct
             title={product.title}
             price={product.price}
             image={product.image}
             idProd={product.idProd}
             />
            ))}
        </article>
        </>
    )
}
