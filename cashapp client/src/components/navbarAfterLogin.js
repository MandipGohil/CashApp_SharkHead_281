import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import '../App.css';


class NavBarLoggedIn extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/*<a href="/" class="navbar-brand ml-10"><img*/}
                    {/*src="https://www.lending-express.com/lending-webapp/academy/wp-content/uploads/2017/03/xfreelancer-logo.png.pagespeed.ic.dSElcoH5Eg.png"*/}
                    {/*width="175" height="60" alt="Freelancer"/></a>*/}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                               aria-haspopup="true" aria-expanded="false">Hire Freelancers</a>
                            <div className="dropdown-menu" x-placement="bottom-start">
                                <a class="dropdown-item" href="./post">Post a project</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                               aria-haspopup="true" aria-expanded="false">Work</a>
                            <div className="dropdown-menu" x-placement="bottom-start">
                                <a class="dropdown-item" href="#">Browse projects</a>
                            </div>
                        </li>
                        {/*<li class="nav-item ml-15">

                            <a class="nav-link" href="./login">Log In</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./signup">Sign Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" class="btn btn-warning font-weight-bold text-white" href="./post">Post a project</a>
        </li>*/}
                    </ul>
                    <form class="form-inline ml-10">
                        <input class="form-control ml-10" type="text" placeholder="Search"/>
                        <button class="btn btn-secondary mr-10 bg-primary" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        );
    }
}

export default NavBarLoggedIn;