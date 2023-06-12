import { FaShoppingCart, FaSearch } from 'react-icons/fa';

export default function DisplayProducts({ product }){

  const { title, price, description, image } = product;

  return(
    <div className="col products">
      <div className="card individualProduct" style={{width: "18rem"}}>
        <img src={image} alt={`${title}`} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='card-text'>${price.toFixed(2)} USD</p>
          <div className='cartAndSearch'>
          <div className='btn card-link cart2'>
            <FaSearch />
          </div>
          <div className='btn card-link cart2'>
            <FaShoppingCart />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}