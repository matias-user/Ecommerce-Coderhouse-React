import { Routes, Route  } from 'react-router-dom';
import { ItemDetailListContainer } from '../ItemDetailContainer/ItemDetailContainer';

import { ItemList } from '../ItemList/ItemList';

import './Container.css';

function Container() {

    return (
        <main className='mt-5 pt-5 d-flex mx-auto flex-column align-items-center'  >
            <Routes>
                <Route exact path='/' element={ <ItemList /> } ></Route>
                <Route exact path='/item/:id' element={ < ItemDetailListContainer/> } ></Route>
            </Routes>

        </main>
            

    )
}

export default Container;