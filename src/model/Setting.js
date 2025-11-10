const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    maxBookingLength: { type: Number, required: true },
    minBookingLength: { type: Number, required: true },
    maxGuestsPerBooking: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Setting || mongoose.model("Setting", settingsSchema);
