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

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    require: true,
  },
  distanceFromCityCenter: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: [RoomSchema],
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: String,
  },
});

module.exports = mongoose.model('Hotel', HotelSchema);