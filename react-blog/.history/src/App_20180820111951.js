import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from './Blog/Blog'
import Header from './Header/Header'
import cv from './api/api'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          {
            cv.portfolio.map((item) => {
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
