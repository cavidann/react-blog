import React, { Component } from 'react';
import cv from './../api/api'

const base = cv.experience;

const content=base.content.reverse()

class Experience extends Component {
    render() {
        return (
            <div>
                <h1>{base.header}</h1>
                <ul>
                    {
                        content.map(function (item) {
                            return (
                                <li key={item.id}>
                                    <b>{item.mission}</b>
                                    <p>{item.company}</p>
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

export default Experience;
