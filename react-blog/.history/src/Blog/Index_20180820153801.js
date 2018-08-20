import React, { Component } from 'react';
import cv from './../api/api'




class Blog extends Component {
    constructor(props){
        super(props);

        this.state={};
        this.submit=this.submit.bind(this);
    }

    submit(){
        console.log("12");
        this.props.history.push('/');
    }

    render() {
        let content = cv.portfolio.content.find(item => item.name.toLowerCase() === this.props.location.pathname.slice(1).toLowerCase())
        
        return (
            <div className="container padding-top">
                {content &&
                    <div>
                        <h1>{content.name}</h1>
                        <p>{content.description}</p>
                    </div>
                }
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}
export default Blog;

// filter(key => this.state.dataGoal[key].main == true)