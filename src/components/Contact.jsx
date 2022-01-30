import { Component } from "react";
import React from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="container content-section">
               <div className="row">
                    <div className="intro-text">
                        <h2 className="header">Contact.</h2>
                        <div className="input-velden">
                            <input type="text" name="name" placeholder="Name"></input>
                            <input type="text" name="email" placeholder="Email"></input>
                            <input type="text" name="number" placeholder="Phone number"></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}