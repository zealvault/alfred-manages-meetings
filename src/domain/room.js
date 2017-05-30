var RoomDto = require('../repository/roomModel');

function Room(name, calendar) {
  var name = name;
  var calendar = calendar;

  function getCalendar() {
    return Object.assign([], calendar);
  }

  function getName() {
    return name;
  }

  function toDto(){
    return new RoomDto({name, calendar: calendar.toDto()});
  }

  return {
    getCalendar: getCalendar,
    getName: getName,
    toDto: toDto
  }

}
module.exports = Room;