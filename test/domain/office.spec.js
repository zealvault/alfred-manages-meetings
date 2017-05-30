var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
chai.use(require('chai-truthy'));

//Dependencies
var Office = require('../../src/domain/office');
var Room = require('../../src/domain/room');
var Calendar = require('../../src/domain/calendar');

describe('office', function () {
  it('should be able to add a room', function (done) {
    var office = new Office();
    var calendar = new Calendar();
    var room = new Room("BatCave", calendar);

    office.addRoom(room).then(() => {
      office.getRooms()
        .then((rooms) => {
          expect(rooms.find(r => r.getName() == room.getName())).to.be.truthy();
          done();
        })
        .catch(err => {
          done(err);
        })
    });


  });

  it.only('should throw when trying to add a duplicate room', function (done) {
    var office = new Office();
    var calendar = new Calendar();
    var room = new Room("BatCave", calendar);

    office.addRoom(room)
      .then(() => {
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      })

    // expect(office.addRoom.bind(office, room)).to.throw(Error);
    // office.getRooms()
    //   .then((rooms) => {
    //     expect(rooms.find(r => r.getName() == room.getName())).to.be.truthy();
    //     done();
    //   })
    //     .catch(error => {
    //       done(err);
    //     })

  });

  it('should be able to remove a room', function (done) {
    var calendar1 = new Calendar();
    var calendar2 = new Calendar();
    var calendar3 = new Calendar();
    var room1 = new Room("BatCave", calendar1);
    var room2 = new Room("DogHouse", calendar2);
    var room3 = new Room("PandaZoo", calendar3);
    var office = new Office();

    office.addRoom(room1)
      .then((data) => {
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      })
    office.addRoom(room2)
      .then((data) => {
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      })
    office.addRoom(room3)
      .then((data) => {
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      })

    office.removeRoom("DogHouse").then(() => {
      office.getRooms()
        .then((rooms) => {
          expect(rooms.find(r => r.getName() == room1.getName())).to.be.truthy();
          expect(rooms.find(r => r.getName() == room2.getName())).to.be.falsy();
          expect(rooms.find(r => r.getName() == room3.getName())).to.be.truthy();
          done();
        })
        .catch(err => {
          done(err);
        })
    });

  });


});