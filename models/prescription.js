const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("prescription", prescriptionSchema);
