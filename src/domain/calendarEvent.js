var CalendarEventDto = require('../repository/calendarEventModel');

var uuid = require('uuid');

function CalendarEvent(title, description, slot, user) {
  var id = uuid();
  var title = title;
  var description = description;
  var slot = slot;
  var createdBy = user;

function toDto(){
  return new CalendarEventDto(id,title,description,slot.toDto(),createdBy.toDto());
}
  return {
    id: id,
    title: title,
    description: description,
    slot: slot,
    createdBy: createdBy,
    toDto: toDto
  };
}
module.exports = CalendarEvent;