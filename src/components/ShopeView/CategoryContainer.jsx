import { useEffect, useState } from "react";
import { getCategory } from "../../asyncMock";
import ItemCardProduct from "./ItemCardProduct";

export default function CategoryContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategory(category).then((data) => {
      setProducts(data);
    });
  }, [category]);

  return (
    <>
      <h3>Nuestros Productos</h3>
      <section>
        {products.map((product) => (
          <ItemCardProduct
            title={product.title}
            price={product.price}
            image={product.image}
            idProd={product.idProd}
          />
        ))}
      </section>
    </>
  );
}
