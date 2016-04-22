var SQL = require('../../Helper/SQL/SQL.js');
var SQLFilter = require('../../Helper/SQL/SQLFilter.js');
var crypto = require('crypto');
module.exports = {
    getChatsByUser: function (id_user, callback){
        var objFilter = [
            {
                type : SQLFilter.NONE,
                value : id_user,
                operator : SQLFilter.Equal,
                key : 'recipient'
            },
            {
                type : SQLFilter.OR,
                value : id_user,
                operator : SQLFilter.Equal,
                key : 'sender'
            } 
        ];
        SQL.Select('CHAT', objFilter, function(rows){
            callback(rows);
        });
    },
    getPartnerList: function (id_user, callback){
        var objFilter = [
            {
                type : SQLFilter.NONE,
                value : id_user,
                operator : SQLFilter.Equal,
                key : 'fk_user1',
                group : 1
            },
            {
                type : SQLFilter.OR,
                value : id_user,
                operator : SQLFilter.Equal,
                key : 'fk_user2',
                group : 1
            },
            {
                type : SQLFilter.AND,
                value : id_user,
                operator : SQLFilter.NotEqual,
                key : 'id_user'
            }
        ];
        SQL.Select('V_PARTNER', objFilter, function(rows){
            callback(rows);
        });
    }
}