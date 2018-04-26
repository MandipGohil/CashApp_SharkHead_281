import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import NavBar from '../components/navbar';
import Jumbotron from '../components/jumbotron';


class PostProject extends Component {
    render() {
        return (
            <Router>
                <div className="PostProject">
                    <div class="text-left container" data-gr-c-s-loaded="true">
                        <form class="form-signin m-5">
                            {/*<a href="/"><img class="mb-5 mr-5"*/}
                                             {/*src="http://logo-logos.com/wp-content/uploads/2016/10/Freelancer_logo.png"*/}
                                             {/*alt="" width="250" height="70"/></a>*/}
                            <h1 class="h3 mb-3 font-weight-bold">Tell us what you need done</h1>
                            <h5 class="h5 mb-3 font-weight-normal"> Get free quotes from skilled freelancers within
                                minutes, view profiles, ratings and portfolios and chat with them. Pay the freelancer
                                only when you are 100% satisfied with their work.</h5>
                            <label class="h5 mt-10 mb-2 font-weight-bold">Choose a name for your project</label>
                            <input type="text" placeholder="e.g. Build me a website" class="form-control"/>
                            <label class="h5 mt-10 mb-2 font-weight-bold">Tell us more about your project</label>
                            <h6 class="h6 mb-3 font-weight-normal"> Great project descriptions include a little bit
                                about yourself, details of what you are trying to achieve, and any decisions that you
                                have already made about your project. If there are things you are unsure of, don't
                                worry, a freelancer will be able to help you fill in the blanks. </h6>
                            <textarea placeholder="Describe your project here..." rows="5"
                                      class="form-control"></textarea>
                            <div>
                <span class="btn btn-plain btn-file-uploader">
                  <span class="fl-icon-plus"></span>
                  <span id="file-upload-button-text">Upload any images or documents that might be helpful in explaining your project brief.</span>
                  <div class="mt-2 text-left">
                    <input type="file" name="upload[]" multiple="" class="fileupload-input"/>
                    <input type="hidden" name="fileset" class="upload-fileset ng-pristine ng-untouched ng-valid"
                           ng-model="FileUpload.form.fileset" value="" fl-autosave-draft=""/>
                  </div>
                </span>

                            </div>

                            <label class="h5 mt-10 mb-2 font-weight-bold">What skills are required?</label>
                            <h6 class="h6 mb-3 font-weight-normal">Enter up to 5 skills that best describe your project.
                                Freelancers will use these skills to find projects they are most interested and
                                experienced in.</h6>
                            <input type="text" placeholder="What skills are required?" class="form-control"/>

                            <div class="checkbox mb-3">
                                {/*<label for="inputRemember" class="sr-only"> Remember me </label>
                            <input type="checkbox" id="inputRemember" value="remember-me" />*/}


                            </div>
                            <button class="btn btn-lg btn-warning font-weight-bold text-white mt-10" type="submit">Post
                                my Project
                            </button>
                            <div class="mt-3">
                            </div>

                        </form>


                    </div>


                </div>
            </Router>
        );
    }
}

export default PostProject;
