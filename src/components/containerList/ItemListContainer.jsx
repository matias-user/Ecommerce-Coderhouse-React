import { useEffect, useState } from "react";
import ItemCounter from "../itemCounter/ItemCounter";
import { ItemList } from "../itemList/ItemList";


function ItemListContainer() {
    const [resultApi, setResultApi] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(resp => resp.json())
            .then(res => {
                console.log(res);
                setResultApi(res);
                setIsLoading(true);
            })

    }, []);
    const onAdd = (counter) => {

        // Si el valor es 0 salir.
        if (counter !== 0) {
            alert(`El valor es: ${counter}`);
        }

    };

    return (
        <main className="text-dark py-5 mt-5 mx-4 row" >
            {
                !isLoading && 
                <div className="d-flex">
                    <h1 className="m-auto">Loading Products...</h1>

                </div>
            }
            {
               isLoading &&
                resultApi.map(res => {
                    return (
                        <div className="col-md-4 my-2">
                            <ItemList img={res.image}
                                price={res.price}
                                title={res.title}
                                id={res.id}
                                isLoading={isLoading} />
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

export default ItemListContainer;