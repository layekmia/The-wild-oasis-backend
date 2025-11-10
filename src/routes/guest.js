const express = require("express");
const { getGuest } = require("../controller/guest.controller");

const router = express.Router();

router.get("/guests", getGuest);

module.exports = router;
