var Service = require('../repository/service');
var Room = require('./room');
var mongoService = new Service();
var Office = function (rooms = []) {

  var rooms = rooms;

  function addRoom(room) {
    var roomsDomain = [];
    getRooms()
      .then((rooms) => {
        roomsDomain = rooms;
      })
    if (roomsDomain.indexOf(room.getName())) {
      throw new Error(`Room with name ${room.getName()} is already present.`);
    } else {
        return mongoService.insertRoom(room.toDto())
    }
  }
 
  function removeRoom(roomName) {
    return mongoService.removeRoom(roomName);
  }

  function getRooms() {
    var roomsDomain = [];
    var promise = new Promise((resolve,reject) => {
      mongoService.getRooms()
      .then((rooms) => {
        rooms.map(r => roomsDomain.push(new Room(r.name,{})));
        resolve(roomsDomain);
      })
      .catch((error) => {
        reject(error);
      })
    })

    return promise;
  }

  return {
    addRoom: addRoom,
    getRooms: getRooms,
    removeRoom: removeRoom
  }
}

module.exports = Office;