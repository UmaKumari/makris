var mails = require('../../routes/artist/artist.js');
var logger = require('../../Helper/Log/log.js');
module.exports = function(app){
    //=========================================================
    //========================= ARTIST =========================
    app.get('/artist', function(req, res){
        mails.getInboxMails(function(data){
            logger.info(data);
            res.json(data);
        });
    });
    //=========================================================
    //========================= TASKS =========================
}