var chai = require('chai');
var expect = chai.expect;
chai.should();
var Service = require('../../src/repository/service');
var Room = require('../../src/repository/roomModel');

describe('mongo repository', function () {
  // it('should add an event', function (done) {

  //  var event = {
  //         id: "12341234",
  //         title: "Standup",
  //         description: "informa",
  //         slot: {
  //           startsAt: new Date,
  //           endsAt: new Date
  //         },
  //         createdBy: {
  //           userId: "ssingh@ee.com",
  //           userName: "shruti"
  //         }
  //       }

  //   var service = new Service();

  //   service.addEvent(event,"Beach2")
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err))
  //     .then(() => done());
  // });

  // it('should remove an event', function (done) {
  //   var service = new Service();

  //   service.removeEvent("12341234","Beach2")
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err))
  //     .then(() => done());
  // });

  // it('should insert a room document', function (done) {
  //   var beach = new Room({
  //     name: "Beach",
  //     calendar: {
  //       events: [{
  //         id: "Some Id",
  //         title: "Some title",
  //         description: "Some Description",
  //         slot: {
  //           startsAt: "Some Date",
  //           endsAt: "Some Date"
  //         },
  //         createdBy: {
  //           userId: "vsingh@ee.com",
  //           userName: "vishal"
  //         }
  //       }]
  //     }
  //   });

  //   var service = new Service();
     
  //   service.insertRoom(beach)
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err))
  //     .then(() => done());
  // });

  // it('should remove a room document', function (done) {

  //   var service = new Service();

  //   service.removeRoom("Beach")
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err))
  //     .then(() => done());
  // });
});