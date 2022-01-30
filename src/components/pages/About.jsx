import React from 'react'
import '../../App.css'
import Timeline from '../Timeline';
import './About.css'


function About() {
    return (
        <>
        <div id="about" className="container">
            <div className="split left">
                <div className="content">
                    <h2 className="header-portfolio">About me.</h2>
                    <div className="sub-text">
                        An enthusiastic fourth year Software Engineering student at the Amsterdam University of Applied Sciences. 
                        I like to play football and you can find me often in the gym!
                        <br></br><br></br>
                        Well-organised person, problem solver, independent person with high attention to detail. 
                        I am someone who is every day in search for challenges to improve my skills to eventually become a Full Stack Developer
                    </div>
                </div>
            </div>

            <div className="split right timeline">
                <Timeline />
            </div>
        </div>
        </>
    )
}

export default About;
