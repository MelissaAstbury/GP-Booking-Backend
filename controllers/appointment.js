const mongoose = require("mongoose");

const Appointment = require("../models/appointment");

exports.getAllAppointments = async (req, res) => {
  try {
    const allAppointments = await Appointment.find();
    res.json(allAppointments);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getAppointmentByCreatorID = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      creator: { $in: [mongoose.Types.ObjectId(req.params.id)] },
    });
    res.json(appointments);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const updateAppointmentById = await Appointment.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json(updateAppointmentById);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.createAppointment = async (req, res) => {
  const appointment = new Appointment({
    title: req.body.title,
    appointmentDate: req.body.appointmentDate,
    description: req.body.description,
    notes: req.body.notes,
    prescription: req.body.prescription,
    creator: mongoose.Types.ObjectId(req.body.userId),
  });
  try {
    const appointmentCreated = await appointment.save();
    res.json({
      message: "Created Appointment Successfully",
      appointment: {
        appointmentCreated: appointmentCreated,
        id: appointmentCreated._id,
      },
    });
  } catch (err) {
    res.json({ message: `Creating Appointment Failed, ${err}` });
  }
};

exports.deleteAppointmentById = async (req, res) => {
  try {
    const appointmentDeleted = await Appointment.deleteOne({
      _id: req.params.id,
    });
    res.json(appointmentDeleted);
  } catch (err) {
    res.json({ message: err });
  }
};
