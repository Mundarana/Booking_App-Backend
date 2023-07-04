const express = require("express");

const {
  createHotel,
  updateHotel,
  deleteOneHotel,
  getOneHotel,
  getAllHotels,
  uploadPhotos,
} = require("../controllers/hotel");

const api = express.Router();

api.route("/").post(createHotel).get(getAllHotels);
api.route("/:id").put(updateHotel).delete(deleteOneHotel).get(getOneHotel);

module.exports = api;
