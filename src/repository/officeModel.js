
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var officeSchema = new Schema({
  rooms:[
    {
      type: Schema.Types.Object,
      ref:'Room'
    }
  ]
});

var officeModel = mongoose.model('Office',officeSchema);
module.exports = officeModel;