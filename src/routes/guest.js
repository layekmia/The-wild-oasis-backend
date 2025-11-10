const express = require("express");
const {
  createGuest,
  getGuest,
  updateGuest,
} = require("../controller/guest.controller");

const router = express.Router();

// create a new guest
router.post("/", createGuest);
// get guest by email
router.get("/email/:email", getGuest);
// update guest by id
router.patch("/:id", updateGuest);

module.exports = router;
