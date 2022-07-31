import './NavBar.css';
import { NavLink } from 'react-router-dom';

import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light" >

            <div className="container-fluid" >
                <NavLink
                    className='text-white text-decoration-none navbar-brand fs-4'
                    to={'/'} >
                    <img src="../../img/logo_1.png"
                        alt="logo image"
                        className='logo rounded shadow-sm' />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarnav" aria-controls="navbarnav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarnav" >

                    <ul className='ms-sm-auto d-sm-flex flex-column flex-md-row me-sm-5 pe-1 gap-4 navbar-nav' >
                        <li className='nav-item' >
                            <NavLink
                                className='text-white text-decoration-none fs-5 animate-nav'
                                to={`/jewelery`}
                            >
                                Jewelery
                            </NavLink>
                        </li>
                        <li className='nav-item' >
                            <NavLink
                                className='text-white text-decoration-none fs-5 animate-nav'
                                to={`/electronics`}
                            >
                                Electronics
                            </NavLink>
                        </li>
                        <li className='nav-item' >
                            <NavLink
                                className='text-white text-decoration-none fs-5 animate-nav'
                                to={`/women's clothing`}
                            >
                                women's clothing
                            </NavLink>
                        </li>
                        <li className='nav-item' >
                            <NavLink
                                className='text-white text-decoration-none fs-5 animate-nav'
                                to={`/men's clothing`}
                            >
                                men's clothing
                            </NavLink>
                        </li>
                    </ul>

                </div>

                <CartWidget />

            </div>
        </nav>
    )


}

export default NavBar;