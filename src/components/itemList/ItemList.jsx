import { useState, useEffect } from "react";
import { Loader } from '../../shared/Loader/Loader';
import { Item } from "../Item/Item";
import { useParams } from "react-router-dom";


export const ItemList = () => {
    const [resultApi, setResultApi] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { category } = useParams();

    const getItems = () => {
        if( !category ){

            fetch('https://fakestoreapi.com/products')
                .then(resp => resp.json())
                .then(res => {
                    setResultApi(res);
                    setIsLoaded(true);
                });
        }else{

            fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(resp => resp.json())
            .then(res => {
                setResultApi(res);
                setIsLoaded(true);
            });
        }
    };

    useEffect(() => {
        getItems();
        console.log(category);
    }, [category]);

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
                <Loader title="Loading Products..." />

            }
            <div className="row">
                {
                    resultApi.map(res => {
                        return (


                            <div className="col-md-3 my-2">

                                <Item image={res.image}
                                    price={res.price}
                                    title={res.title}
                                    id={res.id}

                                />
                            </div>
                        )
                    })

                }
            </div>

        </>
    );

};