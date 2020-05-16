const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { userSignUpValidation, userLoginValidation } = require("../validation");
const User = require("../models/user");
const config = require("../config");

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

exports.login = async (req, res) => {
  const tokenExpiration = 3600;
  const { error } = userLoginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Password or Email");

  //Check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Password or Email");

  //Create and assign jwt token
  const token = jwt.sign({ _id: user._id }, config.secret, {
    expiresIn: "1hr",
  });
  const userId = user._id;
  res.header("auth-token", token).send({ token, tokenExpiration, userId });
};

exports.signup = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  const emailLowerCase = req.body.email.toLowerCase();
  const user = new User({
    name: req.body.name,
    email: emailLowerCase,
    password: hashedPassword,
    dateOfBirth: req.body.dateOfBirth,
    address: req.body.address,
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

exports.updateUser = async (req, res) => {
  try {
    const updateById = await User.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json(updateById);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const userDeleted = await User.deleteOne({ _id: req.params.id });
    res.json(userDeleted);
  } catch (err) {
    res.json({ message: err });
  }
};
