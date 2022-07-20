import { useState, useEffect } from "react";
import { Loader } from '../../shared/Loader/Loader';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';


export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { category } = useParams();

    const getItems = () => {
        const db = getFirestore();

        const productCollection = collection(db, 'products');
        if (!category) {

            getDocs(productCollection).then(snapshot => {
                if (snapshot.size === 0) {
                    console.log('No results');
                }
                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                setIsLoaded(true);
            });
        } else {
            const q = query(collection(db, 'products'), where('category', '==', category ));
            getDocs(q).then(snapshot => {
                if (snapshot.size == 0) {
                    console.log('No results');
                }
                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                setIsLoaded(true);
            });

        }
    };

    useEffect(() => {
        getItems();
    }, [category]);

    return (
        <>
            {
                isLoaded ?
                    <div className="row">
                        {
                            products.map(res => {
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