var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required.']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required.']
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'Email is required.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Username must be a valid email address']
    },
    phone: {        
        type: String,
        match: [/^\d{10}$/, 'Phone must be a valid phone number']
    },
    heardaboutus: {
        type: String,
        required: true
    },
},
{
   timestamps: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;