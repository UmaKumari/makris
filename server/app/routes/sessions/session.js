var logger = require('../../Helper/Log/log.js');
var DAL = require('./dal_session.js');
module.exports = {
    login : function(email, pass, callback){
        DAL.authenticate(email, pass, function(data){
            if(data.sid){
                logger.info("WELCOME");
            }
            callback(data);
        });
    }
}