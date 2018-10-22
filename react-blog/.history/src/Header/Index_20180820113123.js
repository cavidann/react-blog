import React, { Component } from 'react';

// import cv from './../api/api'

class Header extends Component {

    render() {
        return (
            <LeftMenu>
      <header>
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
        
      </header>
    </LeftMenu>

        )
    }
}
export default Header;