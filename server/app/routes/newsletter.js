// on routes that end in /bears
// ----------------------------------------------------
var logger = require('../Helper/Log/log.js');
var Newsletter     = require('../models/newsletter');
var express = require('express');
module.exports = (function() {
    'use strict';
    var newsletter = express.Router();
    newsletter
        .post('/newsletter', function(req, res) {
            var newsletter = new Newsletter();      // create a new instance of the Bear model
            console.log(JSON.stringify(req.body));
            newsletter.email = req.body.email;
            // save the bear and check for errors
            newsletter.save(function(err) {
                if (err) {
                    res.json({ message : err, code : 400});
                }else{
                    res.json({ message: 'Added to newsletter !', code: 200 });
                }
            });

        })
        .get('/newsletter', function(req, res) {
            Newsletter.find(function(err, data) {
                if (err)
                    res.send(err);

                res.json(data);
            });
        })
    ;
    return newsletter;
})();