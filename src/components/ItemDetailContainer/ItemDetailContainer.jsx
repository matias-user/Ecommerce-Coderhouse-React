import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import { useState } from 'react';
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailListContainer = () => {
    const { id } = useParams();
    const [resultItem, setResultItem] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const getItem = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {

                setResultItem(data);
                setIsLoaded(true);
            });
    };

    useEffect(() => {
        getItem();
    }, [id]);
    
    return (
        <ItemDetail detail={ resultItem } isLoaded={ isLoaded } />    
    )
};
