import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Order = () => {
    const { order } = useContext(CartContext);

    return (
        <section className="card m-auto mt-5" >
            <div className="card-body">
            <p>
                Thanks for buy with us, your order is:
                <b>{order}</b>

            </p>

            </div>
        </section>
    )
}
