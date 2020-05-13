const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getUserByID = async (req, res) => {
  try {
    const allUsersById = await User.findById(req.params.id);
    res.json(allUsersById);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.createUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  const emailLowerCase = req.body.email.toLowerCase();
  const user = new User({
    name: req.body.name,
    email: emailLowerCase,
    password: hashedPassword,
    dateOfBirth: req.body.dateOfBirth,
    address: req.body.address,
    dateCreated: req.body.dateCreated,
    role: req.body.role,
  });
  try {
    const userCreated = await user.save();
    res.json({
      message: "Created User Successfully",
      user: {
        userCreated,
        id: userCreated._id,
      },
    });
  } catch (err) {
    res.json({ message: `Creating User Failed, ${err}` });
  }
};
