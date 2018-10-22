import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from './Blog/Index'
import Header from './Header/Index'
import Portfolio from './Portfolio/Index';
import cv from './api/api'



class App extends Component {
  render() {
    return (
      <Router>
        <div style={{display:'flex'}}>
          <Header></Header>
          <Route exact path={'/'} component={Portfolio} />
          {
            cv.portfolio.content.map((item) => {
              return (
                  <Route key={item.id} path={'/'+item.name} component={Blog} />
              )
            })
          }
        </div>
      </Router>
    );
  }
}

export default App;
