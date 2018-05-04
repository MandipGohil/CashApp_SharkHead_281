import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import PieChart from 'react-simple-pie-chart';

class Account extends Component {

    static propTypes = {
        
    };
    state = {
        history:[],
        balance:[],
        outgoing:[],
        incoming:[],
        totalbal:''
    };
    componentWillMount(){
        API.getBalance()
        .then(bal=>{
            console.log(bal);
            for(var i=0; i<bal.length;i++)
            {
                this.state.balance=Number(this.state.balance)+Number(bal[i].Amount);
                
            }
            for(var i=0; i<bal.length;i++)
            {
                //this.state.balance=Number(this.state.balance)+Number(bal[i].Amount,10);
                if(Number(bal[i].Amount)<0)
                {
                    this.state.outgoing=Number(this.state.outgoing)+Number(bal[i].Amount);
                    
                }
                else
                {
                    this.state.incoming=Number(this.state.incoming)+Number(bal[i].Amount);
                    
                }
                
                
            }
            console.log(this.state.outgoing);
                console.log(this.state.incoming);
            this.setState(
                {
                history:bal,
                
                }
            )
            console.log(this.state.balance);
    
            
           
        }
        );

    }

    render() {
        const projectNode=this.state.history.map((balance,index)=>{
            
            return(
                   <tr key={index+1}>
                   <td className="text-left">{index+1}</td>
                   <td className="text-left">{balance._id}</td>
                   <td className="text-left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{balance.Amount}</td>
                   <td className="text-left">{balance.email_address}</td>
                   
                   
                   </tr>
                   
   
            )
             });


           var totalbal=function()
           {
               for(var i=0;i<=this.state.balance.length;i++)
               {
                   this.state.totalbal=this.state.balance[i];
                   
               }
               return (this.state.totalbal);
           }

                
             
             
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-7">
                {totalbal}
                    <form>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <h1>Account Details Summary</h1>

                            <h4>Account Balance:{this.state.balance}</h4>
                        </div>
                        <div className="form-group">
                        
                        <br/>
                        <Link to="/addcard"> <button
                                className="btn btn-primary"
                                type="button"
                                  //since this is child to NewerHomePage
                                                                                     //it cannot change state directly so using
                                                                                     //props to pass it to main class(NeweHomePage)
                                                                                     //onclick will pass the current state to main class
                                
                                >  
                                Add Money
                            </button>
                            </Link>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Link to="/withdraw"> <button
                                className="btn btn-primary"
                                type="button"
                                  //since this is child to NewerHomePage
                                                                                     //it cannot change state directly so using
                                                                                     //props to pass it to main class(NeweHomePage)
                                                                                     //onclick will pass the current state to main class
                                
                                >  
                                Withdraw Money
                            </button>
                            </Link>

                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Link to="/payment"> <button
                                className="btn btn-primary"
                                type="button"
                                  //since this is child to NewerHomePage
                                                                                     //it cannot change state directly so using
                                                                                     //props to pass it to main class(NeweHomePage)
                                                                                     //onclick will pass the current state to main class
                                
                                >  
                                Send Money
                            </button>
                            </Link>
                            </div>

                        </form>
                        <div>
                            <br/>
                            <br/>
                            <br/>
                        <h3>Transaction History</h3>
                            <table className="table table-sm table-hover">
<thead>
    <tr>
        <th>#</th>
        <th>Transaction ID</th>
        <th>Transaction Amount</th>
        <th>Added /Deducted By</th>
        
</tr>
    </thead>
    <tbody>
        {projectNode}
        
        </tbody>

        
    </table>
                            </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(Account);