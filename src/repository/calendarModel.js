var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var calendarSchema = new Schema({
  events:[
    {
      type: Schema.Types.Object,
      ref:'Event'
    }
  ]
});

var calendarModel = mongoose.model('Calendar',calendarSchema);
module.exports = calendarModel;