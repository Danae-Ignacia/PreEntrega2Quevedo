import { useEffect, useState } from "react";
import { getCategory } from "../../asyncMock";
import ItemCardProduct from "./ItemCardProduct";
import { useParams } from "react-router-dom";

export default function CategoryContainer() {
  const [products, setProducts] = useState([]);

const {category} = useParams()

  useEffect(() => {
    getCategory(category).then((data) => {
      setProducts(data);
    });
  }, [category]);

  return (
    <>
      <section className="">
        <div className="container-fluid">
          <h1 className="mt-3 mb-5 text-center">{category}</h1>
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
                  stock={product}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
