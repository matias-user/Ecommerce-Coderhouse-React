import './CartWidget.css';

import { useState } from "react";


function CartWidget() {
    const [cartTotal] = useState(0);

    return (
        <i className="bi bi-cart3 fs-4 btn-light px-2 rounded shadow-sm cart me-1">
            <div role='section' className='cart__circle d-inline shadow bg-secondary' >
                <p className="fs-5 text-white" >
                    {cartTotal}
                </p>

            </div>
        </i>
    )
}

export default CartWidget;