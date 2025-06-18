import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../css/header.css';

function Header() {
    return (
        <header>
            <div className='header-container'>
                <h1>Fake Store</h1>
                <div>
                    <nav>
                        <ul className='header-list'>
                            <li>
                                <NavLink to="./" className={({isActive}) => isActive ? "header-active" : ""}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/product' className={({isActive}) => isActive ? 'header-active' : ''}>
                                    Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./about" className={({isActive}) => isActive ? "header-active" : ""}>
                                    About us
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Link to="/cart" >
                    <FaShoppingCart className="cart-icon" />
                </Link>
            </div>
        </header>
    );
}

export default Header;