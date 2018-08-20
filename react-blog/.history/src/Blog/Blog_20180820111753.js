import React, { Component } from 'react';
import cv from './../api/api'




class Blog extends Component {
    render() {
        let content = cv.pages.find(item => item.name.toLowerCase() === this.props.location.pathname.slice(1).toLowerCase())
        
        return (
            <div className="container padding-top">
                {content &&
                    <div>
                        <h1>{content.name}</h1>
                        <p>{content.content}</p>
                    </div>
                }
            </div>
        )
    }
}
export default Blog;

// filter(key => this.state.dataGoal[key].main == true)