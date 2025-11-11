const express = require("express");
const {
  getBookings,
  getBooking,
  createBooking,
  getBookedDates,
  updateBooking,
  deleteBooking,
} = require("../controller/booking.controller");

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings); // <-- more specific first

router.get("/:id/booked/dates", getBookedDates);
router.patch("/:id/update", updateBooking);
router.delete("/:id/delete", deleteBooking);
router.get("/:id", getBooking);

module.exports = router;
