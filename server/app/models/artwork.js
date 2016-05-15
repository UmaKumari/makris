var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ArtworkSchema   = new Schema({
    user: { type : String },
    title: { type : String },
    price: { type : Number },
    height: { type : Number },
    width: { type : Number },
    availability: { type : Number },
    genre : { type : String },
    type : { type : String },
    story : { type : String },
    tags : { type : [String]}, 
    created : { type : Date },
    ts : { type : Date, default : Date.now },
    src : { type : String }
});
module.exports = mongoose.model('Artwork', ArtworkSchema);