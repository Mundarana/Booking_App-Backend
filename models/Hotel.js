const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    roomTitle: {
      type: String, // Rooms type
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomDesc: {
      type: String,
      required: true,
    },
    // roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}], please delete. The number of available rooms and their availability dates should be in the hotel schema. (Add that at the end or even after the bootcamp, because it's not part of the MVP)
  },
  { timestamps: true }
);

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,  //name ot the Ohner
    required: true,
  },
  typeOfProperty: {
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
    type: String, // name the Place
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
});

module.exports = mongoose.model('Hotel', HotelSchema);