import './Item.css';

export const Item = ({ image, price, title, id }) => {
    return (
        
        <div className="card mi-card border-dark">
            
            <img src={image} 
                className="card-img-top img" />
            <div className="card-body text-dark">
                <div className="d-flex flex-column justify-content-between h-100">
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle fs-4" >
                   $ {price}
                </p>

                </div>
            </div>
            <div className="card-footer text-dark">
                <p>ID: {id}</p>
            </div>
        </div>
    )
};