import ItemCounter from '../ItemCounter/ItemCounter';
import { Loader } from '../../shared/Loader/Loader';
import './ItemDetail.css';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Toast } from 'bootstrap';


export const ItemDetail = ({ detail, isLoaded }) => {

  const { image, title, price, count = 1} = detail[0];
  const [counter, setCounter] = useState(0);
  const { addItem } = useContext(CartContext);

  const changeCount = (addOrSubstract) => {
    if (addOrSubstract) {
      setCounter(count => count + 1);
    } else {
      setCounter(count => count - 1);
    }
  };
  const onAdd = (quantityToAdd) => {
    addItem(detail[0], quantityToAdd);
    if( quantityToAdd > 0  ){
      const toast = new Toast(document.getElementById('liveToast'));
      toast.show();
    }

  };
  return (
    <>
      {
        isLoaded ?
          <section
            className='card m-auto' >
            <img
              className='card-img-top'
              src={image} />

            <section className='card-body' >
              <h1 className='card-title text-secondary' >{title}</h1>
              {/* <p className='card-text' >{description}</p> */}
            </section>

            <footer className='card-footer' >
              <p className='fs-1 fw-bold text-secondary' >$ {price}</p>
              <ItemCounter
                stock={count}
                changeCount={changeCount}
                count={counter}
                onAdd={onAdd}
              />
            </footer>

          </section>
          :
          <Loader />
      }
      <div className="toast-container bg-success position-fixed z-index-1031 top-0 end-0">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-body d-flex">
            
            <h4>Product add succesfully</h4> 
            <button type="button" className="btn-close btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>

    </>
  )
}
