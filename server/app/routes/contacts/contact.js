var dal = require('./dal_contact.js');
module.exports = {
    getContacts : function(uid, callback){
        dal.getFriends(uid, function(data){
            callback(data);
        });
    }
}