import React, { Component } from 'react';

import {envelope} from 'react-icons-kit/fa/envelope'
import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/fa/user'
import { comments } from 'react-icons-kit/fa/comments'
import { book } from 'react-icons-kit/icomoon/book'
import { blackTie } from 'react-icons-kit/fa/blackTie'
import { code } from 'react-icons-kit/fa/code'

import Personal from './../Personal/Index'
import Contact from './../Contact/Index'
import Education from './../Education/Index'
import Experience from './../Experience/Index'
import Skill from './../Skill/Index'
import Form from './../Mail/Index'

import {
  LeftMenu,
  MenuHeader,
  MenuItem,
  ImgOuter,
  CvMore,
  Mail
} from "./Style.js"


const tabMenu = [
  { 'index': 1,'component':<Personal />, 'icon': user },
  { 'index': 2,'component':<Contact />, 'icon': comments },
  { 'index': 3,'component':<Education />, 'icon': book },
  { 'index': 4,'component':<Experience />, 'icon': blackTie },
  { 'index': 5,'component':<Skill />, 'icon': code }
]

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeContent: <Personal />,
      index: 1
    };

    this.showConact = this.showConact.bind(this);
  }

  showConact(index,activeContent) {
    console.log()

    this.setState({
      activeContent,
      index
    })
  }

  render() {
    return (
      <LeftMenu>
        <ImgOuter>
          <img src={'img/cv.jpg'} alt="" />
          <CvMore>
            <a href="img/Cavidan_Talıbov.pdf" rel="noreferrer noopener" target="_blank">Show Cv`s Pdf</a>
          </CvMore>

          <Mail className={this.state.index === 0 ? "active" : null} onClick={() => this.showConact(0,<Form />)}>
            <div >
              <Icon size={'32px'} icon={envelope} />
            </div>
          </Mail>
        </ImgOuter>
        <MenuHeader>
          {
            tabMenu.map((item) =>
              <MenuItem key={item.index} className={this.state.index === item.index ? "active" : null} onClick={() => this.showConact(item.index, item.component)}>
                <div className='icons'>
                  <Icon size={'32px'} icon={item.icon} />
                </div>
              </MenuItem>
            )
          }
        </MenuHeader>
        <div style={{ padding: '0px 39px' }}>
          {this.state.activeContent}
        </div>
      </LeftMenu>

    )
  }
}
export default Header;