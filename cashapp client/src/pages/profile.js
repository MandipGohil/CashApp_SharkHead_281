import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import NavBar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import NavBarLoggedIn from '../components/navbarAfterLogin';
import ProfileBar from '../components/profilebar';


class Profile extends Component {
    render() {
        return (
            <Router>
                <div className="Profile">
                    <NavBarLoggedIn/>
                    <ProfileBar/>

                </div>
            </Router>
        );
    }
}

export default Profile;
