import { Item } from "../Item/Item";

export const ItemList = ({img, price, title, id}) => {

    return  <Item image={img}
                price={price}
                title={title}
                id={id}
                />        
           
    
};