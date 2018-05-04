import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import {Link,withRouter} from 'react-router-dom';
import Image from "./visa-mastercard-amex.png";

class AddMoney extends Component {

    static propTypes = {
        addmoney: PropTypes.func.isRequired     //why is this piece of code???
    };
   

    state = {
        card: '',
        expiry_month:'',
        expiry_year:'',
        CVV: '',
        Name:'',
        amount:''
    };

    componentWillMount(){
        this.setState({
            card: '',
        expiry_month:'',
        expiry_year:'',
        CVV: '',
        Name:'',
        amount:''
        });

        

    }

    render() {
        
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="creditCardForm">
    <div class="heading">
        <h1>Confirm Purchase</h1>
    </div>
    <div className="payment">
        <form>
            <div className="form-group owner">
                <label for="owner">Owner</label>
                <input type="text" class="form-control" id="owner"
                 onChange={(event) => {      //setState is to change the state on some input
                    this.setState({
                        Name: event.target.value
                    });
                }}></input>
            </div>
            <div className="form-group CVV">
                <label for="cvv">CVV</label>
                <input type="text" class="form-control" id="cvv"
                 onChange={(event) => {      //setState is to change the state on some input
                    this.setState({
                        CVV: event.target.value
                    });
                }}></input>
            </div>
            <div className="form-group" id="card-number-field">
                <label for="cardNumber">Card Number</label>
                <input type="text" class="form-control" id="cardNumber"
                 onChange={(event) => {      //setState is to change the state on some input
                    this.setState({
                        card: event.target.value
                    });
                }}></input>
            </div>
            <div className="form-group" id="card-number-field">
                <label for="cardNumber">Amount</label>
                <input type="text" class="form-control" id="cardNumber"
                 onChange={(event) => {      //setState is to change the state on some input
                    this.setState({
                    amount: event.target.value
                    });
                }}></input>
            </div>
            <div className="form-group" id="expiration-date">
                <label>Expiration Date</label>
                <select id="month">
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                
                <select id="year">
                    <option value="16"> 2016</option>
                    <option value="17"> 2017</option>
                    <option value="18"> 2018</option>
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
                </select>
               
            </div>
            <div className="form-group" id="credit_cards">
                <img src={Image} height="80" width="250"id="visa"></img>
                
            </div>
            <div className="form-group" id="pay-now">
                <button type="button" className="btn btn-primary"
               onClick={() => this.props.addmoney(this.state)}
                >Confirm</button>
            </div>
        </form>
    </div>
</div>
</div>
        );
    }
}

export default withRouter(AddMoney);