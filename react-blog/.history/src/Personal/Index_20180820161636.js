import React, { Component } from 'react';
import cv from './../api'

const base=cv.personal;
const content=base.content;

class Personal extends Component {
    render() {
        return (
            <div>
                <h1>{base.header}</h1>
                {
                    content.map(function (item) {
                        return(
                        <div key={item.id}>
                            <p>{item.aboutMe}</p>
                        </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Personal;