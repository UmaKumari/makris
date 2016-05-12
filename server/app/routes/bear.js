// on routes that end in /bears
// ----------------------------------------------------
var logger = require('../Helper/Log/log.js');
var Bear     = require('../models/bear');
var express = require('express');
module.exports = (function() {
    'use strict';
    var bears = express.Router();
    bears
        .post('/bears', function(req, res) {

            var bear = new Bear();      // create a new instance of the Bear model
            bear.name = req.body.name;  // set the bears name (comes from the request)

            // save the bear and check for errors
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear created!' });
            });

        })
        .get('/bears', function(req, res) {
            Bear.find(function(err, bears) {
                if (err)
                    res.send(err);

                res.json(bears);
            });
        })
    ;
    
    return bears;
})();