import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ image, price, title, id }) => {

    return (
        <Link to={`/item/${id}`} className='text-decoration-none' >
            <div className="card mi-card border-primary animation-item"  >

                <img src={image}
                    className="card-img-top img" />
                <div className="card-body text-dark d-grid">
                    <h3 className="fs-5 mt-auto">{title}</h3>
                    <p className="fs-4 mt-auto" >
                        $ {price}
                    </p>

                </div>
                <div className="card-footer text-dark">
                    <p>ID: {id}</p>
                </div>
            </div>
        </Link>

    )
};