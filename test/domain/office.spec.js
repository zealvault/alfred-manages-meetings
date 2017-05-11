var chai = require('chai');
var expect = chai.expect;
chai.should();

//Dependencies
var Office = require('../../src/domain/office');
var Room = require('../../src/domain/room');

describe('office', function () {
  it('should be able to add a room', function () {
    var office = new Office();
    var room = new Room("BatCave");

    office.addRoom(room);

    office.getRooms().length.should.equal(1);
    office.getRooms()[0].name.should.equal("BatCave");
  });

  it('should throw when trying to add a duplicate room', function () {
    var office = new Office();
    var room = new Room("BatCave");

    office.addRoom(room);

    expect(office.addRoom.bind(office,room)).to.throw(Error);
    office.getRooms().length.should.equal(1);
    office.getRooms()[0].name.should.equal("BatCave");
  });

   it('should be able to remove a room', function () {
    var room1 = new Room("BatCave");
    var room2 = new Room("DogHouse");
    var room3 = new Room("PandaZoo");
    var rooms = [room1,room2,room3];
    var office = new Office(rooms);

    office.removeRoom(room2);

    office.getRooms().length.should.equal(2);
    office.getRooms()[0].name.should.equal("BatCave");
    office.getRooms()[1].name.should.equal("PandaZoo");
  });

});