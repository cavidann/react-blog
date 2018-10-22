import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import EllipsisText  from 'react-ellipsis-text';
import {
    FilterHead,
    ResetedUl,
    Filter,
    Wrap,
    PortfolioItem,
    BlogHeader,
    BlogDesc,
    BlogImg
} from "./Style.js"

import cv from './../api/api'

const base = cv.portfolio;

const content = base.content.reverse()

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            filter: 'all'
        };

        this.showConact = this.showConact.bind(this);
    }

    showConact(index, filter) {
        console.log()

        this.setState({
            index,
            filter
        })
    }

    render() {
        const { index } = this.state;
        const self = this
        return (
            <Wrap>
                <FilterHead>
                    {/* <h1>{this.state.index}</h1> */}
                    {
                        base.header.map(function (item) {
                            return (
                                <Filter filter={item.filter}
                                    key={item.id}
                                    className={index === item.id ? "active" : null}
                                    onClick={() => self.showConact(item.id, item.filter)}
                                >{item.header}</Filter>
                            )
                        })
                    }
                </FilterHead>
                <ResetedUl>
                    {
                        content.filter(item => item.category.toLowerCase().includes(self.state.filter)).map(function (item) {
                            return (
                                <PortfolioItem key={item.id} filter={item.category}>
                                    <NavLink className='portfolioItem' to={'/' + item.name}>
                                        {/* <a href={item.link} rel="noreferrer noopener" target="_blank"> */}
                                        <BlogImg>
                                            <img src={"img/" + item.img} alt="" />
                                        </BlogImg>
                                        <BlogHeader>
                                            {item.name}
                                        </BlogHeader>
                                        <BlogDesc>
                                            <EllipsisText text={item.description} length={80} />
                                        </BlogDesc>
                                        {/* </a> */}
                                    </NavLink>
                                </PortfolioItem>
                            )
                        })
                    }
                </ResetedUl>
            </Wrap>

        )
    }
}
// EllipsisText.propTypes = {
//     text: React.PropTypes.string.isRequired,
//     length: React.PropTypes.number.isRequired,
//     tail: React.PropTypes.string,
//     tailClassName: React.PropTypes.string,
//     tooltip: React.PropTypes.shape({
//       copyOnClick: React.PropTypes.bool,
//       onAppear: React.PropTypes.func,
//       onDisapepear: React.PropTypes.func
//     })
//   };
export default Portfolio;