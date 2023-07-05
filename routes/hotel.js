const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const {
  createHotel,
  updateHotel,
  deleteOneHotel,
  getOneHotel,
  getAllHotels,
  uploadPhotos,
} = require("../controllers/hotel");

const api = express.Router();

api.route("/").get(getAllHotels);

api.use(requireAuth);

api.route("/").post(createHotel);
api.route("/:id").put(updateHotel).delete(deleteOneHotel).get(getOneHotel);

module.exports = api;
