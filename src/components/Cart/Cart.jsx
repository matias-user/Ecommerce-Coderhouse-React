import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import { Form } from "../../shared/Form/Form";
import { Toast } from 'bootstrap';
import { collection, getFirestore, addDoc, doc, getDocs, updateDoc, query, where } from 'firebase/firestore';


const isNotEmpty = (user) => {
  const { name, phone, email } = user;
  if (name == '' || phone == '' || email == '') {
    const toast = new Toast(document.getElementById('toast'));
    toast.show();
    return false;
  }
  return true;

};


export const Cart = () => {
  const { itemsInCart, removeItemById, total, user, addOrder, removeAll } = useContext(CartContext);
  let navigate = useNavigate();
  const db = getFirestore();

  const updateStock = () => {
    const productCollection = collection(db, "products");

    itemsInCart.map(prod => {
      const q = query(productCollection, where('id', '==', prod.item.id));

      getDocs(q).then(data => {
        data.forEach(product => {
          const productDoc = doc(db, "products", product.id)
          updateDoc(productDoc, { count: (Number(product.data().count) - Number(prod.quantity)) });
        });
      })
    })
  };

  const buyProducts = () => {
    if (!isNotEmpty(user)) return;
    const order = {
      buyer: user,
      items: itemsInCart,
      total,
      date: new Date()
    };

    try {
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order);
      addOrder();
      removeAll();
      updateStock();
      navigate('/order');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="d-md-flex" >
      {
        <div>
          <Form />
          <Link to='/' >
            <button className="btn btn-secondary mt-3" >Back to home</button>
          </Link>
        </div>

      }
      <article className="card m-auto mt-1" >
        {
          itemsInCart.length > 0 ?
            <ul className="list-group list-group-flush" >
              {
                itemsInCart.map((product) => {
                  return (
                    <>
                      <li className="list-group-item " >
                        <div>
                          <p>Product:</p>
                          <h2>{product.item.title}</h2>

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
            <h3 className="text-secondary p-5 fw-bold" >Cart empty</h3>
        }
        <div className="card-footer d-flex justify-content-between">
          <h3>
            Total: {total}
          </h3>
          <button
            onClick={buyProducts}
            className="btn btn-secondary">
            <i className="bi bi-bag me-2"></i>
            Buy now
          </button>
        </div>

      </article>
      <div className="toast position-fixed bottom-0 end-0" id="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="alert alert-danger" role="alert">
          Please fill you contact information
        </div>
      </div>
    </section>
  )
}
