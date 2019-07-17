"use strict";
var nodemailer = require("nodemailer");
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
app.use(cors())


app.get('/', function(req, res) {
    res.send("Mail server started.")
})

app.post('/mail', function(req, res) {

    let transporter = nodemailer.createTransport({
        host: "smtp.transip.email",
        port: 465,
        secure: true,
        auth: {
            user: "admin@yura.agency",
            pass: "EmailAdmin2019"
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Yura Agency 👻" <noreply@yura.agency>', // sender address
        to: "dennis@yura.agency", // list of receivers
        subject: "Customer Query - Yura.agency", // Subject line
        text: "Hi Dennis, \nMy name is " + req.body.name + ". I work for " + req.body.company + " and I am in need of a partner to assist me with " + req.body.message + ". You can reach me at " + req.body.email + " or " + req.body.phone + " to get the conversation started.\n\nThanks!"
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function() {
        res.sendStatus(200)
    })
})

app.post('/blockchainQuery', function(req, res) {

    let transporter = nodemailer.createTransport({
        host: "smtp.transip.email",
        port: 465,
        secure: true,
        auth: {
            user: "admin@yura.agency",
            pass: "EmailAdmin2019"
        }
    });


    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Yura Agency 👻" <noreply@yura.agency>', // sender address
        to: "dennis@yura.agency", // list of receivers
        subject: "Blockchain Query - Yura.agency", // Subject line
        text: "Hi Dennis, \nMy name is " + req.body.fullName + ". I am from " + req.body.location + ". You can reach me at " + req.body.email + " or " + req.body.phone + " to get the conversation started.\n\nThanks!"
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function() {
        res.sendStatus(200)
    })
})

app.listen(process.env.PORT || 5000, function() {
    console.log("Server started at port 8004")
})