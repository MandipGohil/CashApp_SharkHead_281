import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import NavBar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import NavBarLoggedIn from '../components/navbarAfterLogin';
import ProfileBar from '../components/profilebar';
import DashboardContent from '../components/dashboardContent';

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <div className="Dashboard">
                    <div>
                        <NavBarLoggedIn/></div>
                    <div>
                        <ProfileBar/></div>

                    <div>
                        <DashboardContent/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Dashboard;
