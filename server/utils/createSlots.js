const Slot = require('../models/Slot');

const createSlotsForWeek = async () => {
  try {
    await Slot.deleteMany({}); // Clear existing slots
    console.log("Existing slots cleared.");

    const rooms = ['C1', 'C2', 'C3'];
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay())); // Start of this week

    for (let day = 0; day < 7; day++) {
      for (let hour = 8; hour < 22; hour++) { // 8 AM to 10 PM
        const slotCreationPromises = [];

        for (const room of rooms) {
          const startTime = new Date(startOfWeek);
          startTime.setDate(startOfWeek.getDate() + day);
          startTime.setHours(hour, 0, 0, 0);

          const endTime = new Date(startTime);
          endTime.setMinutes(endTime.getMinutes() + 30); // 30-minute slot

          // Prepare the slot creation promise
          slotCreationPromises.push(createSlot({ room, startTime, endTime }));
        }

        // Execute all slot creation promises concurrently
        await Promise.all(slotCreationPromises);
      }
    }

    console.log("Slots for the week created successfully.");
  } catch (error) {
    console.error("Error creating slots:", error);
  }
};

const createSlot = async (slotData) => {
  try {
    const slot = new Slot(slotData);
    await slot.save();
    console.log(`Slot created for ${slotData.room} at ${slotData.startTime}`);
  } catch (error) {
    if (error.code === 11000) {
      console.warn("Duplicate slot detected, skipping:", slotData.startTime);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

module.exports = createSlotsForWeek;
