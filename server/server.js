// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');         // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var logger = require('./app/Helper/Log/log.js');
var io = require('socket.io')();
var srv = require('http').createServer(app);
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var port = process.env.PORT || 8080;        // set our port
var socketport = port + 1;
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//========================= REST API =========================
//GET
require('./app/base/EXPRESS/get.js')(app);
//POST
require('./app/base/EXPRESS/post.js')(app);
//=============================================================
// =========================    socket.io  ====================
require('./app/base/SOCKET/socket.js')(srv);

// ============================================================
// START THE SERVER
app.listen(port);
srv.listen(socketport, function(){
    logger.info("socket.io listening on: " + socketport)
});
logger.info('Magic happens on port ' + port);



