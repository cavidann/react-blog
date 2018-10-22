import React, { Component } from 'react';
import cv from './../api/api'




class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.submit = this.submit.bind(this);
    }

    submit() {
        this.props.history.push('/');
    }

    render() {
        let content = cv.portfolio.content.find(item => item.name.toLowerCase() === this.props.location.pathname.slice(1).toLowerCase())

        return (
            <div className="container padding-top my-md-75 flex-center">
                {content &&
                    <div className="blog">
                        <div className="blogImgOuter">
                            <img src={"img/" + content.img} alt=""/>
                        </div>
                        <div className="blogContent">
                            <h1>{content.name}</h1>
                            {/* <p > */}
                            {content.description.split("\n").map(function(item, key){
                                return(
                                    <p key={key}>
                                        {item}
                                        <br/>
                                    </p>
                                )
                            })}
                            {/* </p> */}
                            {/* <div dangerouslySetInnerHTML={'First &middot; Second'}/> */}

                            <a className="my-btn2" onClick={this.submit}>go back</a>
                            <a className="my-btn1" href={content.link} rel="noreferrer noopener" target="_blank">go site</a>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default Blog;

// filter(key => this.state.dataGoal[key].main == true)