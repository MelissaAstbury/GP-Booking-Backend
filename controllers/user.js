const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(401).json({
        message: "Users Not Found!",
      });
    }
    console.log("Here are your users");
    return res.json(users);
  });
};

exports.createUser = (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const emailLowerCase = req.body.email.toLowerCase();
    const user = new User({
      name: req.body.name,
      email: emailLowerCase,
      password: hash,
      dateOfBirth: req.body.dateOfBirth,
      address: req.body.address,
      dateCreated: req.body.dateCreated,
      role: req.body.role,
    });
    user
      .save()
      .then((createdUser) => {
        res.status(200).json({
          message: "User added Successfully",
          user: {
            ...createdUser,
            id: createdUser._id,
          },
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Creating User Failed!",
        });
      });
  });
};
