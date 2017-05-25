var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var slotSchema = new Schema({
  startsAt : Date,
  endsAt: Date
});

var SlotModel = mongoose.model('Slot',slotSchema);

module.exports = SlotModel;