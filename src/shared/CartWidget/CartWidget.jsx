import './CartWidget.css';
import { useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


function CartWidget() {
    const { itemsInCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState();

    // UseEfect no me detecta cambios si no pongo el .length
    useEffect(() => {
        setQuantity(itemsInCart.length);
    }, [itemsInCart.length]);

    return (
        <>

            <Link to='/cart' >
                <i className="bi bi-cart3 fs-4 px-3 py-1  rounded text-secondary shadow cart me-1 animation-item">
                    {
                        quantity !== 0 ?
                            <div role='quantity cart'
                                className='cart__circle d-inline shadow bg-secondary' >
                                <p className="fs-5 text-white" >
                                    {quantity}
                                </p>

                            </div>
                            :
                            null
                    }
                </i>
            </Link>
        </>

    )
}

export default CartWidget;