var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  points: Number,
  questionSolved: [{
    qNumber: Number,
    solved: Boolean,
    solution: String
  }]

  

});

var User = mongoose.model('User', UserSchema);

module.exports = User;

