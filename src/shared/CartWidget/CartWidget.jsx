import './CartWidget.css';
import { useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';
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
            {
                quantity !== 0 ?
                <i className="bi bi-cart3 fs-4 btn-light px-2 rounded shadow-sm cart me-1">
                    <div role='section'
                        className='cart__circle d-inline shadow bg-secondary' >
                        <p className="fs-5 text-white" >
                            {quantity}
                        </p>

                    </div>
                </i>
                :
                <span></span>
            }
        </>

    )
}

export default CartWidget;