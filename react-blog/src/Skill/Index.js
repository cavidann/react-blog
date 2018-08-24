import React, { Component } from 'react';
import cv from './../api/api';

const base = cv.skill;
const content = base.content;

class Skill extends Component {
    render() {
        return (
            <div>
                <h4>{base.header}</h4>
                {
                    content.map(function (item) {
                        return (
                            <div key={item.id}>
                                <div className="my-md-50 left">{item.name}</div>
                                <div className="my-md-50 left">{item.percentage}</div>
                                <div style={{ clear: 'both' }}></div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Skill;