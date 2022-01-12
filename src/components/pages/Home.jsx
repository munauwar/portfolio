import React from 'react'

import '../../App.css'
import Footer from '../Footer';
import './Home.css'


function Home() {
    return (
        <>
        <div className="container">
            <div className="home-content">
                <video src="videos/home.mp4" autoPlay loop muted />
                <div className="welkom-text">
                    <p className='first-section'>Hi,  My name is Munauwar Mughal. </p>
                    <div className="sub-text">Student Software Engineer.</div>
                </div>           
            </div>
        </div>
        <Footer/>
        </>
    )
    
}

export default Home;