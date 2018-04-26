import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import '../App.css';


class ProfileBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-gray">


                <div class="collapse navbar-collapse ml-5" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">

                        <li class="nav-item ml-10">
                            <a class="nav-link text-white" href="/projects">My Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/profile">My Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/dashboard">Dashboard</a>
                        </li>

                        <li class="nav-item ml-20">
                            <a class="nav-link" class="btn btn-warning font-weight-bold text-white" href="./post">Post a
                                project</a>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default ProfileBar;