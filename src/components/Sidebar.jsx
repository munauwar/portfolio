import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import { GoMail, GoHome, GoCode, GoPerson } from 'react-icons/go'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {isHovered: ""};
        this.status = {clicked: false }
    }

    toggleHover() {
        this.setState({isHovered: !this.state.isHovered})
    }   


    handleClick = () => {
        this.setStatus({clicked: !this.status.clicked})
    }

    render() {
        return (
            <div className="container-fluid">
                <div class="row min-vh-100 flex-column flex-md-row">
                    <aside className="sidebar col-12 col-md-2 flex-shrink-1">      
                        <nav class="navbar navbar-expand flex-md-column flex-row align-items-start py-2" id="nav"> 
                            <div class="collapse navbar-collapse ">
                                <ul className="navbar-nav flex-md-column flex-row w-100 justify-content-between">
                                    <li className="nav-item" onMouseEnter={() => this.setState({isHovered:"home"})} onMouseLeave={() => this.setState({isHovered:""})}>
                                    <Link to="/" className="nav-link">
                                        {this.state.isHovered === "home" ? 
                                            <span id="home">Home</span> : <GoHome size={30}/>
                                        }
                                    </Link>
                                    </li>
                                    <li className="nav-item" onMouseEnter={() => this.setState({isHovered:"about"})} onMouseLeave={() => this.setState({isHovered:""})}>
                                    <Link to="/about" className="nav-link">
                                        {this.state.isHovered === "about" ?
                                            <span id="about">About</span> : <GoPerson size={30}/>
                                        }
                                    </Link>
                                    </li>
                                    <li className="nav-item" onMouseEnter={() => this.setState({isHovered:"skills"})} onMouseLeave={() => this.setState({isHovered:""})}>
                                    <Link to="/skills" className="nav-link">
                                        {this.state.isHovered === "skills" ?
                                            <span id="skills">Skills</span> : <GoCode size={30}/>
                                        }
                                    </Link>
                                    </li>
                                    <li className="nav-item" onMouseEnter={() => this.setState({isHovered:"contact"})} onMouseLeave={() => this.setState({isHovered:""})}>
                                    <Link to="/contact" className="nav-link">
                                        {this.state.isHovered === "contact" ?
                                            <span id="contact">Contact</span> : <GoMail size={30}/>
                                        }
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                            {/* <div className="social-media">
                                <a href="https://www.linkedin.com/in/munauwar-mughal/">
                                    <FaLinkedin></FaLinkedin>
                                </a><br></br>
                                <a href="https://github.com/munauwar" className="git-icon">
                                    <FaGithub></FaGithub>
                                </a>
                            </div> */}
                    </aside>
                </div>
            </div>
        )
    }
}

