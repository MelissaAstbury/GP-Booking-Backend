// const mongoose = require("mongoose");

const Prescription = require("../models/prescription");

exports.getAllPrescriptions = async (req, res) => {
  try {
    const allPrescriptions = await Prescription.find();
    res.json(allPrescriptions);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.createPrescription = async (req, res) => {
  const { name, quantity, notes } = req.body.prescriptionInfo;
  console.log(req.body);
  const prescription = new Prescription({
    name: name,
    quantity: quantity,
    notes: notes,
  });
  try {
    const prescriptionCreated = await prescription.save();
    res.json({
      message: "Prescription Created Successfully",
      prescription: {
        id: prescriptionCreated._id,
      },
    });
  } catch (err) {
    res.json({ message: `Creating Prescription Failed, ${err}` });
  }
};
