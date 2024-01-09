import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-white">
                <div className="container justify-content-between">
                    <img className="adidasLogo" src="https://www.adidas.co.id/media/logo/adidas-logo.png" />
                    <div id="topHeader">
                            <div><Link to="/products/1">Pria</Link></div>
                            <div><Link to="/products/2">Wanita</Link></div>
                            <div><Link to="/products/3">Anak</Link></div>
                            <div><a href="">Olahraga</a></div>
                            <div><a href="">Brands</a></div>
                            <div><a href="">Promo</a></div>
                    </div>
                    <div className="d-flex flex-column flex-wrap" id="navbarCollapse">
                        <div className="container">
                        <span className="ml-auto py-0 px-lg-1" id="menuHeader">
                            <a href="">status pesanan</a>
                            <a href="">bantuan</a>
                            <a href="">daftar newsletter</a>
                            <a href="">-flag-</a>
                            <a href="">masuk</a>
                        </span>
                        </div>
                        <ul className="navbar-nav mb-auto mt-0 ml-auto">
                            
                            <div className="input-group rounded">
                                <input type="search" className="form-control rounded" placeholder="Cari..." aria-label="Search" aria-describedby="search-addon" />
                                <span className="input-group-text border-0" id="search-addon">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>
                            <li className="nav-item active">
                                <a href=""><i className="material-icons">shopping_bag</i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

