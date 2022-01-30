import { Component } from "react";
import React from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container content-section">
               <div className="row">
                    <div className="intro-text">
                        <h2 className="header">About me.</h2>
                        <div className="sub-text">
                        An enthusiastic third year Software Engineering student at the Amsterdam University of Applied Sciences.
                        <br></br><br></br>
                        I am a well-organised person, problem solver, independent person with high attention to detail. 
                        I want to develop myself as a full stack developer.
                        <br></br><br></br>
                        Visit my <a href="https://www.linkedin.com/in/munauwar-mughal/">Linkedin</a> profile for more information.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}