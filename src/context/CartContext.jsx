import { createContext, useState } from 'react';

const items = [];
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [itemInCart, setItemInCart] = useState([]);

    const addItem = (item, quantity) => {
        items.push( {item, quantity} );
        setItemInCart(items)
    }
    const removeItemById = (id) => {
        const newItems = items.filter( val => val.item.id == id );
        setItemInCart(newItems);
    }
    
    const removeAll = () => {
        setItemInCart([]);
    };
    
    
      return (
      <CartContext.Provider value={{ itemInCart, addItem, removeItemById, removeAll }} >
          { children }
      </CartContext.Provider>
    )
  }
  


