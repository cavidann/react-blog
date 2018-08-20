import React, { Component } from 'react';
import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/fa/user'
import { comments } from 'react-icons-kit/fa/comments'
import { book } from 'react-icons-kit/icomoon/book'
import { blackTie } from 'react-icons-kit/fa/blackTie'
import { code } from 'react-icons-kit/fa/code'

import {
  LeftMenu,
  MenuHeader,
  MenuItem,
  ImgOuter,
  CvMore,
  Mail
} from "./Style.js"
// import cv from './../api/api'

class Header extends Component {

  render() {
    return (
      <LeftMenu>
          <ImgOuter>
            <img src={'img/cv.jpg'} alt="" />
            <CvMore>
              <a href="img/Cavidan_Talıbov.pdf" rel="noreferrer noopener" target="_blank">Show Cv`s Pdf</a>
            </CvMore>
            <Mail>
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={user} />
              </div>
            </Mail>
          </ImgOuter>

          <MenuHeader>
            <MenuItem>
              {/* <NavLink to={"/"} exact activeClassName={"active"} > */}
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={user} />
              </div>
              {/* </NavLink> */}
            </MenuItem>
            <MenuItem>
              {/* <NavLink to={"/contact"} activeClassName={"active"}> */}
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={comments} />
              </div>
              {/* </NavLink> */}
            </MenuItem>
            <MenuItem>
              {/* <NavLink to={"/education"} activeClassName={"active"}> */}
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={book} />
              </div>
              {/* </NavLink> */}
            </MenuItem>
            <MenuItem>
              {/* <NavLink to={"/experience"} activeClassName={"active"}> */}
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={blackTie} />
              </div>
              {/* </NavLink> */}
            </MenuItem>
            <MenuItem>
              {/* <NavLink to={"/skill"} activeClassName={"active"}> */}
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={code} />
              </div>
              {/* </NavLink> */}
            </MenuItem>
          </MenuHeader>
      </LeftMenu>

    )
  }
}
export default Header;