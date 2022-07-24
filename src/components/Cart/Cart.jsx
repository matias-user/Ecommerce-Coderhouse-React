import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';
import { Form } from "../../shared/Form/Form";

export const Cart = () => {
  const { itemsInCart, removeItemById, total, user } = useContext(CartContext);

  const buyProducts = () => {
    const { name, phone, email } = user;
    if( name == '' || phone == '' || email == ''){
      return;
    }
    console.log('Comprando');
  };

  return (
    <section >
      {
        <Form />
      }
      <article className="card m-auto mt-1" >
        {
          itemsInCart.length > 0 ?
            <ul className="list-group list-group-flush" >
              {
                itemsInCart.map(product => {
                  return (
                    <>
                      <li className="list-group-item " >
                        <div>
                          <p>Product:</p>
                          <h2 className="" >{product.item.title}</h2>

                        </div>
                      </li>
                      <li className="list-group-item d-flex gap-5 align-items-center" >

                        <img
                          className="img-thumbnai image"
                          src={product.item.image}
                          alt={product.item.title} />
                        <div>
                          <p>Amount:</p>
                          <h3>{product.quantity}</h3>
                        </div>
                        <i
                          className="bi bi-x-circle text-danger "
                          onClick={() => removeItemById(product.item.id)}
                        >
                        </i>
                      </li>
                    </>
                  )
                })
              }
            </ul>
            :
            <h3 className="text-primary p-5" >isn't items in cart</h3>
        }
        <div className="card-footer d-flex justify-content-around">
          <h3>
            Total: {total}
          </h3>
          <button
            onClick={ buyProducts }
            className="btn btn-secondary"
          >
            <i className="bi bi-bag me-2"></i>
            Buy now
          </button>
        </div>
      </article>

      <Link to='/' >
        <button className="btn btn-secondary float-end mt-3" >Back to home</button>
      </Link>


    </section>
  )
}
