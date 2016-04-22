me = this;
var mysql = require('../DB/mysql.js');
var logger = require('../Log/log.js');
var msql = require('mysql');
var _ = require('underscore');
var fs = require('fs');
var SQLFilter = require('./SQLFilter.js');
var config = JSON.parse(fs.readFileSync('./app/Helper/config.json', 'utf8'));
function mysqlconn(){
    return msql.createConnection({
          host     : config.DBHost,
          user     : config.DBUser,
          password : config.DBPass,
          database : config.DBName
    });
}
module.exports = {
    Insert : function (table, data, callback){
        var cnt = 0;
        var SQLkey = "";
        var SQLdata = "";
        _.each(data, function(value, key) {
               if(cnt == 0){
                    SQLkey = key;
                    SQLdata = "'" + value + "'";
               }else{
                   SQLkey = SQLkey + ", " + key;
                   SQLdata = SQLdata + ", '" + value + "'";
               }
            cnt++;
        });
        var cmdSQL = "INSERT INTO " + table + "(" + SQLkey + ")" + " VALUES(" + SQLdata + ")";
        logger.info("Execute: " + cmdSQL);
        var conn = mysqlconn();
        conn.query(cmdSQL, function(err, rows){
            callback(data);
        });
    },
    Update : function (table, data, filter) {
        
    },
    Delete : function (table, filter, callback) {
        var SQLCmd = "DELETE FROM " + table;
        if(filter){
            SQLCmd = "DELETE FROM " + table + " WHERE" + SQLFilter.Filter(filter);
        }
        var conn = mysqlconn();
        conn.query(SQLCmd, function(err, rows){
            callback(rows);
        });
    },
    Select : function (table, filter, callback) {
        var SQLCmd = "SELECT * FROM " + table;
        if(filter){
            SQLCmd = "SELECT * FROM " + table + " WHERE" + SQLFilter.Filter(filter);
        }
        logger.info('Execute: ' + SQLCmd);
        var conn = msql.createConnection({
          host     : config.DBHost,
          user     : config.DBUser,
          password : config.DBPass,
          database : config.DBName
        });
        var ret = null;
        
        conn.query(SQLCmd, function(err, rows){
            logger.info(JSON.stringify(rows));
            callback(rows);
        });
        //conn.release();
        //var uvrun = require("uvrun");
    }
};