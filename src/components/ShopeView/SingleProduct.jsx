
import { useEffect, useState } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
    const [product, setProduct] = useState({});
    const { prodId } = useParams();
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setProduct(getProduct(prodId));
    }, []);
  
    return (
      <>
      <div className="container">
        <div className="row align-items-center justify-content-center">
        <div className="col-6">
        <h1 className="mt-3">{product.title}</h1>
        <img src={product.image} className="img-fluid w-auto" alt={product.title} />
        </div>
        <div className="col-6">
        <p>ID: {prodId}</p>
        <p>Descripcion: {product.description}</p>
        <p>Categoria: {product.category}</p>
        <p>Precio:{product.price}</p>
        <div className="d-flex justify-center gap-4 p-4 pt-0">
            <div className="flex gap-4">
              <button onClick={() => {count > 0 && setCount(count -1);}} className="btn btn-outline btn-sm">-</button>
              <p>{count}</p>
              <button onClick={() => {count < product.stock && setCount(count +1)}} className="btn btn-outline btn-sm">+</button>
            </div>
          </div>
        </div>
        </div>

</div>

      </>
    );
  }
  