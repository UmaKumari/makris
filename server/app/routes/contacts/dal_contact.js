var SQL = require('../../Helper/SQL/SQL.js');
var SQLFilter = require('../../Helper/SQL/SQLFilter.js');
var logger = require('../../Helper/Log/log.js');
var crypto = require('crypto');
var dateFormat = require('dateformat');
module.exports = {
    getFriends : function(uid, callback){
        var filter = [
            {
                type : SQLFilter.NONE,
                value : uid,
                operator : SQLFilter.Equal,
                key : 'id_user'
            }
        ];
        SQL.Select('V_FRIENDS', filter, function(data){
            callback(data);
        });
    }
}