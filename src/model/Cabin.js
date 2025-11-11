const mongoose = require("mongoose");

const cabinSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    maxCapacity: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Cabin || mongoose.model("Cabin", cabinSchema);
