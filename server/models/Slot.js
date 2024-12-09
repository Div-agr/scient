const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  room: { type: String, required: true },
  startTime: { type: Date, required: true, unique: true },
  endTime: { type: Date, required: true },
  booked: { type: Boolean, default: false },
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
});

module.exports = mongoose.model('Slot', slotSchema);