var dal = require('./dal_whatsapp.js');
module.exports = {
    sendMessage : function(userid, message){
        dal.sendMessage(userid, message);
    }
}