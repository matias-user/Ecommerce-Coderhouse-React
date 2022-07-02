import { NavLink } from 'react-router-dom';

import CartWidget from "../../components/Cart/CartWidget";

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top" >
            <div className="container-xl" role="section" >
                <NavLink
                            className='text-white text-decoration-none navbar-brand fs-4'
                            to={'/'}
                             >
                            Store's Matías
                    
                            
                        </NavLink>
                <ul className='ms-auto d-flex flex-column flex-md-row me-5 gap-2 justify-content-center' >
                    <li className='navbar-item' >
                    <NavLink
                            className='text-white text-decoration-none fs-4'
                            to={`/itemList/${'jackets'}`}
                            >
                                Jackets
                        </NavLink>
                    </li>
                    <li className='navbar-item' >
                        <NavLink
                            className='text-white text-decoration-none fs-4'
                            to={`/itemList/${'rings'}`}
                            >
                                Rings
                        </NavLink>
                    </li>
                </ul>

                <CartWidget />

            </div>
        </nav>
    )


}

export default NavBar;