// on routes that end in /bears
// ----------------------------------------------------
var logger = require('../Helper/Log/log.js');
var Message     = require('../models/message');
var Session     = require('../models/session');
var express = require('express');
module.exports = (function() {
    'use strict';
    var messages = express.Router();
    messages
        .post('/message', function(req, res) {

            var message = new Message();      // create a new instance of the Bear model
            message.message = req.body.message;  // set the bears name (comes from the request)
            message.from = req.body.from;
            message.to = req.body.to;
            // save the bear and check for errors
            message.save(function(err) {
                if (err) {
                    res.send(err);
                }else{
                    res.json({ message: 'Message sent !', code : 200 });
                }
            });

        })
        .get('/message', function(req, res) {
            Session.find({ sid: req.query.sid}, function(err, data) {
                Message.find({}, function(err, data){
                    if (err) {
                        res.json({ message : err, code : 400 });
                    }else{
                        res.json(data);
                    }
                });
            });
        })
    ;
    
    return messages;
})();