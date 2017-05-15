function Slot(startsAt, endsAt) {
  var startsAt = startsAt;
  var endsAt = endsAt;

  function fallsInSlot(slotToBook) {
    return ((slotToBook.startsAt >= startsAt && slotToBook.startsAt < endsAt) ||
      (slotToBook.endsAt > startsAt && slotToBook.endsAt <= endsAt))
  }

  return {
    startsAt: startsAt,
    endsAt: endsAt,
    fallsInSlot: fallsInSlot
  }
}

module.exports = Slot;