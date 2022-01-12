import React from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to="/" className="nav">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="nav">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav">Contact</Link>
                    </li>
                    </ul>
                </div>
                <div className="projects-column">
                    <h4 className="footer-header">Projects</h4>
                    <ul className="list-unstyled">
                        <a href="https://github.com/munauwar/MoviesIMDB"><li className='projects'>Movies IMDB</li></a>
                    </ul>
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
