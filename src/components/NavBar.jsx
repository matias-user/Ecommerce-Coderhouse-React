import CartWidget from "./CartWidget";

function NavBar() {
    return (
    <nav className="navbar navbar-dark bg-dark NavBar fixed-top" >
        <div className="container-xl">
            <h1 className="navbar-brand fs-4 fw-light" >
                Store's Matías
            </h1>
            <div className="d-flex gap-3" >
                <CartWidget />
            </div>

        </div>
    </nav>
    ) 
    

}

export default NavBar;