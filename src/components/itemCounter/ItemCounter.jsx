import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

function ItemCounter({ stock, count, onAdd }) {
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
        console.log(count);
    }, [count])


    return (
        < div className="animation-item" >
            <div className="input-group mb-1 ">
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="btn-substraction"
                    disabled={disabledLess}
                    onClick={() => onAdd(false, count)}
                >
                    -
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
                    onClick={() => onAdd(true,count)}
                >
                    +
                </button>

            </div>
            <NavLink to={'/cart'} >
                <button className="btn btn-primary w-100 mb-5">
                    Buy now
                </button>
            </NavLink>
        </ div>
    )



};

export default ItemCounter;