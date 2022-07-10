import ItemCounter from '../ItemCounter/ItemCounter';
import { Loader } from '../../shared/Loader/Loader';
import './ItemDetail.css';
import { useState } from 'react';

export const ItemDetail = ({ detail, isLoaded }) => {

  const [ counter, setCounter ] = useState(0);
  const { image, title, price, id, description, rating } = detail;

  const onAdd = ( addOrSubstract,quantityToAdd )=> {
    if( addOrSubstract ){
      setCounter( count => count +1 );
    }else{
      setCounter( count => count -1 );
    }
  };

  return (
    <>

      {
        !isLoaded &&
        <Loader />
      }

      {
        isLoaded &&
        <article role='section' 
                  className='card' >
          <img className='card-img-top' 
                src={image} />
          <section className='card-body' >
            <h1 className='card-title' >{title}</h1>
            <p className='card-text' >{description}</p>
          </section>
          <footer className='card-footer' >
            <p className='fs-1 fw-bold' >$ {price}</p>
            <ItemCounter stock={rating.count} onAdd={ onAdd } count={counter} />
          </footer>
        </article>
      }
    </>
  )
}
