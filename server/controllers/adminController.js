// controllers/adminController.js
const Booking = require('../models/Booking');
const Club = require('../models/Club');
const Slot = require('../models/Slot');

exports.getPendingBookings = async (req, res) => {
  const pendingBookings = await Booking.find({ approved: false }).populate('club');
  res.send(pendingBookings);
};

exports.approveBooking = async (req, res) => {
  const { bookingId } = req.body; // Expecting booking ID in the request body
  const booking = await Booking.findById(bookingId).populate('club slot'); // Populate to get club and slot details

  if (!booking) return res.status(404).send('Booking not found.');

  // Check if the club has enough credits
  const club = await Club.findById(booking.club._id);
  if (!club) return res.status(404).send('Club not found.');
  if (club.credits <= 0) return res.status(403).send('Insufficient credits to approve booking.');

  // Approve the booking
  booking.approved = true;
  await booking.save();

  // Mark the corresponding slot as booked
  const slot = await Slot.findById(booking.slot._id);
  if (slot) {
    slot.booked = true; // Slot is confirmed
    slot.booking = booking._id; // Reference to the approved booking
    await slot.save();
  }

  // Reduce credits for the club
  club.credits -= 1; // Deduct one credit
  await club.save();

  res.send({ message: 'Booking approved successfully.' });
};

exports.getPendingBookingsForSlot = async (req, res) => {
  const { slotId } = req.params; // Get slot ID from the URL
  const pendingBookings = await Booking.find({ slot: slotId, approved: false }).populate('club');

  if (!pendingBookings.length) {
    return res.status(404).send('No pending bookings for this slot.');
  }

  res.send(pendingBookings);
};

// Fetch all pending bookings for admin review
exports.getAllPendingBookings = async (req, res) => {
  const pendingBookings = await Booking.find({ approved: false }).populate('club slot');

  if (!pendingBookings.length) {
    return res.status(404).send('No pending bookings.');
  }

  res.send(pendingBookings);
};