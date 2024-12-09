// controllers/bookingController.js
const Booking = require("../models/Booking");
const Slot = require("../models/Slot");
const Club = require("../models/Club");
const sendApprovalEmail = require("../utils/email");

exports.createBooking = async (req, res) => {
  const { slotTime, reason, room } = req.body; // Expecting slotTime, reason, and room in the request body
  const currentTime = new Date();

  try {
    // Check if the booking time is at least 1 hour in the future
    if (new Date(slotTime) < new Date(currentTime.getTime() + 60 * 60 * 1000)) {
      return res.status(400).json({ message: "Booking must be at least 1 hour in the future." });
    }

    // Find the slot for the requested time and room
    const slot = await Slot.findOne({ startTime: slotTime, room });
    if (!slot) return res.status(404).json({ message: "Slot not found." });
    if (slot.booked) return res.status(403).json({ message: "Slot is already booked." });

    // Find the club making the booking request
    const club = await Club.findById(req.club._id);
    if (!club) return res.status(404).json({ message: "Club not found." });

    // Check if the club has sufficient credits
    if (club.credits <= 0 && club.name !== "Scient") {
      return res.status(403).json({ message: "Insufficient credits to make a booking." });
    }

    // Create the booking
    const booking = new Booking({
      club: club._id,
      slotTime,
      reason,
      approved: false,
      slot: slot._id, // Associate the slot with the booking
    });
    await booking.save();

    // Deduct a credit for the club (unless it's the "Scient" club with unlimited credits)
    if (club.name !== "Scient") {
      club.credits -= 1;
      await club.save();
    }

    // Mark the slot as booked and associate it with the booking
    slot.booked = true;
    slot.booking = booking._id;
    await slot.save();

    // Send approval email (assuming sendApprovalEmail is defined to handle this)
    sendApprovalEmail(club.name, slotTime, reason);

    res.json({ message: "Booking request created, awaiting approval." }); // Send JSON success response
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "An error occurred while creating the booking." }); // Send JSON error response
  }
};


exports.cancelBooking = async (req, res) => {
  const bookingId = req.params.id; // Assuming booking ID is passed in the URL
  const booking = await Booking.findById(bookingId).populate("club"); // Populate to get club details if needed

  if (!booking) return res.status(404).send("Booking not found.");

  // Check if the cancellation is allowed (1 hour before slot time)
  const currentTime = new Date();
  const slotStartTime = new Date(booking.slotTime);

  if (currentTime >= new Date(slotStartTime - 60 * 60 * 1000)) {
    return res
      .status(400)
      .send("Cancellation allowed only up to 1 hour before slot start.");
  }

  // Find the corresponding slot and mark it as available
  const slot = await Slot.findOne({ booking: bookingId });
  if (slot) {
    slot.booked = false; // Free the slot
    slot.booking = null; // Clear the reference to the booking
    await slot.save();
  }

  await booking.remove(); // Remove the booking
  res.send({ message: "Booking cancelled successfully." });
};

exports.getBookingHistory = async (req, res) => {
  const clubId = req.club._id;  // Assuming club information is available via auth middleware
  
  const bookings = await Booking.find({ club: clubId }).populate('slot');

  if (!bookings.length) {
    return res.status(404).send('No past bookings found.');
  }

  res.send(bookings);
};