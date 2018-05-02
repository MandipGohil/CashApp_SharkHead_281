var mongoose= require('mongoose');

var Schema=mongoose.Schema

var addMoneySchema =new Schema({
    Card_Number:{
        type :Number,
        
    },
   email_address:{
        type :String,
        required:true
    },
    CVV:{
        type:Number,
        
    },
    Amount:{
        type:Number,
        required:true
    },
    Addedby:{
        type :String,
        required:true
    }
    });

    module.exports =mongoose.model('addmoney',addMoneySchema,'AddMoney');


