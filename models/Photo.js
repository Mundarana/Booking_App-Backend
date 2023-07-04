const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  photos: {
    type: [String],
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },
});

module.exports = mongoose.model("Photo", PhotosSchema);
