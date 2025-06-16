import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='container flex space-between'>
                <h1>React Pages</h1>
                <div className='flex '>
                    <nav>
                        <ul className='flex header-list'>
                            <li>
                                <NavLink to="./" className={({isActive}) => isActive ? "active" : ""}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./about" className={({isActive}) => isActive ? "active" : ""}>
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/documentation' className={({isActive}) => isActive ? 'active' : ''}>
                                    Documentation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tutorials" className={({isActive}) => isActive ? "active" : ""}>
                                    Tutorials
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;