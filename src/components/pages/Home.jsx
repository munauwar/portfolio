import React from 'react'

import '../../App.css'
import './Home.css'


function Home() {
    return (
        <div id="home" className="container">
            <div className="home-content">
                <video src="videos/home.mp4" autoPlay loop muted />
                <div className="welkom-text">
                    <p className='first-section'>Hi,  My name is Munauwar Mughal. </p>
                    <div className="sub-text">Student Software Engineer.</div>
                </div>           
            </div>
        </div>
    )
}

export default Home;