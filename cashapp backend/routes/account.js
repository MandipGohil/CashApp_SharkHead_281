var axios = require('axios');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var users = require('./users.js');
//database connection
var mongoose = require('mongoose');
var addmoney = require('../models/addmoney.js')
var bid1 = require('../models/bid.js')
var db = 'mongodb://cashapp:cashapp@ds215380.mlab.com:15380/cashapp';
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.log("Error" + err);
    }
    else {
        console.log("Connected to Mongodb");
    }
})


router.post('/addmoney', function (req, res) {
    if (req.session.email) {
        console.log("Post Money API called");
        // console.log(req.body);

        let apiPayload = {
            Key: req.session.email
        };
//console.log(apiPayload.ID);
//console.log(apiPayload.Value);
//         console.log(apiPayload);
        let GoUrl = "http://52.53.126.123:3000/redis_get";

        axios.post(GoUrl, apiPayload)
            .then((result) => {
                console.log("Go API hit");
                console.log(result.data);

                apiPayload.Value = {
                    ...result.data.Value,
                    balance: parseInt(req.body.amount) + parseInt(result.data.Value.balance)
                };
                console.log(apiPayload);
                let GoUrl = "http://52.53.126.123:3000/redis_set";

                axios.post(GoUrl, apiPayload)
                    .then((result) => {
                        console.log("Go API hit");
                        console.log(result.data);
                        res.json("Payment posted sucessfully");
                    })
            })
            .catch(err => {
                console.log(err);
                res.json("Unsuccessful");

            })

        //var email= req.param('email_address');

    }
    else {
        res.json("Login First");
    }

});


router.post('/paymoney', function (req, res) {
    if (req.session.email) {
        console.log("Payment Money API called");
        // console.log(req.body);


        let apiPayload = {
            Key: req.session.email
        };
//console.log(apiPayload.ID);
//console.log(apiPayload.Value);
//         console.log(apiPayload);

        let GoUrl = "http://52.53.126.123:3000/redis_get";
        if (req.body.Name === req.session.email) {
            res.json("Payment Posted unsuccessfully");
        }

        axios.post(GoUrl, apiPayload)
            .then((result) => {
                console.log("Go API hit");
                console.log(result.data);

                let givenBy = result.data;

                // console.log(apiPayload);
                // get the user to send him
                let apiPayload2 = {
                    Key: req.body.Name
                };
                let GoUrl = "http://52.53.126.123:3000/redis_get";

                axios.post(GoUrl, apiPayload2)
                    .then((result) => {
                        console.log(result.data);

                        let givenTo = result.data;

                        if (givenBy.Value.balance > 0) {
                            console.log("aaj1");
                            if (parseInt(req.body.amount) > parseInt(givenBy.Value.balance)) {
                                let GoUrl = "http://52.53.126.123:3000/redis_set";

                                let saveGiveTo = {
                                    Key: givenTo.Key,
                                    Value: {
                                        ...givenTo.Value,
                                        balance: parseInt(givenTo.Value.balance) + parseInt(req.body.amount)
                                    }
                                };
                                axios.post(GoUrl, saveGiveTo)
                                    .then((result) => {
                                        console.log(result.data);
                                        res.json("Payment posted sucessfully");
                                    })
                            } else {
                                let GoUrl = "http://52.53.126.123:3000/redis_set";

                                let saveGiveBy = {
                                    Key: givenBy.Key,
                                    Value: {
                                        ...givenBy.Value,
                                        balance: parseInt(givenBy.Value.balance) - parseInt(req.body.amount)
                                    }
                                };
                                let saveGiveTo = {
                                    Key: givenTo.Key,
                                    Value: {
                                        ...givenTo.Value,
                                        balance: parseInt(givenTo.Value.balance) + parseInt(req.body.amount)
                                    }
                                };
                                axios.post(GoUrl, saveGiveTo)
                                    .then((result) => {
                                        console.log(result.data);
                                        axios.post(GoUrl, saveGiveBy)
                                            .then((result) => {
                                                console.log(result.data);
                                                res.json("Payment posted sucessfully");
                                            })
                                    })

                            }
                        } else {
                            let GoUrl = "http://52.53.126.123:3000/redis_set";

                            let saveGiveTo = {
                                Key: givenTo.Key,
                                Value: {
                                    ...givenTo.Value,
                                    balance: parseInt(givenTo.Value.balance) + parseInt(req.body.amount)
                                }
                            };
                            axios.post(GoUrl, saveGiveTo)
                                .then((result) => {
                                    console.log(result.data);
                                    res.json("Payment posted sucessfully");
                                })
                        }

                    })
            })
            .catch(err => {
                console.log(err);
                res.json("Unsuccessful");

            });

        //var email= req.param('email_address');

        //
        // var currentbalance = req.body.currentbalance;
        // var amount = req.body.amount;
        // if (currentbalance >= amount) {
        //
        //
        //     var addmoney12 = new addmoney();
        //     //addmoney12.Card_Number=req.body.card;
        //     addmoney12.email_address = req.body.Name;
        //     //addmoney12.CVV=req.body.CVV;
        //     //addmoney12.Addedby=req.session.email;
        //     addmoney12.Amount = req.body.amount;
        //     console.log("Parameters taken successfully");
        //     addmoney12.save(function (err, insertedproj) {
        //         if (err) {
        //             console.log("Data not inserted into project collection");
        //             res.json("Payment Posted unsuccessfully");
        //         }
        //         else {
        //             console.log(req.body);
        //             var addmoney123 = new addmoney();
        //             addmoney123.Card_Number = req.body.card;
        //             addmoney123.email_address = req.session.email;
        //             addmoney123.CVV = req.body.CVV;
        //             addmoney123.Addedby = req.body.Name;
        //             addmoney123.Amount = -req.body.amount;
        //             console.log(addmoney123.Card_Number);
        //             console.log(addmoney123.email_address);
        //             console.log(addmoney123.CVV);
        //             console.log(addmoney123.Addedby);
        //             console.log(addmoney123.Amount);
        //
        //
        //             console.log("Parameters taken successfully");
        //             addmoney123.save(function (err, insertedproj) {
        //                 if (err) {
        //                     console.log("Data not inserted into project collection");
        //                     res.json("Payment Posted unsuccessfully");
        //                 }
        //                 else {
        //                     res.json("Payment posted sucessfully");
        //                     console.log("Payment posted sucessfully");
        //                 }
        //             })
        //         }
        //     })
        // }
        // else {
        //     res.json("Payment Failed due to low balance");
        // }


    }
    else {
        res.json("Login First");
    }

});

