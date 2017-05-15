var chai = require('chai');
var expect = chai.expect;
chai.should();

//Dependencies
var Office = require('../../src/domain/office');
var Room = require('../../src/domain/room');
var Calendar = require('../../src/domain/calendar');

describe('office', function () {
  it('should be able to add a room', function () {
    var office = new Office();
    var calendar = new Calendar();
    var room = new Room("BatCave", calendar);

    office.addRoom(room);

    office.getRooms().length.should.equal(1);
    office.getRooms()[0].getName().should.equal("BatCave");
  });

  it('should throw when trying to add a duplicate room', function () {
    var office = new Office();
    var calendar = new Calendar();
    var room = new Room("BatCave", calendar);

    office.addRoom(room);

    expect(office.addRoom.bind(office, room)).to.throw(Error);
    office.getRooms().length.should.equal(1);
    office.getRooms()[0].getName().should.equal("BatCave");
  });

  it('should be able to remove a room', function () {
    var calendar1 = new Calendar();
    var calendar2 = new Calendar();
    var calendar3 = new Calendar();
    var room1 = new Room("BatCave", calendar1);
    var room2 = new Room("DogHouse", calendar2);
    var room3 = new Room("PandaZoo", calendar3);
    var rooms = [room1, room2, room3];
    var office = new Office(rooms);

    office.removeRoom(room2);

    office.getRooms().length.should.equal(2);
    office.getRooms()[0].getName().should.equal("BatCave");
    office.getRooms()[1].getName().should.equal("PandaZoo");
  });


});