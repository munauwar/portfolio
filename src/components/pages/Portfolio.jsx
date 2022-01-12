import React from 'react'
import '../../App.css'
import './Portfolio.css'
import Footer from '../Footer'

function Portfolio() {
    return (
        <>
        <div className="container">
            <div className="split left">
                <div className="content portfolio">
                    <h2 className="header-portfolio">Skills & Experience.</h2>
                    <div className="sub-text">
                        I learned a lot of different languages, frameworks and libraries because of the interest in front-end and back-end. 
                        I can write code in HTML5, CSS, Javascript, ReactJS, jQuery, AngularJS, Node.js, Java and Kotlin.

                        <br></br><br></br>

                        <blockquote className="quote">"If you want to be more powerfull in life, educate yourself."</blockquote>

                        <br></br>
                        I have done several projects for Corendon, AMSTA and aquadis. Currently working on a Android project.                         
                        Visit my <a href="https://github.com/munauwar">Github</a> for more information.                    
                    </div>
                </div>
            </div>

            <div className="split right languages">
                <div className="column">
                    <i class="fab fa-html5 fa-4x"></i>
                    <i class="fab fa-css3-alt fa-4x"></i>
                    <i class="fab fa-angular fa-4x"></i>
                    <i class="fab fa-js fa-4x"></i>
                </div>
                
                <div className="column">
                    <i class="fab fa-bootstrap fa-4x"></i>
                    <i class="fab fa-react fa-4x"></i>
                    <i class="fab fa-node-js fa-4x"></i>
                    <i class="fab fa-java fa-4x"></i> 
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Portfolio
