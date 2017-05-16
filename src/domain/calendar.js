function Calendar() {
  var events = [];


  function addEvent(event) {
    if (isAvailable(event.slot)) {
      events.push(event);
    } else {
      throw new Error(`Room is already booked for slot ${event.slot.startsAt} to ${event.slot.endsAt}.`);
    }
  }

  function removeEvent(eventId){
    events =  events.filter(e => e.id != eventId);
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

  return {
    addEvent: addEvent,
    getEvents: getEvents,
    isAvailable: isAvailable,
    removeEvent: removeEvent
  };
}
module.exports = Calendar;