// on routes that end in /bears
// ----------------------------------------------------
var logger = require('../Helper/Log/log.js');
var Session     = require('../models/session');
var Artist     = require('../models/artist');
var express = require('express');
var md5 = require('md5');
module.exports = (function() {
    'use strict';
    var sessions = express.Router();
    sessions
        .post('/login', function(req, res) {
            var artist = new Artist();      // create a new instance of the Bear model
            console.log(JSON.stringify(req.body));
            var session = new Session;
            // save the bear and check for errors
            Artist.find({ email : req.body.email, password : md5(req.body.password) }, function (err, docs) {
                if(docs[0]){
                    var sid = md5(Date.now.toString());
                    sid = sid + docs[0]._id;
                    sid = md5(sid);
                    var session = new Session();
                    session.sid = sid;
                    session.user = docs[0]._id;
                    Session.remove({ user : docs[0]._id }, function(err){
                        session.save(function(err){
                            var ret = {
                                _id : docs[0]._id,
                                name : docs[0].name,
                                email : docs[0].email,
                                artist_name : docs[0].artist_name,
                                sid : sid,
                                following : docs[0].following,
                                admin : docs[0].admin
                            };
                            res.json(ret);
                        });
                    });
                }
            });
        })
        .get('/logout', function(req, res) {
            Session.remove({sid : req.query.sid}, function(err){
                if(err) throw err;
                logger.info("Session : " + req.query.sid + " quitted");
                res.json({message : "Session : " + req.query.sid + " quitted", code : 200});
            });
        })
        .get('/session', function(req, res) {
            Session.find(function(err, data) {
                if (err)
                    res.send(err);

                res.json(data);
            });
        })
    ;
    
    return sessions;
})();