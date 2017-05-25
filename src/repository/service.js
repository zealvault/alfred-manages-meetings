var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Room = require('./roomModel');

function Service() { //TODO: accepting URL from constructor

  var dbUrl = "mongodb://localhost/office"
  var conn = mongoose.connect(dbUrl);
  mongoose.set('debug', true);


  function insertRoom(room) {

    return new Promise((resolve, reject) => {
      conn
        .then(() => {
          room.save()
            .then(() => {
              resolve("Data is saved");
            })
            .catch((error) => {
              reject(error);
            })
        })
        .catch((error) => {
          reject(error);
        })

    });

  }

  function removeRoom(roomName) {
    return new Promise((resolve, reject) => {
      conn
        .then(() => {
          Room.remove({
              name: roomName
            })
            .then(() => {
              resolve(`${roomName} deleted`);
            })
            .catch(() => {
              reject(`Unable to delete ${roomName}`);
            })
        })
        .catch(() => {
          reject("Connection Failed");
        })

    });
  }

  function addEvent(event, roomName) {
    return new Promise((resolve, reject) => {
      conn
        .then(() => {
          Room.findOneAndUpdate({
              "name": roomName
            }, {
              $push: {
                "calendar.events": event
              }
            }, {
              safe: true,
              upsert: true
            },
            function (err, data) {
              if (err) {
                reject(err);
              } else {
                resolve("Event is saved", data);
              }
            }
          );
        });
    });
  }

  function removeEvent(eventId, roomName) {
    return new Promise((resolve, reject) => {
      conn
        .then(() => {
          Room.findOneAndUpdate({
              "name": roomName
            }, {
              $pull: {
                "calendar.events": {
                  id: eventId
                }
              },
            }, {
              safe: true,
              upsert: true
            },
            function (err, data) {
              if (err) {
                reject(err);
              } else {
                resolve("Event is removed", data);
              }
            }
          );
        });
    });
  }

  return {
    insertRoom: insertRoom,
    removeRoom: removeRoom,
    addEvent: addEvent,
    removeEvent: removeEvent
  }

}
module.exports = Service;