var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userId:String,
  userName:String
});

var UserModel = mongoose.model('User',userSchema);
module.exports = UserModel;