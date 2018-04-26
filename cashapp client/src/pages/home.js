import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import NavBar from '../components/navbar';
import Jumbotron from '../components/jumbotron';


class Home extends Component {
    render() {
        return (
            <Router>
                <div className="Home">
                    <div>
                        <NavBar/>
                    </div>
                    <div>
                        <Jumbotron/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Home;
