import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import cv from './../api/api'

class Header extends Component {

    render() {
        return (
            <div>
                {/* {
                    cv.portfolio.content.map((item)=> {
                        return(
                        <li key={item.id}>
                            <NavLink to={'/'+item.name}>{item.name}</NavLink>
                        </li>
                        )
                    })
                } */}
            </div>

        )
    }
}
export default Header;