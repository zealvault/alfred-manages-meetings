function Room(name, calendar) {
  var name = name;
  var calendar = calendar;

  function getCalendar() {
    return Object.assign([], calendar);
  }

  function getName() {
    return name;
  }

  return {
    getCalendar: getCalendar,
    getName: getName
  }

}
module.exports = Room;