import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import '../App.css';


class Signup extends Component {
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

            console.log(this.refs.inputEmail.value, this.refs.inputUsername.value, this.refs.inputPassword.value)
        }
        let signUpAPI = "http://localhost:8080/signup"
        let apiPayload = {

            "Email": this.refs.inputEmail.value,
            "Username": this.refs.inputUsername.value,
            "Password": this.refs.inputPassword.value,

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
            <Router>
                <div className="text-center container" data-gr-c-s-loaded="true">
                    <form className="form-signin m-10" onSubmit={this.handleSubmit.bind(this)}>
                        <a href="/"><img className="mb-4 mt-4"
                                         src="http://logo-logos.com/wp-content/uploads/2016/10/Freelancer_logo.png"
                                         alt="" width="250" height="70"/></a>
                        <h1 className="h3 mb-3 font-weight-normal">Sign up for free today!</h1>
                        <label className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" ref="inputEmail" className="form-control"
                               placeholder="Email address" required=""/>
                        <label className="sr-only">Username</label>
                        <input type="username" id="inputUsername" ref="inputUsername" className="form-control"
                               placeholder="Username" required=""/>
                        <label className="sr-only">Enter Password</label>
                        <input type="password" id="inputPassword" ref="inputPassword" className="form-control"
                               placeholder="Password" required=""/>
                        <div className="checkbox mb-3">
                            {/*<label for="inputRemember" className="sr-only"> Remember me </label>
                            <input type="checkbox" id="inputRemember" value="remember-me" />*/}


                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
                        <div className="mt-3">

                                    <span className="login-form-signup-link">
                                        Already a Freelancer member? &nbsp;
                                        <a href="/login" className="switch-to-login">Log In</a>
                                    </span>
                        </div>
                    </form>


                </div>

            </Router>
        );
    }

}


export default Signup;
