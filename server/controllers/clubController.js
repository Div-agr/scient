// controllers/clubController.js
const Club = require('../models/Club');
const Slot = require("../models/Slot");

exports.getCredits = async (req, res) => {
  const club = await Club.findById(req.club._id);
  res.send({name:club.name, credits: club.credits });
};

exports.resetCredits = async () => {
  await Club.updateMany({}, { $set: { credits: 7 } });
};

exports.getAvailableSlots = async (req, res) => {
  try {
    const { date, room } = req.query;

    // Check if both `date` and `room` are provided
    if (!date || !room) {
      return res.status(400).json({ message: "Date and room are required." });
    }

    // Ensure the date is a valid ISO string
    const startOfDay = new Date(date);
    if (isNaN(startOfDay)) {
      return res.status(400).json({ message: "Invalid date format." });
    }
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Fetch available slots from the database
    const availableSlots = await Slot.find({
      room,
      booked: false,
      startTime: { $gte: startOfDay, $lte: endOfDay },
    });

    // Return the available slots
    res.status(200).json({ slots: availableSlots });
  } catch (error) {
    console.error("Error fetching slots:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.getClubsData = async (req, res) => {
  try {
    const clubs = await Club.find(); // Fetch all clubs from the database
    res.status(200).json(clubs); // Return the data as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching clubs data" }); // Handle any server errors
  }
};
