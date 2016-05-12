// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var md5 = require('md5');
var multer  =   require('multer');
var logger = require('./app/Helper/Log/log.js')
var mongoose   = require('mongoose');
var fileUpload = require('express-fileupload');
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./app/config/baseconfig.json', 'utf8'));


mongoose.connect('mongodb://localhost:27017/makris', {user: "appadmin", pass: "appadmin"}); // connect to our database


//multer init
//models
var Artist     = require('./app/models/artist');
var Newsletter     = require('./app/models/newsletter');
var Session     = require('./app/models/session');
var Artwork     = require('./app/models/artwork');

//routes
var bears = require('./app/routes/bear');
var artists = require('./app/routes/artist');
var sessions = require('./app/routes/session');
var newsletter = require('./app/routes/newsletter');
var artworks = require('./app/routes/artwork');
var messages = require('./app/routes/message');



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
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
var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(config.apibase, bears);
app.use(config.apibase, artists);
app.use(config.apibase, router);
app.use(config.apibase, sessions);
app.use(config.apibase, newsletter);
app.use(config.apibase, artworks);
app.use(config.apibase, messages);
// START THE SERVER
// =============================================================================
app.listen(port);
logger.info('Magic happens on port ' + port);