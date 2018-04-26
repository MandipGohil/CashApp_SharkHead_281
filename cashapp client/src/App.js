import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import PostProject from './pages/post';
import Profile from './pages/profile';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/post" component={PostProject}/>
      <Route exact path="/profile" component={Profile}/>
      </div>
      </Router>
    );
  }
}

export default App;
