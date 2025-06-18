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
                                <NavLink to="./" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/product' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                                    Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
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