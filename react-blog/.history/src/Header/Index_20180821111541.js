import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/fa/user'
import { comments } from 'react-icons-kit/fa/comments'
import { book } from 'react-icons-kit/icomoon/book'
import { blackTie } from 'react-icons-kit/fa/blackTie'
import { code } from 'react-icons-kit/fa/code'

import Personal from './../Personal/Index'
import Contact from './../Contact/Index'
import Eduction from './../Education/Index'
import Experience from './../Experience/Index'
import Skill from './../Skill/Index'


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
    super(props);
    this.state={
      active: <Personal/>
    };
    this.showConact=this.showConact.bind(this);
  }

  showConact(page){
    console.log('success')
    this.setState={
      active:page
    }
  }

  render() {
    return (
      <LeftMenu>
        <ImgOuter>
          <img src={'img/cv.jpg'} alt="" />
          <CvMore>
            <a href="img/Cavidan_Talıbov.pdf" rel="noreferrer noopener" target="_blank">Show Cv`s Pdf</a>
          </CvMore>
          <Mail onClick={this.showConact(<Contact/>)}>
            <div style={{ width: '100%' }}>
              <Icon size={'32px'} icon={user} />
            </div>
          </Mail>
        </ImgOuter>
        <div>
          {this.state.active}
        </div>
        {/* <Tabs>
          <TabList className='tab-head'>
            <Tab className='tab-head-item'>
              <div className='icons'>
                <Icon size={'32px'} icon={user} />
              </div>
            </Tab>

            <Tab className='tab-head-item'>
              <div className='icons'>
                <Icon size={'32px'} icon={comments} />
              </div>
            </Tab>

            <Tab className='tab-head-item'>
              <div className='icons'>
                <Icon size={'32px'} icon={book} />
              </div>
            </Tab>

            <Tab className='tab-head-item'>
              <div className='icons'>
                <Icon size={'32px'} icon={blackTie} />
              </div>
            </Tab>
            
            <Tab className='tab-head-item'>
              <div className='icons'>
                <Icon size={'32px'} icon={code} />
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <Personal />
          </TabPanel>

          <TabPanel>
            <Contact />
          </TabPanel>

          <TabPanel>
            <Eduction />
          </TabPanel>

          <TabPanel>
            <Experience />
          </TabPanel>

          <TabPanel>
            <Skill />
          </TabPanel>
        </Tabs> */}
      </LeftMenu>

    )
  }
}
export default Header;