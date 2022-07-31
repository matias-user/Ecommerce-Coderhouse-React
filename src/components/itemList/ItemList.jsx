import { Link } from 'react-router-dom';
import './Item.css';

export const ItemList = ({ image, price, title, count, id }) => {

    return (
        <Link to={`/item/${id}`} className='text-decoration-none' >
            <div className="card mi-card border-primary animation-item"  >

                <img src={image}
                    className="card-img-top img" />
                <div className="card-body text-dark d-grid">
                    <h3 className="fs-5 mt-auto">{title}</h3>


                </div>
                <div className="card-footer text-center d-flex align-items-center justify-content-between text-dark">
                    <span>
                        <p>
                            Price:
                        </p>
                        <p className="mt-auto" >
                            <i className="bi bi-currency-dollar"></i> {price}
                        </p>
                    </span>

                    <span>
                        <p>
                            Stock:
                        </p>
                        <p>
                            {count}
                        </p>

                    </span>
                </div>
            </div>
        </Link>

    )
};