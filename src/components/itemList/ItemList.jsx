import { Link } from 'react-router-dom';
import './Item.css';

export const ItemList = ({ image, price, title, count, id }) => {

    return (
        <Link to={`/item/${id}`} className='text-decoration-none' >
            <div className="card mi-card border-primary animation-item shadow-sm"  >

                <img src={image}
                    className="card-img-top img" />
                <div className="card-body text-dark d-grid">
                    <h3 className="fs-5 mt-auto text-secondary">{title}</h3>


                </div>
                <div className="card-footer text-center d-flex align-items-center justify-content-between text-dark">
                    <span>
                        <h4 className='fw-light text-secondary' >
                            Price:
                        </h4>
                        <h4 className="text-secondary" >
                            <i className="bi bi-currency-dollar"></i> {price}
                        </h4>
                    </span>

                    <span>
                        <h4 className='fw-light text-secondary' >
                            Stock:
                        </h4>
                        <h4 className='text-secondary' >
                            {count}
                        </h4>

                    </span>
                </div>
            </div>
        </Link>

    )
};