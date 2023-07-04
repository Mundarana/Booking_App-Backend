const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbinit");
const userRoutes = require("./routes/user");
const postsRoute = require("./routes/posts");
const hotelRoute = require('./routes/hotel');
const roomRoute = require('./routes/room');

const PORT = process.env.PORT;
app.use(cors());

connectDB();

// Necessary middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Express/JWT");
});

app.use("/user", userRoutes);
app.use("/posts", postsRoute);
app.use("/hotels", hotelRoute);
app.use("/rooms", roomRoute);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
