const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    numGuests: { type: Number, required: true },
    numNights: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    cabinPrice: { type: Number, required: true },
    extraPrice: { type: Number, default: 0 },
    totalPrice: { type: Number, required: true },
    hasBreakfast: { type: Boolean, required: true },
    isPaid: { type: Boolean, required: true },
    observations: { type: String },
    cabinId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cabin",
      required: true,
    },
    guestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
      required: true,
    },
    status: {
      type: String,
      enum: ["confirmed", "unconfirmed", "completed", "cancelled"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
