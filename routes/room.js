const express = require('express');

const { createRoom, updateRoom, deleteOneRoom, getAllRooms, getOneRoom} = require('../controllers/room');

const api = express.Router();

api.route('/').post(createRoom).get(getAllRooms);
api.route('/:id').put(updateRoom).delete(deleteOneRoom).get(getOneRoom);

module.exports = api