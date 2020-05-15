const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//   },
// });

const appointmentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 4,
    max: 50,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  dateRequested: {
    type: Date,
    required: true,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
    min: 25,
    max: 500,
  },
  notes: {
    type: String,
    required: true,
    min: 25,
    max: 500,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    // userSchema,
  },
  prescription: [
    {
      name: String,
      description: String,
      price: Number,
      required: false,
    },
  ],
});

module.exports = mongoose.model("appointment", appointmentSchema);
