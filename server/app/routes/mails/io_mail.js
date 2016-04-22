var dal = require('./dal_mail.js');

module.exports = {
    onMail : function(callback){
        dal.onMail(function(msg){
            callback(msg);
        });
    }
}
