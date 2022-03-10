import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Footer.css'

function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-name">
                Munauwar Mughal.
                <div className="icons">
                    <a href="https://www.linkedin.com/in/munauwar-mughal/"><i class="fab fa-linkedin-in fa-lg"></i></a>
                    <a href="https://github.com/munauwar"><i class="fab fa-github fa-lg"></i></a>
                    <a href="mailto:mughal.m@outlook.com"><i class="far fa-envelope fa-lg"></i></a>
                </div>
            </div>
            <div className="footer-content">
                <div className="menu-column">
                    <h4 className="footer-header">Menu</h4>
                    <ul className="list-unstyled">
                        <li>
                            <HashLink
                                smooth
                                to="#home"
                                className="list-items" >
                                Home
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="#about"
                                className="list-items" >
                                About
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="#portfolio"
                                className="list-items" >
                                Portfolio
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="#contact"
                                className="list-items" >
                                Contact
                            </HashLink>
                        </li>
                    </ul>
                </div>
                <div className="projects-column">
                    <h4 className="footer-header">Projects</h4>
                    <li className="list-items">
                        <a href="https://github.com/munauwar/MoviesIMDB">Movies IMDB</a>
                    </li>
                    <li className="list-items">
                        <a href="https://github.com/munauwar/mughalprintstore">Mughal Print Store</a>

                    </li>
                    <li className="list-items">
                        <a href="https://github.com/munauwar/crypto-tracker">Crypto tracker</a>
                    </li>
                </div>
            </div>
            <hr />
            <p className="copyright">
                &copy; {new Date().getFullYear()} Munauwar Mughal | All rights reserved
            </p>
        </div>
    )
}

export default Footer
