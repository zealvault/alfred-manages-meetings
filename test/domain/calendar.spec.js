var chai = require('chai');
var expect = chai.expect;
chai.should();

//Dependencies
var Office = require('../../src/domain/office');
var Room = require('../../src/domain/room');
var Calendar = require('../../src/domain/calendar');
var Slot = require('../../src/domain/slot');
var CalendarEvent = require('../../src/domain/calendarEvent');
var User = require('../../src/domain/user');


describe('calendar', function () {
  it('should book an event if time slot is available', function () {
    var calendar = new Calendar();
    var room = new Room("Big Room", calendar);
    var user = new User("bwayne@gmail.com", "shruti" );

    var startDate1 = new Date(2017, 05, 11, 3, 0, 0);
    var endDate1 = new Date(2017, 05, 11, 4, 0, 0);
    var slot1 = new Slot(startDate1, endDate1);

    var startDate2 = new Date(2017, 05, 11, 4, 0, 0);
    var endDate2 = new Date(2017, 05, 11, 5, 0, 0);
    var slot2 = new Slot(startDate2, endDate2);

    var event1 = new CalendarEvent("title1", "description1", slot1,user);
    var event2 = new CalendarEvent("title2", "description2", slot2,user);

    room.getCalendar().addEvent(event1);
    room.getCalendar().addEvent(event2);

    room.getCalendar().getEvents().length.should.equal(2);
    room.getCalendar().getEvents()[0].title.should.equal("title1");
    room.getCalendar().getEvents()[0].description.should.equal("description1");
    room.getCalendar().getEvents()[0].createdBy.userId.should.equal("bwayne@gmail.com");
    room.getCalendar().getEvents()[0].createdBy.userName.should.equal("shruti");

    room.getCalendar().getEvents()[1].title.should.equal("title2");
    room.getCalendar().getEvents()[1].description.should.equal("description2");
    room.getCalendar().getEvents()[1].createdBy.userId.should.equal("bwayne@gmail.com");
    room.getCalendar().getEvents()[1].createdBy.userName.should.equal("shruti");
  });

  it('should throw if time slot is unavailable', function () {
    var calendar = new Calendar();
    var room = new Room("Big Room", calendar);
    var user = new User("bwayne@gmail.com", "shruti");

    var startDate1 = new Date(2017, 05, 11, 3, 0, 0);
    var endDate1 = new Date(2017, 05, 11, 4, 0, 0);
    var slot1 = new Slot(startDate1, endDate1);

    var startDate2 = new Date(2017, 05, 11, 3, 30, 0);
    var endDate2 = new Date(2017, 05, 11, 4, 30, 0);
    var slot2 = new Slot(startDate2, endDate2);

    var event1 = new CalendarEvent("title1", "description1", slot1,user);
    var event2 = new CalendarEvent("title2", "description2", slot2,user);

    room.getCalendar().addEvent(event1);

    expect(room.getCalendar().addEvent.bind(room, event2)).to.throw(Error);

    room.getCalendar().getEvents().length.should.equal(1);
    room.getCalendar().getEvents()[0].title.should.equal("title1");
    room.getCalendar().getEvents()[0].description.should.equal("description1");
    room.getCalendar().getEvents()[0].createdBy.userId.should.equal("bwayne@gmail.com");
    room.getCalendar().getEvents()[0].createdBy.userName.should.equal("shruti");

  });



  it('should return true when requested time slot is available', function () {
    var calendar = new Calendar();
    var user = new User("shruti", "bwayne@gmail.com");
    var room = new Room("Beach", calendar);
    var startDate = new Date(2017, 05, 11, 3, 24, 0);
    var endDate = new Date(2017, 05, 11, 4, 24, 0);
    var slot = new Slot(startDate, endDate);
    var event = new CalendarEvent("title", "description", slot,user);

    var status = room.getCalendar().isAvailable(slot);

    status.should.equal(true);

  });

  it('should return false when requested time slot is unavailable', function () {
    var calendar = new Calendar();
    var user = new User("shruti", "bwayne@gmail.com");
    var room = new Room("Beach", calendar);
    var startDate1 = new Date(2017, 05, 11, 3, 0, 0);
    var endDate1 = new Date(2017, 05, 11, 4, 0, 0);

    var startDate2 = new Date(2017, 05, 11, 3, 30, 0);
    var endDate2 = new Date(2017, 05, 11, 5, 0, 0);

    var startDate3 = new Date(2017, 05, 11, 2, 30, 0);
    var endDate3 = new Date(2017, 05, 11, 3, 30, 0);

    var slot1 = new Slot(startDate1, endDate1);
    var event1 = new CalendarEvent("title1", "description1", slot1,user);

    var slot2 = new Slot(startDate2, endDate2);
    var slot3 = new Slot(startDate3, endDate3);

    room.getCalendar().addEvent(event1);

    var status = room.getCalendar().isAvailable(slot2);

    status.should.equal(false);

    var status = room.getCalendar().isAvailable(slot3);

    status.should.equal(false);

  });

  it('should unbook an event', function () {
    var calendar = new Calendar();
    var room = new Room("Beach", calendar);
    var user = new User("bwayne@gmail.com", "shruti");

    var startDate1 = new Date(2017, 05, 11, 3, 0, 0);
    var endDate1 = new Date(2017, 05, 11, 4, 0, 0);

    var startDate2 = new Date(2017, 05, 11, 5, 0, 0);
    var endDate2 = new Date(2017, 05, 11, 6, 0, 0);

    var startDate3 = new Date(2017, 05, 11, 8, 0, 0);
    var endDate3 = new Date(2017, 05, 11, 9, 0, 0);

    var slot1 = new Slot(startDate1, endDate1);
    var event1 = new CalendarEvent("title1", "description1", slot1, user);

    var slot2 = new Slot(startDate2, endDate2);
    var event2 = new CalendarEvent("title2", "description2", slot2, user);

    var slot3 = new Slot(startDate3, endDate3);
    var event3 = new CalendarEvent("title3", "description3", slot3, user);

    room.getCalendar().addEvent(event1);
    room.getCalendar().addEvent(event2);
    room.getCalendar().addEvent(event3);


    //when
    room.getCalendar().removeEvent(event2.id);

    //then
    room.getCalendar().getEvents().length.should.equal(2);

    room.getCalendar().getEvents()[0].title.should.equal("title1");
    room.getCalendar().getEvents()[0].description.should.equal("description1");

    room.getCalendar().getEvents()[1].title.should.equal("title3");
    room.getCalendar().getEvents()[1].description.should.equal("description3");

  });

});