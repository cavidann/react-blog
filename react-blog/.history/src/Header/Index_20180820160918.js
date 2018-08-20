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

  constructor(props){
    super(props)

  }

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
            <MenuItem tab-head='profile'>
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={user} />
              </div>
            </MenuItem>
            <MenuItem tab-head='comment'>
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={comments} />
              </div>
            </MenuItem>
            <MenuItem tab-head='book'>
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={book} />
              </div>
            </MenuItem>
            <MenuItem tab-head='tie'>
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={blackTie} />
              </div>
            </MenuItem>
            <MenuItem tab-head='code'>
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={code} />
              </div>
            </MenuItem>
          </MenuHeader>
          <div>
            content
          </div>
      </LeftMenu>

    )
  }
}
export default Header;