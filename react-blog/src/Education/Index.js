import React, { Component } from 'react';
import cv from './../api/api'

const base = cv.education;
const content=base.content.reverse()

class Education extends Component {
    render() {
        return (
            <div>
                <h1>{base.header}</h1>
                <ul>
                    {
                        content.map(function (item) {
                            return(
                            <li key={item.id}>
                                <b>{item.school}</b>
                                <p>{item.profession}</p>
                                <p>{item.range}</p>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Education;