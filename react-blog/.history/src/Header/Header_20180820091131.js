import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import infos from './../api/api'

class Header extends Component {

    render() {
        return (
            <div>
                {
                    infos.pages.map((item)=> {
                        return(
                        <li key={item.id}>
                            <NavLink to={'/'+item.name}>{item.name}</NavLink>
                        </li>
                        )
                    })
                }
            </div>

        )
    }
}
export default Header;