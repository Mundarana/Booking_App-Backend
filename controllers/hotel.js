const Hotel = require("../models/Hotel");
const Photo = require("../models/Photo");
const { trace } = require("../routes/hotel");

// Create Hotel
const createHotel = async (req, res) => {
  console.log("req.body", req.body);
  try {
    const user_id = req.user.user_id
    console.log("USER ID", user_id)
    const {
      name,
      typeOfProperty,
      city,
      address,
      telephone,
      distanceFromCityCenter,
      photos,
      title,
      desc,
      rating,
      cheapestPrice,
      featured,
    } = req.body;

    const rooms = req.body.rooms.map((room) => ({
      roomTitle: room.title,
      price: room.price,
      maxPeople: room.maxPeople,
      roomDesc: room.desc,
    }));

    const hotel = await Hotel.create({
      name,
      typeOfProperty,
      city,
      address,
      telephone,
      distanceFromCityCenter,
      photos,
      title,
      desc,
      rating,
      rooms,
      cheapestPrice,
      featured,
    });

    // Call the uploadPhotos controller here, passing the hotel ID
    // await uploadPhotos(req, res, hotel._id);

    res.status(201).json({
      data: hotel,
    });
    console.log("AT THE ENDDD");
  } catch (error) {
    console.log("ERROOOORRRRRR");
    res.status(500).json({
      error,
    });
  }
};

//Update Hotel
const updateHotel = async (req, res) => {
  try {
    const {
      name,
      type,
      city,
      address,
      telephone,
      distanceFromTranspotation,
      photos,
      title,
      desc,
      rating,
      cheapestPrice,
      featured,
      room,
    } = req.body;

    const { id } = req.params;

    const hotel = await Hotel.findById(id);

    if (!hotel) {
      return res.status(404).json({ msg: "I don't know this hotel :(" });
    }

    // const uploadPhotos = async (req. res) => {
    //   try {
    //     if (req.file && req.file.path) {
    //       const photos = new Photos ({
    //         url: req.file.path,
    //       });

    //       await photos.save();
    //       return res.status(200).json({msg: "saved Successfully"});
    //     } eles {
    //       return res.status(422).json({error})
    //     }
    //   } catch (error) {
    //     return res.status(500).json({errpr})
    //   }
    // };

    // Update hotel fields
    hotel.name = name;
    hotel.type = type;
    hotel.city = city;
    hotel.address = address;
    hotel.telephone = telephone;
    hotel.distanceFromTranspotation = distanceFromTranspotation;
    hotel.photos = photos;
    hotel.title = title;
    hotel.desc = desc;
    hotel.rating = rating;
    hotel.cheapestPrice = cheapestPrice;
    hotel.featured = featured;

    // Add new rooms to the existing araay of rooms

    // if(roomsToAdd && Array.isArray(roomsToAdd)) {
    //   roomsToAdd.forEach((room) => {
    //     hotel.rooms.push({
    //       title: room.title,
    //       price: room.price,
    //       maxPeople: room.maxPeople,
    //       desc: room.desc
    //     });
    //   });
    // }

    const newRoom = {
      title: room.title,
      price: room.price,
      maxPeople: room.maxPeople,
      desc: room.desc,
    };

    hotel.rooms.push(newRoom);

    const updatedHotel = await hotel.save();

    res.status(200).json({
      msg: "Hotel updated",
      data: updatedHotel,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
const uploadPhotos = async (req, res, hotelId) => {
  try {
    if (req.file && req.file.path) {
      const photos = new Photo({
        name: req.file.name,
        url: req.file.path,
        hotel: hotelId,
      });

      await photos.save();
      return res.status(200).json({ msg: "saved Successfully" });
    } else {
      return res.status(422).json({ error });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

//Delete Hotel
const deleteOneHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await Hotel.findByIdAndDelete(id);

    if (!hotel) {
      res.status(404).json({ msg: "I don't know this hotel :(" });
    } else {
      res.status(200).json({ msg: "Hotel removed successfully", data: hotel });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

//Get Hotel
const getOneHotel = async (req, res) => {
  try {
    const { id } = req.params;

    const hotel = await Hotel.findById(id);

    if (hotel) {
      return res.status(200).json({ data: hotel });
    }
    res.status(404).json({ msg: "I don't know this hotel :(" });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

// Get All Hotel
const getAllHotels = async (req, res) => {
  try {
    const hotel = await Hotel.find();
    if (!hotel.length) {
      res.status(200).json({ msg: "No hotels in the DB" });
    } else {
      res.status(200).json({
        data: hotel,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  createHotel,
  updateHotel,
  deleteOneHotel,
  getOneHotel,
  getAllHotels,
  uploadPhotos,
};
