const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    roomTitle: {
      type: String, // Rooms type
    },
    price: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: String,
      required: true,
    },
    roomDesc: {
      type: String,
    },
    // roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}], please delete. The number of available rooms and their availability dates should be in the hotel schema. (Add that at the end or even after the bootcamp, because it's not part of the MVP)
  },
  { timestamps: true }
);

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,  //name ot the Hotel/Property
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
    type: String,
    require: true,
  },
  distanceFromCityCenter: {
    type: String,
    required: true,
  },
  photos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photo',
  }],
  title: {
    type: String, // name the Name and Title of the Ohner 
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  rooms: [RoomSchema],
  cheapestPrice: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Hotel', HotelSchema);