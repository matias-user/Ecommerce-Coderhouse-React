import { createContext, useState } from 'react';

export const CartContext = createContext();
const items = [];

const checkDuplicate = ( { id } ) => {
    let help = true;
    if( items.length > 0 ){        
        items.forEach( item => {
            if( item.item.id == id ) help = false;
            
        } );
    }
    return help;
};

export const CartProvider = ({ children }) => {
    const [itemsInCart, setItemInCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item, quantity) => {
            if( quantity == 0 ) return;
            if( checkDuplicate( item ) ){
                items.push( {item, quantity} );
                setItemInCart(items);
                setTotal( total + (Number(item.price) * quantity ) );
            }
    };
    const removeItemById = (id) => {
        const newItems = items.filter( val => val.item.id !== id );
        setItemInCart(newItems);
    };
    
    const removeAll = () => {
        setItemInCart([]);
    };
    
    const isInCart = ( id ) => {
        return items.find( item => item.id === id );
    };
    
      return (
      <CartContext.Provider 
            value={{ itemsInCart, addItem, removeItemById, removeAll, isInCart, total }} >
          { children }
      </CartContext.Provider>
    )
  }
  


