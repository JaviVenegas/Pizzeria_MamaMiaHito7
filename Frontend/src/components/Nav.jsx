import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const Nav = () => {
    const { total } = useContext(CartContext);
    const {user, setUser} = useContext(UserContext);
    const setActiveClass = ({ isActive }) => (isActive ? "linkActivo" : "linkInactivo");
    const token = user.token
 

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <a className="navbar-brand p-1" href="/">Pizzeria Mamma Mia</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li>
                        <NavLink className= {setActiveClass} to="/" end>🍕 Home</NavLink>
                    </li>
                    <li>
                        <NavLink className= {setActiveClass}  to="/login">🔐 Login</NavLink>
                    </li>
                    <li>
                        <NavLink className={setActiveClass}  to="/register">🔐 Register</NavLink>: 
                    </li>
                    <li>
                        <NavLink className={setActiveClass}  to="/profile">👤 Profile</NavLink>
                    </li>
                    <li>
                        {token ?  <NavLink className={setActiveClass} onClick={() => setUser({ username: "", password: "", token: false })} to="/"> 🔐 Logout </NavLink> : null}
                    </li>
                </ul>
                <span>
                    <NavLink className= {setActiveClass} to="/notfound">🫓 Ofertas del 18</NavLink>
                    <NavLink className={setActiveClass}  to="/cart">🛒 Total: ${total.toLocaleString()}</NavLink>
                </span>
            </div>
        </nav>
        </>
    );
}

export default Nav;
