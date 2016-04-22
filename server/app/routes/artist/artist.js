var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/makris');
var db = mongoose.connection;

var artistSchema = new Schema({
  name: String,
  artist_name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String,
  img_url: String,
  email: String
});
var Artist = mongoose.model('artist', artistSchema);
db.on('error', console.error.bind(console, 'connection error:'));
module.exports = {
    create : function(a, callback) {
        db.once('open', function(){
            var art = new Artist(a);
            art.save(function(err){
                if(err) throw err;
                callback;
            });
        });
    }
    
} 