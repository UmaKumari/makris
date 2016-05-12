// on routes that end in /artists

// ----------------------------------------------------
var logger = require('../Helper/Log/log.js');
var Artist     = require('../models/artist');
var Session     = require('../models/session');
var express = require('express');
var md5 = require('md5');

module.exports = (function() {
    'use strict';
    var artists = express.Router();
    artists
        .post('/artists', function(req, res) {
            var artist = new Artist();      // create a new instance of the Bear model
            artist.first_name = req.body.first_name;
            artist.last_name = req.body.last_name;
            artist.email = req.body.email;
            artist.artist_type = req.body.artist_type;
            artist.password = md5(req.body.password);
            // save the bear and check for errors
            artist.save(function(err) {
                if (err) {
                    logger.error(err);
                    res.send(err);
                }else{
                    res.json({ message: 'Artist created!', code: 200 });
                }
            });

        })
        .post('/artist/update', function(req, res) {
            Session.find({ sid : req.query.sid }, function(error, data){
                logger.info('sid: ' + data[0].user);
                
                
                Artist.findByIdAndUpdate(data[0].user, { $set: req.body }, {safe: true, upsert: true, new : true, multi : true},function(err, model){
                    logger.info(req.body);
                    if(err){
                       logger.error(err);
                       res.json({ message : err, code : 400});
                    }else{
                        res.json({ message: 'Artist updated!', code: 200 });
                    }
                    
                });
            });

        })
        .post('/artist/upload', function(req, res) {
            var uaw;
            if (!req.files) {
                res.send('No files were uploaded.');
                return;
            }
            uaw = req.files.file;
            var pimg = './data/profile/' + req.body.name + '.jpg'; 
            uaw.mv('./data/profile/' + req.body.name + '.jpg' , function(err) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    Artist.update({ _id : req.body.name }, { $set : { img_url : pimg }}, function(err, data){
                        if(err){
                            res.json({message : err, code : 400 });
                        }else{
                            res.json({message : "Profile picture updated", code : 200 });
                        }
                        
                    });
                }
            });
        })
        .post('/artist/exists', function(req, res) {
            Artist.find(req.body, function(error, data){
                if(error) throw error;
                logger.info(data);
                if(data.length > 0){
                    res.json({ message: true, code: 200 });
                }else{
                    res.json({ message: false, code: 200 });
                }
            });

        })
        .post('/artist/approve', function(req, res) {
            Artist.findByIdAndUpdate(req.body._id, { $set : { approved : true }}, function(error, data){
                if(error) {
                    res.json({ message: error, code: 400 });
                }else{
                    res.json({ message: 'Artist approved !', code: 200 });
                }
                    
            });

        })
        .post('/artist/follow', function(req, res) {
            Session.find({ sid : req.query.sid }, function(err, data){
                logger.info(data[0].user);
                Artist.findByIdAndUpdate(data[0].user, { 
                                                            $push : { 
                                                                    "following" : { 
                                                                                        artist : req.body._id 
                                                                                  } 
                                                                    }
                                                        },
                                                        {safe: true, upsert: true, new : true},
                                                        function(err, model) {
                                                            console.log(err);
                                                        }
                                                    );
                res.json({ message: 'Followed!', code: 200 });
            });
        })
        .get('/artists', function(req, res) {
            Artist.find(function(err, artists) {
                if (err)
                    res.send(err);

                res.json(artists);
            });
        })
        .get('/artists/approval', function(req, res) {
            Artist.find({ approved : false},function(err, artists) {
                if (err) {
                    res.json({ message : err, code : 400 });
                }else{
                    res.json(artists);      
                }
            });
        })
        .get('/artist/:uid', function(req, res) {
            logger.info('/artist/:uid');
            logger.info(req.params.uid);
            Artist.find({ _id : req.params.uid },function(err, artist) {
                if (err){
                    logger.error(err);
                    res.json({ message : err, code : 400});
                }else{
                    res.json(artist[0]);
                }
            });
        })
    ;
    
    return artists;
})();