router.post('/deductmoney', function (req, res) {
    if (req.session.email) {
        console.log("Deduct Money API called");
        console.log(req.body);

//var email= req.param('email_address');
        let apiPayload = {
            Key: req.session.email
        };
//console.log(apiPayload.ID);
//console.log(apiPayload.Value);
//         console.log(apiPayload);
        let GoUrl = "http://52.53.126.123:3000/redis_get";

        axios.post(GoUrl, apiPayload)
            .then((result) => {
                console.log("Go API hit");
                console.log(result.data);

                apiPayload.Value = {
                    ...result.data.Value,
                    balance: 0
                };
                console.log(apiPayload);
                let GoUrl = "http://52.53.126.123:3000/redis_set";

                axios.post(GoUrl, apiPayload)
                    .then((result) => {
                        console.log("Go API hit");
                        console.log(result.data);
                        res.json("Payment Deducted successfully");
                    })
            })
            .catch(err => {
                console.log(err);
                res.json("Payment Posted unsuccessfully");

            });
    }
    else {
        res.json("Login First");
    }

});


//Retreive balance and history API
router.get('/getBalance', function (req, res) {


        if (req.session.email) {


            console.log(req.session.email);
            // addmoney2 = new addmoney();
            //newproj.email_address=req.body.email_address;
            //console.log(newproj.email_address);

            console.log('Retreive balance and history API');

            let apiPayload = {
                Key: req.session.email
            };

            console.log(apiPayload);
            let GoUrl = "http://52.53.126.123:3000/redis_get";

            axios.post(GoUrl, apiPayload)
                .then((result) => {
                    console.log("Go API hit");
                    // console.log(result);
                    res.json(result.data.Value);
                })
                .catch(err => {
                    console.log(err);
                    res.json("Login Unsuccessful");

                })


        }

        else {
            res.json("Login First");
        }
    }
);


module.exports = router;