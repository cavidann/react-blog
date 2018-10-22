import React, { Component } from 'react';
import cv from './../api/api'

const base = cv.contact
const content=base.content

class Contact extends Component {
    render() {
        return (
            <div>
                <h4>{base.header}</h4>
                <ul>
                    {
                        content.map(function (item) {
                            let a;
                            
                            if (item.link !== undefined) {
                                a = <a href="https://github.com/cavidann" rel="noreferrer noopener" target="_blank">{item.link}</a>
                            }
                            else {
                                a = item.info
                            }
                            
                            return (
                                <li key={item.id}>
                                    <b>{item.name}</b>
                                    <p>{a}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Contact;