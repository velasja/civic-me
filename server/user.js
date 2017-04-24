var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  district: {
    type: Number,
    min: 1,
    max: 10
  },
  password: {
    type: String
  }  
});

// See passport-local-mongoose docs for schema customization options
// https://github.com/saintedlama/passport-local-mongoose#options
User.plugin(passportLocalMongoose, {
  usernameField: 'username',
  usernameUnique: true
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
