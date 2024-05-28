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
    
        {products.map((product) => (
              <div className="col-3 col-md-3">
          <ItemCardProduct
            key={product.id}
            idProd={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
          />
              </div>
        ))}
  
      </div>
      </div>
      </section>
    </>
  );
}
