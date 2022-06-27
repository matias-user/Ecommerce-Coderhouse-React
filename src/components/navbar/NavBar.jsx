import CartWidget from "../cart/CartWidget";

function NavBar() {
    return (
    <nav className="navbar navbar-dark bg-dark NavBar fixed-top" >
        <div className="container-xl">
            <h1 className="navbar-brand fs-2 fw-bold" >
                Store's Matías
            </h1>
            <CartWidget />

        </div>
    </nav>
    ) 
    

}

export default NavBar;