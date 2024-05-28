import { Link } from 'react-router-dom';
export default function ItemCardProduct({ image, title, price, idProd }) {
  return (
    <>
      <div className="card">
        <img className='w-auto card-img-top' src={image} alt={title} />

        <div className="card-body">
        <h4>{title}</h4>
        <p>Precio $ {price}</p>
        <button>
        <Link to={`/product/${idProd}`}>Ver detalles</Link>
        </button>
        </div>

      </div>
    </>
  );
}
