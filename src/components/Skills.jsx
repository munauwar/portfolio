import { Component } from "react";
import React from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div className="container content-section">
               <div className="row">
                    <div className="intro-text">
                        <h2 className="header">Skills & Experience.</h2>
                        <div className="sub-text">
                            I learned a lot of different languages, because of the interest in front-end and back-end. 
                            The languages I learned are Java, Kotlin, ReactJS, JavaScript. 
                            The webtechnologies that I know are HTML5, CSS, jQuery, AngularJS and Node.js.
                            <br></br><br></br>
                            I have done several projects for Corendon, AMSTA and aquadis. Currently working on a Android project.
                            <br></br><br></br>
                            Visit my <a href="https://github.com/munauwar">Github</a> for more information.
                        </div>
                    </div>

 
                    <div className="project-block">
                        <img src="images/project1.png" className="image-project"/>
                        <img src="images/project1-detail.png" className="image-project-detail"/>
                    </div>
                    
                </div>
            </div>
        )
    }
}