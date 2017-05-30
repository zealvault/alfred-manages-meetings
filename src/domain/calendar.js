var CalendarDto = require('../repository/calendarModel');

function Calendar() {
  var events = [];


  function addEvent(event) {
    if (isAvailable(event.slot)) {
      events.push(event);
    } else {
      throw new Error(`Room is already booked for slot ${event.slot.startsAt} to ${event.slot.endsAt}.`);
    }
  }

  function removeEvent(eventId) {
    events = events.filter(e => e.id != eventId);
  }

  function getEvents() {
    return Object.assign([], events);
  }

  function isAvailable(slot) {
    var conflictingEvent = events.find(function (event) {
      return event.slot.fallsInSlot(slot);
    });
    return !conflictingEvent;
  }

  function toDto() {
    var eventsDto = [];
    events.map(e => eventsDto.push(e.toDto()));
    return new CalendarDto(eventsDto);
  }

  return {
    addEvent: addEvent,
    getEvents: getEvents,
    isAvailable: isAvailable,
    removeEvent: removeEvent,
    toDto: toDto
  };
}
module.exports = Calendar;