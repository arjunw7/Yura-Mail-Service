"use strict";
var nodemailer = require("nodemailer");
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send("Mail server started.")
})

app.post('/mail', function(req, res) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yura.agency@gmail.com',
            pass: '13bcb0062'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Dennis Roelfsen 👻" <dennis@yura.agency>', // sender address
        to: "dennis@yura.agency", // list of receivers
        subject: "noreply@yura.agency - Arjun Wadhws", // Subject line
        text: "Hi Dennis, \nMy name is " + req.body.name + ". I work for " + req.body.company + " and I am in need of a partner to assist me with " + req.body.message + ". You can reach me at " + req.body.email + " or " + req.body.phone + " to get the conversation started.\n\nThanks!"
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function() {
        res.sendStatus(200)
    })
})

app.listen(8004, function() {
    console.log("Server started at port 8004")
})