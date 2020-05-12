const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  dateRequested: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  prescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("appointment", appointmentSchema);
