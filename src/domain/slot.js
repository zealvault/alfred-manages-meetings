var SlotDto = require('../repository/slotModel');

function Slot(startsAt, endsAt) {
  var startsAt = startsAt;
  var endsAt = endsAt;

  function fallsInSlot(slotToBook) {
    return ((slotToBook.startsAt >= startsAt && slotToBook.startsAt < endsAt) ||
      (slotToBook.endsAt > startsAt && slotToBook.endsAt <= endsAt))
  }

  function toDto(){
    return new SlotDto({startsAt,endsAt});
  }

  return {
    startsAt: startsAt,
    endsAt: endsAt,
    fallsInSlot: fallsInSlot,
    toDto: toDto
  }
}

module.exports = Slot;