
export const Loader = ({ title }) => {
    return (
        // <div className="d-flex  gap-2 flex-column align-items-center">
        <>
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
        
        </>
        // </div>

        
    )
}
