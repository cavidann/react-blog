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
        <Tabs>
          <TabList>
            <Tab>
              <div style={{ width: '100%' }} >
                <Icon size={'32px'} icon={user} />
              </div>
            </Tab>

            <Tab>
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={comments} />
              </div>
            </Tab>

            <Tab>
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={blackTie} />
              </div>
            </Tab>

            <Tab>
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={book} />
              </div>
            </Tab>

            <Tab>
              <div style={{ width: '100%' }}>
                <Icon size={'32px'} icon={blackTie} />
              </div>
            </Tab>
            
            <Tab>
              <div style={{ width: '100%' }}>
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

          </TabPanel>

          <TabPanel>
            <Skill />
          </TabPanel>
        </Tabs>
      </LeftMenu>

    )
  }
}
export default Header;