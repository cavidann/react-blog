import React, { Component } from 'react';
import cv from './../api/api'

const base = cv.education;
const content=base.content.reverse()

class Education extends Component {
    render() {
        return (
            <div>
                <h4>{base.header}</h4>
                <ul>
                    {
                        content.map(function (item) {
                            return(
                            <li key={item.id}>
                                <b>{item.school}</b>
                                <p>
                                    {item.profession}
                                    <br/>
                                    {item.range}
                                </p>
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