// on routes that end in /bears
// ----------------------------------------------------
var logger = require('../Helper/Log/log.js');
var Artwork     = require('../models/artwork');
var express = require('express');
var md5 = require('md5');
module.exports = (function() {
    'use strict';
    var artworks = express.Router();
    artworks
        .post('/artwork/upload', function(req, res) {
            var artwork = new Artwork();      // create a new instance of the Bear model
            var uaw;
            artwork.user = req.body.user;
            artwork.title = req.body.title;
            artwork.price = req.body.price;
            artwork.width = req.body.width;
            artwork.height = req.body.height;
            artwork.availability = req.body.availability;
            artwork.genre = req.body.genre;
            artwork.type = req.body.type;

            if (!req.files) {
                res.send('No files were uploaded.');
                return;
            }
            var imgsrc = md5(Date.now);
            imgsrc = imgsrc + req.body.title;
            imgsrc = md5(imgsrc);
            uaw = req.files.file;
            artwork.src = './data/' + imgsrc + '.jpg'; 
            uaw.mv('./data/' + imgsrc + '.jpg' , function(err) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    artwork.save(function(err){
                        if(err) throw err;

                        res.json({message : "Image uploaded", code : 200});
                    });
                }
            });
        })
        .get('/artwork', function(req, res) {
            Artwork.find(function(err, data) {
                if (err) {
                    res.send(err);
                }else{
                    res.json(data);
                }
            });
        })
        .get('/artwork/:user', function(req, res) {
            Artwork.find({user : req.params.user }, function(err, data) {
                if (err) {
                    res.send(err);
                }else{
                    res.json(data);
                }
            });
        })
    ;
    
    return artworks;
})();