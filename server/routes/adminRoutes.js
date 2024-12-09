// routes/adminRoutes.js
const express = require('express');
const { protect, admin } = require('../middleware/auth');
const { getPendingBookings, approveBooking } = require('../controllers/adminController');
const router = express.Router();

router.get('/pending-bookings', protect, admin, getPendingBookings);
router.post('/approve/:id', protect, admin, approveBooking);

module.exports = router;
