import React, { Component } from 'react';
import cv from './../api/api'



class Mail extends Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <input type='text' placeholder='write me'/>
                <input type='text' placeholder='write me'/>
                <input type='text' placeholder='write me'/>
            </div>
        );
    }
}

export default Mail;