var DAL = require('./dal_chats.js');
module.exports = {
    getChatsByUser : function(id_user, callback){
        DAL.getChatsByUser(id_user, function(data){
            callback(data);
        });
    },
    getPartnerList : function(id_user, callback){
        DAL.getPartnerList(id_user, function(data){
            callback(data);
        });
    }
}