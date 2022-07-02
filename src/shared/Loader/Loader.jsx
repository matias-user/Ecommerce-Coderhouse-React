
export const Loader = ({ title }) => {
    return (
        <>
            <p className="fs-3 text-center mt-5" >{title}</p>
            <div className="d-flex justify-content-center gap-2">
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
    )
}
