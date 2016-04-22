var dal = require('./dal_session.js');
module.exports = {
    authenticate : function(sid, callback){
        dal.validateSession(sid, function(bool){
            callback(bool);
        });
    }
}