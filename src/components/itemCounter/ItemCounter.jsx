import { useEffect } from "react";
import { useState } from "react";

function ItemCounter({ stock, initial, onAdd }) {
    const [counter, setCounter] = useState(initial);
    const [counterStock, setCounterStock] = useState(stock);
    const [disabledPlus, setDisabledPlus] = useState(false);
    const [disabledLess, setdisabledLess] = useState(true);

    useEffect(() => {
        
        //  Desbloquear el boton segun el caso.
        if (counter >= counterStock) {
            setDisabledPlus(true);
        } else if (counter < 0) {
            setdisabledLess(true);
            setCounter( counter => counter +1 )
        }
        if( counter < counterStock  ){
            setDisabledPlus(false);
        }
        if( counter > 0 ){
            
            setdisabledLess(false);
        }
    },[counter])

    const addStock = () => {
            
        setCounter((counter) => counter + 1);
        
    };
    const sustractStock = () => {
        setCounter((counter) => counter - 1);

    };

    return (
        < div>
            <div className="input-group mb-1">
                <button
                    className="btn btn-outline-dark"
                    type="button"
                    id="btn-substraction"
                    disabled={disabledLess}
                    onClick={() => sustractStock()}
                >
                    -
                </button>

                <input type="number"
                    className="form-control text-center"
                    aria-label="Example text with button addon"
                    value={counter}
                >

                </input>

                <button
                    className="btn btn-outline-dark"
                    type="button"
                    id="btn-addition"
                    disabled={disabledPlus}
                    onClick={() => addStock()}
                >
                    +
                </button>

            </div>
            <button className="btn btn-dark w-100 mb-5"
                onClick={() => onAdd(counter)} >Add cart</button>
        </ div>
    )



};

export default ItemCounter;