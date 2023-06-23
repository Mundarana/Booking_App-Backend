const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    // roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}], please delete. The number of available rooms and their availability dates should be in the hotel schema. (Add that at the end or even after the bootcamp, because it's not part of the MVP)
  },
  { timestamps: true }
);

module.exports = mongoose.model('Room', RoomSchema);