const User = require("../models/User");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// login user
const loginUser = async (req, res) => {
  console.log('point1')
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    console.log('point2')

    //create token
    const token = createToken(user._id);
    console.log('point3')

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// sign up user
const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    //create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signUpUser };