var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  points: [[Number, String]]

});

var User = mongoose.model('User', UserSchema);

module.exports = User;