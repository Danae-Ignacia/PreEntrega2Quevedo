import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { getProduct} from "../../asyncMock";
import ItemCardProduct from "../ProductsView/ItemCardProduct";



export default function ItemListContainer(){ 
    const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>Productos Destacados</h1>
      <article>
        {products.map((product) => (
          <ItemCardProduct
            key={product.id}
            idProd={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </article>
    </>
  );
}
