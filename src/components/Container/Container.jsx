import { Routes, Route  } from 'react-router-dom';
import { CartContainer } from '../CartContainer/CartContainer';
import { ItemDetailListContainer } from '../ItemDetailContainer/ItemDetailContainer';

import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import { Order } from '../Order/Order';

function Container() {

    return (
        <main className='mt-5 pt-5 container-xl'  >
            <Routes>
                <Route exact path='/' element={ <ItemListContainer /> } ></Route>
                <Route exact path='/item/:id' element={ < ItemDetailListContainer/> } ></Route>
                <Route exact path='/:category' element={ < ItemListContainer/> } ></Route>
                <Route exact path='/cart' element={ < CartContainer/> } ></Route>
                <Route exact path='/order' element={ < Order/> } ></Route>
            </Routes>
        </main>
            

    )
}

export default Container;