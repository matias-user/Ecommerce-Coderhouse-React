import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="p-4 bg-primary text-white mt-5" >
        <div className="row justify-content-center align-items-center mx-auto">
            <div className="col-md-4 d-flex flex-column text-white">
                <h4>Categories</h4>
                <Link className='text-white' to='/jewelry' >
                    Jewelery
                </Link>
                <Link className='text-white' to='/electronics' >
                    Electronics
                </Link>
                <Link className='text-white' to="/women's clothing" >
                    Women's clothing
                </Link>
                <Link className='text-white' to="/men's clothing" >
                    Men's clothing
                </Link>
            </div>
            <div className="col-md-4 mt-4 mt-md-0 d-flex flex-column">
                <h4>About us</h4>
                <a className='text-white' href="#"><i class="bi bi-envelope me-1 text-white"></i> Contact Information</a>
                <a className='text-white' href="#"><i className="bi bi-geo-alt me-1 text-white"></i> Address</a>
                <a className='text-white' href="#"><i class="bi bi-instagram me-1 text-white"></i> Instagram</a>
                <a className='text-white' href="#"><i class="bi bi-facebook me-1 text-white"></i> Facebook</a>
            </div>
            <div className="col-md-4">
                <picture>
                    <img className='logo' src="/public/img/logo_1.png" alt="Logo store" />
                </picture>
            </div>
        </div>
    </footer>
  )
}
