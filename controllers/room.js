const Room = require('../models/Room');

// Create Room
const createRoom = async (req, res) => {
  try {
    const { title, price, maxPeople, desc, roomNumber } = req.body;

    const room = await Room.create({ title, price, maxPeople, desc, roomNumber });
    res.status(201).json({
      data: room,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

//UpdateRoom
const updateRoom = async (req, res) => {
  try {
    const { title, price, maxPeople, desc, roomNumber } = req.body;
    const { id } = req.params;

    const room = await Room.findByIdAndUpdate(
      id,
      { title, price, maxPeople, desc, roomNumber},
      { new: true, }
    );

    if (!room) {
      res.status(404).json({ msg: "I don't know this room :(" });
    } else {
      res
        .status(200)
        .json({ msg: "Room updated successfully", data: room });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

//Delete Room
const deleteOneRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findByIdAndDelete(id);

    if (!room) {
      res.status(404).json({ msg: "I don't know this room :(" });
    } else {
      res
        .status(200)
        .json({ msg: "Room removed successfully", data: room });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

//Get Room
const getOneRoom = async (req, res) => {
  try {
    const { id } = req.params;

    const room = await Room.findById(id);

    if (room) {
      return res.status(200).json({ data: room });
    }
    res.status(404).json({ msg: "I don't know this room :(" });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

// Get All Room
const getAllRooms = async (req, res) => {
  try {
    const room = await Room.find();
    if (!room.length) {
      res.status(200).json({ msg: "No rooms in the DB" });
    } else {
      res.status(200).json({
        data: room,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports ={ createRoom, updateRoom, deleteOneRoom, getOneRoom, getAllRooms };