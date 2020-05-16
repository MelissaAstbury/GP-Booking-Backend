const mongoose = require("mongoose");
const uniqueVal = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now,
  },
  role: {
    type: String,
    required: true,
  },
});

userSchema.plugin(uniqueVal);

module.exports = mongoose.model("user", userSchema);
