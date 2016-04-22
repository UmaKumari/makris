var artist = require('../../routes/artist/artist.js');
var logger = require('../../Helper/Log/log.js');
module.exports = function(app){
    //=========================================================
    //======================= ARTIST ========================
    app.post('/artist', function(req, res){
        logger.info("post /artist");
        artist.create(req.body, function(){
           log.info("Artist added"); 
           res.send("OK");
        });
    });
}