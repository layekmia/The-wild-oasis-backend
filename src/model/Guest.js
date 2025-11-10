const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema(
  {
    fullName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    nationalID: { type: String, default: null },
    countryFlag: { type: String, default: null },
    nationality: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Guest || mongoose.model("Guest", guestSchema);
