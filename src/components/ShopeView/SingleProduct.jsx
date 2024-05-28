
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
        <h1>Single Prod</h1>
        <p>ID: {prodId}</p>
        <h3>Nombre: {product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>Descripcion: {product.description}</p>
        <p>Categoria: {product.category}</p>
        <p>Precio:{product.price}</p>

        <div className=" flex justify-center gap-4 p-4 pt-0">
            <div className="flex gap-4">
              <button onClick={() => {count > 0 && setcount(count -1);}} className="btn btn-outline btn-sm">-</button>
              <p>{count}</p>
              <button onClick={() => {count < products.stock && setcount(count +1)}} className="btn btn-outline btn-sm">+</button>
            </div>
            <ButtonComponent title={"Comprar"} />
          </div>
      </>
    );
  }
  