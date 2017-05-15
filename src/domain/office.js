var Office = function (rooms = []) {

  var rooms = rooms;

  function add(room) {
    if (rooms.find(r => r.getName() == room.getName())) {
      throw new Error(`Room with name ${room.getName()} is already present.`);
    } else {
      rooms.push(room);
    }
  }

  function remove(room) {
    rooms = rooms.filter(r => r.getName() != room.getName());
  }

  function getRooms() {
    return Object.assign([], rooms);
  }

  return {
    addRoom: add,
    getRooms: getRooms,
    removeRoom: remove
  }
}

module.exports = Office;