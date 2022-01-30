import { Component } from "react";
import React from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="container content-section">
                <div className="row">
                    <div className="intro-text">
                        Hi, <br></br>
                        My name is <span className="user-name">Munauwar Mughal.</span>
                        <div className="sub-text-home">Student Software Engineering</div>
                        <button class="btn btn-secondary btn-lg">Contact me</button> 
                    </div> 
                </div>
            </div>
        )
    }
}