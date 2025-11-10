const Guest = require("../model/Guest");

exports.getGuest = async (req, res) => {
  const guests = await Guest.find();

  return res.status(201).json(guests);
};
