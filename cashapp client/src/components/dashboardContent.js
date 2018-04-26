import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import '../App.css';


class DashboardContent extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-8">
                        <h5 class="ml-5 mt-4 mb-2 font-weight-bold border-bottom text-center">
                            My Dashboard
                        </h5>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title font-weight-bold">Welcome back,</h6>
                                <p class="card-text">Username</p>
                                <a href="/profile" class="btn btn-primary">View Profile</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardContent;