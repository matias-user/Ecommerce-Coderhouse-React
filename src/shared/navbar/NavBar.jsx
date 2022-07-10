import './NavBar.css';
import { NavLink } from 'react-router-dom';

import CartWidget from "../Cart/CartWidget";

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light fixed-top" >
            <div className="container-xl " role="section" >
                <NavLink
                    className='text-white text-decoration-none navbar-brand fs-4'
                    to={'/'}
                >
                    <img src="../../img/logo_1.png"
                        alt="logo image"
                        className='logo rounded shadow-sm' />


                </NavLink>
                <ul className='ms-sm-auto d-sm-flex flex-column flex-md-row me-sm-5 pe-1 gap-2' >
                    <li className='navbar-item' >
                        <NavLink
                            className='text-white text-decoration-none fs-5 animate-nav'
                            to={`/jewelery`}
                        >
                            Jewelery
                        </NavLink>
                    </li>
                    <li className='navbar-item' >
                        <NavLink
                            className='text-white text-decoration-none fs-5 animate-nav'
                            to={`/electronics`}
                        >
                            Electronics
                        </NavLink>
                    </li>
                </ul>

                <CartWidget />

            </div>
        </nav>
    )


}

export default NavBar;