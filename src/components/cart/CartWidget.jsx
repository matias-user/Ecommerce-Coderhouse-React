
import { useState } from "react";


function CartWidget() {
    const [cartTotal] = useState(0);

    return (
        <i className="bi bi-cart3 fs-5 btn-light px-2 rounded shadow-sm">
            <p className="d-inline ps-2 fs-6" >
                {cartTotal}
            </p>
        </i>
    )
}

export default CartWidget;