import { useEffect } from "react";
import { useState } from "react";

function ItemCounter({ stock, count, changeCount, onAdd }) {
    const [disabledPlus, setDisabledPlus] = useState(false);
    const [disabledLess, setDisabledLess] = useState(true);
    
    const checkStock = () =>{
        if( count <= 0 ){
            setDisabledLess(true);
        }else if( count > stock ) {
            setDisabledPlus(true);
        }else if( count > 0 && count <= stock ){
            setDisabledLess(false);
            setDisabledPlus(false);
        }
    };

    useEffect(() => {
        checkStock();
    }, [count])


    return (
        <div className="animation-item" >
            <div className="input-group mb-1 ">
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="btn-substraction"
                    disabled={disabledLess}
                    onClick={() => changeCount(false)}
                >
                   <strong>-</strong> 
                </button>

                <input type="number"
                    className="form-control text-center"
                    aria-label="Example text with button addon"
                    value={count}
                >
                </input>

                <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="btn-addition"
                    disabled={disabledPlus}
                    onClick={() => changeCount(true)}
                >
                   <strong>+</strong> 
                </button>

            </div>
                <button 
                    className="btn btn-primary w-100 mb-5"
                    onClick={ () => onAdd(count) }
                    >
                    Add to cart
                </button>
        </ div>
    )
};

export default ItemCounter;