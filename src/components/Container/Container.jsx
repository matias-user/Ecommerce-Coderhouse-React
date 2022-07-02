import { Routes, Route  } from 'react-router-dom';

import { ItemDetail } from "../ItemDetail/ItemDetail";
import { ItemList } from '../ItemList/ItemList';

import './Container.css';

function Container() {

    return (
        <main className='mt-5 pt-5 d-flex mx-auto'  >
            <Routes>
                <Route exact path='/' element={ <ItemList /> } ></Route>
                <Route exact path='/item/:id' element={ <ItemDetail /> } ></Route>
            </Routes>

        </main>
            

    )
}

export default Container;