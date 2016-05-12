var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SessionSchema   = new Schema({
    user: { type : String, unique : true },
    sid: { type : String, unique : true },
    ts: { type : Date, default : Date.now }
});

module.exports = mongoose.model('Session', SessionSchema);