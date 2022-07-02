import './ItemDetail.css'
import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import { useState } from 'react';


export const ItemDetail = () => {
  const { id } = useParams();
  const [resultItem, setResultItem] = useState({});

  const getItem = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {

        setResultItem(data);
      });
  };

  useEffect(() => {
    getItem();
  }, [id]);
  return (

    <article role='section' className='m-auto card-item' >
      <img className='card-item__img' src={resultItem.image} alt={`product ${resultItem.name}`} />
      <h1 className='fs-3 fw-bold card-item__title text-decoration-underline pt-5 text-center' >{resultItem.title}</h1>


    </article>

  )
}
