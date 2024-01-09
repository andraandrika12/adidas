import adidasLogo from '../assets/images/signup-image.png'
import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); 
    const navigate = useNavigate();
  
    const handleLogout = () => {
      setIsLoggedIn(false); 
      localStorage.removeItem('access_token');
      navigate('/login'); 
    }

    return (
        <>
        <nav>
            <div className="logo-name">
                <div className="logo-image">
                    <img src={adidasLogo} alt="" />
                </div>

                <span className="logo_name">Adidas Admin Panel</span>
            </div>

            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">
                            <i className="uil uil-estate"></i>
                            <span className="link-name" >Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category">
                            <i className="uil uil-chart"></i>
                            <span className="link-name" >Category</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">
                            <i className="uil uil-files-landscapes"></i>
                            <span className="link-name">Register Admin</span>
                        </NavLink>
                    </li>
                </ul>

                {isLoggedIn && (
                <ul className="logout-mode">
                    <li>
                        <a href="#">
                            <i className="uil uil-signout"></i>
                            <span onClick={handleLogout} className="link-name"
                                   >Logout</span>
                        </a>
                    </li>

                </ul>
                  )}
            </div>
        </nav>
        <Outlet/>
        </>
    )
}