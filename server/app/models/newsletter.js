var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NewsletterSchema   = new Schema({
    email: { type : String , unique : true, required : true },
    active: { type : Boolean, default : true }
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);