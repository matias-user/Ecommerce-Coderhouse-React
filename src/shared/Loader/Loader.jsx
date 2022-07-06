
export const Loader = ({ title }) => {
    return (
        <span className="d-flex align-items-center flex-column" >
            <p className="fs-3" >{title}</p>
                
                <div className="d-flex gap-4" >

                    <div className="spinner-grow text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
        
        </span>
        
    )
}
