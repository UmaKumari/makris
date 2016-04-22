var SQL = require('../../Helper/SQL/SQL.js');
var SQLFilter = require('../../Helper/SQL/SQLFilter.js');
var inbox = require('inbox');
var logger = require('../../Helper/Log/log.js');
var dal = ('./dal_mail.js');
function getClient(){
   return inbox.createConnection(false, "webmail.schaper.li", {
        secureConnection: false,
        auth:{
            user: "fabian@schaper.li",
            pass: "1ILVane2"
        }
    }); 
}
function checkFlag(flag, message){
    message.forEach(function(data){
        if(data == flag){
            return true;
        }
    });
    return false;
}

module.exports = {
    getClient : function() {
        return inbox.createConnection(false, "webmail.schaper.li", {
            secureConnection: false,
            auth:{
                user: "fabian@schaper.li",
                pass: "1ILVane2"
            }
        }); 
    },
    getMailSettings: function (id_user, callback){
        var objFilter = [
            {
                type : SQLFilter.NONE,
                value : id_user,
                operator : SQLFilter.Equal,
                key : 'fk_user'
            }
        ];
        SQL.Select('IMAP', objFilter, function(rows){
            callback(rows);
        });
    },
    getMails: function (mailbox, count, callback){
        if(count > 0){
            count = count * -1;
        }
        var client = getClient();
        client.connect();
        client.on("connect", function(){
            client.openMailbox(mailbox, function(error, info){
                if(error) throw error;
                logger.info(info);
                client.listMessages(count, function(err, messages){
                    if(err) throw err;
                    client.close();
                    callback(messages);
                });
            });
        });
    },
    getMail : function (uid, callback){
        var client = getClient();
        client.connect();
        client.on("connect", function(){
            client.openMailbox("INBOX", function(error, info){
                client.fetchData(uid, function(error, message){
                    logger.info(message);
                    var msg = "";
                    logger.info(client.createMessageStream(uid).pipe(process.stdout, {end: false}));
                    client.createMessageStream(uid).on('data', function(chunk) {
                        msg += chunk;
                    });
                    client.createMessageStream(uid).on('end', function() {
                        callback(msg);
                    });
                });
            });
        });
    },
    setFlag : function (uid, flag, callback){
        var client = getClient();
        client.connect();
        client.on("connect", function(){
            client.openMailbox("INBOX", function(error, info){
                client.addFlags(uid, flag, function(err, flags){
                    console.log("Current flags for a message: ", flags);
                    client.close();
                    callback(flags);
                });
            });
        });
    },
    getByFlag : function (flag, callback){
        var client = getClient();
        client.connect();
        var msgs = [];
        var i = 0;
        client.on("connect", function(){
            client.openMailbox("INBOX", function(error, info){
                client.search({keyword: 'TODO'}, function(err, data){
                    logger.info(data);
                    logger.info(data.length);
                    data.forEach(function(dat){
                        logger.info(dat);
                        client.fetchData(dat, function(error, message){
                            if(error) throw error;
                            logger.info(message);
                            i++;
                            if(i == data.length){
                                //client.close();
                                logger.info(msgs);
                                callback(msgs);
                            }
                        });
                    });
                });
            });
        });
    },
    removeFlag : function (uid, flag, callback){
        var client = getClient();
        client.connect();
        client.on("connect", function(){
            client.openMailbox("INBOX", function(error, info){
                client.removeFlags(uid, [flag], function(error, flags){
                    callback(flags);
                    client.close();
                });
            });
        });
    },
    onMail : function (callback){
        var client = getClient();
        client.connect();
        client.on("connect", function(){
            client.openMailbox("INBOX", function(error, info){
                client.on("new", function(message){
                    logger.info("New E-Mail :" + message.title);
                    callback(message);
                });
            });
        });
    }
}