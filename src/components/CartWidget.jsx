import { useState } from "react";


function CartWidget() {
    const [cartTotal, setCartTotal] = useState(0);

    return (
        <i className="bi bi-cart3 fs-5 btn bg-white">
            <p className="d-inline mx-1 fs-5" >
                {cartTotal}
            </p>
        </i>
    )
}

export default CartWidget;