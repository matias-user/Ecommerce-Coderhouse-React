import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="p-4 bg-secondary text-primary mt-5" >
        <div className="row justify-content-center align-items-center mx-auto">
            <div className="col-md-4 d-flex flex-column">
                <h4>Categories</h4>
                <Link to='/jewelry' >
                    Jewelery
                </Link>
                <Link to='/electronics' >
                    Electronics
                </Link>
                <Link to="/women's clothing" >
                    Women's clothing
                </Link>
                <Link to="/men's clothing" >
                    Men's clothing
                </Link>
            </div>
            <div className="col-md-4 mt-4 mt-md-0 d-flex flex-column">
                <h4>About us</h4>
                <a href="#"><i class="bi bi-envelope me-1"></i> Contact Information</a>
                <a href="#"><i className="bi bi-geo-alt me-1"></i> Address</a>
                <a href="#"><i class="bi bi-instagram me-1"></i> Instagram</a>
                <a href="#"><i class="bi bi-facebook me-1"></i> Facebook</a>
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
