import { useEffect, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import { ItemList } from "../ItemList/ItemList";


function Container() {
    const [resultApi, setResultApi] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(resp => resp.json())
            .then(res => {

                setResultApi(res);
                setIsLoaded(false);
            })

    }, []);

    // se recibe valor del boton add cart 
    const onAdd = (counter) => {

        // Si el valor es 0 salir.
        if (counter !== 0) {
            alert(`El valor es: ${counter}`);
        }

    };

    return (
        <main className="text-dark py-5 mt-5 mx-4 row" >
            {
                isLoaded &&
                <div className="d-flex flex-column">
                    <p className="m-auto fs-2">Loading Products...</p>
                    <div className="m-auto d-flex gap-2">
                        <div class="spinner-grow text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>

                    </div>
                </div>
            }
            {
                !isLoaded &&
                resultApi.map(res => {
                    return (
                        <div className="col-md-4 my-2">
                            <ItemList img={res.image}
                                price={res.price}
                                title={res.title}
                                id={res.id}
                                isLoading={isLoaded} />
                            <ItemCounter
                                initial={0}
                                stock={5}
                                onAdd={onAdd}
                            />
                        </div>
                    )
                })
            }

        </main>
    )
}

export default Container;