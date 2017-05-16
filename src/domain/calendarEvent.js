var uuid = require('uuid');

function CalendarEvent(title, description, slot, user) {
  var id = uuid();
  var title = title;
  var description = description;
  var slot = slot;
  var createdBy = user;

  return {
    id: id,
    title: title,
    description: description,
    slot: slot,
    createdBy: createdBy
  };
}
module.exports = CalendarEvent;