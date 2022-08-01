import './NavBar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="navbar bg-primary mi-fixed-top" >

            <div className="container-fluid" >
                <NavLink to='/' >
                    <picture>
                    <img 
                        src="../../img/logo_1.png"
                        alt="logo-image"
                        className='logo rounded shadow-sm' />

                    </picture>
                </NavLink>
                <ul className='ms-sm-auto d-sm-flex flex-column flex-md-row me-sm-2 pe-1 gap-4 navbar-nav' >
                    <li className='nav-item' >
                        <NavLink
                            className='text-secondary fw-light text-decoration-none fs-5 animate-nav'
                            to='/jewelery'>
                            Jewelery
                        </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink
                            className='text-secondary fw-light text-decoration-none fs-5 animate-nav'
                            to='/electronics'>
                            Electronics
                        </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink
                            className='text-secondary fw-light text-decoration-none fs-5 animate-nav'
                            to="/women's clothing">
                            Women's clothing
                        </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink
                            className='text-secondary fw-light text-decoration-none fs-5 animate-nav'
                            to="/men's clothing">
                            Men's clothing
                        </NavLink>
                    </li>
                </ul>

                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;