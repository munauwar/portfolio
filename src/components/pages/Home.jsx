import React from 'react'

import '../../App.css'
import './Home.css'


function Home() {
    return (
        <div id="home" className="container">
            <div className="home-content">
                <img className="home-img" src="images/home.jpg" alt="home" />
                <div className="welkom-text">
                    <p className='first-section'>Hi,  My name is Munauwar Mughal. </p>
                    <div className="sub-text">Student Software Engineer.</div>
                </div>           
            </div>
        </div>
    )
}

export default Home;