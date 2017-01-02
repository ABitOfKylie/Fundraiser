var mongoose = require('mongoose');
    Schema = mongoose.Schema;


var UserSchema = Schema({
    displayName: {
        type: String
    },
    image: {
        type: String
    },
    email: {
        type: String
    },
    // Mixed see mongoose doc. for prod. Since it is a schema-less type, 
    // you can change the value to anything else you like, 
    // but Mongoose loses the ability to auto detect and save those changes. 
    // To "tell" Mongoose that the value of a Mixed type has changed, 
    // call the .markModified(path) method of the document 
    // passing the path to the Mixed type you just changed.
    facebook: {
        type: Object
    },
    twitter: {
        type: Object
    },
    google: {
        type: Object
    }
});

module.exports = mongoose.model('User', UserSchema);
