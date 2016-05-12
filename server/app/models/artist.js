var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ArtistSchema   = new Schema({
    first_name: String,
    last_name: String,
    artist_name: { type : String },
    email: { type : String , unique : true, required : true },
    password: String,
    img_url: String,
    artist_type: { type: String, enum: ['SA', 'A', 'HA'] },
    account_type: { type: String, enum: ['standard', 'premium']},
    place: String,
    story: String,
    created : { type : Date, default: Date.now },
    active: { type : Boolean, default: true },
    confirmed: { type : Boolean, default: false},
    admin: { type : Boolean, default: false},
    approved: { type : Boolean, default: false },
    following: [ 
                    { 
                        artist : { type : String, unique : true }, 
                        ts : { type : Date, default: Date.now } 
                    }
                ],
    payment: {
        paypal: {
            currency : String,
            receiver : String
        },
        credit_card: {
            type: String,
            number: String,
            expire_month: String,
            expire_year: String,
            cvv2: String,
            first_name: String,
            last_name: String,
            billing_address: {
                  line1: String,
                  city: String,
                  state: String,
                  postal_code: String,
                  country_code: String 
            }  
        }
    },
    delivery :  {
        policy : String,
        to : [
            {
                country: String,
                cost: String,
                currency: String
            }
        ]
    },
    skills : [
        {
            name : String
        } 
    ]
});

module.exports = mongoose.model('Artist', ArtistSchema);