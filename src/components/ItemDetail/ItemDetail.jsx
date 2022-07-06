import { useEffect } from 'react'
import { Loader } from '../../shared/Loader/Loader';
import './ItemDetail.css'


export const ItemDetail = ({ detail, isLoaded }) => {

  const { image, title, price, id, description, category } = detail;
  useEffect(() => console.log(detail))

  return (
    <>

      {
        !isLoaded &&
        <Loader />
      }

      {
        isLoaded &&
        <article role='section' 
                  className='m-auto card-item animation-item rounded' >
          <img className='card-item__img rounded ' 
                src={image} />
          <section className='card-item__texts d-flex flex-column' >
            <h1 className='display-6 fw-bold card-item__title  pt-3' >{title}</h1>
            <p className='mt-auto' >{description}</p>
            <hr />
            <p className='fs-1 fw-bold ms-auto mt-auto' >{price}</p>
          </section>
        </article>
      }
    </>





  )
}
