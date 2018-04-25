var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var users= require('./users.js');
//database connection
var mongoose = require('mongoose');
var addmoney=require('../models/addmoney.js')
var bid1=require('../models/bid.js')
var db='mongodb://shahakshat:Axtshah14@ds223509.mlab.com:23509/freelancer';
mongoose.Promise=global.Promise;
mongoose.connect(db,function(err)
{
  if(err)
  {
    console.log("Error" +err);
  }
  else{
    console.log("Connected to Mongodb");
  }
})


router.post('/addmoney', function(req,res)
{
  if(req.session.email)
  {
  console.log("Post Money API called");
  console.log(req.body);

 
  //var email= req.param('email_address'); 
  var addmoney1=new addmoney();  
  addmoney1.Card_Number=req.body.card;
  addmoney1.email_address=req.session.email;
  addmoney1.CVV=req.body.CVV;
  addmoney1.Addedby=req.session.email;
  addmoney1.Amount=req.body.amount;
  console.log("Parameters taken successfully");
  addmoney1.save(function(err, insertedproj)
{
  if(err)
  {
    console.log("Data not inserted into project collection");
    res.json("Payment Posted unsuccessfully");
  }
  else
  {
    res.json("Payment posted sucessfully");
    console.log("Payment posted sucessfully");
  }
})
      
  }
  else{
      res.json("Login First");
      }

});


router.post('/paymoney', function(req,res)
{
  if(req.session.email)
  {
  console.log("Payment Money API called");
  console.log(req.body);

 
  var currentbalance=req.body.currentbalance;
  var amount=req.body.amount;
  if(currentbalance>=amount)
  {

  
  var addmoney12=new addmoney();  
  addmoney12.Card_Number=req.body.card;
  addmoney12.email_address=req.body.Name;
  addmoney12.CVV=req.body.CVV;
  addmoney12.Addedby=req.session.email;
  addmoney12.Amount=req.body.amount;
  console.log("Parameters taken successfully");
  addmoney12.save(function(err, insertedproj)
{
  if(err)
  {
    console.log("Data not inserted into project collection");
    res.json("Payment Posted unsuccessfully");
  }
  else
  {
    console.log(req.body);
    var addmoney123=new addmoney();  
  addmoney123.Card_Number=req.body.card;
  addmoney123.email_address=req.session.email;
  addmoney123.CVV=req.body.CVV;
  addmoney123.Addedby=req.body.Name;
  addmoney123.Amount=-req.body.amount;
  console.log(addmoney123.Card_Number);
  console.log(addmoney123.email_address);
  console.log(addmoney123.CVV);
  console.log(addmoney123.Addedby);
  console.log(addmoney123.Amount);



  console.log("Parameters taken successfully");
    addmoney123.save(function(err, insertedproj)
    {
      if(err)
      {
        console.log("Data not inserted into project collection");
        res.json("Payment Posted unsuccessfully");
      }
      else
      {
        res.json("Payment posted sucessfully");
        console.log("Payment posted sucessfully");
      }
    })
  }
})
  }
  else{
    res.json("Payment Failed due to low balance");
  }


      
  
}
  else{
      res.json("Login First");
      }

});

router.post('/deductmoney', function(req,res)
{
  if(req.session.email)
  {
  console.log("Deduct Money API called");
  console.log(req.body);

//var email= req.param('email_address'); 
var currentbalance=req.body.currentbalance;
  var amount=req.body.amount;
  if(currentbalance>=amount)
  {
    console.log("Condition Satisfied");
  var addmoney11=new addmoney();  
  addmoney11.Card_Number=req.body.card;
  addmoney11.email_address=req.session.email;
  addmoney11.CVV=req.body.CVV;
  addmoney11.Addedby="Transfered to bank account";
  addmoney11.Amount=-req.body.amount;
  console.log(addmoney11.Amount);
  console.log("Parameters taken successfully");
  addmoney11.save(function(err, deductmoney)
{
  if(err)
  {
    console.log("Data not inserted into project collection");
    res.json("Payment Posted unsuccessfully");
  }
  else
  {
    res.json("Payment Deducted successfully");
    console.log("Payment Deducted successfully");
  }
})
}
else{
  res.json("Payment Failed due to low balance");
}    
  }
  else{
      res.json("Login First");
      }

});


//Retreive balance and history API
router.get('/getBalance',function(req,res)
{
  

 if(req.session.email)
 {

 
   console.log(req.session.email);
   addmoney2=new addmoney();
  //newproj.email_address=req.body.email_address;
   console.log(newproj.email_address);

  console.log('Retreive balance and history API');
  addmoney.find({'email_address':req.session.email})
  .exec(function(err,bal)
{
  if(err)
  {
    console.log("error in finding data from the users");
  }
  console.log(bal);
    res.json(bal);
})
 }

else
{
res.json("Login First");
}
}
  
  

);




module.exports = router;