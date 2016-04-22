var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./app/Helper/config.json', 'utf8'));
var mysql = require('mysql');
module.exports = {
    connection : function () {
        return mysql.createConnection({
          host     : config.DBHost,
          user     : config.DBUser,
          password : config.DBPass,
          database : config.DBName
        });
    }
}