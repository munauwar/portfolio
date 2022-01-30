import React, {useState} from 'react'
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <HashLink smooth to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <i className="fab fa-medium-m"></i>
                    <i className="fab fa-medium-m"></i>
                </HashLink>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <HashLink smooth to="#home" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="#about" className="nav-links" onClick={closeMobileMenu}>
                            About
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="#portfolio" className="nav-links" onClick={closeMobileMenu}>
                            Portfolio
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="#contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
