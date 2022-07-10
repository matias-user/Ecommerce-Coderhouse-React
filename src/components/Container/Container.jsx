import { Routes, Route  } from 'react-router-dom';
import { CartContainer } from '../CartContainer/CartContainer';
import { ItemDetailListContainer } from '../ItemDetailContainer/ItemDetailContainer';

import { ItemList } from '../ItemList/ItemList';

import './Container.css';

function Container() {

    return (
        <main className='mt-5 pt-5 container-xl'  >
            <Routes>
                <Route exact path='/' element={ <ItemList /> } ></Route>
                <Route exact path='/item/:id' element={ < ItemDetailListContainer/> } ></Route>
                <Route exact path='/:category' element={ < ItemList/> } ></Route>
                <Route exact path='/cart' element={ < CartContainer/> } ></Route>
            </Routes>

        </main>
            

    )
}

export default Container;