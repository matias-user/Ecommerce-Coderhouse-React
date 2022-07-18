import { useState, useEffect } from "react";
import { Loader } from '../../shared/Loader/Loader';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from 'firebase/firestore';


export const ItemListContainer = () => {
    const [resultApi, setResultApi] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { category } = useParams();

    const getItems = () => {
        const db = getFirestore();

        const productCollection = collection( db, 'products' );

        getDocs( productCollection ).then( snapshot => {
            if( snapshot.size === 0 ){
                console.log('No results');
            }
            setProducts( snapshot.docs.map( doc => ( { id: doc.id, ...doc.data() } ) ) )
        } );

        if (!category) {

            fetch('https://fakestoreapi.com/products')
                .then(resp => resp.json())
                .then(res => {
                    setResultApi(res);
                    setIsLoaded(true);
                });
        } else {

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
        console.log(products);

    }, [category]);

    return (
        <>
            {
                isLoaded ?
                    <div className="row">
                        {
                            resultApi.map(res => {
                                return (
                                    <div className="col-md-3 my-2">
                                        <ItemList image={res.image}
                                            price={res.price}
                                            title={res.title}
                                            id={res.id}

                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <Loader title="Loading Products..." />
            }
        </>
    );

};