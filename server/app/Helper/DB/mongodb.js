// New Code
var mongo = require('mongodb');
var mongoose = require('mongoose');
module.exports = {
    connection : function() {
        return mongoose.connect('mongodb://localhost/makris');
    }
}