const express = require("express");
const {
  getBookings,
  getBooking,
  createBooking,
  getBookedDates,
  updateBooking,
  deleteBooking,
  updateStatus,
} = require("../controller/booking.controller");

const router = express.Router();

router.post("/", createBooking);
router.get("/:id/guest", getBookings);
router.get("/:id/booked/dates", getBookedDates);
router.patch("/:id/update", updateBooking);
router.patch("/:id/update/status", updateStatus);
router.delete("/:id/delete", deleteBooking);
router.get("/:id", getBooking);

module.exports = router;
