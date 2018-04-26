import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import '../App.css';


class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron bg-primary text-white">
                    <h1 class="display-4 font-weight-bold">Hire expert freelancers for any job, online</h1>
                    <p class="lead">Millions of small businesses use Freelancer to turn their ideas into reality.</p>
                    <p class="lead">
                        <a class="btn btn-warning font-weight-bold text-white" href="/post" role="button">I want to
                            Hire</a>
                        &nbsp; &nbsp;
                        <a class="btn btn-success font-weight-bold text-white" href="/signup" role="button">I want to
                            Work</a>


                    </p>


                </div>
                <div class="jumbotron bg-primary text-white">
                </div>
                <div class="jumbotron">
                    <div id="intro" class="view full-bg-img backgroundimage">

                    </div>
                </div>

            </div>
        );
    }
}

export default Jumbotron;