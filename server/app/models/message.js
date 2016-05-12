var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MessageSchema   = new Schema({
    from: String,
    to: String,
    message: String,
    confirmed: { type : Boolean, default: false },
    ts: { type : Date, default : Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);