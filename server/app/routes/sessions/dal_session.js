var SQL = require('../../Helper/SQL/SQL.js');
var SQLFilter = require('../../Helper/SQL/SQLFilter.js');
var logger = require('../../Helper/Log/log.js');
var crypto = require('crypto');
var dateFormat = require('dateformat');
module.exports = {
    getUserBySID : function(sid, callback){
        var filter = [
            {
                type : SQLFilter.NONE,
                value : sid,
                operator : SQLFilter.Equal,
                key : 'sid'
            }
        ];
        SQL.Select('SESSION', filter, function(data){
            callback(data);
        });
    },
    authenticate : function(email, pass, callback){
        logger.info("Authenticate");
        var hash = crypto.createHash('md5').update(pass).digest("hex");
        var filter = [
            {
                type : SQLFilter.NONE,
                value : email,
                operator : SQLFilter.Equal,
                key : 'email'
            },
            {
                type : SQLFilter.AND,
                value : hash,
                operator : SQLFilter.Equal,
                key : 'password'
            }
        ];
        SQL.Select('USER', filter, function(data){
            logger.info(data);
            if(data.length == 1){
                data = data[0];
                logger.info(data.id_user);
                logger.info('Authenticate Success !');
                var filter2 = [
                    {
                        type : SQLFilter.NONE,
                        value : data.id_user,
                        operator : SQLFilter.Equal,
                        key : 'fk_user'
                    }
                ] 
                SQL.Delete('SESSION', filter2, function(dat){
                    var now = new Date();
                    var sid = data.id_user + dateFormat(now, "yyyymmddhMMss");
                    var cryptosid = crypto.createHash('md5').update(sid).digest("hex");
                    var sessdat = {
                        fk_user : data.id_user,
                        sid : cryptosid
                    }
                    SQL.Insert('SESSION', sessdat, function(data){
                        logger.info("SESSION STARTED");
                        callback(sessdat);
                    });
                });
            }else{
                logger.info('Authenticate Failed !');
                callback({ error : true, code : 101, message : "Authentication Failed"});
            }
        });
    },
    validateSession : function (sid, callback) {
        var filter = [
            {
                type : SQLFilter.NONE,
                value : sid,
                operator : SQLFilter.Equal,
                key : 'sid'
            }
        ];
        SQL.Select('SESSION', filter, function(data){
            if(data.length == 1){
                callback(true);
            }else{
                callback(false);
            }
        });
    },
    dropSession : function (sid, callback){
        var filter = [
            {
                type : SQLFilter.NONE,
                value : sid,
                operator : SQLFilter.Equal,
                key : 'sid'
            }
        ];
        SQL.Delete('SESSION', filter, function(data){
            if(data.length){
                callback(true);
            }
        });
    }
}