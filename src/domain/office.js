var Office = function(rooms = []){

  var rooms = rooms;

  function add(room){
    if (rooms.find(r => r.name == room.name)) {
      throw new Error(`Room with name ${room.name} is already present.`);
    } else {
      rooms.push(room);
    }
  }

  function remove(room){
    rooms = rooms.filter(r => r.name != room.name);
  }

  function getRooms(){
    return Object.assign([], rooms);
  }

  return {
    addRoom: add,
    getRooms: getRooms,
    removeRoom:remove
  }
}

module.exports = Office;