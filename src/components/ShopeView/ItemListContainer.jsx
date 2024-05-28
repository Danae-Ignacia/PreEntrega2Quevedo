import "./ItemListContainer.css";
import { getProducts} from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemCardProduct from "./ItemCardProduct";



export default function ItemListContainer(){ 
    const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>

    <section className="d-flex">
        <div className="container">
      <h1 className="mt-3 mb-5">Productos Destacados</h1>
      <div className="row justify-content-center">
      <div className="col-6 col-md-4">
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
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
