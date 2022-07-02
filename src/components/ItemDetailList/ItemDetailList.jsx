import { useState, useEffect } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from '../../shared/Loader/Loader';
import './ItemDetail.css'

export const ItemDetailList = () => {
    const [resultApi, setResultApi] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getItems = () => {
        fetch('https://fakestoreapi.com/products')
            .then(resp => resp.json())
            .then(res => {
                setResultApi(res);
                setIsLoaded(true);
            });
    };

    useEffect(() => {
        getItems();


    }, []);

    // se recibe valor del boton add cart 

    const onAdd = (counter) => {

        // Si el valor es 0 salir.
        if (counter !== 0) {
            alert(`El valor es: ${counter}`);
        }

    };

    return (
        <>
            {
                !isLoaded &&
                <Loader title="Loading Productos..." />

            }
            {
                resultApi.map(res => {
                    return (


                        <div className="col-md-4 my-2">

                            <ItemDetail image={res.image}
                                price={res.price}
                                title={res.title}
                                id={res.id}
                            />
                            <ItemCounter
                                stock={res.count}
                                initial={0}
                                onAdd={onAdd}
                            />

                        </div>


                    )
                })

            }
        </>
    )
}
