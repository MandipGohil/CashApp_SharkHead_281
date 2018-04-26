import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import NavBar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import '../App.css'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            values: {
                email: '',
                username: '',
                password: ''

            }
        }
    }

    handleSubmit(e) {
        if (this.refs.inputEmail.value === '' || this.refs.inputPassword.value === '' || this.refs.inputUsername.value === '') {
            alert("You have left a field empty");
        }
        else {
            this.setState({
                values: {
                    email: this.refs.inputEmail.value,
                    username: this.refs.inputUsername.value,
                    password: this.refs.inputPassword.value,
                }
            });

            console.log(this.refs.inputEmail.value, this.refs.inputUsername.value, this.refs.inputPassword.value);
        }
        let signUpAPI = "http://localhost:3001/signup"
        let apiPayload = {

            email: this.refs.inputEmail.value,
            username: this.refs.inputUsername.value,
            password: this.refs.inputPassword.value,

        }

        axios.post(signUpAPI, apiPayload)
            .then(res => {
                // alert(res.data.msg);
                this.setState({
                    result: res.data.result
                })
                this.props.sendResult(res.data.result)
            })
            .catch(err => {
                console.error(err);
            });


        e.preventDefault();
    }

    render() {
        return (
            //Use columns for the login page instead of margins
            <Router>
                <div class="text-center container" data-gr-c-s-loaded="true">
                    <form class="form-signin m-10" onSubmit={this.handleSubmit.bind(this)}>
                        <a href="/"> <img class="mb-4 mt-4"
                                          src="http://logo-logos.com/wp-content/uploads/2016/10/Freelancer_logo.png"
                                          alt="" width="250" height="70"/> </a>
                        <h1 class="h3 mb-3 font-weight-normal">Please Log In</h1>
                        <label for="inputEmail" class="sr-only">Enter Email address</label>
                        <input type="email" id="inputEmail" ref="inputEmail" class="form-control"
                               placeholder="Email address" required="" autofocus=""/>
                        <label for="inputPassword" class="sr-only">Enter Password</label>
                        <input type="password" id="inputPassword" ref="inputPassword" class="form-control"
                               placeholder="Password" required=""/>
                        <div class="checkbox mb-3">
                            {/*<label for="inputRemember" class="sr-only"> Remember me </label>
                            <input type="checkbox" id="inputRemember" value="remember-me" />*/}


                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>

                        <div class="mt-3">

                            <span class="login-form-signup-link">
                                Not a Freelancer member? &nbsp;
                                <a href="/signup" class="switch-to-login">Sign up</a>
                            </span>
                        </div>
                    </form>


                </div>
            </Router>

        );
    }
}

export default Login;
