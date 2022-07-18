import ItemCounter from '../ItemCounter/ItemCounter';
import { Loader } from '../../shared/Loader/Loader';
import './ItemDetail.css';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({ detail, isLoaded }) => {

  const { image, title, price, count } = detail[0];
  const [ counter, setCounter ] = useState(0);
  const { addItem } = useContext(CartContext);

  // const changeCount = ( addOrSubstract )=> {
  //   if( addOrSubstract ){
  //     setCounter( count => count +1 );
  //   }else{
  //     setCounter( count => count -1 );
  //   }
  // };
  // const onAdd = (quantityToAdd)=>{
  //   addItem( detail, quantityToAdd );
  // };


  return (
    <>

      {
        // isLoaded ? 
        <article role='section' 
                  className='card' >
          <img 
              className='card-img-top' 
              src={image} />
          
          <section className='card-body' >
            <h1 className='card-title' >{title}</h1>
            {/* <p className='card-text' >{description}</p> */}
          </section>
          
          <footer className='card-footer' >
            <p className='fs-1 fw-bold' >$ {price}</p>
            <ItemCounter 
                    // stock={count} 
                    // changeCount={ changeCount } 
                    // count={counter}
                    // onAdd={ onAdd } 
                    />
          </footer>

        </article>
        // :
        // <Loader />
      }

     
    </>
  )
}
