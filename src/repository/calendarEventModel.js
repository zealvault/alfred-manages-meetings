var mongoose = require('mongoose');
var Slot = require('./slotModel');
var User = require('./userModel');

var Schema = mongoose.Schema;

var calendarEventSchema = new Schema({
  id: String,
  title: String,
  description: String,
  slot: {
    type: Schema.Types.Object,
    ref: 'Slot'
  },
  createdBy:{
    type:Schema.Types.Object,
    ref:'User'
  }
});

var calendarEventModel = mongoose.model('Event',calendarEventSchema);
module.exports.calendarEventModel = calendarEventModel;