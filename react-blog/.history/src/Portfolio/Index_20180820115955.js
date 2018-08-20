import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { FilterHead, ResetedUl, Filter, Wrap, PortfolioItem } from "./Style.js"

import cv from './../api/api'

class Portfolio extends Component {

    render() {
        return (
            <Wrap>
                {/* <FilterHead> */}
                    <ResetedUl>
                    <FilterHead>
                        {
                            base.header.map(function (item) {
                                return (
                                        <Filter filter={item.filter} key={item.id}>{item.header}</Filter>
                                )
                            })
                        }
                        </FilterHead>
                        {
                        content.map(function (item) {
                            return (
                                <PortfolioItem key={item.id} filter={item.category}>
                                <NavLink to={'/'+item.name}>
                                {/* <a href={item.link} rel="noreferrer noopener" target="_blank"> */}
                                <img src={"img/"+item.img} alt=""/>
                                    <b>{item.name}</b>
                                    <p>{item.description}</p>
                                {/* </a> */}
                                </NavLink>
                                </PortfolioItem>
                            )
                        })
                    }
                    </ResetedUl>
                {/* </FilterHead> */}

                <ResetedUl>
                    
                    
                </ResetedUl>
            </Wrap>

        )
    }
}
export default Portfolio;