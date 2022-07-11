import { createContext, useState } from 'react';

export const CartContext = createContext();
const items = [];

const checkDuplicate = ( { id } ) => {
    items.forEach( item => {
        if( item.id == id ) return;
    } );
};

export const CartProvider = ({ children }) => {
    const [itemInCart, setItemInCart] = useState([]);

    const addItem = (item, quantity) => {
        checkDuplicate( item );
        items.push( {item, quantity} );
        setItemInCart(items)
    };
    const removeItemById = (id) => {
        const newItems = items.filter( val => val.item.id == id );
        setItemInCart(newItems);
    }
    
    const removeAll = () => {
        setItemInCart([]);
    };
    
    const isInCart = ( id ) => {
        return items.find( item => item.id === id );
    };

    
      return (
      <CartContext.Provider 
            value={{ itemInCart, addItem, removeItemById, removeAll, isInCart }} >
          { children }
      </CartContext.Provider>
    )
  }
  


