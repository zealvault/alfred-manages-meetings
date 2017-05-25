var mongoose = require('mongoose');
var calendarModel = require('./calendarModel');

var Schema = mongoose.Schema;

var roomSchema = new Schema({
  name : String,
  calendar : {
   type: Schema.Types.Object,
   ref: 'Calendar' 
  }
});

var roomModel = mongoose.model('Room',roomSchema);
module.exports = roomModel;