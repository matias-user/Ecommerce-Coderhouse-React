import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


export const ItemDetailListContainer = () => {
    const { id } = useParams();
    const [resultProduct, setResultProduct] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getItem = () => {
        const db = getFirestore();

        const q = query( collection( db, 'products' ), where( 'id', '==', Number(id) ) );
        
        getDocs(q).then( snapshot => {
            if( snapshot.size == 0 ){
                console.log('No results');
            }
            setResultProduct( snapshot.docs.map( doc => ({ id: doc.id, ...doc.data() }) ) );
            setIsLoaded(true);
        } );
    };

    useEffect( () => {
        
        getItem();
    }, []);
    
    return (
        <>
            {
            isLoaded &&
                <ItemDetail detail={ resultProduct } isLoaded={ isLoaded } />    
            } 
        </>
    )
};
