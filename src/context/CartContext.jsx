import { createContext, useState } from 'react';

export const CartContext = createContext();
const items = [];
let counter = 0;

const checkDuplicate = ( { id } ) => {
    let help = true;
    // Si item no tiene producto no hacer este chequeo
    if( items.length > 0 ){        
        items.forEach( item => {
            if( item.item.id == id ) help = false;
            
        } );
    }
    return help;
};
const generateOrder = () => {
    counter++;
    return `ABC${counter}`;
};

export const CartProvider = ({ children }) => {
    const [itemsInCart, setItemInCart] = useState([]);
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState({});
    const [total, setTotal] = useState(0);

    const addOrder = () => {
        setOrders( generateOrder() );
    };

    const addUser = ( name, phone, email ) => {
        setUser({name, phone, email});
    };


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
        // quitar total del producto
        items.forEach( product => {
            if( product.item.id == id ){
                setTotal( total - (product.item.price * product.quantity) );
            }
        } );
    };
    
    const removeAll = () => {
        setItemInCart([]);
    };
    
    const isInCart = ( id ) => {
        return items.find( item => item.id === id );
    };
    
      return (
      <CartContext.Provider 
            value={{ itemsInCart, addItem, removeItemById, removeAll, isInCart, total, addUser, user, addOrder }} >
          { children }
      </CartContext.Provider>
    )
  }
  


