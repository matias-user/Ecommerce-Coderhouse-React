import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
  const { itemsInCart, removeItemById, total } = useContext(CartContext);

  return (
    <>
      <article className="card m-auto mt-5" >
        {
          itemsInCart.length > 0 ?
            <ul className="list-group list-group-flush" >
              {
                itemsInCart.map(product => {
                  return (
                    <li className="list-group-item d-flex g-2 align-items-center justify-content-between" >
                      <h2 className="fs-6 w-50" >{product.item.title}</h2>
                      <img
                        className="img-thumbnai image"
                        src={product.item.image}
                        alt={product.item.title} />
                      <span  onClick={() => removeItemById(product.item.id)} >
                        <i
                          className="bi bi-x-circle text-danger"
                          >
                        </i>

                      </span>
                    </li>
                  )
                })
              }
            </ul>
            :
            <h3 className="text-primary p-5" >isn't items in cart</h3>
        }
        <div className="card-footer">
            <h3>
              Total: { total }
            </h3>
        </div>
      </article>

      <Link to='/' >
        <button className="btn btn-secondary float-end mt-3" >Back to home</button>
      </Link>
    </>
  )
}
